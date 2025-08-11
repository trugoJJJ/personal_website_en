import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { SkillsAndTech } from "@/components/SkillsAndTech";
import { Articles } from "@/components/Articles";
import { VisualPortfolio } from "@/components/VisualPortfolio";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { BigTypeCTA } from "@/components/BigTypeCTA";
 
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Portfolio />
      <About />
      <Experience />
      <SkillsAndTech />
      <Articles />
      <VisualPortfolio />
      <BigTypeCTA />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
