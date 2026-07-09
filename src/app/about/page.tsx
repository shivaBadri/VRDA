import type { Metadata } from "next";
<<<<<<< HEAD
import { Target, Eye, Check } from "lucide-react";
import { about, stats, site, credentials, leadership } from "@/lib/content";
=======
import { Target, Eye } from "lucide-react";
import { about, stats, site } from "@/lib/content";
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
import {
  Container,
  PageHeader,
  SectionHeading,
  StatBand,
  CTASection,
<<<<<<< HEAD
  revealDelay,
} from "@/components/ui";
import { Media } from "@/components/Media";
import { media } from "@/lib/media";
=======
  GlobeMark,
} from "@/components/ui";
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — a global trade and consulting company built on transparency, quality and long-term partnerships.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumb="About Us" />

      {/* Who we are */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Who We Are" title="Trade partners you can rely on" />
<<<<<<< HEAD
              <p data-reveal className="mt-6 text-base leading-relaxed text-steel">{about.whoWeAre}</p>
              <div data-reveal className="mt-6 rounded-xl border border-line bg-mist-50 p-5">
                <p className="text-sm leading-relaxed text-steel">{leadership.note}</p>
                <p className="mt-3 text-sm font-bold text-navy-900">
                  {leadership.name}
                  <span className="font-medium text-steel"> · {leadership.role}</span>
                </p>
              </div>
            </div>
            <div data-reveal="right" className="relative">
              <Media
                slot={media.aboutWhoWeAre}
                className="aspect-square w-full max-w-md justify-self-center"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-navy-950/70 p-4 text-center backdrop-blur">
                <p className="font-display text-lg font-bold text-white">{site.tagline}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="bg-navy-900 text-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            eyebrow="Credentials"
            title="Recognised, registered, ready to trade"
            tone="light"
            align="center"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c, i) => (
              <div key={c.label} data-reveal style={revealDelay(i)} className="rounded-xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500 text-navy-950">
                  <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">{c.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{c.detail}</p>
              </div>
            ))}
=======
              <p className="mt-6 text-base leading-relaxed text-steel">{about.whoWeAre}</p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950">
                <div className="hero-grid absolute inset-0 opacity-70" aria-hidden="true" />
                <GlobeMark className="relative h-72 w-72 text-white/25" />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-white/[0.06] p-4 text-center backdrop-blur">
                  <p className="font-display text-lg font-bold text-white">{site.tagline}</p>
                </div>
              </div>
            </div>
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
<<<<<<< HEAD
            <article data-reveal className="card">
=======
            <article className="card">
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white">
                <Target className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{about.mission}</p>
            </article>
<<<<<<< HEAD
            <article data-reveal style={revealDelay(1, 90)} className="card">
=======
            <article className="card">
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500 text-navy-950">
                <Eye className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{about.vision}</p>
            </article>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section>
        <Container className="py-16 sm:py-20">
<<<<<<< HEAD
          <SectionHeading eyebrow="Our Track Record" title="A decade of global trade" align="center" />
=======
          <SectionHeading
            eyebrow="Our Track Record"
            title="A decade of global trade"
            align="center"
          />
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
          <div className="mt-12">
            <StatBand stats={stats} variant="card" />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
