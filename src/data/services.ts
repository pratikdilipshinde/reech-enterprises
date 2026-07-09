export type ServiceCategory =
  | "solar-services"
  | "battery-energy"
  | "roofing"
  | "maintenance-plans"
  | "real-estate-adu";

export type Service = {
  title: string;
  slug: string;
  category: ServiceCategory;
  image: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  cta: string;
};

export const services: Service[] = [
  {
    title: "Solar Installation",
    slug: "solar-installation",
    category: "solar-services",
    image: "/images/service1.png",
    shortDescription:
      "Custom residential solar systems designed to reduce utility costs and improve long-term energy savings.",
    description:
      "Reech provides consultation, design, engineering coordination, permitting support, installation, inspection coordination, and utility interconnection for residential solar energy systems.",
    benefits: [
      "Lower utility bills",
      "Predictable energy costs",
      "Increased property value",
      "Renewable energy production",
    ],
    cta: "Get My Solar Savings Report",
  },
  {
    title: "Solar System Expansions",
    slug: "solar-system-expansions",
    category: "solar-services",
    image: "/images/service2.png",
    shortDescription:
      "Supplemental solar systems for homeowners whose energy usage has increased over time.",
    description:
      "Many homeowners installed solar years ago and now use more electricity due to EVs, home additions, ADUs, pools, larger families, or battery charging needs. Reech evaluates existing systems and designs expansions to meet increased demand.",
    benefits: [
      "Additional energy production",
      "Better utility bill offset",
      "Increased energy independence",
    ],
    cta: "Expand My Solar System",
  },
  {
    title: "Ground-Mounted Solar Systems",
    slug: "ground-mounted-solar-systems",
    category: "solar-services",
    image: "/images/service3.png",
    shortDescription:
      "Ground-mounted solar solutions for large lots, rural properties, ranches, and agricultural sites.",
    description:
      "Ground-mounted solar systems are installed on open land instead of rooftops, allowing flexible placement, easier maintenance, optimal orientation, and future expansion options.",
    benefits: [
      "Easier maintenance",
      "Optimal solar orientation",
      "Expandable system design",
    ],
    cta: "Request Ground Mount Assessment",
  },
  {
    title: "Solar Patios & Carports",
    slug: "solar-patios-carports",
    category: "solar-services",
    image: "/images/service4.png",
    shortDescription:
      "Custom solar structures that provide shade while generating clean electricity.",
    description:
      "Reech designs solar patios, pergolas, patio covers, carports, RV parking structures, pool-area solar covers, and outdoor solar structures that combine comfort, utility, and energy production.",
    benefits: [
      "Outdoor comfort",
      "Clean energy production",
      "Increased property value",
    ],
    cta: "Design My Solar Patio",
  },
  {
    title: "Battery Backup & Energy Storage",
    slug: "battery-backup-energy-storage",
    category: "battery-energy",
    image: "/images/service5.png",
    shortDescription:
      "Battery storage solutions for backup power, nighttime usage, and utility peak-rate savings.",
    description:
      "Battery systems store excess solar energy for use during outages, nighttime consumption, and utility peak-rate periods. Reech supports Tesla Powerwall, Enphase IQ Battery, and SolarEdge Home Battery platforms.",
    benefits: [
      "Backup power",
      "Grid independence",
      "Time-of-use savings",
      "Protection from outages",
    ],
    cta: "Request Battery Consultation",
  },
  {
    title: "Roofing Services",
    slug: "roofing-services",
    category: "roofing",
    image: "/images/service6.png",
    shortDescription:
      "Roofing solutions that protect your home and support long-term solar system performance.",
    description:
      "Reech provides roof replacement, roof repairs, flat roofing, torch-down roofing, tile roof underlayment replacement, fascia replacement, and decking replacement.",
    benefits: [
      "Prevent leaks",
      "Extend roof life",
      "Prepare for solar installation",
      "Protect solar investment",
    ],
    cta: "Request Roofing Estimate",
  },
  {
    title: "Solar Removal & Reinstallation",
    slug: "solar-removal-reinstallation",
    category: "roofing",
    image: "/images/service7.png",
    shortDescription:
      "Temporary solar system removal and reinstallation for roof replacement or major roof repairs.",
    description:
      "Reech removes solar equipment, coordinates safe storage, reinstalls the system after roof work, tests the system, and verifies performance after reinstallation.",
    benefits: [
      "One point of contact",
      "Reduced project delays",
      "Proper system restoration",
    ],
    cta: "Schedule Solar Removal & Reinstall",
  },
  {
    title: "Reech Solar Maintenance Plan",
    slug: "reech-solar-maintenance-plan",
    category: "maintenance-plans",
    image: "/images/service8.png",
    shortDescription:
      "Subscription-based monitoring and maintenance plans designed to protect your solar investment.",
    description:
      "The Reech Solar Maintenance Plan provides ongoing monitoring, performance alerts, inspections, cleanings, annual reports, priority support, and preferred service pricing based on the selected plan.",
    benefits: [
      "Monitoring enrollment",
      "Performance alerts",
      "Annual reviews",
      "Priority support",
      "Preferred service pricing",
    ],
    cta: "View Maintenance Plans",
  },
  {
    title: "Solar Repair & Diagnostics",
    slug: "solar-repair-diagnostics",
    category: "maintenance-plans",
    image: "/images/service9.png",
    shortDescription:
      "Professional troubleshooting for solar production loss, inverter issues, monitoring errors, and equipment faults.",
    description:
      "Reech evaluates existing solar systems through monitoring review, visual inspection, electrical inspection, production analysis, and a written findings report.",
    benefits: [
      "Monitoring review",
      "Electrical inspection",
      "Production analysis",
      "Written findings report",
    ],
    cta: "Book A Solar Diagnostic",
  },
  {
    title: "Solar Panel Cleaning",
    slug: "solar-panel-cleaning",
    category: "maintenance-plans",
    image: "/images/service10.png",
    shortDescription:
      "Professional panel cleaning to help maintain solar performance and system appearance.",
    description:
      "Reech provides solar panel cleaning, visual inspection, damage review, and performance recommendations to help homeowners maintain optimal solar system output.",
    benefits: [
      "Improved production",
      "Early issue detection",
      "Enhanced system appearance",
    ],
    cta: "Schedule Cleaning",
  },
  {
    title: "Orphaned Solar System Support",
    slug: "orphaned-solar-system-support",
    category: "maintenance-plans",
    image: "/images/service11.png",
    shortDescription:
      "Support for homeowners whose original solar installer is no longer available.",
    description:
      "Reech helps homeowners with orphaned solar systems by providing monitoring setup, diagnostics, repairs, warranty review, and long-term maintenance plan options.",
    benefits: [
      "Continued system support",
      "Long-term maintenance",
      "Professional oversight",
    ],
    cta: "Need Help With Your Existing Solar System?",
  },
  {
    title: "ADU & Title 24 Solar",
    slug: "adu-title-24-solar",
    category: "real-estate-adu",
    image: "/images/service12.png",
    shortDescription:
      "Solar compliance support for ADUs, additions, builders, contractors, and new construction projects.",
    description:
      "Reech provides Title 24 compliance support, ADU solar design, builder coordination, permit-ready documentation, and utility coordination for homeowners, builders, contractors, and developers.",
    benefits: [
      "Title 24 compliance",
      "Permit-ready documentation",
      "Builder and contractor support",
      "Utility coordination",
    ],
    cta: "Request ADU Solar Consultation",
  },
  {
    title: "Realtor & Home Sale Solar Reports",
    slug: "realtor-home-sale-solar-reports",
    category: "real-estate-adu",
    image: "/images/service13.png",
    shortDescription:
      "Professional solar property reports for homeowners, buyers, sellers, and real estate professionals.",
    description:
      "Reech prepares solar property reports that include system size, panel count, equipment identification, estimated production, estimated degradation, warranty review, roof observations, and monitoring status.",
    benefits: [
      "Increased buyer confidence",
      "Better solar documentation",
      "Easier property transactions",
    ],
    cta: "Order A Solar Property Report",
  },
];

export const serviceCategories: Record<
  ServiceCategory,
  {
    label: string;
    href: string;
  }
> = {
  "solar-services": {
    label: "Solar Services",
    href: "/services",
  },
  "battery-energy": {
    label: "Battery & Energy",
    href: "/services",
  },
  roofing: {
    label: "Roofing",
    href: "/services",
  },
  "maintenance-plans": {
    label: "Maintenance Plans",
    href: "/services",
  },
  "real-estate-adu": {
    label: "Real Estate & ADU",
    href: "/services",
  },
};