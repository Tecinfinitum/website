# Siya — Software, Strategy, and AI—Built for Business

A production-ready enterprise marketing site built with **Next.js 14 (App Router)** + **Tailwind CSS**.

Live: https://aevra-alpha.vercel.app (Vercel project/URL slug predates the Siya rename — see Custom domain below to point a `siya.*` domain at it)

## Pages

- `/` — Home
- `/services` — Consulting, custom development, integration & modernization, AI services
- `/ai-solutions` — AI agents, copilots, chatbots, decision-support, financial AI, responsible AI
- `/industries` — Finance, healthcare, retail, manufacturing, logistics, professional services, startups
- `/case-studies` — Client challenge / solution / technologies / results
- `/about` — Story, mission, values, leadership
- `/insights` — Articles / thought leadership
- `/contact` — Consultation form
- `/privacy` — Privacy policy

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

This project is already linked to a Vercel project (`.vercel/project.json`). To ship a new production deploy:

```bash
npx vercel --prod
```

Or connect the repo in the Vercel dashboard for deploys on every push (see **Option A** below).

### Option A — Git + Vercel dashboard (auto-deploy on push)

```bash
git init
git add .
git commit -m "Siya site"
git branch -M main
git remote add origin https://github.com/<you>/siya.git
git push -u origin main
```

Then import the repo at https://vercel.com/new — Vercel auto-detects Next.js.

### Custom domain

In the Vercel project → **Settings → Domains**, add `siya.ai` (or your domain) and follow the DNS instructions.

## Wire up the contact form

The form posts to `app/api/contact/route.js`, which currently just logs submissions. To actually receive leads, plug in one provider inside that file:

- **Resend** (email): `npm i resend`, then send an email in the route handler using `RESEND_API_KEY` (add it in Vercel → Settings → Environment Variables).
- **Slack**: POST the payload to an incoming webhook URL.
- **Database/CRM**: insert the record (e.g. Supabase, Airtable, HubSpot).

## Customize

- **Brand name / copy / content**: everything (nav, services, industries, case studies, testimonials, FAQ, tech stack, trust pillars) lives in `lib/data.js` — edit there first.
- **Colors**: `tailwind.config.js` → `theme.extend.colors` (`navy`, `brand`, `electric`).
- **Logo**: the abstract node mark lives in `components/Logo.js` (and mirrored in `app/icon.svg` for the favicon) — swap for an `<img>` or different SVG as needed.
- **SEO / metadata**: `app/layout.js` for site-wide defaults, each `app/**/page.js` exports its own `metadata`.
- **Sitemap / robots**: `app/sitemap.js`, `app/robots.js`.

## Structure

```
app/
  layout.js              Root layout: Nav, Footer, skip link, site-wide metadata
  page.js                Home
  services/page.js
  ai-solutions/page.js
  industries/page.js
  case-studies/page.js
  about/page.js
  insights/page.js
  contact/page.js
  privacy/page.js
  sitemap.js / robots.js
  globals.css
  api/contact/route.js   Contact/consultation form endpoint
components/
  Nav.js, Footer.js
  ui/                    Container, Button, SectionHeading, PageHero
  sections/               Hero, TrustedBy, ServicesOverview, IndustriesPreview,
                          ProcessSteps, CaseStudiesPreview/Card, TrustPillars,
                          TechStack, Testimonials, FAQ, CTABanner, ConsultationForm,
                          ContactSection, ServiceCard, IndustryCard
lib/data.js               All site content (services, industries, case studies,
                          testimonials, FAQ, process, tech stack, nav)
```

## Accessibility & performance notes

- Skip-to-content link, semantic landmarks, `aria-expanded`/`aria-controls` on the mobile nav and FAQ accordion.
- Reduced-motion support via `prefers-reduced-motion` in `globals.css`.
- Visible `:focus-visible` outlines throughout.
- Per-page SEO metadata, `sitemap.xml`, and `robots.txt` via the App Router.
