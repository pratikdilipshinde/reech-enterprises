import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { blogs } from "@/data/blogs";
import styles from "@/components/sections/pages/ContentSection.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return blogs.map((post) => ({ slug: post.slug })); }
export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) notFound();
  return <main><PageHeader title={post.title} description={post.excerpt} /><section className="section-padding"><div className="container"><div className={styles.imageCard}><Image src={post.image} alt={post.title} width={1200} height={650} /></div><div className={styles.card} style={{marginTop: 30}}><h3>{post.title}</h3><p>{post.excerpt}</p><p>Solar energy continues to help homeowners and businesses take control of energy costs while supporting a cleaner future. This modular page can be expanded with full blog content later.</p></div></div></section></main>;
}
