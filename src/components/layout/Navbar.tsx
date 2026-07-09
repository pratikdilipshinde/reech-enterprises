"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header} data-header>
      <div className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <Image src="/images/reech-logo-hori.png" alt="Reech Solar Enterprises" width={140} height={65} priority />
        </Link>
        <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={() => !item.children && setOpen(false)}>
                  {item.label}{item.children && <span>⌄</span>}
                </Link>
                {item.children && <div className={styles.dropdown}>{item.children.map((child) => <Link key={child.label} href={child.href} onClick={() => setOpen(false)}>{child.label}</Link>)}</div>}
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact-us" className={`theme-btn ${styles.cta}`}><span>↗</span><span>Contact Us</span></Link>
        <button className={styles.toggle} type="button" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>{open ? "×" : "☰"}</button>
      </div>
    </header>
  );
}
