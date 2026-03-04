"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check, Shield, Eye, Monitor, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ServiceHero from "./ServiceHero";
import ServiceCTA from "./ServiceCTA";

/* ──────────────────────────── Data ──────────────────────────── */

const pillars = [
  {
    id: "brand",
    num: "01",
    icon: Shield,
    title: "Brand & Positioning",
    description:
      "Clarifying your authority, aligning your messaging, and ensuring your expertise is presented consistently across every platform.",
  },
  {
    id: "marketing",
    num: "02",
    icon: Eye,
    title: "Marketing & Visibility",
    description:
      "Structuring your content strategy, preparing for events and launches, and keeping visibility efforts proactive rather than reactive.",
  },
  {
    id: "digital",
    num: "03",
    icon: Monitor,
    title: "Digital Infrastructure",
    description:
      "Ensuring you own and control your domains, hosting, platforms, and tools — and that they all support your brand and marketing strategy.",
  },
];

const serviceDetails = [
  {
    id: "brand-detail",
    num: "01",
    title: "Brand & Positioning Oversight",
    tagline: "Ensure Your Brand Communicates the Authority You Already Carry.",
    description:
      "Your brand must consistently reflect your expertise, values, and professional goals — across every touchpoint, every platform, every interaction.",
    items: [
      "Clarifying and refining your brand positioning and core narrative",
      "Ensuring your messaging communicates authority clearly across platforms",
      "Structuring how your expertise and offers are presented online",
      "Aligning your brand with your long-term professional and business goals",
      "Ensuring consistency across all brand touchpoints and communication",
    ],
    quote:
      "When positioning is clear, your expertise becomes easier for your audience to understand, trust, and engage with.",
  },
  {
    id: "marketing-detail",
    num: "02",
    title: "Marketing & Visibility Oversight",
    tagline: "Marketing That Supports Your Leadership — Without Overwhelming It.",
    description:
      "Visibility must be planned and strategic, not reactive and scattered. I ensure your brand communication remains consistent, proactive, and aligned with your business objectives.",
    items: [
      "Structuring your content calendar and thought leadership strategy",
      "Preparing marketing materials for events, launches, and announcements",
      "Coordinating marketing direction with your internal team or external creatives",
      "Ensuring consistent brand communication across all platforms",
      "Anticipating visibility needs so your brand is always positioned ahead of the curve",
    ],
  },
  {
    id: "digital-detail",
    num: "03",
    title: "Digital Infrastructure & Technical Oversight",
    tagline: "Your Digital Assets Should Be Yours. Fully Owned. Fully Controlled.",
    description:
      "Many leaders invest in websites, platforms, and digital tools — then discover they do not truly own or control them. This oversight protects your digital assets and ensures every platform serves your brand strategy.",
    items: [
      "Ensuring proper ownership of your domain, hosting, and key digital accounts",
      "Reviewing website development briefs, scope of work, and deliverables",
      "Guiding communication with developers, designers, and technical teams",
      "Ensuring proper handover of website files and access credentials",
      "Structuring secure access to social media platforms and digital tools",
      "Advising on AI-powered tools, workflow automation, and collaboration platforms that reduce manual effort",
    ],
    footer:
      "The goal is not to overwhelm you with technology. The goal is to ensure the right infrastructure supports your brand — so your visibility grows without your energy being consumed by technical decisions.",
  },
];

const benefits = [
  {
    title: "Strategic Oversight",
    desc: "One person accountable for the direction of your brand, marketing, and digital systems.",
  },
  {
    title: "Clear Positioning",
    desc: "Your authority and expertise communicated without ambiguity — online and offline.",
  },
  {
    title: "Structured Visibility",
    desc: "A marketing strategy that moves forward consistently, not only when you have time for it.",
  },
  {
    title: "Digital Asset Protection",
    desc: "You own and control every platform, account, and piece of digital infrastructure.",
  },
  {
    title: "Consistent Messaging",
    desc: "Your brand sounds and looks like you — on every platform, every time.",
  },
  {
    title: "Reduced Decision Fatigue",
    desc: "You stop making reactive branding and technical decisions and start operating from strategy.",
  },
];

const idealClient = [
  "You are a CEO or senior executive ready to build a brand presence that matches your leadership",
  "You are a consultant or coach with growing visibility who needs strategic infrastructure behind it",
  "You are a founder leading an expanding business and you need your brand to grow alongside it",
  "You have a marketing team, creatives, or developers — but no clear strategic direction unifying their work",
  "You want to stop managing branding and digital issues reactively and start operating from a long-term strategy",
];

const steps = [
  {
    num: "01",
    title: "Book a 2-Hour Brand Clarity Session",
    desc: "We assess your current brand positioning, marketing structure, and digital infrastructure together.",
  },
  {
    num: "02",
    title: "Strategic Recommendations",
    desc: "By the end of the session, you have a clear picture of where your brand stands and what needs to change.",
  },
  {
    num: "03",
    title: "Retainer Partnership",
    desc: "If the engagement is a fit, we move into an ongoing monthly advisory relationship structured around your goals and growth.",
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

export default function FractionalStrategistPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Navigation />

      {/* ── Hero ── */}
      <ServiceHero
        eyebrow="Fractional Brand & Marketing Strategist"
        title="Your Brand Visibility Is a Strategic Asset."
        titleAccent="Treat It Like One."
        subtitle="Executive-level brand, marketing, and digital oversight — without the cost of a full-time hire."
        description="You have built a career worth recognising. But without clear positioning, structured marketing, and properly owned digital infrastructure, the right opportunities will continue to pass you by."
        ctaText="Book Your Brand Clarity Session"
        ctaHref="#booking"
      />

      {/* ── Explainer ── */}
      <ExplainerSection />

      {/* ── Three Pillars ── */}
      <PillarsSection />

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
        headline="Your Brand Should Reflect"
        headlineAccent="the Authority You Already Carry."
        description="We review your brand positioning, marketing structure, and digital infrastructure — then map your clearest path forward."
        closingLine="Because clarity is the foundation of every strong brand."
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
              What Is This?
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight mb-8"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            What Is a Fractional Brand &<br />
            <span className="text-[#D91A6B] italic">Marketing Strategist?</span>
          </h2>
          <div className="space-y-6 font-body text-[#111111]/70 text-lg leading-relaxed">
            <p>
              A Fractional Brand & Marketing Strategist gives you executive-level oversight
              of your branding, marketing, and digital systems — at a fraction of the cost
              and commitment of a full-time senior hire.
            </p>
            <p>
              Instead of managing the entire ecosystem yourself, you gain a strategic
              partner who ensures your brand visibility, marketing activities, and digital
              platforms remain structured, protected, and aligned with your business goals.
            </p>
            <p className="font-medium text-[#111111]/85">
              Most leaders who seek this support initially come for one thing — branding
              or marketing — and quickly realise they also need someone to oversee the
              digital infrastructure behind it. This partnership ensures all three areas
              work together seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
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
              Three Areas of Oversight
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Your Brand Ecosystem —<br />
            <span className="text-[#D91A6B] italic">Managed Strategically.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`relative bg-[#111111] rounded-sm p-8 lg:p-10 overflow-hidden transition-[opacity,transform] duration-500 ease-out group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <span className="font-stat text-[#D91A6B] text-xs font-bold uppercase tracking-widest mb-4 block">
                  {p.num}
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
                  {p.title}
                </h3>
                <p className="font-body text-[#FFFFFF]/60 text-base leading-relaxed">
                  {p.description}
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
                          — Brand positioning principle
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
              Why This Model
            </span>
          </div>
          <h2
            className="font-display text-[#FFFFFF] leading-tight mb-8"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Why Leaders Choose<br />
            <span className="text-[#D91A6B] italic">the Fractional Model.</span>
          </h2>
          <div className="space-y-6 font-body text-[#FFFFFF]/65 text-lg leading-relaxed">
            <p>
              At a certain stage of growth, branding and marketing become too important
              to ignore — yet too operational to manage personally.
            </p>
            <p>
              You may already have designers, developers, content creators, or a small
              marketing team. But without clear strategic oversight, their efforts can
              easily become fragmented, reactive, or misaligned with your real business
              goals.
            </p>
            <p className="text-[#FFFFFF]/80 font-medium">
              A Fractional Brand & Marketing Strategist ensures everything moves in a
              unified, intentional direction.
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
            <span className="text-[#D91A6B] italic">This Partnership.</span>
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
            This engagement is best suited for established leaders who already carry real
            authority — but whose brand presence has not yet caught up with it.
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
            How the Engagement<br />
            <span className="text-[#D91A6B] italic">Works.</span>
          </h2>
          <p className="font-body text-[#111111]/65 text-lg leading-relaxed max-w-2xl">
            This role is offered as a monthly retainer engagement. Unlike project-based
            work, it provides ongoing strategic support that evolves with your business —
            not a one-time output.
          </p>
          <p className="font-body text-[#111111]/55 text-base leading-relaxed mt-3 italic">
            To maintain the quality and depth this role demands, I work with a limited
            number of advisory clients at any given time.
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
