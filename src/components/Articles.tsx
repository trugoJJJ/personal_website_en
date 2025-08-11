import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
export const Articles = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
              Najnowsze Artykuły
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dzielę się wiedzą i insights z branży digital marketingu. 
              Praktyczne porady, case studies i trendy, które warto znać.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => <article key={article.id} className="group hover-scale bg-gradient-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-in-up" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Link to={`/articles/${article.id}`} aria-label={`Czytaj więcej: ${article.title}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Czytaj więcej
                    </Link>
                  </Button>
                </div>
              </article>)}
          </div>

          {/* View All Articles Button */}
          <div className="text-center animate-fade-in-up" style={{
          animationDelay: "0.8s"
        }}>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6">
              <Link to="/articles" aria-label="Zobacz wszystkie artykuły">Zobacz wszystkie artykuły</Link>
            </Button>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 animate-fade-in-up" style={{
          animationDelay: "1s"
        }}>
            
          </div>

        </div>
      </div>
    </section>;
};