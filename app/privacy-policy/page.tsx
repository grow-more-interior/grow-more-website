import { PageHero } from "../components/PageSections";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f7f4ee]">
      <PageHero eyebrow="Privacy Policy" title="Your information is handled with care." copy="This page provides a simple privacy overview for enquiry and contact interactions on the Grow More website." />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 text-sm leading-7 text-gray-600 shadow-sm sm:p-8">
          <p>Grow More may collect contact details you submit through enquiry, contact, or career forms so our team can respond to your request.</p>
          <p>Information is used for communication, design assistance, project coordination, and service improvement. It is not sold to third parties.</p>
          <p>For privacy questions, contact <a className="font-bold text-[#C9A84C]" href="mailto:info@growmoreinterior.com">info@growmoreinterior.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
