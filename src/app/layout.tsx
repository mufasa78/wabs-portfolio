import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.wabsdigital.com";
const OG_IMAGE = `${SITE_URL}/images/og-cover.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Core ── */
  title: {
    default: "WABS Digital — Africa's Premier Personal Branding Agency",
    template: "%s | WABS Digital",
  },
  description:
    "WABS Digital builds premium personal brands for African executives, coaches, consultants, and founders in Kenya, Nigeria, Ghana, and across the diaspora. Go from invisible to positioned — fast.",
  keywords: [
    "personal branding Africa",
    "personal branding Kenya",
    "personal branding Nairobi",
    "executive branding Kenya",
    "executive branding Africa",
    "personal brand coach Nairobi",
    "brand strategy Africa",
    "LinkedIn personal branding Africa",
    "thought leadership Africa",
    "personal branding for coaches Kenya",
    "founder branding Africa",
    "WABS Digital",
    "Wambui personal brand",
    "premium branding agency Africa",
    "social media branding Kenya",
  ],
  authors: [{ name: "WABS Digital", url: SITE_URL }],
  creator: "WABS Digital",
  publisher: "WABS Digital",

  /* ── Canonical & robots ── */
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "WABS Digital",
    title: "WABS Digital — Africa's Premier Personal Branding Agency",
    description:
      "Build a premium personal brand that positions you as the authority in your market. Serving executives, coaches, consultants, and founders across Africa and the diaspora.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "WABS Digital — Personal Branding for African Leaders",
      },
    ],
    locale: "en_KE",
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    site: "@wabsdigital",
    creator: "@wabsdigital",
    title: "WABS Digital — Africa's Premier Personal Branding Agency",
    description:
      "Go from invisible to positioned. Premium personal branding for African executives, coaches, and founders.",
    images: [OG_IMAGE],
  },

  /* ── Icons ── */
  icons: {
    icon: "/images/wabs-favicon.png",
    shortcut: "/images/wabs-favicon.png",
    apple: "/images/wabs-favicon.png",
  },

  /* ── Verification placeholders (fill in once claimed) ── */
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "WABS Digital",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/wabs-favicon.png`,
      },
      sameAs: [
        "https://www.linkedin.com/company/wabsdigital",
        "https://www.instagram.com/wabsdigital",
        "https://twitter.com/wabsdigital",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: ["Africa", "Kenya", "Nigeria", "Ghana", "United Kingdom", "United States"],
      description:
        "Premium personal branding agency for African executives, coaches, consultants, and founders.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "WABS Digital",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "WABS Digital — Personal Branding Agency",
      url: SITE_URL,
      image: OG_IMAGE,
      priceRange: "$$",
      currenciesAccepted: "USD, KES",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.286389,
        longitude: 36.817223,
      },
      serviceType: [
        "Personal Branding",
        "Executive Branding",
        "Social Media Strategy",
        "Content Strategy",
        "Brand Coaching",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Geographic meta tags */}
        <meta name="geo.region" content="KE-30" />
        <meta name="geo.placename" content="Nairobi, Kenya" />
        <meta name="geo.position" content="-1.286389;36.817223" />
        <meta name="ICBM" content="-1.286389, 36.817223" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,WONK@9..144,100..900,0..1&family=Instrument+Sans:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data — must be a plain <script> tag, NOT next/script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
