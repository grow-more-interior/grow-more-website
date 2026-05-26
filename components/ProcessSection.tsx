"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We begin with an in-depth consultation to understand your vision, lifestyle, budget, and timeline. No cookie-cutter templates — every project starts with listening.",
  },
  {
    number: "02",
    title: "Concept & Design",
    description:
      "Our designers create mood boards, 3D renders, and detailed space plans that bring your vision to life before a single wall is touched.",
  },
  {
    number: "03",
    title: "Material Selection",
    description:
      "We guide you through curated selections of finishes, fabrics, fixtures, and furniture from our global network of premium suppliers.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our project managers oversee every craftsman and contractor, ensuring flawless execution to the finest detail — on time and on budget.",
  },
  {
    number: "05",
    title: "Reveal & Styling",
    description:
      "The grand reveal. We style every surface, hang every artwork, and place every cushion so you walk into a space that's completely move-in ready.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,22,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,22,20,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-medium">
            How We Work
          </p>
          <h2
            className="font-serif text-foreground font-normal"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Our Design{" "}
            <span className="text-gradient-gold italic">Process</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    isLeft ? "" : "lg:[direction:rtl]"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div
                    className={`glass glass-gold p-8 md:p-10 mb-8 lg:mb-24 ${
                      isLeft ? "lg:[direction:ltr]" : "lg:[direction:ltr]"
                    }`}
                  >
                    <span
                      className="font-serif text-6xl md:text-7xl font-normal text-gradient-gold block mb-4"
                    >
                      {step.number}
                    </span>
                    <h3
                      className="font-serif text-foreground mb-4 font-normal"
                      style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot for desktop */}
                  <div className="hidden lg:flex justify-center items-center">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
