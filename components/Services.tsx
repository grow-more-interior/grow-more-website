"use client";

import { Paintbrush, Key, Map, Sofa, Building2, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "From concept to completion, we craft stunning interiors that embody luxury, comfort, and functionality, tailored exquisitely to your lifestyle.",
    tag: "Residential & Commercial",
  },
  {
    icon: Key,
    title: "Turnkey Solutions",
    description:
      "We handle every aspect of your project — civil, electrical, plumbing, and final styling — so you move into your dream space without the hassle.",
    tag: "End-to-End",
  },
  {
    icon: Map,
    title: "Space Planning",
    description:
      "Optimising your space for flow and function. We provide strategic layouts that maximise both the utility and aesthetic appeal of your property.",
    tag: "Architecture",
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    description:
      "Bespoke furniture pieces designed and crafted to fit seamlessly into your space, using the finest materials and expert artisanship.",
    tag: "Craftsmanship",
  },
  {
    icon: Building2,
    title: "Commercial Design",
    description:
      "Hotels, restaurants, offices and retail — we create commercial environments that drive engagement, embody brand values, and leave lasting impressions.",
    tag: "B2B",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description:
      "Layered ambient, task, and accent lighting systems that transform the mood of any room and showcase your interior at its absolute finest.",
    tag: "Ambiance",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Ambient orb */}
      <div
        className="orb orb-warm pointer-events-none"
        style={{ position: "absolute", top: "10%", right: "-100px" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-medium">
              What We Offer
            </p>
            <h2
              className="font-serif text-foreground font-normal text-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Our{" "}
              <span className="text-gradient-gold italic">Expertise</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-primary transition-colors tracking-widest text-xs uppercase border-b border-border hover:border-primary pb-1 font-light whitespace-nowrap"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass glass-gold card-3d p-8 group cursor-default reveal"
              style={{ "--i": i } as React.CSSProperties}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Tag */}
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-primary/70 border border-primary/20 rounded-full px-3 py-1 mb-6 font-medium">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="mb-5 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <service.icon size={36} strokeWidth={1.25} />
              </div>

              {/* Content */}
              <h3
                className="font-serif text-foreground mb-3 font-normal group-hover:text-primary transition-colors duration-300"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
