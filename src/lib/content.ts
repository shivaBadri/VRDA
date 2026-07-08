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
  tagline: "Trade Beyond Borders, Beyond Limits.",
  intro:
    "We are a global trade and consulting company providing reliable export, import, sourcing, logistics and technology solutions worldwide.",
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
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
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
  { icon: "upload", title: "Export Services", description: "Quality products delivered to global markets with full documentation." },
  { icon: "download", title: "Import Services", description: "Reliable sourcing and timely, compliant import solutions." },
  { icon: "sourcing", title: "Product Sourcing", description: "The right products from vetted manufacturers worldwide." },
  { icon: "truck", title: "Freight & Logistics", description: "Air, sea and land movement, coordinated end to end." },
  { icon: "briefcase", title: "Business Consulting", description: "Strategy and guidance to grow across borders." },
  { icon: "monitor", title: "IT Solutions", description: "Modern technology to power your trade operations." },
];

// Full nine-service catalogue shown on the Services page
export const services: Service[] = [
  { icon: "upload", title: "Export Services", description: "We help you export quality products globally with complete documentation and support." },
  { icon: "download", title: "Import Services", description: "End-to-end import solutions with reliable sourcing and timely delivery." },
  { icon: "handshake", title: "Merchant Exporting", description: "We act as your merchant exporter with a focus on quality and compliance." },
  { icon: "sourcing", title: "Product Sourcing", description: "We source the best products from reliable manufacturers across the globe." },
  { icon: "truck", title: "Freight & Logistics", description: "Efficient logistics solutions by air, sea and land for timely and safe delivery." },
  { icon: "workflow", title: "Supply Chain Solutions", description: "Optimized supply chain solutions to improve efficiency and reduce costs." },
  { icon: "consulting", title: "International Trade Consulting", description: "Expert advice and guidance to help you grow in global markets." },
  { icon: "code", title: "Website Development", description: "Custom websites designed to elevate your business online." },
  { icon: "briefcase", title: "Business Consulting", description: "Strategic solutions to help your business achieve sustainable growth." },
];

export const products: Product[] = [
  { title: "Rice", blurb: "Premium and specialty rice, including low-GI diabetic-friendly varieties, sourced for global buyers.", icon: "rice", from: "#1B3A6B", to: "#0A1E3F" },
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
