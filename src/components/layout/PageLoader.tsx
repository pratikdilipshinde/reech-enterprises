"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./PageLoader.module.css";

const LOADER_DURATION = 1000;

export default function PageLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isLoading ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={styles.loaderOverlay}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <Image
        src="/images/loader.gif"
        alt="REECH website loading"
        width={500}
        height={500}
        priority
        unoptimized
        className={styles.loaderImage}
      />

      <span className={styles.screenReaderText}>
        Loading page...
      </span>
    </div>
  );
}