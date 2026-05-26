"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Studio",
    lines: ["123 Luxury Avenue,", "Design District, NY 10001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (555) 123-4567", "Mon – Fri: 9:00 AM – 6:00 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@growmoreinterior.com", "press@growmoreinterior.com"],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        {/* Header */}
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6 font-medium text-center">
          Let&apos;s Connect
        </p>
        <h1
          className="font-serif text-center mb-6 text-foreground font-normal"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          Get in{" "}
          <span className="text-gradient-gold italic">Touch</span>
        </h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto font-light leading-relaxed mb-20">
          Whether you&apos;re looking to redesign your home or undertake a large-scale commercial
          project, our team is ready to bring your vision to life.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2
              className="font-serif text-foreground mb-8 font-normal"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.5rem)" }}
            >
              Let&apos;s discuss your next project
            </h2>

            <div className="space-y-8 mb-12">
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:glass-gold transition-all duration-300 shrink-0">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-foreground text-lg mb-1 font-normal">
                      {title}
                    </h3>
                    {lines.map((line, i) => (
                      <p key={i} className="text-muted-foreground font-light text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
              <iframe
                title="Grow More Interior Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96721.83099978!2d-74.0597317!3d40.7139949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="glass glass-gold p-8 md:p-12 rounded-3xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-foreground text-2xl mb-4 font-normal">
                  Message Received!
                </h3>
                <p className="text-muted-foreground font-light max-w-xs">
                  Thank you for reaching out. Our design specialists will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full bg-background/60 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-light text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      className="w-full bg-background/60 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-light text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-background/60 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-light text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full bg-background/60 border border-border rounded-xl px-4 py-3.5 text-foreground outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-light text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option>Interior Design</option>
                    <option>Turnkey Solutions</option>
                    <option>Space Planning</option>
                    <option>Custom Furniture</option>
                    <option>Commercial Design</option>
                    <option>Lighting Design</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2 font-medium"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    id="message"
                    rows={5}
                    placeholder="Describe your space, vision, and timeline..."
                    className="w-full bg-background/60 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all font-light resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold w-full justify-center group"
                >
                  Send Message
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
