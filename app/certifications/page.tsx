import { Callout, PageHero } from "../components/PageSections";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Interior Quality Certifications | Grow More Interior Nepal",
  description:
    "Review Grow More Interior quality certifications, workmanship standards, environmental practices, and material compliance for turnkey interior projects.",
  path: "/certifications",
  keywords: ["interior quality certification Nepal", "ISO interior company", "certified interior designers Nepal"],
});

const certifications = [
  ["ISO 9001:2015", "Quality Management certification for our design consultation, modular manufacturing, and turnkey project execution."],
  ["ISO 14001:2015", "Environmental Management standards governing our eco-friendly material selection and workspace safety parameters."],
  ["Bespoke Quality Seal", "Premium workmanship guarantee covering carpentry, lighting, electricals, and finishing services."],
  ["IIID Corporate Member", "Official membership with the Indian Institute of Interior Designers representing global excellence standards."],
];

export default function CertificationsPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Certifications" title="Certified to global standards." copy="Quality systems and workmanship are tested and documented for results you can trust." />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {certifications.map(([name, copy]) => (
          <div key={name} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#e0d8cc] text-lg font-extrabold text-[#1a1614]">✓</div>
            <h2 className="text-xl font-bold text-[#1a1614]">{name}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
          </div>
        ))}
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">Quality Assurance</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl">
            Our standards protect the beauty, safety, and durability of every interior project.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600">
            Certification-led workflows help the team document material choices, production tolerances, site checks, environmental responsibility, and handover quality. This gives homeowners, developers, and commercial clients a clearer view of what is being built and why it will last.
          </p>
        </div>
      </section>
      <Callout />
    </main>
  );
}
