import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingMobileCTA from "@/components/layout/FloatingMobileCTA";
import DesktopStickyCTA from "@/components/layout/DesktopStickyCTA";
import Script from "next/script";

// Self-host Inter via next/font/google — eliminates the render-blocking
// fonts.googleapis.com round trip (was costing ~780ms per Lighthouse).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://www.getsstuffdone.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | GSD with AI",
    default: "GSD with AI | Connect the yard, the office, and the CRM.",
  },
  description: "For oilfield and industrial services SMBs in Texas, Oklahoma, and Louisiana. Built by a 20-year energy data lead.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "GSD with AI — Connect the yard, the office, and the CRM. In 6 weeks.",
    description: "For oilfield and industrial services SMBs in Texas, Oklahoma, and Louisiana. Built by a 20-year energy data lead. Foundations from $25K.",
    url: SITE_URL,
    siteName: "GSD with AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GSD with AI — Connect the yard, the office, and the CRM. In 6 weeks.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GSD with AI",
    description: "Connect the yard, the office, and the CRM. In 6 weeks.",
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
        {/* Plausible Analytics — privacy-first, no cookie banner.
            Manifesto: Plausible/Fathom over GA4. Domain auto-detected from current host. */}
        <Script
          defer
          data-domain="getsstuffdone.com"
          src="https://plausible.io/js/script.outbound-links.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased font-sans flex min-h-screen flex-col`}>
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "GSD with AI",
                "url": "https://www.getsstuffdone.com",
                "founder": {
                  "@type": "Person",
                  "name": "Maxine Aitkenhead"
                },
                "areaServed": [
                  { "@type": "State", "name": "Texas" },
                  { "@type": "State", "name": "Oklahoma" },
                  { "@type": "State", "name": "Louisiana" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "GSD with AI",
                "image": "https://www.getsstuffdone.com/logo.png",
                "url": "https://www.getsstuffdone.com",
                "telephone": "+12818442458",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Houston",
                  "addressRegion": "TX",
                  "addressCountry": "US"
                }
              }
            ]
          `}
        </Script>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <FloatingMobileCTA />
        <DesktopStickyCTA />
      </body>
    </html>
  );
}
