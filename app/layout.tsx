import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFAB from "@/components/ContactFAB";
import { ThemeProvider } from "@/components/ThemeProvider";
import Tracking from "@/components/Tracking";
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
  alternates: { canonical: null },
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
        <Script id="consent-defaults" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){ window.dataLayer.push(arguments); };
          gtag('consent', 'default', {
            analytics_storage: 'denied', ad_storage: 'denied',
            ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500
          });
          gtag('set', 'ads_data_redaction', true);
          try { localStorage.removeItem('tracking-consent-v1'); } catch(e) {}
        `}</Script>
        <Script id="google-tag-manager" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NQWM67T');
        `}</Script>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NQWM67T" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" /></noscript>

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
          <Tracking />
          <ScrollRevealInit />
        </ThemeProvider>
      </body>
    </html>
  );
}
