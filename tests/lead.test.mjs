import { readFileSync } from 'node:fs';
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';
const source = ts.transpileModule(readFileSync(new URL('../app/api/lead/route.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { POST } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; for (const key of ['LEAD_WEBHOOK_URL','LEAD_WEBHOOK_TOKEN','UPSTASH_REDIS_REST_URL','UPSTASH_REDIS_REST_TOKEN']) delete process.env[key]; });
const valid = { name: 'Test Person', phone: '+9779802364638', email: 'test@example.com', message: 'Kitchen consultation', form_id: 'popup' };
const request = (body = valid, origin = 'https://www.growmoreinterior.com') => new Request('https://www.growmoreinterior.com/api/lead', { method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
function configure() { Object.assign(process.env, { LEAD_WEBHOOK_URL: 'https://leads.example.com', LEAD_WEBHOOK_TOKEN: 'test', UPSTASH_REDIS_REST_URL: 'https://redis.example.com', UPSTASH_REDIS_REST_TOKEN: 'test' }); }
test('rejects foreign origin, honeypot and malformed fields', async () => {
  assert.equal((await POST(request(valid, 'https://other.example'))).status, 403);
  assert.equal((await POST(request({ ...valid, website: 'spam' }))).status, 400);
  assert.equal((await POST(request({ ...valid, phone: '' }))).status, 400);
  assert.equal((await POST(request({ ...valid, form_id: 'other' }))).status, 400);
});
test('rejects oversized body and missing configuration', async () => {
  assert.equal((await POST(request({ ...valid, message: 'a'.repeat(17000) }))).status, 413);
  assert.equal((await POST(request())).status, 503);
});
test('only confirms after delivery and returns a unique lead id', async () => {
  configure(); const calls = [];
  globalThis.fetch = async (url, options) => { calls.push([url, options]); return url.includes('redis') ? Response.json({ result: 1 }) : new Response(null, { status: 204 }); };
  const response = await POST(request()); const result = await response.json();
  assert.equal(response.status, 200); assert.equal(result.success, true);
  assert.equal(calls.length, 3);
  const delivered = JSON.parse(calls[2][1].body);
  assert.equal(delivered.email, valid.email); assert.equal(delivered.lead_id, result.lead_id);
  assert.equal(calls[2][1].headers['Idempotency-Key'], result.lead_id);
});
test('rate limit blocks delivery', async () => {
  configure(); let count = 0;
  globalThis.fetch = async () => { count++; return Response.json({ result: 6 }); };
  assert.equal((await POST(request())).status, 429); assert.equal(count, 1);
});
test('provider failure and limiter failure cannot report success', async () => {
  configure();
  globalThis.fetch = async (url) => url.includes('redis') ? Response.json({ result: 1 }) : new Response(null, { status: 500 });
  assert.equal((await POST(request())).status, 502);
  globalThis.fetch = async () => Response.json({ error: 'unavailable' });
  assert.equal((await POST(request())).status, 502);
});
