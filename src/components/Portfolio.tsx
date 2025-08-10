import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    title: "E-commerce Growth Campaign",
    description: "Kampania marketingowa, która zwiększyła sprzedaż o 340% w 6 miesięcy",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Google Ads", "Facebook Ads", "Email Marketing", "Analytics"],
    metrics: "+340% sprzedaż",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "SaaS Landing Page Optimization",
    description: "Redesign i optymalizacja strony głównej, która podwoiła konwersję",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["A/B Testing", "UX/UI", "Analytics", "Webflow"],
    metrics: "+127% konwersja",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Content Marketing Automation",
    description: "System automatyzacji content marketingu z wykorzystaniem AI",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    tags: ["AI Tools", "Automation", "Content Marketing", "Social Media"],
    metrics: "70% oszczędność czasu",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Multi-channel Attribution Model",
    description: "Zaawansowany model atrybukcji do trackowania customer journey",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Analytics", "Python", "Data Science", "Attribution"],
    metrics: "360° wgląd w dane",
    link: "#",
    github: "#"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
            Wybrane Projekty
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oto kilka projektów, które pokazują moje podejście do digital marketingu 
            i umiejętność dostarczania mierzalnych rezultatów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className="group hover-scale bg-gradient-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.metrics}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Zobacz projekt
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6">
            Zobacz więcej projektów
          </Button>
        </div>
      </div>
    </section>
  );
};