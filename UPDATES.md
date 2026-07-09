# VRDA Prime — Update Notes

This build implements the client feedback while preserving the existing
Next.js structure, routing, contact integration, responsiveness and SEO.
No routes, APIs or working features were removed.

## What changed (against the 8 requests)

1. **Official logo, site-wide** — the header, mobile menu and footer now show
   your **official VRDA Prime logo**, and the favicon / app-icons use your
   official brand icon. They're referenced from your own domain
   (`vrdaprime.com/wp-content/uploads/2023/01/cropped-vrdaprime-*.png`, the
   WordPress Site Icon). If an asset ever fails to load, a matching vector
   emblem shows automatically, so the mark can never render broken. See
   *Self-hosting the logo* to bundle the file in before go-live.
2. **Content preserved & better presented** — all existing company copy,
   services, products and contact details are intact. Presentation was
   improved with a clearer type scale, more generous spacing, consistent
   section rhythm, and iconography. Real, publicly-stated details were added
   (no invented claims): FIEO membership, RCMC certification, International
   Trade certification, EU-registered exporter, the 7-step sourcing method,
   and founder attribution (Rajesh Arcot).
3. **Imagery** — bespoke, royalty-free vector scenes (ports, cargo ships,
   air freight, warehouses, containers, the global trade network, business
   collaboration) back the hero, sections and product tiles. Real
   photographs can be dropped in from one file — see *Using photographs*.
4. **Framer-style continuous scroll** — smooth scrolling, a scroll-progress
   bar, sticky nav with active-section highlighting on the home page
   (scroll-spy), fade-up section reveals, staggered card reveals, a parallax
   hero, animated stat counters, and image clip-reveals.
5. **Hero** — premium logistics gradient backdrop, a subtle animated world
   map behind the content, floating statistic cards (Countries, Clients),
   stronger display typography, and modern CTAs (with an arrow affordance).
6. **Enterprise motion** — animated trade routes with travelling packets,
   pulsing port nodes, floating cargo icons (ship / plane / truck / cargo),
   soft gradient glow effects, and world-connectivity animation. All of it is
   pure CSS + SVG and stays lightweight.
7. **Consistency** — unified spacing, heading hierarchy and card styling so
   every section reads as premium and scannable.
8. **Preserved** — project structure, all six routes, the contact form and
   its `/api/contact` route (untouched), SEO metadata, and responsiveness.

## Accessibility & performance
- Every motion effect is disabled under `prefers-reduced-motion`.
- Reveal animations only run when JavaScript is present; **without JS (and
  for crawlers) all content is fully visible**, so SEO is unaffected.
- First-load JS stays ~100 kB; imagery is vector, so pages stay light.
- Added `Organization` JSON-LD structured data for richer search results.

## Self-hosting the logo (recommended before go-live)
The logo/icon currently load from your live WordPress domain. To bundle them
into this project instead: download the files, drop them into `public/brand/`,
and update the four URLs in **`src/lib/brand.ts`** to local paths, e.g.
`"/brand/vrdaprime-270.png"`. To force the vector emblem instead, set
`USE_OFFICIAL_LOGO = false` in the same file.

## Using photographs instead of the vector scenes
All imagery is defined in **one file: `src/lib/media.ts`**. Paste a
royalty-free image URL into a slot's `photo` field — from Unsplash (free
tier), Pexels, or your own photography:

```ts
servicesBanner: {
  photo: "https://images.unsplash.com/photo-XXXX?w=1600&q=80&auto=format&fit=crop",
  scene: "port",
  alt: "Cranes loading containers at an international port",
},
```

`images.unsplash.com` and `images.pexels.com` are already allow-listed in
`next.config.mjs`. If a photo ever fails to load, the bespoke scene shows
through automatically — the layout can never break.

> Why vector scenes are the default: verified, free-licensed photography
> couldn't be downloaded in the build environment (image hosts are blocked),
> so `media.ts` makes swapping in photos a one-line change per slot.

## Contact form
The form and its `/api/contact` route are unchanged and still respond
successfully. Wire up delivery (SMTP / Resend / Supabase) as before — see the
TODO in `src/app/api/contact/route.ts` and `.env.example`.

## Premium scroll stack (Lenis + Framer Motion + marquees)
- **Lenis smooth scrolling** (`src/components/motion/SmoothScroll.tsx`) drives
  native scroll with easing, so the existing progress bar, scroll-spy, parallax
  and footer-lift keep working. Disabled under reduced motion.
- **Framer Motion** powers scroll-linked hero transforms
  (`ScrollParallax`) and per-route page transitions (`src/app/template.tsx`).
- **Text marquee** (`KeywordMarquee`) and **dual-row product image marquee**
  (`ProductMarquee`, alternating directions, pause on hover, seamless) use
  react-fast-marquee. It renders after mount, so their containers reserve
  height to keep layout shift (CLS) at zero.
- **Back-to-top** (`src/components/motion/BackToTop.tsx`) fades in on scroll,
  bottom-left so it never collides with the WhatsApp button.

> Performance note: adding Framer Motion raises the home route's first-load JS
> to ~148 kB (from ~100 kB). It's the cost of the requested library. If you
> prefer to claw that back, the hero can fall back to the existing CSS/rAF
> parallax and Framer Motion can be limited to page transitions.

## Floating WhatsApp button
A reusable `FloatingWhatsApp` component (`src/components/FloatingWhatsApp.tsx`)
links to WhatsApp using the company's first phone number. On desktop it is
anchored to the content grid (max-w-7xl / 1280px), not the browser edge: it
parks just outside the container on wide/ultra-wide screens, and tucks inside
with a 24px margin on smaller laptops. On mobile/tablet it sits 20px from the
bottom-right. It lifts above the footer, fades in on load, pulses gently, shows
a "Chat with us" tooltip on desktop hover, and hides while the mobile nav
drawer is open. To change the number or prefilled text, edit the top of the
component; positioning constants (container width, gaps) are named there too.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

> In a restricted sandbox the build may print a one-line
> `fonts.googleapis.com not in allowlist` / `CssSyntaxError` notice — that's
> only a build-time font prefetch being blocked; fonts load normally in the
> browser via the `<link>` tags, and it does not affect a normal deployment.
