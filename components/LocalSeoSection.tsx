import Link from "next/link";

const serviceAreas = ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Bardiya", "Across Nepal"];

const localServices = [
  {
    title: "Home interior design in Kathmandu",
    copy: "Space planning, mood boards, 3D views, modular kitchens, wardrobes, lighting, furniture, and final styling for apartments, villas, and family homes.",
  },
  {
    title: "Commercial interior design in Nepal",
    copy: "Workplace, retail, restaurant, hotel, showroom, and hospitality interiors planned around brand impact, customer flow, durability, and daily operations.",
  },
  {
    title: "Turnkey execution and custom furniture",
    copy: "A coordinated team manages measurements, material selection, production, site work, installation, and handover so the project stays clear from concept to completion.",
  },
];

const faqs = [
  [
    "What makes Grow More Interior a strong choice in Kathmandu?",
    "Grow More Interior combines local Kathmandu site knowledge with turnkey design, modular production, custom furniture, lighting, and project coordination for residential and commercial spaces.",
  ],
  [
    "Do you work outside Kathmandu?",
    "Yes. The team serves Kathmandu and Lalitpur regularly, and supports projects in Pokhara, Bardiya, and other Nepal locations depending on the project scope.",
  ],
  [
    "Can you handle both design and execution?",
    "Yes. Grow More Interior can manage concept design, 3D views, materials, modular production, furniture, site coordination, lighting, decor, and final handover.",
  ],
];

export default function LocalSeoSection() {
  return (
    <section className="bg-[#f7f4ee] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7b2f]">
            Kathmandu Interior Design Company
          </p>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl lg:text-5xl">
            Interior design company in Kathmandu for homes, offices, hotels, and retail spaces across Nepal.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-700">
            Grow More Interior helps homeowners, developers, and business owners plan and execute premium interiors with a practical Nepal-ready process. From Uttar Dhoka, Kathmandu, the studio creates residential interiors, commercial interiors, modular kitchens, wardrobes, lighting plans, bespoke furniture, and complete turnkey spaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[#c9a84c]/40 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6b5524]"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-[#1a1614] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#2a2420]">
              Book Consultation
            </Link>
            <Link href="/projects" className="rounded-full border border-[#1a1614]/20 px-7 py-4 text-xs font-bold uppercase tracking-widest text-[#1a1614] transition hover:border-[#c9a84c] hover:text-[#8a6b23]">
              View Nepal Projects
            </Link>
          </div>
        </div>

        <div className="grid gap-5">
          {localServices.map((service) => (
            <article key={service.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1614]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{service.copy}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-[#1a1614]/10 pt-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1614]">
          Interior design company in Nepal FAQs
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#1a1614]">{question}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
