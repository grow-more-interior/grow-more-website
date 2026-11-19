import { MessageCircle } from "lucide-react";

export default function ContactFAB() {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-110 flex flex-col items-end">
      <a
        href="https://wa.me/9779840801600"
        aria-label="Chat with Grow More Interior on WhatsApp"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-black shadow-2xl ring-4 ring-[#25D366]/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      >
        <MessageCircle size={24} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
