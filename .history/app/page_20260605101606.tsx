import Header from ".components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#3C3C3C]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Values />
      <Contact />
    </main>
  );
}