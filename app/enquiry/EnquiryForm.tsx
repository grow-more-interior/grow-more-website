"use client";

import { FormEvent } from "react";

export default function EnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name") || ""}`,
      `Phone: ${form.get("phone") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Space: ${form.get("space") || ""}`,
      "",
      `${form.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:info@growmoreinterior.com?subject=${encodeURIComponent("Grow More Design Consultation")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Full Name
        <input name="name" required className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="Your name" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Phone
        <input name="phone" className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="+977..." />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#1a1614]">
        Email
        <input name="email" type="email" required className="rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="you@email.com" />
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
        <textarea name="message" className="min-h-32 rounded-md border border-gray-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/20" placeholder="Tell us about your space and design goals..." />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="rounded-md bg-[#C9A84C] px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-950 transition hover:bg-[#a8893c]">
          Send Enquiry
        </button>
        <p className="mt-3 text-xs leading-6 text-gray-500">This opens your email client addressed to info@growmoreinterior.com.</p>
      </div>
    </form>
  );
}
