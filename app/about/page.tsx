import { Callout, InfoCard, PageHero, StatsBand } from "../components/PageSections";
import { leaders } from "../data/growmore";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero
        eyebrow="About Us"
        title="World-class designs, crafted locally in Nepal."
        copy="Grow More designs premium interior concepts and coordinates turnkey styling guided by global aesthetics."
      />
      <StatsBand />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">Our Story</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl">A bespoke design process built for turnkey lifestyle value.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
            <p>Grow More designs custom layouts for luxury residences, commercial spaces, retail showrooms, office spaces, and architectural projects.</p>
            <p>We focus on premium woods, metals, custom lighting, smart layouts, and high-quality workmanship standards.</p>
          </div>
        </div>
        <div className="grid gap-4">
          <InfoCard title="Custom Projects" copy="Turnkey designs for premium apartments, independent villas, commercial workspaces, and hospitality spaces." />
          <InfoCard title="Bespoke Furnishings" copy="Custom-made sofas, cabinetry, and kitchen setups manufactured locally at our state-of-the-art facility." />
          <InfoCard title="Responsible Sourcing" copy="Water recycling, bio-gas usage, and zero-waste practices support an environmentally responsible production process." />
        </div>
      </section>

      <section className="bg-[#1a1614] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">Our Vision</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Be the most preferred interior design studio.</h2>
          </div>
          <p className="text-base leading-8 text-white/75">We aim to offer innovative solutions, superior quality, and turnkey execution while shaping the identity of every home and workplace we touch.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A84C]">Leadership & Team</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl">Our design and management team.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map(([name, role]) => (
            <div key={name} className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#e0d8cc] text-2xl font-extrabold text-[#1a1614]">
                {name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
              </div>
              <h3 className="text-lg font-bold text-[#1a1614]">{name}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-[#C9A84C]">{role}</p>
            </div>
          ))}
        </div>
      </section>
      <Callout />
    </main>
  );
}
