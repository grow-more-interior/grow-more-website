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
