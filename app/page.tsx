import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import ForWho from "../components/ForWho";
import Process from "../components/Process";
import Values from "../components/Values";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import InterventionArea from "../components/InterventionArea";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#3C3C3C]">
      <Header />
      <Hero />
      <About />
      <Services />
      <InterventionArea />
      <ForWho />
      <Process />
      <Values />
      <Offer />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}