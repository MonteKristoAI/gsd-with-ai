import type { Metadata } from "next";
import ContactBookingClient from "@/components/sections/ContactBookingClient";

export const metadata: Metadata = {
  title: "Book a 20-minute call",
  description:
    "Book a 20-minute call with GSD. Twenty minutes: you walk us through where deals stall, we walk back the first thing worth fixing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactBookingClient />;
}
