import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import ScrollFX from "@/components/ScrollFX";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/motion/SmoothScroll";
import BackToTop from "@/components/motion/BackToTop";
import { site } from "@/lib/content";
import { OFFICIAL_ICON_32, OFFICIAL_ICON_180, OFFICIAL_ICON_192 } from "@/lib/brand";
=======
import { site } from "@/lib/content";
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vrdaprime.com"),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.intro,
  keywords: [
    "export",
    "import",
    "merchant exporting",
    "product sourcing",
    "freight and logistics",
    "global trade",
    "trade consulting",
<<<<<<< HEAD
    "FIEO exporter",
    "RCMC certified exporter",
    "VRDA Prime",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: OFFICIAL_ICON_32, sizes: "32x32", type: "image/png" },
      { url: OFFICIAL_ICON_192, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: OFFICIAL_ICON_180, sizes: "180x180", type: "image/png" }],
  },
=======
    "VRDA Prime",
  ],
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.intro,
    type: "website",
    siteName: site.shortName,
<<<<<<< HEAD
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.intro,
=======
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
  },
  robots: { index: true, follow: true },
};

<<<<<<< HEAD
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vrdaprime.com",
  description: site.intro,
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.lines.join(" "),
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500039",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phones[0],
    email: site.emails[0],
    contactType: "customer service",
    areaServed: "Worldwide",
  },
  sameAs: [site.socials.facebook, site.socials.linkedin, site.socials.instagram],
};

=======
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
<<<<<<< HEAD
        {/* Add `.js` before paint so scroll-reveal never causes a flash of
            unstyled/hidden content; without JS all content stays visible. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js');" }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Fonts are loaded here in the root layout <head>, so this stylesheet
          applies to every route (the no-page-custom-font rule targets the
          Pages Router's per-page pitfall, which does not apply in the App
          Router). For an extra LCP/CLS win in production, migrate to
          `next/font/google` (self-hosts the font files and removes this
          render-blocking request). `display=swap` avoids invisible text
          while the font loads.
        */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
=======
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
<<<<<<< HEAD
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <SmoothScroll />
        <ScrollProgress />
        <ScrollFX />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
=======
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
      </body>
    </html>
  );
}
