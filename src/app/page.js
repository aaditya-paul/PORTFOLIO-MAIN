import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/projects";

export const metadata = {
  title: "Home",
  description:
    "Welcome to Aaditya Paul's portfolio. Full-Stack Developer specializing in modern web technologies including React, Next.js, Node.js, and more. View my projects and get in touch.",
  openGraph: {
    title: "Aaditya Paul | Full-Stack Developer",
    description:
      "Welcome to my portfolio. Full-Stack Developer specializing in modern web technologies.",
  },
  alternates: {
    canonical: "https://aaditya-paul.in",
  },
};

function Home() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
