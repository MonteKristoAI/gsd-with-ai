import logoN8n from "@/assets/partners/n8n.svg";
import logoGHL from "@/assets/partners/gohighlevel.svg";
import logoApollo from "@/assets/partners/apollo.svg";
import logoInstantly from "@/assets/partners/instantly.svg";
import logoClaude from "@/assets/partners/claude-code.svg";
import logoOpenAI from "@/assets/partners/openai.svg";
import logoSalesforce from "@/assets/partners/salesforce.svg";
import logoHubSpot from "@/assets/partners/hubspot.svg";
import logoZapier from "@/assets/partners/zapier.svg";
import logoSlack from "@/assets/partners/slack.svg";
import logoMake from "@/assets/partners/make.svg";
import logoRetellAI from "@/assets/partners/retellai.svg";

const LOGOS = [
  { name: "n8n", src: logoN8n, width: 80 },
  { name: "GoHighLevel", src: logoGHL, width: 140 },
  { name: "Apollo", src: logoApollo, width: 100 },
  { name: "Instantly", src: logoInstantly, width: 110 },
  { name: "Claude Code", src: logoClaude, width: 140 },
  { name: "OpenAI", src: logoOpenAI, width: 100 },
  { name: "Salesforce", src: logoSalesforce, width: 130 },
  { name: "HubSpot", src: logoHubSpot, width: 110 },
  { name: "Zapier", src: logoZapier, width: 90 },
  { name: "Slack", src: logoSlack, width: 80 },
  { name: "Make", src: logoMake, width: 80 },
  { name: "Retell AI", src: logoRetellAI, width: 110 },
];

const ROW_1 = LOGOS.slice(0, 6);
const ROW_2 = LOGOS.slice(6, 12);

function LogoItem({ logo }: { logo: (typeof LOGOS)[number] }) {
  return (
    <img
      src={logo.src}
      alt={logo.name}
      width={logo.width}
      height={40}
      className="h-8 w-auto shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
      draggable={false}
    />
  );
}

function AllLogos() {
  return (
    <>
      {LOGOS.map((logo) => (
        <LogoItem key={logo.name} logo={logo} />
      ))}
    </>
  );
}

export default function PartnersStrip() {
  return (
    <section className="bg-[hsl(210_25%_97%)] py-14 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="mb-10 text-center text-sm font-medium text-muted-foreground">
          Trusted tools powering our solutions
        </p>

        {/* Desktop: 2 rows of 6 */}
        <div className="hidden md:flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-14">
            {ROW_1.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-14">
            {ROW_2.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>
        </div>

        {/* Mobile: infinite marquee */}
        <div className="md:hidden relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[hsl(210_25%_97%)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[hsl(210_25%_97%)] to-transparent" />

          <div className="flex w-max gap-12 marquee-track" aria-label="Partner tools">
            <AllLogos />
            <div aria-hidden="true" className="flex gap-12">
              <AllLogos />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
