import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioProjects.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <main className="py-16">
        <SEO title="Projekt nie znaleziony" noIndex />
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Projekt nie znaleziony</h1>
          <Button asChild variant="outline">
            <Link to="/portfolio">Wróć do portfolio</Link>
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main className="py-16">
      <SEO title={`${project.title} – Portfolio`} description={project.description} />
      <article className="container mx-auto px-6 max-w-5xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground mt-2">{project.description}</p>
        </header>

        <div className="rounded-xl overflow-hidden border border-border mb-8">
          <img src={project.image} alt={`Projekt: ${project.title}`} className="w-full h-auto object-cover" />
        </div>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold">Zakres i technologie</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </section>

        <section className="flex items-center gap-3 mb-12">
          <span className="text-sm font-medium text-primary bg-muted px-3 py-1 rounded-full">{project.metrics}</span>
          <Button asChild variant="outline">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Live
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </a>
          </Button>
        </section>

        <footer className="pt-6 border-t border-border">
          <Button asChild variant="outline">
            <Link to="/portfolio">Wróć do listy</Link>
          </Button>
        </footer>
      </article>
    </main>
  );
};

export default PortfolioDetail;
