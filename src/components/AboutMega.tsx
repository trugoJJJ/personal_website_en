import portrait from "@/assets/hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/i18n";

// Dane (placeholders zgodnie z wymaganiami)
const education = [
  {
    degree: "Master of Business Administration",
    school: "Uniwersytet Ekonomiczny w Warszawie",
    year: "2018–2020",
    description: "Specjalizacja: Digital Marketing & E‑commerce",
  },
  // Jedna karta wykształcenia usunięta
];

const certifications = [
  { name: "Google Ads Certified", issuer: "Google", year: "2023" },
  { name: "Facebook Blueprint Certified", issuer: "Meta", year: "2023" },
  { name: "Google Analytics 4 Certified", issuer: "Google", year: "2023" },
  { name: "HubSpot Inbound Marketing", issuer: "HubSpot", year: "2022" },
];

const experience = [
  {
    position: "Senior Marketing Manager",
    company: "TechStart Solutions",
    period: "2022 – obecnie",
    summary: "Zarządzanie budżetem 500k+ PLN, wzrost MRR o 280%",
  },
  {
    position: "Digital Marketing Specialist",
    company: "Growth Agency Pro",
    period: "2020 – 2022",
    summary: "Performance marketing dla e‑commerce, średni ROAS 4.2",
  },
  // Dwie nowe karty doświadczenia (placeholders)
  {
    position: "Growth Lead",
    company: "SaaS Cloud",
    period: "2019 – 2020",
    summary: "Scale‑up: lead gen +220%, wdrożenia automation i analityki",
  },
  {
    position: "Marketing Intern",
    company: "StartupHub",
    period: "2018 – 2019",
    summary: "Wsparcie kampanii i eventów, badania rynkowe",
  },
];

const skills = [
  "Google Ads",
  "Facebook Ads",
  "GA4",
  "SEO/SEM",
  "Automation",
  "A/B Testing",
  "Data Analysis",
  "Content Marketing",
  "Email Marketing",
  "Project Management",
  "Team Leadership",
];

const techCategories = [
  { title: "AI Tools", tools: ["ChatGPT", "Claude", "Midjourney", "Runway"] },
  { title: "Grafika", tools: ["Photoshop", "Illustrator", "Figma", "Canva"] },
  { title: "Animacja", tools: ["After Effects", "Lottie", "Rive", "GSAP"] },
  { title: "Analityka", tools: ["GA4", "Hotjar", "Mixpanel", "Amplitude"] },
];

export const AboutMega = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Nagłówek sekcji */}
          <header className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("nav.about")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
              Placeholder — połączenie sekcji: Więcej o mnie, Wykształcenie & Doświadczenie, Umiejętności, Kompetencje i Tech Stack.
            </p>
          </header>

          {/* 1) Więcej o mnie */}
          <section className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <img
                src={portrait}
                alt="Portret – o mnie"
                loading="lazy"
                className="w-full h-64 object-cover md:h-96"
              />
            </figure>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-foreground">Więcej o mnie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Placeholder sekcji „O mnie”. Minimalistyczny opis wartości i podejścia do pracy. 
                Docelowo w tym miejscu pojawi się rozbudowany storytelling oraz kluczowe rezultaty.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Łączę strategiczne myślenie z danymi i kreatywną egzekucją — od strategii, przez kampanie,
                po produkty digital. Skupiam się na efektach biznesowych.
              </p>
            </div>
          </section>

          {/* 2) Wykształcenie i certyfikaty — jedna kolumna łączona */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Wykształcenie i Certyfikaty</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Kolumna 1: Wykształcenie (1 karta) */}
              <div className="md:col-span-1 space-y-4">
                {education.map((e, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <div className="font-medium text-foreground">{e.degree}</div>
                    <div className="text-primary text-sm">{e.school}</div>
                    <div className="text-xs text-muted-foreground mt-1">{e.year}</div>
                    <p className="text-sm text-muted-foreground mt-2">{e.description}</p>
                  </div>
                ))}
              </div>

              {/* Kolumny 2–3: Certyfikaty (razem z edukacją w jednym bloku sekcji) */}
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
                {certifications.map((c, i) => (
                  <div key={i} className="rounded-xl border border-border bg-card p-5">
                    <div className="font-medium text-foreground">{c.name}</div>
                    <div className="text-accent text-sm">{c.issuer}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3) Doświadczenie — dwie kolumny */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Doświadczenie</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {experience.map((e, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <div className="font-medium text-foreground">{e.position}</div>
                  <div className="text-secondary text-sm">{e.company}</div>
                  <div className="text-xs text-muted-foreground mt-1">{e.period}</div>
                  <p className="text-sm text-muted-foreground mt-2">{e.summary}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4) Umiejętności, Kompetencje i Tech Stack */}
          <section className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Umiejętności i kompetencje</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-sm rounded-full border border-border bg-muted/40 px-3 py-1 text-foreground/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Tech Stack</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {techCategories.map((cat) => (
                  <div key={cat.title} className="rounded-xl border border-border p-6">
                    <div className="font-medium text-foreground mb-2">{cat.title}</div>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((t) => (
                        <span key={t} className="text-xs rounded-full border border-border px-2 py-1 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA — pobierz CV */}
          <div className="mt-12 flex justify-center">
            <Button size="xl" asChild>
              <a href="#cv">{t("about.cv")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMega;
