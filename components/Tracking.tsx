"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("consent-choice", callback);
  return () => { window.removeEventListener("storage", callback); window.removeEventListener("consent-choice", callback); };
}
function needsChoice() {
  try { return !["granted", "denied"].includes(localStorage.getItem("tracking-consent-v1") || ""); } catch { return true; }
}
type Consent = "granted" | "denied";
export default function Tracking() {
  const [visible, setVisible] = useState(false);
  const [choiceMade, setChoiceMade] = useState(false);
  const initialChoice = useSyncExternalStore(subscribe, needsChoice, () => false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = visible || (initialChoice && !choiceMade);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog?.open) dialog?.showModal();
    else if (!isOpen && dialog?.open) dialog.close();
  }, [isOpen]);
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element).closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const eventName = href.startsWith("tel:") ? "phone_click" : href.startsWith("mailto:") ? "email_click" : /^https:\/\/(wa.me|api.whatsapp.com)\//.test(href) ? "whatsapp_click" : null;
      if (eventName) trackEvent(eventName, { contact_method: eventName.replace("_click", "") });
    }
    document.addEventListener("click", onClick);
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => { document.removeEventListener("click", onClick); window.removeEventListener("open-cookie-settings", reopen); };
  }, []);
  function choose(value: Consent) {
    const target = window as Window & { gtag?: (...args: unknown[]) => void };
    target.gtag?.("consent", "update", { analytics_storage: value, ad_storage: value, ad_user_data: value, ad_personalization: value });
    try { localStorage.setItem("tracking-consent-v1", value); } catch { /* Choice still applies to this visit. */ }
    trackEvent("consent_updated", { consent: value });
    window.dispatchEvent(new Event("consent-choice"));
    setChoiceMade(true);
    setVisible(false);
  }
  return <>
    <div className="fixed bottom-0 inset-x-0 z-[100] flex justify-center gap-8 bg-[#1a1614] p-3 text-white md:hidden">
      <a href="tel:+9779802364638" className="font-semibold">Call us</a>
      <a href="https://wa.me/9779802364638" className="font-semibold">WhatsApp</a>
    </div>
    <button className="block mx-auto px-4 pt-2 pb-16 md:pb-4 text-xs underline" onClick={() => setVisible(true)}>Cookie settings</button>
    <dialog
      ref={dialogRef}
      aria-labelledby="cookie-preferences-title"
      aria-describedby="cookie-preferences-description"
      onCancel={(event) => { event.preventDefault(); choose("denied"); }}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-gray-300 bg-white p-6 text-gray-900 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm sm:p-8"
    >
      <h2 id="cookie-preferences-title" className="text-xl font-semibold">Your cookie preferences</h2>
      <p id="cookie-preferences-description" className="my-4 text-sm leading-6">With your permission, we use Google Analytics and Google Ads to measure visits, enquiries and advertising. You can reject optional cookies and change your choice anytime. <Link href="/privacy-policy" className="underline">Privacy policy</Link></p>
      <div className="flex flex-col gap-3 sm:flex-row"><button onClick={() => choose("denied")} className="rounded border px-4 py-2">Reject optional</button><button onClick={() => choose("granted")} className="rounded bg-[#C9A84C] px-4 py-2">Accept optional</button></div>
    </dialog>
  </>;
}
