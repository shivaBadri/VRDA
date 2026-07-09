"use client";

import Marquee from "react-fast-marquee";
import { products } from "@/lib/content";
import { productImages } from "@/lib/media";

function Tile({ product }: { product: (typeof products)[number] }) {
  const image = productImages[product.title] ?? "/images/58z3TYyfnXyMf2UTH7kLDDAXE.png";
  return (
    <div className="mx-3 h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-[0_2px_8px_rgba(16,24,40,0.06)] sm:h-44 sm:w-72">
      <div className="relative h-full w-full">
        <img
          src={image}
          alt={product.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="font-display text-sm font-bold text-white">{product.title}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Two infinite image rows scrolling in opposite directions. `autoFill`
 * guarantees a seamless loop (no visible jump); rows pause on hover.
 */
export default function ProductMarquee() {
  const reversed = [...products].reverse();
  return (
    <div className="min-h-[336px] space-y-4 sm:min-h-[368px]">
      <Marquee autoFill pauseOnHover speed={32} gradient={false} direction="left">
        {products.map((p) => (
          <Tile key={`l-${p.title}`} product={p} />
        ))}
      </Marquee>
      <Marquee autoFill pauseOnHover speed={32} gradient={false} direction="right">
        {reversed.map((p) => (
          <Tile key={`r-${p.title}`} product={p} />
        ))}
      </Marquee>
    </div>
  );
}
