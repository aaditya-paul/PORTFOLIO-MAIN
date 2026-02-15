"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OriginStory() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const bio1Ref = useRef(null);
  const bio2Ref = useRef(null);
  const skillsRef = useRef(null);
  const highlightsRef = useRef(null);
  const ctaRef = useRef(null);

  const skills = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 92 },
    { name: "Node.js", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Tailwind CSS", level: 95 },
    { name: "TypeScript", level: 82 },
    { name: "Express.js", level: 84 },
    { name: "WebSockets", level: 75 },
  ];

  const highlights = [
    {
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern technologies",
      icon: "🚀",
    },
    {
      title: "Team Leadership",
      description:
        "Leading collaborative teams to successful project execution",
      icon: "👥",
    },
    {
      title: "Innovation Focus",
      description: "Creating cutting-edge solutions with emerging technologies",
      icon: "💡",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Chapter heading — dramatic underline wipe
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

      // Bio paragraphs
      [bio1Ref, bio2Ref].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.15,
          },
        );
      });

      // Skill bars — fill on scroll
      const skillBars = skillsRef.current?.querySelectorAll(".skill-fill");
      skillBars?.forEach((bar) => {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: bar.dataset.level + "%",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Skill labels
      const skillItems = skillsRef.current?.querySelectorAll(".skill-item");
      skillItems?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.05,
          },
        );
      });

      // Achievement unlocks
      const achievements =
        highlightsRef.current?.querySelectorAll(".achievement");
      achievements?.forEach((ach, i) => {
        gsap.fromTo(
          ach,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: ach,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="origin"
      className="relative w-full bg-black overflow-hidden py-16 sm:py-24 md:py-32"
      style={{ zIndex: 2 }}
    >
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-15%] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.07),transparent)] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,187,68,.05),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-16 md:space-y-24 text-white">
        {/* Chapter Heading */}
        <div className="space-y-2 sm:space-y-3">
          <div className="text-[#f4bb44]/40 font-fira-code text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase">
            Chapter I
          </div>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            THE <span className="text-[#f4bb44]">ORIGIN</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-[#f4bb44] to-transparent" />
        </div>

        {/* Bio Narratives */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div
              ref={bio1Ref}
              className="text-base sm:text-lg md:text-xl font-fira-code leading-relaxed"
              style={{ opacity: 0 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-[#f4bb44] font-semibold">Aaditya Paul</span>
              , a passionate{" "}
              <span className="text-[#f4bb44] font-semibold">
                Full Stack Developer
              </span>{" "}
              with a knack for creating efficient, scalable, and visually
              appealing web applications.
            </div>

            <div
              ref={bio2Ref}
              className="text-sm sm:text-base md:text-lg font-fira-code leading-relaxed text-gray-400"
              style={{ opacity: 0 }}
            >
              I specialize in building responsive interfaces and dynamic
              backends tailored to user needs. Over the years, I&apos;ve worked
              on diverse projects ranging from{" "}
              <span className="text-[#f4bb44]">task management tools</span> to{" "}
              <span className="text-[#f4bb44]">
                gesture-recognition systems
              </span>
              , showcasing my ability to merge innovative ideas with
              cutting-edge technology.
            </div>
          </div>

          {/* Skills — "Acquired Abilities" */}
          <div ref={skillsRef} className="space-y-4">
            <h3 className="text-sm font-fira-code text-[#f4bb44]/60 tracking-[0.3em] uppercase mb-6">
              Acquired Abilities
            </h3>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-item space-y-1"
                style={{ opacity: 0 }}
              >
                <div className="flex justify-between font-fira-code text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-[#f4bb44]/60">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="skill-fill h-full rounded-full bg-gradient-to-r from-[#f4bb44] to-[#f4bb44]/40"
                    data-level={skill.level}
                    style={{ width: "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Unlocks */}
        <div ref={highlightsRef} className="space-y-8">
          <h3 className="text-sm font-fira-code text-[#f4bb44]/60 tracking-[0.3em] uppercase text-center">
            Achievements Unlocked
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="achievement bg-white/[0.03] border border-white/[0.06] hover:border-[#f4bb44]/30
                           rounded-2xl p-6 text-center transition-all duration-500
                           hover:bg-[#f4bb44]/[0.04] hover:shadow-[0_0_40px_rgba(244,187,68,0.06)] group"
                style={{ opacity: 0 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-poppins text-[#f4bb44] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-fira-code text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center space-y-6"
          style={{ opacity: 0 }}
        >
          <p className="text-lg font-fira-code text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Beyond technical skills, I thrive in collaborative environments and
            am a strong advocate for{" "}
            <span className="text-[#f4bb44]">continuous learning</span>. When
            I&apos;m not coding, I enjoy participating in{" "}
            <span className="text-[#f4bb44]">hackathons</span> and sharing
            knowledge with fellow developers.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("missions")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f4bb44]/10
                       border border-[#f4bb44]/30 rounded-full font-fira-code text-sm
                       hover:bg-[#f4bb44]/20 transition-all duration-300 cursor-pointer text-white"
          >
            See what I&apos;ve built <span className="text-[#f4bb44]">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
