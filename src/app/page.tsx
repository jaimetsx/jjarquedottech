import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-8">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}