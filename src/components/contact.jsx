"use client";
import Email from "../../public/assets/email.svg";
import LIN from "../../public/assets/linkedIn.svg";
import GH from "../../public/assets/github.svg";
import INSTA from "../../public/assets/insta.svg";
import BENTO from "../../public/assets/bento.svg";
import Footer from "./footer";
import {motion} from "framer-motion";
import Image from "next/image";

function Contact() {
  const contact = [
    {
      title: "Email",
      subtitle: "Drop me a line",
      icon: Email,
      url: "mailto:aadityapaul2006@gmail.com",
      description: "aadityapaul2006@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      icon: LIN,
      url: "https://www.linkedin.com/in/aaditya-paul/",
      description: "Professional networking",
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "GitHub",
      subtitle: "Check out my code",
      icon: GH,
      url: "https://github.com/aaditya-paul/",
      description: "Open source contributions",
      color: "from-gray-600 to-gray-700",
    },
    {
      title: "Instagram",
      subtitle: "Behind the scenes",
      icon: INSTA,
      url: "https://www.instagram.com/__the.frustrated.guy__/",
      description: "Personal updates & stories",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Bento",
      subtitle: "All links in one place",
      icon: BENTO,
      url: "https://bento.me/aaditya-paul",
      description: "Complete link collection",
      color: "from-orange-500 to-red-500",
    },
  ];
  return (
    <div id="contact" className="relative min-h-screen w-full bg-black">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[20%] right-[-20%] top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.10),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[60%] left-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,164,0,.08),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 flex flex-col gap-8 md:gap-16 py-24 px-5 md:px-12 lg:px-48 text-white">
        {/* Title Section */}
        <motion.div
          initial={false}
          whileInView={{
            clipPath: "inset(0 0 0 0)",
            transition: {duration: 1.5, ease: "easeInOut"},
          }}
          viewport={{once: true}}
          style={{
            textShadow: "oklch(0.75 0.183 55.934) 0.15vw 0.15vw",
            display: "inline-block",
            clipPath: "inset(0 100% 0 0)",
          }}
          className="text-3xl md:text-[48px] font-poppins font-medium underline underline-offset-8 text-center"
        >
          REACH ME OUT
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8, ease: "easeInOut"}}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-fira-code text-gray-300 leading-relaxed mb-4">
            Ready to bring your ideas to life? I&apos;m always excited to
            discuss new projects, collaborations, or just chat about technology
            and innovation.
          </p>
          <p className="text-base font-fira-code text-[#f4bb44]">
            Choose your preferred way to connect! 🚀
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1, ease: "easeInOut", delay: 0.2}}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {contact.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{scale: 0, opacity: 0, y: 50}}
              whileInView={{scale: 1, opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{
                scale: 1.05,
                transition: {duration: 0.2},
              }}
              className="group bg-gray-900/30 border border-gray-700 hover:border-[#f4bb44] 
                       rounded-xl p-6 transition-all duration-300 
                       hover:bg-[#f4bb44]/5 hover:shadow-[0_0_30px_rgba(244,187,68,0.1)]
                       flex flex-col items-center text-center space-y-4"
            >
              {/* Icon with gradient background */}
              <div
                className={`relative p-4 rounded-full bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <Image
                  width={50}
                  height={50}
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 filter brightness-0 invert"
                />
                <div className="absolute inset-0 rounded-full bg-[#f4bb44]/0 group-hover:bg-[#f4bb44]/20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-poppins text-[#f4bb44] group-hover:text-[#f4bb44] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-fira-code text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.subtitle}
                </p>
                <p className="text-xs font-fira-code text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="flex items-center gap-1 text-sm font-fira-code text-[#f4bb44] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span>Connect</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Contact Section */}
        <motion.div
          initial={{y: 50, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1, ease: "easeInOut", delay: 0.4}}
          className="text-center mt-16 space-y-8"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-poppins text-[#f4bb44] mb-4">
              Quick Response Guaranteed
            </h3>
            <p className="text-base font-fira-code text-gray-300 leading-relaxed">
              I typically respond to emails within 24 hours. For urgent matters,
              LinkedIn messages get the fastest response time.
            </p>
          </div>

          {/* Response Time Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              {metric: "< 24h", label: "Email Response", icon: "📧"},
              {metric: "< 4h", label: "LinkedIn Reply", icon: "💼"},
              {metric: "100%", label: "Response Rate", icon: "✅"},
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{
                  delay: 0.6 + 0.1 * index,
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 hover:border-[#f4bb44] transition-colors duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-lg font-poppins text-[#f4bb44] font-bold">
                  {stat.metric}
                </div>
                <div className="text-xs font-fira-code text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{scale: 0, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          viewport={{once: true}}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-center"
        >
          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
            <a
              href="mailto:aadityapaul2006@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f4bb44]/10 
                        border border-[#f4bb44] rounded-full font-fira-code 
                        hover:bg-[#f4bb44]/20 transition-all duration-300
                        text-lg hover:shadow-[0_0_20px_rgba(244,187,68,0.3)]"
            >
              <span>Start a Conversation</span>
              <span className="text-[#f4bb44]">💬</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
