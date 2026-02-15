"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Email from "../../public/assets/email.svg";
import LIN from "../../public/assets/linkedIn.svg";
import GH from "../../public/assets/github.svg";
import INSTA from "../../public/assets/insta.svg";
import BENTO from "../../public/assets/bento.svg";

const channels = [
  {
    title: "Email",
    subtitle: "Drop me a line",
    icon: Email,
    url: "mailto:aadityapaul2006@gmail.com",
    description: "aadityapaul2006@gmail.com",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "hover:border-blue-400/40",
  },
  {
    title: "LinkedIn",
    subtitle: "Let's connect professionally",
    icon: LIN,
    url: "https://www.linkedin.com/in/aaditya-paul/",
    description: "Professional networking",
    color: "from-blue-600/20 to-blue-700/20",
    borderColor: "hover:border-blue-500/40",
  },
  {
    title: "GitHub",
    subtitle: "Check out my code",
    icon: GH,
    url: "https://github.com/aaditya-paul/",
    description: "Open source contributions",
    color: "from-gray-500/20 to-gray-600/20",
    borderColor: "hover:border-gray-400/40",
  },
  {
    title: "Instagram",
    subtitle: "Behind the scenes",
    icon: INSTA,
    url: "https://www.instagram.com/__the.frustrated.guy__/",
    description: "Personal updates & stories",
    color: "from-pink-500/20 to-purple-600/20",
    borderColor: "hover:border-pink-400/40",
  },
  {
    title: "Bento",
    subtitle: "All links in one place",
    icon: BENTO,
    url: "https://bento.me/aaditya-paul",
    description: "Complete link collection",
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "hover:border-orange-400/40",
  },
];

const signalStats = [
  { metric: "< 24h", label: "Email Response", icon: "📧" },
  { metric: "< 4h", label: "LinkedIn Reply", icon: "💼" },
  { metric: "100%", label: "Response Rate", icon: "✅" },
];

export default function SignalBeacon() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        headingRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Channel cards
      const cards = sectionRef.current?.querySelectorAll(".signal-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            delay: i * 0.08,
          },
        );
      });

      // Stats
      const statEls = sectionRef.current?.querySelectorAll(".signal-stat");
      statEls?.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          },
        );
      });

      // Final CTA
      const cta = sectionRef.current?.querySelector(".signal-cta");
      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: cta,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="signal"
      className="relative w-full bg-black overflow-hidden py-16 sm:py-24 md:py-32"
      style={{ zIndex: 2 }}
    >
      {/* Ambient glows — warmer for this section */}
      <div className="absolute top-[-10%] left-[-15%] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.12),transparent)] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.08),transparent)] pointer-events-none" />
      <div className="absolute top-[50%] left-[30%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.05),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-16 text-white">
        {/* Chapter heading */}
        <div className="space-y-2 sm:space-y-3">
          <div className="text-[#f4bb44]/40 font-fira-code text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase">
            Chapter III
          </div>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            THE <span className="text-[#f4bb44]">SIGNAL</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-[#f4bb44] to-transparent" />
        </div>

        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-poppins font-light text-gray-300 leading-relaxed">
            Ready to{" "}
            <span className="text-[#f4bb44] font-medium">transmit</span>?
            I&apos;m always excited to discuss new projects, collaborations, or
            just chat about technology and innovation.
          </p>
          <p className="text-sm font-fira-code text-[#f4bb44]/60 mt-4">
            Choose your preferred frequency ↓
          </p>
        </div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {channels.map((ch) => (
            <a
              key={ch.title}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`signal-card group bg-white/[0.02] border border-white/[0.06] ${ch.borderColor}
                         rounded-2xl p-6 transition-all duration-500
                         hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(244,187,68,0.06)]
                         flex flex-col items-center text-center space-y-4`}
              style={{ opacity: 0 }}
            >
              {/* Icon */}
              <div
                className={`relative p-4 rounded-full bg-gradient-to-br ${ch.color}
                           group-hover:scale-110 transition-transform duration-300`}
              >
                <Image
                  width={32}
                  height={32}
                  src={ch.icon}
                  alt={ch.title}
                  className="w-7 h-7 filter brightness-0 invert"
                />
                {/* Pulse ring on hover */}
                <div
                  className="absolute inset-0 rounded-full border border-[#f4bb44]/0 group-hover:border-[#f4bb44]/20
                               group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-poppins text-white group-hover:text-[#f4bb44] transition-colors">
                  {ch.title}
                </h3>
                <p className="text-xs font-fira-code text-gray-500 group-hover:text-gray-400 transition-colors">
                  {ch.subtitle}
                </p>
              </div>

              <div
                className="flex items-center gap-1 text-xs font-fira-code text-[#f4bb44]/60
                             opacity-0 group-hover:opacity-100 transition-all duration-300 transform
                             translate-y-2 group-hover:translate-y-0"
              >
                <span>Connect</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Signal Strength Dashboard */}
        <div className="space-y-6">
          <h3 className="text-sm font-fira-code text-[#f4bb44]/60 tracking-[0.3em] uppercase text-center">
            Signal Strength
          </h3>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto">
            {signalStats.map((stat) => (
              <div
                key={stat.label}
                className="signal-stat text-center p-4 bg-white/[0.02] border border-white/[0.06]
                           rounded-xl hover:border-[#f4bb44]/20 transition-colors duration-300"
                style={{ opacity: 0 }}
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-lg font-poppins text-[#f4bb44] font-bold">
                  {stat.metric}
                </div>
                <div className="text-xs font-fira-code text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="signal-cta text-center pt-8" style={{ opacity: 0 }}>
          <a
            href="mailto:aadityapaul2006@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#f4bb44]/10
                       border border-[#f4bb44]/30 rounded-full font-fira-code
                       hover:bg-[#f4bb44]/20 hover:shadow-[0_0_30px_rgba(244,187,68,0.2)]
                       transition-all duration-500 text-lg text-white"
          >
            Start a Conversation <span className="text-[#f4bb44]">💬</span>
          </a>
        </div>
      </div>
    </section>
  );
}
