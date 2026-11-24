import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Dynamic Aurora & Grid Background */}
      <BackgroundOrbs />

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
