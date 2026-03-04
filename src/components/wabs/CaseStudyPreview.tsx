"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const caseStudies = [
  {
    id: "alex-mwangi",
    client: "Alex Mwangi",
    role: "CEO, Cent Worrier | CCG",
    beforeTitle: "Limited Digital Presence",
    before:
      "Managing both personal and corporate brands with low engagement. CCG had only 300 followers and Alex had 3k with no clear strategic direction.",
    afterTitle: "Recognised Authority",
    after: "20K+ Followers",
    afterDetail:
      "Grew personal LinkedIn from 3k to 20k+, and CCG from 300 to 2k+ highly engaged followers. Established clear thought leadership.",
    color: "#D91A6B",
    image: "/images/man.png",
  },
  {
    id: "elizabeth-nyambura",
    client: "Elizabeth C.N.",
    role: "Renewable Energy Advocate",
    beforeTitle: "Unstructured Expertise",
    before:
      "Needed to establish credibility but lacked a consistent brand presence and had not structured her knowledge into a scalable offer.",
    afterTitle: "Global Certification",
    after: "14K+ Audience",
    afterDetail:
      "Grew cross-platform audience by 14k+. Launched an accredited training course and secured a contract for a globally recognised certification programme.",
    color: "#A01050",
    image: "/images/woman.png",
  },
];

export default function CaseStudyPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section id="case-studies" className="py-28 lg:py-36 bg-[#111111] relative">
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
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D91A6B]" />
                <div className="w-3 h-1.5 rounded-full bg-[#D91A6B]/50" />
                <div className="w-8 h-1.5 rounded-full bg-[#D91A6B]/20" />
              </div>
              <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
                Client Success Stories
              </span>
            </div>
            <h2
              className="font-display text-[#FFFFFF] leading-tight"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontVariationSettings: '"WONK" 0.5',
              }}
            >
              Before & after.
              <br />
              <span className="text-[#D91A6B] italic">Real results.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-body text-[#FFFFFF]/60 hover:text-[#FFFFFF] text-sm font-semibold transition-colors duration-200 group"
          >
            View All Case Studies
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
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
              <div className="p-8 lg:p-12 bg-[#FFFFFF]/5 border border-[#FFFFFF]/10">
                <div className="flex items-center gap-3 mb-6">
                  {cs.image ? (
                    <div className="w-12 h-12 rounded-full relative overflow-hidden bg-[#F5F5F5] border-2" style={{ borderColor: `${cs.color}40` }}>
                      <Image
                        src={cs.image}
                        alt={cs.client}
                        fill
                        className="object-cover object-top"
                        sizes="48px"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-display font-semibold text-[#FFFFFF] text-lg lg:text-xl"
                      style={{ backgroundColor: cs.color }}
                    >
                      {cs.client.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-body font-semibold text-[#FFFFFF] text-sm">
                      {cs.client}
                    </div>
                    <div className="font-body text-[#FFFFFF]/50 text-xs">
                      {cs.role}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-stat text-xs uppercase tracking-widest font-medium text-[#FFFFFF]/40">
                    Before WABS
                  </span>
                </div>
                <h4
                  className="font-display text-xl font-semibold text-[#FFFFFF]/40 mb-3 line-through"
                  style={{ fontVariationSettings: '"WONK" 0.3' }}
                >
                  {cs.beforeTitle}
                </h4>
                <p className="font-body text-[#FFFFFF]/50 text-base leading-relaxed">
                  {cs.before}
                </p>
              </div>

              {/* After */}
              <div
                className="p-8 lg:p-12 relative overflow-hidden"
                style={{ backgroundColor: cs.color }}
              >
                <div className="mb-4">
                  <span className="font-stat text-xs uppercase tracking-widest font-medium text-[#FFFFFF]/70">
                    After WABS
                  </span>
                </div>
                <h4
                  className="font-display text-[#FFFFFF]/40 text-sm font-medium mb-2"
                  style={{ fontVariationSettings: '"WONK" 0.3' }}
                >
                  {cs.afterTitle}
                </h4>
                <div
                  className="font-stat font-bold text-[#FFFFFF] mb-4"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                >
                  {cs.after}
                </div>
                <p className="font-body text-[#FFFFFF]/80 text-base leading-relaxed">
                  {cs.afterDetail}
                </p>

                {/* Decorative circle */}
                <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border-2 border-[#FFFFFF]/10" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border-2 border-[#FFFFFF]/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
