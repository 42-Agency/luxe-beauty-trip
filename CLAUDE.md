# Luxe Beauty Trip

## Current State (as of 2026-04-18)

- **Repo:** github.com/42-Agency/luxe-beauty-trip
- **Production:** https://www.luxebeautytrip.com (auto-deploys from `main` via Vercel)
- **Pricing is intentionally hidden across the UI** — actual prices haven't been finalized yet. The placeholder `$` amounts still live in `lib/data/treatments.ts` and `lib/data/packages.ts` but are not rendered anywhere. When real prices are ready, add the fields back into the JSX (home cards, treatment list/detail, packages page, contact budget selector) rather than re-inventing copy.
- **Contact form** has no budget selector (removed with pricing). Re-add it from `app/contact/page.tsx` git history if needed.

---

## Business Context

**What it is:** Lead generation for Korean skincare/dermatology clinics, wrapped in a luxury travel experience.

**Founders:** Wife + friend (travel agent). Complementary skills — beauty/skincare passion + travel operations.

**Target customer:** Affluent North American women (35-55) interested in premium Korean skincare treatments.

**Revenue model:**
- Package pricing ($5K-$25K+) for concierge travel + treatment coordination
- Rev-share with Korean partner clinics

**Acquisition channels:**
- Meta ads (primary) — targeting K-beauty interests, luxury travel, skincare enthusiasts
- Google ads — capturing adjacent intent keywords
- Press/PR — Condé Nast Traveler, Goop, beauty publications
- Tradeshows — luxury travel expos, beauty conventions
- Social — Instagram (before/afters, Seoul aesthetics), influencer partnerships

---

## Design System

### Aesthetic: "Editorial Luxury Travel"
Not clinical medspa. Think: Condé Nast Traveler meets Goop meets Korean skincare ritual.

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `blank` | #FFFFFF | Primary background |
| `silk-rose` | #f9ebec | Secondary background, cards |
| `cotton` | #ffcad4 | Soft accents, hover states |
| `solaris` | #ff8979 | CTAs, highlights |
| `trufflet` | #927057 | Text accents |
| `gold` | #D4AF37 | Signature accent, premium elements |
| `midnight` | #072331 | Primary text, dark sections |

### Typography
- **Headings:** Cormorant Garamond (elegant serif)
- **Body:** DM Sans (clean, modern)

### Key Design Elements
- Gold as living signature (not just accent)
- Generous whitespace
- Soft warmth from pink/coral palette
- Travel/destination imagery (not sterile treatment rooms)
- Subtle hover interactions with gold glow

---

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS with custom theme
- TypeScript
- Deployed on Vercel (assumed)

---

## File Structure

```
app/
├── page.tsx                    # Home
├── about/page.tsx              # About/Story
├── how-it-works/page.tsx       # Process
├── contact/page.tsx            # Booking form
├── treatments/
│   └── [slug]/page.tsx         # PSEO: Treatment pages
├── concerns/
│   └── [slug]/page.tsx         # PSEO: Skin concern pages
└── from/
    └── [city]/page.tsx         # PSEO: City-specific landing pages

components/
├── ui/                         # Base components (Button, Card, Typography, Input)
├── layout/                     # Header, Footer, Section, Container, Split
└── blocks/                     # Hero variants, TreatmentGrid, TestimonialCarousel

lib/
├── utils.ts                    # cn() helper
└── data/                       # PSEO content data
    ├── treatments.ts
    ├── concerns.ts
    └── cities.ts
```

---

## PSEO Strategy

### Page Types

1. **Treatment Pages** (`/treatments/[slug]`)
   - Korean Glass Skin Facial
   - Rejuvenation Therapy (PDRN, skin boosters)
   - Laser Toning
   - Anti-Aging Treatments
   - Hydrafacial Korean Style
   - V-Line / Facial Contouring

2. **Concern Pages** (`/concerns/[slug]`)
   - Acne Scars
   - Hyperpigmentation / Dark Spots
   - Fine Lines & Wrinkles
   - Dull Skin / Uneven Texture
   - Large Pores
   - Sagging / Loss of Firmness

3. **City Landing Pages** (`/from/[city]`)
   - Los Angeles, New York, San Francisco, Seattle, Vancouver, Toronto, Chicago, Miami, Dallas, Boston
   - Flight time from city, direct routes to Seoul
   - Local testimonials if available

### SEO Targets

**Treatment pages capture:**
- "Korean glass skin treatment"
- "Korean skin boosters"
- "PDRN treatment Seoul"
- "Best Korean facial treatments"

**Concern pages capture:**
- "Korean treatment for acne scars"
- "Korean skincare for hyperpigmentation"
- "Best Korean clinic for anti-aging"

**City pages capture:**
- "Korean beauty trip from Los Angeles"
- "Seoul skincare trip from NYC"
- "Korean dermatology from [city]"

---

## Component Usage

### Heroes
- `HeroSplit` — Home page, treatment pages
- `HeroFull` — City landing pages (with city/Seoul imagery)
- `HeroMinimal` — About, How It Works, Contact, Concern pages

### Sections
- `bg="blank"` — Primary content
- `bg="silk-rose"` — Feature highlights, testimonials
- `bg="midnight"` — CTAs, footer-adjacent sections

### CTAs
- Primary action: `Button variant="gold"`
- Secondary: `Button variant="secondary"`
- Text links: `Button variant="ghost"`

---

## Content Guidelines

- Avoid clinical/medical language where possible
- Emphasize transformation, journey, experience
- Use "practitioners" not "doctors" in marketing copy
- Korean terms add authenticity (glass skin, chok-chok, mul-gwang)
- Always include social proof (stats, testimonials)
- Every page should have clear CTA to /contact
