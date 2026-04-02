import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SERVICE_PILLARS, type ServicePillar } from "@/data/services";
import {
  Zap,
  Brain,
  Shield,
  ChevronDown,
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
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
};

const COLOR_MAP: Record<ServicePillar["color"], { ring: string; bg: string; text: string }> = {
  gold: {
    ring: "ring-gold/30",
    bg: "bg-gold/10",
    text: "text-gold",
  },
  teal: {
    ring: "ring-teal/30",
    bg: "bg-teal/10",
    text: "text-teal",
  },
  blue: {
    ring: "ring-blue-500/30",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
};

function PillarCard({
  pillar,
  isExpanded,
  onToggle,
  index,
  isVisible,
}: {
  pillar: ServicePillar;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
  isVisible: boolean;
}) {
  const PillarIcon = ICON_MAP[pillar.icon] ?? Zap;
  const colors = COLOR_MAP[pillar.color];

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border border-white/10 bg-card p-6 transition-all duration-500",
        "hover:border-white/20 hover:shadow-lg",
        isExpanded && "border-white/15",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon + Title */}
      <div className="mb-4 flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-2",
            colors.bg,
            colors.ring,
          )}
        >
          <PillarIcon className={cn("h-5 w-5", colors.text)} />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-white">
            {pillar.title}
          </h3>
          <p className="text-sm text-muted-foreground">{pillar.description}</p>
        </div>
      </div>

      {/* Toggle */}
      <button
        onClick={onToggle}
        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
      >
        {isExpanded ? "Hide services" : `View ${pillar.services.length} services`}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            isExpanded && "rotate-180",
          )}
        />
      </button>

      {/* Expanded service list */}
      <div
        className={cn(
          "grid transition-all duration-300",
          isExpanded
            ? "mt-5 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-3 border-t border-white/5 pt-5">
            {pillar.services.map((service) => {
              const ServiceIcon = ICON_MAP[service.icon] ?? Zap;
              return (
                <li key={service.name} className="flex items-start gap-3">
                  <ServiceIcon
                    className={cn("mt-0.5 h-4 w-4 shrink-0", colors.text)}
                  />
                  <div>
                    <span className="text-sm font-medium text-white">
                      {service.name}
                      {service.nickname && (
                        <span className="ml-1.5 text-xs text-muted-foreground">
                          — {service.nickname}
                        </span>
                      )}
                    </span>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicePillars() {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState<string>(SERVICE_PILLARS[0]?.id ?? "");

  return (
    <section
      id="services"
      ref={ref}
      className={cn("reveal py-20 lg:py-28", isVisible && "visible")}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="overline mb-4 inline-flex">What We Deliver</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
            Enterprise-Level Solutions, SMB-Friendly Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three interconnected pillars that cover every stage of your digital
            transformation — from foundational infrastructure to AI-powered
            growth engines.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICE_PILLARS.map((pillar, i) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={i}
              isVisible={isVisible}
              isExpanded={expanded === pillar.id}
              onToggle={() =>
                setExpanded((prev) => (prev === pillar.id ? "" : pillar.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
