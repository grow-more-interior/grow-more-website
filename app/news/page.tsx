import { PageHero } from "../components/PageSections";
import { newsItems } from "../data/growmore";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Interior Design News & Updates | Grow More Interior Nepal",
  description:
    "Follow Grow More Interior news, project milestones, studio updates, design awards, launch announcements, and interior design stories from Nepal.",
  path: "/news",
  keywords: ["interior design news Nepal", "Grow More Interior updates", "Kathmandu design studio news"],
});

export default function NewsPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="News & Updates" title="What is new at Grow More." copy="Events, milestones, and stories from our interior architecture and turnkey design journey." />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {newsItems.map(([title, type, copy]) => (
          <article key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">{type}</p>
            <h2 className="mt-3 text-xl font-bold text-[#1a1614]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">{copy}</p>
            <a href="https://growmoreinterior.com" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-xs font-bold uppercase tracking-widest text-[#1a1614]">
              Read on site
            </a>
          </article>
        ))}
      </section>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">Media Themes</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl">
            Follow our studio milestones, material launches, design awards, and project features.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {["Project Features", "Studio Events", "Product Launches", "Quality Milestones"].map((item) => (
              <div key={item} className="rounded-lg border border-gray-200 bg-[#f7f4ee] p-5 text-sm font-bold text-[#1a1614]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
