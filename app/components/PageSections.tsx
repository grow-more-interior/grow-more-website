import Link from "next/link";
import { collections, stats } from "../data/growmore";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="bg-[#1a1614] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#C9A84C]">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{copy}</p>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="bg-[#1a1614] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 border-t border-white/10 px-4 sm:grid-cols-5 sm:px-6 lg:px-8">
        {stats.map(([value, label]) => (
          <div key={label} className="border-white/10 py-8 sm:border-r sm:px-5 last:sm:border-r-0">
            <strong className="block text-3xl font-semibold text-[#C9A84C]">{value}</strong>
            <span className="mt-2 block text-xs font-medium uppercase tracking-widest text-white/60">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-8 text-gray-600">{copy}</p> : null}
    </div>
  );
}

export function CollectionGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {collections.map((collection) => (
        <Link
          href={`/collection/${collection.slug}`}
          key={collection.slug}
          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="aspect-[4/3] overflow-hidden bg-[#e0d8cc]">
            <img
              src={collection.image}
              alt={`${collection.name} collection`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#C9A84C]">{collection.category}</p>
            <h3 className="mt-2 text-xl font-bold text-[#1a1614]">{collection.name}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{collection.tag}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#1a1614]">Explore design concept</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Callout() {
  return (
    <section className="bg-[#f7f4ee] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg bg-[#1a1614] p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">Design Consultation</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Request layouts, pricing, and consultation.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">Tell Grow More Interior about your space and project goals. Our team can assist with style direction, turnkey execution, and next steps.</p>
        </div>
        <Link href="/enquiry" className="inline-flex w-fit items-center justify-center rounded-md bg-[#C9A84C] px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-950 transition hover:bg-[#a8893c]">
          Send Enquiry
        </Link>
      </div>
    </section>
  );
}

export function InfoCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-[#1a1614]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
    </div>
  );
}
