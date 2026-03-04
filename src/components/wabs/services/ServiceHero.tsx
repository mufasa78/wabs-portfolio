"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export default function ServiceHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  description,
  ctaText,
  ctaHref,
}: ServiceHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #111111 0%, #1a1a1a 45%, #2D2D2D 75%, #D91A6B 100%)",
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #D91A6B 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, #A01050 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 mb-8 transition-[opacity,transform] duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="w-8 h-px bg-[#D91A6B]" />
          <span className="font-stat text-[#D91A6B] text-sm font-medium uppercase tracking-widest">
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-display text-[#FFFFFF] leading-[1.08] mb-6 transition-[opacity,transform] duration-700 ease-out delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(36px, 5vw, 68px)",
            fontVariationSettings: '"WONK" 1',
          }}
        >
          {title}
          <br />
          <span className="text-[#D91A6B] italic">{titleAccent}</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-body text-[#FFFFFF]/90 text-xl lg:text-2xl mb-4 max-w-3xl leading-relaxed font-medium transition-[opacity,transform] duration-700 ease-out delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {subtitle}
        </p>

        {/* Description */}
        <p
          className={`font-body text-[#FFFFFF]/60 text-lg lg:text-xl mb-10 max-w-3xl leading-relaxed transition-[opacity,transform] duration-700 ease-out delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {description}
        </p>

        {/* CTA */}
        <div
          className={`transition-[opacity,transform] duration-700 ease-out delay-[400ms] ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-3 bg-[#D91A6B] text-[#FFFFFF] px-8 py-4 text-base font-semibold rounded-sm hover:bg-[#A01050] transition-all duration-200 hover:scale-[1.03] hover:shadow-xl font-body group"
          >
            {ctaText}
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
