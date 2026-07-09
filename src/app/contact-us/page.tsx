import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";
import styles from "@/components/sections/pages/ContentSection.module.css";

export default function ContactUsPage() {
  return (
    <main>
      <PageHeader title="Contact Us" description="Request a consultation, ask a solar question, or connect with the team." />
      <section className="section-padding section-light">
        <div className={`container ${styles.contactGrid}`}>
          <div>
            <SectionTitle eyebrow="Contact Us" title="Ready to start your solar journey?" />
            <div className={styles.card}>
              <h3>Contact Information</h3>
              <p><strong>Phone:</strong> {siteConfig.phone}</p>
              <p><strong>Email:</strong> {siteConfig.email}</p>
              <p><strong>Location:</strong> {siteConfig.address}</p>
            </div>
            <div className={styles.imageCard} style={{marginTop: 24}}><Image src="/images/contact-us-img.jpg" alt="Contact Reech Solar" width={620} height={420} /></div>
          </div>
          <form className={styles.form}>
            <input placeholder="Your Name" />
            <input placeholder="Email Address" />
            <input placeholder="Phone Number" />
            <select defaultValue=""><option value="" disabled>Select Service</option><option>Solar Consultation</option><option>Battery Storage</option><option>Maintenance</option><option>Repair & Diagnostics</option></select>
            <textarea placeholder="Tell us about your project" />
            <button type="button" className="theme-btn"><span>↗</span><span>Submit Request</span></button>
          </form>
        </div>
      </section>
    </main>
  );
}
