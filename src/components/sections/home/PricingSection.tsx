import Link from "next/link";
import { Check } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { pricingPlans } from "@/data/plans";
import styles from "./PricingSection.module.css";

export default function PricingSection() {
  return (
    <section className={`${styles.section} section-padding section-light`}>
      <div className="container">
        <SectionTitle
          eyebrow="Maintenance Plans"
          title="Protect your solar investment with Reech maintenance plans"
          align="center"
        />

        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <article
              key={plan.title}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
              data-animate="fade-up"
            >
              <h3>{plan.title}</h3>

              <div className={styles.price}>
                {plan.price}
                <span>{plan.period}</span>
              </div>

              <div className={styles.setupFee}>{plan.setupFee}</div>

              <h4>What&apos;s Included:</h4>

              {plan.features.map((feature) => (
                <p key={feature}>
                  <Check size={18} /> {feature}
                </p>
              ))}

              <Link href="/services/reech-solar-maintenance-plan" className="theme-btn">
                <span>↗</span>
                <span>Choose Plan</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}