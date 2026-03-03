# WABS Digital — Portfolio Website

Premium single-page portfolio for **Wambui Kuria**, Founder of WABS Digital — a personal branding and content strategy agency for African professionals and entrepreneurs worldwide.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| UI Components | Radix UI primitives |
| Icons | Lucide React |
| Fonts | Fraunces (display) · Instrument Sans (body) via `@fontsource` |
| Image optimisation | Next.js `<Image>` — AVIF/WebP auto-conversion |
| Animations | CSS `transition-[opacity,transform]` + Intersection Observer |
| Package manager | npm |

---

## Quick Start

```bash
# Install dependencies
npm install

# Run the development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Serve the production build locally
npm start
```

---

## Project Structure

```text
wabs-portfolio/
├── public/
│   └── images/               # All static images (logos, portraits, packages)
├── src/
│   ├── app/
│   │   ├── globals.css       # Base styles, smooth scroll, custom utilities
│   │   ├── layout.tsx        # Root layout — metadata, SEO/GEO, JSON-LD, fonts
│   │   └── page.tsx          # Main page — mounts all 15 sections in order
│   ├── components/
│   │   └── wabs/
│   │       ├── Navigation.tsx          # Fixed top nav with mobile drawer
│   │       ├── HeroSection.tsx         # LCP hero — portrait, headline, CTA
│   │       ├── AudienceSegmentation.tsx# "Who this is for" cards
│   │       ├── AuthorityProofBar.tsx   # Stats bar (years, clients, countries)
│   │       ├── AboutSection.tsx        # Founder bio with portrait
│   │       ├── AsSeenOn.tsx            # Press/media logo strip
│   │       ├── ServicesPillars.tsx     # Core services bento grid
│   │       ├── BrandsCarousel.tsx      # Infinite auto-scroll client logo marquee
│   │       ├── ProgramsSnapshot.tsx    # Packages & pricing cards
│   │       ├── TestimonialsCarousel.tsx# Client testimonials
│   │       ├── CaseStudyPreview.tsx    # Before/after case study
│   │       ├── LeadMagnetBlock.tsx     # Free Clarity Blueprint opt-in
│   │       ├── FinalCTA.tsx            # Bottom conversion CTA
│   │       ├── Footer.tsx              # Links, social icons, newsletter
│   │       └── MobileFloatingCTA.tsx   # Sticky mobile booking button
│   └── hooks/
│       └── useScrollAnimation.ts       # Intersection Observer hook (threshold 0.08)
├── next.config.js            # Image optimisation — AVIF/WebP, 1-year cache TTL
├── tailwind.config.ts        # Custom theme, brand colors, marquee animation
└── tsconfig.json
```

---

## Brand Guidelines

| Token | Value |
| --- | --- |
| Background | `#F5EFE0` (warm cream) |
| Accent | `#C4622D` (burnt sienna) |
| Text | `#1C1208` (deep espresso) |
| Display font | Fraunces |
| Body font | Instrument Sans |

---

## SEO / GEO

- **Primary market:** Nairobi, Kenya (`geo.region: KE-30`)
- **Secondary markets:** Africa-wide + diaspora (UK, US, Canada)
- Geo meta tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`)
- JSON-LD structured data: `Organization`, `WebSite` (with `SearchAction`), `ProfessionalService`
- Open Graph + Twitter/X card metadata

> **Action required:** Replace `REPLACE_WITH_GOOGLE_SITE_VERIFICATION` in `src/app/layout.tsx` with your actual Google Search Console token once the site is verified.

---

## Social Links

| Platform | URL |
| --- | --- |
| Facebook | https://www.facebook.com/profile.php?id=61553301187748 |
| LinkedIn | https://www.linkedin.com/in/wambui-kuria-contentandbrandingstrategist/ |
| Instagram | https://www.instagram.com/wambuibrandingstrategist/ |

---

## Image Optimisation Notes

- All `<Image>` components include a `sizes` prop to prevent oversized image delivery on mobile
- Next.js auto-converts images to **AVIF** (first) then **WebP** based on browser support
- Images are cached for **1 year** (`minimumCacheTTL: 31536000`) on CDN/ISR
- Hero portrait uses `priority` for immediate LCP loading — no lazy-load delay

---

## Deployment

The project is ready to deploy on **Vercel** (recommended):

```bash
# Push to GitHub, then connect the repo in Vercel dashboard
# All environment variables (if any) go in Vercel → Settings → Environment Variables
```

For other hosts, run `npm run build` and serve the `.next` output with `npm start` (Node.js 18+ required).
