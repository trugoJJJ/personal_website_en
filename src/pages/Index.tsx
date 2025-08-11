import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Articles } from "@/components/Articles";
import { VisualPortfolio } from "@/components/VisualPortfolio";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BigTypeCTA } from "@/components/BigTypeCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechStack />
      <Portfolio />
      <About />
      <Experience />
      <Skills />
      <Articles />
      <VisualPortfolio />
      <BigTypeCTA />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
