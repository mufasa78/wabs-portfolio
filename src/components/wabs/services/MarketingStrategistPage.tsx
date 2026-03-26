"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check, Eye, Megaphone, Users, ChevronDown, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ServiceHero from "./ServiceHero";
import ServiceCTA from "./ServiceCTA";

/* ──────────────────────────── Data ──────────────────────────── */

const services = [
  {
    id: "strategy",
    num: "01",
    icon: Target,
    title: "Marketing Strategy & Planning",
    description:
      "Develop comprehensive marketing strategies that align with your business goals and position you as the authority in your space.",
  },
  {
    id: "visibility",
    num: "02", 
    icon: Eye,
    title: "Visibility & Content Strategy",
    description:
      "Create structured content plans and visibility systems that keep you consistently in front of your ideal audience.",
  },
  {
    id: "execution",
    num: "03",
    icon: Zap,
    title: "Campaign Execution & Optimization",
    description:
      "Execute targeted marketing campaigns and continuously optimize for maximum impact and ROI.",
  },
];

const serviceDetails = [
  {
    id: "strategy-detail",
    num: "01",
    title: "Strategic Marketing Planning",
    tagline: "Marketing That Drives Business Growth — Not Just Activity.",
    description:
      "Effective marketing isn't about being everywhere — it's about being in the right places with the right message. We build marketing strategies that position you as the obvious choice for your ideal clients.",
    items: [
      "Comprehensive market analysis and competitive positioning",
      "Ideal client persona development and audience mapping",
      "Marketing channel selection and prioritization strategy",
      "Brand messaging framework and communication hierarchy",
      "Marketing budget allocation and ROI projections",
      "Quarterly marketing roadmap with clear milestones",
    ],
    quote:
      "The best marketing strategies aren't the loudest — they're the most precisely targeted.",
  },
  {
    id: "visibility-detail",
    num: "02",
    title: "Content Strategy & Visibility Systems",
    tagline: "Build Authority Through Strategic Content Presence.",
    description:
      "Your expertise deserves to be seen by the right people. We create content strategies that establish your authority, attract your ideal audience, and convert visibility into opportunities.",
    items: [
      "Content pillar development and topic architecture",
      "LinkedIn, Twitter, and industry platform content strategies",
      "Thought leadership content series and expert positioning",
      "Content repurposing systems for maximum reach",
      "Engagement strategies that build genuine connections",
      "Content calendar aligned with business objectives",
    ],
  },
  {
    id: "execution-detail",
    num: "03",
    title: "Campaign Management & Performance Optimization",
    tagline: "Execute With Precision — Optimize for Results.",
    description:
      "Strategy without execution is just planning. We ensure your marketing initiatives are implemented effectively and continuously optimized for better performance.",
    items: [
      "Campaign planning, launch management, and coordination",
      "Performance tracking and analytics implementation",
      "A/B testing and conversion rate optimization",
      "Marketing automation and workflow optimization",
      "Team coordination and vendor management",
      "Monthly performance reviews and strategic adjustments",
    ],
    footer:
      "The goal is not just to run campaigns — it's to build marketing systems that grow stronger and more effective over time.",
  },
];

const benefits = [
  {
    title: "Strategic Direction",
    desc: "Clear marketing roadmap that aligns with your business objectives and growth targets.",
  },
  {
    title: "Authority Building",
    desc: "Position yourself as the go-to expert in your industry through strategic content and visibility.",
  },
  {
    title: "Quality Leads",
    desc: "Attract higher-quality clients who value your expertise and are willing to pay premium rates.",
  },
  {
    title: "Consistent Visibility",
    desc: "Maintain steady market presence without the overwhelm of constant content creation.",
  },
  {
    title: "Measurable Results",
    desc: "Track what matters with clear KPIs and performance metrics that demonstrate marketing ROI.",
  },
  {
    title: "Team Alignment",
    desc: "Ensure your marketing efforts, sales team, and business goals are perfectly synchronized.",
  },
];

const idealClient = [
  "You are an established expert who needs to translate your authority into market visibility",
  "You have valuable expertise but struggle to attract the right caliber of clients consistently",
  "You want to scale your impact without getting overwhelmed by marketing complexity",
  "You need marketing that reflects the quality and premium nature of your services",
  "You're ready to invest in strategic marketing that drives real business growth",
];

const steps = [
  {
    num: "01",
    title: "Marketing Strategy Session",
    desc: "We conduct a deep dive into your current marketing, business goals, and growth opportunities.",
  },
  {
    num: "02", 
    title: "Strategic Marketing Plan",
    desc: "You receive a comprehensive marketing strategy with clear priorities, channels, and implementation roadmap.",
  },
  {
    num: "03",
    title: "Implementation Partnership",
    desc: "We work together to execute the strategy, optimize performance, and scale your marketing impact.",
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

export default function MarketingStrategistPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Navigation />

      {/* ── Hero ── */}
      <ServiceHero
        eyebrow="Marketing Strategist"
        title="Your Expertise Deserves"
        titleAccent="Strategic Visibility."
        subtitle="Transform your authority into market leadership through targeted marketing strategies."
        description="You've built significant expertise in your field. But without strategic marketing, the right clients may never discover you. We bridge that gap with marketing that positions you as the obvious choice."
        ctaText="Book Your Marketing Strategy Session"
        ctaHref="https://selar.com/dlo5455b8f"
      />

      {/* ── Explainer ── */}
      <ExplainerSection />

      {/* ── Three Services ── */}
      <ServicesSection />

      {/* ── Service Details ── */}
      <ServiceDetailsSection />

      {/* ── Value Proposition ── */}
      <ValuePropSection />

      {/* ── Benefits ── */}
      <BenefitsSection />

      {/* ── Ideal Client ── */}
      <IdealClientSection />

      {/* ── Engagement Model ── */}
      <EngagementSection />

      {/* ── Page CTA ── */}
      <ServiceCTA
        headline="Your Marketing Should Reflect"
        headlineAccent="the Quality of Your Expertise."
        description="Let's create a marketing strategy that positions you as the authority you already are."
        closingLine="Because strategic visibility is the bridge between expertise and opportunity."
      />

      <Footer />
    </main>
  );
}

/* ──────────────────── Section Components ──────────────────── */

function ExplainerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div
          className={`transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              What This Is
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight mb-8"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Strategic Marketing<br />
            <span className="text-[#D91A6B] italic">That Positions You as Authority.</span>
          </h2>
          <div className="space-y-6 font-body text-[#111111]/70 text-lg leading-relaxed">
            <p>
              A Marketing Strategist provides the strategic direction and expertise needed 
              to transform your professional authority into market visibility. We don't just 
              create content — we build marketing systems that consistently attract your ideal clients.
            </p>
            <p>
              Instead of random marketing activities, you gain a strategic partner who ensures 
              every marketing effort serves your business objectives, builds your brand, and 
              creates sustainable growth pathways.
            </p>
            <p className="font-medium text-[#111111]/85">
              Most experts who seek this support have already achieved significant success in their field — 
              they just need the marketing strategy to match their level of expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Three Core Areas
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Strategic Marketing<br />
            <span className="text-[#D91A6B] italic">That Drives Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative bg-[#111111] rounded-sm p-8 lg:p-10 overflow-hidden transition-[opacity,transform] duration-500 ease-out group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <span className="font-stat text-[#D91A6B] text-xs font-bold uppercase tracking-widest mb-4 block">
                  {service.num}
                </span>
                <Icon
                  size={32}
                  className="text-[#FFFFFF]/30 mb-4"
                  strokeWidth={1.5}
                />
                <h3
                  className="font-display text-[#FFFFFF] text-xl lg:text-2xl font-semibold mb-4"
                  style={{ fontVariationSettings: '"WONK" 0.3' }}
                >
                  {service.title}
                </h3>
                <p className="font-body text-[#FFFFFF]/60 text-base leading-relaxed">
                  {service.description}
                </p>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D91A6B] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [openId, setOpenId] = useState<string | null>(serviceDetails[0].id);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              In Practice
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            What This Partnership<br />
            <span className="text-[#D91A6B] italic">Looks Like in Practice.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {serviceDetails.map((detail, i) => {
            const isOpen = openId === detail.id;
            return (
              <div
                key={detail.id}
                className={`border border-[#E8E8E8] rounded-sm overflow-hidden transition-[opacity,transform] duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : detail.id)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-[#F5F5F5]/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-stat text-[#D91A6B] text-sm font-bold">
                      {detail.num}
                    </span>
                    <h3
                      className="font-display text-[#111111] text-lg lg:text-xl font-semibold"
                      style={{ fontVariationSettings: '"WONK" 0.3' }}
                    >
                      {detail.title}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#D91A6B] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ease-out overflow-hidden ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-8 pt-2">
                    <p className="font-display text-[#111111] text-base font-semibold mb-2 italic">
                      {detail.tagline}
                    </p>
                    <p className="font-body text-[#111111]/65 text-base leading-relaxed mb-6">
                      {detail.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {detail.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-[#111111]/75 text-sm leading-relaxed"
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-[#D91A6B]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {detail.quote && (
                      <blockquote className="border-l-2 border-[#D91A6B] pl-4 py-2">
                        <p className="font-body text-[#111111]/60 text-sm italic leading-relaxed">
                          &ldquo;{detail.quote}&rdquo;
                        </p>
                        <p className="font-stat text-[#D91A6B] text-xs uppercase tracking-widest mt-2 font-semibold">
                          — Marketing strategy principle
                        </p>
                      </blockquote>
                    )}
                    {detail.footer && (
                      <p className="font-body text-[#111111]/55 text-sm italic leading-relaxed mt-4 bg-[#F5F5F5] p-4 rounded-sm">
                        {detail.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ValuePropSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden" ref={ref}>
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative">
        <div
          className={`transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Why Strategic Marketing
            </span>
          </div>
          <h2
            className="font-display text-[#FFFFFF] leading-tight mb-8"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Why Experts Choose<br />
            <span className="text-[#D91A6B] italic">Strategic Marketing Partnership.</span>
          </h2>
          <div className="space-y-6 font-body text-[#FFFFFF]/65 text-lg leading-relaxed">
            <p>
              At a certain level of expertise, marketing becomes too important to leave to chance — 
              yet too specialized to manage effectively alongside your core work.
            </p>
            <p>
              You may have tried various marketing tactics, hired agencies, or attempted to handle it yourself. 
              But without strategic direction, these efforts often become disconnected, inconsistent, or fail to 
              attract the caliber of clients you deserve.
            </p>
            <p className="text-[#FFFFFF]/80 font-medium">
              A Marketing Strategist ensures every marketing investment builds your authority, 
              attracts quality clients, and contributes to sustainable business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              What You Gain
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            What You Gain From<br />
            <span className="text-[#D91A6B] italic">Strategic Marketing.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`bg-[#F5F5F5] rounded-sm p-6 lg:p-8 group hover:bg-[#111111] transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3
                className="font-display text-[#111111] text-lg font-semibold mb-3 group-hover:text-[#FFFFFF] transition-colors duration-300"
                style={{ fontVariationSettings: '"WONK" 0.3' }}
              >
                {b.title}
              </h3>
              <p className="font-body text-[#111111]/60 text-sm leading-relaxed group-hover:text-[#FFFFFF]/60 transition-colors duration-300">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IdealClientSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div
          className={`transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Is This For You?
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            This Partnership Is<br />
            <span className="text-[#D91A6B] italic">Built For You If...</span>
          </h2>
          <p className="font-body text-[#111111]/65 text-lg leading-relaxed mb-10">
            This engagement is designed for established experts who have already achieved significant success — 
            and are ready to scale their impact through strategic marketing.
          </p>

          <ul className="space-y-4">
            {idealClient.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 font-body text-[#111111]/80 text-base leading-relaxed bg-[#FFFFFF] rounded-sm p-5 transition-[opacity,transform] duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <Check size={18} className="mt-0.5 shrink-0 text-[#D91A6B]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              How It Works
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            How the Marketing<br />
            <span className="text-[#D91A6B] italic">Partnership Works.</span>
          </h2>
          <p className="font-body text-[#111111]/65 text-lg leading-relaxed max-w-2xl">
            This marketing partnership is offered as both project-based engagements and ongoing retainers, 
            depending on your needs and growth stage.
          </p>
          <p className="font-body text-[#111111]/55 text-base leading-relaxed mt-3 italic">
            To ensure dedicated attention and strategic depth, I work with a limited number of marketing clients at any given time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative bg-[#111111] rounded-sm p-8 text-center transition-[opacity,transform] duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#D91A6B] mb-5">
                <span className="font-stat text-[#D91A6B] text-sm font-bold">
                  {step.num}
                </span>
              </div>
              <h3
                className="font-display text-[#FFFFFF] text-lg font-semibold mb-3"
                style={{ fontVariationSettings: '"WONK" 0.3' }}
              >
                {step.title}
              </h3>
              <p className="font-body text-[#FFFFFF]/55 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#D91A6B]/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
