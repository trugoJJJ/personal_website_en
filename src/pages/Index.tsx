import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import CombinedPortfolio from "@/components/CombinedPortfolio";
import AboutCombinedLegacy from "@/components/AboutCombinedLegacy";
import { Articles } from "@/components/Articles";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section id="home" className="scroll-mt-24 py-8 sm:py-12 md:py-16 lg:py-36 xl:py-36">
        <Hero />
      </section>
    </div>
  );
};

export default Index;