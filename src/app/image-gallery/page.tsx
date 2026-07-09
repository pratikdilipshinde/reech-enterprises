import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import styles from "@/components/sections/pages/ContentSection.module.css";

const gallery = ["/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg", "/images/gallery-4.jpg", "/images/gallery-5.jpg", "/images/gallery-6.jpg"];
export default function ImageGalleryPage() {
  return <main><PageHeader title="Image Gallery" description="Solar energy image gallery from the Home Version 1 template assets." /><section className="section-padding section-light"><div className="container"><SectionTitle eyebrow="Gallery" title="Solar project images and clean energy visuals" align="center" /><div className={styles.gallery}>{gallery.map((image) => <Image key={image} src={image} alt="Gallery image" width={420} height={300} />)}</div></div></section></main>;
}
