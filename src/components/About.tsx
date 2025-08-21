import { Target, TrendingUp, Users, Award } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";

const stats = [
  {
    icon: Target,
    value: "150+",
    label: "Zrealizowanych projektów",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Średni wzrost ROI",
    color: "text-secondary"
  },
  {
    icon: Users,
    value: "50+",
    label: "Zadowolonych klientów",
    color: "text-accent"
  },
  {
    icon: Award,
    value: "5",
    label: "Lat doświadczenia",
    color: "text-primary"
  }
];

const skills = [
  "Digital Marketing Strategy",
  "Performance Marketing",
  "Marketing Automation",
  "Data Analytics",
  "Growth Hacking",
  "Content Marketing",
  "SEO/SEM",
  "Social Media Marketing"
];

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Więcej o mnie
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych.
</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Content */}
            <div className="space-y-8 animate-fade-in-up">
              <figure className="overflow-hidden rounded-xl border border-border bg-card">
                <img src={portrait} alt="Portret – o mnie" loading="lazy" className="w-full h-64 object-cover md:h-80" />
              </figure>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                5 lat doświadczenia w marketingu
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                  Od grafika, przez specjalistę ds. SEO po managera zespołu marketingowo-sprzedażowego. Realizowałem strategie marketingowe dla różnych branż i pracowałem nad projektami dla największych Polskich marek.
                  </p>
                  <p>
                  Wykształcenie kierunkowe oraz doświadczenie zarówno kreatywne, techniczne jak i w zarządzaniu dają mi unikalną perspektywę. Dzięki temu dostarczam skuteczne i zoptymalizowane kosztowo rozwiązania dopasowane do każdego klienta.
                  </p>
                </div>
              </div>

            
              
            </div>

            {/* Right Column: Stats and Contact */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{animationDelay: "0.3s"}}>
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-gradient-card rounded-xl p-6 text-center border border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} strokeWidth={1} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact links */}
              <div className="animate-fade-in-up" style={{animationDelay: "0.6s"}}>
                <div className="max-w-4xl mx-auto p-8 bg-foreground rounded-2xl text-background shadow-hero">
                  <h4 className="text-xl font-semibold mb-6 text-left">
                    Skontaktuj się ze mną
                  </h4>
                  <div className="space-y-4 text-left text-lg">
                    <a
                      href="https://linkedin.com/in/adamgalecki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/adamgalecki
                    </a>
                    <a
                      href="https://tiktok.com/@adamgalecki"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      tiktok.com/@adamgalecki
                    </a>
                    <a
                      href="mailto:agalecki.work@gmail.com"
                      className="block font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      agalecki.work@gmail.com
                    </a>
                    <p className="font-mono text-muted-foreground">
                      (+48) 666 ⛧ 663 8007
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};