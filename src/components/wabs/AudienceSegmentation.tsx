"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const segments = [
  {
    id: "professionals",
    label: "Senior Professionals",
    tag: "Executive",
    pain: "Your title commands the room — but your online presence doesn't match your real authority.",
    promise: "We architect a brand that positions you as the go-to voice in your industry, opening doors to speaking, board roles, and consulting.",
    cta: "Build Executive Authority",
    href: "#programs",
    accent: "#D91A6B",
  },
  {
    id: "coaches",
    label: "Coaches & Consultants",
    tag: "Practitioner",
    pain: "You're exceptional at what you do — but struggling to attract premium clients at the rates you deserve.",
    promise: "We build a clarity-first brand that communicates your unique methodology and commands high-ticket positioning.",
    cta: "Command Premium Rates",
    href: "#programs",
    accent: "#A01050",
  },
  {
    id: "founders",
    label: "Early-Stage Founders",
    tag: "Founder",
    pain: "You have a bold vision, but your brand doesn't yet inspire the confidence investors and customers need to say yes.",
    promise: "We translate your vision into a credibility-building brand narrative that accelerates traction and trust.",
    cta: "Build Founder Authority",
    href: "#programs",
    accent: "#D91A6B",
  },
];

export default function AudienceSegmentation() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section id="audience" className="py-28 lg:py-36 bg-[#FDF6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Section Header */}
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Who We Serve
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Which path describes you?
          </h2>
        </div>

        {/* Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {segments.map((seg, i) => (
            <div
              key={seg.id}
              className={`group relative bg-white rounded-sm p-8 lg:p-10 flex flex-col justify-between border border-[#E8E8E8] hover:border-[#D91A6B]/30 transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-2 cursor-pointer wabs-shadow hover:wabs-shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Tag */}
              <div className="mb-6">
                <span
                  className="inline-block font-stat text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-sm"
                  style={{
                    backgroundColor: `${seg.accent}15`,
                    color: seg.accent,
                  }}
                >
                  {seg.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-[#111111] text-2xl lg:text-3xl font-semibold mb-4">
                  {seg.label}
                </h3>
                <p className="font-body text-[#2D2D2D]/60 text-base leading-relaxed mb-6">
                  {seg.pain}
                </p>

                {/* Divider */}
                <div className="w-12 h-px bg-[#D91A6B] mb-6" />

                <p className="font-body text-[#2D2D2D]/80 text-base leading-relaxed font-medium">
                  {seg.promise}
                </p>
              </div>

              {/* CTA */}
              <a
                href={seg.href}
                className="mt-8 flex items-center gap-2 font-body font-semibold text-sm group/link"
                style={{ color: seg.accent }}
              >
                {seg.cta}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </a>

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[100px]"
                style={{ backgroundColor: seg.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
