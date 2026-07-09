import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { whyChooseItems } from "@/data/home";
import styles from "./WhyChooseSection.module.css";

export default function WhyChooseSection() {
  return (
    <section className={`${styles.section} section-padding`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.images} data-animate="fade-up">
          <Image src="/images/why-choose-us-image-1.jpg" alt="Solar rooftop" width={470} height={560} className={styles.mainImage} />
          <Image src="/images/why-choose-us-image-2.jpg" alt="Solar worker" width={250} height={250} className={styles.smallImage} />
        </div>
        <div>
          <SectionTitle eyebrow="Why Choose Us" title="Expert driven solar solutions built for efficiency & trust" />
          <div className={styles.list}>{whyChooseItems.map((item) => <div key={item} data-animate="fade-up"><CheckCircle2 size={22} /><span>{item}</span></div>)}</div>
        </div>
      </div>
    </section>
  );
}
