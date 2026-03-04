"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const programs = [
  {
    id: "fractional-strategist",
    tier: "Ongoing Retainer",
    name: "Fractional Brand & Marketing Strategist",
    tagline:
      "Executive-level brand, marketing, and digital oversight — without the cost of a full-time hire.",
    features: [
      "Brand positioning & narrative oversight",
      "Marketing strategy & visibility planning",
      "Digital infrastructure & asset protection",
      "Ongoing strategic advisory partnership",
      "Team & vendor coordination",
    ],
    qualifier:
      "For established leaders who carry real authority — but whose brand presence has not yet caught up.",
    cta: "Learn More",
    href: "/fractional-strategist",
    flagship: false,
  },
  {
    id: "4-week-program",
    tier: "Intensive Program",
    name: "4-Week Strategic Brand Launch & Growth Program",
    tagline:
      "A focused, done-with-you engagement to transform your expertise into a credible, visible, and opportunity-generating brand.",
    features: [
      "Brand clarity, positioning & problem definition",
      "Offer packaging, pricing & digital foundations",
      "Content strategy & brand communication",
      "Networking, outreach & relationship building",
      "Complete brand foundation in 4 weeks",
    ],
    qualifier:
      "For professionals, consultants, coaches, and founders ready to build a brand that positions them as the authority.",
    cta: "Explore the Program",
    href: "/4-week-brand-program",
    flagship: true,
  },
];

export default function ProgramsSnapshot() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="programs"
      className="py-28 lg:py-36 bg-[#111111] relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative" ref={ref}>
        {/* Header */}
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D91A6B]" />
              <div className="w-3 h-1.5 rounded-full bg-[#D91A6B]/50" />
              <div className="w-8 h-1.5 rounded-full bg-[#D91A6B]/20" />
            </div>
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Our Programs
            </span>
          </div>
          <h2
            className="font-display text-[#FFFFFF] leading-tight"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Two paths to
            <span className="text-[#D91A6B] italic"> brand authority.</span>
          </h2>
          <p className="font-body text-[#FFFFFF]/55 text-lg mt-4 max-w-xl leading-relaxed">
            Whether you need ongoing strategic oversight or an intensive brand-building sprint — choose the engagement that matches your stage.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-start">
          {programs.map((program, i) => (
            <div
              key={program.id}
              className={`relative rounded-sm flex flex-col transition-[opacity,transform] duration-500 ease-out cursor-pointer overflow-hidden ${
                program.flagship
                  ? "bg-[#F5F5F5] ring-2 ring-[#D91A6B]"
                  : "bg-[#F5F5F5]/5 border border-[#F5F5F5]/10 hover:border-[#F5F5F5]/20"
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
                  <span className="bg-[#D91A6B] text-[#FFFFFF] font-stat text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card body */}
              <div style={{ padding: "2rem" }} className="flex flex-col flex-1">
                {/* Tier */}
                <div className="mb-4">
                  <span
                    className="font-stat text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#D91A6B" }}
                  >
                    {program.tier}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="font-display text-xl lg:text-2xl font-semibold mb-3 leading-tight"
                  style={{
                    color: program.flagship ? "#111111" : "#FFFFFF",
                    fontVariationSettings: '"WONK" 0.3',
                  }}
                >
                  {program.name}
                </h3>

                {/* Tagline */}
                <p
                  className="font-body text-sm mb-6 leading-relaxed"
                  style={{
                    color: program.flagship ? "#111111" : "#FFFFFF",
                    opacity: program.flagship ? 0.7 : 0.6,
                  }}
                >
                  {program.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm leading-relaxed"
                      style={{
                        color: program.flagship ? "#111111" : "#F5F5F5",
                        opacity: program.flagship ? 0.75 : 0.65,
                      }}
                    >
                      <Check
                        size={15}
                        className="mt-0.5 shrink-0 text-[#D91A6B]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Qualifier — shown on hover */}
                <div
                  className={`mb-6 p-4 rounded-sm text-sm font-body leading-relaxed transition-all duration-300 ${
                    hoveredId === program.id
                      ? "opacity-100 max-h-28"
                      : "opacity-0 max-h-0 overflow-hidden py-0 mb-0"
                  }`}
                  style={{
                    backgroundColor: program.flagship
                      ? "#11111010"
                      : "#F5F5F508",
                    color: program.flagship ? "#111111" : "#F5F5F5",
                  }}
                >
                  <span className="font-semibold">Is this for you? </span>
                  {program.qualifier}
                </div>

                {/* CTA */}
                <Link
                  href={program.href}
                  className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm font-body font-semibold text-sm transition-all duration-200 group mt-auto"
                  style={{
                    backgroundColor: program.flagship
                      ? "#D91A6B"
                      : "transparent",
                    color: "#FFFFFF",
                    border: program.flagship
                      ? "none"
                      : "1px solid rgba(255,255,255,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    if (!program.flagship) {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!program.flagship) {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.3)";
                    }
                  }}
                >
                  {program.cta}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
