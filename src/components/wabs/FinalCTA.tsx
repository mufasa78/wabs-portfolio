"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ContactForm from "./ContactForm";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section
      id="booking"
      className="py-28 lg:py-40 bg-[#FFFFFF] relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-px h-full bg-[#111111]/8" style={{ left: "10%" }} />
      <div className="absolute top-0 left-0 w-px h-full bg-[#111111]/8" style={{ left: "90%" }} />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative text-center">
        <div
          className={`transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Start Today
            </span>
            <div className="w-12 h-px bg-[#D91A6B]" />
          </div>

          <h2
            className="font-display text-[#111111] mb-8 leading-[1.05]"
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontVariationSettings: '"WONK" 1',
            }}
          >
            Your authority brand
            <br />
            <span className="text-[#D91A6B] italic">starts with one conversation.</span>
          </h2>

          <p className="font-body text-[#111111]/65 text-xl max-w-xl mx-auto mb-14 leading-relaxed">
            Book a complimentary Brand Clarity Session. In 60 minutes, we'll map your authority positioning and identify the fastest path to premium brand status.
          </p>

          <div
            className={`mt-14 transition-[opacity,transform] duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ContactForm />
          </div>

          <p className="font-body text-[#111111]/40 text-sm mt-6">
            No obligation. No hard sell. Just clarity.
          </p>
        </div>

        {/* Decorative large text watermark */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-display text-[180px] lg:text-[240px] font-bold text-[#111111]/[0.03] leading-none select-none pointer-events-none whitespace-nowrap"
          style={{ fontVariationSettings: '"WONK" 1' }}
        >
          WABS
        </div>
      </div>
    </section>
  );
}
