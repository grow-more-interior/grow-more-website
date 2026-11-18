import { createHash, randomUUID } from "node:crypto";

export const runtime = "nodejs";
const failure = (error: string, status: number) => Response.json({ error }, { status });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin !== new URL(request.url).origin) return failure("Invalid request origin.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return failure("JSON required.", 415);
  let body: Record<string, unknown>;
  try {
    // Limit the actual streamed body, not just the untrusted Content-Length header.
    const reader = request.body?.getReader();
    if (!reader) return failure("Missing request.", 400);
    const chunks: Uint8Array[] = []; let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16000) { await reader.cancel(); return failure("Request too large.", 413); }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!body || Array.isArray(body) || typeof body !== "object") return failure("Invalid request.", 400);
  } catch { return failure("Invalid request.", 400); }
  if (body.website) return failure("Unable to submit this request.", 400);
  const field = (name: string) => typeof body[name] === "string" ? body[name].trim() : "";
  const name = field("name"), phone = field("phone"), email = field("email").toLowerCase(), message = field("message"), space = field("space"), formId = field("form_id");
  if (name.length < 2 || name.length > 100 || !/^\+?[\d\s()-]{7,25}$/.test(phone) || phone.replace(/\D/g, "").length < 7 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length > 3000 || space.length > 100 || !["popup", "enquiry"].includes(formId)) return failure("Please check your name, phone, email and message.", 400);
  const { LEAD_WEBHOOK_URL, LEAD_WEBHOOK_TOKEN, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = process.env;
  if (!LEAD_WEBHOOK_URL || !LEAD_WEBHOOK_TOKEN || !UPSTASH_REDIS_REST_URL || !UPSTASH_REDIS_REST_TOKEN) return failure("Enquiries are temporarily unavailable. Please call +9779802364638.", 503);
  try {
    if (new URL(LEAD_WEBHOOK_URL).protocol !== "https:" || new URL(UPSTASH_REDIS_REST_URL).protocol !== "https:") throw new Error("HTTPS required");
    // Shared atomic rate limit survives serverless cold starts. Vercel overwrites x-real-ip.
    const ip = request.headers.get("x-real-ip") || "unknown";
    for (const identity of ["ip:" + ip, "email:" + email]) {
      const key = "lead:" + createHash("sha256").update(identity).digest("hex");
      const rate = await fetch(UPSTASH_REDIS_REST_URL, {
        method: "POST", headers: { Authorization: `Bearer ${UPSTASH_REDIS_REST_TOKEN}`, "Content-Type": "application/json" },
        body: JSON.stringify(["EVAL", "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n", "1", key]),
        signal: AbortSignal.timeout(5000), cache: "no-store",
      });
      const result = await rate.json();
      if (!rate.ok || result.error || typeof result.result !== "number") throw new Error("Rate limiter unavailable");
      if (result.result > 5) return failure("Too many enquiries. Please try again in 10 minutes or call us.", 429);
    }
    const leadId = randomUUID();
    const delivery = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${LEAD_WEBHOOK_TOKEN}`, "Idempotency-Key": leadId },
      body: JSON.stringify({ lead_id: leadId, name, phone, email, message, space, form_id: formId, received_at: new Date().toISOString() }),
      signal: AbortSignal.timeout(10000), cache: "no-store", redirect: "error",
    });
    if (!delivery.ok) throw new Error("Delivery failed");
    return Response.json({ success: true, lead_id: leadId });
  } catch { return failure("We could not confirm your enquiry. Please try again or call +9779802364638.", 502); }
}
