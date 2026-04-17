import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { COMPANY } from "@/data/companyInfo";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updated = "April 17, 2026";

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Privacy Policy | GSD with AI"
        description="How Gets Stuff Done LLC handles data submitted through this site. Plain English, no surprises."
        canonical="/privacy"
      />
      <Header />

      <main id="main" className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl px-6">
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
              Legal
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-[hsl(220_25%_14%)] md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-[hsl(215_15%_46%)]">Last updated {updated}</p>
          </header>

          <div className="space-y-8 text-[15px] leading-relaxed text-[hsl(215_15%_32%)]">
            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Who this applies to</h2>
              <p>
                This policy covers {COMPANY.legal} and anyone visiting or submitting a form on {COMPANY.website} or any page served from the same domain. When we say &ldquo;we&rdquo; or &ldquo;GSD&rdquo; below, that is who we mean.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">What we collect</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Information you submit through the discovery-call booking form, the contact form, or the feedback popup. That includes your name, email, phone, company, and anything you type into the message field.</li>
                <li>Basic request data your browser sends: IP address, user agent, referrer URL, and timestamps.</li>
                <li>If analytics is enabled, aggregated page-view data. We do not set advertising cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">What we do with it</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Reply to your inquiry. That is the only reason we read the inbox.</li>
                <li>Keep a record of the engagement for as long as the client relationship, or its follow-up window, is active.</li>
                <li>Operate and secure the site itself.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">What we do not do</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>We do not sell your data.</li>
                <li>We do not share it with marketing networks.</li>
                <li>We do not add you to a newsletter or drip sequence without a separate, explicit opt-in.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Subprocessors</h2>
              <p>
                Your form submissions land in an n8n automation that emails the information to {COMPANY.email}. Hosting is on Vercel. Form data is transmitted over HTTPS. We do not rent or contract with any third-party advertising platform.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Your rights</h2>
              <p>
                You can ask us to see what we hold on you, correct it, or delete it. Send the request to{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-[hsl(175_72%_38%)] underline">
                  {COMPANY.email}
                </a>
                . We respond inside ten business days. If you are in a jurisdiction with statutory privacy rights (CCPA, GDPR, or similar), those apply.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Contact</h2>
              <p>
                Questions about this policy go to{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-[hsl(175_72%_38%)] underline">
                  {COMPANY.email}
                </a>
                . Written inquiries to {COMPANY.legal}, {COMPANY.location}.
              </p>
            </section>

            <section className="rounded-lg border border-[hsl(175_72%_38%/0.2)] bg-[hsl(175_72%_38%/0.04)] p-4 text-sm">
              <strong className="text-[hsl(175_72%_38%)]">Note:</strong> This page is a plain-English summary of our practices. It does not replace legal advice. We will update the Last Updated date whenever the policy changes.
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
