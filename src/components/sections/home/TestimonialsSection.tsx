import { testimonials } from "@/data/home";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <section className={`${styles.section} section-padding section-dark`}>
      <div className="container">
        <SectionTitle eyebrow="Our Testimonials" title="Customers sharing their journey to solar" align="center" light />
        <div className={styles.grid}>{testimonials.map((item) => <article key={item.name} data-animate="fade-up"><div>“</div><p>{item.text}</p><h3>{item.name}</h3><span>{item.role}</span></article>)}</div>
      </div>
    </section>
  );
}
