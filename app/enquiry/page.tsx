import { Callout, PageHero } from "../components/PageSections";
import EnquiryForm from "./EnquiryForm";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Request Interior Design Consultation | Grow More Interior Nepal",
  description:
    "Request layouts, budgets, pricing, site measurement, 3D visualization, modular kitchen plans, wardrobe design, and turnkey interior consultation from Grow More.",
  path: "/enquiry",
  keywords: ["interior design enquiry Nepal", "request interior design consultation", "turnkey interior pricing Kathmandu"],
});

export default function EnquiryPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Design Enquiry" title="Request layouts, pricing, and consultation." copy="Send the space details and turnkey services you are considering. Grow More can help you choose design styles, plan budgets, and schedule site audits." />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <EnquiryForm />
        </div>
      </section>
      <Callout />
    </main>
  );
}
