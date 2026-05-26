import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import { ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Journal — Grow More Interior",
  description:
    "Expert insights, design trends, and inspiration from the Grow More Interior design team.",
};

const posts = [
  {
    id: 1,
    title: "10 Timeless Design Trends for 2026",
    excerpt:
      "Discover the elements of luxury interior design that transcend seasonal fads and create lasting impact in any space.",
    date: "May 15, 2026",
    readTime: "8 min read",
    category: "Trends",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 2,
    title: "The Art of Layered Lighting",
    excerpt:
      "How to use ambient, task, and accent lighting to dramatically transform the mood and atmosphere of any room.",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    category: "Design Tips",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 3,
    title: "Curating a Minimalist Masterpiece",
    excerpt:
      "Embracing simplicity without sacrificing warmth — a guide to sophisticated minimalism in modern interiors.",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    category: "Minimalism",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 4,
    title: "Materials That Define Luxury",
    excerpt:
      "From Calacatta marble to brushed brass — understanding how material selection elevates a space from ordinary to extraordinary.",
    date: "Mar 25, 2026",
    readTime: "7 min read",
    category: "Materials",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 5,
    title: "Small Spaces, Grand Impact",
    excerpt:
      "Proven strategies for making compact spaces feel expansive, elegant, and liveable through smart design decisions.",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    category: "Space Planning",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=75&w=1200",
  },
  {
    id: 6,
    title: "Biophilic Design: Bringing Nature In",
    excerpt:
      "How incorporating natural elements — wood, stone, living plants, and natural light — creates spaces that promote wellbeing.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    category: "Wellness Design",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=75&w=1200",
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <p className="text-primary tracking-[0.3em] text-xs uppercase mb-6 font-medium text-center">
          Insights & Ideas
        </p>
        <h1
          className="font-serif text-center mb-6 text-foreground font-normal"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          Design{" "}
          <span className="text-gradient-gold italic">Journal</span>
        </h1>
        <p className="text-muted-foreground text-center max-w-xl mx-auto font-light leading-relaxed mb-20">
          Expert insights, timeless principles, and the latest inspiration from our design
          studio.
        </p>

        {/* Featured Post */}
        <Link
          href={`/blog/${featured.id}`}
          className="group block mb-16 relative overflow-hidden rounded-3xl aspect-[21/9] md:aspect-[21/7]"
        >
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-widest text-primary border border-primary/30 rounded-full px-3 py-1 font-medium">
                {featured.category}
              </span>
              <span className="text-white/40 text-xs">Featured</span>
            </div>
            <h2
              className="font-serif text-white font-normal mb-4 max-w-3xl"
              style={{ fontSize: "clamp(1.4rem, 3.5vw, 3rem)" }}
            >
              {featured.title}
            </h2>
            <p className="text-white/60 font-light max-w-xl mb-6 text-sm hidden md:block">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <span>{featured.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {featured.readTime}
              </span>
            </div>
          </div>
          <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <ArrowUpRight size={18} className="text-black" />
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <article key={post.id} className="group">
              <Link
                href={`/blog/${post.id}`}
                className="block relative aspect-[4/3] overflow-hidden rounded-2xl mb-5"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest text-white border border-white/30 backdrop-blur-sm bg-black/20 rounded-full px-3 py-1 font-medium">
                    {post.category}
                  </span>
                </div>
              </Link>

              <div>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-3 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={10} />
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h2
                    className="font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300 font-normal leading-snug"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
                  >
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground font-light leading-relaxed mb-5 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="flex items-center gap-2 text-primary text-xs tracking-widest uppercase font-medium group/link"
                >
                  Read Article
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CTASection />
    </div>
  );
}
