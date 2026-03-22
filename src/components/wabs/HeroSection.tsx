"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #111111 0%, #1a1a1a 45%, #2D2D2D 75%, #D91A6B 100%)",
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Eyebrow */}
            <div
              className={`inline-flex items-center gap-2 mb-8 transition-[opacity,transform] duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="w-8 h-px bg-[#D91A6B]" />
              <span className="font-stat text-[#D91A6B] text-sm font-medium uppercase tracking-widest">
                Africa's Premier Branding Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className={`font-display text-[#FFFFFF] leading-[1.05] mb-8 transition-[opacity,transform] duration-700 ease-out delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                fontSize: "clamp(42px, 5.5vw, 80px)",
                fontVariationSettings: '"WONK" 1',
              }}
            >
              Your Expertise
              <br />
              Deserves{" "}
              <span className="text-[#D91A6B] italic">Authority,</span>
              <br />
              Not Just Recognition.
            </h1>

            {/* Subtext */}
            <p
              className={`font-body text-[#FFFFFF]/70 text-lg lg:text-xl mb-6 max-w-xl leading-relaxed transition-[opacity,transform] duration-700 ease-out delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We build premium personal brands for{" "}
              <span className="text-[#FFFFFF] font-semibold">senior executives</span>,{" "}
              <span className="text-[#FFFFFF] font-semibold">coaches & consultants</span>, and{" "}
              <span className="text-[#FFFFFF] font-semibold">early-stage founders</span>{" "}
              ready to lead their market.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mt-10 transition-[opacity,transform] duration-700 ease-out delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://selar.com/dlo5455b8f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#D91A6B] text-[#FFFFFF] px-8 py-4 text-base font-semibold rounded-sm hover:bg-[#A01050] transition-all duration-200 hover:scale-[1.03] hover:shadow-xl font-body group"
              >
                Book a Brand Clarity Session
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 border border-[#FFFFFF]/40 text-[#FFFFFF] px-8 py-4 text-base font-semibold rounded-sm hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/5 transition-all duration-200 font-body"
              >
                Explore Programs
              </a>
            </div>

            {/* Social proof mini row */}
            <div
              className={`flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-[#FFFFFF]/10 transition-[opacity,transform] duration-700 ease-out delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { value: "200+", label: "Brands Built" },
                { value: "18", label: "Countries Served" },
                { value: "10+", label: "Years Expertise" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="font-stat text-[#D91A6B] text-2xl font-bold">
                    {stat.value}
                  </span>
                  <span className="font-body text-[#FFFFFF]/60 text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Wambui Portrait */}
          <div
            className={`relative hidden lg:block transition-[opacity,transform] duration-1000 ease-out delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Decorative accent */}
            <div
              className="absolute -top-6 -left-6 w-48 h-48 rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #D91A6B 0%, transparent 70%)" }}
            />
            <div
              className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full opacity-15 pointer-events-none"
              style={{ background: "radial-gradient(circle, #A01050 0%, transparent 70%)" }}
            />

            {/* Portrait frame */}
            <div className="relative z-10">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-sm"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
                <Image
                  src="/images/wambui.jpeg"
                  alt="Wambui — Founder, WABS Digital"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 0vw, 45vw"
                  quality={85}
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, rgba(17,17,17,0.6) 0%, transparent 100%)" }}
                />
              </div>

              {/* Floating credential badge */}
              <div
                className="absolute -bottom-5 -left-6 bg-[#D91A6B] text-[#FFFFFF] px-5 py-3 rounded-sm"
                style={{ boxShadow: "0 8px 32px rgba(217,26,107,0.4)" }}
              >
                <p className="font-stat text-xs font-bold uppercase tracking-widest opacity-80">Founder & CEO</p>
                <p className="font-display text-lg font-semibold">Wambui Kuria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-[#FFFFFF] text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown size={16} className="text-[#FFFFFF] animate-bounce" />
      </div>
    </section>
  );
}
