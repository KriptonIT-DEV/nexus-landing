# PRODUCT.md — Konnect 360

## Register

**brand** — this is the marketing landing for Konnect 360. Design IS the product on this surface.

## Product Purpose

Konnect 360 is an omnichannel CRM platform that unifies customer communication across WhatsApp, Instagram, Messenger, and a Web Widget into a single inbox. It layers an AI chatbot for 24/7 automated attention, real-time ticket prioritization, agent productivity analytics, and open REST APIs / webhooks for integration with the rest of the customer's stack.

It exists to remove the friction of jumping between apps to answer customers, and to make small/mid-sized service teams operate like a fully staffed contact center.

## Users

- **Primary**: Owners and managers of small/mid-sized service businesses in Latin America (LATAM, Spanish-speaking) — retail, healthcare, education, professional services. Often non-technical, evaluating CRM for the first time.
- **Secondary**: Operations leads and customer-service supervisors in larger orgs comparing Konnect against incumbents (Hubspot, Zendesk, Bitrix). They benchmark on integrations, AI capability, and reporting depth.
- **Tertiary**: Solo entrepreneurs / consultants who currently juggle WhatsApp Web + Instagram DMs manually and need a unified inbox without enterprise pricing.

## Brand

- **Name**: Konnect 360
- **Origin**: Lima, Perú (Av. Mayor Andres Razuri N° 172, San Miguel)
- **Voice**: Confident, plain-spoken Spanish. Treats the customer as a peer, not a prospect. Specific over vague ("4 canales integrados" beats "todas las redes"). Avoids enterprise jargon and AI-hype clichés.
- **Tone**: Professional but warm. Pragmatic. Slightly editorial — closer to a magazine feature than a typical SaaS landing.
- **Differentiation**: Not an enterprise platform pretending to be friendly. A focused omnichannel inbox + AI layer built for the LATAM SMB reality (price-sensitive, WhatsApp-first, fewer agents per team).

## Strategic Principles

1. **Specificity over vagueness.** "4 canales · 24/7 · 100% cloud · APIs REST" beats "everything you need." Numbers anchor trust.
2. **Show the inbox, not the marketing pitch.** Product imagery should feel like the actual app, not stock illustrations.
3. **Spanish-first, LATAM-aware.** Address conventions, currency formats, business hours, and copy idioms reflect Lima and the wider LATAM market — never feel translated from English.
4. **WhatsApp as the gravitational center.** Every channel matters, but WhatsApp is the customer's reality. Lead with it visually.
5. **Bento for density without chaos.** The home page packs hero, social proof, services, mission, and CTAs into a bento grid — avoiding the endless-scroll SaaS template.

## Anti-references

Do NOT design like:
- **Generic SaaS landings** with hero / 3-feature row / logo wall / pricing / testimonial carousel / footer. Forgettable, formulaic.
- **Hubspot / Salesforce / Zoho** — enterprise-flavored, navy + cyan, dense legal text, busy navigation with mega-menus.
- **AI-startup landings** (early 2025 wave) — purple-to-pink gradients on white, glassmorphism cards, "AI-powered" plastered everywhere, hero metrics with gradient text.
- **Crypto / Web3** aesthetics — neon accents, dark-by-default-because-cool, jagged geometric shapes.
- **Healthcare-clean** white + teal + rounded blobs — too sterile for a CRM.
- **Telco apps** — orange/red/blue color blocks, 90s-call-center vibe.

## Visual Direction

- **Color strategy**: Committed — one saturated purple carries 30–60% of brand-heavy surfaces (hero, CTAs, accent details). Neutrals tinted toward the brand hue (no pure black/white). Restrained on dense surfaces (legal pages, forms) to avoid noise.
- **Theme**: Light by default. Dark mode as a real first-class theme (not a token swap afterthought) — the darks are tinted toward purple, not gray.
- **Typography**: Editorial display + clean humanist body. Distinctive without being trend-chasing.
- **Layout**: Bento grids (asymmetric, varied tile sizes) for the home; editorial composition (varied padding, generous whitespace, type-led hierarchy) on about and content pages.
- **Motion**: Restrained. Page-load reveal (staggered, exponential ease-out). Hover affordances on bento tiles. No bounce, no decorative parallax.

## Constraints

- Ships as a static Astro site (SSG), then enhanced with React islands where interactivity is required.
- All copy is Spanish. Filenames are English (developer-facing).
- Theme color must be swappable via a single CSS variable — purple today, but the brand may evolve.
- All colors come from semantic shadcn tokens (`--primary`, `--accent`, `--muted-foreground`, etc.). NEVER hardcode `bg-purple-600` or raw oklch values in components.

## Anti-patterns to refuse

- Side-stripe borders ≥1px on cards
- Gradient text on headings
- Glassmorphism as default styling
- Hero-metric template (big number + small label + gradient)
- Identical card grids (icon + title + description, repeated)
- Modal as first-thought interaction
- Em dashes in UX copy
