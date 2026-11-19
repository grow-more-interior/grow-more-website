import Link from "next/link";
import { Callout, CollectionGrid, FAQSection, PageHero, SectionHeader } from "../components/PageSections";
import { collections, spaces } from "../data/growmore";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Interior Design Services & Collections in Nepal | Grow More",
  description:
    "Explore Grow More Interior design collections for living rooms, bedrooms, kitchens, wardrobes, offices, retail spaces, hospitality, and turnkey homes in Nepal.",
  path: "/products",
  keywords: ["interior design services Nepal", "modular kitchen design Nepal", "wardrobe design Kathmandu", "commercial interiors Nepal"],
});

export default async function ProductsPage({ searchParams }: {
  searchParams: Promise<{ room?: string | string[]; look?: string | string[] }>;
}) {
  const params = await searchParams;
  const room = typeof params.room === "string" && spaces.includes(params.room) ? params.room : undefined;
  const look = typeof params.look === "string" ? params.look : undefined;
  const styleSlugs: Record<string, string> = {
    Minimalist: "modern-minimalist", "Classical Luxury": "neo-classical",
    Scandinavian: "scandinavian-cozy", Industrial: "industrial-loft",
    "Art Deco": "art-deco", Japandi: "japandi-fusion",
  };
  const selectedStyle = look ? styleSlugs[look] : undefined;
  const roomSlugs: Record<string, string[]> = {
    "Corporate Office": ["corporate-excellence"],
    "Retail Space": ["retail-luxe"],
    Hospitality: ["industrial-loft", "retail-luxe", "art-deco", "japandi-fusion"],
    "Outdoor Terrace": ["modern-minimalist", "scandinavian-cozy", "japandi-fusion"],
  };
  const visibleCollections = collections.filter((collection) => {
    const matchesRoom = !room || (roomSlugs[room]
      ? roomSlugs[room].includes(collection.slug)
      : collection.category !== "Commercial Design");
    return matchesRoom && (!selectedStyle || collection.slug === selectedStyle);
  });
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero
        eyebrow="Design Collections"
        title="Turnkey interior design services and style options."
        copy="Explore interior concepts by design style, space type, material palette, and execution scope. We specialize in residential, commercial, modular, hospitality, and turnkey design in Nepal."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Design Collections" title={room ? `Design ideas for ${room.toLowerCase()}` : "Browse by design style"} copy="From modern minimalist duplexes to high-end commercial spaces, each concept is tailored to your brand or family lifestyle." />
        {(room || selectedStyle) && <div className="mb-6 flex flex-wrap items-center gap-4">
          <p role="status" className="text-sm">{visibleCollections.length} collections{room ? ` for ${room}` : ""}{selectedStyle ? ` · ${look}` : ""}</p>
          <Link href="/products" className="text-sm font-semibold underline">Clear filters</Link>
        </div>}
        {visibleCollections.length ? <CollectionGrid items={visibleCollections} /> : <p>No collections match these filters. Clear filters to explore all designs.</p>}
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Design by Space" title="Spaces we design" copy="Click on a space to view specialized concepts, materials, and layouts." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {spaces.map((space) => (
              <a key={space} href={`/products?${new URLSearchParams({ room: space, ...(look && selectedStyle ? { look } : {}) }).toString()}`} aria-current={room === space ? "page" : undefined} className="rounded-lg border border-gray-200 bg-[#f7f4ee] p-5 text-sm font-bold text-[#1a1614] transition hover:border-[#C9A84C] hover:bg-white aria-[current=page]:border-[#C9A84C] aria-[current=page]:bg-white">
                {space}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Design Overview" title="A balanced approach to aesthetics and function" />
        <div className="grid gap-5 md:grid-cols-3">
          {visibleCollections.slice(0, 6).map((collection) => (
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
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What Is Included"
            title="Complete interior packages for real homes and businesses"
            copy="Every package can include site measurement, concept boards, 2D layouts, 3D visualization, furniture drawings, modular production, material procurement, site supervision, installation, and final styling."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Modular Kitchens", "Ergonomic work triangles, durable counters, soft-close shutters, pantry systems, lighting, and appliance-ready layouts."],
              ["Wardrobes & Storage", "Custom wardrobes, walk-in closets, vanity storage, hidden utility zones, and premium hardware selection."],
              ["False Ceiling & Lighting", "Layered ceiling concepts, cove lighting, task lights, accent fixtures, and mood-based switching plans."],
              ["Commercial Fit-Outs", "Reception areas, workstations, cabins, retail display, hospitality ambience, and brand-led material palettes."],
            ].map(([title, copy]) => (
              <article key={title} className="rounded-lg border border-gray-200 bg-[#f7f4ee] p-6">
                <h3 className="text-lg font-bold text-[#1a1614]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQSection
        eyebrow="Interior Design FAQ"
        title="Answers for homeowners, offices, and retail clients"
        items={[
          ["What does a turnkey interior design package include?", "A turnkey package can include measurement, space planning, design concepts, 3D views, material selection, modular production, site coordination, furniture, lighting, decor, and final handover."],
          ["Can Grow More design only one room?", "Yes. We can design single rooms such as living rooms, kitchens, bedrooms, wardrobes, bathrooms, offices, reception areas, and retail display zones."],
          ["Do you provide custom furniture?", "Yes. Grow More creates bespoke sofas, beds, tables, wardrobes, cabinetry, counters, vanities, display units, and storage systems sized for your space."],
          ["Which areas do you serve?", "We primarily serve Kathmandu and Lalitpur, with project consultation and execution available for Pokhara, Bardiya, and other Nepal locations based on scope."],
        ]}
      />
      <Callout />
    </main>
  );
}
