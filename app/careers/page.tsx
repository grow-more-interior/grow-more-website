import { PageHero } from "../components/PageSections";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Interior Design Careers in Kathmandu | Grow More Interior",
  description:
    "Apply for interior design, showroom, sales, marketing, production, and project coordination roles at Grow More Interior in Nepal.",
  path: "/careers",
  keywords: ["interior design jobs Kathmandu", "design careers Nepal", "showroom consultant jobs Nepal"],
});

const jobs = [
  ["Sales Executive", "Kathmandu", "Sales, Showroom"],
  ["Showroom Consultant", "Experience Centre, Kathmandu", "Retail, Design"],
  ["Production Engineer", "Bardiya Factory", "Manufacturing, QC"],
  ["Marketing Associate", "Kathmandu", "Brand, Digital"],
];

export default function CareersPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Careers" title="Build your career with Grow More." copy="Join a multidisciplinary team focused on interior architecture, showroom consultation, production quality, site coordination, brand storytelling, and world-class design." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1614]">Work with designers, architects, consultants, and makers.</h2>
          <p className="mt-4 text-sm leading-7 text-gray-600">
            Grow More careers span design consultation, showroom experience, client communication, production engineering, modular quality control, site supervision, digital marketing, and brand storytelling. We value detail, discipline, hospitality, and practical creativity.
          </p>
        </div>
        <div className="grid gap-4">
          {jobs.map(([title, location, tags]) => (
            <div key={title} className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#1a1614]">{title}</h2>
                <p className="mt-2 text-sm text-gray-600">{location}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#C9A84C]">{tags}</p>
              </div>
              <a href="mailto:info@growmoreinterior.com?subject=Career application" className="w-fit rounded-md border border-gray-300 px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#1a1614] transition hover:border-[#1a1614] hover:bg-[#1a1614] hover:text-white">
                Apply
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
