"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const brands = [
  { name: "Biashara 360", src: "/images/brands/biashara360-logo.png" },
  { name: "Centre for Corporate Governance", src: "/images/brands/centre_for_corporate_governance_logo.jpeg" },
  { name: "Centwarrior", src: "/images/brands/centwarrior_logo.jpeg" },
  { name: "DMN Africa", src: "/images/brands/dmnafrica-logo.png" },
  { name: "Harmony Tours & Travel", src: "/images/brands/harmony-tours-n-travel-logo.jpeg" },
  { name: "ICIPE", src: "/images/brands/icipe-logo.png" },
  { name: "NDC", src: "/images/brands/NDC-Logo.png" },
  { name: "Nipnap", src: "/images/brands/Nipnap-logo_colour.png" },
  { name: "Road to Wellness", src: "/images/brands/roadtowellness-logo.png" },
  { name: "SaaS Company", src: "/images/brands/SaaS-Company-logo.png" },
  { name: "Safepack", src: "/images/brands/safepack-logo.jpeg" },
  { name: "She Speaks Solar", src: "/images/brands/shespeaksolar-logo.jpeg" },
  { name: "Tropical Heat", src: "/images/brands/tropical-heat-logo.png" },
  { name: "Zawkarc", src: "/images/brands/zawkarc-logo.jpeg" },
];

export default function BrandsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  // Duplicate the array for seamless infinite loop
  const doubled = [...brands, ...brands];

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#1C1208" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12" ref={ref}>
        <div
          className={`text-center transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#C4622D]/50" />
            <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
              Trusted By
            </span>
            <div className="w-12 h-px bg-[#C4622D]/50" />
          </div>
          <h2
            className="font-display text-[#F5EFE0] leading-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Brands we have had the{" "}
            <span className="text-[#C4622D] italic">honour of serving.</span>
          </h2>
        </div>
      </div>

      {/* Carousel track */}
      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #1C1208 0%, transparent 100%)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #1C1208 0%, transparent 100%)" }}
        />

        {/* Scrolling logos */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-marquee" style={{ willChange: "transform" }}>
            {doubled.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="shrink-0 flex items-center justify-center bg-[#F5EFE0]/5 border border-[#F5EFE0]/10 hover:bg-[#F5EFE0]/10 transition-all duration-300 rounded-xl p-5"
                style={{ width: 160, height: 100 }}
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={120}
                  height={70}
                  className="w-auto h-12 object-contain grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                  sizes="120px"
                  quality={75}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

