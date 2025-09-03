"use client";

import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

const ArticlesList = () => {
  return (
    <main className="py-16">
      <SEO title="Artykuły – Blog" description="Wszystkie artykuły i wpisy na blogu" />
      <section className="container mx-auto px-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Artykuły – Blog</h1>
          <p className="text-muted-foreground mt-2">Wpisy o marketingu cyfrowym, automatyzacji i analityce.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article key={a.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={a.image} alt={`Artykuł: ${a.title}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {a.publishDate}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {a.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold">{a.title}</h2>
                <p className="text-sm text-muted-foreground">{a.excerpt}</p>
                <Link
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm font-medium text-[#C25A3A] hover:opacity-80 transition-opacity mt-12"
                >
                  <span className="border-b border-current">Czytaj na: dogtronic.io</span>
                </Link>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/articles/${a.id}`} aria-label={`Czytaj więcej: ${a.title}`}>
                    <ExternalLink className="h-4 w-4 mr-2" /> Czytaj więcej
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ArticlesList;
