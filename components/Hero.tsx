"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=70",
    alt: "Minimalist living room",
    className: "absolute left-[4%] top-[15%] w-36 md:w-52 aspect-[2/3] rounded-2xl shadow-2xl z-10",
    delay: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&auto=format&fit=crop&q=70",
    alt: "Modern dining room",
    className: "absolute left-[18%] bottom-[8%] w-40 md:w-60 aspect-[4/5] rounded-2xl shadow-2xl z-20",
    delay: -2,
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=70",
    alt: "Luxury bedroom",
    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 md:w-[300px] aspect-[3/4] rounded-3xl shadow-2xl z-30",
    delay: -1.5,
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&auto=format&fit=crop&q=70",
    alt: "Elegant kitchen",
    className: "absolute right-[18%] bottom-[6%] w-40 md:w-56 aspect-[4/5] rounded-2xl shadow-2xl z-20",
    delay: -3.5,
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&auto=format&fit=crop&q=70",
    alt: "Luxury suite",
    className: "absolute right-[4%] top-[15%] w-36 md:w-52 aspect-[2/3] rounded-2xl shadow-2xl z-10",
    delay: -5,
  },
];

const words = ["Luxury", "Timeless", "Bespoke", "Inspired"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.15 }
    );
    els.forEach((el, i) => {
      (el as HTMLElement).style.setProperty("--i", String(i));
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-center pt-24 pb-0"
    >
      {/* Ambient Orbs */}
      <div className="orb orb-gold absolute top-[-200px] left-[-100px] pointer-events-none" />
      <div className="orb orb-warm absolute bottom-[-80px] right-[-80px] pointer-events-none" />
      <div className="orb orb-cool absolute top-[40%] right-[10%] pointer-events-none" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <span className="fomo-badge font-inktrap font-bold">
            <span className="fomo-dot" />
            Now Accepting New Projects for 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-carena font-normal text-foreground leading-[1.02] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
        >
          Elevate Living with
          <br />
          <span className="text-gradient-gold">Bespoke Design</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-muted-foreground font-light leading-relaxed mb-10"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
        >
          Designing luxurious, functional, and aesthetically stunning environments that
          reflect your unique personality — from concept to completion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link href="/projects" className="btn-gold group">
            View Our Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Book Consultation
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 text-[10px] text-muted-foreground uppercase tracking-widest font-inktrap font-bold"
        >
          {["12+ Years", "250+ Projects", "Award Winning", "Global Reach"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <Star size={10} className="text-primary fill-primary" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Image Collage */}
      <div className="relative z-10 w-full max-w-6xl mx-auto h-[480px] md:h-[600px] mt-8 px-4">
        {heroImages.map((img, i) => (
          <motion.div
            key={i}
            className={`${img.className} overflow-hidden`}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5 + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              animation: `hero-float 7s ease-in-out infinite alternate`,
              animationDelay: `${img.delay}s`,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 150px, 280px"
            />
          </motion.div>
        ))}
      </div>

      {/* Float keyframe */}
      <style>{`
        @keyframes hero-float {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
}
