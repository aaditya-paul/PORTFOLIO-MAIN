"use client";
import "../styles/textDrawing.css";
import {motion} from "framer-motion";

import React from "react";

function About() {
  const skills = [
    "Next.js",
    "React",
    "Node.js",
    "Firebase",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "Express.js",
    "WebSockets",
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

  return (
    <div className="relative min-w-screen min-h-screen text-white bg-black">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.08),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[60%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.05),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-16 py-24 px-5 md:px-12 lg:px-48">
        {/* Title Section */}
        <motion.div
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
          style={{
            textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
            willChange: "transform, opacity",
          }}
          className="text-3xl md:text-[48px] font-poppins font-medium underline underline-offset-8"
        >
          ABOUT
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Personal Introduction */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-6"
            style={{willChange: "transform, opacity"}}
          >
            <div className="text-lg md:text-xl font-fira-code leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="text-[#f4bb44] font-semibold">Aaditya Paul</span>
              , a passionate{" "}
              <span className="text-[#f4bb44] font-semibold">
                Full Stack Developer
              </span>{" "}
              with a knack for creating efficient, scalable, and visually
              appealing web applications.
            </div>

            <div className="text-base md:text-lg font-fira-code leading-relaxed text-gray-300">
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
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-100px"}}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="space-y-6"
            style={{willChange: "transform, opacity"}}
          >
            <h3 className="text-xl md:text-2xl font-poppins text-[#f4bb44] mb-4">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{opacity: 0, scale: 0.8}}
                  whileInView={{opacity: 1, scale: 1}}
                  viewport={{once: true, margin: "-100px"}}
                  transition={{
                    delay: 0.03 * index,
                    duration: 0.3,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="bg-gray-900/50 border border-gray-700 hover:border-[#f4bb44] 
                           rounded-lg px-3 py-2 text-center font-fira-code text-sm 
                           transition-all duration-300 hover:bg-[#f4bb44]/10"
                  style={{willChange: "transform, opacity"}}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="mt-12"
          style={{willChange: "transform, opacity"}}
        >
          <h3 className="text-2xl md:text-3xl font-poppins text-center mb-8 text-[#f4bb44]">
            What I Bring
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-100px"}}
                transition={{
                  delay: 0.05 * index,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-gray-900/30 border border-gray-700 hover:border-[#f4bb44] 
                         rounded-xl p-6 text-center transition-all duration-300 
                         hover:bg-[#f4bb44]/5 group"
                style={{willChange: "transform, opacity"}}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-poppins text-[#f4bb44] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-fira-code text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-100px"}}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3,
          }}
          className="text-center mt-12"
          style={{willChange: "transform, opacity"}}
        >
          <div className="text-lg md:text-xl font-fira-code leading-relaxed text-gray-300 max-w-4xl mx-auto">
            Beyond technical skills, I thrive in collaborative environments and
            am a strong advocate for{" "}
            <span className="text-[#f4bb44]">continuous learning</span>. When
            I'm not coding, I enjoy participating in{" "}
            <span className="text-[#f4bb44]">hackathons</span> and sharing
            knowledge with fellow developers.
          </div>

          <motion.div
            className="mt-8"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.15, ease: "easeInOut"}}
            style={{willChange: "transform"}}
          >
            <div
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f4bb44]/10 
                          border border-[#f4bb44] rounded-full font-fira-code 
                          hover:bg-[#f4bb44]/20 transition-all duration-300 cursor-pointer"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <span>Let&apos;s Connect</span>
              <span className="text-[#f4bb44]">↓</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
