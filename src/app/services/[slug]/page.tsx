import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { services } from "@/data/services";
import styles from "@/components/sections/pages/ContentSection.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <PageHeader title={service.title} description={service.shortDescription} />
      <section className="section-padding">
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.imageCard}><Image src={service.image} alt={service.title} width={760} height={520} /></div>
          <div className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          </div>
        </div>
      </section>
    </main>
  );
}
