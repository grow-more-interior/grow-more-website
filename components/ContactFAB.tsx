"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, X, ArrowRight } from "lucide-react";

export default function ContactFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-110 flex flex-col items-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 cursor-pointer ${
            isOpen 
              ? "bg-foreground text-background rotate-90" 
              : "bg-primary text-black hover:scale-110 ring-4 ring-primary/20"
          }`}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-card border border-border/40 shadow-2xl rounded-4xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="text-center mb-10 relative">
                  <p className="text-primary tracking-[0.3em] text-[10px] sm:text-xs mb-4 font-light uppercase">Contact Us</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal leading-tight">Start Your <br />Design Journey</h3>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-2 -right-2 p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-full hover:bg-muted"
                  >
                    <X size={24} />
                  </button>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle size={32} />
                    </div>
                    <h4 className="text-2xl font-serif text-foreground mb-4 font-normal">Message Received</h4>
                    <p className="text-muted-foreground font-light px-8">Thank you! Our design specialists will reach out to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[10px] tracking-widest text-muted-foreground uppercase ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          id="name"
                          placeholder="John Doe"
                          className="w-full bg-muted border border-border/40 rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground/60 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all font-light"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[10px] tracking-widest text-muted-foreground uppercase ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          id="email"
                          placeholder="john@example.com"
                          className="w-full bg-muted border border-border/40 rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground/60 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all font-light"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="description" className="text-[10px] tracking-widest text-muted-foreground uppercase ml-1">Design Vision</label>
                      <textarea
                        required
                        id="description"
                        rows={4}
                        placeholder="Tell us about your space..."
                        className="w-full bg-muted border border-border/40 rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground/60 outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all font-light resize-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-foreground hover:text-background text-black py-5 rounded-2xl text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-500 shadow-xl shadow-primary/10 flex items-center justify-center gap-3 group active:scale-[0.98] cursor-pointer"
                    >
                      Send Message <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
