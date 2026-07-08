import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import { about, stats, site } from "@/lib/content";
import {
  Container,
  PageHeader,
  SectionHeading,
  StatBand,
  CTASection,
  GlobeMark,
} from "@/components/ui";

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
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white">
                <Target className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{about.mission}</p>
            </article>
            <article className="card">
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
          <SectionHeading
            eyebrow="Our Track Record"
            title="A decade of global trade"
            align="center"
          />
          <div className="mt-12">
            <StatBand stats={stats} variant="card" />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
