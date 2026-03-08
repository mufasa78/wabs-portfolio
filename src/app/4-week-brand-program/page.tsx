import type { Metadata } from "next";
import FourWeekBrandProgramPage from "@/components/wabs/services/FourWeekBrandProgramPage";

export const metadata: Metadata = {
  title: "4-Week Strategic Brand Launch & Growth Program",
  description:
    "A focused, done-with-you engagement for senior professionals, consultants, coaches, and founders ready to transform their expertise into a credible, visible, and opportunity-generating brand.",
  openGraph: {
    title: "4-Week Strategic Brand Launch & Growth Program | WABS Digital",
    description:
      "Stop guessing. Start building a brand that works. Transform your expertise into authority in 4 structured weeks.",
  },
};

const SITE_URL = "https://www.wabsdigital.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "4-Week Strategic Brand Launch & Growth Program",
      "description": "A focused, done-with-you engagement designed for senior professionals, consultants, coaches, and founders to transform their expertise into a credible brand.",
      "provider": {
        "@type": "Organization",
        "name": "WABS Digital",
        "url": SITE_URL
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "4-Week Program Phases",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Phase 1: Brand Clarity & Positioning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Phase 2: Offer Packaging & Pricing"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the 4-week brand program for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The program is designed for senior professionals, consultants, coaches, and founders ready to build a premium personal brand."
          }
        },
        {
          "@type": "Question",
          "name": "What are the outcomes of the 4-week program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Outcomes include a clear brand position, packaged offer, optimized digital profiles, and a content strategy."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FourWeekBrandProgramPage />
    </>
  );
}
