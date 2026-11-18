import Link from "next/link";
import { createMetadata } from "../seo";
export const metadata = createMetadata({ title: "Thank you | Grow More Interior", description: "Your enquiry has been received.", path: "/thank-you", noIndex: true });
export default function ThankYou() {
  return <section className="mx-auto max-w-2xl px-6 py-24 text-center"><h1 className="text-4xl font-serif">Thank you for your enquiry</h1><p className="my-6">Our team will review your project details and contact you. For urgent enquiries, <a className="underline" href="tel:+9779802364638">call +9779802364638</a>.</p><Link href="/" className="underline">Return home</Link></section>;
}
