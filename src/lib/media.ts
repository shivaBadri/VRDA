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
    photo: "/images/58z3TYyfnXyMf2UTH7kLDDAXE.png",
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
    photo: "/images/ocgvQuoK3due4ZyHBUQSlGhPrk.png",
    scene: "warehouse",
    alt: "Warehouse operations with organised racking and storage",
    tint: navy,
  },

  servicesBanner: {
    photo: "/images/Q8HDI34gedLZFJEDYKKsmLXkmE0.png",
    scene: "cargoShip",
    alt: "Ocean freight cargo vessel loaded with containers at sea",
    tint: navy,
  },

  whyBanner: {
    photo: "/images/VhjHnbXzrKYPLfpT2qSHSkvk2E.png",
    scene: "meeting",
    alt: "Business partners shaking hands over a successful trade agreement",
    tint: navyDeep,
  },

  contactBanner: {
    photo: "/images/13TOpGke15uAtcMc0ST9pwPcGME.png",
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
  "Diabetic Rice": "/images/4acSgTNQtDhKJc5HY3RbnF1XjU.png",
  Rice: "/images/qwyQeyfBGJi9aww8ZkveTOM5ac.png",
  Spices: "/images/mcTGJpDwOPGjIxn5YL2qudA4.png",
  "Agricultural Products": "/images/tG09x9l5VdzTpukbWPZW2Vqz4U.png",
  "Essential Oils": "/images/tiQLZcLU2erUzVjHNmUIdT7w.png",
  "Medical Equipment": "/images/13TOpGke15uAtcMc0ST9pwPcGME.png",
  "Textiles & Apparel": "/images/VhjHnbXzrKYPLfpT2qSHSkvk2E.png",
};
