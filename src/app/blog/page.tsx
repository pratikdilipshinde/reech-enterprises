import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import { blogs } from "@/data/blogs";
import styles from "@/components/sections/pages/ContentSection.module.css";

export default function BlogPage() {
  return (
    <main>
      <PageHeader title="Blogs" description="Insights, trends, and updates from the solar industry." />
      <section className="section-padding section-light">
        <div className="container">
          <SectionTitle eyebrow="Latest Blogs" title="Solar insights and clean energy updates" align="center" />
          <div className={styles.grid}>{blogs.map((post) => <article className={styles.card} key={post.slug}><Image src={post.image} alt={post.title} width={420} height={260} /><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`}>Read More ↗</Link></article>)}</div>
        </div>
      </section>
    </main>
  );
}
