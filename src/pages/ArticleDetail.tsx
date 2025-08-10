import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => String(a.id) === id);

  if (!article) {
    return (
      <main className="py-16">
        <SEO title="Artykuł nie znaleziony" noIndex />
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Artykuł nie znaleziony</h1>
          <Button asChild variant="outline">
            <Link to="/articles">Wróć do artykułów</Link>
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main className="py-16">
      <SEO title={`${article.title} – Artykuł`} description={article.description} />
      <article className="container mx-auto px-6 max-w-3xl">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">{article.title}</h1>
          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {article.publishDate}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {article.readTime}</span>
          </div>
        </header>

        <div className="rounded-xl overflow-hidden border border-border mb-8">
          <img src={article.image} alt={`Artykuł: ${article.title}`} className="w-full h-auto object-cover" />
        </div>

        <section className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">{article.excerpt}</p>
          <p className="mt-6 text-muted-foreground">Pełna treść wkrótce…</p>
        </section>

        <footer className="pt-6 border-t border-border mt-10">
          <Button asChild variant="outline">
            <Link to="/articles">Wróć do listy</Link>
          </Button>
        </footer>
      </article>
    </main>
  );
};

export default ArticleDetail;
