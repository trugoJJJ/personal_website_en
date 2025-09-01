"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from "@/components/home/Header";
import { FooterSection } from "@/components/home/FooterSection";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/data/portfolio-pages";
import { usePalette } from "@/components/home/hooks";
import { ProjectCard } from "@/components/home/ProjectComponents";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";

const PortfolioPageContent = () => {
  const { isDark, P } = usePalette();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Przekierowanie na stronę główną do sekcji portfolio
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/#portfolio';
    }
  }, []);

  // Automatyczne pobieranie wszystkich projektów
  const portfolioProjects = getAllProjects();

  // Helpery stylistyczne (spójne z resztą strony)
  const headingStyles: React.CSSProperties = {
    color: isDark ? P("white") : P("black"),
  };
  const bigHeadingClass = "text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]";
  const sectionOuter = (bg: string, withTopBorder = true): React.CSSProperties => ({
    background: bg,
    borderTop: withTopBorder ? `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}` : undefined,
  });

  // Pobierz unikalne kategorie
  const categories = Array.from(new Set(portfolioProjects.flatMap(project => project.categories)));

  // Filtruj projekty według kategorii
  const filteredProjects = activeCategory 
    ? portfolioProjects.filter(project => project.categories.includes(activeCategory))
    : portfolioProjects;

  return (
    <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
      <Header />
      <main className="pt-28"> {/* offset pod fixed header */}
        <SEO 
          title="Portfolio – Adam Gałęcki – Projekty Marketingowe"
          description="Zobacz moje projekty z zakresu SEO, kampanii reklamowych, designu i automatyzacji. Kompleksowe rozwiązania marketingowe dla firm B2B i B2C."
          canonical="https://galecki.website/portfolio"
          ogImage="/og_cover.png"
        />

        {/* Sekcja tytułowa */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'), false)} className="pb-20">
          <div className="container mx-auto max-w-6xl px-6">
            {/* Breadcrumbs ze strzałkami */}
            <nav className="flex items-center gap-2 text-sm mb-8 pt-4" style={{ opacity: .7 }}>
              <Link href="/" className="hover:opacity-100 transition-opacity">
                Start
              </Link>
              <span>→</span>
              <Link href="/#portfolio" className="font-medium hover:opacity-100 transition-opacity" style={{ opacity: 1 }}>
                Portfolio
              </Link>
            </nav>

            {/* Tytuł główny */}
            <div className="mb-12">
              <h1 style={headingStyles} className={bigHeadingClass}>
                Portfolio
              </h1>
              <p className="mt-6 text-lg max-w-2xl" style={{ color: isDark ? P('white') : P('charcoal') }}>
                Kompleksowe projekty marketingowe, które przynoszą realne rezultaty. 
                Od strategii SEO po kampanie reklamowe - każdy projekt to krok w kierunku sukcesu.
              </p>
            </div>

            {/* Kategorie bez zaokrąglonych rogów */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Button
                variant="outline"
                onClick={() => setActiveCategory(null)}
                className={`font-extrabold transition-colors rounded-none ${!activeCategory ? 'bg-amaranth text-white' : ''}`}
                style={{
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                  background: !activeCategory ? P('amaranth') : (isDark ? P('charcoal') : P('white')),
                  color: !activeCategory ? P('white') : (isDark ? P('white') : P('black')),
                }}
                onMouseOver={(e) => {
                  if (!activeCategory) return;
                  (e.currentTarget as HTMLButtonElement).style.background = P('amaranth');
                  (e.currentTarget as HTMLButtonElement).style.color = P('white');
                }}
                onMouseOut={(e) => {
                  if (!activeCategory) return;
                  (e.currentTarget as HTMLButtonElement).style.background = isDark ? P('charcoal') : P('white');
                  (e.currentTarget as HTMLButtonElement).style.color = isDark ? P('white') : P('black');
                }}
              >
                Wszystkie ({portfolioProjects.length})
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className={`font-extrabold transition-colors rounded-none ${activeCategory === category ? 'bg-amaranth text-white' : ''}`}
                  style={{
                    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                    background: activeCategory === category ? P('amaranth') : (isDark ? P('charcoal') : P('white')),
                    color: activeCategory === category ? P('white') : (isDark ? P('white') : P('black')),
                  }}
                  onMouseOver={(e) => {
                    if (activeCategory !== category) return;
                    (e.currentTarget as HTMLButtonElement).style.background = P('amaranth');
                    (e.currentTarget as HTMLButtonElement).style.color = P('white');
                  }}
                  onMouseOut={(e) => {
                    if (activeCategory !== category) return;
                    (e.currentTarget as HTMLButtonElement).style.background = isDark ? P('charcoal') : P('white');
                    (e.currentTarget as HTMLButtonElement).style.color = isDark ? P('white') : P('black');
                  }}
                >
                  {category} ({portfolioProjects.filter(project => project.categories.includes(category)).length})
                </Button>
              ))}
            </div>

            {/* Karty projektów */}
            <div className="grid gap-12">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isHighlighted={false}
                />
              ))}
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </div>
  );
};

export default function PortfolioPage() {
  return (
    <ClientOnlyWrapper fallback={
      <div className="bg-white text-[#2E2217]">
        <div className="fixed top-0 inset-x-0 z-50 bg-white border-b-3 border-black">
          <nav className="w-full h-16 flex items-center relative">
            <a href="#home" className="font-extrabold tracking-tight leading-none ml-4 md:ml-8 text-[#2E2217]">Adam&nbsp;Gałęcki</a>
          </nav>
        </div>
        <main className="pt-28">
          <div className="container mx-auto max-w-6xl px-6 pb-20">
            <nav className="flex items-center gap-2 text-sm mb-8 pt-4 opacity-70">
              <a href="/" className="hover:opacity-100 transition-opacity">Start</a>
              <span>→</span>
              <a href="/#portfolio" className="font-medium opacity-100 hover:opacity-100 transition-opacity">Portfolio</a>
            </nav>
            <div className="mb-12">
              <h1 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
                Portfolio
              </h1>
              <p className="mt-6 text-lg max-w-2xl text-[#2E2217]">
                Kompleksowe projekty marketingowe, które przynoszą realne rezultaty. 
                Od strategii SEO po kampanie reklamowe - każdy projekt to krok w kierunku sukcesu.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-12">
              <button className="font-extrabold transition-colors rounded-none border-3 border-black bg-[#C25A3A] text-white px-4 py-2">
                Wszystkie (8)
              </button>
              <button className="font-extrabold transition-colors rounded-none border-3 border-black bg-white text-black px-4 py-2">
                Projekty sprzedażowe (4)
              </button>
              <button className="font-extrabold transition-colors rounded-none border-3 border-black bg-white text-black px-4 py-2">
                Projekty kreatywne (4)
              </button>
            </div>
            <div className="grid gap-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="border-3 border-black bg-white p-6">
                  <div className="w-full h-48 bg-gray-200 mb-4"></div>
                  <h3 className="text-xl font-bold mb-2">Project {i}</h3>
                  <p className="text-sm text-gray-600">Project description</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        <footer className="bg-white border-t-3 border-black text-[#686a6c]">
          <div className="w-full px-6">
            <div className="pt-12 md:pt-18 pb-8 md:pb-12">
              <div className="py-6 grid gap-6 md:gap-6 md:grid-cols-4 md:items-center items-start">
                <div className="flex flex-col items-center text-center md:relative md:pr-8 mb-6 md:mb-0">
                  <h3 className="text-base font-extrabold mb-4 text-[#686a6c]">Adam Gałęcki – Firma Gałęcka</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-8 h-8 border border-black bg-white"></div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-4 md:mb-0">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-[#686a6c]">NIP: 9462752489</span>
                    <div className="px-2 py-0.5 text-[10px] font-extrabold tracking-wide border border-black bg-white text-black">Kopiuj</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-4 md:mb-0">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-[#686a6c]">REGON: 541404566</span>
                    <div className="px-2 py-0.5 text-[10px] font-extrabold tracking-wide border border-black bg-white text-black">Kopiuj</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed">
                  <div className="flex items-center gap-2 text-[#686a6c]">
                    <div className="w-4 h-4 border border-black bg-white"></div>
                    <span>Lublin, Polska</span>
                  </div>
                </div>
              </div>
              <div className="pt-8 pb-8 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-semibold tracking-wide opacity-45 text-[#686a6c]">
                  <span>© Firma Gałęcka 2025</span>
                  <div className="hidden sm:block w-px h-4 bg-[#686a6c] opacity-30"></div>
                  <a href="/polityka-prywatnosci" className="hover:opacity-70 transition-opacity text-[#686a6c]">
                    Polityka Prywatności
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    }>
      <PortfolioPageContent />
    </ClientOnlyWrapper>
  );
}
