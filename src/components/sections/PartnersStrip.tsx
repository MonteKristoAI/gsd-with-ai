const LOGOS = [
  {
    name: "n8n",
    src: "https://n8n.io/favicon.ico",
    fallbackText: "n8n",
    width: 32,
  },
  {
    name: "GoHighLevel",
    src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9ef4b253ee28e37dab65adbeed203f54/gohighlevel.png",
    fallbackText: "GoHighLevel",
    width: 120,
  },
  {
    name: "Apollo",
    src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1e6b79d556cd91dd115ef8f8ea81e4f4/apollo-io.png",
    fallbackText: "Apollo",
    width: 100,
  },
  {
    name: "Instantly",
    src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_fa4025b1c97a0e40eb40cade44e0cd53/instantly.png",
    fallbackText: "Instantly",
    width: 100,
  },
  {
    name: "Anthropic",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    fallbackText: "Anthropic",
    width: 110,
  },
  {
    name: "OpenAI",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    fallbackText: "OpenAI",
    width: 100,
  },
  {
    name: "Salesforce",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    fallbackText: "Salesforce",
    width: 100,
  },
  {
    name: "HubSpot",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    fallbackText: "HubSpot",
    width: 100,
  },
  {
    name: "Zapier",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Zapier_logo.svg",
    fallbackText: "Zapier",
    width: 90,
  },
  {
    name: "Slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    fallbackText: "Slack",
    width: 36,
  },
  {
    name: "Make",
    src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0dc43e1bd1de35d15b3c9d4a3d04674e/make.png",
    fallbackText: "Make",
    width: 80,
  },
  {
    name: "Retell AI",
    src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d81f3e3abec6e0094bfd0a6df6795be2/retell-ai.png",
    fallbackText: "Retell AI",
    width: 100,
  },
];

const ROW_1 = LOGOS.slice(0, 6);
const ROW_2 = LOGOS.slice(6, 12);

function LogoItem({ logo }: { logo: (typeof LOGOS)[number] }) {
  return (
    <div className="flex items-center justify-center shrink-0" style={{ width: logo.width, height: 40 }}>
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-[36px] max-w-full w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
        draggable={false}
        loading="lazy"
        onError={(e) => {
          // Fallback to text if image fails
          const target = e.currentTarget;
          target.style.display = "none";
          const span = document.createElement("span");
          span.textContent = logo.fallbackText;
          span.className = "text-base font-bold text-gray-400";
          target.parentElement?.appendChild(span);
        }}
      />
    </div>
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
    <section className="bg-[hsl(210_25%_97%)] bg-texture-dots relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-radial-teal pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-6 relative">
        <p className="mb-12 text-center text-sm font-medium text-muted-foreground tracking-wide">
          Trusted tools powering our solutions
        </p>

        {/* Desktop: 2 rows of 6 */}
        <div className="hidden md:flex flex-col items-center gap-10">
          <div className="flex items-center justify-center gap-16">
            {ROW_1.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-16">
            {ROW_2.map((logo) => (
              <LogoItem key={logo.name} logo={logo} />
            ))}
          </div>
        </div>

        {/* Mobile: infinite marquee */}
        <div className="md:hidden relative">
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
