import type { Metadata } from "next";
import ContactBookingClient from "@/components/sections/ContactBookingClient";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a 20-minute discovery call with GSD with AI. You walk us through the friction. We walk back the first thing worth wiring. Houston-based. TX/OK/LA corridor.",
  alternates: { canonical: "https://www.getsstuffdone.com/contact" },
};

export default function ContactPage() {
  return <ContactBookingClient />;
}
