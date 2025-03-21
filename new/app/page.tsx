import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Skillset from "@/components/Home/Skillset";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Skillset />
      <Projects />
      <Contact />
    </>
  );
}
