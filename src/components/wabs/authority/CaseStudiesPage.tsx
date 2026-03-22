"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navigation from "../Navigation";
import Footer from "../Footer";
import ServiceHero from "../services/ServiceHero";
import ServiceCTA from "../services/ServiceCTA";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

/* ──────────────────────────── Data ──────────────────────────── */

const impactNumbers = [
  { value: "200+", label: "Professionals Served" },
  { value: "20K+", label: "LinkedIn Followers Built" },
  { value: "8+", label: "Countries Represented" },
  { value: "100%", label: "Done-With-You Approach" },
];

const caseStudies = [
  {
    id: "alex-mwangi",
    name: "Alex Mwangi",
    role: "CEO, Cent Worrier & Centre for Corporate Governance (CCG) | Kenya",
    image: "/images/alex-mwangi.png",
    challenge:
      "Alex came to WABS managing two brands — his personal brand and CCG, a corporate governance training organisation — both of which had limited digital presence and little engagement online. His LinkedIn had 3,000 followers but no clear strategic direction, and CCG's page had only 300 followers with almost no community activity.",
    whatWeDid: [
      "Brand clarity and positioning sessions for both personal and corporate brands",
      "Audience definition and messaging alignment for Alex's financial fitness niche",
      "Content strategy and thought leadership framework for both platforms",
      "LinkedIn profile optimisation and positioning for authority",
      "Lead nurturing and monetisation consultancy",
      "Active content management and community engagement",
    ],
    results: [
      "Alex's personal LinkedIn grew from 3,000 to 20,000+ followers",
      "CCG's LinkedIn grew from 300 to 2,000+ active, engaged followers",
      "Established Alex as a recognised authority in financial fitness",
      "CCG positioned as a thought leader in corporate governance training for senior executives",
    ],
    quote: {
      text: "You have not only helped me gain clarity and amplify my personal brand — from 3,000 to over 20,000 followers — but you have also taken our corporate brand from 300 followers with little engagement to over 2,000 active followers. Your expertise is truly exceptional.",
      author: "Alex Mwangi, CEO Cent Worrier | CCG",
    },
  },
  {
    id: "elizabeth-nyambura",
    name: "Elizabeth Christine Nyambura",
    role: "Renewable Energy Advocate & Educator | She Speaks Solar | Kenya",
    image: "/images/elizabeth-nyambura.png",
    challenge:
      "Elizabeth needed to establish herself as a credible voice in the renewable energy space and grow an audience that reflected her expertise. She lacked a consistent brand presence across platforms and had not yet structured her knowledge into a scalable offer.",
    whatWeDid: [
      "Brand positioning and authority strategy for the renewable energy niche",
      "Social media profile optimisation across LinkedIn, Instagram, and Facebook",
      "Lead-nurturing content campaigns aligned with her expertise",
      "Audience growth strategy and engagement framework",
      "Support in developing and launching an accredited renewable energy training course",
      "Partnership outreach strategy with energy sector brands",
    ],
    results: [
      "LinkedIn audience grew by 4,000 followers",
      "Instagram grew by 1,128 followers",
      "Facebook grew by 9,000 followers",
      "Secured partnerships with top renewable energy brands",
      "Developed and launched an accredited renewable energy training course",
      "A LinkedIn connection directly offered her a contract to build a globally recognised certification programme",
    ],
    quote: {
      text: "Wambui taught me that striving for the perfect post does not guarantee success. She unlocked my confidence to put my brand out there — and someone on LinkedIn offered me a contract to develop a training course that will be accredited as a globally recognised certification. I am so excited.",
      author: "Elizabeth Christine Nyambura, She Speaks Solar",
    },
  },
  {
    id: "caroline-gikonyo",
    name: "Caroline Gikonyo",
    role: "Life Coach & Business Coach | Kenya",
    image: "/images/caroline-gikonyo.png",
    challenge:
      "Caroline wanted to elevate her LinkedIn presence and launch her Email-Based Coaching Course — the EEC Program. She needed stronger positioning, a clearer brand voice, and a structured strategy to attract and convert the right audience.",
    whatWeDid: [
      "Brand clarity sessions and positioning refinement",
      "LinkedIn profile revamp — design, messaging, and calls to action",
      "One month of done-with-you content creation and publishing",
      "Lead magnet development — a 5-day email course",
      "Email marketing integration and audience nurturing strategy",
      "Launch strategy and execution for the EEC Programme",
    ],
    results: [
      "Gained 1,000+ LinkedIn followers during the engagement",
      "Secured 20+ course sign-ups at launch",
      "Strengthened her positioning as a transformational coach for professional women",
      "Built a functioning email list with an active lead magnet",
    ],
    quote: {
      text: "Wambui conducted a thorough brand audit, revamped my profile, and guided me through content creation and marketing strategies. She managed a month of LinkedIn posts and played a key role in launching my lead magnet. I highly recommend her expertise in elevating brands and improving messaging.",
      author: "Caroline Gikonyo, Life Coach & Business Coach",
    },
  },
  {
    id: "ebi-sheila",
    name: "Ebi Sheila Diete-Spiff",
    role: "Self-Love & Transition Coach | UK",
    image: "/images/ebi-sheila.png",
    challenge:
      "Ebi was ready to launch her self-love coaching programme but lacked the brand positioning, digital infrastructure, and marketing strategy to do it professionally. She needed a complete brand foundation built around her unique methodology.",
    whatWeDid: [
      "Brand positioning and messaging for the self-love coaching niche",
      "Signature programme structure and offer packaging",
      "Website design and development",
      "Email marketing setup and integration",
      "Content creation strategy and 30 days of done-with-you posts",
      "Brand identity alignment across digital platforms",
    ],
    results: [
      "Launched her self-love coaching brand as a credible, professional online presence",
      "Gained 1,000+ LinkedIn followers",
      "Established a nurturing online brand that communicates trust and authority",
      "Built a fully functional website with integrated email marketing",
    ],
    quote: {
      text: "The program covered everything — from brand positioning to website finalisation. She simply shortened my learning curve. Great value for money, and I would recommend her to anyone looking to position themselves online.",
      author: "Ebi Sheila Diete-Spiff, Self-Love & Transition Coach | UK",
    },
  },
  {
    id: "jane-mugo",
    name: "Jane W. Mugo",
    role: "Founder, Zawkar Consultancy Firm | Kenya",
    image: "/images/jane-mugo.png",
    challenge:
      "Jane had an existing website that no longer reflected the level of professionalism and impact her brand had achieved. The site was outdated, unclear in its messaging, and not converting. She needed a digital presence that matched her institutional credibility and the quality of her training programmes.",
    whatWeDid: [
      "Full brand audit and positioning review",
      "Messaging clarification and website copy rewrite",
      "Website redesign to reflect institutional credibility",
      "Digital presence alignment across platforms",
      "Offer presentation and programme communication",
    ],
    results: [
      "Delivered a professional website that accurately reflects Zawkar's authority and programme quality",
      "Clarified messaging that speaks directly to her target audience",
      "Elevated digital presence aligned with her institutional standing",
    ],
  },
  {
    id: "carol-njoki",
    name: "Carol Njoki",
    role: "Coach & Consultant",
    image: "/images/carol-njoki-1.png",
    challenge:
      "Carol was at the beginning of her brand-building journey. She had expertise and direction, but no clear positioning, defined audience, or packaged offers. She needed both the clarity to get started and the structure to grow.",
    whatWeDid: [
      "Brand Clarity Session — strengths, audience, and strategic direction",
      "Brand positioning and niche definition",
      "Offer packaging and lead magnet development",
      "Messaging alignment across platforms",
      "Digital foundation setup and profile optimisation",
    ],
    results: [
      "Clear, confident brand positioning in her niche",
      "Packaged, ready-to-sell offers and a structured lead magnet",
      "Aligned digital presence that supports lead generation",
      "A strategic foundation ready to build on and grow",
    ],
  },
  {
    id: "kennedy-nyambu",
    name: "Kennedy Nyambu",
    role: "Copywriter | Kenya",
    image: "/images/kennedy.jpeg",
    challenge:
      "Kennedy had the skills but struggled with applying them to his own brand. He needed sharper positioning, a more strategic LinkedIn presence, and the confidence to show up as a credible professional in his field.",
    whatWeDid: [
      "Personal brand positioning and messaging refinement",
      "LinkedIn profile optimisation — design, copy, and visibility",
      "Content strategy and engagement coaching",
      "Network expansion and visibility within the copywriting industry",
    ],
    results: [
      "Significantly improved LinkedIn profile visibility and engagement",
      "Clearer, more authoritative positioning as a copywriter",
      "Greater confidence and strategic intentionality in showing up online",
    ],
    quote: {
      text: "Wambui demonstrated a keen eye for detail, providing constructive feedback on my LinkedIn profile, posts, and overall engagement. Her expertise, personalised guidance, and genuine investment in my success have made a lasting impact on my professional journey.",
      author: "Kennedy Nyambu, Copywriter",
    },
  },
  {
    id: "ccg",
    name: "Centre for Corporate Governance (CCG)",
    role: "Corporate Governance Training & Coaching Organisation | Kenya",
    image: "/images/ccg.jpeg",
    challenge:
      "CCG had an established offline reputation but a nearly invisible online presence. With only 300 LinkedIn followers and minimal engagement, the organisation was not being seen by the senior executives and corporate clients it served.",
    whatWeDid: [
      "Brand clarity and digital strategy for the corporate governance niche",
      "LinkedIn optimisation — profile, messaging, and content direction",
      "Content creation and publishing strategy",
      "In-house team training on content marketing and platform management",
      "Thought leadership positioning for senior executive audiences",
    ],
    results: [
      "LinkedIn followers grew from 300 to 1,900",
      "Established CCG as a thought leader in corporate governance training",
      "In-house team trained and equipped to sustain the digital presence independently",
      "Positioned CCG to attract senior executives and corporate clients online",
    ],
  },
];

const testimonials = [
  {
    text: "Wambui is a standout for her exceptional skills in creating customised websites and captivating content, coupled with her strategic prowess in driving growth and monetisation. Her ability to blend technical expertise with creative genius has been a game-changer for us at EMI Influencers Inc.",
    author: "Don Mathias",
    role: "CEO of Eminent Media Inc. & Founder of EMI Influencers Inc. | Canada",
    image: "/images/Don-Mathias.jpeg"
  },
  {
    text: "Working with Wambui under her 12-week branding program was everything I needed to launch my online brand. She simply shortened my learning curve. I would recommend her to anyone looking to position themselves online. Great value for money.",
    author: "Ebi Sheila Diete-Spiff",
    role: "Self-Love & Transition Coach | UK",
    image: "/images/ebi.jpeg"
  },
  {
    text: "From 3,000 to over 20,000 followers on my personal brand, and from 300 to 2,000 active followers for CCG. Your expertise is truly exceptional, and I wholeheartedly endorse your work.",
    author: "Alex Mwangi",
    role: "CEO Cent Worrier | CCG | Kenya",
    image: "/images/alex-mwangi.png"
  },
];

/* ──────────────────────────── Component ──────────────────────────── */

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
      <Navigation />

      {/* ── Hero ── */}
      <ServiceHero
        eyebrow="Case Studies"
        title="Real People. Real Brands."
        titleAccent="Real Results."
        subtitle="Every professional who has worked with WABS came with a challenge — and left with a brand that commands attention, attracts the right clients, and generates income."
        description="These are not hypothetical strategies or generic advice. These are documented outcomes from real engagements — professionals, consultants, coaches, and organisations who chose to invest in strategic brand building, and the measurable results that followed."
        ctaText="Write Your Success Story"
        ctaHref="#booking"
        heroImage="/images/head-image.png"
      />

      {/* ── Impact Numbers ── */}
      <ImpactNumbersSection />

      {/* ── Case Studies Grid ── */}
      <CaseStudiesSection />

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── Page CTA ── */}
      <ServiceCTA
        headline="Ready to Write Your Own"
        headlineAccent="Success Story?"
        description="Every case study above began with a single decision — to stop being invisible online and start building a brand that works. Whether you are starting from scratch or restructuring an existing presence, the path forward begins with clarity."
        closingLine="Because clarity is the foundation of every strong brand."
      />

      <Footer />
    </main>
  );
}

/* ──────────────────── Section Components ──────────────────── */

function ImpactNumbersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-16 md:py-20 bg-[#F5F5F5] border-b border-[#E8E8E8]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
          }`}
        >
          {impactNumbers.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#D91A6B] mb-2 leading-none">
                {stat.value}
              </h3>
              <p className="font-stat text-[#111111]/70 text-xs font-semibold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              Client Success Stories
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            Documented Brand<br />
            <span className="text-[#D91A6B] italic">Engagements.</span>
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              className={`transition-[opacity,transform] duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Header */}
              <div className="mb-8 pb-6 border-b border-[#E8E8E8] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center">
                <div className="lg:col-span-8">
                  <span className="font-stat text-[#D91A6B] text-xs font-bold uppercase tracking-widest mb-2 block">
                    Case Study {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display text-[#111111] text-2xl md:text-3xl lg:text-4xl font-semibold mb-3"
                    style={{ fontVariationSettings: '"WONK" 0.3' }}
                  >
                    {study.name}
                  </h3>
                  <p className="font-body text-[#111111]/55 text-sm md:text-base italic font-medium">
                    {study.role}
                  </p>
                </div>
                {study.image && (
                  <div className="lg:col-span-4 relative aspect-[4/3] lg:aspect-square rounded-sm overflow-hidden group shadow-md border border-[#E8E8E8] bg-[#F5F5F5]">
                    <Image 
                      src={study.image} 
                      alt={study.name}
                      fill
                      className="object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-[#D91A6B]/5 group-hover:bg-transparent transition-colors duration-1000 ease-out z-10 pointer-events-none" />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16">
                {/* Left Column: Context & Execution */}
                <div className="lg:col-span-7 space-y-8 md:space-y-10">
                  {/* The Challenge */}
                  <div>
                    <h4 className="font-stat text-[#111111] text-xs md:text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/30 shrink-0" />
                      The Challenge
                    </h4>
                    <p className="font-body text-[#111111]/75 text-sm md:text-base leading-relaxed bg-[#F5F5F5] p-4 md:p-6 rounded-sm border-l-4 border-[#111111]/10">
                      {study.challenge}
                    </p>
                  </div>

                  {/* What We Did */}
                  <div>
                    <h4 className="font-stat text-[#111111] text-xs md:text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D91A6B] shrink-0" />
                      What We Did
                    </h4>
                    <ul className="space-y-2 md:space-y-3 pl-4">
                      {study.whatWeDid.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-[#111111]/80 text-sm md:text-[15px] leading-relaxed relative"
                        >
                          <span className="absolute left-[-1rem] top-2 w-1.5 h-1.5 rounded-full bg-[#D91A6B]/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Results & Quote */}
                <div className="lg:col-span-5 space-y-8 md:space-y-10">
                  {/* The Results */}
                  <div className="bg-[#111111] text-[#FFFFFF] rounded-sm p-6 md:p-8 shadow-xl relative overflow-hidden">
                     {/* Decorative noise */}
                    <div
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                      }}
                    />
                    
                    <h4 className="font-stat text-[#D91A6B] text-xs md:text-sm font-bold uppercase tracking-wider mb-4 md:mb-6 flex items-center gap-3">
                      The Results
                      <ArrowUpRight size={16} className="shrink-0" />
                    </h4>
                    <ul className="space-y-3 md:space-y-4 relative z-10">
                      {study.results.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-body text-[#FFFFFF]/85 text-xs md:text-sm leading-relaxed"
                        >
                          <svg className="w-4 md:w-5 h-4 md:h-5 text-[#D91A6B] shrink-0 fill-current mt-0.5" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  {study.quote && (
                    <blockquote className="border-l-4 border-[#D91A6B] pl-4 md:pl-6 py-2">
                      <p className="font-body text-[#111111]/80 text-base md:text-lg italic leading-relaxed font-medium mb-3 md:mb-4">
                        &ldquo;{study.quote.text}&rdquo;
                      </p>
                      <footer className="font-stat text-[#111111]/50 text-xs font-semibold uppercase tracking-wider flex flex-col gap-1">
                        — {study.quote.author.split('|')[0].trim()}
                        {study.quote.author.split('|').length > 1 && (
                          <span className="text-[#D91A6B] normal-case tracking-normal text-[10px]">| {study.quote.author.split('|').slice(1).join('|').trim()}</span>
                        )}
                      </footer>
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5] relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        <div
          className={`mb-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D91A6B]" />
            <span className="font-stat text-[#D91A6B] text-sm uppercase tracking-widest font-medium">
              In Their Own Words
            </span>
          </div>
          <h2
            className="font-display text-[#111111] leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontVariationSettings: '"WONK" 0.5',
            }}
          >
            What They Say <span className="text-[#D91A6B] italic">About Us.</span>
          </h2>
          <p className="font-body text-[#111111]/55 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            These are the unprompted words of professionals who have worked with WABS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className={`bg-[#FFFFFF] p-6 md:p-8 rounded-sm shadow-sm border border-[#E8E8E8] transition-[opacity,transform] duration-700 ease-out flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div>
                <svg
                  className="w-8 md:w-10 h-8 md:h-10 text-[#D91A6B]/20 mb-4 md:mb-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="font-body text-[#111111]/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-medium">
                  {test.text}
                </p>
              </div>
              <div className="border-t border-[#E8E8E8] pt-4 md:pt-6 flex items-center gap-3 md:gap-4">
                {/* Author Avatar */}
                {test.image ? (
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-full relative overflow-hidden border-2 border-[#D91A6B]/20 bg-[#F5F5F5] shrink-0">
                    <Image
                      src={test.image}
                      alt={test.author}
                      fill
                      className="object-cover object-top"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-[#111111]/5 shrink-0 flex items-center justify-center font-display font-semibold text-[#111111]/40 text-lg">
                    {test.author.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-stat text-[#111111] text-xs md:text-sm font-bold uppercase tracking-wider leading-tight mb-1 truncate">
                    {test.author}
                  </p>
                  <p className="font-body text-[#D91A6B]/80 text-xs font-semibold leading-relaxed line-clamp-2">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
