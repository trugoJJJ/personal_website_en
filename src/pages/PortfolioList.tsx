import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioList = () => {
  return (
    <main className="py-16">
      <SEO title="Portfolio – Projekty" description="Wszystkie projekty i case studies" />
      <section className="container mx-auto px-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Portfolio – Projekty</h1>
          <p className="text-muted-foreground mt-2">Przegląd wszystkich realizacji i case studies.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <article key={project.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={`Projekt: ${project.title}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <span className="text-sm font-medium text-primary bg-muted px-3 py-1 rounded-full">{project.metrics}</span>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link to={`/portfolio/${project.id}`} aria-label={`Zobacz: ${project.title}`}>
                      <ExternalLink className="h-4 w-4 mr-2" /> Szczegóły
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioList;
