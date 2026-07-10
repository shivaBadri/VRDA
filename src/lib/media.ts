// ─────────────────────────────────────────────────────────────
//  MEDIA REGISTRY  —  single source of truth for imagery
// ─────────────────────────────────────────────────────────────
//
//  Every photographic slot on the site is defined here. Each slot
//  pairs a locally-hosted photograph (`photo`, under /public/images)
//  with a bespoke vector scene (`scene`). The <Media /> component
//  (components/Media.tsx) renders the photo with a plain <img> and
//  automatically falls back to the vector scene if the photo is
//  missing or fails to load — so the site is always fast and NEVER
//  shows a broken image.
//
//  ▶ All imagery is served from /public/images. To swap an image,
//    drop a new file in that folder and point `photo` at it. There
//    is no dependency on Unsplash, Framer, or any remote host.
//
//  `scene` selects which built-in vector illustration backs the slot.
//  `alt` is the accessible description. `tint` is the gradient shown
//  behind the scene / while a photo loads.
// ─────────────────────────────────────────────────────────────

export type Scene =
  | "port" // container port / cranes
  | "cargoShip" // vessel at sea
  | "airFreight" // air cargo
  | "warehouse" // racking / storage
  | "containers" // stacked containers
  | "meeting" // business collaboration
  | "network"; // global trade network

export type MediaSlot = {
  photo?: string; // locally-hosted image path (/images/…)
  scene: Scene;
  alt: string;
  tint?: [string, string]; // gradient behind the scene / while a photo loads
};

const navy: [string, string] = ["#12294F", "#081733"];
const navyDeep: [string, string] = ["#1B3A6B", "#0A1E3F"];
const aqua: [string, string] = ["#1E9AD6", "#0A1E3F"];

export const media = {
  heroBackdrop: {
    photo: "/images/cturv8vAsPXN8sBjpgRFPRIP04.jpeg",
    scene: "port",
    alt: "Aerial view of a container port with stacked shipping containers",
    tint: navy,
  },

  aboutWhoWeAre: {
    photo: "/images/3zmVyaBI0M2ZhVSd587gexwXx0.png",
    scene: "meeting",
    alt: "The VRDA Prime team collaborating on global trade operations",
    tint: navyDeep,
  },

  approach: {
    photo: "/images/merchant exports.avif",
    scene: "warehouse",
    alt: "Warehouse operations with organised racking and storage",
    tint: navy,
  },

  servicesBanner: {
    photo: "/images/fXpGEgk8MYDDSOptuGC5udomCZg.png",
    scene: "cargoShip",
    alt: "Ocean freight cargo vessel loaded with containers at sea",
    tint: navy,
  },

  whyBanner: {
    photo: "/images/njp1bA3BMvVgEmIAjrqQvHgkG5g.png",
    scene: "meeting",
    alt: "Business partners shaking hands over a successful trade agreement",
    tint: navyDeep,
  },

  contactBanner: {
    photo: "/images/yIy6phoiIf84zwFx7NRHBVvztRo.avif",
    scene: "airFreight",
    alt: "Air freight cargo aircraft being loaded for international shipment",
    tint: aqua,
  },
} satisfies Record<string, MediaSlot>;

// Per–product-category scene mapping (kept for optional use; product tiles
// keep their brand gradient by default).
export const productScene: Record<string, Scene> = {
  Rice: "warehouse",
  Spices: "containers",
  "Agricultural Products": "cargoShip",
  "Essential Oils": "containers",
  "Medical Equipment": "airFreight",
  "Textiles & Apparel": "warehouse",
};

export const productImages: Record<string, string> = {
  "Diabetic Rice": "/images/Diabetic Rice.png",
  Rice: "/images/rice.png",
  Spices: "/images/qwyQeyfBGJi9aww8ZkveTOM5ac.png",
  "Agricultural Products": "/images/RCaxzJxVFjyHNi5dujROzvvcI0g.webp",
  "Essential Oils": "/images/essential oils.webp",
  "Medical Equipment": "/images/Medical Equipments.webp",
  "Textiles & Apparel": "/images/1Ar6vWvPCx1oFUSDbjqBbFe27I.webp",
};

export const SERVICE_IMAGES = {
  merchantExporting: "/images/services/merchant exports.avif",
  freightForwarding: "/images/services/yIy6phoiIf84zwFx7NRHBVvztRo.avif",
  productSourcing: "/images/services/diverse product.avif",
  exportServices: "/images/services/HB2BnmJIpqj1iYhAsMiXeKvrL9k.webp",
  importSupport: "/images/services/Import.webp",
  supplyChainSupport: "/images/services/13TOpGke15uAtcMc0ST9pwPcGME.png",
};
