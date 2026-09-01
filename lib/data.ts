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
  standard?: string;
  authority: string;
  number: string;
  scope?: string;
  description: string;
  image?: string;
  badge?: string;
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
    label: "Machinery Fleet",
    description: "Advanced CNC turning centers, automatic Traub lathes, multi-axis threading & milling"
  },
  {
    value: "ISO 9001:2015",
    label: "Certified Quality",
    description: "Comprehensive quality management system with PPAP Level III & RoHS compliance"
  }
];

export const capabilities: CapabilityItem[] = [
  {
    id: "cnc-machining",
    title: "Precision CNC & Sliding-Head Turning",
    description: "High-precision turning for intricate geometries and micro-tolerances up to ±0.01 mm",
    details: [
      "Multi-axis CNC turning centers and automated sliding-head machines",
      "Machining diameters from 2 mm to 100 mm",
      "Consistent repeatability for tight-tolerance OEM applications",
      "Automated cycle monitoring and tool-wear compensation"
    ],
    image: "/images/cnc-turned-parts.jpg",
  },
  {
    id: "automatic-turning",
    title: "High-Volume Automatic Lathe Machining",
    description: "Dedicated Traub and automatic lathe cells delivering high-speed component manufacturing",
    details: [
      "60+ automatic lathe units for mass-market component runs",
      "Rapid throughput for inserts, fasteners, and standard terminals",
      "Cost-optimized machining for electrical and plastic molding parts",
      "Continuous bar feeding systems for 24/7 uptime"
    ],
    image: "/images/factory-floor.jpg",
  },
  {
    id: "extrusion-casting",
    title: "In-House Raw Material & Extrusion",
    description: "Full metallurgical control through controlled alloy extrusion and precision bar formulation",
    details: [
      "Custom alloy formulation matching IS, BS, DIN, ASTM, and JIS standards",
      "Round, hex, square, and specialized profile extrusion bars",
      "100% chemical composition verification via optical spectrometer",
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
    image: "/images/brass-forging.jpg",
  },
  {
    id: "metrology-inspection",
    title: "Advanced Metrology & Quality Inspection",
    description: "Comprehensive testing infrastructure utilizing advanced inspection devices to uphold defect prevention and rigorous quality standards",
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
    image: "/images/product_images/brass_cable_glands_accessories.jpg"
  },
  {
    id: "brass-fasteners-inserts",
    title: "Industrial Fasteners & Threaded Inserts",
    category: "Fasteners",
    description: "Threaded inserts for plastics, knurled nuts, custom screws, hex bolts, studs, and custom washers",
    features: ["Deep knurling for strong pull-out resistance", "Precision UNC/UNF/Metric threads", "Vibration resistant fits"],
    materials: ["Brass CZ 121", "Copper", "Silicon Bronze"],
    image: "/images/product_images/brass_fasteners_fixings.jpg"
  },
  {
    id: "plumbing-sanitary-fittings",
    title: "Plumbing & Sanitary Fittings",
    category: "Sanitary",
    description: "High-grade brass pipe fittings, CP brass fittings, hose nipples, compression fittings, and adapters",
    features: ["Leak-proof threading", "Hydrostatic pressure tested", "High temperature resistance"],
    materials: ["Forging Brass", "High Tensile Brass", "DZR Brass"],
    image: "/images/product_images/brass_fitting.jpg"
  },
  {
    id: "cable-glands-accessories",
    title: "Cable Glands & Wiring Accessories",
    category: "Cable Accessories",
    description: "Industrial brass cable glands, PG/Metric threads, lock nuts, earth tags, and reducers",
    features: ["IP66/IP68 ingress protection rating ready", "Corrosion resistant plating", "High tensile strength"],
    materials: ["Brass IS 319 Grade 1", "CuZn39Pb3", "CW614N"],
    image: "/images/product_images/brass_cable_glands_accessories.jpg"
  },
  {
    id: "custom-cnc-components",
    title: "Custom Machined & CNC Turned Parts",
    category: "Precision Engineering",
    description: "Bespoke precision components manufactured to tight tolerances from customer blueprints and samples",
    features: ["Tolerances up to ±0.01 mm", "Complex geometries", "Surface finish Ra 0.4"],
    materials: ["Brass", "Copper", "Bronze", "Gunmetal"],
    image: "/images/product_images/cnc-turned-components.jpg"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "ISO 9001:2015 Registration",
    standard: "ISO 9001:2015",
    authority: "TNV Certification UK Ltd. (AB-CAB Accredited)",
    number: "Certificate No: 1902260910113",
    scope: "Manufacture and Supply of Precision Brass and Copper Electric Component",
    description: "Certified Quality Management System demonstrating rigorous process controls, stage-wise inspections, and traceable manufacturing standards.",
    image: "/images/certificate_images/iso.png",
    badge: "ISO 9001:2015"
  },
  {
    title: "RoHS Compliance Directive",
    standard: "EU Directive 2011/65/EU",
    authority: "Material Composition Verification & MTR Compliance",
    number: "Hazardous Substance Limits Adherence",
    scope: "All precision brass, copper, and bronze product lines",
    description: "Strict restriction of hazardous substances across raw material alloys ensuring export-compliant formulation for electronics and automotive OEMs.",
    image: "/images/certificate_images/rohs.png",
    badge: "RoHS Compliant"
  },
  {
    title: "UDYAM Registration Certificate",
    standard: "Govt. of India MSME Recognition",
    authority: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    number: "National Industry Classification: Non-Ferrous Metal Manufacturing",
    scope: "Manufacturing of copper, brass, and non-ferrous precision components",
    description: "Registered Indian manufacturing enterprise under the Ministry of MSME, adhering to national manufacturing and statutory governance norms.",
    image: "/images/certificate_images/msme.png",
    badge: "UDYAM (MSME)"
  },
  {
    title: "Health, Safety & Environment / PPAP Support",
    standard: "Floor-Level Policy & AIAG PPAP Level III",
    authority: "In-House Quality Metrology & Engineering Lab",
    number: "PSW, Control Plan & Dimensional Reports",
    scope: "Automotive, electrical, and custom OEM product batches",
    description: "Employee awareness programmes, hazard training, comprehensive initial sample inspection reporting (ISIR), and master sample retention.",
    image: "/images/certificate_images/hse.png",
    badge: "HSE & PPAP"
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
  { name: "Godrej", industry: "Appliances & Security", logo: "/images/clients/godrej.png" },
  { name: "Panasonic", industry: "Electronics & Systems", logo: "/images/clients/panasonic.png" },
  { name: "GreatWhite", industry: "Electrical & Switchgear", logo: "/images/clients/greatwhite.png" },
  { name: "Imperial Auto", industry: "Automotive Systems", logo: "/images/clients/imperial-auto.png" },
  { name: "ELCOM", industry: "Electromechanical", logo: "/images/clients/elcom.png" },
  { name: "Supreme", industry: "Piping & Polymers", logo: "/images/clients/supreme.png" },
  { name: "Bentlay Fittings", industry: "Plumbing & Sanitary", logo: "/images/clients/bentlay.png" },
  { name: "APTIV", industry: "Automotive Architecture", logo: "/images/clients/aptiv.png" },
  { name: "Georg Fischer (+GF+)", industry: "Industrial Piping", logo: "/images/clients/georg-fischer.png" },
  { name: "CAHORS", industry: "Energy & Telecom", logo: "/images/clients/cahors.png" },
  { name: "DHOOT Automotive", industry: "Automotive Wiring", logo: "/images/clients/dhoot.png" },
  { name: "ALWASAIL", industry: "Industrial Piping", logo: "/images/clients/alwasail.png" },
  { name: "BROTHERS Plast Tech", industry: "Plastic Moulding", logo: "/images/clients/brothers.png" }
];
