import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const authors = [
  "/images/author-1.jpg",
  "/images/author-2.jpg",
  "/images/author-3.jpg",
  "/images/author-4.jpg",
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <div className={styles.bg} data-hero-bg />
        <div className={styles.overlay} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.eyebrow} data-hero-animate>
            <h3>Solar, Roofing, Battery & Energy Support</h3>
          </div>

          <h1 className={styles.title} data-split>
            Educate First. Sell Second.
          </h1>

          <p className={styles.description} data-hero-animate>
            Reech Solar Enterprises helps Southern California homeowners with
            solar installation, system expansions, battery backup, roofing,
            diagnostics, repairs, panel cleaning, and long-term solar
            maintenance support.
          </p>

          <div className={styles.actions} data-hero-animate>
            <Link href="/contact-us" className="theme-btn">
              <span>↗</span>
              <span>Request A Consultation</span>
            </Link>

            <Link href="/services" className={styles.videoLink}>
              <span>☀</span>
              <strong>Explore Services</strong>
            </Link>
          </div>

          <div className={styles.trust} data-hero-animate>
            <div className={styles.avatars}>
              {authors.map((author, i) => (
                <Image
                  key={author}
                  src={author}
                  alt={`Reech Solar customer ${i + 1}`}
                  width={50}
                  height={50}
                  data-hover-lift
                />
              ))}
            </div>

            <p>
              Supporting homeowners through the full solar ownership lifecycle —
              from installation and battery backup to repairs, roofing, and
              maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}