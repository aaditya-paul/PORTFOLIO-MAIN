"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const chapters = [
  { id: "prologue", label: "Prologue", numeral: "00" },
  { id: "origin", label: "Origin", numeral: "01" },
  { id: "missions", label: "Missions", numeral: "02" },
  { id: "signal", label: "Signal", numeral: "03" },
  { id: "epilogue", label: "Epilogue", numeral: "04" },
];

export default function ChapterNav() {
  const [active, setActive] = useState("prologue");
  const navRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(ch.id),
        onEnterBack: () => setActive(ch.id),
      });
    });

    // Fade in nav after prologue intro
    gsap.fromTo(
      navRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1, delay: 2.5, ease: "power2.out" },
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed left-3 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col gap-3 sm:gap-4 lg:gap-6 opacity-0 hidden sm:flex"
      style={{ zIndex: 50 }}
    >
      {chapters.map((ch) => {
        const isActive = active === ch.id;
        return (
          <button
            key={ch.id}
            onClick={() => scrollTo(ch.id)}
            className="group flex items-center gap-3 cursor-pointer bg-transparent border-none outline-none"
            aria-label={`Jump to ${ch.label}`}
          >
            {/* Dot indicator */}
            <div
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-[#f4bb44] shadow-[0_0_12px_rgba(244,187,68,0.6)] scale-125"
                  : "bg-white/20 group-hover:bg-white/50"
              }`}
            />
            {/* Label — hidden below lg */}
            <span
              className={`hidden lg:block font-fira-code text-xs tracking-widest uppercase transition-all duration-500 ${
                isActive
                  ? "text-[#f4bb44] opacity-100 translate-x-0"
                  : "text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white/60"
              }`}
            >
              {ch.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
