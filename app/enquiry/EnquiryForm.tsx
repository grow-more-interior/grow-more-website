"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/tracking";

export default function EnquiryForm({ formId = "enquiry", onSuccess }: { formId?: "popup" | "enquiry"; onSuccess?: () => void }) {
  const router = useRouter();
  const submitting = useRef(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setPending(true); setError("");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(form), form_id: formId }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Could not send your enquiry.");
      trackEvent("generate_lead", { form_id: formId, lead_id: result.lead_id });
      onSuccess?.();
      router.push("/thank-you");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Could not send your enquiry. Please call +9779802364638.");
      submitting.current = false; setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Full Name
        <input name="name" maxLength={100} autoComplete="name" required className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="+977..." />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Email
        <input name="email" maxLength={254} autoComplete="email" type="email" required className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="you@email.com" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Space Type
        <select name="space" className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20">
          {["Living Room", "Bedroom", "Kitchen", "Bathroom", "Dining Room", "Corporate Office", "Retail Space", "Hospitality", "Outdoor Terrace", "Other"].map((space) => (
            <option key={space}>{space}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614] sm:col-span-2">
        Message
        <textarea name="message" maxLength={3000} className="min-h-32 rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="Tell us about your space and design goals..." />
      </label>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="sm:col-span-2">
        {error && <p role="alert" className="mb-3 text-sm text-red-700">{error}</p>}
        <button type="submit" disabled={pending} className="rounded-md bg-[#C9A84C] px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-950 transition hover:bg-[#a8893c]">
          {pending ? "Sending…" : "Send Enquiry"}
        </button>
        <p className="mt-3 text-xs leading-6 text-gray-500">We use your details to respond to your enquiry. <Link href="/privacy-policy" className="underline">Read our privacy policy</Link>.</p>
      </div>
    </form>
  );
}
