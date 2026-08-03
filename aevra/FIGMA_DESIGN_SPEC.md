# Siya — Figma Design Spec

Everything you need to recreate the coded site as a Figma file. Set up a desktop frame at **1440 px** wide and a mobile frame at **390 px**.

## Brand tokens

**Colors** (add as Figma color styles)
| Token | Hex | Use |
|---|---|---|
| Ink / Background | `#0A0A17` | Page background |
| Brand | `#6D5EFC` | Primary buttons, accents |
| Brand Light | `#8B7DFF` | Gradient start, hovers |
| Brand Dark | `#4C3FD6` | Pressed states |
| Cyan Glow | `#3EE6D6` | Secondary accent, highlights |
| Text Primary | `#E6E6F0` | Body text |
| Text Muted | `rgba(255,255,255,0.60)` | Secondary text |
| Border | `rgba(255,255,255,0.10)` | Card borders |

**Signature gradient:** linear 100°, `#8B7DFF → #3EE6D6` (used on headline highlight + stat numbers).

**Typography** — Inter
| Style | Size / Weight | Tracking |
|---|---|---|
| Display (H1) | 72 / Semibold | -2% |
| H2 | 48 / Semibold | -1% |
| H3 | 20 / Semibold | 0 |
| Body | 18 / Regular | 0 |
| Small / label | 14 / Medium | 0 |
| Eyebrow | 12 / Medium, uppercase, +12% tracking | |

**Effects**
- Glass card: fill `#FFFFFF @ 3%`, 1px border `#FFFFFF @ 8%`, background blur 12, corner radius 16–24.
- Glow ring (buttons): drop shadow `#6D5EFC @ 50%`, Y 20, blur 60, spread -20.
- Ambient blobs: large ellipses (brand & cyan) at 20–30% opacity, layer blur ~110.

## Layout & sections (top to bottom)

1. **Nav (sticky)** — glass pill, max-width 1200, 16px top margin. Logo (gradient `A` square + "Siya") left; links Services / Work / Clients / Contact center; white "Book a call" pill right. Mobile: hamburger.
2. **Hero** — centered, ~160px top padding. Faint 56px grid background with radial mask, two ambient glow blobs. Pill eyebrow → H1 with gradient on "intelligent software" → muted subhead → two CTAs (gradient "Start a project", glass "See our work") → 3 stats row (40+, 12, 4.9/5).
3. **Services** — left-aligned header + 2×2 grid of glass cards. Each card: title + mono number (01–04), description, pill tags. Hover: border turns brand.
4. **Case studies (Work)** — header row + 3 columns. Each: client + sector, bold outcome statement, big gradient metric. Hover: lift + accent gradient wash.
5. **Clients** — uppercase eyebrow, 4-col logo grid (2 col mobile) in a bordered panel, then a large centered testimonial quote + attribution.
6. **Contact** — glass panel, 2 columns: left copy + contact details; right form (name, company, email, message, gradient submit). Ambient brand glow behind.
7. **Footer** — thin top border, logo + tagline left, nav links center, copyright right.

## Spacing system
- Section vertical padding: 112px desktop / 64px mobile.
- Content max-width: 1200px, 24px side gutters.
- Card padding: 32px. Grid gaps: 24px.
- Corner radii: buttons/pills fully rounded; cards 16–24px.

## Recreating in Figma — quick path
1. Create the color + text styles above first.
2. Build one glass card component, then use it for Services and Case Studies (swap text).
3. Use Auto Layout everywhere (vertical stacks, 24px gaps) so it reflows.
4. Duplicate the desktop frame → resize to 390px → stack grids to single column for the mobile version.

The coded site is the source of truth — open it side by side while designing to match spacing and gradients exactly.
