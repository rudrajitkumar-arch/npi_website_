/**
 * PRODUCT CATALOGUE — Single Source of Truth
 *
 * Powers:
 *  1. Products mega menu (Header / MegaMenu)
 *  2. Products landing page (/products)
 *  3. Category pages (/products/[slug]) — product card grid
 *
 * To add a category: push a new entry to PRODUCT_CATALOGUE.
 * To add a sub-product: push to the subProducts array of the relevant category.
 * Each sub-product must have an `image` path under /public/images/products/[cat-slug]/[product-slug].*
 */

export interface SubProduct {
  name: string;
  slug: string;
  /** Path relative to /public — used in Next.js <Image src={}> */
  image: string;
  imageAlt: string;
}

export interface ProductCategory {
  slug: string;
  /** Full display name */
  name: string;
  /** Category-level hero image — relative to /public */
  image: string;
  imageAlt: string;
  /** One-line description for landing page cards and category page intro */
  description: string;
  subProducts: SubProduct[];
  /**
   * How many sub-products to show on landing page cards before "+X more".
   * Defaults to 4 if omitted.
   */
  previewCount?: number;
}

export const PRODUCT_CATALOGUE: ProductCategory[] = [
  {
    slug: "electrical-electronics",
    name: "Electrical & Electronics",
    image: "/images/product_images/earthing_lightning_protection.png",
    imageAlt: "Brass electrical and electronics components including earthing and switchgear",
    description:
      "High-conductivity electrical accessories for power distribution, switchgear, wiring and earthing systems.",
    subProducts: [
      {
        name: "Pins",
        slug: "pins",
        image: "/images/products/electrical-electronics/pins.jpg",
        imageAlt: "Brass electrical pins — precision machined contact pins",
      },
      {
        name: "Cable Glands",
        slug: "cable-glands",
        image: "/images/products/electrical-electronics/cable-glands.jpg",
        imageAlt: "Brass cable glands and accessories",
      },
      {
        name: "MCB & Switchgear Components",
        slug: "mcb-switchgear-components",
        image: "/images/products/electrical-electronics/mcb-switchgear-components.jpg",
        imageAlt: "Brass MCB and switchgear components",
      },
      {
        name: "Terminal Blocks",
        slug: "terminal-blocks",
        image: "/images/products/electrical-electronics/terminal-blocks.jpg",
        imageAlt: "Brass terminal block connectors",
      },
      {
        name: "Earthing Components",
        slug: "earthing-components",
        image: "/images/products/electrical-electronics/earthing-components.png",
        imageAlt: "Brass earthing and lightning protection components",
      },
      {
        name: "Neutral Links",
        slug: "neutral-links",
        image: "/images/products/electrical-electronics/neutral-links.jpg",
        imageAlt: "Brass neutral link bars for electrical panels",
      },
    ],
    previewCount: 4,
  },
  {
    slug: "fittings",
    name: "Fittings",
    image: "/images/product_images/brass_fitting.jpg",
    imageAlt: "Brass pipe and plumbing fittings",
    description:
      "Precision-machined fittings for fluid, gas and industrial piping systems across compressor, electrofusion and forged applications.",
    subProducts: [
      {
        name: "Compressor Fittings",
        slug: "compressor-fittings",
        image: "/images/products/fittings/compressor-fittings.jpg",
        imageAlt: "Brass compressor pipe fittings",
      },
      {
        name: "Electrofusion Fittings",
        slug: "electrofusion-fittings",
        image: "/images/products/fittings/electrofusion-fittings.jpg",
        imageAlt: "Brass electrofusion pipe fittings — elbow, tee, coupling",
      },
      {
        name: "Hose Nipple Fittings",
        slug: "hose-nipple-fittings",
        image: "/images/products/fittings/hose-nipple-fittings.jpg",
        imageAlt: "Brass hose nipple and barb fittings",
      },
      {
        name: "Brass & Copper Forged Fittings",
        slug: "brass-copper-forged-fittings",
        image: "/images/products/fittings/brass-copper-forged-fittings.jpg",
        imageAlt: "Brass and copper forged pipe fittings",
      },
      {
        name: "CPVC PPR Fitting Inserts",
        slug: "cpvc-ppr-fitting-inserts",
        image: "/images/products/fittings/cpvc-ppr-fitting-inserts.jpg",
        imageAlt: "Brass CPVC and PPR pipe fitting inserts",
      },
    ],
    previewCount: 4,
  },
  {
    slug: "cnc-turned-parts",
    name: "CNC Turned Parts",
    image: "/images/product_images/cnc-turned-components.jpg",
    imageAlt: "CNC turned precision machined components",
    description:
      "Multi-axis CNC turned and milled components manufactured with tight dimensional control across brass, copper, aluminium and steel.",
    subProducts: [
      {
        name: "Aluminum CNC Turned Components",
        slug: "aluminum-cnc-turned",
        image: "/images/products/cnc-turned-parts/aluminum-cnc-turned.jpg",
        imageAlt: "Aluminum CNC turned precision components",
      },
      {
        name: "Multi-axis CNC Milled Components",
        slug: "multi-axis-cnc-milled",
        image: "/images/products/cnc-turned-parts/multi-axis-cnc-milled.jpg",
        imageAlt: "Multi-axis CNC milled precision machined parts",
      },
      {
        name: "Steel Turned Parts",
        slug: "steel-turned-parts",
        image: "/images/products/cnc-turned-parts/steel-turned-parts.jpg",
        imageAlt: "Steel CNC turned precision parts",
      },
      {
        name: "Copper Turned Parts",
        slug: "copper-turned-parts",
        image: "/images/products/cnc-turned-parts/copper-turned-parts.jpg",
        imageAlt: "Copper CNC turned precision components",
      },
      {
        name: "Brass CNC Turned Parts",
        slug: "brass-cnc-turned-parts",
        image: "/images/products/cnc-turned-parts/brass-cnc-turned-parts.jpg",
        imageAlt: "Brass CNC turned precision components",
      },
      {
        name: "CNC Sliding Head Components",
        slug: "cnc-sliding-head",
        image: "/images/products/cnc-turned-parts/cnc-sliding-head.jpg",
        imageAlt: "CNC sliding head high-precision turned components",
      },
    ],
    previewCount: 4,
  },
  {
    slug: "inserts",
    name: "Inserts",
    image: "/images/product_images/brass_inserts.jpg",
    imageAlt: "Brass and aluminium moulding inserts",
    description:
      "Threaded and knurled inserts for plastic moulding, PPR piping and composite assemblies in brass and aluminium.",
    subProducts: [
      {
        name: "PPR Inserts",
        slug: "ppr-inserts",
        image: "/images/products/inserts/ppr-inserts.jpg",
        imageAlt: "Brass PPR pipe fitting inserts",
      },
      {
        name: "Brass Moulding Inserts",
        slug: "brass-moulding-inserts",
        image: "/images/products/inserts/brass-moulding-inserts.jpg",
        imageAlt: "Brass knurled moulding inserts",
      },
      {
        name: "Hex Inserts",
        slug: "hex-inserts",
        image: "/images/products/inserts/hex-inserts.jpg",
        imageAlt: "Brass hex moulding inserts",
      },
      {
        name: "Aluminium Moulding Inserts",
        slug: "aluminium-moulding-inserts",
        image: "/images/products/inserts/aluminium-moulding-inserts.jpg",
        imageAlt: "Aluminium moulding inserts for plastic assemblies",
      },
    ],
    previewCount: 4,
  },
  {
    slug: "stamping-parts",
    name: "Stamping Parts",
    image: "/images/product_images/stamping_parts.jpg",
    imageAlt: "Precision stamped brass, copper and steel components",
    description:
      "Precision-stamped and pressed metal components in brass, copper and steel for a broad range of industrial assemblies.",
    subProducts: [
      {
        name: "Washer",
        slug: "washer",
        image: "/images/products/stamping-parts/washer.jpg",
        imageAlt: "Precision stamped metal washers",
      },
      {
        name: "Steel Stampings",
        slug: "steel-stampings",
        image: "/images/products/stamping-parts/steel-stampings.jpg",
        imageAlt: "Precision steel stamped components",
      },
      {
        name: "Copper Stampings",
        slug: "copper-stampings",
        image: "/images/products/stamping-parts/copper-stampings.jpg",
        imageAlt: "Precision copper stamped components",
      },
      {
        name: "Brass Stampings",
        slug: "brass-stampings",
        image: "/images/products/stamping-parts/brass-stampings.jpg",
        imageAlt: "Precision brass stamped components",
      },
    ],
    previewCount: 4,
  },
  {
    slug: "fasteners-fixings",
    name: "Fasteners & Fixings",
    image: "/images/product_images/brass_fasteners_fixings.jpg",
    imageAlt: "Brass nuts, bolts, anchors, washers and screws",
    description:
      "Corrosion-resistant precision fasteners and fixings in brass for structural, electrical and industrial joining applications.",
    subProducts: [
      {
        name: "Brass Anchors (Drop-in, Wedge, Expansion)",
        slug: "brass-anchors",
        image: "/images/products/fasteners-fixings/brass-anchors.jpg",
        imageAlt: "Brass drop-in, wedge and expansion anchors",
      },
      {
        name: "Washers",
        slug: "washers",
        image: "/images/products/fasteners-fixings/washers.jpg",
        imageAlt: "Brass precision washers",
      },
      {
        name: "Screws",
        slug: "screws",
        image: "/images/products/fasteners-fixings/screws.jpg",
        imageAlt: "Brass precision screws",
      },
      {
        name: "Nut Bolts",
        slug: "nut-bolts",
        image: "/images/products/fasteners-fixings/nut-bolts.jpg",
        imageAlt: "Brass nut and bolt fasteners",
      },
    ],
    previewCount: 4,
  },
  {
    slug: "high-precision-components",
    name: "High Precision Components",
    image: "/images/product_images/high_precision_components.jpg",
    imageAlt: "High precision small machined brass and metal components",
    description:
      "Small high-precision machined components for appliance, medical, gas and automotive applications.",
    subProducts: [
      {
        name: "Heater & Geyser Parts",
        slug: "heater-geyser-parts",
        image: "/images/products/high-precision-components/heater-geyser-parts.jpg",
        imageAlt: "High precision brass parts for heaters and geysers",
      },
      {
        name: "Lead Free Brass Medical Parts",
        slug: "lead-free-brass-medical-parts",
        image: "/images/products/high-precision-components/lead-free-brass-medical-parts.jpg",
        imageAlt: "Lead-free brass precision medical components",
      },
      {
        name: "Gas Fittings",
        slug: "gas-fittings",
        image: "/images/products/high-precision-components/gas-fittings.jpg",
        imageAlt: "High precision brass gas fittings",
      },
      {
        name: "Auto Parts",
        slug: "auto-parts",
        image: "/images/products/high-precision-components/auto-parts.jpg",
        imageAlt: "High precision brass automotive components",
      },
    ],
    previewCount: 4,
  },
  {
    slug: "copper-bronze-gunmetal",
    name: "Copper, Bronze & Gunmetal Components",
    image: "/images/product_images/copper_bronze_gunmetal.jpg",
    imageAlt: "Copper, bronze and gunmetal machined components",
    description:
      "Non-ferrous specialty alloy components offering high electrical conductivity, thermal performance and seawater corrosion resistance.",
    subProducts: [
      {
        name: "Gunmetal Components",
        slug: "gunmetal-components",
        image: "/images/products/copper-bronze-gunmetal/gunmetal-components.jpg",
        imageAlt: "Precision machined gunmetal components",
      },
      {
        name: "Copper Components",
        slug: "copper-components",
        image: "/images/products/copper-bronze-gunmetal/copper-components.jpg",
        imageAlt: "Precision machined copper components",
      },
      {
        name: "Bronze Components",
        slug: "bronze-components",
        image: "/images/products/copper-bronze-gunmetal/bronze-components.jpg",
        imageAlt: "Precision machined bronze components",
      },
    ],
    previewCount: 3,
  },
];

/** Map slug → category for O(1) lookup */
export const CATALOGUE_MAP: Record<string, ProductCategory> = Object.fromEntries(
  PRODUCT_CATALOGUE.map((c) => [c.slug, c])
);

/** Mega-menu column layout (4 columns, 2 categories each) */
export const MEGA_MENU_COLUMNS: ProductCategory[][] = [
  [PRODUCT_CATALOGUE[0], PRODUCT_CATALOGUE[1]],   // Electrical & Electronics, Fittings
  [PRODUCT_CATALOGUE[2], PRODUCT_CATALOGUE[3]],   // CNC Turned Parts, Inserts
  [PRODUCT_CATALOGUE[4], PRODUCT_CATALOGUE[5]],   // Stamping Parts, Fasteners & Fixings
  [PRODUCT_CATALOGUE[6], PRODUCT_CATALOGUE[7]],   // High Precision, Copper/Bronze/Gunmetal
];
