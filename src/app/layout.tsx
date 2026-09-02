import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingMobileCTA from "@/components/layout/FloatingMobileCTA";
import DesktopStickyCTA from "@/components/layout/DesktopStickyCTA";
import Script from "next/script";

// Self-host Inter via next/font/google - eliminates the render-blocking
// fonts.googleapis.com round trip (was costing ~780ms per Lighthouse).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://www.getsstuffdone.com";
const OG_IMAGE = `${SITE_URL}/og-default.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Gets Stuff Done",
    default: "Fractional Revenue Operations for Oilfield Technology Companies | Gets Stuff Done",
  },
  description:
    "GSD builds the torque oilfield technology companies need to close deals against long sales cycles. Fractional revenue operations, delivered in weeks. From $25K.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Fractional Revenue Operations for Oilfield Technology Companies | Gets Stuff Done",
    description:
      "GSD builds the torque oilfield technology companies need to close deals against long sales cycles. Delivered in weeks by operators who spent 20 years inside the customers you sell to.",
    url: SITE_URL,
    siteName: "Gets Stuff Done",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Gets Stuff Done, fractional revenue operations for oilfield technology companies.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Revenue Operations for Oilfield Technology Companies | Gets Stuff Done",
    description:
      "GSD builds the torque oilfield technology companies need to close deals against long sales cycles. Delivered in weeks.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Plausible Analytics - privacy-first, no cookie banner.
            Manifesto: Plausible/Fathom over GA4. Domain auto-detected from current host. */}
        <Script
          defer
          data-domain="getsstuffdone.com"
          src="https://plausible.io/js/script.outbound-links.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased font-sans flex min-h-screen flex-col`}>
        <Header />
        <main id="main" className="flex-1 pt-20 lg:pt-[88px]">{children}</main>
        <Footer />
        <FloatingMobileCTA />
        <DesktopStickyCTA />
      </body>
    </html>
  );
}
