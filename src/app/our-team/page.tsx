import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import { teamMembers } from "@/data/home";
import styles from "@/components/sections/pages/ContentSection.module.css";

export default function TeamPage() {
  return (
    <main>
      <PageHeader title="Our Team" description="Meet the people helping customers move toward clean solar energy." />
      <section className="section-padding">
        <div className="container">
          <SectionTitle eyebrow="Our Team" title="Professional solar experts and energy advisors" align="center" />
          <div className={styles.grid}>{teamMembers.map((member) => <article className={`${styles.card} ${styles.teamImage}`} key={member.name}><Image src={member.image} alt={member.name} width={420} height={420} /><h3>{member.name}</h3><p>{member.role}</p></article>)}</div>
        </div>
      </section>
    </main>
  );
}
