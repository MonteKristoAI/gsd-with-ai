import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Sparkles, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data/companyInfo";
import founderImg from "@/assets/founder-maxine.webp";

export default function AboutFounder() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.1);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div
        ref={ref}
        className={cn(
          "container mx-auto",
          "reveal",
          isVisible && "visible",
        )}
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="overline mb-4">About GSD</span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Turning Complexity into{" "}
            <span className="text-gradient-gold">Growth</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — founder card */}
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-col items-center text-center">
              {/* Founder headshot */}
              <img
                src={founderImg}
                alt="Maxine Aitkenhead — Founder & CEO"
                className="mb-6 h-32 w-32 rounded-full object-cover ring-2 ring-gold/30"
              />

              <h3 className="font-heading text-xl font-bold text-white">
                {COMPANY.founder.name}
              </h3>
              <p className="mt-1 text-sm text-white/50">
                {COMPANY.founder.title}
              </p>
            </div>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {COMPANY.founder.credentials.map((cred) => (
                <span
                  key={cred}
                  className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1.5 text-xs font-medium text-teal"
                >
                  <Award className="h-3 w-3" />
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Right — bio + vision */}
          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-white/70">
              {COMPANY.founder.bio}
            </p>

            {/* Vision */}
            <div className="mt-10">
              <h4 className="mb-6 flex items-center gap-2 font-heading text-lg font-semibold text-white">
                <Sparkles className="h-5 w-5 text-gold" />
                Our Founder&rsquo;s Vision
              </h4>

              <div className="space-y-5">
                {COMPANY.founder.vision.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border-l-2 border-gold/30 bg-white/[0.02] py-3 pl-5 pr-4"
                  >
                    <h5 className="mb-1 font-heading text-sm font-bold text-white">
                      {item.title}
                    </h5>
                    <p className="text-sm leading-relaxed text-white/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The GSD Promise — below the two columns */}
        <div
          ref={ref2}
          className={cn(
            "mt-16",
            "reveal",
            isVisible2 && "visible",
          )}
        >
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-px">
            {/* Gradient border */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, hsl(43 85% 52% / 0.5), hsl(175 72% 42% / 0.3), hsl(43 85% 52% / 0.2))",
              }}
            />

            {/* Inner card */}
            <div className="relative rounded-[calc(1rem-1px)] bg-background/95 px-8 py-10 text-center backdrop-blur">
              <h4 className="mb-4 font-heading text-xl font-bold text-white">
                The GSD Promise
              </h4>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70">
                Smart solutions. Real results. No &ldquo;administrative
                drag.&rdquo; We handle the tech, so you can focus on the
                high-impact growth that matters most.
              </p>
              <p className="mt-6 font-heading text-lg font-bold text-gold">
                Let&rsquo;s Get Stuff Done.
              </p>

              <a
                href="#contact"
                className={cn(
                  "mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-heading text-sm font-semibold text-gold-foreground",
                  "transition-all hover:brightness-110",
                )}
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
