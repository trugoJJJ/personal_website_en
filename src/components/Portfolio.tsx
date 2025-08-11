import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioProjects } from "@/data/portfolio";
export const Portfolio = () => {
  return <section className="py-20 bg-muted/30">
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
          {portfolioProjects.map((project, index) => <div key={project.id} className="group hover-scale bg-gradient-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-in-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  {project.tags.map(tag => <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                      {tag}
                    </span>)}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to={`/portfolio/${project.id}`} aria-label={`Zobacz projekt: ${project.title}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Zobacz projekt
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" aria-label="Repozytorium projektu">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>)}
        </div>

        {/* View More Button */}
        
      </div>
    </section>;
};