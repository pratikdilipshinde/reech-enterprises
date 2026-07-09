"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function TemplateMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cleanupFns: Array<() => void> = [];
    const splitInstances: SplitType[] = [];

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();
      heroTimeline
        .from("[data-topbar]", { y: -30, opacity: 0, duration: 0.6, ease: "power2.out" })
        .from("[data-header]", { y: -40, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.35")
        .from("[data-hero-animate]", { y: 35, opacity: 0, duration: 0.8, stagger: 0.14, ease: "power3.out" }, "-=0.2");

      document.querySelectorAll<HTMLElement>("[data-split]").forEach((heading) => {
        const split = new SplitType(heading, {
          types: "lines,words,chars",
          lineClass: "split-line",
          wordClass: "split-word",
          charClass: "split-char",
        });
        splitInstances.push(split);
        if (!split.chars?.length) return;
        gsap.set(split.chars, { opacity: 0, x: 50 });
        gsap.to(split.chars, {
          scrollTrigger: { trigger: heading, start: "top 90%", once: true },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.018,
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-animate='fade-up'], .elementor-invisible").forEach((item) => {
        gsap.fromTo(item, { y: 36, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 88%", once: true },
        });
      });

      gsap.to("[data-hero-bg]", { scale: 1.08, duration: 12, ease: "power1.out" });

      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((counter) => {
        const target = Number(counter.dataset.counter || 0);
        gsap.fromTo(counter, { innerText: 0 }, {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: counter, start: "top 90%", once: true },
          onUpdate: function () {
            counter.innerText = Math.round(Number(counter.innerText)).toString();
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-hover-lift]").forEach((item) => {
        const enter = () => gsap.to(item, { y: -8, scale: 1.03, duration: 0.3, ease: "power2.out" });
        const leave = () => gsap.to(item, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);
        cleanupFns.push(() => {
          item.removeEventListener("mouseenter", enter);
          item.removeEventListener("mouseleave", leave);
        });
      });

      const cursor = document.querySelector(".magic-cursor") as HTMLElement | null;
      const cursorBall = document.querySelector(".cursor-ball") as HTMLElement | null;
      if (cursor && cursorBall && window.innerWidth > 1024) {
        const move = (event: MouseEvent) => gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 0.15, ease: "power2.out" });
        window.addEventListener("mousemove", move);
        cleanupFns.push(() => window.removeEventListener("mousemove", move));

        document.querySelectorAll<HTMLElement>("a, button").forEach((item) => {
          const enter = () => gsap.to(cursorBall, { scale: 2.4, opacity: 0.35, duration: 0.25 });
          const leave = () => gsap.to(cursorBall, { scale: 1, opacity: 1, duration: 0.25 });
          item.addEventListener("mouseenter", enter);
          item.addEventListener("mouseleave", leave);
          cleanupFns.push(() => {
            item.removeEventListener("mouseenter", enter);
            item.removeEventListener("mouseleave", leave);
          });
        });
      }

      window.setTimeout(() => ScrollTrigger.refresh(), 300);
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
      splitInstances.forEach((split) => split.revert());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="magic-cursor" aria-hidden="true">
      <div className="cursor-ball" />
    </div>
  );
}
