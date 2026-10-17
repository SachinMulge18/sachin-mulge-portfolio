import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="lg:pl-[250px]">
      <Nav />
      <main className="pt-16 lg:pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Background />
      </main>
      <Contact />
      <BackToTop />
    </div>
  );
}
