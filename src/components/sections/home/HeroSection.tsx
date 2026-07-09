import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const authors = ["/images/author-1.jpg", "/images/author-2.jpg", "/images/author-3.jpg", "/images/author-4.jpg"];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrap}>
        <div className={styles.bg} data-hero-bg />
        <div className={styles.overlay} />
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.eyebrow} data-hero-animate><h3>Solar Energy for Tomorrow</h3></div>
          <h3 className={styles.title} data-split>Power Your Future with Clean Solar Energy</h3>
          <p className={styles.description} data-hero-animate>From expert system design to seamless installation and ongoing support, we combine technical expertise with a commitment to performance, safety.</p>
          <div className={styles.actions} data-hero-animate>
            <Link href="/contact-us" className="theme-btn"><span>↗</span><span>Get Free Consultation</span></Link>
            {/* <Link href="/video-gallery" className={styles.videoLink}><span>▶</span><strong>Watch Our Story</strong></Link> */}
          </div>
          <div className={styles.trust} data-hero-animate>
            <div className={styles.avatars}>{authors.map((author, i) => <Image key={author} src={author} alt={`Customer ${i + 1}`} width={50} height={50} data-hover-lift />)}</div>
            <p>“Empowering homes and businesses with clean solar energy for brighter tomorrow.”</p>
          </div>
        </div>
      </div>
    </section>
  );
}
