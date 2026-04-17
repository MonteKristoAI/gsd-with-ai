import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { COMPANY } from "@/data/companyInfo";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updated = "April 17, 2026";

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Terms of Service | GSD with AI"
        description="Plain-English terms for using the GSD with AI website."
        canonical="/terms"
      />
      <Header />

      <main id="main" className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl px-6">
          <header className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
              Legal
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-[hsl(220_25%_14%)] md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-[hsl(215_15%_46%)]">Last updated {updated}</p>
          </header>

          <div className="space-y-8 text-[15px] leading-relaxed text-[hsl(215_15%_32%)]">
            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Using this site</h2>
              <p>
                This site is operated by {COMPANY.legal}. By using it, you agree to the terms below. If you do not, close the tab. That is the whole agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Content on the site</h2>
              <p>
                The words, images, and code on {COMPANY.website} belong to {COMPANY.legal} or are licensed to us. You may read, share, and reference them. You may not wholesale copy or repackage them as your own.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Case studies and testimonials</h2>
              <p>
                The scenarios on the case studies page are composite examples based on the operational patterns we see most often in mid-market teams. They are labeled as such on the page itself. Named client case studies will be added as ongoing engagements mature.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">No engagement from this page</h2>
              <p>
                Nothing on this site constitutes a contract, a proposal, a quote, or legal advice. Engagements with GSD begin only after a written scope is signed by both sides.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Third-party links</h2>
              <p>
                We link to third-party sites when they are relevant. We do not control those sites and we are not responsible for their content or their terms.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Disclaimer of warranties</h2>
              <p>
                The site is provided as-is. We do not warrant that it will be available every minute of every day, or that every link and script on it will always work. We also do not warrant that case study metrics map to your specific operation. Your mileage depends on your team, your tooling, and the work you actually ship.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, {COMPANY.legal} is not liable for indirect, incidental, consequential, or special damages arising from your use of the site. The site is marketing, not a production system.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Governing law</h2>
              <p>
                These terms are governed by the laws of the State of Texas. Any dispute is resolved in the state or federal courts located in Harris County, Texas.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Changes</h2>
              <p>
                We may update these terms. When we do, we revise the Last Updated date above. Continued use of the site after a change constitutes acceptance of the new version.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-[hsl(220_25%_14%)]">Contact</h2>
              <p>
                Questions go to{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-[hsl(175_72%_38%)] underline">
                  {COMPANY.email}
                </a>
                .
              </p>
            </section>

            <section className="rounded-lg border border-[hsl(175_72%_38%/0.2)] bg-[hsl(175_72%_38%/0.04)] p-4 text-sm">
              <strong className="text-[hsl(175_72%_38%)]">Note:</strong> This page is a plain-English summary of our terms. It does not replace legal advice. A fuller agreement accompanies any signed engagement.
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
