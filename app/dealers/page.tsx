import { PageHero, SectionHeader } from "../components/PageSections";
import { dealers } from "../data/growmore";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Interior Design Studios & Showrooms in Nepal | Grow More",
  description:
    "Find Grow More Interior design studios, experience centers, and showroom locations in Kathmandu, Lalitpur, Pokhara, Bardiya, and across Nepal.",
  path: "/dealers",
  keywords: ["interior showroom Kathmandu", "interior design studio Nepal", "Grow More showroom"],
});

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
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Material Walkthrough", "View finish samples, color palettes, hardware options, lighting references, and furniture construction details."],
            ["Design Consultation", "Discuss layout needs, budget ranges, renovation priorities, modular requirements, and project timelines with our team."],
            ["Project Support", "Coordinate measurements, site visits, quotation requests, showroom follow-ups, and design presentations from the nearest studio."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-lg border border-gray-200 bg-[#f7f4ee] p-6">
              <h2 className="text-lg font-bold text-[#1a1614]">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
