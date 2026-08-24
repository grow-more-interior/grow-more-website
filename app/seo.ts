import type { Metadata } from "next";

export const siteConfig = {
  name: "Grow More Interior",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://growmoreinterior.com",
  phone: "+9779802364638",
  email: "info@growmoreinterior.com",
  address: "Uttar Dhoka, Kathmandu, Nepal",
  description:
    "Grow More Interior is a Kathmandu-based luxury interior design studio for turnkey residential, commercial, hospitality, retail, modular kitchen, wardrobe, lighting, and bespoke furniture projects across Nepal.",
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
    addressCountry: "NP",
  },
  areaServed: ["Kathmandu", "Lalitpur", "Pokhara", "Bardiya", "Nepal"],
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
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/products?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
