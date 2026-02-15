"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

export default function Epilogue() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const yearRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
        },
      );

      tl.fromTo(
        yearRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      );

      tl.fromTo(
        resumeRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="epilogue"
      className="relative w-full bg-black overflow-hidden py-20 sm:py-28"
      style={{ zIndex: 2 }}
    >
      {/* Subtle top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 px-5">
        {/* Credit line */}
        <div ref={nameRef} className="space-y-2" style={{ opacity: 0 }}>
          <p className="text-sm font-fira-code text-gray-600 tracking-[0.3em] uppercase">
            Crafted by
          </p>
          <p className="text-2xl sm:text-3xl font-playwrite text-[#f4bb44]/80">
            Aaditya Paul.
          </p>
        </div>

        <div
          ref={yearRef}
          className="text-xs font-fira-code text-gray-600"
          style={{ opacity: 0 }}
        >
          Copyright © 2025. All rights reserved.
        </div>

        <button
          ref={resumeRef}
          onClick={() => router.push("/resume")}
          className="font-fira-code text-sm text-[#f4bb44]/50 hover:text-[#f4bb44]
                     underline underline-offset-4 transition-colors duration-300 cursor-pointer"
          style={{ opacity: 0 }}
        >
          View Resume 📁
        </button>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 text-xs font-fira-code text-gray-700 hover:text-[#f4bb44]/60
                     transition-colors duration-300 cursor-pointer"
        >
          ↑ Back to Prologue
        </button>
      </div>
    </section>
  );
}
