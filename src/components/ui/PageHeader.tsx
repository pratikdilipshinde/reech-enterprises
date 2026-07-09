import styles from "./PageHeader.module.css";

type Props = { title: string; description?: string };

export default function PageHeader({ title, description }: Props) {
  return (
    <section className={styles.header}>
      <div className="container">
        <p data-animate="fade-up">Home / {title}</p>
        <h1 data-split>{title}</h1>
        {description && <span data-animate="fade-up">{description}</span>}
      </div>
    </section>
  );
}
