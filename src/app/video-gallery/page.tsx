import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "@/components/sections/pages/ContentSection.module.css";

export default function VideoGalleryPage() {
  return <main><PageHeader title="Video Gallery" description="Template-style video preview page for solar storytelling." /><section className="section-padding"><div className="container"><SectionTitle eyebrow="Video Gallery" title="Watch solar energy stories and installation highlights" align="center" /><div className={styles.imageCard}><Image src="/images/intro-video-image.jpg" alt="Video gallery" width={1200} height={620} /></div></div></section></main>;
}
