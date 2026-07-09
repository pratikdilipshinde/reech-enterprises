import Image from "next/image";
import { stats } from "@/data/site";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./FunFactsSection.module.css";

export default function FunFactsSection() {
  return (
    <section className={`${styles.section} section-padding section-dark`}>
      <div className={`container ${styles.grid}`}>
        <div><SectionTitle eyebrow="Our Fun Facts" title="Measurable success in solar energy solutions" light />
          <div className={styles.stats}>{stats.slice(1).map((stat) => <article key={stat.label} data-animate="fade-up"><h3><span data-counter={stat.value}>0</span>{stat.suffix}</h3><p>{stat.label}</p></article>)}</div>
        </div>
        <div className={`${styles.image} at-shiny-glass-effect`} data-animate="fade-up"><Image src="/images/our-fun-fact-image.jpg" alt="Solar success" width={560} height={530} /></div>
      </div>
    </section>
  );
}
