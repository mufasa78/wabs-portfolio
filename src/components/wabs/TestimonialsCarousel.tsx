"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Segment = "all" | "professional" | "coach" | "founder";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    title: "Chief Risk Officer, Pan-African Bank",
    segment: "professional" as Segment,
    quote:
      "WABS transformed my LinkedIn presence from a digital CV into a genuine thought leadership platform. Within 60 days, I received two board enquiries and a keynote invitation. The ROI is extraordinary.",
    initials: "AO",
    color: "#D91A6B",
  },
  {
    id: 2,
    name: "Kwame Asante",
    title: "Executive Leadership Coach, Accra",
    segment: "coach" as Segment,
    quote:
      "Before WABS, I was competing on price. Now I attract clients who actively seek me out at my premium rates. The brand clarity they gave me changed everything about how I show up and what I charge.",
    initials: "KA",
    color: "#A01050",
  },
  {
    id: 3,
    name: "Fatima Hassan",
    title: "Founder, EdTech Startup, Lagos",
    segment: "founder" as Segment,
    quote:
      "Investors were interested in our product, but not in us as founders. WABS helped us build the kind of personal credibility that made VCs want to back us personally. We closed our seed round three months after the rebrand.",
    initials: "FH",
    color: "#D91A6B",
  },
  {
    id: 4,
    name: "Dr. Sipho Ndlovu",
    title: "Strategy Consultant, Johannesburg",
    segment: "professional" as Segment,
    quote:
      "I went from being unknown outside my industry to being featured in three major publications and landing a consulting contract with a Fortune 500 company — all within the 12-week program.",
    initials: "SN",
    color: "#D91A6B",
  },
  {
    id: 5,
    name: "Grace Otieno",
    title: "Business Coach, Nairobi",
    segment: "coach" as Segment,
    quote:
      "The offer packaging work alone was worth 10x the investment. I restructured my coaching packages and tripled my monthly revenue in the first 45 days after implementation.",
    initials: "GO",
    color: "#A01050",
  },
];

const filterLabels: { key: Segment; label: string }[] = [
  { key: "all", label: "All" },
  { key: "professional", label: "Professionals" },
  { key: "coach", label: "Coaches" },
  { key: "founder", label: "Founders" },
];

export default function TestimonialsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [activeFilter, setActiveFilter] = useState<Segment>("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = testimonials.filter(
    (t) => activeFilter === "all" || t.segment === activeFilter
  );

  // Auto-advance
  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isVisible, filtered.length, activeFilter]);

  // Reset index on filter change
  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setActiveIndex((i) => (i + 1) % filtered.length);

  const current = filtered[activeIndex];

  return (
    <section className="py-28 lg:py-36 bg-[#FDF6F0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Client Results
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Transformations that speak
            <span className="text-[#D91A6B] italic"> for themselves.</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex gap-2 mb-12 flex-wrap transition-[opacity,transform] duration-700 ease-out delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {filterLabels.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`font-body text-sm font-semibold px-5 py-2 rounded-sm transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-[#111111] text-[#FFFFFF]"
                  : "bg-[#111111]/8 text-[#111111]/60 hover:bg-[#111111]/15 hover:text-[#111111]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Testimonial Display */}
        {current && (
          <div
            className={`transition-[opacity,transform] duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white rounded-sm p-8 lg:p-14 wabs-shadow relative overflow-hidden">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 font-display text-[120px] leading-none opacity-[0.05] text-[#D91A6B] select-none"
                aria-hidden="true"
              >
                "
              </div>

              <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
                {/* Quote */}
                <div>
                  <p
                    className="font-display text-[#111111] leading-relaxed mb-10"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      fontVariationSettings: '"WONK" 0.3',
                    }}
                  >
                    "{current.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-stat font-bold text-[#FFFFFF] text-sm shrink-0"
                      style={{ backgroundColor: current.color }}
                    >
                      {current.initials}
                    </div>
                    <div>
                      <div className="font-body font-semibold text-[#111111] text-base">
                        {current.name}
                      </div>
                      <div className="font-body text-[#111111]/55 text-sm">
                        {current.title}
                      </div>
                    </div>
                    <div
                      className="ml-4 hidden sm:block font-stat text-xs uppercase tracking-widest px-3 py-1 rounded-sm"
                      style={{
                        backgroundColor: `${current.color}15`,
                        color: current.color,
                      }}
                    >
                      {current.segment === "professional"
                        ? "Executive"
                        : current.segment === "coach"
                        ? "Coach"
                        : "Founder"}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex lg:flex-col gap-3">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-sm border border-[#E8E8E8] flex items-center justify-center hover:bg-[#111111] hover:text-[#FFFFFF] hover:border-[#111111] transition-all duration-200 text-[#111111]/40"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-sm border border-[#E8E8E8] flex items-center justify-center hover:bg-[#111111] hover:text-[#FFFFFF] hover:border-[#111111] transition-all duration-200 text-[#111111]/40"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 bg-[#D91A6B]"
                        : "w-2 bg-[#111111]/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
