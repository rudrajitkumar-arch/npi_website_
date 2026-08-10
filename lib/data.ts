export interface NavItem {
  name: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  image: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  materials: string[];
  image: string;
}

export interface CertificationItem {
  title: string;
  authority: string;
  number: string;
  description: string;
  image: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Products", href: "/products" },
  { name: "Quality", href: "/quality" },
  { name: "Industries", href: "/industries" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Clients", href: "/clients" },
  { name: "Contact", href: "/contact" },
];

export const companyStats: StatItem[] = [
  {
    value: "2007",
    label: "Established Year",
    description: "Nearly two decades of manufacturing excellence in Jamnagar",
  },
  {
    value: "50,000 Sq Ft",
    label: "Facility Area",
    description: "State-of-the-art production, testing, and storage space",
  },
  {
    value: "110+",
    label: "Machinery Units",
    description: "Advanced CNC, VMC, automatic lathe, and threading machinery",
  },
  {
    value: "100%",
    label: "RoHS & ISO Compliant",
    description: "Adhering strictly to green and quality standards globally",
  },
];

export const capabilities: CapabilityItem[] = [
  {
    id: "cnc-machining",
    title: "Precision CNC Machining",
    description: "High-speed CNC and VMC machines producing tight-tolerance components up to +/- 0.01 mm accuracy",
    details: [
      "Multi-axis turning and milling centers",
      "Automatic bar feeding for continuous production",
      "Custom components matching strict engineering drawings",
      "Tolerance control down to micron levels"
    ],
    image: "/images/cnc-machine.jpg",
  },
  {
    id: "brass-extrusion",
    title: "Brass Extrusion & Casting",
    description: "In-house brass melting, extrusion, and drawing to manufacture custom profiles and brass rods",
    details: [
      "Custom brass grades (IS 319, CZ 121, CZ 122, Lead-Free Brass)",
      "Varying profiles (Round, Hexagonal, Square, Custom Sections)",
      "Strict chemical analysis using spectrometer",
      "Stress relief annealing capabilities"
    ],
    image: "/images/raw-material.jpg",
  },
  {
    id: "hot-forging",
    title: "Hot Forging & Pressing",
    description: "Precision hot forging and stampings for robust, leak-proof components required in gas and high-pressure valves",
    details: [
      "Friction screw presses for high-density structural output",
      "Complex geometric forged components",
      "Saves raw material and enhances grain structure alignment",
      "Post-forging finishing and custom shot blasting"
    ],
    image: "/images/factory-floor.jpg",
  },
  {
    id: "metrology-inspection",
    title: "Advanced Metrology & Quality Inspection",
    description: "Comprehensive testing infrastructure utilizing advanced inspection devices to ensure 100% defect-free dispatches",
    details: [
      "Digital profile projectors and salt spray testing chambers",
      "Verniers, thread ring gauges, plug gauges, and micrometer sets",
      "Chemical composition verification via spectrometer",
      "PPAP documentation and material test reports (MTR)"
    ],
    image: "/images/inspection.jpg",
  }
];

export const products: ProductItem[] = [
  {
    id: "brass-electrical-parts",
    title: "Electrical & Electronics Components",
    category: "Electrical",
    description: "Premium electrical brass accessories, neutral links, earth bars, terminal blocks, pins, and socket contacts",
    features: ["Excellent conductivity", "Corrosion resistance", "Thread precision"],
    materials: ["Free Cutting Brass IS 319", "High Grade Copper", "Lead Free Brass"],
    image: "/images/brass-components.jpg"
  },
  {
    id: "brass-fasteners-inserts",
    title: "Industrial Fasteners & Threaded Inserts",
    category: "Fasteners",
    description: "Threaded inserts for plastics, knurled nuts, custom screws, hex bolts, studs, and custom washers",
    features: ["Deep knurling for strong pull-out resistance", "Precision UNC/UNF/Metric threads", "Vibration resistant fits"],
    materials: ["Brass CZ 121", "Copper", "Silicon Bronze"],
    image: "/images/product-portfolio.jpg"
  },
  {
    id: "plumbing-sanitary-fittings",
    title: "Plumbing & Sanitary Fittings",
    category: "Plumbing",
    description: "High-grade brass pipe fittings, hose barbs, compression unions, coupling bodies, adapter elbows, and T-joints",
    features: ["Leak-proof pressure tested threads", "RoHS compliant lead-free grades available", "Smooth internal surface finishes"],
    materials: ["Lead-Free Brass", "Forging Brass CZ 122", "Red Brass"],
    image: "/images/shop-floor.jpg"
  },
  {
    id: "automotive-gas-valves",
    title: "Automotive & Gas/CNG/LPG Components",
    category: "Automotive / Gas",
    description: "Safety valves, flare nuts, fuel connectors, non-return valves, and customized CNC turned components for high-pressure gaseous lines",
    features: ["Extreme pressure durability", "Microscopic visual inspection", "Zero leakage assurance"],
    materials: ["High Tensile Brass", "Forge-grade Brass", "Free Cutting Brass CZ 131"],
    image: "/images/cnc-machine.jpg"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "ISO 9001:2015 Certified",
    authority: "TUV / Absolute Quality Certifications",
    number: "Certificate No: Q-18090712",
    description: "Quality management system demonstrating consistent production standards and continuous customer satisfaction processes",
    image: "/images/certification-iso.jpg"
  },
  {
    title: "RoHS Compliant",
    authority: "SGS / Directive 2011/65/EU",
    number: "Lead & Hazardous Substance Limits",
    description: "Assurance that all manufactured copper and brass products adhere strictly to hazardous substance limitation guidelines",
    image: "/images/certification-iso.jpg"
  },
  {
    title: "UDYAM Registered",
    authority: "Ministry of MSME, Govt. of India",
    number: "Registration No: UDYAM-GJ-15-XXXXXXX",
    description: "Registered enterprise under the Government of India supporting standard corporate operations and credit compliance policies",
    image: "/images/certification-iso.jpg"
  }
];

export const industries: IndustryItem[] = [
  {
    id: "electrical-electronics",
    title: "Electrical & Power Transmission",
    description: "Providing high-conductivity contacts, custom terminals, and switchgear components supporting global grid standards",
    icon: "electrical",
    image: "/images/brass-components.jpg"
  },
  {
    id: "automotive-aerospace",
    title: "Automotive & Aerospace",
    description: "Supplying high-tolerance fuel connectors, fasteners, and sensor housings built for demanding conditions",
    icon: "automotive",
    image: "/images/cnc-machine.jpg"
  },
  {
    id: "plumbing-sanitary",
    title: "Plumbing, HVAC & Sanitary",
    description: "Leak-proof compression fittings, adapters, valves, and water meters manufactured from lead-free brass alloys",
    icon: "plumbing",
    image: "/images/shop-floor.jpg"
  },
  {
    id: "gas-lpg-cng",
    title: "Gas, LPG & CNG Valve Systems",
    description: "High-density forged valve parts, nozzle injectors, and adaptors engineered for zero-leak gaseous applications",
    icon: "gas",
    image: "/images/factory-floor.jpg"
  },
  {
    id: "marine-naval",
    title: "Marine & Heavy Fasteners",
    description: "Corrosion-resistant naval brass fasteners and marine components built to withstand harsh saltwater environments",
    icon: "marine",
    image: "/images/raw-material.jpg"
  },
  {
    id: "medical-precision",
    title: "Medical & Instrumentation",
    description: "Delivering micro-machined brass components with surgical-grade precision and meticulous surface treatments",
    icon: "medical",
    image: "/images/inspection.jpg"
  }
];

export const clientLogos = [
  { name: "Alpha Power Systems", industry: "Electrical" },
  { name: "Apex Auto Industries", industry: "Automotive" },
  { name: "Fluidics Valves Europe", industry: "Plumbing/Sanitary" },
  { name: "G-Tec Gas Controls", industry: "Gas/CNG" },
  { name: "Maritime Solutions Corp", industry: "Marine" },
  { name: "Precision Instruments LLC", industry: "Medical/Tech" }
];
