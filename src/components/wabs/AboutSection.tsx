"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const credentials = [
  "10+ years in personal branding & digital marketing",
  "200+ executives, coaches & founders served",
  "Featured on Pearl Radio, Being Kambua & People Daily",
  "Clients across 18 countries in Africa and beyond",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section
      id="about-wambui"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#F5EFE0" }}
    >
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #C4622D 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Portrait */}
          <div
            className={`relative transition-[opacity,transform] duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Decorative block behind image */}
            <div
              className="absolute -bottom-6 -left-6 w-full h-full rounded-sm"
              style={{ backgroundColor: "#C4622D", opacity: 0.12 }}
            />
            <div className="relative z-10 overflow-hidden rounded-sm aspect-[4/5]"
              style={{ boxShadow: "0 24px 64px rgba(28,18,8,0.2)" }}>
              <Image
                src="/images/wambui-2.jpeg"
                alt="Wambui Njuguna-Mungai — Founder, WABS Digital"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 45vw"
                quality={85}
              />
            </div>

            {/* Floating stat */}
            <div
              className="absolute -right-6 top-12 bg-[#1C1208] text-[#F5EFE0] px-6 py-4 rounded-sm z-20"
              style={{ boxShadow: "0 12px 40px rgba(28,18,8,0.3)" }}
            >
              <p className="font-stat text-3xl font-bold text-[#C4622D]">200+</p>
              <p className="font-body text-xs text-[#F5EFE0]/70 mt-1">Brands Transformed</p>
            </div>
          </div>

          {/* Right: Story */}
          <div
            className={`transition-[opacity,transform] duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C4622D]" />
              <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
                Meet Wambui
              </span>
            </div>

            <h2
              className="font-display text-[#1C1208] leading-tight mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontVariationSettings: '"WONK" 0.5',
              }}
            >
              The strategist behind Africa's most recognisable{" "}
              <span className="text-[#C4622D] italic">personal brands.</span>
            </h2>

            <p className="font-body text-[#1C1208]/70 text-base lg:text-lg leading-relaxed mb-6">
              Wambui Njuguna-Mungai is a personal branding strategist and digital marketing expert
              with over a decade of experience helping African professionals claim their authority online.
              She founded WABS Digital to bridge the gap between world-class expertise and world-class visibility.
            </p>

            <p className="font-body text-[#1C1208]/70 text-base lg:text-lg leading-relaxed mb-10">
              Her approach is rooted in one belief: <span className="text-[#1C1208] font-semibold italic">
              your brand should do the selling for you</span> — attracting right-fit clients,
              commanding premium prices, and opening doors you didn't even know existed.
            </p>

            {/* Credentials list */}
            <ul className="space-y-4 mb-10">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C4622D] mt-2.5 shrink-0" />
                  <span className="font-body text-[#1C1208]/75 text-base">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-[#1C1208] text-[#F5EFE0] px-8 py-4 text-base font-semibold rounded-sm hover:bg-[#2a1a0a] transition-all duration-200 hover:scale-[1.02] font-body"
            >
              Work with Wambui
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

