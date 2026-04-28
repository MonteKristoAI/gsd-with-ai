import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingMobileCTA from "@/components/layout/FloatingMobileCTA";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    template: "%s | GSD with AI",
    default: "GSD with AI | Connect the yard, the office, and the CRM.",
  },
  description: "For oilfield and industrial services SMBs in Texas, Oklahoma, and Louisiana. Built by a 20-year energy data lead.",
  openGraph: {
    title: "GSD with AI",
    description: "Connect the yard, the office, and the CRM. In 6 weeks.",
    url: "https://www.getsstuffdone.com",
    siteName: "GSD with AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSD with AI",
    description: "Connect the yard, the office, and the CRM. In 6 weeks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans flex min-h-screen flex-col">
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
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}
