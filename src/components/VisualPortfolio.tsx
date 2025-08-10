import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

const visualWorks = [
  {
    id: 1,
    title: "Brand Identity - TechStart",
    type: "Branding",
    image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=600&h=400&fit=crop",
    description: "Kompleksowa identyfikacja wizualna dla startupu technologicznego",
    tools: ["Illustrator", "Photoshop", "Figma"]
  },
  {
    id: 2,
    title: "Product Animation",
    type: "Animation",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    description: "Animacja produktowa dla kampanii social media",
    tools: ["After Effects", "Lottie"]
  },
  {
    id: 3,
    title: "E-commerce UI Design",
    type: "UI/UX",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    description: "Nowoczesny design sklepu internetowego z fokusem na konwersję",
    tools: ["Figma", "Photoshop"]
  },
  {
    id: 4,
    title: "Social Media Templates",
    type: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    description: "Zestaw szablonów dla konsystentnej komunikacji w social media",
    tools: ["Canva", "Illustrator"]
  },
  {
    id: 5,
    title: "Explainer Video",
    type: "Animation",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    description: "Animowany film objaśniający dla platformy SaaS",
    tools: ["After Effects", "Illustrator"]
  },
  {
    id: 6,
    title: "Landing Page Design",
    type: "Web Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    description: "High-converting landing page dla kampanii PPC",
    tools: ["Figma", "Webflow"]
  }
];

export const VisualPortfolio = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Portfolio Graficzne & Animacje
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kreatywne projekty, które łączą estetykę z funkcjonalnością. 
              Od identyfikacji wizualnej po animacje marketingowe.
            </p>
          </div>

          {/* Visual Works Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visualWorks.map((work, index) => (
              <div
                key={work.id}
                className="group hover-scale bg-gradient-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {work.type === "Animation" ? (
                      <Button variant="secondary" size="sm" className="bg-white/20 backdrop-blur-sm">
                        <Play className="h-4 w-4 mr-2" />
                        Zobacz animację
                      </Button>
                    ) : (
                      <Button variant="secondary" size="sm" className="bg-white/20 backdrop-blur-sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Zobacz projekt
                      </Button>
                    )}
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {work.type}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {work.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {work.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: "1s"}}>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6">
              <a href="/portfolio" aria-label="Zobacz pełne portfolio">Zobacz pełne portfolio</a>
            </Button>
          </div>

          {/* Services CTA */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: "1.2s"}}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-card p-6 rounded-xl shadow-card border border-border/50 text-center hover-scale">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Animacje</h4>
                <p className="text-sm text-muted-foreground">Explainer videos, product animations, social media content</p>
              </div>

              <div className="bg-gradient-card p-6 rounded-xl shadow-card border border-border/50 text-center hover-scale">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Design</h4>
                <p className="text-sm text-muted-foreground">Landing pages, UI/UX, brand identity, marketing materials</p>
              </div>

              <div className="bg-gradient-card p-6 rounded-xl shadow-card border border-border/50 text-center hover-scale">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Badge className="h-8 w-8 text-white bg-transparent border-0" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Branding</h4>
                <p className="text-sm text-muted-foreground">Logo design, visual identity, brand guidelines, assets</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};