import { FAQSection, PageHero } from "../components/PageSections";
import EnquiryForm from "../enquiry/EnquiryForm";
import { createMetadata } from "../seo";

export const metadata = createMetadata({
  title: "Contact Interior Designers in Kathmandu | Grow More Interior",
  description:
    "Contact Grow More Interior for home interior design, office design, modular kitchen, wardrobe, lighting, furniture, and turnkey renovation enquiries in Nepal.",
  path: "/contact",
  keywords: ["contact interior designer Kathmandu", "interior design consultation Nepal", "home renovation enquiry Kathmandu"],
});

export default function ContactPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Contact Us" title="Let us build your dream space." copy="Reach out for residential interiors, office fit-outs, modular kitchens, wardrobes, lighting plans, furniture commissions, appointments, career opportunities, or direct assistance." />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1614]">Experience Studio</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">Uttar Dhoka, Kathmandu, Nepal<br />10:00 AM-7:00 PM</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1614]">Corporate Office</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">4th Floor, Lal Durbar One, Narayanhiti Path, Durbar Marg, Kathmandu</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#1a1614]">Talk to Us</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600"><a className="font-bold text-[#C9A84C]" href="tel:+9779802364638">+977-9802364638</a><br /><a className="font-bold text-[#C9A84C]" href="mailto:info@growmoreinterior.com">info@growmoreinterior.com</a></p>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1a1614]">Send an enquiry</h2>
          <EnquiryForm />
        </div>
      </section>
      <FAQSection
        eyebrow="Before You Visit"
        title="Consultation details"
        items={[
          ["What should I bring for a design consultation?", "Bring floor plans, room measurements, photos or videos of the site, inspiration images, approximate budget, timeline, and a list of must-have functions."],
          ["Can I schedule a site visit?", "Yes. Share your location and project scope through the enquiry form, and the Grow More team will coordinate a measurement visit or design consultation."],
          ["Do you handle commercial interiors?", "Yes. We design offices, retail stores, hospitality spaces, restaurants, showrooms, and branded customer experience areas."],
        ]}
      />
    </main>
  );
}
