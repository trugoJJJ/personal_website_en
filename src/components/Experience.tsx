import { GraduationCap, Briefcase, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Business Administration",
    school: "Uniwersytet Ekonomiczny w Warszawie",
    year: "2018-2020",
    description: "Specjalizacja: Digital Marketing & E-commerce"
  },
  {
    degree: "Licencjat - Marketing i Zarządzanie",
    school: "Akademia Leona Koźmińskiego",
    year: "2015-2018",
    description: "Praca dyplomowa: 'Wpływ AI na przyszłość marketingu cyfrowego'"
  }
];

const experience = [
  {
    position: "Senior Marketing Manager",
    company: "TechStart Solutions",
    period: "2022 - obecnie",
    description: "Zarządzanie budżetem marketingowym 500k+ PLN, wzrost MRR o 280%",
    achievements: [
      "Zwiększenie lead generation o 400%",
      "Wdrożenie marketing automation",
      "Optymalizacja customer acquisition cost o 45%"
    ]
  },
  {
    position: "Digital Marketing Specialist",
    company: "Growth Agency Pro",
    period: "2020 - 2022",
    description: "Prowadzenie kampanii performance marketing dla klientów e-commerce",
    achievements: [
      "Zarządzanie portfelem 15+ klientów",
      "Średni ROAS na poziomie 4.2",
      "Certyfikacja Google Ads & Facebook Blueprint"
    ]
  },
  {
    position: "Marketing Coordinator",
    company: "StartupHub Warsaw",
    period: "2019 - 2020",
    description: "Wsparcie startupów w budowaniu strategii go-to-market",
    achievements: [
      "Wsparcie 30+ startupów",
      "Organizacja 12 eventów marketingowych",
      "Budowa community 5000+ członków"
    ]
  }
];

const certifications = [
  {
    name: "Google Ads Certified",
    issuer: "Google",
    year: "2023"
  },
  {
    name: "Facebook Blueprint Certified",
    issuer: "Meta",
    year: "2023"
  },
  {
    name: "Google Analytics 4 Certified",
    issuer: "Google",
    year: "2023"
  },
  {
    name: "HubSpot Inbound Marketing",
    issuer: "HubSpot",
    year: "2022"
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Wykształcenie & Doświadczenie
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solidne fundamenty teoretyczne połączone z praktycznym doświadczeniem 
              w dynamicznym świecie digital marketingu
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Education */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Wykształcenie</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gradient-card p-6 rounded-lg shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 hover-scale"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                    <div className="text-primary font-medium mb-2">{edu.school}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {edu.year}
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-secondary rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Doświadczenie</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gradient-card p-6 rounded-lg shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 hover-scale"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{exp.position}</h4>
                    <div className="text-secondary font-medium mb-2">{exp.company}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="animate-fade-in-up" style={{animationDelay: "0.4s"}}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-accent rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Certyfikaty</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-card p-4 rounded-lg shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 hover-scale"
                  >
                    <h4 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h4>
                    <div className="text-accent font-medium text-sm mb-1">{cert.issuer}</div>
                    <div className="text-xs text-muted-foreground">{cert.year}</div>
                  </div>
                ))}
              </div>

              {/* Additional note */}
              <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-medium text-center">
                  Ciągle poszerzam swoje kompetencje poprzez kursy i certyfikacje branżowe
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};