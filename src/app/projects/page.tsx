import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import { projectImages } from "@/data/home";
import styles from "@/components/sections/pages/ContentSection.module.css";

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader title="Projects" description="Solar projects and clean energy installations from the template gallery." />
      <section className="section-padding section-light">
        <div className="container">
          <SectionTitle eyebrow="Our Projects" title="Clean energy work built for long-term value" align="center" />
          <div className={styles.gallery}>{projectImages.map((image) => <Image key={image} src={image} alt="Solar project" width={420} height={300} />)}</div>
        </div>
      </section>
    </main>
  );
}
