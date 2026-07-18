import { PageHero, SectionHeader } from "../components/PageSections";
import { dealers } from "../data/growmore";

export default function DealersPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Showrooms & Studios" title="Find a design studio near you." copy="Visit our experience center, flagship showroom, or design studios to discuss your space and view materials." />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader eyebrow="Locations" title="Design spaces across Nepal" copy="Find a location to consult with our interior design architects and explore customized setups." />
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <iframe src="https://maps.google.com/maps?q=nepal%2C%20kathmandu&t=m&z=12&output=embed&iwloc=near" title="Grow More dealer map" className="h-[420px] w-full border-0" loading="lazy" />
          </div>
        </div>
        <div className="grid gap-4">
          {dealers.map(([name, area, phone, hours]) => (
            <div key={`${name}-${area}`} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-bold text-[#1a1614]">{name}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{area}</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-400">{hours}</p>
              {phone ? <a href={`tel:${phone.replaceAll("-", "")}`} className="mt-3 inline-block text-sm font-bold text-[#C9A84C]">{phone}</a> : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
