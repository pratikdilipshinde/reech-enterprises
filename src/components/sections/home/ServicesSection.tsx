import Link from "next/link";
import ServiceCard from "@/components/cards/ServiceCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const homeServices = services.filter((service) =>
    [
      "solar-installation",
      "roofing-services",
      "reech-solar-maintenance-plan",
    ].includes(service.slug)
  );

  return (
    <section className={`${styles.section} section-padding section-light`}>
      <div className="container">
        <div className={styles.header}>
          <SectionTitle
            eyebrow="Our Services"
            title="Solar, roofing, and maintenance for every stage"
          />

          <Link href="/services" className="theme-btn" data-animate="fade-up">
            <span>↗</span>
            <span>View All Services</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {homeServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}