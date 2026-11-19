import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/app/seo";

import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

function getProject(id: string) {
  const project = projects.find((item) => String(item.id) === id);
  if (!project) notFound();
  return {
    ...project,
    client: "Private client",
    description: `${project.title} explores ${project.category.toLowerCase()} interior design through space planning, coordinated materials, custom furniture, and layered lighting. Contact our team to discuss a similar direction for your space.`,
    heroImage: project.image,
    gallery: [project.image],
  };
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);

  return createMetadata({
    title: `${project.title} Interior Design Project | Grow More Portfolio`,
    description: `${project.description} View project scope, location, materials, and gallery from the Grow More Interior portfolio.`,
    path: `/projects/${id}`,
    image: project.heroImage,
    keywords: [project.category, project.location, "interior design project", "turnkey interiors"],
  });
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex justify-between items-center mb-12">
          <p className="text-[var(--color-primary)] tracking-widest text-sm uppercase">
            {project.category}
          </p>
          <Link href="/projects" className="text-gray-400 hover:text-primary uppercase tracking-widest text-xs border-b border-gray-600 hover:border-white pb-1 transition-all">
            Back to Projects
          </Link>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-16">
          {project.title}
        </h1>

        <div className="aspect-[21/9] relative mb-24 overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1 border-t border-border pt-8">
            <div className="mb-8">
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Client</span>
              <p className="text-foreground font-serif text-lg">{project.client}</p>
            </div>
            <div className="mb-8">
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Location</span>
              <p className="text-foreground font-serif text-lg">{project.location}</p>
            </div>
            <div>
              <span className="text-gray-500 text-xs tracking-widest uppercase block mb-2">Year</span>
              <p className="text-foreground font-serif text-lg">{project.year}</p>
            </div>
          </div>
          
          <div className="lg:col-span-3 border-t border-border pt-8">
            <h2 className="font-serif text-3xl mb-8">The <span className="text-[var(--color-primary)]">Vision</span></h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Planning", "Circulation mapping, furniture scale, ceiling rhythm, and view-led zoning."],
                ["Materials", "Premium stone, veneer, soft upholstery, warm metal accents, and durable finishes."],
                ["Execution", "Coordinated civil work, custom furniture, lighting installation, styling, and handover."],
              ].map(([title, copy]) => (
                <div key={title} className="border border-border p-5">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-32 space-y-8">
          {project.gallery.map((img, index) => (
            <div key={index} className="aspect-[16/9] relative overflow-hidden group">
              <Image
                src={img}
                alt={`${project.title} gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
      
      <CTASection />
    </div>
  );
}
