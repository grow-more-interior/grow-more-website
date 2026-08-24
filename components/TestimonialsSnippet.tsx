"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    text: "Grow More Interior transcended our expectations. The attention to detail and dedication to bringing our vision to life resulted in a breathtaking home.",
    image: "/user.jpg",
    name: "Eleanor Richards",
    role: "Homeowner, Villa Aurelia",
  },
  {
    text: "Professional, innovative, and highly skilled. They transformed our commercial space into a luxury destination that our clients adore.",
    image: "/reference/reference-studio-desk.jpg",
    name: "James Anderson",
    role: "CEO, The Noir Club",
  },
  {
    text: "As an architect, I'm picky about my collaborators. Grow More's execution is flawless, blending artistic vision with structural precision.",
    image: "/reference/reference-vintage-studio.jpg",
    name: "Sophia Chen",
    role: "Lead Architect",
  },
  {
    text: "They managed our entire hotel renovation with zero friction. The resulting aesthetic has significantly boosted our guest satisfaction scores.",
    image: "/user.jpg",
    name: "Marcus Thorne",
    role: "Hotel Director",
  },
  {
    text: "Luxury is in the details, and Grow More Interior understands this better than anyone in the industry. Truly world-class craftsmanship.",
    image: "/reference/reference-vintage-studio.jpg",
    name: "Elena Vance",
    role: "Real Estate Specialist",
  },
  {
    text: "Modern, timeless, and surprisingly functional. They didn't just design my home; they elevated my entire lifestyle.",
    image: "/reference/reference-studio-desk.jpg",
    name: "David Miller",
    role: "Penthouse Owner",
  },
  {
    text: "The ambiance they created for our flagship restaurant is second to none. It's the talk of the town and has boosted our brand immensely.",
    image: "/user.jpg",
    name: "Sarah Jenkins",
    role: "Hospitality Executive",
  },
  {
    text: "Sustainable design that doesn't compromise on luxury. They found the perfect balance for our new coastal development.",
    image: "/reference/reference-vintage-studio.jpg",
    name: "Thomas Wright",
    role: "Development Lead",
  },
  {
    text: "Chic, bold, and exactly what we needed. They captured our fashion house's identity and translated it into a stunning physical space.",
    image: "/reference/reference-studio-desk.jpg",
    name: "Isabella Rossi",
    role: "Creative Director",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsSnippet() {
  return (
    <section className="bg-transparent py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] text-sm mb-4">Client Kind Words</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground font-normal">Testimonials</h2>
          </div>
        </FadeIn>

        {/* Testimonials Wall */}
        <div className="flex justify-center gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[540px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block pt-12" 
            duration={19} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block pt-24" 
            duration={17} 
          />
        </div>
      </div>
    </section>
  );
}
