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
import { createMetadata } from "./seo";

export const metadata = createMetadata({
  title: "Luxury Interior Design in Kathmandu | Grow More Interior Nepal",
  description:
    "Grow More Interior creates turnkey luxury homes, modular kitchens, wardrobes, commercial interiors, lighting plans, and bespoke furniture for clients across Kathmandu and Nepal.",
  keywords: [
    "luxury interior design Kathmandu",
    "turnkey interiors Nepal",
    "home renovation Kathmandu",
    "modular kitchen Kathmandu",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <StatsTicker />
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
