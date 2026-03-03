"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  {
    id: "brand-launch",
    tier: "Intensive",
    name: "4-Week Personal Brand Launch Program",
    duration: "4 Weeks",
    tagline: "Go from invisible to positioned — fast.",
    image: "/images/packages/4-Week-Personal-Brand-Launch-Program-USD-1-scaled.jpeg",
    investment: "$500",
    investmentNote: "Virtual · Payable Once",
    investmentAlt: "$700 In-Person",
    features: [
      "Brand positioning & messaging framework",
      "Professional bio & LinkedIn optimisation",
      "Visual brand identity guidelines",
      "30-day content strategy & calendar",
      "Offer packaging for your signature service",
    ],
    qualifier: "Ideal if you have expertise but your brand doesn't yet reflect your real value.",
    cta: "Start My Brand Launch",
    href: "#booking",
    flagship: false,
  },
  {
    id: "social-media",
    tier: "Ongoing Service",
    name: "Social Media Content Creation & Management",
    duration: "Monthly Retainer",
    tagline: "Consistent authority-building content, done for you.",
    image: "/images/packages/smc.jpeg",
    investment: "From $250",
    investmentNote: "to $950 / month",
    investmentAlt: "Based on Scope",
    features: [
      "Custom content strategy & pillars",
      "Platform-specific content creation",
      "Scheduling & community management",
      "Monthly analytics & growth report",
      "Flexible packages for every stage",
    ],
    qualifier: "Perfect for established professionals who need consistent, high-quality content without the hassle.",
    cta: "Get a Custom Quote",
    href: "#booking",
    flagship: true,
  },
  {
    id: "startup-kit",
    tier: "Comprehensive",
    name: "12-Week Startup Launch Kit",
    duration: "12 Weeks",
    tagline: "Everything you need to launch and grow.",
    image: "/images/packages/12-Week-Startup-Launch-Kit-USD-scaled.jpeg",
    investment: "$2,000",
    investmentNote: "Payable in 2 Instalments",
    investmentAlt: "Website Included",
    features: [
      "Complete brand strategy & identity",
      "Professional website design & build",
      "Social media setup & content plan",
      "Lead generation & funnel strategy",
      "90-day visibility action plan",
      "2 coaching calls per month",
    ],
    qualifier: "For founders and startups ready to launch with a strong, professional brand from day one.",
    cta: "Apply for Startup Kit",
    href: "#booking",
    flagship: false,
  },
];

export default function ProgramsSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="programs" className="py-28 lg:py-36 bg-[#1C1208] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative" ref={ref}>
        {/* Header */}
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C4622D]" />
            <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
              Our Programs
            </span>
          </div>
          <h2
            className="font-display text-[#F5EFE0] leading-tight"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Choose your
            <span className="text-[#C4622D] italic"> transformation path.</span>
          </h2>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
          {programs.map((program, i) => (
            <div
              key={program.id}
              className={`relative rounded-sm flex flex-col transition-[opacity,transform] duration-500 ease-out cursor-pointer overflow-hidden ${
                program.flagship
                  ? "bg-[#F5EFE0] mt-6 md:mt-0 md:-mt-4 md:-mb-4 ring-2 ring-[#C4622D]"
                  : "bg-[#F5EFE0]/5 border border-[#F5EFE0]/10 hover:border-[#F5EFE0]/20"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Flagship badge */}
              {program.flagship && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#C4622D] text-[#F5EFE0] font-stat text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: program.flagship
                      ? "linear-gradient(to bottom, rgba(28,18,8,0.1) 0%, rgba(28,18,8,0.4) 100%)"
                      : "linear-gradient(to bottom, rgba(28,18,8,0.2) 0%, rgba(28,18,8,0.6) 100%)",
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: "2rem" }} className="flex flex-col flex-1">
                {/* Tier + Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-stat text-xs font-semibold uppercase tracking-widest"
                    style={{
                      color: program.flagship ? "#C4622D" : "#C4622D",
                    }}
                  >
                    {program.tier}
                  </span>
                  <span
                    className="font-stat text-xs font-medium"
                    style={{ color: program.flagship ? "#1C1208" : "#F5EFE0", opacity: 0.5 }}
                  >
                    {program.duration}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="font-display text-xl lg:text-2xl font-semibold mb-3 leading-tight"
                  style={{
                    color: program.flagship ? "#1C1208" : "#F5EFE0",
                    fontVariationSettings: '"WONK" 0.3',
                  }}
                >
                  {program.name}
                </h3>

                {/* Tagline */}
                <p
                  className="font-body text-sm mb-6 leading-relaxed"
                  style={{
                    color: program.flagship ? "#1C1208" : "#F5EFE0",
                    opacity: program.flagship ? 0.7 : 0.6,
                  }}
                >
                  {program.tagline}
                </p>

                {/* Investment */}
                <div className="mb-6 pb-6 border-b" style={{ borderColor: program.flagship ? "#1C120815" : "#F5EFE015" }}>
                  <div className="flex items-end gap-3 flex-wrap">
                    <span
                      className="font-stat font-bold text-3xl"
                      style={{ color: program.flagship ? "#C4622D" : "#F5EFE0" }}
                    >
                      {program.investment}
                    </span>
                    <div className="pb-1">
                      <p className="font-body text-xs font-medium"
                        style={{ color: program.flagship ? "#1C1208" : "#F5EFE0", opacity: 0.55 }}>
                        {program.investmentNote}
                      </p>
                      <p className="font-stat text-xs font-semibold text-[#C4622D]">
                        {program.investmentAlt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm leading-relaxed"
                      style={{
                        color: program.flagship ? "#1C1208" : "#F5EFE0",
                        opacity: program.flagship ? 0.75 : 0.65,
                      }}
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-[#C4622D]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Qualifier — shown on hover */}
                <div
                  className={`mb-6 p-4 rounded-sm text-sm font-body leading-relaxed transition-all duration-300 ${
                    hoveredId === program.id ? "opacity-100 max-h-28" : "opacity-0 max-h-0 overflow-hidden py-0 mb-0"
                  }`}
                  style={{
                    backgroundColor: program.flagship ? "#1C120810" : "#F5EFE008",
                    color: program.flagship ? "#1C1208" : "#F5EFE0",
                  }}
                >
                  <span className="font-semibold">Is this for you? </span>
                  {program.qualifier}
                </div>

                {/* CTA */}
                <a
                  href={program.href}
                  className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm font-body font-semibold text-sm transition-all duration-200 group mt-auto"
                  style={{
                    backgroundColor: program.flagship ? "#C4622D" : "transparent",
                    color: "#F5EFE0",
                    border: program.flagship ? "none" : "1px solid rgba(245,239,224,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    if (!program.flagship) {
                      e.currentTarget.style.borderColor = "rgba(245,239,224,0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!program.flagship) {
                      e.currentTarget.style.borderColor = "rgba(245,239,224,0.3)";
                    }
                  }}
                >
                  {program.cta}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
