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
    try {
      const form = new FormData(event.currentTarget);
      if (form.get("website")) throw new Error("Unable to submit this request.");
      form.delete("website");
      form.set("access_key", "b1df685b-580f-448b-9541-17754d63cbf7");
      form.set("subject", "New Grow More Interior enquiry");
      form.set("from_name", "Grow More Interior Website");
      form.set("form_id", formId);
      const leadId = crypto.randomUUID();
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.message || "Could not send your enquiry. Please try again.");
      trackEvent("generate_lead", { form_id: formId, lead_id: leadId });
      onSuccess?.();
      router.push("/thank-you");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Could not send your enquiry. Please call +9779802364638.");
      submitting.current = false; setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-busy={pending} className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Full Name
        <input name="name" minLength={2} maxLength={100} autoComplete="name" required className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="Your name" />
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
        <textarea name="message" required maxLength={3000} className="min-h-32 rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="Tell us about your space and design goals..." />
      </label>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="sm:col-span-2">
        {error && <div role="alert" className="mb-3 text-sm text-red-700">
          <p>{error}</p>
          <a href="https://wa.me/9779840801600" className="mt-2 inline-block font-semibold underline">Contact us on WhatsApp instead</a>
        </div>}
        <button type="submit" disabled={pending} className="rounded-md bg-[#C9A84C] px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-950 transition hover:bg-[#a8893c]">
          {pending ? "Sending…" : "Send Enquiry"}
        </button>
        <button
          type="button"
          className="ml-0 mt-3 rounded-md border border-[#1a1614]/20 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#1a1614] transition hover:bg-[#f7f4ee] sm:ml-3 sm:mt-0"
          onClick={(event) => {
            const element = event.currentTarget.form;
            if (!element || !element.reportValidity()) return;
            const details = new FormData(element);
            const message = [
              "Hi Grow More Interior, I would like to discuss my project.",
              `Name: ${details.get("name")}`,
              `Phone: ${details.get("phone")}`,
              `Email: ${details.get("email")}`,
              `Space: ${details.get("space")}`,
              `Message: ${details.get("message") || "Please contact me about a consultation."}`,
            ].join("\n");
            window.location.assign(`https://wa.me/9779840801600?text=${encodeURIComponent(message)}`);
          }}
        >Send via WhatsApp</button>
        <p className="mt-3 text-xs leading-6 text-gray-500">We use your details to respond to your enquiry. <Link href="/privacy-policy" className="underline">Read our privacy policy</Link>.</p>
      </div>
    </form>
  );
}
