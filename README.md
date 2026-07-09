# VRDA Prime Overseas Pvt. Ltd. — Website

Modern marketing website for VRDA Prime Overseas Pvt. Ltd., built with **Next.js 14 (App Router), TypeScript and Tailwind CSS**. It implements the three design phases from the brief (Home, Services, Contact) plus About, Products and Why Choose Us.

## Tech stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **lucide-react** for icons
- Google Fonts via `next/font` (Inter + Plus Jakarta Sans)
- No browser storage, no external image dependencies — the bundle is self-contained.

## Getting started

Requires **Node.js 18.17+** (tested on Node 22).

```bash
npm install
npm run dev      # http://localhost:3000
```

Build and run in production:

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/
    layout.tsx           Root layout, fonts, header/footer
    page.tsx             Home
    about/page.tsx
    services/page.tsx
    products/page.tsx
    why-choose-us/page.tsx
    contact/page.tsx
    api/contact/route.ts Contact form endpoint (validates; email delivery is a TODO)
    globals.css
    icon.svg             Favicon
  components/
    Header.tsx           Sticky nav + mobile menu (client)
    Footer.tsx
    ContactForm.tsx      Validated contact form (client)
    ui.tsx               Shared UI: logo, buttons, cards, sections, icons
  lib/
    content.ts           ALL site copy/data in one place
```

## Editing content

All company info, services, products, stats and copy live in **`src/lib/content.ts`**. Change text, phone numbers, services or products there and every page updates.

## Contact form

The form posts to `POST /api/contact`, which validates input and returns JSON. Email delivery is intentionally left as a single, clearly-marked TODO in `src/app/api/contact/route.ts`. To make enquiries actually arrive, wire up one of:

- **SMTP** via `nodemailer` using the `SMTP_*` variables in `.env` (copy `.env.example`), or
- **Resend** with `RESEND_API_KEY`, or
- Persist to a **Supabase** `enquiries` table.

Copy `.env.example` to `.env` and fill in whichever you choose.

## Deployment

Deploys cleanly to **Vercel** (recommended for Next.js) — import the repo, no extra config needed. Any Node host that runs `npm run build && npm run start` works too.

---

## What this covers vs. the full architecture

The target architecture diagram describes a larger system than a marketing site. This repo delivers the **frontend** layer — the part that is testable and shippable now. The following are **not** included and are a separate build:

- **Backend API** (Node/Express modules, JWT auth, role-based access)
- **Supabase database** (tables, Row Level Security, auth) — the contact endpoint is a stub
- **Admin panel** (dashboard + CRUD for pages, services, products, enquiries, etc.)
- **Third-party integrations** requiring accounts/keys: WhatsApp (Twilio/360dialog), Meta,
  reCAPTCHA, Cloudinary, Google Analytics 4.

The code is structured so these can be layered on: content is centralized in `lib/content.ts`
(swap for a Supabase/CMS fetch), and the contact route is the first API surface to extend.
