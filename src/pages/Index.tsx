import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import CombinedPortfolio from "@/components/CombinedPortfolio";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { SkillsAndTech } from "@/components/SkillsAndTech";
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
        <About />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      <section id="skills" className="scroll-mt-24">
        <SkillsAndTech />
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
