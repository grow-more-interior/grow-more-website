"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Interior Design",
  "Turnkey Solutions",
  "Space Planning",
  "Custom Furniture",
  "Commercial Design",
  "Lighting Design",
];

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Subtle orb */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #C9A84C, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-black font-serif italic text-xl">
                G
              </div>
              <span className="font-serif text-xl tracking-[0.2em] text-background">
                GROWMORE
              </span>
            </div>
            <p className="text-background/50 font-light leading-relaxed mb-8 max-w-xs text-sm">
              Designing timeless and luxurious spaces that reflect your unique personality.
              Elevating living through exceptional, bespoke design since 2012.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-background/40 hover:text-primary hover:border-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-6 font-medium">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors duration-300 font-light text-sm flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-0.5 translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-background/40 mb-6 font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((svc) => (
                <li key={svc} className="text-background/60 font-light text-sm">
                  {svc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/30 font-light">
          <p>
            © {new Date().getFullYear()} Grow More Interior. All rights reserved.
          </p>
          <p>
            Crafted with care by{" "}
            <a
              href="https://aditya-gupta.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Aadi
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
