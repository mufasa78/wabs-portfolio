"use client";

import { useRef, useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 200, suffix: "+", label: "Premium Brands Built" },
  { value: 18, suffix: "", label: "Countries Served" },
  { value: 10, suffix: "+", label: "Years of Expertise" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
];

function CountUp({
  target,
  suffix,
  start,
}: {
  target: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AuthorityProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section
      ref={ref}
      id="about"
      className="py-16 lg:py-20 bg-[#1C1208] relative overflow-hidden"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-[opacity,transform] duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="font-stat font-bold text-[#C4622D] mb-2"
                style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  start={isVisible}
                />
              </div>
              <div className="font-body text-[#F5EFE0]/60 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div
          className={`mt-12 h-px transition-[opacity,transform] duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{
            background:
              "linear-gradient(to right, transparent, #C4622D40, transparent)",
            transformOrigin: "center",
          }}
        />
      </div>
    </section>
  );
}
