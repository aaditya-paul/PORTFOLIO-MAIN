"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SU from "../../public/preview/shiksha.jpg";
import CB from "../../public/preview/clever.jpg";
import WTT from "../../public/preview/wtt.jpg";
import MB from "../../public/preview/mb.jpg";
import UPX from "../../public/preview/upx.jpg";
import CG from "../../public/preview/cg.jpg";
import P2P from "../../public/preview/p2p.jpg";
import FB from "../../public/preview/FB.jpg";
import BF from "../../public/preview/BF.jpg";
import AM from "../../public/preview/AM.jpg";
import SPM from "../../public/preview/spm.jpg";
import TSK from "../../public/preview/tsk.jpg";
import GPT from "../../public/preview/gpt.jpg";
import WKC from "../../public/preview/wkc.jpg";
import RIZZ from "../../public/preview/rizz.jpeg";
import Image from "next/image";
function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects", icon: "🚀" },
    { id: "fullstack", name: "Full Stack", icon: "💻" },
    { id: "frontend", name: "Frontend", icon: "🎨" },
    { id: "ai", name: "AI/ML", icon: "🤖" },
  ];

  const achievements = [
    {
      title: "FluxBit.",
      description:
        "FluxBit is a cutting-edge digital agency specializing in modern web development, digital engineering, and strategic digital marketing. We craft intelligent systems and growth-driven platforms that help businesses thrive in the digital landscape.",
      date: "Jul 2025",
      // githubUrl: "https://github.com/aaditya-paul/meal-buddy",
      liveUrl: "https://fluxbit-one.vercel.app",
      img: FB,
      tech: ["UI/UX", "Web Agency", "Landing Page"],
      category: "frontend",
      featured: true,
    },
    {
      title: "AceMind",
      description:
        "AceMind is an innovative platform designed to enhance cognitive skills through personalized learning experiences and AI-driven insights.",
      date: "Aug 2025",
      // githubUrl: "https://github.com/aaditya-paul/meal-buddy",
      liveUrl: "https://acemind-delta.vercel.app/",
      img: AM,
      tech: ["UI/UX", "Syllabus Parser", "AI"],
      category: "ai",
      featured: true,
    },
    {
      title: "Rizzlet",
      description:
        "Rizzlet is an AI-powered texting copilot that helps you find the right words, in your voice, at the right moment.",
      date: "Feb 2026",
      githubUrl: "https://github.com/aaditya-paul/rizzlet-web",
      liveUrl: "https://rizzlet.aaditya-paul.in/",
      img: RIZZ,
      tech: ["AI", "NodeJs", "PostgreSQL"],
      featured: true,
    },
    {
      title: "Whiskerknots Crochet",
      description:
        "A small Next.js e-commerce / brochure site for Whiskerknots — a handmade crochet shop specializing in amigurumi, wearables, and home decor. This repository is a modern rewrite using Next.js App Router, Tailwind CSS, and a server-side AI chat assistant.",
      date: "Dec 2025",
      githubUrl: "https://github.com/aaditya-paul/whiskerknots-crochet",
      liveUrl: "https://whiskerknots-crochet.vercel.app/",
      img: WKC,
      tech: ["E-Commerce", "Landing Page", "AI Chatbot"],
      category: "fullstack",
    },
    {
      title: "GPT WRAP",
      description:
        "Like Spotify Wrapped, but for your AI conversations. GPT Wrapped transforms your ChatGPT export data into stunning, shareable insights about your AI journey.",
      date: "Dec 2025",
      githubUrl: "https://github.com/aaditya-paul/gpt-wrap",
      liveUrl: "https://gpt-wrap-psi.vercel.app/",
      img: GPT,
      tech: ["Data Analysis", "Mordern Design"],
      category: "fullstack",
    },
    {
      title: "Upexperiment",
      description:
        "Built a user-friendly blogging platform with seamless device adaptability, ensuring an optimal viewing experience across all screens.",
      date: "Mar 2023",
      githubUrl: "https://github.com/aaditya-paul/upexperiment",
      liveUrl: "https://upexperiment.com/",
      img: UPX,
      tech: ["React", "Responsive Design", "Blog Platform"],
      category: "fullstack",
    },
    {
      title: "Taskle",
      description:
        "Taskle is a personal task management application designed to help you organize and prioritize your daily tasks efficiently. It features a handcrafted, warm, and creative UI that feels like a beautifully designed digital notebook.",
      date: "Mar 2023",
      // githubUrl: "https://github.com/aaditya-paul/taskle",
      liveUrl: "https://taskle-seven.vercel.app/",
      img: TSK,
      tech: ["Next.js", "Database", "Task Management"],
      category: "fullstack",
      // featured: true,
    },
    {
      title: "Spotify Migrater",
      description:
        "Migrate playlists, liked songs, albums, and artists between Spotify accounts.",
      date: "Oct 2025",
      githubUrl: "https://github.com/aaditya-paul/spotify-migrater",
      liveUrl: "https://spotify-migrater.vercel.app/",
      img: SPM,
      tech: ["Next.js", "Serverless", "Spotify API"],
      category: "frontend",
      // featured: true,
    },
    {
      title: "Brandfolio",
      description:
        "Brandfolio is a revolutionary platform that bridges the gap between brands and creators with a data-first approach, empowering smarter partnerships, meaningful content, and measurable growth.",
      date: "Jul 2025",
      githubUrl: "https://github.com/aaditya-paul/brandfolio",
      liveUrl: "https://brandfolio-orcin.vercel.app/",
      img: BF,
      tech: ["UI/UX", "Landing Page", "Animations"],
      category: "frontend",
      featured: false,
    },

    {
      title: "Shiksha UI",
      description:
        "Delivered a responsive landing page with server-side rendering, optimizing performance for improved SEO and user engagement.",
      date: "Jun 2023",
      githubUrl: "https://github.com/aaditya-paul/shikhsha-ui",
      liveUrl: "https://shikhsha-ui.vercel.app",
      img: SU,
      tech: ["React", "SSR", "SEO"],
      category: "frontend",
    },
    {
      title: "Clever Books",
      description:
        "Crafted a modern one-page UI mockup using Next.js and Tailwind CSS, receiving positive feedback for its design aesthetics and usability.",
      date: "Jun 2024",
      githubUrl: "https://github.com/aaditya-paul/clever-books",
      liveUrl: "https://clever-books-aaditya.netlify.app/",
      img: CB,
      tech: ["Next.js", "Tailwind CSS", "React"],
      category: "frontend",
    },
    {
      title: "Task Tracker",
      description:
        "Designed a cutting-edge workflow management tool that integrates GitHub, providing admins seamless access to code repositories and task assignments.",
      date: "Sep 2024",
      githubUrl: "https://github.com/aaditya-paul/WTT",
      liveUrl: "https://waiveer-task-tracker.vercel.app/",
      img: WTT,
      tech: ["React", "GitHub API", "Node.js", "MongoDB"],
      category: "fullstack",
    },
    {
      title: "Cogni Glove",
      description:
        "Developed a gesture-recognition hand glove using AI and WebSockets, capable of interpreting sign language and performing tasks based on recognized gestures.",
      date: "May 2024",
      githubUrl: "https://github.com/aaditya-paul/cogni-glove",
      img: CG,
      tech: ["AI/ML", "WebSockets", "Python", "Arduino"],
      category: "ai",
    },

    {
      title: "Meal Buddy",
      description:
        "Created a detailed UI prototype for an online food delivery platform, focusing on responsive and visually appealing design.",
      date: "Apr 2023",
      githubUrl: "https://github.com/aaditya-paul/meal-buddy",
      liveUrl: "https://meal-buddy.vercel.app/",
      img: MB,
      tech: ["UI/UX", "Prototype", "Food Delivery"],
      category: "frontend",
    },
    {
      title: "P2P File Sharing",
      description:
        "A simple Peer-to-Peer (P2P) file sharing application built with Next.js and Tailwind CSS. It allows users to upload files securely, generating unique URLs for easy file download.",
      date: "Jan 2025",
      githubUrl: "https://github.com/aaditya-paul/p2p-fullstack-filesharing",
      // liveUrl: "https://p2p-fullstack-filesharing.vercel.app",
      img: P2P,
      tech: ["Next.js", "Tailwind CSS", "WebRTC", "Node.js"],
      category: "fullstack",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? achievements
      : achievements.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects" className="relative min-h-screen w-full bg-black">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-[-10%] right-0 top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.06),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[20%] right-[-10%] top-0 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.04),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative z-10 min-h-screen min-w-screen flex flex-col gap-8 md:gap-12 py-24 px-5 md:px-12 lg:px-48 text-white">
        {/* Title Section */}
        <motion.div
          initial={false}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: { duration: 1.5, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          style={{
            textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
            display: "inline-block",
            clipPath: "inset(0 100% 0 0)",
          }}
          className="text-3xl md:text-[48px] font-poppins font-medium underline md:underline-offset-8 text-center"
        >
          SHOWCASE OF EXCELLENCE
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full font-fira-code text-xs sm:text-sm 
                         transition-all duration-300 border min-h-[40px] flex items-center justify-center ${
                           selectedCategory === category.id
                             ? "bg-[#f4bb44] text-black border-[#f4bb44]"
                             : "bg-gray-900/50 text-gray-300 border-gray-600 hover:border-[#f4bb44] hover:text-[#f4bb44]"
                         }`}
            >
              <span className="mr-1 sm:mr-2">{category.icon}</span>
              <span className="whitespace-nowrap">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="group bg-gray-900/30 border border-gray-700 hover:border-[#f4bb44] 
                       rounded-xl overflow-hidden transition-all duration-300 
                       hover:bg-[#f4bb44]/5 hover:shadow-[0_0_30px_rgba(244,187,68,0.1)]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-52">
                <Image
                  width={400}
                  height={300}
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Mobile-first gradient overlay - always visible on mobile */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent 
                               sm:from-black/90 sm:via-black/40 sm:to-transparent 
                               sm:group-hover:from-black/95 sm:group-hover:via-black/60 
                               transition-all duration-300"
                ></div>

                {/* Enhanced backdrop for mobile readability */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-40 backdrop-blur-[2px] 
                               sm:h-32 sm:backdrop-blur-[1px] sm:opacity-0 sm:group-hover:opacity-100 
                               transition-opacity duration-300"
                ></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#f4bb44] text-black 
                                 px-2 py-1 rounded-full text-xs font-fira-code font-semibold"
                  >
                    ⭐ Featured
                  </div>
                )}

                {/* Overlay Content - Always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  {/* Strong background for mobile text readability */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/80 to-transparent 
                                 sm:bg-gradient-to-t sm:from-black/95 sm:via-black/70 sm:to-transparent 
                                 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
                  ></div>

                  <div className="relative z-10">
                    <h4
                      className="text-base sm:text-lg font-poppins text-white mb-2 
                                  sm:group-hover:text-[#f4bb44] transition-colors drop-shadow-lg font-semibold"
                    >
                      {project.title}
                    </h4>

                    {/* Description - Always visible on mobile with better sizing */}
                    <p
                      className="text-xs sm:text-xs font-fira-code text-gray-100 line-clamp-2 mb-3 
                                 drop-shadow-md leading-relaxed 
                                 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300"
                    >
                      {project.description}
                    </p>

                    {/* Quick Action Buttons - Always visible on mobile */}
                    <div
                      className="flex items-center gap-2 flex-wrap 
                                   sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300"
                    >
                      {project.liveUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-[#f4bb44] text-black 
                               cursor-pointer    rounded-md text-xs font-fira-code font-semibold hover:bg-[#f4bb44]/90 
                                   transition-all duration-200 shadow-lg"
                        >
                          <span>🚀</span>
                          <span className="hidden xs:inline">View Live</span>
                          <span className="xs:hidden">Live</span>
                        </motion.button>
                      )}

                      {project.githubUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-black/80 text-white border border-white/30
                                cursor-pointer   rounded-md text-xs font-fira-code hover:bg-black/90 hover:border-white/50
                                   transition-all duration-200 shadow-lg"
                        >
                          <span>📂</span>
                          <span className="hidden xs:inline">Code</span>
                          <span className="xs:hidden">Git</span>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-3 sm:p-4 space-y-3">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/70 border border-gray-600 rounded text-xs font-fira-code text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800/70 border border-gray-600 rounded text-xs font-fira-code text-gray-300">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Footer */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center sm:gap-2">
                  <span className="text-xs font-fira-code text-gray-500 order-2 sm:order-1">
                    {project.date}
                  </span>

                  {/* Action Buttons - More prominent on mobile */}
                  <div className="flex items-center gap-2 flex-wrap order-1 sm:order-2">
                    {project.githubUrl && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                        className="flex items-center gap-1 px-3 py-2 sm:py-1.5 bg-gray-800/50 border border-gray-600 
                                 rounded-md text-xs font-fira-code text-gray-300 hover:text-white 
                              cursor-pointer   hover:border-gray-400 transition-all duration-200 flex-1 sm:flex-none justify-center
                                 min-h-[36px] sm:min-h-auto"
                        title="View on GitHub"
                      >
                        <span>📂</span>
                        <span>GitHub</span>
                      </motion.button>
                    )}

                    {project.liveUrl && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, "_blank");
                        }}
                        className="flex items-center gap-1 px-3 py-2 sm:py-1.5 bg-[#f4bb44]/10 border border-[#f4bb44]/30 
                               cursor-pointer  rounded-md text-xs font-fira-code text-[#f4bb44] hover:bg-[#f4bb44]/20 
                                 hover:border-[#f4bb44] transition-all duration-200 flex-1 sm:flex-none justify-center
                                 min-h-[36px] sm:min-h-auto"
                        title="View Live Site"
                      >
                        <span>🚀</span>
                        <span>Live Site</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { number: "7+", label: "Projects", icon: "🚀" },
            { number: "3+", label: "Tech Stacks", icon: "💻" },
            { number: "2+", label: "Years", icon: "⏰" },
            { number: "100%", label: "Passion", icon: "❤️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              className="text-center p-3 sm:p-4 bg-gray-900/30 border border-gray-700 rounded-xl 
                       hover:border-[#f4bb44] transition-all duration-300 group min-h-[100px] sm:min-h-auto
                       flex flex-col justify-center"
            >
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-poppins text-[#f4bb44] font-bold">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-fira-code text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-center mt-12"
        >
          <p className="text-lg font-fira-code text-gray-300 mb-6">
            Ready to build something amazing together?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f4bb44]/10 
                        border border-[#f4bb44] rounded-full font-fira-code 
                        hover:bg-[#f4bb44]/20 transition-all duration-300 cursor-pointer
                        text-lg"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              <span>Let&apos;s Collaborate</span>
              <span className="text-[#f4bb44]">🚀</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
