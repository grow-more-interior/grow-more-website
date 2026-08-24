import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFAB from "@/components/ContactFAB";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { createMetadata, organizationJsonLd, siteConfig, websiteJsonLd } from "./seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const fraunces = localFont({
  src: "./fonts/Fraunces_72pt_Soft-SemiBold.ttf",
  variable: "--font-fraunces",
  display: "swap",
});

const carena = localFont({
  src: "./fonts/Carena-Regular.otf",
  variable: "--carena-font",
  display: "swap",
});

const whyteInktrap = localFont({
  src: "../public/fonts/ABCWhyteInktrap-Bold-Trial.otf",
  variable: "--font-whyte-inktrap",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Interior Design in Kathmandu, Nepal | Grow More Interior",
    description: siteConfig.description,
    keywords: [
      "interior design Kathmandu",
      "home interior design Nepal",
      "commercial interior designer Nepal",
      "bespoke furniture Kathmandu",
    ],
  }),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${fraunces.variable} ${carena.variable} ${whyteInktrap.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.className} flex flex-col min-h-full bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ContactFAB />
          <ScrollRevealInit />
        </ThemeProvider>
      </body>
    </html>
  );
}
