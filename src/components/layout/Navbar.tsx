"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleParentMenu = (label: string) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className={styles.header} data-header>
      <div className={`container ${styles.navbar}`}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <Image
            src="/images/reech-logo-hori.png"
            alt="Reech Solar Enterprises"
            width={140}
            height={65}
            priority
          />
        </Link>

        <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
          <ul>
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isActive = activeMenu === item.label;

              return (
                <li
                  key={item.label}
                  className={isActive ? styles.active : ""}
                >
                  {hasChildren ? (
                    <button
                      type="button"
                      className={styles.parentButton}
                      onClick={() => toggleParentMenu(item.label)}
                      aria-expanded={isActive}
                    >
                      <span>{item.label}</span>
                      <span className={styles.chevron}>⌄</span>
                    </button>
                  ) : (
                    <Link href={item.href} onClick={closeMobileMenu}>
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && (
                    <div className={styles.dropdown}>
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobileMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/contact-us" className={`theme-btn ${styles.cta}`}>
          <span>↗</span>
          <span>Contact Us</span>
        </Link>

        <button
          className={styles.toggle}
          type="button"
          aria-label="Toggle menu"
          onClick={() => {
            setOpen((value) => !value);
            setActiveMenu(null);
          }}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}