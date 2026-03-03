"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    id: "okonkwo",
    client: "Adaeze O.",
    role: "Chief Risk Officer",
    beforeTitle: "Invisible Expert",
    before:
      "A 20-year banking career with zero digital presence. Passed over for speaking opportunities. LinkedIn profile with 200 connections and no engagement.",
    afterTitle: "Industry Authority",
    after: "2 Board Invitations",
    afterDetail:
      "3 keynote invitations, 2 board seat enquiries, and 1,200% LinkedIn profile view increase — all in 60 days.",
    color: "#C4622D",
  },
  {
    id: "asante",
    client: "Kwame A.",
    role: "Executive Coach",
    beforeTitle: "Competing on Price",
    before:
      "Strong coaching results but attracting clients only through referrals at below-market rates. No differentiated positioning.",
    afterTitle: "Premium Positioning",
    after: "3× Revenue Growth",
    afterDetail:
      "Restructured offer packaging resulted in tripling monthly revenue within 45 days. Now waitlisted 6 weeks.",
    color: "#4A5E4F",
  },
];

export default function CaseStudyPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section id="case-studies" className="py-28 lg:py-36 bg-[#1C1208] relative">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative" ref={ref}>
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C4622D]" />
              <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
                Case Studies
              </span>
            </div>
            <h2
              className="font-display text-[#F5EFE0] leading-tight"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontVariationSettings: '"WONK" 0.5',
              }}
            >
              Before & after.
              <br />
              <span className="text-[#C4622D] italic">Real results.</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm font-semibold transition-colors duration-200 group"
          >
            View All Case Studies
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-6 lg:space-y-8">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.id}
              className={`grid lg:grid-cols-2 rounded-sm overflow-hidden transition-[opacity,transform] duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              {/* Before */}
              <div className="p-8 lg:p-12 bg-[#F5EFE0]/5 border border-[#F5EFE0]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-stat font-bold text-[#F5EFE0] text-xs"
                    style={{ backgroundColor: cs.color }}
                  >
                    {cs.client[0]}
                    {cs.client.split(" ")[1]}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-[#F5EFE0] text-sm">
                      {cs.client}
                    </div>
                    <div className="font-body text-[#F5EFE0]/50 text-xs">
                      {cs.role}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-stat text-xs uppercase tracking-widest font-medium text-[#F5EFE0]/40">
                    Before WABS
                  </span>
                </div>
                <h4
                  className="font-display text-xl font-semibold text-[#F5EFE0]/40 mb-3 line-through"
                  style={{ fontVariationSettings: '"WONK" 0.3' }}
                >
                  {cs.beforeTitle}
                </h4>
                <p className="font-body text-[#F5EFE0]/50 text-base leading-relaxed">
                  {cs.before}
                </p>
              </div>

              {/* After */}
              <div
                className="p-8 lg:p-12 relative overflow-hidden"
                style={{ backgroundColor: cs.color }}
              >
                <div className="mb-4">
                  <span className="font-stat text-xs uppercase tracking-widest font-medium text-[#F5EFE0]/70">
                    After WABS
                  </span>
                </div>
                <h4
                  className="font-display text-[#F5EFE0]/40 text-sm font-medium mb-2"
                  style={{ fontVariationSettings: '"WONK" 0.3' }}
                >
                  {cs.afterTitle}
                </h4>
                <div
                  className="font-stat font-bold text-[#F5EFE0] mb-4"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                >
                  {cs.after}
                </div>
                <p className="font-body text-[#F5EFE0]/80 text-base leading-relaxed">
                  {cs.afterDetail}
                </p>

                {/* Decorative circle */}
                <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border-2 border-[#F5EFE0]/10" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-2 border-[#F5EFE0]/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
