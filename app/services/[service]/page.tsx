import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquiryForm from "@/app/enquiry/EnquiryForm";
import { createMetadata } from "@/app/seo";
const services = {
  "modular-kitchen": { title: "Modular kitchen design in Kathmandu", copy: "Plan storage, worktops and a layout around how you cook. Discuss measurements, materials and installation with Grow More Interior.", image: "/hero-bg.webp" },
  "home-interior": { title: "Full home interior design in Nepal", copy: "Bring your rooms together with a coordinated plan for layouts, lighting, finishes and custom furniture. Start with your space, priorities and budget.", image: "/hero_living_room.webp" },
  "office-fit-out": { title: "Office interior design and fit-out in Nepal", copy: "Plan workstations, meeting areas, storage and lighting for your team. Discuss your site, capacity and fit-out requirements with our designers.", image: "/reference/reference-studio-desk.jpg" },
};
type Props = { params: Promise<{ service: string }> };
function getService(slug: string) { return Object.hasOwn(services, slug) ? services[slug as keyof typeof services] : undefined; }
export function generateStaticParams() { return Object.keys(services).map(service => ({ service })); }
export async function generateMetadata({ params }: Props) {
  const { service } = await params; const info = getService(service);
  if (!info) return { title: "Service not found", robots: { index: false, follow: false }, alternates: { canonical: null } };
  return createMetadata({ title: `${info.title} | Grow More Interior`, description: info.copy, path: `/services/${service}` });
}
export default async function ServicePage({ params }: Props) {
  const { service } = await params; const info = getService(service); if (!info) notFound();
  return <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16"><div className="grid gap-10 lg:grid-cols-2"><div><p className="text-sm uppercase tracking-widest mb-4">Grow More Interior · Kathmandu</p><h1 className="text-4xl font-serif leading-tight">{info.title}</h1><p className="my-6 leading-7">{info.copy}</p><a href="tel:+9779802364638" className="inline-block rounded bg-[#C9A84C] px-6 py-3 font-semibold">Call +9779802364638</a><div className="relative aspect-[4/3] mt-8 overflow-hidden rounded-xl"><Image src={info.image} alt="Interior design inspiration" fill sizes="(max-width: 1024px) 100vw, 50vw" /></div><p className="mt-2 text-xs text-gray-500">Design inspiration. Ask our team for relevant completed project references.</p><Link href="/projects" className="inline-block underline mt-5">Explore our design portfolio</Link></div><div className="rounded-xl bg-[#f7f4ee] p-6"><h2 className="text-2xl font-semibold">Discuss your project</h2><p className="mt-3 text-sm">Share your contact details and project requirements for a consultation.</p><EnquiryForm /></div></div></section>;
}
