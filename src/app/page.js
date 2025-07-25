import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/projects";

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
