import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={styles.card} data-animate="fade-up" data-hover-lift>
      <div className={`${styles.image} at-shiny-glass-effect`}>
        <Image src={service.image} alt={service.title} width={420} height={300} />
      </div>
      <div className={styles.content}>
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <Link href={`/services/${service.slug}`}>Read More <span>↗</span></Link>
      </div>
    </article>
  );
}
