import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Trust from "../components/Trust";
import Services from "../components/Services";
import Situations from "../components/Situations";
import ForWho from "../components/ForWho";
import Process from "../components/Process";
import Values from "../components/Values";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import InterventionArea from "../components/InterventionArea";
import StickyMobileCTA from "../components/StickyMobileCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] pb-24 text-[#3C3C3C] md:pb-0">
      <Header />
      <Hero />
      <About />
      <Trust />
      <Services />
      <Situations />
      <InterventionArea />
      <ForWho />
      <Process />
      <Values />
      <Offer />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}