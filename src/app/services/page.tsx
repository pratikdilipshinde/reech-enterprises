import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";
import styles from "@/components/sections/pages/ContentSection.module.css";

export const metadata = {
  title: "Solar, Roofing, Battery & Maintenance Services | Reech Solar Enterprises",
  description:
    "Explore Reech Solar Enterprises services including solar installation, solar expansions, battery backup, roofing, solar repair, panel cleaning, maintenance plans, ADU solar, and solar property reports.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Our Services"
        description="Complete solar, roofing, battery, maintenance, and energy support for Southern California homeowners."
      />

      <section className="section-padding section-light">
        <div className="container">
          <SectionTitle
            eyebrow="Reech Services"
            title="Complete solar ownership support"
            align="center"
          />

          <div className={styles.grid}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}