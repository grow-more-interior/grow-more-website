"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("consent-choice", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("consent-choice", callback);
  };
}

function needsChoice() {
  try {
    return !["granted", "denied"].includes(localStorage.getItem("tracking-consent-v1") || "");
  } catch {
    return true;
  }
}

type Consent = "granted" | "denied";

export default function Tracking() {
  const [visible, setVisible] = useState(false);
  const [choiceMade, setChoiceMade] = useState(false);
  const initialChoice = useSyncExternalStore(subscribe, needsChoice, () => false);
  const isOpen = visible || (initialChoice && !choiceMade);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element).closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const eventName = href.startsWith("tel:")
        ? "phone_click"
        : href.startsWith("mailto:")
          ? "email_click"
          : /^https:\/\/(wa.me|api.whatsapp.com)\//.test(href)
            ? "whatsapp_click"
            : null;
      if (eventName) trackEvent(eventName, { contact_method: eventName.replace("_click", "") });
    }
    document.addEventListener("click", onClick);
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("open-cookie-settings", reopen);
    };
  }, []);

  function choose(value: Consent) {
    const target = window as Window & { gtag?: (...args: unknown[]) => void };
    target.gtag?.("consent", "update", {
      analytics_storage: value,
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
    try {
      localStorage.setItem("tracking-consent-v1", value);
    } catch {
      /* Choice still applies to this visit. */
    }
    trackEvent("consent_updated", { consent: value });
    window.dispatchEvent(new Event("consent-choice"));
    setChoiceMade(true);
    setVisible(false);
  }

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-[100] flex justify-center gap-8 bg-[#1a1614] p-3 text-white md:hidden">
        <a href="tel:+9779802364638" className="font-semibold">Call us</a>
        <a href="https://wa.me/9779840801600" className="font-semibold">WhatsApp</a>
      </div>

      <button
        type="button"
        className="block mx-auto px-4 pt-2 pb-16 md:pb-4 text-xs text-gray-500 underline hover:text-gray-800"
        onClick={() => setVisible(true)}
      >
        Cookie settings
      </button>

      {isOpen && (
        <aside
          role="region"
          aria-labelledby="cookie-preferences-title"
          aria-describedby="cookie-preferences-description"
          className="fixed bottom-16 left-4 right-4 z-[120] sm:right-auto md:bottom-6 md:left-6 w-auto sm:w-full sm:max-w-sm rounded-2xl border border-gray-200 bg-white/95 p-5 text-[#1a1614] shadow-2xl backdrop-blur-md"
        >
          <h2 id="cookie-preferences-title" className="text-base font-bold tracking-tight">
            Cookie &amp; Privacy Preferences
          </h2>
          <p id="cookie-preferences-description" className="mt-2 text-xs leading-5 text-gray-600">
            We use cookies and similar technologies (including Google Analytics, Google Ads, and Meta tools) to measure traffic, understand enquiries, and improve advertising. Read our{" "}
            <Link href="/privacy-policy" className="font-semibold text-[#1a1614] underline hover:text-[#C9A84C]">
              Privacy Policy
            </Link>
            ,{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#C9A84C]"
            >
              Google’s Privacy Policy
            </a>
            , and{" "}
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#C9A84C]"
            >
              Meta’s Privacy Policy
            </a>
            .
          </p>
          <div className="mt-4 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="flex-1 rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Reject Optional
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="flex-1 rounded-lg bg-[#C9A84C] px-3.5 py-2 text-xs font-bold text-gray-950 transition hover:bg-[#b5953f]"
            >
              Accept All
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
