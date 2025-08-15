import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import CombinedPortfolio from "@/components/CombinedPortfolio";
import AboutCombinedLegacy from "@/components/AboutCombinedLegacy";
import { Articles } from "@/components/Articles";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BigTypeCTA } from "@/components/BigTypeCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section id="home" className="scroll-mt-24 py-8 sm:py-12 md:py-16 lg:py-36 xl:py-36">
        <Hero />
      </section>

      <section id="portfolio" className="scroll-mt-24 py-0 sm:py-0 md:py-0 lg:py-0 xl:py-0">
        <CombinedPortfolio />
      </section>

      <section id="about" className="scroll-mt-24 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <AboutCombinedLegacy />
      </section>

      <section id="articles" className="scroll-mt-24 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <Articles />
      </section>

      <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <BigTypeCTA />
      </div>

      <section id="contact" className="scroll-mt-24 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <CTA />
      </section>

      <Footer />
    </div>
  );
};

export default Index;