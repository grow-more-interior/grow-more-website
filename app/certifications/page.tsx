import { PageHero, Callout } from "../components/PageSections";
import { createMetadata } from "../seo";
export const metadata = createMetadata({ title: "Project Quality | Grow More Interior", description: "Discuss material specifications and quality requirements for your interior project.", path: "/certifications" });
export default function QualityPage() {
  return <><PageHero eyebrow="Project Quality" title="Make informed material choices." copy="Ask our team about specifications, samples and quality requirements for your project." /><section className="mx-auto max-w-3xl p-8 leading-8"><p>Discuss material suitability, installation details and maintenance needs before approving your design. Any certification, warranty or membership relevant to your project should be confirmed through its supporting documentation.</p></section><Callout /></>;
}
