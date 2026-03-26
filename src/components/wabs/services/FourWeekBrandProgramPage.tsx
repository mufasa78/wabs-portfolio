"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Compass,
  Package,
  Megaphone,
  Users,
  ChevronDown,
  Briefcase,
  Lightbulb,
  Rocket,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ServiceHero from "./ServiceHero";
import ServiceCTA from "./ServiceCTA";

/* ──────────────────────────── Data ──────────────────────────── */

const audiences = [
  {
    id: "executive",
    label: "Executive",
    subtitle: "Senior Professionals",
    icon: Briefcase,
    description:
      "Your title commands the room but your online presence does not yet reflect your real authority. We build a brand presence that positions you as a trusted industry voice and opens doors to speaking, board, and consulting opportunities.",
    accent: "#111111",
  },
  {
    id: "practitioner",
    label: "Practitioner",
    subtitle: "Coaches & Consultants",
    icon: Lightbulb,
    description:
      "You are exceptional at what you do, but attracting premium clients consistently at the rates you deserve still feels difficult. We build a clarity-first brand that communicates your methodology and positions you confidently in the premium market.",
    accent: "#D91A6B",
  },
  {
    id: "founder",
    label: "Founder",
    subtitle: "Early-Stage Founders",
    icon: Rocket,
    description:
      "You have a bold vision, but your brand does not yet inspire the confidence investors, partners, and customers need to say yes. We translate your vision into a credibility-driven brand narrative that accelerates trust and market momentum.",
    accent: "#A01050",
  },
];

const problems = [
  "Missed opportunities that go to less-qualified competitors",
  "Low recognition within your industry despite your track record",
  "Difficulty attracting the right clients or partners at the right fees",
  "Content that feels scattered, inconsistent, and ineffective",
];

const weeks = [
  {
    id: "week1",
    num: "Week 1",
    icon: Compass,
    title: "Brand Clarity, Positioning & Problem Definition",
    intro:
      "Everything begins with clarity. Most professionals struggle not because they lack expertise, but because they have never clearly defined the problem they solve, the audience they serve, or the value they bring to the market. Week One ends that confusion.",
    items: [
      "Audit your experience, expertise, and professional direction",
      "Identify the specific problem your expertise solves for your ideal client",
      "Define your ideal audience and niche with precision",
      "Clarify your competitive advantage and brand positioning",
      "Craft your core brand message and authority statement",
      "Align your key online profiles with your new positioning",
    ],
    outcomes: [
      "Clear, differentiated brand positioning",
      "Defined niche and ideal audience profile",
      "A strong, ownable brand message",
      "Online presence aligned with your expertise and goals",
    ],
  },
  {
    id: "week2",
    num: "Week 2",
    icon: Package,
    title: "Offer Packaging, Pricing & Digital Foundations",
    intro:
      "Once clarity is established, we build the structure that supports monetisation. Many professionals struggle to earn what they deserve because their offers are unclear, underpriced, or poorly communicated. Week Two fixes that.",
    items: [
      "Package your expertise into a clear, compelling offer",
      "Develop value-based pricing aligned with your experience and impact",
      "Design a lead magnet that attracts your ideal audience",
      "Set up or refine a conversion-ready landing page",
      "Align key social profiles with your brand positioning for consistency",
    ],
    outcomes: [
      "A clearly structured, professionally positioned offer",
      "Strategic pricing that reflects your real value",
      "A digital presence that actively supports lead generation",
      "A cohesive brand experience across all key platforms",
    ],
  },
  {
    id: "week3",
    num: "Week 3",
    icon: Megaphone,
    title: "Content Strategy & Brand Communication",
    intro:
      "This is where clarity turns into visibility. Strong brands are not built through random posting — they are built through consistent, strategic communication that educates, builds trust, and positions you as the authority in your niche.",
    items: [
      "Content writing and copywriting fundamentals tailored to your brand voice",
      "Brand storytelling that communicates authority and builds connection",
      "Educational content frameworks that position you as a thought leader",
      "Two weeks of ready-to-publish posts, fully developed",
      "A complete marketing blueprint for LinkedIn, Facebook, and WhatsApp",
      "A one-month aligned content strategy you can implement immediately",
    ],
    outcomes: [
      "Clear, confident, and consistent brand communication",
      "Structured content plan ready to execute from Week 4 onwards",
      "A defined brand voice and storytelling framework",
      "Confidence in what to say, where to say it, and how often",
    ],
  },
  {
    id: "week4",
    num: "Week 4",
    icon: Users,
    title: "Networking, Outreach & Relationship Building",
    intro:
      "Visibility alone does not build a business. Connection does. In the final week, we focus on how your brand grows through meaningful professional relationships, strategic conversations, and simple systems that turn contacts into opportunities.",
    items: [
      "Networking strategies that build genuine trust without hard selling",
      "Identifying strategic partners, collaborators, and communities to engage",
      "Participating in industry conversations that increase your authority",
      "Building authentic professional relationships in your online communities",
      "Developing simple follow-up and nurture systems for consistent relationship building",
    ],
    outcomes: [
      "Confidence in professional networking and outreach",
      "A clear strategy for engaging your target audience online",
      "Ability to build relationships that create sustainable opportunities",
      "Simple systems for ongoing relationship management",
    ],
  },
];

const outcomes = [
  {
    title: "Clear Brand Positioning",
    desc: "You are differentiated in your industry with a message your ideal clients immediately understand.",
  },
  {
    title: "Packaged & Priced Offer",
    desc: "Your expertise is structured into an offer that is easy to communicate and easy to buy.",
  },
  {
    title: "Lead Magnet & Landing Page",
    desc: "You have a professional digital asset actively capturing interest and building your audience.",
  },
  {
    title: "Optimised Digital Profiles",
    desc: "Your online presence reflects your authority consistently across all key platforms.",
  },
  {
    title: "Content & Visibility Strategy",
    desc: "You have a structured plan and ready-to-publish content to maintain visibility.",
  },
  {
    title: "Networking & Growth Systems",
    desc: "You have the tools and strategy to build relationships that create ongoing opportunities.",
  },
];

const notForYou = [
  "You cannot commit time to focused weekly strategy sessions",
  "You are looking for a done-for-you service where no participation is required",
  "You are not yet ready to build visibility or show up online consistently",
  "You are unwilling to implement the weekly action steps between sessions",
];

const claritySessionPoints = [
  "Clarify your monetisable expertise and what you are ready to offer the market",
  "Review your current online presence and identify the most urgent gaps",
  "Define which audience, platform, and positioning to prioritise first",
  "Map the strategic next steps most aligned with your goals",
];

/* ──────────────────────────── Component ──────────────────────────── */

export default function FourWeekBrandProgramPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Navigation />

      {/* ── Hero ── */}
      <ServiceHero
        eyebrow="4-Week Strategic Program"
        title="Stop Guessing. Start Building"
        titleAccent="a Brand That Works."
        subtitle="Your expertise deserves authority — not just recognition."
        description="The 4-Week Strategic Brand Launch & Growth Program is a focused, done-with-you engagement designed for senior professionals, consultants, coaches, and founders ready to transform their expertise into a credible, visible, and opportunity-generating brand."
        ctaText="Book Your Brand Clarity Session"
        ctaHref="https://selar.com/dlo5455b8f"
      />

      {/* ── Audience Segmentation ── */}
      <AudienceSection />

      {/* ── Problem ── */}
      <ProblemSection />

      {/* ── Solution ── */}
      <SolutionSection />

      {/* ── Program Structure ── */}
      <ProgramStructureSection />

      {/* ── Outcomes ── */}
      <OutcomesSection />

      {/* ── Qualification ── */}
      <QualificationSection />

      {/* ── Entry Point ── */}
      <EntryPointSection />

      {/* ── Page CTA ── */}
      <ServiceCTA
        headline="Your Expertise Deserves Authority —"
        headlineAccent="Not Just Recognition."
        description="Book a 2-Hour Brand Clarity Session and leave with a clear, strategic direction for your brand — whether or not the 4-Week Program is your next step."
        closingLine="Because clarity is the foundation of every strong brand."
      />

      <Footer />
    </main>
  );
}

/* ──────────────────── Section Components ──────────────────── */

function AudienceSection() {
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
              Which Path Describes You?
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            This program is designed to<br />
            <span className="text-[#D91A6B] italic">meet you at your stage.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={a.id}
                className={`relative rounded-sm p-8 lg:p-10 overflow-hidden group transition-[opacity,transform] duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  backgroundColor: a.accent,
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <Icon
                  size={36}
                  className="text-[#FFFFFF]/30 mb-4"
                  strokeWidth={1.5}
                />
                <span className="font-stat text-[#D91A6B] text-xs font-bold uppercase tracking-widest block mb-1"
                  style={{ color: a.accent === "#D91A6B" ? "#FFFFFF" : "#D91A6B" }}
                >
                  {a.label}
                </span>
                <h3
                  className="font-display text-[#FFFFFF] text-xl lg:text-2xl font-semibold mb-4"
                  style={{ fontVariationSettings: '"WONK" 0.3' }}
                >
                  {a.subtitle}
                </h3>
                <p className="font-body text-[#FFFFFF]/65 text-sm leading-relaxed">
                  {a.description}
                </p>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FFFFFF] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden" ref={ref}>
      {/* Grain */}
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
              The Problem
            </span>
          </div>
          <h2
            className="font-display text-[#FFFFFF] leading-tight mb-8"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Why Most Professional Brands<br />
            <span className="text-[#D91A6B] italic">Stay Invisible.</span>
          </h2>
          <div className="space-y-6 font-body text-[#FFFFFF]/65 text-lg leading-relaxed mb-10">
            <p>
              Many professionals assume building a strong online brand is simply about
              being visible. So they focus on creating a logo, launching a website,
              posting content, and staying active on multiple platforms.
            </p>
            <p>
              But visibility without strategy rarely produces results. Without clear
              positioning, consistent messaging, and genuine audience alignment, even the
              most valuable expertise remains hidden.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 bg-[#FFFFFF]/5 rounded-sm p-4 transition-[opacity,transform] duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0 text-[#D91A6B]" />
                <p className="font-body text-[#FFFFFF]/75 text-sm leading-relaxed">
                  {p}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[#D91A6B] pl-4 py-2">
            <p className="font-body text-[#FFFFFF]/70 text-base italic leading-relaxed">
              &ldquo;Your expertise may be strong — but if your brand is not communicating
              it clearly, the market will not pay for what it cannot understand.&rdquo;
            </p>
            <p className="font-stat text-[#D91A6B] text-xs uppercase tracking-widest mt-2 font-semibold">
              — Brand positioning principle
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div
          className={`transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              The Solution
            </span>
            <div className="w-8 h-px bg-[#D91A6B]" />
          </div>
          <h2
            className="font-display text-[#111111] leading-tight mb-8"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            A Structured Brand Strategy<br />
            <span className="text-[#D91A6B] italic">Built Around You.</span>
          </h2>
          <p className="font-body text-[#111111]/65 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Over four focused weeks, we build the complete strategic foundation your brand
            needs — and you leave with everything in place to grow, attract, and monetise
            effectively.
          </p>
          <p className="font-body text-[#111111]/55 text-base leading-relaxed max-w-2xl mx-auto">
            This is not a course. This is not a template. This is a personalised,
            done-with-you engagement where every output is built specifically for your
            expertise, your audience, and your goals.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProgramStructureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [openId, setOpenId] = useState<string | null>(weeks[0].id);

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Program Structure
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            What We Build<br />
            <span className="text-[#D91A6B] italic">Over 4 Weeks.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {weeks.map((week, i) => {
            const isOpen = openId === week.id;
            const Icon = week.icon;
            return (
              <div
                key={week.id}
                className={`bg-[#FFFFFF] border border-[#E8E8E8] rounded-sm overflow-hidden transition-[opacity,transform] duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : week.id)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-[#F5F5F5]/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D91A6B]/10">
                      <Icon size={20} className="text-[#D91A6B]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-stat text-[#D91A6B] text-xs font-bold uppercase tracking-widest block">
                        {week.num}
                      </span>
                      <h3
                        className="font-display text-[#111111] text-lg lg:text-xl font-semibold"
                        style={{ fontVariationSettings: '"WONK" 0.3' }}
                      >
                        {week.title}
                      </h3>
                    </div>
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
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-8 pt-2">
                    <p className="font-body text-[#111111]/65 text-base leading-relaxed mb-6">
                      {week.intro}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* What we work on */}
                      <div>
                        <h4 className="font-stat text-xs uppercase tracking-widest font-semibold text-[#111111]/40 mb-4">
                          What We Work On Together
                        </h4>
                        <ul className="space-y-2">
                          {week.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 font-body text-[#111111]/75 text-sm leading-relaxed"
                            >
                              <Check
                                size={14}
                                className="mt-0.5 shrink-0 text-[#D91A6B]"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key outcomes */}
                      <div>
                        <h4 className="font-stat text-xs uppercase tracking-widest font-semibold text-[#111111]/40 mb-4">
                          Key Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {week.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="flex items-start gap-3 font-body text-[#111111]/80 text-sm leading-relaxed font-medium"
                            >
                              <div className="w-2 h-2 rounded-full bg-[#D91A6B] mt-1.5 shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

function OutcomesSection() {
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
              After 4 Weeks
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            What Changes After<br />
            <span className="text-[#D91A6B] italic">These 4 Weeks.</span>
          </h2>
          <p className="font-body text-[#111111]/65 text-lg leading-relaxed mt-4 max-w-2xl">
            By the end of the program, you will have a complete brand foundation that
            positions you as an authority and gives you the structure to grow with
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o, i) => (
            <div
              key={o.title}
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
                {o.title}
              </h3>
              <p className="font-body text-[#111111]/60 text-sm leading-relaxed group-hover:text-[#FFFFFF]/60 transition-colors duration-300">
                {o.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          className={`font-body text-[#111111]/70 text-lg leading-relaxed mt-10 text-center font-medium italic transition-[opacity,transform] duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Most importantly, you will have the clarity and structure required to monetise
          your expertise — effectively and sustainably.
        </p>
      </div>
    </section>
  );
}

function QualificationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden" ref={ref}>
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
              Important
            </span>
          </div>
          <h2
            className="font-display text-[#FFFFFF] leading-tight mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            This Program Is<br />
            <span className="text-[#D91A6B] italic">Not For Everyone.</span>
          </h2>
          <p className="font-body text-[#FFFFFF]/65 text-lg leading-relaxed mb-8">
            This is a high-engagement, done-with-you program. It works best for leaders
            who are ready to show up, implement, and commit to building something that
            lasts.
          </p>

          <p className="font-stat text-[#FFFFFF]/40 text-xs uppercase tracking-widest font-semibold mb-4">
            This program is not suitable if:
          </p>
          <div className="space-y-3 mb-10">
            {notForYou.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 bg-[#FFFFFF]/5 rounded-sm p-4 transition-[opacity,transform] duration-500 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0 text-[#FFFFFF]/40" />
                <p className="font-body text-[#FFFFFF]/65 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="font-body text-[#FFFFFF]/50 text-base leading-relaxed">
            If this describes you, the{" "}
            <Link
              href="/fractional-strategist"
              className="text-[#D91A6B] hover:underline font-medium"
            >
              Fractional Brand & Marketing Strategist
            </Link>{" "}
            retainer may be a better fit.
          </p>
        </div>
      </div>
    </section>
  );
}

function EntryPointSection() {
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
              Not Sure Where to Begin?
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight mb-4"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Start Here.
          </h2>
          <p className="font-body text-[#111111]/65 text-lg leading-relaxed mb-8">
            If you are unsure whether the 4-Week Program is right for your current stage,
            begin with a focused 2-Hour Brand Clarity Session.
          </p>

          <div className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-sm p-8">
            <p className="font-stat text-[#111111]/40 text-xs uppercase tracking-widest font-semibold mb-5">
              In this session we will:
            </p>
            <ul className="space-y-3 mb-6">
              {claritySessionPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 font-body text-[#111111]/75 text-sm leading-relaxed"
                >
                  <Check size={15} className="mt-0.5 shrink-0 text-[#D91A6B]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="font-body text-[#111111]/55 text-base italic leading-relaxed">
              Because clarity beats speed. Once the direction is clear, every step you
              take becomes more effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
