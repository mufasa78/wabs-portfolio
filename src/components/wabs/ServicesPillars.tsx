"use client";

import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    id: "strategy",
    title: "Brand Strategy",
    icon: "◆",
    description: "Positioning, messaging architecture, and competitive differentiation tailored to your target market.",
    outcome: "You become the obvious choice — not one of many options.",
    size: "lg:col-span-2 lg:col-start-1 lg:row-start-1",
    bg: "#1C1208",
    textColor: "#F5EFE0",
  },
  {
    id: "offer",
    title: "Offer Packaging",
    icon: "○",
    description: "Structuring your expertise into irresistible, premium-priced offers that sell themselves.",
    outcome: "Your offer does the qualifying — so only right-fit clients enquire.",
    size: "lg:col-span-1 lg:row-span-2 lg:col-start-3 lg:row-start-1",
    bg: "#C4622D",
    textColor: "#F5EFE0",
  },
  {
    id: "visibility",
    title: "Visibility Systems",
    icon: "▲",
    description: "Consistent distribution strategies across LinkedIn, speaking, and strategic partnerships.",
    outcome: "You're seen by the right people, at the right time, consistently.",
    size: "lg:col-span-1 lg:col-start-1 lg:row-start-2",
    bg: "#4A5E4F",
    textColor: "#F5EFE0",
  },
  {
    id: "content",
    title: "Content Marketing",
    icon: "●",
    description: "Thought leadership frameworks that attract inbound leads and build undeniable authority.",
    outcome: "Content that converts cold audiences into warm, paying clients.",
    size: "lg:col-span-1 lg:col-start-2 lg:row-start-2",
    bg: "#F5EFE0",
    textColor: "#1C1208",
  },
];

export default function ServicesPillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 lg:py-36 bg-[#F5EFE0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
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
                Core Services
              </span>
            </div>
            <h2
              className="font-display text-[#1C1208] leading-tight"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontVariationSettings: '"WONK" 0.5',
              }}
            >
              Four pillars.
              <br />
              One authority brand.
            </h2>
          </div>
          <p className="font-body text-[#1C1208]/60 text-lg max-w-md leading-relaxed">
            Every engagement is built on these four disciplines — each one essential to a brand that commands premium respect.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className={`${pillar.size} relative rounded-sm p-8 lg:p-10 cursor-pointer overflow-hidden transition-[opacity,transform] duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundColor: pillar.bg,
                transitionDelay: `${i * 0.12}s`,
                minHeight: "220px",
              }}
              onMouseEnter={() => setHoveredId(pillar.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Icon */}
              <div
                className="text-3xl mb-4 opacity-30"
                style={{ color: pillar.textColor }}
              >
                {pillar.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display text-2xl lg:text-3xl font-semibold mb-3"
                style={{
                  color: pillar.textColor,
                  fontVariationSettings: '"WONK" 0.3',
                }}
              >
                {pillar.title}
              </h3>

              {/* Description — always visible */}
              <p
                className="font-body text-base leading-relaxed transition-all duration-300"
                style={{
                  color: `${pillar.textColor}90`,
                  opacity: hoveredId === pillar.id ? 0 : 1,
                }}
              >
                {pillar.description}
              </p>

              {/* Outcome — revealed on hover */}
              <div
                className={`absolute inset-0 p-8 lg:p-10 flex flex-col justify-end transition-all duration-300 ${
                  hoveredId === pillar.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ backgroundColor: pillar.bg }}
              >
                <div className="mb-3">
                  <span
                    className="font-stat text-xs uppercase tracking-widest font-semibold"
                    style={{ color: hoveredId === pillar.id && pillar.bg === "#C4622D" ? "#F5EFE0" : "#C4622D" }}
                  >
                    The Outcome
                  </span>
                </div>
                <p
                  className="font-display text-xl lg:text-2xl font-semibold leading-snug"
                  style={{
                    color: pillar.textColor,
                    fontVariationSettings: '"WONK" 0.5',
                  }}
                >
                  "{pillar.outcome}"
                </p>
              </div>

              {/* Bottom border accent */}
              <div
                className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
                  hoveredId === pillar.id ? "w-full" : "w-0"
                }`}
                style={{
                  backgroundColor:
                    pillar.bg === "#F5EFE0" ? "#C4622D" : "#F5EFE0",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
