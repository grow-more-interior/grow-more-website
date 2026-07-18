import { Callout, PageHero } from "../components/PageSections";

const guides = [
  ["Space Planning & Flow", "Arrange furniture and structural zones to maximize natural light and ensure comfortable circulation paths throughout your home."],
  ["Selecting Color Palettes", "Use the 60-30-10 rule (dominant, secondary, accent) to create balanced, visually harmonious rooms that reflect your personal style."],
  ["Lighting Design Layering", "Combine ambient, task, and accent lighting to add depth, warmth, and functionality to every room."],
  ["Material Selection & Care", "Balance aesthetic appeal with durability. Choose high-traffic fabrics and scratch-resistant woods for family spaces."],
  ["Turnkey Execution Workflow", "Understand the process from concept sketches and 3D rendering to final site handover and finishing touches."],
  ["Bespoke Furnishing Advice", "Customize furniture dimensions, wood finishes, and upholstery textures to fit your specific layout perfectly."],
];

export default function DesignGuidesPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Design Guides" title="Plan, style, and execute the right way." copy="Practical guidance to get the most from your space with expert interior design tips." />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {guides.map(([title, copy]) => (
          <article key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">Guide</p>
            <h2 className="mt-3 text-xl font-bold text-[#1a1614]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
          </article>
        ))}
      </section>
      <Callout />
    </main>
  );
}
