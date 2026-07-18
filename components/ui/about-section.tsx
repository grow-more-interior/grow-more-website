"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <section className="pt-2 pb-24 md:pt-4 md:pb-32 px-6 bg-transparent relative overflow-hidden" ref={heroRef}>
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8 px-6">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-full z-10">
            <div className="flex items-center gap-3">
                <span className="text-primary font-serif text-xl">✱</span>
                <TimelineContent
                  as="span"
                  animationNum={0}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="text-xs tracking-[0.4em] text-muted-foreground font-light"
                >
                  Our Story
                </TimelineContent>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://facebook.com/growmore" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/growmore" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/growmore" },
                { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/growmore" },
              ].map((social, i) => (
                <TimelineContent
                  key={i}
                  as="a"
                  animationNum={i}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border/60 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:border-primary"
                >
                  {social.icon}
                </TimelineContent>
              ))}
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group mb-12"
          >
            <div className="relative aspect-21/9 w-full overflow-hidden rounded-3xl border border-border/40 bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=75"
                alt="Grow More Interior Studio"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/10" />
            </div>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-8 gap-12 text-sm border-b border-border/40 mb-12">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-primary font-serif text-3xl font-normal">12+</span>
                <span className="text-muted-foreground font-light tracking-widest text-[10px] sm:text-xs">Years of Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-serif text-3xl font-normal">250+</span>
                <span className="text-muted-foreground font-light tracking-widest text-[10px] sm:text-xs">Bespoke Projects</span>
              </div>
            </TimelineContent>
            
            <div className="flex gap-10 lg:ml-auto">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-3"
              >
                <span className="text-primary font-serif text-3xl font-normal">100%</span>
                <span className="text-muted-foreground font-light tracking-widest text-[10px] sm:text-xs">Vision Clarity</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-3"
              >
                <span className="text-primary font-serif text-3xl font-normal">15+</span>
                <span className="text-muted-foreground font-light tracking-widest text-[10px] sm:text-xs">Global Awards</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-16 px-6">
          <div className="md:col-span-2">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl lg:leading-[1.1] text-foreground mb-10 font-normal">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.1,
                }}
              >
                Crafting Spaces That Echo Your Unique Identity.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={10}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-12 text-muted-foreground font-light leading-relaxed text-base"
            >
              <p>
                Founded on the belief that luxury is an experience, not just a label. We specialize in transforming residential and commercial properties into sanctuaries of high-end design, where every texture and line serves a purpose.
              </p>
              <p>
                Our philosophy blends contemporary minimalism with timeless opulence. By working closely with each client, we unveil the hidden potential of every room, creating interiors that are as functional as they are breathtaking.
              </p>
            </TimelineContent>
          </div>

          <div className="md:col-span-1 flex flex-col items-center md:items-end text-center md:text-right">
            <TimelineContent
              as="div"
              animationNum={12}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-primary font-serif text-3xl md:text-4xl font-normal mb-2"
            >
              Aatharva Raj Gupta
            </TimelineContent>
            <TimelineContent
              as="div"
              animationNum={13}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-muted-foreground text-[10px] tracking-widest mb-10 font-light"
            >
              Founder | Creative Director
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={14}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="mb-8"
            >
              <p className="text-foreground font-light text-lg leading-relaxed">
                &quot;Luxury is found in the harmony between space and soul.&quot;
              </p>
            </TimelineContent>

            <TimelineContent
              as="button"
              animationNum={15}
              timelineRef={heroRef}
              customVariants={revealVariants}
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-foreground hover:text-background text-black flex items-center gap-3 transition-all duration-500 px-8 py-4 rounded-full font-light tracking-widest text-xs shadow-xl shadow-primary/10 group active:scale-95 cursor-pointer"
            >
              Let's Collaborate <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
