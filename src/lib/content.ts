// All site content lives here so copy can be edited in one place
// and later swapped for a CMS / Supabase-backed source.

export type NavItem = { label: string; href: string };
export type Service = { icon: string; title: string; description: string };
export type Stat = { value: string; label: string };
export type Product = { title: string; blurb: string; icon: string; from: string; to: string };
export type Reason = { title: string; description: string; tags: string[] };
export type Benefit = { icon: string; text: string };

export const site = {
  name: "VRDA Prime Overseas Pvt. Ltd.",
  shortName: "VRDA Prime",
  tagline: "Trade Beyond Borders, Trust Beyond Limits.",
  intro:
    "We are a team dedicated to fostering a positive customer experience at every stage of the journey, creating synergies, promoting transparency, and enabling all stakeholders to achieve their goals.",
  domain: "www.vrdaprime.com",
  phones: ["+91 78150 14122", "+91 93811 05814"],
  emails: ["info@vrdaprime.com", "support@vrdaprime.com"],
  address: {
    lines: [
      "Flat No. 201, 2nd Floor, Plot No. 87,",
      "Surya Enclave, Uppal,",
      "Hyderabad, Telangana \u2013 500039, India",
    ],
    short: "Uppal, Hyderabad, Telangana, India",
    mapQuery: "Surya Enclave, Uppal, Hyderabad, Telangana 500039",
  },
  hours: {
    line1: "Mon \u2013 Sat: 9:30 AM \u2013 6:30 PM",
    line2: "Sunday: Closed",
  },
  socials: {
    x: "https://x.com/vrdaprime",
    linkedin: "https://www.linkedin.com/in/vrda",
    instagram: "https://www.instagram.com/vrdaprime",
    whatsapp: "https://wa.me/+919347842550",
  },
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact Us", href: "/contact" },
];

export const stats: Stat[] = [
  { value: "10+", label: "Years of Excellence" },
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Countries Served" },
  { value: "24/7", label: "Customer Support" },
];

// Six headline services shown on the home page
export const coreServices: Service[] = [
  { icon: "handshake", title: "Merchant Exporting", description: "Procurement and sale of goods to international buyers with dependable logistics and compliance." },
  { icon: "truck", title: "Freight Forwarding", description: "Shipment coordination, documentation, customs support and border-ready transport planning." },
  { icon: "sourcing", title: "Product Sourcing", description: "Strategic sourcing of quality products from reliable suppliers at competitive prices." },
  { icon: "upload", title: "Export Services", description: "End-to-end export support with documentation and smooth handoffs across international markets." },
  { icon: "download", title: "Import Support", description: "Reliable import coordination, customs readiness and supplier follow-through." },
  { icon: "workflow", title: "Supply Chain Support", description: "Operational support that keeps your trade flow efficient, responsive and dependable." },
];

// Full nine-service catalogue shown on the Services page
export const services: Service[] = [
  { icon: "handshake", title: "Merchant Exporting", description: "We procure and sell goods to international buyers while ensuring compliance, competitive pricing and smooth delivery." },
  { icon: "truck", title: "Freight Forwarding", description: "We coordinate shipment logistics, documentation, customs clearance and transportation across borders." },
  { icon: "sourcing", title: "Product Sourcing", description: "We source quality products from trusted suppliers at competitive prices to meet business needs." },
  { icon: "upload", title: "Export Services", description: "We support exporters with documentation, coordination and border-ready execution for global trade." },
  { icon: "download", title: "Import Support", description: "We simplify imports with dependable sourcing support, customs readiness and delivery coordination." },
  { icon: "workflow", title: "Supply Chain Support", description: "We help keep your trade operations efficient, responsive and reliable from source to destination." },
];

export const products: Product[] = [
  { title: "Diabetic Rice", blurb: "Low-glycemic index rice options designed for health-conscious consumers and specialty buyers.", icon: "rice", from: "#1B3A6B", to: "#0A1E3F" },
  { title: "Rice", blurb: "Premium and specialty rice varieties sourced for global buyers with consistent quality and documentation.", icon: "rice", from: "#1B3A6B", to: "#0A1E3F" },
  { title: "Spices", blurb: "Authentic Indian spices selected for aroma, purity and consistent export-grade quality.", icon: "spices", from: "#12294F", to: "#081733" },
  { title: "Agricultural Products", blurb: "A diverse portfolio of agri-commodities meeting varying international market demands.", icon: "agri", from: "#1E9AD6", to: "#12294F" },
  { title: "Essential Oils", blurb: "Natural essential oils and extracts supplied with documentation and compliance.", icon: "oils", from: "#1B3A6B", to: "#081733" },
  { title: "Medical Equipment", blurb: "Reliable medical and healthcare equipment for institutional and trade buyers.", icon: "medical", from: "#12294F", to: "#0A1E3F" },
  { title: "Textiles & Apparel", blurb: "Quality textiles and finished apparel for wholesale and retail channels worldwide.", icon: "textiles", from: "#1E9AD6", to: "#0A1E3F" },
];

// "Why Us" points sourced from the company's live site
export const reasons: Reason[] = [
  {
    title: "Expert-Led Execution",
    description: "Every engagement is handled by certified professionals specializing in International Trade and Consulting, ensuring accuracy and compliance.",
    tags: ["Certified", "Professional", "Compliance", "Accuracy"],
  },
  {
    title: "Personalized Support",
    description: "A dedicated Relationship Manager is assigned to every client for seamless communication and tailored service.",
    tags: ["Dedicated", "Relationship", "Communication", "Tailored"],
  },
  {
    title: "Transparent & Competitive Pricing",
    description: "We offer fair pricing models with no hidden costs, giving clients real value for their investment.",
    tags: ["Competitive", "Fair", "Value", "Transparent"],
  },
  {
    title: "Deadline-Oriented Delivery",
    description: "We understand the importance of time and consistently meet project deadlines across every shipment.",
    tags: ["Timely", "Reliable", "Punctual", "Committed"],
  },
  {
    title: "Client-Centric Approach",
    description: "Our commitment goes beyond delivery \u2014 we aim to exceed client expectations in every engagement.",
    tags: ["Client-focused", "Quality", "Satisfaction", "Excellence"],
  },
];

export const about = {
  whoWeAre:
    "We are a team dedicated to fostering a positive customer experience at every stage of the journey \u2014 creating synergies, promoting transparency, and enabling all stakeholders (customers, suppliers, intermediaries, and authorities) to achieve their goals. We celebrate our customers\u2019 success as our own, and our proven methodologies in merchant exporting help manufacturers, suppliers, and customers thrive and prosper.",
  mission:
    "To move businesses forward with reliable, efficient and transparent global trade solutions that open new markets and create lasting value.",
  vision:
    "To be a trusted partner in international trade \u2014 known for integrity, quality and a genuine commitment to every client\u2019s growth.",
};

export const benefits: Benefit[] = [
  { icon: "award", text: "10+ Years of Excellence in Global Trade & Consulting" },
  { icon: "handshake", text: "Building Long-Term Relationships Across the Globe" },
  { icon: "shield", text: "Quality, Trust & Timely Delivery \u2014 Our Commitment" },
  { icon: "globe", text: "Let\u2019s Grow Together, Beyond Borders" },
];

// ─────────────────────────────────────────────────────────────
// Additional real, publicly-stated business information sourced
// from the company's live site & official channels (vrdaprime.com,
// FIEO/RCMC registration, LinkedIn). No invented claims.
// ─────────────────────────────────────────────────────────────

export type Credential = { label: string; detail: string };

// Trust badges — official registrations & certifications
export const credentials: Credential[] = [
  { label: "FIEO Member", detail: "Federation of Indian Export Organisations \u2014 set up by the Ministry of Commerce, Government of India." },
  { label: "RCMC Certified", detail: "Holder of a valid Registration-cum-Membership Certificate for export operations." },
  { label: "International Trade Certified", detail: "Founded by professionals certified in International Trade & Consulting." },
  { label: "EU Registered Exporter", detail: "Registered to supply the European market, including Ho.Re.Ca partners." },
];

// The company's stated sourcing methodology
export const approach = {
  eyebrow: "How We Work",
  title: "A 7-step sourcing strategy, built around your goal",
  intro:
    "We follow a disciplined 7-step sourcing process with the end goal of maximising the value of every purchase. Our managed-sourcing specialists can run your sourcing end to end \u2014 or extend your internal team to add bandwidth, improve efficiency and broaden coverage of the global supply base.",
  steps: [
    { title: "Define Requirement", description: "We capture your exact specification, volumes, quality and compliance needs." },
    { title: "Market & Supplier Mapping", description: "We map the global supply base to shortlist capable, reliable suppliers." },
    { title: "Qualify & Vet", description: "Suppliers are assessed for quality, capacity, certification and trust." },
    { title: "Negotiate Value", description: "We negotiate fair, transparent pricing that maximises value per purchase." },
    { title: "Sample & Approve", description: "Samples are validated against your standards before commitment." },
    { title: "Coordinate Logistics", description: "Air, sea and land movement is arranged with full documentation." },
    { title: "Deliver & Review", description: "We deliver on deadline and review outcomes for continuous improvement." },
  ],
};

// Publicly-attributed leadership
export const leadership = {
  name: "Rajesh Arcot",
  role: "Founder & Managing Director",
  note:
    "A professionally managed export company based in Hyderabad, India, working with partners across global markets for reliable product supply and sourcing.",
};
