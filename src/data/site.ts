export const siteConfig = {
  name: "Reech Solar Enterprises",
  logoAlt: "Reech Solar Enterprises",
  phone: "+(123) 456-789",
  email: "support@reechsolarenterprises.com",
  address: "Southern California",
  social: [
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "TikTok", href: "#", icon: "tiktok" },
  ],
};

export const navItems = [
  {
    label: "Solar Services",
    href: "#",
    children: [
      { label: "Solar Installation", href: "/services/solar-installation" },
      { label: "Solar Expansion", href: "/services/solar-system-expansions" },
      {
        label: "Ground-Mounted Solar",
        href: "/services/ground-mounted-solar-systems",
      },
      {
        label: "Solar Patios & Carports",
        href: "/services/solar-patios-carports",
      },
    ],
  },
  {
    label: "Battery & Energy",
    href: "#",
    children: [
      {
        label: "Battery Backup & Energy Storage",
        href: "/services/battery-backup-energy-storage",
      },
      {
        label: "Tesla Powerwall",
        href: "/services/battery-backup-energy-storage#tesla-powerwall",
      },
      {
        label: "Enphase IQ Battery",
        href: "/services/battery-backup-energy-storage#enphase-iq-battery",
      },
      {
        label: "SolarEdge Home Battery",
        href: "/services/battery-backup-energy-storage#solaredge-home-battery",
      },
    ],
  },
  {
    label: "Roofing",
    href: "#",
    children: [
      { label: "Roofing Services", href: "/services/roofing-services" },
      {
        label: "Solar Removal & Reinstallation",
        href: "/services/solar-removal-reinstallation",
      },
    ],
  },
  {
    label: "Maintenance Plans",
    href: "#",
    children: [
      {
        label: "Solar Maintenance Plan",
        href: "/services/reech-solar-maintenance-plan",
      },
      {
        label: "Solar Repair & Diagnostics",
        href: "/services/solar-repair-diagnostics",
      },
      {
        label: "Solar Panel Cleaning",
        href: "/services/solar-panel-cleaning",
      },
      {
        label: "Orphaned Solar System Support",
        href: "/services/orphaned-solar-system-support",
      },
    ],
  },
  {
    label: "Real Estate & ADU",
    href: "#",
    children: [
      { label: "ADU & Title 24 Solar", href: "/services/adu-title-24-solar" },
      {
        label: "Realtor & Home Sale Solar Reports",
        href: "/services/realtor-home-sale-solar-reports",
      },
    ],
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years Of Experience" },
  { value: 13, suffix: "+", label: "Service Categories" },
  { value: 4, suffix: "", label: "Maintenance Plans" },
  { value: 100, suffix: "%", label: "Lifecycle Solar Support" },
];

export const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "All Services", href: "/services" },
  { label: "Solar Installation", href: "/services/solar-installation" },
  {
    label: "Battery Backup",
    href: "/services/battery-backup-energy-storage",
  },
  { label: "Roofing Services", href: "/services/roofing-services" },
  {
    label: "Maintenance Plans",
    href: "/services/reech-solar-maintenance-plan",
  },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];