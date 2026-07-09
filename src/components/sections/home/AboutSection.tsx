import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  PanelsTopLeft,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.images}>
          <div
            className={`${styles.imageLeft} at-shiny-glass-effect elementor-invisible`}
          >
            <Image
              src="/images/about-us-image-1.jpg"
              alt="Reech Solar consultation meeting"
              width={350}
              height={245}
            />
          </div>

          <div
            className={`${styles.imageRight} at-shiny-glass-effect elementor-invisible`}
          >
            <Image
              src="/images/about-us-image-2.jpg"
              alt="Reech Solar team discussing residential solar project"
              width={330}
              height={330}
            />
          </div>

          <div className={`${styles.experience} elementor-invisible`}>
            <div>
              <span data-counter="15">0</span>
              <span>+</span>
            </div>
            <p>
              Years Of
              <br />
              Experience
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.eyebrow} data-animate="fade-up">
            <h3>About Reech Solar</h3>
          </div>

          <h2 >Educate first. <br/>Sell second.</h2>

          <p className={styles.desc} data-animate="fade-up">
            Reech Solar Enterprises is a Southern California-based solar,
            roofing, battery storage, maintenance, and energy consulting company
            with more than 15 years of industry experience.
          </p>

          <p className={styles.desc} data-animate="fade-up">
            Reech supports homeowners through the full solar ownership
            lifecycle, from installation and expansion to diagnostics, repairs,
            roofing, battery backup, monitoring, and property sale inspections.
          </p>

          <div className={styles.infoWrap}>
            <div className={styles.features}>
              <article data-animate="fade-up">
                <span>
                  <BadgeCheck size={20} />
                </span>
                <div>
                  <h3>Solar Care</h3>
                  <p>
                    Installation, expansion, maintenance, diagnostics, and
                    long-term system support.
                  </p>
                </div>
              </article>

              <article data-animate="fade-up">
                <span>
                  <PanelsTopLeft size={20} />
                </span>
                <div>
                  <h3>Roofing</h3>
                  <p>
                    Roof replacement, repairs, solar removal, and reinstallation
                    support.
                  </p>
                </div>
              </article>

              <article data-animate="fade-up">
                <span>
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <h3>Battery Backup</h3>
                  <p>
                    Energy storage solutions for outages, peak-rate savings, and
                    greater independence.
                  </p>
                </div>
              </article>

              <article data-animate="fade-up">
                <span>
                  <Lightbulb size={20} />
                </span>
                <div>
                  <h3>Honest Guidance</h3>
                  <p>
                    Reech helps homeowners understand options before making an
                    energy investment.
                  </p>
                </div>
              </article>
            </div>

            {/* <div
              className={`${styles.bodyImage} at-shiny-glass-effect elementor-invisible`}
            >
              <Image
                src="/images/about-us-body-image.jpg"
                alt="Residential solar installation and roofing support"
                width={175}
                height={165}
              />
            </div> */}
          </div>

          <div className={styles.actions}>
            <Link href="/about-us" className="theme-btn" data-animate="fade-up">
              <span>↗</span>
              <span>More About Reech</span>
            </Link>

            <Link
              href="/services"
              className={styles.video}
              data-animate="fade-up"
            >
              <span>☀</span>
              <strong>Explore Services</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}