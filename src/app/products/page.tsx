import type { Metadata } from "next";
import { products } from "@/lib/content";
import { Container, PageHeader, SectionHeading, ProductTile, CTASection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products & Industries",
  description:
    "Rice, spices, agricultural products, essential oils, medical equipment, textiles and more — a diverse export portfolio for global markets.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="Products & Industries" crumb="Products" />

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="A diverse product portfolio"
            intro="We offer a wide range of high-quality goods to meet varying global market demands, sourced from trusted manufacturers and suppliers."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductTile key={product.title} product={product} />
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-steel">
            Looking for something specific? We source a broad range of commodities and finished
            goods on request. Tell us your requirement and we&apos;ll find the right supplier.
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
