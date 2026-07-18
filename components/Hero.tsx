"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] h-[calc(100vh-80px)] lg:h-[calc(100vh-124px)] overflow-hidden flex items-center bg-[#0e0c0a]">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Luxury Custom Interior Design"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Elegant Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <div className="max-w-xl space-y-6 text-center md:text-left mx-auto md:mx-0">
          <span className="inline-block text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">
            Signature Spaces 2026
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Crafting Timeless <br />
            <span className="text-[#C9A84C]">Luxury Interiors</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            Discover bespoke turnkey interiors and premium custom furniture curated for sophisticated contemporary living.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/products"
              className="px-6 py-3 bg-[#C9A84C] hover:bg-[#a8893c] text-gray-900 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
            >
              Explore Designs
            </a>
            <a
              href="/about"
              className="px-6 py-3 border border-white/30 hover:border-white text-white rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
            >
              About Our Studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
