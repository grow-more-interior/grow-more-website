import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "../enquiry/EnquiryForm";

export const metadata = {
  title: "Grow More Dashain Design Festival 2082 – Up to 25% Off + 0% EMI & Free Gifts",
  description: "Celebrate Dashain 2082 with Grow More's biggest festive interior design sale – discounts up to 25%, free custom sofa sets, easy 0% EMI financing, and layout exchange upgrades. Create your dream space with premium Nepalese craftsmanship and professional architecture.",
};

const festiveOffers = [
  {
    title: "25% Festive Discount",
    badge: "Limited Time",
    description: "Enjoy direct discounts up to 25% on modular kitchen packages, premium wardrobe sets, and turnkey space planning.",
    highlight: "Saves up to NPR 3,00,000",
  },
  {
    title: "0% Interest EMI Scheme",
    badge: "Design Now, Pay Later",
    description: "Finance your turnkey project with 0% interest monthly plans over 12 months in collaboration with top Nepalese banks.",
    highlight: "Partners: Nabil, NIMB, HBL",
  },
  {
    title: "Free Premium Sofa / Pullouts",
    badge: "Festive Gift",
    description: "Get a free custom walnut-leather sofa set on projects above 20 Lakhs, or premium kitchen drawer organizers on projects above 10 Lakhs.",
    highlight: "Worth up to NPR 1,50,000",
  },
  {
    title: "Space Exchange & Upgrade",
    badge: "Renovation Bonus",
    description: "Exchange your old modular setup or worn furniture and get a festive valuation bonus up to 1 Lakh applied to your new turnkey contract.",
    highlight: "Valuation within 48 Hours",
  },
];

const emiPartners = [
  { bank: "Nabil Bank", tenure: "12 Months", rate: "0% Interest", process: "Instant Approval" },
  { bank: "Nepal Investment Mega Bank (NIMB)", tenure: "12/18 Months", rate: "0% Interest", process: "Paperless processing" },
  { bank: "Himalayan Bank Ltd (HBL)", tenure: "12 Months", rate: "0% Interest", process: "Credit card EMI" },
  { bank: "Hulas Finserve", tenure: "6/12 Months", rate: "0% Interest", process: "No Credit Card Needed" },
];

export default function DashainOfferPage() {
  return (
    <main className="bg-[#f7f4ee] min-h-screen text-[#1a1614]">
      {/* Immersive Festive Hero Section */}
      <section className="relative bg-[#0e0c0a] text-white overflow-hidden py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9A84C] bg-[#C9A84C]/10 px-4 py-1.5 rounded-full border border-[#C9A84C]/20">
                Grow More Dashain Design Festival 2082
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                उज्ज्वल दशैँ, <br />
                <span className="text-[#C9A84C]">उत्कृष्ट घर</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Celebrate Dashain with premium custom interiors. Get up to 25% Off, easy 0% interest EMI options, and complimentary designer gifts to welcome blessings into your home.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#book-offer"
                  className="px-6 py-3 bg-[#C9A84C] hover:bg-[#a8893c] text-gray-900 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
                >
                  Lock Festive Rates
                </a>
                <a
                  href="/projects"
                  className="px-6 py-3 border border-white/20 hover:border-white/50 text-white rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-300 bg-white/5"
                >
                  View Portfolios
                </a>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[540px] aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/dashain-banner.png"
                  alt="Grow More Dashain Festive Design Suite"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Subtle red/gold decorative shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Offers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A84C]">Exclusive Benefits</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl">Festive packages curated for you</h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">Make your home ready for guest gatherings and family blessings with our limited-edition Dashain offers.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {festiveOffers.map((offer) => (
            <div key={offer.title} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col justify-between hover:border-[#C9A84C]/50 transition-all duration-300 group">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full">{offer.badge}</span>
                <h3 className="mt-4 text-2xl font-bold text-[#1a1614]">{offer.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{offer.description}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-gray-400">Offer highlight</span>
                <span className="text-sm font-bold text-[#C9A84C]">{offer.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMI Details Section */}
      <section className="bg-white py-20 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A84C]">0% Financing</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1a1614]">Flexible EMI banking partners</h2>
            <p className="mt-4 text-sm leading-6 text-gray-600">Finance your home styling projects with absolute convenience. Pay in monthly installments without extra fees.</p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-4 bg-[#1a1614] px-6 py-4 text-xs font-bold uppercase tracking-widest text-white">
              <span>Partner Institution</span>
              <span>Tenure</span>
              <span>Interest Rate</span>
              <span>Remarks</span>
            </div>
            {emiPartners.map((partner) => (
              <div key={partner.bank} className="grid grid-cols-4 border-t border-gray-100 px-6 py-4 text-sm items-center">
                <span className="font-bold text-[#1a1614]">{partner.bank}</span>
                <span className="text-gray-700">{partner.tenure}</span>
                <span className="font-bold text-[#C9A84C]">{partner.rate}</span>
                <span className="text-xs text-gray-500">{partner.process}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Gifts Terms Band */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9A84C]">Festive Bonuses</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1614] sm:text-4xl">Upgrade your space with complimentary gifts</h2>
            <p className="text-sm leading-7 text-gray-600">Every project signed during the Dashain festival receives an automatic upgrade package. Make your space truly outstanding before the festivals begin.</p>
            <ul className="space-y-3.5 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A84C] text-[10px] font-bold text-white">✓</span>
                <span>Free site layout measurement & architect audit</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A84C] text-[10px] font-bold text-white">✓</span>
                <span>Complementary 3D color mockup & lighting plan</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A84C] text-[10px] font-bold text-white">✓</span>
                <span>Full manufacturer warranty on modular components</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-[#C9A84C] mb-3">10L+</div>
              <h4 className="text-lg font-bold text-[#1a1614] mb-2">Modular Accessories</h4>
              <p className="text-xs leading-6 text-gray-600">Receive free premium stainless steel pullout drawers, soft-close dividers, and built-in waste bins on layouts above 10 Lakhs.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-extrabold text-[#C9A84C] mb-3">20L+</div>
              <h4 className="text-lg font-bold text-[#1a1614] mb-2">Bespoke Sofa Set</h4>
              <p className="text-xs leading-6 text-gray-600">Receive a custom-designed luxury solid wood and leather sofa set tailored to your living space on projects above 20 Lakhs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Booking / Consultation Form */}
      <section id="book-offer" className="bg-[#1a1614] text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A84C]">Offer Reservation</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">Lock your festive pricing</h2>
            <p className="mt-4 text-sm leading-6 text-white/70">Fill out this quick enquiry form to claim your Dashain 2082 discount rates. Our Principal Architect will schedule a free consult.</p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-6 sm:p-10 shadow-xl border border-gray-800">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
