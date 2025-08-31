import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, Clock, ExternalLink } from "lucide-react";
import { articles } from "@/data/articles";

/* ================== PALETA – LIGHT ================== */
const COLORS = {
  amaranth: "#C25A3A",  // Burnt Sienna – główny akcent (primary)
  ecru: "#FAF6EE",      // Cream background
  butter: "#D8A23A",    // Goldenrod – akcent / highlight
  alloy: "#736134",     // Olive Brown – secondary / średni kontrast
  charcoal: "#2E2217",  // Dark Brown – ciemne elementy / tekst
  white: "#FFFFFF",
  black: "#000000",
};

/* ================== PALETA – DARK (fiolety/ciemne) ================== */
const DARK_COLORS: typeof COLORS = {
  amaranth: "#6B2D5B",
  ecru: "#241b2b",
  butter: "#3A245A",
  alloy: "#4E2A7F",
  charcoal: "#0B0B10",
  white: "#FFFFFF",
  black: "#000000",
};

/* ================== HOOKI/UTILS ================== */
function usePalette() {
  const isDomDark = () => document.documentElement.classList.contains("dark");
  const [isDark, setIsDark] = useState<boolean>(isDomDark());

  useEffect(() => {
    const mo = new MutationObserver(() => setIsDark(isDomDark()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const P = (k: keyof typeof COLORS) => (isDark ? DARK_COLORS : COLORS)[k];
  return { isDark, P };
}

/* ================== SECTION HEADING ================== */
const SectionHeading = ({ children, id }: { children: any, id?: string }) => {
  const { isDark, P } = usePalette();
  return (
    <header id={id} className="mt-4 md:mt-8 mb-12 md:mb-24">
      <h2
        className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
        style={{ color: isDark ? P("white") : P("black") }}
      >
        {children}
      </h2>
    </header>
  );
};

const ArticlesSection = () => {
  const { isDark, P } = usePalette();
  
  return (
    <section className="py-24 md:py-36" id="articles"
             style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading>Artykuły</SectionHeading>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group"
              style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("white"), color: isDark ? P("white") : P("charcoal") }}
            >
              <div className="aspect-[4/3] overflow-hidden relative"
                   style={{ borderBottom: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-extrabold px-2 py-1"
                        style={{ background: P("alloy"), color: P("white"), border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}` }}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1"><CalendarIcon className="h-4 w-4" /> {article.publishDate}</div>
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {article.readTime}</div>
                </div>
                <h3 className="text-xl font-extrabold">{article.title}</h3>
                <p className="text-sm">{article.excerpt}</p>
                <Link
                  to={`/articles/${article.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 font-extrabold px-4 py-3 transition-colors"
                  style={{
                    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                    background: isDark ? P("charcoal") : P("white"),
                    color: isDark ? P("white") : P("black")
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = P("amaranth");
                    (e.currentTarget as HTMLAnchorElement).style.color = P("white");
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = isDark ? P("charcoal") : P("white");
                    (e.currentTarget as HTMLAnchorElement).style.color = isDark ? P("white") : P("black");
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Czytaj więcej
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ArticlesSection };
