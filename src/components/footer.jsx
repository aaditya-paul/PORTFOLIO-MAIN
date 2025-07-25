"use client";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

function Footer() {
  const router = useRouter();
  const handleResumeClick = () => {
    router.push("/resume");
  };

  return (
    <div className="md:pt-0 md:pb-8 py-12 font-fira-code flex flex-col items-center justify-center text-white bg-black">
      <div>
        Made By{" "}
        <span className=" font-playwrite text-orange-300 ">Aaditya Paul.</span>
      </div>
      <div>Copyright © 2025.</div>

      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        transition={{
          ease: "easeInOut",
        }}
        onClick={handleResumeClick}
        className=" animate-pulse underline underline-offset-4 py-2 cursor-pointer"
      >
        View Resume 📁
      </motion.button>
    </div>
  );
}

export default Footer;
