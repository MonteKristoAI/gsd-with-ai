import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { COMPANY } from "@/data/companyInfo"
import founderImg from "@/assets/founder-maxine.webp"

export default function AboutFounder() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.1)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div
        ref={ref}
        className={cn("container mx-auto px-6", "reveal", isVisible && "visible")}
      >
        {/* Two-column layout */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — founder photo */}
          <div className="flex justify-center">
            <img
              src={founderImg}
              alt={`${COMPANY.founder.name} — ${COMPANY.founder.title}`}
              className="h-auto max-h-[500px] w-full max-w-md rounded-2xl border border-[hsl(214_20%_90%)] object-cover shadow-lg"
            />
          </div>

          {/* Right — content */}
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
              About GSD
            </span>
            <h2 className="text-3xl font-extrabold text-[hsl(220_25%_14%)] md:text-4xl">
              Turning Complexity into Growth
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[hsl(215_15%_46%)]">
              {COMPANY.founder.bio}
            </p>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {COMPANY.founder.credentials.map((cred) => (
                <span
                  key={cred}
                  className="rounded-full border border-[hsl(175_72%_38%_/_0.1)] bg-[hsl(175_72%_38%_/_0.05)] px-4 py-1.5 text-sm font-medium text-[hsl(175_72%_38%)]"
                >
                  {cred}
                </span>
              ))}
            </div>

            {/* Vision items */}
            <div className="mt-10 space-y-5">
              {COMPANY.founder.vision.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-[hsl(175_72%_38%)] py-2 pl-5"
                >
                  <h4 className="font-bold text-[hsl(220_25%_14%)]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(215_15%_46%)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The GSD Promise */}
        <div
          ref={ref2}
          className={cn("mt-20", "reveal", isVisible2 && "visible")}
        >
          <div className="rounded-2xl bg-[hsl(214_20%_97%)] px-8 py-12 text-center">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
              Our Commitment
            </span>
            <h3 className="text-2xl font-extrabold text-[hsl(220_25%_14%)]">
              The GSD Promise
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[hsl(215_15%_46%)]">
              Smart solutions. Real results. No &ldquo;administrative
              drag.&rdquo; We handle the tech, so you can focus on the
              high-impact growth that matters most.
            </p>
            <p className="mt-6 text-lg font-bold text-[hsl(175_72%_38%)]">
              Let&rsquo;s Get Stuff Done.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[hsl(175_72%_38%)] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
