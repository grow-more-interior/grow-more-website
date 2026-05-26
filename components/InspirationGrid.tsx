"use client"

import InteractiveImageBentoGallery from "@/components/ui/bento-gallery"

const interiorItems = [
  {
    id: 1,
    title: "Living Room",
    desc: "A bold, modern living space with velvet accents and marble flooring.",
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop",
    span: "md:col-span-2 md:row-span-2 min-h-[500px]",
  },
  {
    id: 2,
    title: "Master Bedroom",
    desc: "Serenity meets luxury with organic textures and a lush green palette.",
    url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop",
    span: "md:row-span-1 min-h-[240px]",
  },
  {
    id: 3,
    title: "False Ceiling",
    desc: "Architectural lighting and clean lines define this modern overhead design.",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
    span: "md:row-span-1 min-h-[240px]",
  },
  {
    id: 4,
    title: "Minimalist Kitchen",
    desc: "Sleek cabinetry and efficient layouts for the contemporary chef.",
    url: "https://images.unsplash.com/photo-1556911220-e15595b6a981?q=80&w=2000&auto=format&fit=crop",
    span: "md:row-span-2 min-h-[500px]",
  },
  {
    id: 5,
    title: "Wardrobe Design",
    desc: "Custom storage solutions with a focus on elegance and accessibility.",
    url: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2000&auto=format&fit=crop",
    span: "md:row-span-1 min-h-[240px]",
  },
  {
    id: 6,
    title: "Modern Dining",
    desc: "Crafting the perfect atmosphere for shared meals and memories.",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
    span: "md:col-span-1 md:row-span-1 min-h-[240px]",
  },
]

export default function InspirationGrid() {
  return (
    <div className="w-full antialiased py-24">
      <InteractiveImageBentoGallery
        imageItems={interiorItems}
        title="Inspiration for home interior designs"
        description="Give your home a new look with these interior design ideas curated for you. Explore our collection of premium spaces and architectural concepts."
      />
    </div>
  )
}
