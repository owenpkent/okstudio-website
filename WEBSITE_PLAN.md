# Marketing Website Plan, okstud.io

**Goal:** Studio portfolio + per-product landing pages + sticky newsletter capture, optimized for product downloads/signups as the primary conversion. Aligned with the May 26, 2026 Alpha-OSK launch and the targets in `OKStudio-Company-Info/strategy/MARKETING_PLAN.md`.

**Decisions locked (2026-05-07):**
- **Site goal:** All three layered, studio portfolio frame, per-product pages, sticky newsletter capture
- **Stack:** Astro (Markdown content collections + component reuse + great Lighthouse + Netlify-friendly)
- **Product layout:** Tiered card grid, featured tier (Alpha-OSK, MacroVox, Nimbus = launch sequence) + secondary tier (6 others)
- **Primary CTA:** Per-product downloads / signups; newsletter is the secondary CTA, Slack is tertiary

---

## 1. Architecture

```
okstudio-website/
├── astro.config.mjs
├── package.json
├── public/                    # static assets, favicons (replace drone favicon)
├── src/
│   ├── content/
│   │   └── products/          # one .md per product, frontmatter-driven
│   │       ├── alpha-osk.md
│   │       ├── macrovox.md
│   │       ├── nimbus.md
│   │       ├── octavium.md
│   │       ├── gitconnect-pro.md
│   │       ├── clipcataloger.md
│   │       ├── cinematic-blueprint.md
│   │       ├── mcp-vst.md
│   │       └── alpha-stick.md
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── ProductCard.astro       # featured-tier variant + secondary variant
│   │   ├── NewsletterInline.astro  # Buttondown form
│   │   ├── SlackCTA.astro
│   │   ├── Hero.astro
│   │   └── ProductHero.astro       # per-product hero with download CTA
│   ├── layouts/
│   │   ├── Base.astro              # nav + footer + sticky newsletter
│   │   └── Product.astro           # per-product page shell
│   ├── pages/
│   │   ├── index.astro             # studio landing
│   │   ├── products/[slug].astro   # generates 9 product pages from content/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── thanks.astro            # post-form-submit
│   └── styles/
│       └── tokens.css              # brand colors/fonts as CSS vars
└── netlify.toml                    # form handler + redirects
```

**Why Astro:** content collections turn each product page into a Markdown file with typed frontmatter (status, repo, download URL, pricing, screenshot). Adding/editing a product = editing one `.md`, no HTML duplication.

---

## 2. Page inventory

| Page | Purpose | Primary CTA | Secondary |
|------|---------|-------------|-----------|
| `/` | Studio landing, hero, what-we-build, tiered product grid, founder bio | Click into hero product | Newsletter inline |
| `/products/alpha-osk` | Launch landing page (May 26) | Download installer | Newsletter for "tell me when v1.1 ships" |
| `/products/macrovox` | Voice dictation pitch | Stripe subscribe | Newsletter |
| `/products/nimbus` | Adaptive controller | Download from GitHub releases | Donate / newsletter |
| `/products/octavium` | MIDI keyboard | Download | Donate / newsletter |
| `/products/gitconnect-pro` | Voice GitHub editing | Stripe subscribe |, |
| `/products/clipcataloger` · `/cinematic-blueprint` · `/mcp-vst` · `/alpha-stick` | Lower-tier products, lighter pages | GitHub repo | Newsletter |
| `/about` | Owen's story, mission |, | Newsletter / Slack |
| `/contact` | Form (existing Netlify pattern) | Submit |, |
| `/thanks` | Post-submit confirm | Newsletter / Slack |, |

---

## 3. Homepage layout (top → bottom)

1. **Hero**: "Tools for accessibility. Built by someone who needs them." + CTA pair: *Try Alpha-OSK* / *Browse all products*
2. **Featured tier** (3 large cards): Alpha-OSK · MacroVox · Nimbus, matches the launch sequence in `LAUNCH_AND_HYPE_PLAYBOOK.md`
3. **Secondary tier** (6 smaller cards): Octavium · GitConnect Pro · ClipCataloger · Cinematic Blueprint · mcp-vst · Alpha Stick
4. **Inline newsletter strip**: "Weekly: what shipped, what's next"
5. **About**: short version + photo + link to `/about`
6. **Footer**: Slack invite, GitHub, LinkedIn, copyright

---

## 4. Product page template (per product)

- **ProductHero**: name, one-line value prop, big download/signup CTA, screenshot/GIF
- **What it does**: 3 feature blocks
- **Who it's for**: accessibility framing
- **Tech / pricing**: free, donate, $X/mo, etc.
- **Get it**: download button, GitHub repo, install instructions snippet
- **Newsletter capture**: "tell me when X ships / updates"
- **Related products**: cross-link to 2 others

Frontmatter schema example (`alpha-osk.md`):

```yaml
title: Alpha-OSK
tagline: AI-powered on-screen keyboard for Windows and Linux
status: live
tier: featured
order: 1
repo: https://github.com/okstudio1/alpha-osk-releases
downloadUrl: https://github.com/okstudio1/alpha-osk-releases/releases/latest
pricing: free
screenshot: /screenshots/alpha-osk.png
tags: [accessibility, prediction, windows, linux]
```

---

## 5. Brand alignment (currently broken)

- Replace `okstudio favicon drone 1.png` with logo from `OKStudio-Company-Info/branding/logo-assets/`
- Apply Jazz Teal `#00B4D8` / Jazz Purple `#7B2CBF` / Deep Purple `#5A189A` palette as CSS custom properties in `src/styles/tokens.css`
- Hero gradient = the documented Jazz Wave gradient (`linear-gradient(135deg, #00B4D8 0%, #7B2CBF 50%, #5A189A 100%)`)
- Fonts: Inter (body) + Bebas Neue or Poppins (display) per brand doc, pull via `@fontsource`
- Remove all drone stock imagery from `images/`; replace with product screenshots

---

## 6. Conversion infrastructure

- **Buttondown embed** for newsletter (`<NewsletterInline>` component, two placements: homepage strip + every product page sidebar). API key via Netlify env.
- **Slack invite link**: single source of truth in a config file; surfaced in Footer + `/about` + `/thanks`.
- **Netlify form** for contact (already wired in current site), preserve, move to `/contact`.
- **Plausible Analytics** (privacy-friendly, no cookie banner), track per-product page views, download-button clicks, newsletter conversions. Goal events: `download_clicked`, `newsletter_signup`, `slack_clicked`.
- **Open Graph + Twitter cards** per page, Astro autogenerates from frontmatter.

---

## 7. SEO & metadata

- Per-page `<title>`, `meta description`, `og:image`, driven from content frontmatter
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt` allowing all
- Schema.org `SoftwareApplication` JSON-LD on each product page (helps Google show pricing/rating)
- Target keywords from `MARKETING_PLAN.md`: "free on-screen keyboard", "voice dictation Windows", "adaptive gaming controller", "mouse to joystick"

---

## 8. Accessibility (the non-negotiable)

- WCAG 2.2 AA contrast on the Jazz palette, verify the teal/purple combos pass against white/near-black backgrounds before locking the design system
- Keyboard nav with visible focus rings (existing TODO already flags this)
- Skip-to-content link (already present, keep)
- `prefers-reduced-motion` respected on the gradient/wave animations
- All product screenshots get descriptive alt text
- Forms: label association, error messages announced via `aria-live`
- Owen will test with Alpha-OSK itself, circular validation

---

## 9. Build/deploy

- Netlify deploys from `main`
- `netlify.toml`: build = `npm run build`, publish = `dist/`
- Env vars: `BUTTONDOWN_API_KEY`, `PLAUSIBLE_DOMAIN`
- Preview deploys on every PR for design review

---

## 10. Execution phases

| Phase | Days | What |
|-------|------|------|
| **A. Migrate to Astro** | 0.5 | Scaffold, port existing content into components, brand tokens, no new pages yet |
| **B. Product content collection** | 1 | Write all 9 product MDs (frontmatter + body), build `/products/[slug]` template |
| **C. Homepage rebuild** | 0.5 | Tiered grid, hero, brand polish, replace drone imagery |
| **D. Conversion plumbing** | 0.5 | Buttondown embed, Slack invite, Plausible, OG tags |
| **E. Alpha-OSK launch landing polish** | 0.5 | Screenshots, GIFs, install instructions, "what's new", most important page by May 26 |
| **F. About + Contact + Thanks** | 0.25 | Port existing about, expand mission, post-submit flow |
| **G. Accessibility audit** | 0.25 | Contrast, keyboard, screen reader pass before launch |

**Total: ~3.5 dev days. Fits the May 26 Alpha-OSK launch window with margin.**

---

## Open questions (flag before relevant phase)

1. **Buttondown account**: does it exist yet? Flag at phase D.
2. **Slack workspace invite link**: is one provisioned? Flag at phase D.
3. **Logo files**: `branding/logo-assets/` should have SVG/PNG; verify before phase A.
4. **Alpha-OSK screenshots/GIFs**: for the launch landing page in phase E. Pull from the alpha-osk repo or generate fresh.

---

## Status (as of 2026-05-07)

All seven phases shipped. The site builds 13 pages cleanly:

- `/`, homepage (tiered grid, hero, newsletter strip, about teaser)
- `/products/<slug>/`, 9 product pages from the content collection
- `/about/`, `/contact/`, `/thanks/`, supporting pages
- `/sitemap-index.xml`, auto-generated

### Manual setup TODOs (single source of truth: `src/config/site.ts`)

These are wired with placeholders and gated by `siteConfig.plausibleEnabled`. Drop in real values when ready:

- [ ] **Buttondown**: sign up at https://buttondown.com/, set `siteConfig.buttondownUsername` to your handle.
- [ ] **Slack invite**: generate from Slack admin, replace `siteConfig.slackInviteUrl`.
- [ ] **Plausible Analytics**: add the `okstud.io` property, then set `siteConfig.plausibleEnabled = true`. The tagged-events script picks up `data-track` attributes automatically (`download_clicked`, `newsletter_signup`, `slack_clicked`).
- [ ] **Product media**: drop screenshots/GIFs into `public/screenshots/` (see `public/screenshots/README.md`), then replace `placeholder: true` entries in `src/content/products/<slug>.md` with `src: /screenshots/<file>`.
- [ ] **Open Graph image**: `public/og-default.png` is currently the brand logo. Make a proper 1200×630 OG card before launch.
- [ ] **Favicon**: same source file as the OG; consider regenerating ICO + multi-size PNG set for crisp tab favicons.

### Run locally

```bash
cd okstudio-website
npm run dev    # http://localhost:4321/
npm run build  # static output to dist/
```

### Accessibility status (Phase G)

- WCAG 2.2 AA contrast verified for body text and accent colors on all backgrounds (6.9–11:1).
- White-on-gradient hero text uses a subtle text-shadow to lift the teal-end of the gradient above 4.5:1.
- All interactive elements have visible focus rings (`outline: 2px solid var(--accent)`).
- Skip-to-content link, semantic landmarks (`<nav aria-label>`, `<main>`, `<footer>`), `aria-current` on active nav, `aria-labelledby` on every titled section.
- `prefers-reduced-motion` honored in `tokens.css`.
- Mobile nav requires JS, known limitation; acceptable for marketing site, but if a no-JS fallback becomes important, refactor to `<details>` disclosure.

---

*Created: 2026-05-07*
*Completed: 2026-05-07 (all 7 phases)*
