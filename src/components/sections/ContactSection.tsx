import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, CheckCircle, Send, Loader2 } from "lucide-react";
import { COMPANY } from "@/data/companyInfo";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(COMPANY.webhooks.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const BENEFITS = [
    "Free discovery call",
    "Response within 1 business day",
    "No obligation",
  ];

  const inputClasses =
    "w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg px-4 py-3 text-sm transition-colors";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 lg:py-10"
      style={{ background: "hsl(220 25% 5%)" }}
    >
      <div
        className={cn(
          "container mx-auto reveal",
          isVisible && "visible",
        )}
      >
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side — info */}
          <div className="flex flex-col justify-center lg:py-16">
            <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Get in Touch
            </span>

            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Ready to Eliminate{" "}
              <span className="text-gradient-gold">Administrative Drag</span>?
            </h2>

            <p className="mt-6 text-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
              Book a free 30-minute discovery call and we&rsquo;ll map out
              exactly how AI-powered workflows can remove the bottlenecks
              slowing your business down. No sales pitch — just a clear
              blueprint for growth.
            </p>

            {/* Contact info */}
            <div className="mt-10 flex flex-col gap-4">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                  <Phone className="h-5 w-5 text-gold" />
                </span>
                <span className="text-sm sm:text-base">{COMPANY.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                  <Mail className="h-5 w-5 text-gold" />
                </span>
                <span className="text-sm sm:text-base">{COMPANY.email}</span>
              </a>
            </div>

            {/* Benefits */}
            <ul className="mt-10 flex flex-col gap-3">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-2.5 text-white/70 text-sm"
                >
                  <CheckCircle className="h-4 w-4 text-teal shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side — form */}
          <div className="lg:py-16">
            <div className="rounded-2xl border border-[hsl(220_14%_18%)] bg-[hsl(220_18%_10%)] p-7">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
                    <CheckCircle className="h-7 w-7 text-teal" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-white/50 max-w-xs">
                    We&rsquo;ll get back to you within one business day. Looking
                    forward to connecting.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="text-white/70 text-sm font-medium mb-1.5 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className={inputClasses}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-white/70 text-sm font-medium mb-1.5 block">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Corp"
                      className={inputClasses}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-white/70 text-sm font-medium mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@acme.com"
                      className={inputClasses}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-white/70 text-sm font-medium mb-1.5 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className={inputClasses}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-white/70 text-sm font-medium mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project or challenge..."
                      className={cn(inputClasses, "resize-none")}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 font-heading text-sm font-semibold text-gold-foreground",
                      "transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed",
                    )}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Inquiry
                      </>
                    )}
                  </button>

                  {/* Privacy */}
                  <p className="text-[11px] text-white/30 leading-relaxed">
                    We respect your privacy. Your information is only used to
                    respond to your inquiry and is never shared with third
                    parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="mt-16 rounded-2xl overflow-hidden opacity-80">
          <iframe
            title="GSD with AI — Houston, TX"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.5429003966!2d-95.68190929999999!3d29.8171079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="300"
            style={{
              border: 0,
              filter:
                "grayscale(100%) invert(92%) hue-rotate(180deg) contrast(0.8)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
