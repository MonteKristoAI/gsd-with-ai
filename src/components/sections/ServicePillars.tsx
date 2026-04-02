import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { SERVICE_PILLARS, type ServicePillar } from "@/data/services"
import {
  Zap,
  Brain,
  Shield,
  Megaphone,
  Users,
  Mail,
  Bot,
  PhoneCall,
  Smartphone,
  GraduationCap,
  Mic,
  TrendingUp,
  BarChart3,
  Cog,
  Search,
  Workflow,
  Cloud,
  ShieldCheck,
  Server,
  Headphones,
  RefreshCw,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const ICON_MAP: Record<string, LucideIcon> = {
  Zap, Brain, Shield, Megaphone, Users, Mail, Bot, PhoneCall,
  Smartphone, GraduationCap, Mic, TrendingUp, BarChart3, Cog,
  Search, Workflow, Cloud, ShieldCheck, Server, Headphones, RefreshCw,
}

const ICON_BG: Record<ServicePillar["color"], string> = {
  teal: "bg-teal-50",
  gold: "bg-amber-50",
  blue: "bg-blue-50",
}

const ICON_TEXT: Record<ServicePillar["color"], string> = {
  teal: "text-[hsl(175_72%_38%)]",
  gold: "text-[hsl(40_80%_52%)]",
  blue: "text-blue-500",
}

export default function ServicePillars() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
      ref={ref}
      className={cn("bg-white py-20 lg:py-28", "reveal", isVisible && "visible")}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(175_72%_38%)]">
            What We Deliver
          </span>
          <h2 className="text-3xl font-extrabold text-[hsl(220_25%_14%)] md:text-4xl">
            Enterprise-Level Solutions, SMB-Friendly Pricing
          </h2>
          <p className="mt-4 text-[hsl(215_15%_46%)]">
            Three interconnected pillars that cover every stage of your digital
            transformation — from foundational infrastructure to AI-powered
            growth engines.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICE_PILLARS.map((pillar, i) => {
            const PillarIcon = ICON_MAP[pillar.icon] ?? Zap
            return (
              <div
                key={pillar.id}
                className={cn(
                  "group flex flex-col rounded-2xl border border-[hsl(214_20%_90%)] bg-white p-8 shadow-sm",
                  "transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(175_72%_38%_/_0.3)] hover:shadow-lg",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "mb-5 flex h-10 w-10 items-center justify-center rounded-full",
                    ICON_BG[pillar.color],
                  )}
                >
                  <PillarIcon className={cn("h-5 w-5", ICON_TEXT[pillar.color])} />
                </div>

                {/* Title & description */}
                <h3 className="text-xl font-bold text-[hsl(220_25%_14%)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[hsl(215_15%_46%)]">
                  {pillar.description}
                </p>

                {/* Service chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.services.map((service) => (
                    <span
                      key={service.name}
                      className="rounded-full bg-[hsl(214_20%_96%)] px-3 py-1 text-xs text-[hsl(215_15%_46%)]"
                    >
                      {service.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Full-width team image */}
        <div className="mt-14">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop&q=80"
            alt="Team collaborating in a modern office"
            className="h-[320px] w-full rounded-2xl object-cover lg:h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}
