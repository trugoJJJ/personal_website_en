import { SEO } from "@/components/SEO";

const Blog = () => {
  return (
    <main className="py-16">
      <SEO title="Blog – Wkrótce" description="Sekcja blogowa w przygotowaniu" />
      <section className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground mt-3">Nowa sekcja blogowa pojawi się wkrótce. Zajrzyj do działu Artykuły już teraz.</p>
        <a href="/articles" className="underline">Przejdź do artykułów</a>
      </section>
    </main>
  );
};

export default Blog;
