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
  // { label: "Home", href: "/" },
  // { label: "About Us", href: "/about-us" },
  { 
    label: "Solar Services", 
    href: "/services",
    children: [
      { label: "Solar Installation", href: "/services/solar-battery-storage" },
      { label: "Solar Expansion", href: "/services/solar-battery-storage" },
      { label: "Ground-Mounted Solar", href: "/services/solar-battery-storage" },
      { label: "Solar Patios & Carports", href: "/services/solar-battery-storage" },
    ],
  },
  { 
    label: "Battery & Energy", 
    href: "/services",
    children: [
      { label: "Battery Backup & Energy Storage", href: "/services/solar-battery-storage" },
      { label: "Tesla Powerwall", href: "/services/solar-battery-storage" },
      { label: "Enphase IQ Battery", href: "/services/solar-battery-storage" },
      { label: "SolarEdge Home Battery", href: "/services/solar-battery-storage" },
    ],
  },
  { 
    label: "Roofing", 
    href: "/services",
    children: [
      { label: "Roofing Services", href: "/services/solar-battery-storage" },
      { label: "Solar Removal & Reinstallation", href: "/services/solar-battery-storage" },
    ],
  },
  { 
    label: "Maintenance Plans", 
    href: "/services",
    children: [
      { label: "Solar Maintenance Plan", href: "/services/solar-battery-storage" },
      { label: "Solar Repair & Diagnostics", href: "/services/solar-battery-storage" },
      { label: "Solar Panel Cleaning", href: "/services/solar-battery-storage" },
      { label: "Orphaned Solar System Support", href: "/services/solar-battery-storage" },
    ],
  },
  { 
    label: "Real Estate & ADU", 
    href: "/services",
    children: [
      { label: "ADU & Title 24 Solar", href: "/services/solar-battery-storage" },
      { label: "Realtor & Home Sale Solar Reports", href: "/services/solar-battery-storage" },
    ],
  },
  // { label: "Blogs", href: "/blog" },
  // {
  //   label: "Pages",
  //   href: "#",
  //   children: [
  //     { label: "Service Details", href: "/services/solar-battery-storage" },
  //     { label: "Blog Details", href: "/blog/complete-guide-to-solar-energy-for-homeowners" },
  //     { label: "Projects", href: "/projects" },
  //     { label: "Our Team", href: "/our-team" },
  //     { label: "Pricing Plans", href: "/pricing-plans" },
  //     { label: "Testimonials", href: "/testimonials" },
  //     { label: "Image Gallery", href: "/image-gallery" },
  //     { label: "Video Gallery", href: "/video-gallery" },
  //     { label: "FAQs", href: "/faqs" },
  //   ],
  // },
  // { label: "Contact Us", href: "/contact-us" },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years Of Experience" },
  { value: 2000, suffix: "+", label: "Reviews" },
  { value: 4200, suffix: "+", label: "Happy Customers" },
  { value: 3000, suffix: "+", label: "Solar Installations" },
];

export const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing Plans", href: "/pricing-plans" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];
