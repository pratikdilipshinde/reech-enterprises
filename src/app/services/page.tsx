import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";
import styles from "@/components/sections/pages/ContentSection.module.css";

export default function ServicesPage() {
  return (
    <main>
      <PageHeader title="Services" description="Explore clean energy services designed for homes, businesses, solar owners, and long-term support." />
      <section className="section-padding section-light">
        <div className="container">
          <SectionTitle eyebrow="Our Services" title="Smart solar service designed for homes & businesses" align="center" />
          <div className={styles.grid}>{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        </div>
      </section>
    </main>
  );
}
