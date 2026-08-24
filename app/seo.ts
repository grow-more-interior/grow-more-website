import type { Metadata } from "next";

export const siteConfig = {
  name: "Grow More Interior",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://growmoreinterior.com",
  phone: "+9779802364638",
  email: "info@growmoreinterior.com",
  address: "Uttar Dhoka, Kathmandu, Nepal",
  latitude: 27.7172,
  longitude: 85.324,
  description:
    "Grow More Interior is an interior design company in Kathmandu, Nepal for turnkey residential, commercial, hospitality, retail, modular kitchen, wardrobe, lighting, and bespoke furniture projects across Nepal.",
};

type SeoPage = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/hero-bg.png",
  noIndex = false,
}: SeoPage): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const imageUrl = image.startsWith("http") ? image : new URL(image, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [
      "interior design company in Kathmandu",
      "interior design company in Nepal",
      "best interior design company in Kathmandu",
      "interior company Kathmandu Nepal",
      "interior design Nepal",
      "interior designer Kathmandu",
      "luxury interior design",
      "turnkey interior design",
      "modular kitchen Nepal",
      "custom furniture Nepal",
      ...keywords,
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} interior design project`,
        },
      ],
      locale: "en_NP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/gm-logo.png`,
  image: `${siteConfig.url}/hero-bg.png`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uttar Dhoka",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati Province",
    postalCode: "44600",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.latitude,
    longitude: siteConfig.longitude,
  },
  hasMap: "https://maps.google.com/maps?q=Uttar%20Dhoka%2C%20Kathmandu%2C%20Nepal",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Pokhara" },
    { "@type": "AdministrativeArea", name: "Bagmati Province" },
    { "@type": "Country", name: "Nepal" },
  ],
  priceRange: "$$$",
  sameAs: [
    "https://www.facebook.com/growmore",
    "https://www.instagram.com/growmore",
    "https://www.linkedin.com/company/growmore",
  ],
  makesOffer: [
    "Residential interior design",
    "Commercial interior design",
    "Turnkey interior execution",
    "Modular kitchen design",
    "Custom furniture manufacturing",
    "Lighting design",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/products?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const interiorDesignServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/#interior-design-service`,
  name: "Interior design company in Kathmandu and Nepal",
  serviceType: "Interior design, turnkey interior execution, modular kitchen design, wardrobe design, lighting design, and custom furniture",
  provider: {
    "@id": `${siteConfig.url}/#organization`,
  },
  areaServed: [
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Pokhara" },
    { "@type": "Country", name: "Nepal" },
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${siteConfig.url}/contact`,
    servicePhone: siteConfig.phone,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Interior design services in Nepal",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential interior design in Kathmandu" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial interior design in Nepal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey interior execution" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modular kitchen and wardrobe design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom furniture manufacturing" } },
    ],
  },
};

export const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which interior design company should I contact in Kathmandu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grow More Interior is a Kathmandu-based interior design company serving homes, apartments, offices, retail stores, restaurants, hotels, and hospitality spaces across Nepal.",
      },
    },
    {
      "@type": "Question",
      name: "Does Grow More Interior handle turnkey interior projects in Nepal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Grow More Interior handles planning, 3D design, material selection, modular production, site coordination, lighting, furniture, and final styling for turnkey residential and commercial projects.",
      },
    },
    {
      "@type": "Question",
      name: "Which locations in Nepal does Grow More Interior serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grow More Interior primarily serves Kathmandu and Lalitpur, with project consultation and execution available for Pokhara, Bardiya, and other Nepal locations based on scope.",
      },
    },
  ],
};
