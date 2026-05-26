"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-3xl border border-border/40 bg-card shadow-lg shadow-black/5 max-w-sm w-full" 
                  key={`${index}-${i}`}
                >
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6 italic">
                    &quot;{text}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 shrink-0">
                      <Image
                        fill
                        src={image}
                        alt={name}
                        className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="text-foreground font-serif text-sm truncate font-normal">{name}</div>
                      <div className="text-muted-foreground text-[0.7rem] truncate font-light tracking-wide">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
