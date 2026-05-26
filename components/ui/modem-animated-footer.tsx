"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  className?: string;
}

export const FooterComponent = ({
  brandName = "Growmore",
  brandDescription = "Designing timeless and luxurious spaces that reflect your unique personality. Elevating living through exceptional design.",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="bg-transparent mt-10 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto relative p-4 py-8">
          <div className="flex flex-col mb-8 w-full pt-4">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-4xl font-serif font-normal tracking-widest">
                    {brandName}
                  </span>
                </div>
                <p className="text-muted-foreground font-light text-center w-full max-w-lg px-4 sm:px-0 leading-relaxed italic">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-12 mt-8 gap-6">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-8 text-sm font-light tracking-widest text-muted-foreground max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-primary duration-300 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 pt-6">
            <p className="text-sm text-muted-foreground text-center md:text-left font-light tracking-wide">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <Link
                  href={creatorUrl}
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light"
                >
                  Crafted by {creatorName}
                </Link>
              </nav>
            )}
          </div>
        </div>

        <div 
          className="bg-linear-to-b from-foreground/10 via-foreground/5 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-12 font-serif font-normal tracking-widest pointer-events-none select-none text-center whitespace-nowrap transition-all duration-500"
          style={{
            fontSize: 'clamp(2rem, 10vw, 8rem)',
            width: '100%'
          }}
        >
          {brandName} Interior
        </div>
      </footer>
    </section>
  );
};
