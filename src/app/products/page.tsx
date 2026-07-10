import type { Metadata } from "next";
import { Check } from "lucide-react";
import { products } from "@/lib/content";
import { Container, PageHeader, SectionHeading, ProductTile, CTASection } from "@/components/ui";
import { Media } from "@/components/Media";
import { media } from "@/lib/media";
import ProductMarquee from "@/components/ProductMarquee";

export const metadata: Metadata = {
  title: "Products & Industries",
  description:
    "Rice, spices, agricultural products, essential oils, medical equipment, textiles and more — a diverse export portfolio for global markets.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="Products & Industries" crumb="Products" />

      {/* Infinite image rows (alternating directions, pause on hover) */}
      <section className="overflow-hidden bg-mist-50 py-8 sm:py-10">
        <ProductMarquee />
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="A diverse product portfolio"
            intro="We offer a wide range of high-quality goods to meet varying global market demands, sourced from trusted manufacturers and suppliers."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductTile key={product.title} product={product} index={i} />
            ))}
          </div>

          <p data-reveal className="mx-auto mt-10 max-w-2xl text-center text-sm text-steel">
            Looking for something specific? We source a broad range of commodities and finished
            goods on request. Tell us your requirement and we&apos;ll find the right supplier.
          </p>
        </Container>
      </section>

      {/* Quality & sourcing band */}
      <section className="bg-mist-50">
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div data-reveal="left">
              <SectionHeading
                eyebrow="Quality Assurance"
                title="Sourced, checked, and shipped with care"
                intro="Every consignment is drawn from vetted manufacturers and suppliers, validated against your specification before it ever leaves the warehouse."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Vetted, trusted suppliers",
                  "Specification-matched sourcing",
                  "Pre-shipment quality checks",
                  "Full export documentation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-steel">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="right">
              <Media
              slot={media.approach}
              className="aspect-[4/3] w-full"
            />
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
