"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg/Olivion Interior Hero Background.png')",
      }}
    >

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C9A84C]/5 border border-[#C9A84C]/15 rounded-full text-xs font-semibold text-gray-800 font-sans tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Trusted Design Partner
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6 font-sans"
          >
            Find Your{" "}
            <span className="inline-flex items-center align-middle mx-1 relative h-[50px] w-[100px] md:h-[70px] md:w-[140px] rounded-full overflow-hidden border border-[#C9A84C]/25 shadow-md transform -translate-y-1 group cursor-pointer">
              {/* Loop Video */}
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-luxury-home-interior-41582-large.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full scale-105 group-hover:scale-115 transition-transform duration-700"
              />
              {/* Overlay with Play Button */}
              <span className="absolute inset-0 bg-black/15 flex items-center justify-center transition-colors group-hover:bg-black/20">
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-gray-900 shadow-md group-hover:scale-105 transition-transform">
                  <Play className="w-3.5 h-3.5 md:w-4 md:h-4 fill-gray-900 text-gray-900 ml-0.5" />
                </span>
              </span>
            </span>
            <br />
            Inspired <span className="text-primary">Interior</span>
            <br />
            <span className="text-primary">Design</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-gray-500 font-light text-base md:text-lg leading-relaxed mb-8 max-w-xl font-sans"
          >
            Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-900 rounded-full text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group font-sans"
            >
              Get Our Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: High-end single large image */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] md:aspect-[5/6] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100/30 z-10"
            style={{
              animation: "hero-float 8s ease-in-out infinite alternate",
            }}
          >
            <Image
              src="/hero_living_room.png"
              alt="Premium luxury modern living room with tall glass windows and leather sofas"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </motion.div>
        </div>

      </div>

      {/* Subtle floating keyframe animation for the hero image */}
      <style>{`
        @keyframes hero-float {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}
