import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { portfolioProjects } from "@/data/portfolio";
import { useI18n } from "@/contexts/i18n";

// Category tokens to keep i18n-safe matching
export type CategoryId = "animations" | "design" | "team" | "campaigns";

const CATEGORIES: { id: CategoryId; labelKey: string }[] = [
  { id: "animations", labelKey: "filters.animations" },
  { id: "design", labelKey: "filters.design" },
  { id: "team", labelKey: "filters.team" },
  { id: "campaigns", labelKey: "filters.campaigns" },
];

export const CombinedPortfolio = () => {
  const { t } = useI18n();
  const [active, setActive] = useState<CategoryId | null>(null);

  // Always show 9 tiles (fill with placeholders if needed)
  const items = useMemo(() => portfolioProjects.slice(0, 9), []);
  const placeholdersCount = Math.max(0, 9 - items.length);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {t("portfolio.combined.title")}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.combined.subtitle")}
          </p>
        </header>

        {/* Filters (do not filter list, only highlight matches) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(({ id, labelKey }) => {
            const selected = active === id;
            return (
              <Button
                key={id}
                size="xl"
                variant={selected ? "default" : "outline"}
                onClick={() => setActive(selected ? null : id)}
                aria-pressed={selected}
              >
                {t(labelKey)}
              </Button>
            );
          })}
        </div>

        {/* Grid: always 9 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => {
            const isHighlighted = active ? p.categories?.includes(active) : false;
            return (
              <article
                key={p.id}
                className={`group overflow-hidden rounded-xl border bg-card shadow-card transition-all ${
                  isHighlighted ? "border-primary ring-2 ring-primary/40" : "border-border"
                }`}
              >
                <figure className="aspect-[4/3] overflow-hidden border-b border-border">
                  <img
                    src={p.image}
                    alt={`${p.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </figure>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className={`text-lg font-semibold leading-snug ${isHighlighted ? "text-primary" : "text-foreground"}`}>
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
                        <span key={c} className="text-xs text-primary/80">
                          #{t(
                            c === "animations"
                              ? "filters.animations"
                              : c === "design"
                              ? "filters.design"
                              : c === "team"
                              ? "filters.team"
                              : "filters.campaigns"
                          )}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}

          {/* Placeholders to reach 9 */}
          {Array.from({ length: placeholdersCount }).map((_, i) => (
            <div
              key={`ph-${i}`}
              className="rounded-xl border border-dashed border-border bg-muted/30 p-5 animate-pulse"
            >
              <div className="aspect-[4/3] rounded-md bg-muted mb-4" />
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-muted rounded w-full mb-2" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button asChild size="xl">
            <Link to="/portfolio">{t("portfolio.cta.more")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CombinedPortfolio;
