"use client";

import {motion} from "framer-motion";
import Link from "next/link";

function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with navigation */}
      <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.6}}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800"
      >
        <div className="flex flex-row sm:flex-row items-center sm:items-center justify-between px-4 sm:px-6 py-3 sm:py-4 gap-3 sm:gap-4">
          <Link
            href={"/"}
            className="text-[#f4bb44] basis-2/3 font-fira-code text-base sm:text-lg hover:text-[#f4bb44]/80 transition-colors"
          >
            ← Back to Portfolio
          </Link>

          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">
            <motion.a
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              href="/resume.pdf"
              target="_blank"
              download="Aaditya-Paul-Resume.pdf"
              className="px-3 py-2 sm:px-4 sm:py-2 bg-[#f4bb44] text-black font-fira-code font-semibold rounded-full 
                       hover:bg-[#f4bb44]/90 transition-all duration-200 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Download PDF 📁</span>
              <span className="sm:hidden">📁 PDF</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="pt-24 sm:pt-20 px-4 sm:px-6 md:px-12 lg:px-24 py-6 sm:py-12">
        <motion.div
          initial={{scale: 0.9, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.h1
              initial={{y: 30, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.4}}
              className="text-3xl sm:text-4xl md:text-6xl font-poppins font-bold text-[#f4bb44] mb-2 sm:mb-4 md:mt-5"
            >
              Aaditya Paul
            </motion.h1>
            <motion.p
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.6}}
              className="text-lg sm:text-xl md:text-2xl font-ubuntu text-gray-300 mb-1 sm:mb-2"
            >
              Full-Stack Developer
            </motion.p>
            <motion.p
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.6, delay: 0.8}}
              className="font-fira-code text-gray-400 text-xs sm:text-sm md:text-base px-2 sm:px-0"
            >
              <span className="block sm:inline">📍 West Bengal, India</span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">
                📧 aadityapaul2006@gmail.com
              </span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">
                🔗 linkedin.com/in/aaditya-paul
              </span>
            </motion.p>
          </div>

          {/* Resume Content */}
          <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className="bg-gray-900/30 border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 lg:p-12"
          >
            {/* PDF Viewer */}
            <div className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="/resume.pdf"
                width="100%"
                height="100%"
                className="border-0"
                title="Aaditya Paul Resume"
              />
            </div>

            {/* Fallback message */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-400 font-fira-code text-xs sm:text-sm mb-3 sm:mb-4 px-2">
                Can&apos;t view the PDF? No problem!
              </p>
              <motion.a
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                href="/resume.pdf"
                target="_blank"
                download="Aaditya-Paul-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[#f4bb44]/10 
                         border border-[#f4bb44] rounded-full font-fira-code 
                         hover:bg-[#f4bb44]/20 transition-all duration-300 text-[#f4bb44] text-sm sm:text-base"
              >
                <span>📁</span>
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{y: 30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            className="mt-8 sm:mt-12 text-center"
          >
            <p className="text-gray-400 font-fira-code mb-3 sm:mb-4 text-xs sm:text-sm px-2">
              Want to connect? Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-0">
              <Link
                href="/#contact"
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full 
                         font-fira-code text-gray-300 hover:text-white hover:border-gray-400 
                         transition-all duration-200 text-sm sm:text-base text-center"
              >
                Contact Me
              </Link>
              <Link
                href="/#projects"
                className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full 
                         font-fira-code text-gray-300 hover:text-white hover:border-gray-400 
                         transition-all duration-200 text-sm sm:text-base text-center"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Resume;
