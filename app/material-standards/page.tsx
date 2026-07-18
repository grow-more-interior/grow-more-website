import { PageHero } from "../components/PageSections";

const rows = [
  ["Wood Formaldehyde Emission", "E1 Certified (Safe)", "EN 717-1"],
  ["Fire Retardancy (Plywood)", "Class 1 (FR Grade)", "BS 476 Part 7"],
  ["Acoustic Insulation", "NRC > 0.85 (Acoustic Panels)", "ASTM C423"],
  ["Paint VOC Content", "Low VOC (< 10g/L)", "EPA Method 24"],
  ["Hardware Durability", "100k cycles (Soft-Close)", "EN 15338 Grade 3"],
  ["Fabric Abrasion Resistance", "100k Wyzenbeek rubs (Heavy Duty)", "ASTM D4157"],
];

export default function MaterialStandardsPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Material Standards" title="Certified. Safe. Premium." copy="A clear overview of the material certifications and eco-safety parameters behind our turnkey interior components." />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 bg-[#1a1614] px-5 py-4 text-xs font-bold uppercase tracking-widest text-white">
            <span>Property</span>
            <span>Result</span>
            <span>Standard</span>
          </div>
          {rows.map(([property, result, standard]) => (
            <div key={property} className="grid grid-cols-3 border-t border-gray-100 px-5 py-4 text-sm">
              <span className="font-bold text-[#1a1614]">{property}</span>
              <span className="font-bold text-[#C9A84C]">{result}</span>
              <span className="text-gray-600">{standard}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
