import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingMobileCTA from "@/components/layout/FloatingMobileCTA";

export const metadata: Metadata = {
  title: "GSD with AI",
  description: "Connect the yard, the office, and the CRM. In 6 weeks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}
