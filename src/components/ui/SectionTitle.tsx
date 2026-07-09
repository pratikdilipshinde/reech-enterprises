import styles from "./SectionTitle.module.css";

type Props = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionTitle({ eyebrow, title, align = "left", light = false }: Props) {
  return (
    <div className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ""}`} data-animate="fade-up">
      <h3>{eyebrow}</h3>
      <h2 data-split>{title}</h2>
    </div>
  );
}
