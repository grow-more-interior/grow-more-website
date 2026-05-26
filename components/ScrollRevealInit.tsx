"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    // Global scroll-reveal IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
          }
        }),
      { threshold: 0.12 }
    );

    const attach = () => {
      document.querySelectorAll(".reveal").forEach((el, i) => {
        (el as HTMLElement).style.setProperty("--i", String(i % 6));
        observer.observe(el);
      });
    };

    // Attach immediately and also after small delay for SSR-rendered elements
    attach();
    const timer = setTimeout(attach, 300);

    // Magnetic button effect
    const setupMagnetic = () => {
      document.querySelectorAll(".btn-magnetic").forEach((btn) => {
        const el = btn as HTMLElement;
        el.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
        el.addEventListener("mouseleave", () => {
          el.style.transform = "translate(0, 0)";
          el.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
        });
      });
    };
    setupMagnetic();

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return null;
}
