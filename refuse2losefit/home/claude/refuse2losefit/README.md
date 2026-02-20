# Refuse2LoseFIT — Elite Transformation Coaching Website

A premium, luxury-grade Next.js 14 website for the Refuse2LoseFIT personal training brand.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: CSS keyframe animations + IntersectionObserver scroll reveals
- **Fonts**: Barlow Condensed (display) + DM Sans (body) + Space Mono (mono)
- **Deployment**: Vercel-ready

## Project Structure

```
refuse2losefit/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── globals.css             # Design system + Tailwind
│   ├── page.tsx                # Home page
│   ├── who-we-are/page.tsx     # Brand story, mission, philosophy
│   ├── programs/page.tsx       # 3-tier program breakdown
│   ├── results/page.tsx        # Testimonials, before/after, case studies
│   ├── faq/page.tsx            # FAQ accordion
│   ├── contact/page.tsx        # Contact form
│   ├── apply/page.tsx          # 3-step application form (MAIN CONVERSION PAGE)
│   ├── legal/page.tsx          # Privacy policy + terms
│   └── api/
│       ├── apply/route.ts      # Application submission handler
│       └── contact/route.ts    # Contact form handler
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu
│   │   └── Footer.tsx          # Full sitemap footer
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero
│   │   ├── MarqueeBand.tsx     # Scrolling proof band
│   │   ├── StatsSection.tsx    # Animated counter stats
│   │   ├── ProgramsPreview.tsx # 3-tier program cards
│   │   ├── HowItWorks.tsx      # 4-step process timeline
│   │   ├── TestimonialsPreview.tsx
│   │   ├── AboutPreview.tsx    # Coach section
│   │   ├── FinalCTA.tsx        # Hard-hitting CTA close
│   │   └── PageHero.tsx        # Reusable inner page header
│   └── ui/
│       ├── index.tsx           # Button, SectionLabel, GlowCard, etc.
│       ├── AnimatedSection.tsx # Scroll-reveal animation wrapper
│       └── Counter.tsx         # Animated number counter
└── lib/utils.ts
```

## Getting Started

```bash
cd refuse2losefit
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import at vercel.com — auto-detects Next.js.

## Environment Variables (Production)

```env
RESEND_API_KEY=re_...           # Email notifications
NOTIFICATION_EMAIL=coach@refuse2losefit.com
FORM_WEBHOOK_URL=https://...    # CRM webhook (optional)
NEXT_PUBLIC_GA_ID=G-...         # Analytics (optional)
```

## Integrations to Wire Up

1. **Email**: Resend (resend.com) — replace console.log in API routes
2. **Database**: Supabase — store applications
3. **Payments**: Stripe — for GRIND subscription checkout
4. **Analytics**: @vercel/analytics — add to root layout
5. **Real Photos**: Replace placeholder grids with next/image

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Who We Are | `/who-we-are` |
| Programs | `/programs` |
| Results | `/results` |
| FAQ | `/faq` |
| Contact | `/contact` |
| Apply | `/apply` |
| Legal | `/legal` |

Built to convert. Built to impress. Built to Refuse2Lose.
