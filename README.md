# Reech Solar Modular Next.js - Home Version 1

This project is a modular Next.js App Router rebuild of the uploaded Sunex template Home Version 1 style.

## What is included

- Only one Home page: `/`
- No Home Version 2 or Home Version 3 pages/dropdowns
- Modular layout files
- Modular Home Version 1 sections
- Other menu pages from the template menu
- Reusable data files for easier maintenance
- GSAP + ScrollTrigger + SplitType animation helper
- Template images/logo copied into `public/images`

## Important note about fonts

The original template uses commercial/local font files. Font files are not included in this project package. The project uses Google-hosted `Inter` and `Space Grotesk` as a close replacement. If your template/license allows it, you can manually copy your own licensed font files into `public/fonts` and update `src/app/globals.css`.

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Key structure

```txt
src/app/
  page.tsx                         Home Version 1 only
  about-us/page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  blog/page.tsx
  blog/[slug]/page.tsx
  projects/page.tsx
  our-team/page.tsx
  pricing-plans/page.tsx
  testimonials/page.tsx
  image-gallery/page.tsx
  video-gallery/page.tsx
  faqs/page.tsx
  contact-us/page.tsx

src/components/layout/
  TopBar.tsx
  Navbar.tsx
  Footer.tsx

src/components/sections/home/
  HeroSection.tsx
  AboutSection.tsx
  ServicesSection.tsx
  WhyChooseSection.tsx
  PricingSection.tsx
  CoreFeaturesSection.tsx
  FunFactsSection.tsx
  ProcessSection.tsx
  FAQSection.tsx
  TestimonialsSection.tsx
  BlogSection.tsx
  HomePage.tsx

src/data/
  site.ts
  services.ts
  plans.ts
  blogs.ts
  home.ts
```

## Main files to edit

- Navigation, phone, email, social links: `src/data/site.ts`
- Services and service detail pages: `src/data/services.ts`
- Pricing plan content: `src/data/plans.ts`
- Blog list and details: `src/data/blogs.ts`
- FAQ, testimonials, team, projects: `src/data/home.ts`
