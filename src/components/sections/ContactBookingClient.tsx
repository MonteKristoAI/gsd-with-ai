import { Mail, Phone, ArrowRight, CalendarClock } from "lucide-react";
import { COMPANY } from "@/data/companyInfo";

// NOTE: the previous Calendly embed pointed at calendly.com/maxine-gsd/discovery-call,
// which returns 404 (the event does not exist). Until Maxine publishes a real
// 20-minute Calendly event, the page books via email/phone so visitors never
// hit a broken calendar. To re-enable Calendly: set a valid event URL and embed
// the inline widget (assets.calendly.com/assets/external/widget.js) in the left card.

const phoneDigits = COMPANY.phone.replace(/\D/g, "");
const mailtoBook = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
  "Book a 20-minute call",
)}&body=${encodeURIComponent(
  "Hi GSD,\n\nI'd like to book a 20-minute call. A few times that work for me:\n- \n- \n\nCompany:\nWhat I'd most want to fix this quarter:\n\nThanks,",
)}`;

export default function ContactBookingClient() {
  return (
    <div className="container mx-auto px-6 py-20 lg:py-24 min-h-[70vh]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-navy sm:text-5xl">Book a 20-minute call</h1>
          <p className="mt-6 text-xl text-slate max-w-2xl mx-auto">
            Twenty minutes. You walk us through where deals stall. We walk back the first thing worth fixing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Booking card */}
          <div className="rounded-2xl border border-slate/15 bg-cream p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
              <CalendarClock className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-navy">Grab a time</h2>
            <p className="mt-3 leading-relaxed text-slate">
              Send us two or three times that suit you and we'll confirm the call plus a short agenda. Prefer to talk
              now? Call or text and we'll pick it up.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={mailtoBook}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-light"
              >
                Book by email <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${phoneDigits}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-navy/40"
              >
                <Phone className="h-4 w-4" /> Call or text
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-muted">
              Every engagement starts with a Torque Diagnostic. No pressure on the call, just a real diagnostic of where
              your growth is stalling.
            </p>
          </div>

          {/* Direct contact + fit */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-slate/15 bg-white p-7">
              <h3 className="text-lg font-bold text-navy mb-4">Direct contact</h3>
              <div className="space-y-5">
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate-muted">Email</span>
                    <span className="font-bold text-navy">{COMPANY.email}</span>
                  </span>
                </a>
                <a href={`tel:${phoneDigits}`} className="flex items-center gap-4 group">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate-muted">Call or text</span>
                    <span className="font-bold text-navy">{COMPANY.phone}</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-navy p-7 text-white">
              <h3 className="text-lg font-bold mb-3">Who we do NOT work with</h3>
              <ul className="space-y-2 text-white/70 text-sm list-disc pl-4">
                <li>Operators and owner-operators (we serve the companies selling into the oilfield).</li>
                <li>Requests for one-off strategy decks.</li>
                <li>Companies well under $8M in revenue.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
