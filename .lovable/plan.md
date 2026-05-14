# Siddharya Retreats & Wellness — Homepage Build Plan

A premium, light-theme marketing site for a Rishikesh yoga & wellness retreat, inspired by kailashyogaashram.com but elevated to a luxury SaaS-quality experience. Brand colors come from the uploaded logo: deep forest green, warm gold, soft cream/ivory, with sage/sand/river-blue accents.

## Brand & Design System

**Colors (oklch in `src/styles.css`)**
- Primary (forest green): `#1f3d2f` — headings, primary buttons
- Accent (warm gold): `#b8924a` — dividers, underlines, icon strokes, hover states
- Background (cream/ivory): `#faf6ee`
- Surface (paper): `#ffffff`
- Sage: `#9aa896` — secondary chips, tags
- Sand: `#e6d6bc` — soft section backgrounds
- River blue: `#7a9aa5` — testimonial/quote accents
- Foreground: `#1a2a22`, muted: `#5a6b60`

**Typography**
- Headings: Cormorant Garamond (refined serif, matches logo wordmark)
- Body / UI: Inter (clean modern sans)
- Loaded via Google Fonts in `__root.tsx` head links

**Visual language**
- Generous whitespace, large section padding (py-24 to py-32 desktop)
- Soft rounded cards (rounded-2xl), subtle shadows, organic blob dividers
- Gold hairline dividers, lotus/Om motifs used sparingly
- Subtle Himalayan gradient washes between sections
- Micro-interactions: hover lift on cards, slow image zoom, fade-in on scroll

## Route Structure

Single-page focus on the homepage as requested, but using TanStack Start route conventions:

```
src/routes/
  __root.tsx        → fonts, sitewide meta, JSON-LD Organization
  index.tsx         → Homepage (composes all sections below)
```

(Per-section files would be over-engineered for this request — sections live as components imported into `index.tsx`.)

## Component Breakdown

```
src/components/site/
  Header.tsx              → transparent-on-hero nav, logo, anchor links, "Book Retreat" CTA
  Hero.tsx                → cinematic full-bleed image, serif headline, dual CTA
  AboutRishikesh.tsx      → 2-col storytelling with river/temple image, pull quote
  ProgramCards.tsx        → 4 cards: Yoga, Meditation, Wellness, Teacher Training
  WhyChooseUs.tsx         → 6 icon highlights in a refined grid
  DailyTimeline.tsx       → vertical timeline of a retreat day (5am–9pm)
  Testimonials.tsx        → carousel of international guest quotes w/ country flag
  Gallery.tsx             → immersive masonry of uploaded retreat photos
  Accommodation.tsx       → split layout: rooms + sattvic food showcase
  FAQ.tsx                 → accordion (shadcn) with 6–8 common questions
  BookingCTA.tsx          → full-width sage/gold band with strong CTA
  Footer.tsx              → contact, social, newsletter input, retreat links
  SectionDivider.tsx      → reusable organic SVG divider
```

## Image Strategy

Uploaded photos copied into `src/assets/` and imported as ES modules:
- `logo.png` (image-6) → header + footer
- `room-1.jpg` (image-1), `room-2.jpg` (image-7) → Accommodation
- `yoga-river.jpg` (image-2), `yoga-tree.jpg` (image-5) → Hero + Programs
- `yoga-hall.jpg` (image-3) → Programs/Teacher Training
- `rishikesh-river.jpg` (image-4) → About Rishikesh
- `meditation-ganga.jpg` (image-8) → Meditation program + Hero alt

Gallery uses all 7 photos in a masonry layout.

## SEO & Meta

- `__root.tsx`: viewport, charset, Google Fonts links, default OG type=website, JSON-LD Organization (name: Siddharya Retreats & Wellness, location: Tapovan, Rishikesh)
- `index.tsx` `head()`: title "Siddharya Retreats & Wellness — Yoga in Rishikesh", description, og:title/description, og:image (hero photo), canonical "/"
- Single H1 in Hero, semantic section/h2 hierarchy, alt text on every image

## Technical Notes

- TanStack Start with file-based routing; no React Router
- Tailwind v4 via `src/styles.css` `@theme inline` — register all brand tokens as CSS vars then map to `--color-*`
- Use shadcn `Button`, `Accordion`, `Carousel`, `Card` already in project
- Lucide icons only where iconography needed (Lotus, Mountain, Sunrise, Heart, etc. — substitute close matches)
- Mobile-responsive: stack columns under `md`, reduce section padding, hamburger nav (Sheet)
- All colors via semantic tokens — no hardcoded hex in components

## Out of Scope (this turn)

- Booking backend / Lovable Cloud — CTA buttons are visual only, link to `#book` anchor
- Newsletter submission — input is presentational
- Separate /about, /programs, /contact route files — homepage-only request

