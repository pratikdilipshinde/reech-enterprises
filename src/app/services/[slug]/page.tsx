import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";
import styles from "@/components/sections/pages/ContentSection.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Reech Solar Enterprises",
    };
  }

  return {
    title: `${service.title} | Reech Solar Enterprises`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const relatedServices = services
    .filter(
      (item) =>
        item.category === service.category && item.slug !== service.slug
    )
    .slice(0, 3);

  return (
    <main>
      <PageHeader
        title={service.title}
        description={service.shortDescription}
      />

      <section className="section-padding">
        <div className={`container ${styles.serviceDetailsGrid}`}>
          <div className={styles.imageCard}>
            <Image
              src={service.image}
              alt={service.title}
              width={760}
              height={520}
              priority
            />
          </div>

          <div className={styles.serviceContentCard}>
            <span className={styles.badge}>Reech Solar Service</span>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <div className={styles.benefitsList}>
              {service.benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link href="/contact-us" className="theme-btn">
              <span>↗</span>
              <span>{service.cta}</span>
            </Link>
          </div>
        </div>
      </section>

      {service.category === "solar-services" && (
        <section className="section-padding section-light">
          <div className="container">
            <div className={styles.platformIntro}>
              <span className={styles.badge}>Solar Services</span>
              <h2>Smart solar solutions designed around your property</h2>
              <p>
                Reech helps homeowners plan, design, expand, and optimize solar
                systems based on energy usage, roof or land conditions, lifestyle
                needs, and long-term savings goals.
              </p>
            </div>

            <div className={styles.solarFeatureGrid}>
              <article>
                <span>01</span>
                <h3>Custom System Planning</h3>
                <p>
                  Every solar project starts with a review of your energy usage,
                  property layout, utility goals, and future needs like EV charging,
                  ADUs, or battery storage.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Design & Engineering Support</h3>
                <p>
                  Reech coordinates solar design, engineering, permitting support,
                  inspection coordination, and utility interconnection requirements.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Flexible Solar Options</h3>
                <p>
                  From rooftop solar to ground-mounted systems, solar patios,
                  pergolas, and carports, Reech recommends solutions that fit your
                  property and energy goals.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Long-Term Energy Value</h3>
                <p>
                  Solar services are designed to help reduce utility costs, improve
                  energy independence, increase property value, and support renewable
                  energy production.
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      {service.slug === "battery-backup-energy-storage" && (
        <section className="section-padding section-light">
          <div className="container">
            <div className={styles.platformIntro}>
              <span className={styles.badge}>Battery Platforms</span>
              <h2>Battery systems supported by Reech</h2>
              <p>
                Reech supports trusted battery platforms for backup power,
                energy storage, peak-rate savings, and greater energy
                independence.
              </p>
            </div>

            <div className={styles.platformGrid}>
              <article id="tesla-powerwall">
                <h3>Tesla Powerwall</h3>
                <p>
                  Backup power and energy storage support for whole-home or
                  partial-home energy needs.
                </p>
              </article>

              <article id="enphase-iq-battery">
                <h3>Enphase IQ Battery</h3>
                <p>
                  Smart battery storage designed to work with Enphase solar
                  systems, monitoring, and energy management.
                </p>
              </article>

              <article id="solaredge-home-battery">
                <h3>SolarEdge Home Battery</h3>
                <p>
                  Energy storage solutions integrated with SolarEdge inverters,
                  optimizers, monitoring, and backup systems.
                </p>
              </article>
            </div>
          </div>
        </section>
      )}

      {service.slug === "reech-solar-maintenance-plan" && (
        <section className="section-padding section-light">
          <div className="container">
            <div className={styles.platformIntro}>
              <span className={styles.badge}>RSMP Plans</span>
              <h2>Choose the right maintenance plan</h2>
              <p>
                Reech Solar Maintenance Plan helps protect your solar investment
                with monitoring, alerts, inspections, cleanings, reports, and
                priority support.
              </p>
            </div>

            <div className={styles.platformGrid}>
              <article>
                <h3>RSMP Basic</h3>
                <p>$9.99/month — Monitoring enrollment, performance alerts,
                  annual virtual review, preferred service pricing, and priority
                  support.</p>
              </article>

              <article>
                <h3>RSMP Essential</h3>
                <p>$49.99/month — Everything in Basic, one annual cleaning,
                  annual inspection, annual report, priority scheduling, and 20%
                  discount on future solar and roofing work.</p>
              </article>

              <article>
                <h3>RSMP Preferred</h3>
                <p>$59.99/month — Everything in Essential plus two annual
                  cleanings.</p>
              </article>

              <article>
                <h3>RSMP Premium</h3>
                <p>$69.99/month — Everything in Preferred plus battery
                  inspection, battery health report, and energy storage review.</p>
              </article>
            </div>

            <p className={styles.note}>
              Enrollment fee: $299 one-time setup fee.
            </p>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="section-padding section-light">
          <div className="container">
            <div className={styles.relatedHeader}>
              <span className={styles.badge}>Related Services</span>
              <h2>Explore similar Reech services</h2>
            </div>

            <div className={styles.grid}>
              {relatedServices.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>

            <div className={styles.centerAction}>
              <Link href="/services" className="theme-btn">
                <ArrowUpRight size={18} />
                <span>View All Services</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}