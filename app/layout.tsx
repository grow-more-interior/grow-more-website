import type { Metadata } from "next";
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
        <script id="consent-defaults" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          window.gtag = function(){ window.dataLayer.push(arguments); };
          // Strict default for the EEA, UK and Switzerland.
          gtag('consent', 'default', {
            analytics_storage: 'denied', ad_storage: 'denied',
            ad_user_data: 'denied', ad_personalization: 'denied',
            region: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','GB','CH'],
            wait_for_update: 500
          });
          // Everyone else, including Nepal, is granted by default.
          gtag('consent', 'default', {
            analytics_storage: 'granted', ad_storage: 'granted',
            ad_user_data: 'granted', ad_personalization: 'granted'
          });
          gtag('set', 'ads_data_redaction', true);
          try {
            var choice = localStorage.getItem('tracking-consent-v1');
            if (choice === 'granted' || choice === 'denied') gtag('consent', 'update', {
              analytics_storage: choice, ad_storage: choice,
              ad_user_data: choice, ad_personalization: choice
            });
          } catch(e) {}
        ` }} />
        {/* Standard head bootstrap makes GTM detectable before hydration. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script id="google-tag-manager" dangerouslySetInnerHTML={{ __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NQWM67T');
        ` }} />
        {/* Meta Pixel Code */}
        <script id="meta-pixel" dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1429401858934115');
          fbq('track', 'PageView');
        ` }} />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1429401858934115&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
