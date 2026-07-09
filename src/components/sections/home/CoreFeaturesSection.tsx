import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { coreFeatures } from "@/data/home";
import styles from "./CoreFeaturesSection.module.css";

export default function CoreFeaturesSection() {
  return (
    <section className={`${styles.section} section-padding`}>
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionTitle eyebrow="Our Core Features" title="Innovative solar feature with real environmental impact" />
          <div className={styles.features}>{coreFeatures.map((item) => <article key={item.number} data-animate="fade-up"><h2>{item.number}</h2><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>
        </div>
        <div className={`${styles.image} at-shiny-glass-effect`} data-animate="fade-up"><Image src="/images/our-core-feature-image.png" alt="Core solar feature" width={560} height={660} /></div>
      </div>
    </section>
  );
}
