import logoN8n from "@/assets/partners/n8n.svg";
import logoGHL from "@/assets/partners/gohighlevel.svg";
import logoApollo from "@/assets/partners/apollo.svg";
import logoInstantly from "@/assets/partners/instantly.svg";
import logoClaude from "@/assets/partners/claude-code.svg";
import logoOpenAI from "@/assets/partners/openai.svg";

const LOGOS = [
  { name: "n8n", src: logoN8n, width: 80 },
  { name: "GoHighLevel", src: logoGHL, width: 140 },
  { name: "Apollo", src: logoApollo, width: 100 },
  { name: "Instantly", src: logoInstantly, width: 110 },
  { name: "Claude Code", src: logoClaude, width: 140 },
  { name: "OpenAI", src: logoOpenAI, width: 100 },
];

function LogoRow() {
  return (
    <>
      {LOGOS.map((logo) => (
        <img
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          width={logo.width}
          height={40}
          className="h-8 w-auto shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
          draggable={false}
        />
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

        {/* Desktop: static centered row */}
        <div className="hidden md:flex items-center justify-center gap-14">
          <LogoRow />
        </div>

        {/* Mobile: infinite marquee */}
        <div className="md:hidden relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[hsl(210_25%_97%)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[hsl(210_25%_97%)] to-transparent" />

          <div className="flex w-max gap-12 marquee-track" aria-label="Partner tools">
            <LogoRow />
            <div aria-hidden="true" className="flex gap-12">
              <LogoRow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
