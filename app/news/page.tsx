import { PageHero } from "../components/PageSections";
import { newsItems } from "../data/growmore";

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
    </main>
  );
}
