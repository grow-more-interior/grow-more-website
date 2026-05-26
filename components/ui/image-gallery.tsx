"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface GalleryItem {
  id: number | string;
  image: string;
  title?: string;
  category?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

export default function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className="flex items-center gap-2 h-[400px] md:h-[500px] w-full mt-10">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group transition-all grow w-32 md:w-56 rounded-2xl overflow-hidden h-full duration-700 hover:w-[150%] md:hover:w-full cursor-pointer"
        >
          <Image
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            src={item.image}
            alt={item.title || `image-${idx}`}
            fill
            sizes="(max-width: 768px) 33vw, 25vw"
          />
          {/* Overlay for details */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            {item.category && (
              <p className="text-(--color-primary) text-xs tracking-widest mb-1 font-light">
                {item.category}
              </p>
            )}
            {item.title && (
              <h3 className="text-white font-serif text-lg md:text-xl leading-tight">
                {item.title}
              </h3>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
