import { PageHero } from "../components/PageSections";
import { createMetadata } from "../seo";
export const metadata = createMetadata({ title: "Privacy Policy | Grow More Interior", description: "How we handle enquiries, cookies, analytics, Google and Meta advertising data.", path: "/privacy-policy", noIndex: true });
export default function PrivacyPolicyPage() {
  const sections = [
    ["Information you provide", "When you submit an enquiry, we collect your name, phone number, email address, space type and message. Please avoid including sensitive information. We use these details to respond, prepare proposals and coordinate projects."],
    ["Service providers and security", "Enquiry form details are sent to Web3Forms to deliver your message to our team. Hosting and delivery providers process data on our behalf and may process it outside Nepal. We use access controls and encrypted connections. We do not sell enquiry details. Web3Forms applies its own spam protection to form submissions."],
    ["Cookies, Google (Analytics & Ads) and Meta", "Google Tag Manager manages measurement tags on our website. With your permission, Google Analytics 4 measures visits and interactions, and Google Ads and Meta (Facebook/Instagram) technologies measure conversions, match advertising interactions and support remarketing. Optional analytics and advertising storage, ad personalization and advertising user data are denied by default until you accept them in our cookie banner. Google and Meta may receive technical information such as page visits, browser/device information, cookie identifiers and IP address, and may process data abroad in accordance with their respective policies. With denied consent, Google tags may still send basic cookieless measurement signals."],
    ["Your choices", "You can accept or reject optional analytics and advertising cookies using the cookie popup in the bottom-left corner of the site, or change your preference anytime via the 'Cookie settings' button at the bottom of the page. You can submit an enquiry without accepting optional cookies, and you can also manage or clear cookies in your browser settings. We do not place your enquiry message or raw contact details in analytics events."],
    ["Retention", "We keep enquiry details while responding to your request and for any resulting project, then only as needed for business records or applicable legal obligations. Provider backups and Google or Meta measurement data follow their configured retention periods. Contact us for the retention period that applies to your records or to request deletion."],
    ["Access, correction and deletion", "To request access, correction or deletion of your details, withdraw permission, or ask a privacy question, email info@growmoreinterior.com. Please provide enough information for us to locate your enquiry. We may need to verify your identity and retain records required by law."],
  ];
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="How we handle your information." copy="Last updated: 24 November 2026. This policy covers the Grow More Interior website, cookies and enquiry forms." />
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-8">
        {sections.map(([title, text]) => (
          <section key={title}>
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="leading-7">{text}</p>
          </section>
        ))}
        <div className="rounded-xl border border-gray-200 bg-[#f7f4ee] p-6 space-y-3 text-sm leading-6">
          <h2 className="text-base font-semibold text-[#1a1614]">Third-Party Privacy Policies</h2>
          <p>For more details on how Google and Meta process measurement and advertising data, please review their policies:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-[#C9A84C]">
                Google Privacy &amp; Terms
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-[#C9A84C]">
                Meta (Facebook &amp; Instagram) Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <p>
          Grow More Interior, Uttar Dhoka, Kathmandu, Nepal.{" "}
          <a href="mailto:info@growmoreinterior.com" className="underline">
            Contact us about privacy
          </a>
          .
        </p>
      </section>
    </>
  );
}
