"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const allProjects = [
  {
    id: 1,
    title: "Penthouse Horizon",
    category: "Residential",
    location: "New York, NY",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 2,
    title: "The Noir Club",
    category: "Commercial",
    location: "Chicago, IL",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 3,
    title: "Villa Aurelia",
    category: "Luxury",
    location: "Milan, Italy",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 4,
    title: "Zen Retreat",
    category: "Residential",
    location: "Kyoto, Japan",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 5,
    title: "Elysian Store",
    category: "Commercial",
    location: "Paris, France",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 6,
    title: "Opulence Manor",
    category: "Luxury",
    location: "London, UK",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=75&w=1200",
  },
];

const categories = ["All", "Residential", "Commercial", "Luxury"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6 font-medium text-center">
          Portfolio
        </p>
        <h1
          className="font-serif text-center mb-6 text-foreground font-normal"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          Selected{" "}
          <span className="text-gradient-gold">Works</span>
        </h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto font-light leading-relaxed mb-16">
          Explore our curated portfolio of luxury residential and commercial projects, each a
          unique narrative of design excellence.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`uppercase tracking-widest text-xs font-medium transition-all duration-300 px-6 py-2.5 rounded-full border ${
                activeCategory === cat
                  ? "bg-primary text-black border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Top tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-widest text-white/60 border border-white/20 rounded-full px-3 py-1">
                      {project.year}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-black" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary tracking-widest text-[10px] uppercase mb-1.5 font-medium">
                      {project.category} · {project.location}
                    </p>
                    <h3 className="font-serif text-white font-normal" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <CTASection />
    </div>
  );
}
