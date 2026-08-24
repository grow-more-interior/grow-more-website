import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import Feature from "@/components/ui/feature-with-image-comparison";
import InspirationGrid from "@/components/InspirationGrid";
import TestimonialsSnippet from "@/components/TestimonialsSnippet";
import CTASection from "@/components/CTASection";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import StatsTicker from "@/components/StatsTicker";
import LocalSeoSection from "@/components/LocalSeoSection";
import { createMetadata, homeFaqJsonLd, interiorDesignServiceJsonLd } from "./seo";

export const metadata = createMetadata({
  title: "Interior Design Company in Kathmandu, Nepal | Grow More Interior",
  description:
    "Grow More Interior is an interior design company in Kathmandu, Nepal for turnkey home interiors, office design, modular kitchens, wardrobes, lighting, and custom furniture.",
  keywords: [
    "interior design company in Kathmandu",
    "interior design company in Nepal",
    "best interior design company in Kathmandu",
    "interior company in Nepal",
    "luxury interior design Kathmandu",
    "turnkey interiors Nepal",
    "home renovation Kathmandu",
    "modular kitchen Kathmandu",
  ],
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(interiorDesignServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <Hero />
      <StatsTicker />
      <LocalSeoSection />
      <AboutPreview />
      <Services />
      <FeaturedProjects />
      <Feature />
      <ProcessSection />
      <InspirationGrid />
      <TestimonialsSnippet />
      <CTASection />
    </>
  );
}
