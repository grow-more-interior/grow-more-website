import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFAB from "@/components/ContactFAB";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollRevealInit from "@/components/ScrollRevealInit";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
  title: "Grow More Interior — Designing Timeless Spaces",
  description:
    "Grow More Interior is a premium luxury interior design firm specialising in bespoke residential and commercial spaces. Transform your space with award-winning designers.",
  keywords: "interior design, luxury interiors, bespoke design, residential design, commercial interiors",
  openGraph: {
    title: "Grow More Interior — Designing Timeless Spaces",
    description: "A premium interior design firm specialising in luxury, modern, and elegant spaces.",
    type: "website",
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
      className={`${poppins.variable} ${fraunces.variable} ${carena.variable} ${whyteInktrap.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className={`${poppins.className} flex flex-col min-h-full bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
