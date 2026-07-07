"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="w-full flex justify-center py-24 px-4">
      <div className="relative w-full max-w-7xl h-[500px] md:h-[580px] overflow-hidden shadow-2xl group">
        {/* Background Image */}
        <Image
          src="/bg/Olivion Interior Newsletter Background.png"
          alt="Premium Interior"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        {/* Grain */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-10 md:px-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-medium"
          >
            Ready to transform your space?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-white leading-tight max-w-2xl font-normal mb-10"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            When we create spaces, we strive for the finest quality.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="btn-gold group"
            >
              Explore Portfolio
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-xs uppercase tracking-widest font-medium"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
