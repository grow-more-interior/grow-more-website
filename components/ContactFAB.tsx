"use client";

import { useEffect, useRef, useState } from "react";
import EnquiryForm from "@/app/enquiry/EnquiryForm";
import { MessageCircle, X } from "lucide-react";

export default function ContactFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) dialog.current?.showModal();
  }, [isOpen]);
  return (
    <>
      <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-110 flex flex-col items-end">
        <button
          aria-label={isOpen ? "Close contact form" : "Open contact form"}
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

      <>
        {isOpen && (
          <dialog aria-label="Contact Grow More Interior" ref={dialog} onClose={() => setIsOpen(false)} onCancel={() => setIsOpen(false)} className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent open:flex items-center justify-center p-6 backdrop:bg-black/50">
            <div
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            />
            
            <div
              className="relative max-h-[85dvh] overflow-y-auto w-full max-w-lg bg-card border border-border/40 shadow-2xl rounded-4xl "
            >
              <div className="p-8 md:p-12">
                <div className="text-center mb-10 relative">
                  <p className="text-primary tracking-[0.3em] text-[10px] sm:text-xs mb-4 font-light uppercase">Contact Us</p>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground font-normal leading-tight">Start Your <br />Design Journey</h3>
                  <button 
                    aria-label="Close contact form" onClick={() => setIsOpen(false)}
                    className="absolute -top-2 -right-2 p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-full hover:bg-muted"
                  >
                    <X size={24} />
                  </button>
                </div>

                <EnquiryForm formId="popup" onSuccess={() => setIsOpen(false)} />
              </div>
            </div>
          </dialog>
        )}
      </>
    </>
  );
}
