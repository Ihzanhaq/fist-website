# FIST Innovations — Website

A production-ready, editorial marketing site for **FIST Innovations** (AI, GIS & ERP
software). Built per the project spec files (`00_MASTER_PROMPT` → `05_PERFORMANCE_QA`)
with content from the `Fist Website` content pack.

- **Stack:** React 18 · Vite · JavaScript · Tailwind CSS v4 · GSAP + ScrollTrigger ·
  Lenis · SplitType · Motion · React Router.
- **Direction:** Dark editorial-tech (near-black canvas, off-white ink, single FIST-green
  accent). Ships a full **light theme** with a persisted, no-flash toggle.
- **3D:** intentionally none (GSAP/Lenis only) to keep the bundle lean.

## Getting started

```bash
npm install
npm run dev        # local dev
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## Project structure

```
src/
  components/     Button, Card, Section, Container, Eyebrow, Reveal,
                  SplitHeading, Field, SmartImage, StatStrip, Navbar, MobileMenu,
                  Footer, ThemeToggle, Preloader, Seo, MapEmbed, PageLoader, Logo
  sections/       shared/ (PageHeader, TrustBand, CtaBand) + home/Hero
  pages/          Home, About, Products, ProductDetail, Services, Industries, Contact, NotFound
  layouts/        RootLayout, ScrollManager (Lenis + route scroll reset)
  hooks/          useTheme, useReducedMotion, useLenis, useMagnetic, useLockBody,
                  useScrollSpy, lenisStore
  animations/     gsap (registry), reveal, splitReveal, clipReveal, parallax
  data/           site, products, services, industries, seo, images (central manifest)
  styles/         theme.css (Tailwind v4 tokens), base.css
```

Animation logic lives in reusable hooks/utilities — never embedded per component. Every
animation respects `prefers-reduced-motion` (content is shown immediately and Lenis is
disabled).

## Theming

Tokens are CSS variables mapped through Tailwind v4 `@theme inline` in
`src/styles/theme.css`. Toggling the `.dark` class on `<html>` swaps the whole palette at
runtime (no rebuild). Default is dark; the choice persists in `localStorage` and is applied
before first paint by an inline script in `index.html` (no flash).

## Hero video

The hero plays `public/compressed_hero.mp4` (from the Pexels clip you supplied). It has been
**losslessly remuxed to "faststart"** (metadata at the front), so the browser can render the
first frame almost immediately instead of waiting for the whole file. Loading behaviour:

- A **shimmering skeleton** is shown until the first frame is ready — no background image.
- When the video is ready it fades in; if it ever fails to load, the poster image is shown.
- Reduced-motion / Data-Saver users get the static poster image (no video, no shimmer).

The original (non-faststart) copy is kept at `./compressed_hero.original.mp4` as a backup and
can be deleted. To re-optimize a replacement video, drop the file in `public/` and remux once:

```bash
ffmpeg -i public/compressed_hero.mp4 -movflags +faststart -c copy public/out.mp4 \
  && mv public/out.mp4 public/compressed_hero.mp4
```

> Note: ~49 MB is still on the heavy side for a hero. A 720p re-encode (~5–10 MB) would load
> even faster on mobile — e.g. add `-vf scale=-2:720 -an -c:v libx264 -crf 26` (drops audio,
> which is fine since the hero is muted).

## Images

All imagery resolves through **`src/data/images.js`** — a single manifest. Swap a URL there
to re-skin the entire site. `SmartImage` falls back to a themed gradient if a URL fails, so
the UI never shows a broken image. Imagery is provisional Unsplash art (abstract / tech /
cartographic); replace with final brand assets in the manifest.

## Contact form

The form validates client-side and submits without a backend:

- If `VITE_FORM_ENDPOINT` is set (e.g. a Formspree URL), submissions POST JSON there.
- Otherwise it opens a prefilled `mailto:` to `info@fistinnovations.com`.

```bash
# optional — enable real submissions
echo 'VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxx' > .env.local
```

## Deployment (static)

Deploy the `dist/` folder to any static host. SPA fallbacks are included:

- **Netlify:** `public/_redirects` (`/* → /index.html 200`).
- **Vercel:** `vercel.json` rewrites + asset caching.
- The booking block's "Book My Slot" scrolls to the enquiry form. To embed a real
  scheduler, set `bookingUrl` in `src/data/site.js` and drop the iframe into `Contact.jsx`.

## Accessibility & performance

- Semantic landmarks, skip link, focus-visible rings, focus management in the mobile menu,
  ARIA on toggles and form errors, AA contrast.
- Route-level code splitting, lazy images with reserved aspect ratios (no CLS), self-hosted
  subsetted variable fonts with `font-display: swap`.
- Target: Lighthouse 95+ across categories. If you need to trim further, `framer-motion`
  (used only for the preloader + mobile menu) can be replaced with CSS transitions.

---

## Facts to confirm before launch

The content pack flagged conflicts between the sales playbook, company profile, and the live
site. The site uses the pack's literal copy; confirm these with the client:

| Item | What to confirm |
| --- | --- |
| **Countries served** | Trust band shows **7**; prose says "India, the GCC and Europe". |
| **Client / project count** | Uses **140+ projects**. The old live site still says "20 clients / 5 countries". |
| **HQ address** | Uses the **Neoito Technology Center** version. |
| **Primary phone** | **+91 83300 18881** (a second number, +91 88488 54628, also exists). |
| **Leadership** | Names/roles are included; **bios and photos** still needed. |
| **Case studies** | Add 2–3 named/anonymised case studies for stronger trust. |
| **Scheduler** | Replace the placeholder with a real Calendly/Zoho embed. |
| **Logo** | A branded wordmark is used; swap in the official SVG via `company.logoUrl` if desired. |
