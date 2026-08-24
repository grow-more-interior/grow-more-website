"use client";

import { useState } from "react";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Office"];

const galleryImages = [
  {
    src: "/hero-bg.png",
    category: "Living Room",
    title: "Modern Living Space",
  },
  {
    src: "/hero_living_room.png",
    category: "Bedroom",
    title: "Serene Master Suite",
  },
  {
    src: "/Olivion Interior Background.png",
    category: "Living Room",
    title: "Penthouse Living",
  },
  {
    src: "/bg/Olivion Interior Team Background.png",
    category: "Office",
    title: "Executive Workspace",
  },
  {
    src: "/bg/Olivion Interior Hero Background.png",
    category: "Kitchen",
    title: "Chef's Kitchen",
  },
  {
    src: "/reference/reference-vintage-studio.jpg",
    category: "Bedroom",
    title: "Zen Retreat",
  },
  {
    src: "/bg/Olivion Interior Background.jpg",
    category: "Bathroom",
    title: "Spa Sanctuary",
  },
  {
    src: "/bg/Pricing Card Background.png",
    category: "Kitchen",
    title: "Minimalist Kitchen",
  },
  {
    src: "/reference/reference-studio-desk.jpg",
    category: "Living Room",
    title: "Opulence Suite",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6 font-medium text-center">
          Visual Journey
        </p>
        <h1
          className="font-serif text-center mb-6 text-foreground font-normal"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          Visual{" "}
          <span className="text-gradient-gold">Inspiration</span>
        </h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto font-light leading-relaxed mb-16">
          A curated collection of our finest spaces - each image a testament to the artistry and
          precision behind every project.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase tracking-widest text-xs font-medium transition-all duration-300 px-5 py-2 rounded-full border ${
                activeCategory === cat
                  ? "bg-primary text-black border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <ZoomIn size={28} className="text-white" />
                  <div className="text-center">
                    <p className="text-white text-xs uppercase tracking-widest font-medium">
                      {img.title}
                    </p>
                    <p className="text-primary text-[10px] uppercase tracking-widest mt-1">
                      {img.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <section className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            ["Living Room Ideas", "Explore TV walls, conversational seating, statement lighting, coffee table styling, layered textures, and storage-friendly layouts."],
            ["Kitchen & Wardrobe Ideas", "Find modular kitchen inspiration, appliance zones, pantry planning, handle profiles, shutters, counters, and custom wardrobe storage."],
            ["Office & Commercial Ideas", "Review workspace, reception, meeting room, retail display, and hospitality design directions built around brand and visitor experience."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery preview"
                width={1400}
                height={900}
                className="w-full h-auto object-contain max-h-[85vh] rounded-2xl"
              />
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </div>
  );
}
