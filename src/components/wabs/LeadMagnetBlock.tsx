"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    title: "Brand Positioning",
    description:
      "Do you know where your brand fits in the market and how it stands out from competitors?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Brand Strategy",
    description:
      "Have you defined a clear vision of your brand's goals, values, and messaging that resonates with your target audience?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M2 20h20M4 20V10l8-8 8 8v10" />
        <rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
  },
  {
    title: "Marketing Strategy",
    description:
      "Is there a comprehensive plan that outlines how to effectively reach and engage potential customers across various platforms?",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

function SignupForm({ onSubmit, submitted }: { onSubmit: () => void; submitted: boolean }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && email) onSubmit();
  };

  if (submitted) {
    return (
      <div className="bg-[#4A5E4F]/25 border border-[#4A5E4F]/50 rounded-sm px-8 py-7 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#4A5E4F]/40 mb-4">
          <CheckCircle2 size={22} className="text-[#F5EFE0]" />
        </div>
        <h3 className="font-display text-[#F5EFE0] text-xl font-semibold mb-2">Blueprint on its way!</h3>
        <p className="font-body text-[#F5EFE0]/65 text-sm">
          Check your inbox shortly. Welcome to the WABS community, {firstName}!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="font-body text-[#F5EFE0]/70 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
          First Name <span className="text-[#C4622D]">*</span>
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Your first name"
          required
          className="w-full bg-[#F5EFE0]/10 border border-[#F5EFE0]/20 text-[#F5EFE0] placeholder-[#F5EFE0]/35 px-4 py-3.5 rounded-sm font-body text-base focus:outline-none focus:border-[#C4622D] transition-colors"
        />
      </div>
      <div>
        <label className="font-body text-[#F5EFE0]/70 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
          Email Address <span className="text-[#C4622D]">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full bg-[#F5EFE0]/10 border border-[#F5EFE0]/20 text-[#F5EFE0] placeholder-[#F5EFE0]/35 px-4 py-3.5 rounded-sm font-body text-base focus:outline-none focus:border-[#C4622D] transition-colors"
        />
      </div>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#C4622D] text-[#F5EFE0] px-6 py-4 rounded-sm font-body font-semibold text-sm hover:bg-[#b05526] transition-all duration-200 hover:scale-[1.02] group mt-1"
      >
        Send me this ASAP
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
      <p className="font-body text-[#F5EFE0]/30 text-xs text-center pt-1">
        No spam. Unsubscribe anytime. Your details are safe with us.
      </p>
    </form>
  );
}

export default function LeadMagnetBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="lead-magnet" className="relative overflow-hidden" ref={ref}>

      {/* ── HERO BLOCK (dark) ── */}
      <div
        className="relative py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #2d1a08 0%, #1C1208 65%, #1a2a1e 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #C4622D 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #4A5E4F 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">

            {/* Left: Headline */}
            <div className={`transition-[opacity,transform] duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C4622D]" />
                <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
                  Free Resource
                </span>
              </div>
              <h2
                className="font-display text-[#F5EFE0] leading-tight mb-6"
                style={{ fontSize: "clamp(34px, 4.5vw, 58px)", fontVariationSettings: '"WONK" 0.7' }}
              >
                The Roadmap to a
                <span className="text-[#C4622D] italic block">Profitable Online Presence</span>
              </h2>
              <p className="font-body text-[#F5EFE0]/65 text-lg lg:text-xl leading-relaxed max-w-xl">
                When launching an online business or transitioning from offline to digital, many entrepreneurs
                and professionals make the same mistake: hiring a social media manager without first laying a
                solid foundation.
              </p>
            </div>

            {/* Right: Form */}
            <div className={`transition-[opacity,transform] duration-700 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="bg-[#F5EFE0]/[0.06] border border-[#F5EFE0]/12 rounded-sm p-7 lg:p-8">
                <h3
                  className="font-display text-[#F5EFE0] text-xl lg:text-2xl font-semibold mb-6 leading-snug"
                  style={{ fontVariationSettings: '"WONK" 0.5' }}
                >
                  Grab Your Free Clarity Blueprint for Launching Online
                </h3>
                <SignupForm onSubmit={() => setSubmitted(true)} submitted={submitted} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY CONTENT (warm cream) ── */}
      <div className="bg-[#F5EFE0] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* What Most People Get Wrong */}
          <div className={`mb-20 transition-[opacity,transform] duration-700 ease-out delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#C4622D]" />
                <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
                  The Common Mistake
                </span>
              </div>
              <h3
                className="font-display text-[#1C1208] leading-tight mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontVariationSettings: '"WONK" 0.5' }}
              >
                What Most People Get Wrong
                <span className="text-[#C4622D] italic"> About Launching Their Brand Online</span>
              </h3>
              <p className="font-body text-[#1C1208]/65 text-lg leading-relaxed mb-5">
                When senior professionals or entrepreneurs think about launching an online business or
                transitioning their offline business online, the first move often involves hiring a social
                media marketer to create posts and run ads.
              </p>
              <p className="font-body text-[#1C1208]/65 text-lg leading-relaxed mb-5">
                While it&apos;s great to recognize the importance of establishing an online brand, many lack
                a foundational understanding of what it truly takes to build a profitable online presence.
                As a result, you might rush into hiring a social media marketer without the necessary
                groundwork, leading to frustration when the expected results don&apos;t materialize.
              </p>
              <p className="font-body text-[#1C1208]/75 text-lg font-medium leading-relaxed">
                Even a highly competent social media manager can struggle to deliver success if your business lacks:
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className={`grid md:grid-cols-3 gap-6 mb-20 transition-[opacity,transform] duration-700 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="bg-white rounded-sm p-8 border border-[#1C1208]/8 wabs-shadow transition-[opacity,transform] duration-700 ease-out"
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-[#C4622D]/10 text-[#C4622D] mb-5">
                  {pillar.icon}
                </div>
                <h4
                  className="font-display text-[#1C1208] text-xl font-semibold mb-3"
                  style={{ fontVariationSettings: '"WONK" 0.3' }}
                >
                  {pillar.title}
                </h4>
                <p className="font-body text-[#1C1208]/60 text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Why This Roadmap */}
          <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 transition-[opacity,transform] duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#C4622D]" />
                <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
                  Why It Matters
                </span>
              </div>
              <h3
                className="font-display text-[#1C1208] leading-tight mb-6"
                style={{ fontSize: "clamp(26px, 3vw, 40px)", fontVariationSettings: '"WONK" 0.5' }}
              >
                Why This Roadmap Is Key
                <span className="text-[#C4622D] italic block">To Your Online Success</span>
              </h3>
              <p className="font-body text-[#1C1208]/65 text-lg leading-relaxed mb-6">
                To help you build a successful online presence and effectively monetize your expertise or
                services, this guide will provide you with essential questions you need to answer to gain
                clarity on your brand building efforts.
              </p>
              <p className="font-body text-[#1C1208]/65 text-lg leading-relaxed mb-8">
                This guide isn&apos;t just a set of questions — it&apos;s your roadmap to building a successful
                and profitable online brand. This roadmap isn&apos;t just a guide. It&apos;s a strategic blueprint
                designed to help you launch or revamp your online business with confidence.
              </p>
              <div className="bg-[#C4622D]/8 border border-[#C4622D]/20 rounded-sm px-6 py-5">
                <p className="font-display text-[#1C1208] text-lg font-semibold italic" style={{ fontVariationSettings: '"WONK" 0.4' }}>
                  "Don&apos;t wait. Download it now to start your journey with clarity and confidence."
                </p>
              </div>
            </div>

            {/* Right: second form CTA */}
            <div className="bg-[#1C1208] rounded-sm p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-10"
                style={{ background: "radial-gradient(circle, #C4622D 0%, transparent 70%)" }} />
              <h4
                className="font-display text-[#F5EFE0] text-2xl font-semibold mb-2 relative"
                style={{ fontVariationSettings: '"WONK" 0.5' }}
              >
                Your Blueprint to Online Success Awaits
              </h4>
              <p className="font-body text-[#F5EFE0]/55 text-sm mb-7 relative">
                Start Building Now
              </p>
              <div className="relative">
                <SignupForm onSubmit={() => setSubmitted(true)} submitted={submitted} />
              </div>
              <p className="font-body text-[#F5EFE0]/30 text-xs mt-5 leading-relaxed relative">
                By providing your details, you also consent to receiving additional free resources and
                subsidized offers to help you build your brand efficiently and cost-effectively.
              </p>
            </div>
          </div>

          {/* Wambui Bio */}
          <div className={`grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start bg-white rounded-sm p-8 lg:p-12 border border-[#1C1208]/8 wabs-shadow transition-[opacity,transform] duration-700 ease-out delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="shrink-0 mx-auto lg:mx-0">
              <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-[#C4622D]/20">
                <Image
                  src="/images/wambui-2.jpeg"
                  alt="Wambui Kuria — Founder, WABS Digital"
                  width={208}
                  height={208}
                  className="w-full h-full object-cover object-top"
                  sizes="(max-width: 1024px) 160px, 208px"
                  quality={85}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#C4622D]" />
                <span className="font-stat text-[#C4622D] text-sm uppercase tracking-widest font-medium">
                  Meet Your Guide
                </span>
              </div>
              <h3
                className="font-display text-[#1C1208] leading-tight mb-1"
                style={{ fontSize: "clamp(22px, 2.8vw, 34px)", fontVariationSettings: '"WONK" 0.5' }}
              >
                Wambui Kuria
              </h3>
              <p className="font-body text-[#C4622D] font-semibold text-sm mb-5">Founder, WABS Digital</p>
              <p className="font-body text-[#1C1208]/65 text-base leading-relaxed mb-4">
                I&apos;m a branding and social media content strategist passionate about helping senior
                professionals and service-based entrepreneurs like you build strong online brands through
                effective content marketing and brand positioning.
              </p>
              <p className="font-body text-[#1C1208]/65 text-base leading-relaxed mb-4">
                After spending over five years in the corporate world of FMCG and gaining valuable experience
                in quality control, I made a career shift to focus on building my online presence. It wasn&apos;t
                easy, and I often wish I had known what I know now — it would have made my journey smoother!
                But I have no regrets, just a deep desire to help you navigate this path more easily.
              </p>
              <p className="font-body text-[#1C1208]/65 text-base leading-relaxed">
                I&apos;ve worked with many professionals — from coaches and consultants to service-based
                entrepreneurs — to help them launch their online brands, and I&apos;m aiming to impact over{" "}
                <span className="font-semibold text-[#1C1208]">100 more of you</span> this year!
              </p>

              {/* WABS Mission */}
              <div className="mt-8 pt-8 border-t border-[#1C1208]/10">
                <p className="font-body text-[#1C1208]/55 text-sm uppercase tracking-widest font-semibold mb-3">At WABS, we believe</p>
                <p className="font-display text-[#1C1208] text-lg leading-relaxed italic" style={{ fontVariationSettings: '"WONK" 0.3' }}>
                  We turn expertise into income and impact — helping Africa&apos;s professionals and
                  purpose-driven founders package their knowledge, position their brands online, and build
                  systems that drive visibility, clients, and profits.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
