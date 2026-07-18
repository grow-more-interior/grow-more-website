import { Callout, CollectionGrid, PageHero, SectionHeader } from "../components/PageSections";
import { collections, spaces } from "../data/growmore";

export default function ProductsPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero
        eyebrow="Design Collections"
        title="Turnkey design and style options."
        copy="Explore interior concepts by design style, space type, and look. We specialize in residential, commercial, and turnkey design."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Eight Collections" title="Browse by design style" copy="From modern minimalist duplexes to high-end commercial spaces, each concept is tailored to your brand or family lifestyle." />
        <CollectionGrid />
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Design by Space" title="Spaces we design" copy="Click on a space to view specialized concepts, materials, and layouts." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {spaces.map((space) => (
              <a key={space} href={`/products?room=${encodeURIComponent(space)}`} className="rounded-lg border border-gray-200 bg-[#f7f4ee] p-5 text-sm font-bold text-[#1a1614] transition hover:border-[#C9A84C] hover:bg-white">
                {space}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Design Overview" title="A balanced approach to aesthetics and function" />
        <div className="grid gap-5 md:grid-cols-3">
          {collections.slice(0, 6).map((collection) => (
            <div key={collection.slug} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">{collection.category}</p>
              <h3 className="mt-2 text-xl font-bold text-[#1a1614]">{collection.name}</h3>
              <dl className="mt-4 space-y-2 text-sm text-gray-600">
                <div><dt className="inline font-bold text-[#1a1614]">Scope: </dt><dd className="inline">{collection.size}</dd></div>
                <div><dt className="inline font-bold text-[#1a1614]">Materials: </dt><dd className="inline">{collection.finish}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </section>
      <Callout />
    </main>
  );
}
