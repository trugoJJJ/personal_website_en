import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { portfolioProjects } from "@/data/portfolio";

const CATEGORIES = [
  "Animacje",
  "Designe",
  "Zarządzanie zespołem",
  "Kampanie reklamowe",
] as const;

type Category = (typeof CATEGORIES)[number];

export const CombinedPortfolio = () => {
  const [active, setActive] = useState<Category | null>(null);

  const projects = portfolioProjects;
  const filtered = useMemo(
    () => projects.filter((p) => (active ? p.categories?.includes(active) : true)),
    [projects, active]
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Wybrane projekty i portfolio graficzne
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Przegląd realizacji — przefiltruj według kategorii.
          </p>
        </header>

        {/* Filtry */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((c) => {
            const selected = active === c;
            return (
              <Button
                key={c}
                size="lg"
                variant={selected ? "default" : "outline"}
                onClick={() => setActive(selected ? null : c)}
              >
                {c}
              </Button>
            );
          })}
        </div>

        {/* Lista projektów */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-card hover:shadow-hero transition-shadow"
            >
              <figure className="aspect-[4/3] overflow-hidden border-b border-border">
                <img
                  src={p.image}
                  alt={`${p.title} — projekt w kategorii ${p.categories?.[0] ?? "portfolio"}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </figure>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {p.title}
                  </h3>
                  {p.metrics && (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {p.metrics}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {p.description}
                </p>

                {p.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-full border border-border/70 px-2 py-1 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                {p.categories?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.categories.map((c) => (
                      <span key={c} className="text-xs text-primary">
                        #{c}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button asChild size="xl">
            <Link to="/portfolio">ZOBACZ WIĘCEJ PRAC</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CombinedPortfolio;
