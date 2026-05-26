import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import { ShoppingBag, Star, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop — Grow More Interior",
  description:
    "Shop our exclusive collection of curated home décor, premium furniture, and design accessories — handpicked by our interior designers.",
};

const products = [
  {
    id: 1,
    name: "Obsidian Side Table",
    category: "Furniture",
    price: "$1,240",
    rating: 4.9,
    reviews: 32,
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=75&w=800",
  },
  {
    id: 2,
    name: "Alabaster Floor Lamp",
    category: "Lighting",
    price: "$890",
    rating: 4.8,
    reviews: 18,
    tag: "New Arrival",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=75&w=800",
  },
  {
    id: 3,
    name: "Velvet Chesterfield Sofa",
    category: "Furniture",
    price: "$3,450",
    rating: 5.0,
    reviews: 12,
    tag: "Limited Edition",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=75&w=800",
  },
  {
    id: 4,
    name: "Artisan Ceramic Vase Set",
    category: "Décor",
    price: "$320",
    rating: 4.7,
    reviews: 45,
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=75&w=800",
  },
  {
    id: 5,
    name: "Herringbone Linen Throw",
    category: "Textiles",
    price: "$185",
    rating: 4.9,
    reviews: 67,
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=75&w=800",
  },
  {
    id: 6,
    name: "Marble Bookend Pair",
    category: "Décor",
    price: "$240",
    rating: 4.8,
    reviews: 29,
    tag: "New Arrival",
    image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=75&w=800",
  },
];

const tagColors: Record<string, string> = {
  Bestseller: "bg-primary/10 text-primary border-primary/20",
  "New Arrival": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "Limited Edition": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  Popular: "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

export default function Shop() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6 font-medium text-center">
          Designer Collection
        </p>
        <h1
          className="font-serif text-center mb-6 text-foreground font-normal"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          Curated{" "}
          <span className="text-gradient-gold italic">Pieces</span>
        </h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto font-light leading-relaxed mb-20">
          Handpicked by our design team — a collection of premium furniture, lighting, and décor
          to elevate every corner of your home.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-5 bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-[10px] uppercase tracking-widest font-medium px-3 py-1 rounded-full border ${
                      tagColors[product.tag] ?? ""
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>

                {/* CTA overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-gold text-xs px-6 py-3 flex items-center gap-2">
                    <ShoppingBag size={14} />
                    Add to Enquiry
                  </button>
                </div>
              </div>

              {/* Meta */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                  {product.category}
                </p>
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="font-serif text-foreground font-normal leading-snug group-hover:text-primary transition-colors duration-300"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
                  >
                    {product.name}
                  </h3>
                  <span className="font-serif text-foreground font-normal whitespace-nowrap mt-0.5">
                    {product.price}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-border fill-border"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-light">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bespoke CTA Banner */}
        <div className="glass glass-gold p-10 md:p-16 text-center">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4 font-medium">
            Don&apos;t see what you&apos;re looking for?
          </p>
          <h2
            className="font-serif text-foreground mb-6 font-normal"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
          >
            Commission a{" "}
            <span className="text-gradient-gold italic">Bespoke Piece</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-light mb-8 leading-relaxed">
            Our craftsmen create custom furniture and décor pieces designed exclusively for your
            space, using materials you choose and specifications you define.
          </p>
          <Link href="/contact" className="btn-gold group inline-flex">
            Start a Custom Order
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
