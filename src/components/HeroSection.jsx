"use client";
import Me from "../assets/mee.png";
import {motion} from "framer-motion";

import "../styles/textDrawing.css";
import Dots from "./dots";
import {useRouter} from "next/navigation";
import Image from "next/image";

function HeroSection() {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black overflow-hidden">
      {/* Optimized Dots Background - covers entire hero section */}
      <div className="absolute inset-0 w-full h-full">
        <Dots />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-[10%] left-[-10%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.08),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[10%] right-[-10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.06),rgba(255,255,255,0))]"></div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.04),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 w-full h-full text-white flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 lg:py-0">
        {/* Profile Image Section */}
        <motion.div
          initial={{scale: 0, rotate: -90}}
          animate={{scale: 1, rotate: 0}}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
          className="relative z-20 mb-6 sm:mb-8 lg:mb-0 lg:mr-8 xl:mr-12"
        >
          {/* Optimized animated ring with reduced effects */}
          <div className="relative">
            <motion.div
              animate={{rotate: 360}}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full ring-1 sm:ring-2 ring-[#f4bb44] ring-opacity-50"
            />
            <Image
              className="relative w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] rounded-full object-cover border-2 border-gray-800"
              src={Me}
              width={350}
              height={350}
              alt="Aaditya Paul"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 max-w-2xl xl:max-w-3xl">
          {/* Greeting */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div
              style={{
                textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playwrite font-medium mb-2"
            >
              Hello There! 👋
            </div>
          </motion.div>

          {/* Main Introduction */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="space-y-1 sm:space-y-2"
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-ubuntu font-light">
              I&apos;m{" "}
              <span className="text-[#f4bb44] font-semibold">Aaditya Paul</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-ubuntu font-light text-gray-300">
              Full-Stack Developer
            </div>
          </motion.div>

          {/* Location & Specialty */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
              delay: 1.2,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="space-y-3 sm:space-y-4"
          >
            <p className="text-sm sm:text-base md:text-lg font-fira-code text-gray-400 leading-relaxed max-w-lg lg:max-w-none">
              📍 Based in West Bengal, India
              <br />
              🚀 Crafting digital experiences with modern technologies
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-3 sm:mt-4">
              {["React", "Next.js", "Node.js", "TypeScript"].map(
                (tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{scale: 0, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{
                      delay: 1.6 + index * 0.1,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="px-2 sm:px-3 py-1 bg-[#f4bb44]/10 border border-[#f4bb44]/30 rounded-full text-xs sm:text-sm font-fira-code text-[#f4bb44]"
                  >
                    {tech}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{
              delay: 2,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{scale: 1.03}}
              whileTap={{scale: 0.97}}
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#f4bb44] text-black font-fira-code font-semibold rounded-full 
                       hover:bg-[#f4bb44]/90 transition-all duration-200 
                       hover:shadow-[0_0_15px_rgba(244,187,68,0.3)] text-sm sm:text-base"
            >
              View My Work 🎯
            </motion.button>

            <motion.button
              whileHover={{scale: 1.03}}
              whileTap={{scale: 0.97}}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-[#f4bb44] text-[#f4bb44] font-fira-code 
                       rounded-full hover:bg-[#f4bb44]/10 transition-all duration-200 text-sm sm:text-base"
            >
              Let&apos;s Connect 🤝
            </motion.button>
            <motion.button
              whileHover={{scale: 1.03}}
              whileTap={{scale: 0.97}}
              onClick={() => {
                router.push("/resume");
              }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-[#f4bb44] text-[#f4bb44] font-fira-code 
                       rounded-full hover:bg-[#f4bb44]/10 transition-all duration-200 text-sm sm:text-base"
            >
              View Resume
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Optimized Scroll Indicator */}
      <motion.div
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        transition={{
          delay: 2.4,
          duration: 0.6,
          ease: "easeOut",
        }}
        className="absolute bottom-0 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 sm:space-y-2"
      >
        <motion.div
          animate={{y: [0, 8, 0]}}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            window.scrollBy({top: window.innerHeight, behavior: "smooth"});
          }}
          className="cursor-pointer text-[#f4bb44] font-fira-code text-xs sm:text-sm hover:text-[#f4bb44]/80 transition-colors duration-200"
        >
          Scroll to explore
        </motion.div>
        <motion.div
          animate={{y: [0, 4, 0]}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#f4bb44] text-lg sm:text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
