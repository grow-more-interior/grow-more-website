import { notFound } from "next/navigation";
import { Callout, PageHero } from "../../components/PageSections";
import { collections } from "../../data/growmore";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Grow More Design Concept" title={collection.name} copy={collection.tag} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="overflow-hidden rounded-lg bg-[#e0d8cc] shadow-xl">
          <img src={collection.image} alt={`${collection.name} interior space`} className="h-full min-h-[360px] w-full object-cover" />
        </div>
        <div className="self-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">{collection.category}</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1a1614]">Designed for premium comfort and signature style.</h2>
          <p className="mt-5 text-base leading-8 text-gray-600">This concept supports modern lifestyles with durable craftsmanship, bespoke layout configurations, and premium color palettes.</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-5 shadow-sm"><dt className="text-xs font-bold uppercase tracking-widest text-gray-400">Design Scope</dt><dd className="mt-2 font-bold text-[#1a1614]">{collection.size}</dd></div>
            <div className="rounded-lg bg-white p-5 shadow-sm"><dt className="text-xs font-bold uppercase tracking-widest text-gray-400">Key Materials</dt><dd className="mt-2 font-bold text-[#1a1614]">{collection.finish}</dd></div>
          </dl>
        </div>
      </section>
      <Callout />
    </main>
  );
}
