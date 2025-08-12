import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/i18n";

const education = [
  {
    degree: "Master of Business Administration",
    school: "Uniwersytet Ekonomiczny w Warszawie",
    year: "2018–2020",
    description: "Specjalizacja: Digital Marketing & E‑commerce",
  },
  // Usunięta druga karta (zgodnie z wymaganiem)
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
  // Dwie nowe karty doświadczenia (placeholdery)
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
          <header className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("nav.about")}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
              Placeholder opisu — minimalistyczny profil, dane i osiągnięcia.
            </p>
          </header>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mx-auto grid grid-cols-2 md:grid-cols-4 max-w-3xl">
              <TabsTrigger value="about">{t("about.tabs.about")}</TabsTrigger>
              <TabsTrigger value="edu">{t("about.tabs.education")}</TabsTrigger>
              <TabsTrigger value="exp">{t("about.tabs.experience")}</TabsTrigger>
              <TabsTrigger value="skills">{t("about.tabs.skills")}</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-8">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Placeholder sekcji „O mnie”. Tu w przyszłości wstawimy treści docelowe.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="edu" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Wykształcenie</h3>
                  {education.map((e, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <div className="font-medium text-foreground">{e.degree}</div>
                      <div className="text-primary text-sm">{e.school}</div>
                      <div className="text-xs text-muted-foreground mt-1">{e.year}</div>
                      <p className="text-sm text-muted-foreground mt-2">{e.description}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Certyfikaty</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {certifications.map((c, i) => (
                      <div key={i} className="rounded-xl border border-border bg-card p-5">
                        <div className="font-medium text-foreground">{c.name}</div>
                        <div className="text-accent text-sm">{c.issuer}</div>
                        <div className="text-xs text-muted-foreground mt-1">{c.year}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="exp" className="mt-8">
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
            </TabsContent>

            <TabsContent value="skills" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Umiejętności</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Google Ads",
                      "Facebook Ads",
                      "GA4",
                      "SEO/SEM",
                      "Automation",
                      "A/B Testing",
                      "Data Analysis",
                    ].map((s) => (
                      <span key={s} className="text-sm rounded-full border border-border px-3 py-1 text-foreground/90">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {techCategories.map((cat) => (
                      <div key={cat.title} className="rounded-xl border border-border p-4">
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
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-10 flex justify-center">
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
