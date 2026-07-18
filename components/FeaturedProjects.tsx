"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Penthouse Horizon",
    category: "Residential",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=75&w=1200",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    title: "The Noir Club",
    category: "Commercial",
    location: "Chicago, IL",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=75&w=800",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Villa Aurelia",
    category: "Luxury",
    location: "Milan, Italy",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=75&w=800",
    span: "lg:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    title: "Celestial Office",
    category: "Commercial",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=75&w=1200",
    span: "lg:col-span-3",
    aspect: "aspect-[21/7]",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-medium">
                Portfolio
              </p>
              <h2
                className="font-serif text-foreground font-normal"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                Featured{" "}
                <span className="text-gradient-gold">Works</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors tracking-widest text-xs uppercase border-b border-border hover:border-primary pb-1 font-light group"
            >
              View All Projects
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <FadeIn delay={0.15} direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className={`${project.span} ${project.aspect} relative overflow-hidden group cursor-pointer`}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link href={`/projects/${project.id}`} className="block w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority={i === 0}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary tracking-widest text-[10px] uppercase mb-1 font-medium">
                      {project.category} · {project.location}
                    </p>
                    <h3 className="font-serif text-white font-normal" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)" }}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Arrow icon on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
