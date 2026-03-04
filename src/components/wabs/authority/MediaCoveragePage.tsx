"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ServiceHero from "../services/ServiceHero";
import ServiceCTA from "../services/ServiceCTA";
import { Mic2, Newspaper, Radio } from "lucide-react";

/* ──────────────────────────── Data ──────────────────────────── */

const mediaFeatures = [
  {
    id: "being-kambua",
    type: "PODCAST FEATURE",
    icon: Mic2,
    platform: "Being Kambua Podcast",
    title: "On Infertility, Maternal Health, and the Community We Owe Each Other",
    image: "/images/kambua-podcast.jpeg",
    description: [
      "Kambua — one of Kenya's most respected voices on motherhood, faith, and resilience — invited Wambui onto the podcast to speak about her experience with infertility and a high-risk pregnancy. The conversation explored what genuine support looks like: from employers and healthcare institutions, to family, partners, and communities.",
      "This episode is among the most personal Wambui has recorded. It connects directly to her decision to leave formal employment and build a business that could work around her health and her family — a decision that eventually became the foundation of WABS.",
    ],
  },
  {
    id: "people-daily",
    type: "PRINT & DIGITAL FEATURE",
    icon: Newspaper,
    platform: "People Daily Newspaper",
    title: "On Measuring Performance Beyond Attendance — A Challenge to the Workplace Status Quo",
    image: "/images/people-daily-featured.jpeg",
    description: [
      "This feature grew from a post Wambui shared questioning the use of employee attendance as the primary metric for performance. The argument is straightforward: when women step away to manage family responsibilities — especially those tied to maternal health — they are often penalised rather than supported.",
      "The People Daily feature expanded the conversation and opened a space for other professionals — men and women — to share their own experiences of being sidelined at work due to parenting or health-related absences. It sparked a broader public dialogue about what fair, human-centred workplaces could look like.",
    ],
  },
  {
    id: "pearl-radio",
    type: "RADIO FEATURE",
    icon: Radio,
    platform: "Pearl Radio",
    title: "On Women Balancing Parenting and Careers in an Unfriendly Workplace Landscape",
    image: "/images/Pearl-radio.jpeg",
    description: [
      "Pearl Radio invited Wambui to speak on a session dedicated to the realities women face when trying to balance careers and parenting within traditional workplace structures. The conversation covered fertility challenges, high-risk pregnancies, and childcare — the issues that most frequently force women to step away from employment entirely.",
      "Wambui used the platform to highlight that remote work and online entrepreneurship are not second-tier options — they are legitimate, sustainable paths for parents who want to earn well without sacrificing their families. The session also expanded to acknowledge that young fathers face their own invisible pressures, often absent from early parenting without any structural support.",
    ],
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

export default function MediaCoveragePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Navigation />

      {/* ── Hero ── */}
      <ServiceHero
        eyebrow="Media Coverage"
        title="As Seen"
        titleAccent="& Heard"
        subtitle="Amplifying conversations that matter — on maternal health, workplace policy, and online entrepreneurship."
        description="Beyond brand strategy and client work, Wambui Kuria has been sought out by media platforms across Kenya and beyond — as a voice on maternal health challenges, family-friendly workplace policies, and the power of online entrepreneurship for parents navigating career and family."
        ctaText="Explore the Features"
        ctaHref="#features"
        heroImage="/images/head-image.png"
      />

      {/* ── Context ── */}
      <ContextSection />

      {/* ── Media Features ── */}
      <MediaFeaturesSection />

      {/* ── Impact ── */}
      <ImpactSection />

      {/* ── Page CTA ── */}
      <ServiceCTA
        headline="Your Story Has the"
        headlineAccent="Same Power."
        description="Whether you are an executive, a consultant, a coach, or a founder — your experience and expertise carry far more influence than you are currently leveraging online. The question is not whether your story is worth telling. The question is whether your brand is structured to tell it effectively."
        closingLine="Because clarity is the foundation of every strong brand."
      />

      <Footer />
    </main>
  );
}

/* ──────────────────── Section Components ──────────────────── */

function ContextSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5] border-b border-[#E8E8E8]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div
          className={`transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              The Story Behind the Platform
            </span>
          </div>
          
          <div className="space-y-6 lg:space-y-8 mb-12">
            <h2
              className="font-display text-[#111111] leading-tight mb-8"
              style={{
                fontSize: "clamp(32px, 4vw, 42px)",
                fontVariationSettings: '"WONK" 0.5',
              }}
            >
              These features are not separate from client work.
              <span className="text-[#D91A6B] italic block mt-2">They are the foundation of it.</span>
            </h2>

            <div className="font-body text-[#111111]/75 text-lg leading-relaxed space-y-6">
              <p>
                Wambui's media presence grew directly from her willingness to speak honestly about an experience most professionals keep private.
              </p>
              <p>
                When a high-risk pregnancy forced her to leave formal employment, she did not step back — she built forward. She transitioned into remote work and online entrepreneurship, and she began speaking publicly about why that transition should not be as rare or as difficult as it is.
              </p>
              <p>
                The conversations she started on social media — about the invisible burden placed on women and young parents in traditional workplaces — resonated far beyond what she expected. They reached podcast producers, newspaper editors, and radio hosts who wanted those conversations amplified to their audiences.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-8 lg:p-10 rounded-sm border border-[#E8E8E8]">
            <p className="font-stat text-[#D91A6B] text-xs font-bold uppercase tracking-widest mb-6">
              The result is a body of public advocacy that sits at the intersection of three themes:
            </p>
            <ul className="space-y-4">
              {[
                "Maternal health and its real impact on professional women's careers",
                "The need for family-friendly workplace policies that support both mothers and fathers",
                "Remote work and online entrepreneurship as practical, proven alternatives — not fallback options",
              ].map((theme) => (
                <li key={theme} className="flex items-start gap-3 font-body text-[#111111]/85 text-base leading-relaxed font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#D91A6B] mt-2 shrink-0" />
                  {theme}
                </li>
              ))}
            </ul>
          </div>
          
          <p className="font-body text-[#111111]/60 text-base italic leading-relaxed mt-10 text-center">
            These features are not about visibility for its own sake. They are the natural outcome of a brand built on a genuine, lived story.
          </p>
        </div>
      </div>
    </section>
  );
}

function MediaFeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section id="features" className="py-24 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 lg:mb-24 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Media Features
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Conversations that
            <span className="text-[#D91A6B] italic"> matter.</span>
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {mediaFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`flex gap-6 lg:gap-10 transition-[opacity,transform] duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Number & Line Indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center shrink-0 text-[#FFFFFF] font-stat font-bold z-10">
                    0{i + 1}
                  </div>
                  {i !== mediaFeatures.length - 1 && (
                    <div className="w-px h-full bg-[#111111]/10 mt-4 mb-[-2rem]" />
                  )}
                </div>

                <div className="flex-1 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={16} className="text-[#D91A6B]" />
                    <span className="font-stat text-[#111111]/50 text-xs font-bold uppercase tracking-widest">
                      {feature.type}
                    </span>
                  </div>
                  
                  <h3 className="font-stat text-[#D91A6B] text-sm font-bold uppercase tracking-widest mb-2">
                    {feature.platform}
                  </h3>
                  
                  <h4
                    className="font-display text-[#111111] text-2xl lg:text-3xl font-semibold mb-6 leading-tight max-w-2xl"
                    style={{ fontVariationSettings: '"WONK" 0.3' }}
                  >
                    {feature.title}
                  </h4>
                  
                  <div className="relative w-full aspect-video lg:aspect-[16/9] mb-8 overflow-hidden rounded-sm group shadow-sm bg-[#F5F5F5] border border-[#E8E8E8]">
                    <Image
                      src={feature.image}
                      alt={feature.platform}
                      fill
                      className="object-contain p-2 transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    />
                    <div className="absolute inset-0 bg-[#D91A6B]/5 group-hover:bg-transparent transition-colors duration-1000 ease-out z-10 pointer-events-none" />
                  </div>
                  
                  <div className="space-y-4 font-body text-[#111111]/70 text-lg leading-relaxed bg-[#F5F5F5] p-6 lg:p-8 rounded-sm border-l-4 border-[#111111]/10">
                    {feature.description.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
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

function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#111111] relative overflow-hidden text-center" ref={ref}>
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative">
        <div
          className={`transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Why This Matters
            </span>
            <div className="w-8 h-px bg-[#D91A6B]" />
          </div>
          
          <h2
            className="font-display text-[#FFFFFF] leading-tight mb-8"
            style={{
              fontSize: "clamp(32px, 4vw, 42px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Why This Matters to WABS — <br className="hidden md:block"/>
            <span className="text-[#D91A6B] italic">and to You.</span>
          </h2>

          <div className="font-body text-[#FFFFFF]/75 text-lg leading-relaxed space-y-6">
            <p>
              Wambui's media presence is not a separate identity from her work as a brand strategist. It is evidence of the same principle she applies with every client:
            </p>
            
            <blockquote className="border-l-2 border-[#D91A6B] my-10 py-4 pl-6 text-left">
              <p className="font-display text-[#FFFFFF] text-xl lg:text-3xl italic leading-tight">
                "A strong brand is not built through strategy alone. It is built by being willing to show up, share your truth, and let that story do the work."
              </p>
            </blockquote>
            
            <p>
              The features above grew organically from social media posts made with honesty and consistency. No PR agency. No paid placements. Just a clear message, a genuine story, and a willingness to be visible.
            </p>
            <p className="text-[#FFFFFF] font-medium pt-4">
              That is exactly what WABS helps its clients build — a brand presence rooted in real experience, positioned with clarity, and visible enough to create the opportunities that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
