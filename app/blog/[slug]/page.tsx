import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

// Simulated fetch based on slug/id
function getPost(slug: string) {
  return {
    slug,
    title: "10 Timeless Design Trends for 2026",
    content: "When it comes to luxury interior design, the word 'trend' can sometimes feel antithetical to the goal of creating a timeless space. However, the best design trends are those that evolve organically from a desire for comfort, sustainability, and personal expression. This year, we are seeing a shift towards spaces that feel grounded, tactile, and inherently calming. We explore ten trends that are here to stay.",
    date: "Mars 15, 2026",
    author: "Jane Doe",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2560",
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 mb-24">
        
        <div className="mb-12">
          <Link href="/blog" className="text-gray-400 hover:text-[var(--color-primary)] uppercase tracking-widest text-xs border-b border-gray-600 hover:border-[var(--color-primary)] pb-1 transition-all">
            Back to Journal
          </Link>
        </div>

        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] text-xs uppercase tracking-widest font-semibold mb-4 block">
            {post.date} &mdash; By {post.author}
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-12">
            {post.title}
          </h1>
        </div>

        <div className="aspect-[16/9] relative mb-16 overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-[var(--color-primary)]">
          <p className="text-gray-300 font-light leading-relaxed text-xl mb-8">
            {post.content}
          </p>
          <p className="text-gray-400 leading-relaxed mb-6 font-light">
            One of the most prominent shifts is the return to profound, saturated colors. No longer are spaces strictly defined by vast expanses of stark white. Instead, we see deep aubergine, rich olive greens, and profoundly dark charcoals establishing a sophisticated baseline.
          </p>
          <h2 className="text-3xl mt-12 mb-6 font-serif">1. The Return of Rich Textures</h2>
          <p className="text-gray-400 leading-relaxed mb-6 font-light">
            Bouclé, velvet, and raw silk. The tactile sensation of a room is just as important as the visual. High-end interiors are favoring materials that invite touch and provide an immediate sense of comfort.
          </p>
          <blockquote className="border-l-4 border-[var(--color-primary)] pl-6 py-2 my-12 text-2xl text-white font-serif relative">
            &quot;Design is a sensory experience. It should comfort the body as much as it delights the eye.&quot;
          </blockquote>
          <h2 className="text-3xl mt-12 mb-6 font-serif">2. Artisanal & Bespoke Elements</h2>
          <p className="text-gray-400 leading-relaxed mb-6 font-light">
            Mass-produced items are giving way to unique pieces crafted significantly by skilled artisans. Whether it&apos;s a hand-blown glass chandelier or a custom-carved marble dining table, these pieces serve as the focal point of the room.
          </p>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
