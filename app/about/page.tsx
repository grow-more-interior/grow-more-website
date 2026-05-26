import Image from "next/image";
import CTASection from "@/components/CTASection";
import { Paintbrush, Key, Map, Sofa } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Grow More Interior",
  description:
    "Learn about Grow More Interior — a decade of luxury interior design, our philosophy, team, and services.",
};

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "From concept to completion, we craft stunning interiors that embody luxury, comfort, and functionality, tailored exquisitely to your lifestyle.",
  },
  {
    icon: Key,
    title: "Turnkey Solutions",
    description:
      "We handle every aspect of your project, from civil work and electrical to final styling. Move into your dream space without the hassle.",
  },
  {
    icon: Map,
    title: "Space Planning",
    description:
      "Optimizing your space for flow and function. We provide strategic layouts that maximize both the utility and aesthetic appeal of your property.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    description:
      "Bespoke furniture pieces designed and crafted to fit seamlessly into your space, using the finest materials and expert artisanship.",
  },
];

const team = [
  {
    name: "Aatharva Raj Gupta",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Meera Sharma",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Rahul Verma",
    role: "Head of Interiors",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
];

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "250+", label: "Bespoke Projects" },
  { value: "15+", label: "Global Awards" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Breadcrumb */}
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6 font-medium text-center">
          About Us
        </p>

        {/* Header */}
        <h1
          className="font-serif text-center mb-8 text-foreground font-normal text-balance"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          A Decade of{" "}
          <span className="text-gradient-gold italic">Design Excellence</span>
        </h1>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto font-light leading-relaxed mb-20 text-lg">
          Founded in 2012, Grow More Interior began with a clear vision: to create spaces that
          elevate the human experience. We believe luxury lies in the seamless integration of form,
          function, and personality.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="glass glass-gold p-8 text-center">
              <span
                className="block font-serif text-gradient-gold font-normal mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-light">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=75&w=1200"
              alt="Design Philosophy"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6 font-medium">
              Our Story
            </p>
            <h2
              className="font-serif text-foreground mb-8 font-normal"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
            >
              Crafting Spaces That Echo Your Unique Identity
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-light">
              Our multidisciplinary team of architects and interior designers works collaboratively,
              ensuring every detail is thoughtfully curated. We don&apos;t just design rooms; we curate
              lifestyles.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8">
              By deeply understanding our clients&apos; aspirations, we weave their personal stories into
              the fabric of our designs — resulting in environments that feel intimately familiar yet
              completely extraordinary.
            </p>
            <blockquote className="border-l-2 border-primary pl-6">
              <p className="font-serif text-foreground text-xl italic font-normal">
                &ldquo;Luxury is found in the harmony between space and soul.&rdquo;
              </p>
              <cite className="text-muted-foreground text-xs uppercase tracking-widest mt-3 block not-italic">
                — Aatharva Raj Gupta, Founder
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Services */}
        <div className="mb-32">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-medium text-center">
            What We Offer
          </p>
          <h2
            className="font-serif text-foreground text-center mb-16 font-normal"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Our <span className="text-gradient-gold italic">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="glass glass-gold p-8 hover:scale-[1.02] transition-transform duration-500 group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={40} strokeWidth={1.25} />
                </div>
                <h3 className="font-serif text-foreground text-xl mb-3 group-hover:text-primary transition-colors duration-300 font-normal">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-medium text-center">
            The People
          </p>
          <h2
            className="font-serif text-foreground text-center mb-16 font-normal"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
          >
            Meet the <span className="text-gradient-gold italic">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="aspect-[3/4] relative mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-serif text-foreground text-xl mb-1 font-normal">
                  {member.name}
                </h3>
                <p className="text-primary text-xs uppercase tracking-widest font-light">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
