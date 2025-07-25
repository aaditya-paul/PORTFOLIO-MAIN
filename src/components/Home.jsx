import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import HeroSection from "./HeroSection";
import Projects from "./projects";

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
