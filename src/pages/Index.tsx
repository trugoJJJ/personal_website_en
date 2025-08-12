import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import CombinedPortfolio from "@/components/CombinedPortfolio";
import AboutMega from "@/components/AboutMega";
import { Articles } from "@/components/Articles";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BigTypeCTA } from "@/components/BigTypeCTA";
 
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="portfolio" className="scroll-mt-24">
        <CombinedPortfolio />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutMega />
      </section>

      <section id="articles" className="scroll-mt-24">
        <Articles />
      </section>

      <BigTypeCTA />

      <section id="contact" className="scroll-mt-24">
        <CTA />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
