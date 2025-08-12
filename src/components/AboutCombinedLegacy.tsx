import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { SkillsAndTech } from "@/components/SkillsAndTech";

// Jeden długi blok łączący poprzednie sekcje bez zmiany ich wyglądu
export const AboutCombinedLegacy = () => {
  return (
    <section className="bg-background">
      {/* Zachowujemy oryginalne komponenty (z ich spacingiem) w jednej sekcji */}
      <About />
      <Experience />
      <SkillsAndTech />
    </section>
  );
};

export default AboutCombinedLegacy;
