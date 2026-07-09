import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { processSteps } from "@/data/home";
import styles from "./ProcessSection.module.css";

export default function ProcessSection() {
  return (
    <section className={`${styles.section} section-padding section-light`}>
      <div className="container">
        <SectionTitle eyebrow="How It Works" title="Turning sunlight into savings in simple steps" align="center" />
        <div className={styles.grid}>{processSteps.map((step, index) => <article key={step.title} data-animate="fade-up"><div className={`${styles.image} at-shiny-glass-effect`}><Image src={step.image} alt={step.title} width={420} height={300} /></div><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
      </div>
    </section>
  );
}
