import type { Metadata } from "next";
import { reasons, stats } from "@/lib/content";
import {
  Container,
  PageHeader,
  SectionHeading,
  ReasonCard,
  StatBand,
  CTASection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Expert-led execution, personalized support, transparent pricing, deadline-oriented delivery and a client-centric approach to global trade.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHeader title="Why Choose Us" crumb="Why Choose Us" />

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="The VRDA Prime Difference"
            title="Reasons clients trust us"
            intro="Our commitment goes beyond transactions. We combine expertise, transparency and genuine care to help your business grow across borders."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </Container>
      </section>

<<<<<<< HEAD
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-white">
        <div className="hero-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative py-16 sm:py-20">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Trusted by clients across the globe"
            align="center"
            tone="light"
          />
          <div data-reveal className="mt-10">
            <StatBand stats={stats} variant="onDark" />
          </div>
=======
      <section className="bg-navy-900">
        <Container className="py-14 sm:py-16">
          <StatBand stats={stats} variant="onDark" />
>>>>>>> 0f6eb8cae909159f643d2de53878a1e9a820a49d
        </Container>
      </section>

      <CTASection />
    </>
  );
}
