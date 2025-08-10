import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Jak AI zmienia landscape digital marketingu w 2024",
    description: "Praktyczny przewodnik po wykorzystaniu sztucznej inteligencji w kampaniach marketingowych",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    readTime: "8 min",
    publishDate: "15 styczeń 2024",
    category: "AI & Marketing",
    link: "#",
    excerpt: "Sztuczna inteligencja już nie jest przyszłością - to teraźniejszość marketingu. Dowiedz się, jak wykorzystać AI do automatyzacji, personalizacji i optymalizacji kampanii."
  },
  {
    id: 2,
    title: "Customer Journey Mapping: Od świadomości do konwersji",
    description: "Kompleksowy guide po mapowaniu ścieżki klienta w erze omnichannel",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    readTime: "12 min",
    publishDate: "8 styczeń 2024",
    category: "Strategy",
    link: "#",
    excerpt: "Skuteczna strategia marketingowa wymaga głębokiego zrozumienia ścieżki klienta. Zobacz, jak krok po kroku zmapować customer journey i zoptymalizować każdy touchpoint."
  },
  {
    id: 3,
    title: "Marketing Automation: Workflows, które sprzedają",
    description: "Jak stworzyć automatyzacje marketingowe, które zwiększają konwersję o 300%",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    readTime: "10 min",
    publishDate: "2 styczeń 2024",
    category: "Automation",
    link: "#",
    excerpt: "Marketing automation to nie tylko wysyłanie maili. To inteligentne nurturing leadów, segmentacja behawioralna i spersonalizowane doświadczenia w skali."
  }
];

export const Articles = () => {
  return (
    <section className="py-20 bg-muted/30">
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
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="group hover-scale bg-gradient-card rounded-xl overflow-hidden shadow-card border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Czytaj więcej
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* View All Articles Button */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: "0.8s"}}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-6">
              Zobacz wszystkie artykuły
            </Button>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: "1s"}}>
            <div className="max-w-4xl mx-auto p-8 bg-gradient-accent rounded-2xl text-white shadow-hero text-center">
              <h4 className="text-2xl font-semibold mb-4">Bądź na bieżąco</h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                Subskrybuj newsletter i otrzymuj najnowsze artykuły o digital marketingu 
                oraz ekskluzywne case studies bezpośrednio na swoją skrzynkę.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-accent hover:bg-white/90 font-semibold px-8 py-6"
              >
                Zapisz się do newslettera
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};