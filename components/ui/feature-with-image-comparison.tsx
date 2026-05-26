"use client";

import { useState } from "react";
import Image from "next/image";
import { Sofa, Utensils, BedDouble, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "living-room", label: "Living Room", icon: Sofa },
  { id: "dining-room", label: "Dining Room", icon: Utensils },
  { id: "bedroom", label: "Bedroom", icon: BedDouble },
  { id: "explore", label: "Explore More", icon: ArrowRight },
];

const projects = [
  {
    id: "laura",
    category: "living-room",
    name: "Laura's Living Room",
    before: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=3840&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3840&auto=format&fit=crop",
  },
  {
    id: "heather",
    category: "living-room",
    name: "Heather's Living Room",
    before: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=3840&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=3840&auto=format&fit=crop",
  },
  {
    id: "virginia",
    category: "living-room",
    name: "Virginia's Living Room",
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=3840&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=3840&auto=format&fit=crop",
  },
  {
    id: "veronica",
    category: "living-room",
    name: "Veronica's Living Room",
    before: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=3840&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3840&auto=format&fit=crop",
  },
  {
    id: "cecily",
    category: "living-room",
    name: "Cecily's Living Room",
    before: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=3840&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=3840&auto=format&fit=crop",
  },
];

export default function Feature() {
  const [activeCategory, setActiveCategory] = useState("living-room");
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const filteredProjects = projects.filter((p) => p.category === activeCategory);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | React.PointerEvent) => {
    if (!isDragging && e.type !== 'mousemove' && e.type !== 'touchmove' && e.type !== 'pointermove') return;

    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = x - rect.left;
    const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setSliderPosition(position);
  };

  return (
    <section className="w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="font-serif text-foreground mb-4 font-normal" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          What&apos;s the best that could happen?
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-widest font-light">
          Explore real client before & afters.
        </p>

        {/* Categories Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                if (cat.id === 'explore') return;
                setActiveCategory(cat.id);
                const first = projects.find((p) => p.category === cat.id);
                if (first) setActiveProject(first);
              }}
              className={cn(
                "flex items-center gap-3 px-8 py-3 rounded-full transition-all duration-300 text-sm font-light cursor-pointer border",
                activeCategory === cat.id
                  ? "bg-[#efe5d5]/60 border-[#efe5d5] text-[#8b6b4e]"
                  : "bg-white border-transparent text-[#444] hover:bg-white/80"
              )}
            >
              <cat.icon size={18} className={cn(activeCategory === cat.id ? "opacity-70" : "opacity-40")} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Tabs */}
        <div className="w-full relative px-6">
          <div className="flex flex-wrap justify-center border-b border-border/20">
            {filteredProjects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={cn(
                  "px-8 py-4 text-xs tracking-widest font-light uppercase border-b-2 transition-all duration-300 cursor-pointer whitespace-nowrap",
                  activeProject.id === proj.id
                    ? "border-black text-black"
                    : "border-transparent text-[#999] hover:text-[#666]"
                )}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div 
          className="relative w-full aspect-21/9 md:aspect-24/10 overflow-hidden cursor-ew-resize select-none bg-muted"
          onPointerMove={handleMove}
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
        >
          {/* Before Image */}
          <div className="absolute inset-0">
            <Image
              src={activeProject.before}
              alt="Before"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* After Image */}
          <div 
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <Image
              src={activeProject.after}
              alt="After"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Slider Control Line & Handle */}
          <div 
            className="absolute inset-y-0 z-20 w-px bg-white/30 backdrop-blur-sm pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          />
          
          <div 
            className="absolute bottom-12 z-30 -translate-x-1/2 flex items-center bg-white/90 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl p-1 lg:p-1.5"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="flex items-center text-[10px] tracking-[0.2em] font-light uppercase select-none">
                <span className="px-6 py-2 text-gray-500 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 border-l border-b border-gray-400 rotate-45" /> Before
                </span>
                <span className="w-px h-4 bg-gray-200" />
                <span className="px-6 py-2 text-gray-800 flex items-center gap-2">
                   After <span className="w-1.5 h-1.5 border-r border-t border-gray-900 rotate-45" />
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
