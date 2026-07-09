import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { blogs } from "@/data/blogs";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  return (
    <section className={`${styles.section} section-padding section-light`}>
      <div className="container">
        <SectionTitle eyebrow="Latest Blogs" title="Insights, trend and updates from the solar industry" align="center" />
        <div className={styles.grid}>{blogs.map((post) => <article key={post.slug} data-animate="fade-up"><div className={`${styles.image} at-shiny-glass-effect`}><Image src={post.image} alt={post.title} width={420} height={260} /></div><div className={styles.content}><span>{post.date}</span><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`}>Read More ↗</Link></div></article>)}</div>
      </div>
    </section>
  );
}
