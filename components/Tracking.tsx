"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/tracking";

export default function Tracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element).closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const eventName = href.startsWith("tel:") ? "phone_click" : href.startsWith("mailto:") ? "email_click" : /^https:\/\/(wa.me|api.whatsapp.com)\//.test(href) ? "whatsapp_click" : null;
      if (eventName) trackEvent(eventName, { contact_method: eventName.replace("_click", "") });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <>
    <div className="fixed bottom-0 inset-x-0 z-[100] flex justify-center gap-8 bg-[#1a1614] p-3 text-white md:hidden">
      <a href="tel:+9779802364638" className="font-semibold">Call us</a>
      <a href="https://wa.me/9779840801600" className="font-semibold">WhatsApp</a>
    </div>
  </>;
}
