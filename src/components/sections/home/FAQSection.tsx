"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqs } from "@/data/home";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className={`${styles.section} section-padding`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left}>
          <SectionTitle
            eyebrow="Frequently Asked Questions"
            title="Clear guidance for your solar journey"
          />

          <div
            className={`${styles.image} at-shiny-glass-effect`}
            data-animate="fade-up"
          >
            <Image
              src="/images/faq-img.jpeg"
              alt="Frequently asked questions about solar services"
              width={520}
              height={430}
            />
          </div>
        </div>

        <div className={styles.faqs}>
          {faqs.map((faq, i) => (
            <article
              key={faq.question}
              className={open === i ? styles.open : ""}
              data-animate="fade-up"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{faq.question}</span>
                <b>{open === i ? "−" : "+"}</b>
              </button>

              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}