import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import styles from "./TopBar.module.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";


export default function TopBar() {
  const socialIcons = {
    instagram: FaInstagram,
    facebook: FaFacebookF,
    tiktok: FaTiktok,
  };

  return (
    <div className={styles.topbar} data-topbar>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <a href={`tel:${siteConfig.phone}`} className={styles.info}>
            <Phone size={22} />
            <div><p>{siteConfig.phone}</p></div>
          </a>
          <a href={`mailto:${siteConfig.email}`} className={styles.info}>
            <Mail size={22} />
            <div><p>{siteConfig.email}</p></div>
          </a>
        </div>
        <div className={styles.social}>
          <span>Follow Us On Social:</span>

          {siteConfig.social.map((item) => {
            const Icon = socialIcons[item.icon as keyof typeof socialIcons];

            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
