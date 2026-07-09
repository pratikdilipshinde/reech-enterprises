import Image from "next/image";
import Link from "next/link";
import { footerLinks, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <Image src="/images/reech-logo-hori.png" alt={siteConfig.logoAlt} width={160} height={45} />
            <p>Powering homes and businesses with smarter, cleaner, and more reliable solar energy solutions.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            {footerLinks.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </div>
          <div>
            <h3>Our Services</h3>
            {services.slice(0, 5).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}
            <Link href="/services" className="" data-animate="fade-up">
              <span>View All Services &nbsp;</span>
              <span>↗ </span>
            </Link>
          </div>
          <div>
            <h3>Subscribe To Newsletter</h3>
            <p>Stay updated with solar energy insights, offers, and maintenance tips.</p>
            <form className={styles.form}><input placeholder="Email address" /><button type="button">↗</button></form>
          </div>
        </div>
        <div className={styles.bottom}>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
