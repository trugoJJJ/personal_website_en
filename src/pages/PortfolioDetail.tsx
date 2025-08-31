import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioProjects } from "@/data/portfolio";
import { ExternalLink, Github, Calendar, Building, User, TrendingUp, Target, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { usePalette, COLORS } from "@/components/home/hooks";
import { FooterSection } from "@/components/home/FooterSection";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";

// Header component from Hero.tsx
const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "O mnie" },
  { href: "#experience", label: "Doświadczenie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#articles", label: "Artykuły" },
];

const Header = () => {
  const { isDark, P } = usePalette();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
  }, [open]);
  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ background: isDark ? P("charcoal") : P("white"), borderBottom: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
      {/* Full width nav without container so center is relative to viewport */}
      <nav className="w-full h-16 flex items-center relative">
        {/* Left brand */}
        <a href="#home" className="font-extrabold tracking-tight leading-none ml-4 md:ml-8" style={{ color: isDark ? P("white") : P("charcoal") }}>Adam&nbsp;Gałęcki</a>
        {/* Center desktop nav absolutely centered to page */}
        <ul
          className="hidden desk:flex items-center gap-8 text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ color: isDark ? P("white") : P("charcoal") }}
        >
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="font-bold hover:underline">{l.label}</a>
            </li>
          ))}
        </ul>
        {/* Right actions desktop */}
        <div className="hidden desk:flex items-center gap-2 ml-auto mr-4 md:mr-8">
          <LanguageSwitch />
          <ThemeToggle />
          <Button size="lg" asChild className="rounded-none font-extrabold transition-transform hover:scale-[1.02]" style={{ background: P("amaranth"), color: P("white"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
            <a href="#contact">Kontakt</a>
          </Button>
        </div>
        {/* Mobile right side */}
        <div className="flex items-center gap-2 ml-auto desk:hidden">
          <ThemeToggle />
          <Button variant="outline" size="icon" aria-label="Otwórz menu" onClick={() => setOpen(true)} className="rounded-none" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50" style={{ background: isDark ? P("charcoal") : P("ecru") }}>
          <div className="w-full h-16 px-4 md:px-8 flex items-center justify-between" style={{ borderBottom: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
            <span className="font-extrabold">Menu</span>
            <div className="flex items-center gap-2">
              <LanguageSwitch />
              <Button variant="outline" size="icon" aria-label="Zamknij menu" onClick={() => setOpen(false)} className="rounded-none" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="mt-6 px-6 desk:hidden">
            <ul className="grid gap-4 text-lg" style={{ color: isDark ? P("white") : P("charcoal") }}>
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="block py-3" style={{ borderBottom: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}` }} onClick={() => setOpen(false)}>{l.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild size="xl" className="w-full rounded-none font-extrabold" style={{ background: P("amaranth"), color: P("white"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
                <a href="#contact">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioProjects.find((p) => String(p.id) === id);
  const { isDark, P } = usePalette();

  if (!project) {
    return (
      <div style={{ background: isDark ? P("charcoal") : P("white"), color: isDark ? P("white") : P("charcoal") }}>
        <Header />
        <main className="py-16">
          <SEO title="Projekt nie znaleziony" noIndex />
          <section className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Projekt nie znaleziony</h1>
            <Button asChild variant="outline">
              <Link to="/portfolio">Wróć do portfolio</Link>
            </Button>
          </section>
        </main>
        <FooterSection />
      </div>
    );
  }

  // Helpery stylistyczne (spójne z Hero.tsx)
  const headingStyles: React.CSSProperties = {
    color: isDark ? P("white") : P("black"),
  };
  const bigHeadingClass = "text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]";
  const sectionOuter = (bg: string, withTopBorder = true): React.CSSProperties => ({
    background: bg,
    borderTop: withTopBorder ? `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}` : undefined,
  });
  const cardBase = (accent?: 'ecru' | 'white' | 'charcoal' | 'butter' | 'amaranth' | 'alloy'): React.CSSProperties => ({
    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
    background: accent ? P(accent) : (isDark ? P('charcoal') : P('white')),
    color: isDark ? P('white') : P('charcoal'),
  });
  const subtleBlock = (): React.CSSProperties => ({
    ...cardBase('ecru'),
  });
  const statNumberStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem,3vw,2.6rem)',
    fontWeight: 800,
    lineHeight: 1,
  };
  const pillStyle = (bg: keyof typeof COLORS) => ({
    background: P(bg),
    color: bg === 'amaranth' || bg === 'alloy' ? P('white') : (isDark ? P('white') : P('black')),
    border: `${isDark ? '1px' : '2px'} solid ${isDark ? P('white') : P('black')}`,
    fontWeight: 800,
    fontSize: 12,
    padding: '4px 10px',
    display: 'inline-block'
  });

  // Specjalny layout dla projektu SEO (ID = 1) – przebudowany na styl Hero.tsx
  if (project.id === 1) {
    return (
      <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
        <Header />
        <main className="pt-28"> {/* offset pod fixed header */}
          <SEO title={`${project.title} – Portfolio`} description={project.description} />

          {/* Sekcja tytułowa */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'), false)} className="pb-20">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mt-4 md:mt-8 mb-12 md:mb-20 text-center">
                <h1 className={bigHeadingClass + ' mb-8'} style={headingStyles}>{project.title}</h1>
                {/* Pełna szerokość (full-bleed) ramki z opisem */}
                <div
                  className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-8"
                >
                  <div
                    className="px-4 md:px-8 py-8 text-left overflow-hidden" /* dopasowano padding do nagłówka (ml-4 md:ml-8) */
                    style={{
                      border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                      background: isDark ? P('charcoal') : P('ecru'),
                      boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                    }}
                  >
                    <p className="text-lg md:text-xl font-medium leading-relaxed max-w-6xl mx-auto" style={{ color: isDark ? P('white') : P('charcoal'), opacity: .9 }}>
                      Długoterminowa strategia SEO dla czołowego polskiego producenta drzwi zewnętrznych (start 2022). Samodzielnie prowadziłem pełny zakres działań: audyt, strategia, roadmapy, optymalizacja techniczna, content, link building, analityka, stała komunikacja i raportowanie.
                    </p>
                  </div>
                </div>
                <p className="italic mt-4 text-sm md:text-base" style={{ opacity: .6 }}>
                  W branży SEO gdzie przeciętna współpraca trwa 6–12 miesięcy – tutaj 3 lata ciągłej realizacji i zaplanowane działania co najmniej do końca 2025.
                </p>
              </header>
              {/* Detale projektu */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Calendar, label: 'Okres', value: '2022 → 2025+' },
                  { icon: Building, label: 'Branża', value: 'Producent drzwi' },
                  { icon: User, label: 'Zakres', value: 'Kompleksowa obsługa' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="p-6 text-center" style={subtleBlock()}>
                    <Icon className="h-8 w-8 mx-auto mb-4" />
                    <div className="font-extrabold tracking-wide text-xs mb-1" style={{ opacity: .7 }}>{label.toUpperCase()}</div>
                    <div className="text-lg font-extrabold leading-tight">{value}</div>
                  </div>
                ))}
              </div>
              {/* Galeria placeholder (pozostaje) */}
              <div className="grid md:grid-cols-3 gap-8">
                <figure className="md:col-span-2 aspect-video flex items-center justify-center relative overflow-hidden" style={cardBase('ecru')}>
                  <div className="text-center px-6">
                    <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center" style={cardBase('white')}>
                      <TrendingUp className="h-10 w-10" />
                    </div>
                    <h3 className="font-extrabold mb-2">Główne ujęcie</h3>
                    <p className="text-sm" style={{ opacity: .7 }}>Format 16:9 – miejsce na grafikę / wykres</p>
                  </div>
                </figure>
                <div className="space-y-8">
                  {[Target, Lightbulb].map((I, idx) => (
                    <figure key={idx} className="aspect-square flex items-center justify-center overflow-hidden" style={cardBase('ecru')}>
                      <div className="text-center px-4">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                          <I className="h-8 w-8" />
                        </div>
                        <div className="font-extrabold text-sm">Ujęcie {idx + 2}</div>
                        <div className="text-[11px] mt-1" style={{ opacity: .6 }}>Kwadrat (1:1)</div>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Wyzwania */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="wyzwania">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Wyzwania</h2>
              </header>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <div style={pillStyle('amaranth')} className="mb-4">01</div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .9 }}>
                    Zwiększenie widoczności organicznej w mocno konkurencyjnej branży drzwi – konieczne było stworzenie wielowarstwowej strategii (TOP, mid, bottom funnel) oraz mapy klastrów tematycznych.
                  </p>
                </div>
                <div className="p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <div style={pillStyle('amaranth')} className="mb-4">02</div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .9 }}>
                    Zbalansowanie udziału fraz brandowych vs. niebrandowych – celem było pozyskanie nowej publiczności, która jeszcze nie zna marki, bez utraty dominacji na zapytania brandowe.
                  </p>
                </div>
                <div className="p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <div style={pillStyle('amaranth')} className="mb-4">03</div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .9 }}>
                    Przygotowanie infrastruktury pod transformację w 2026 (nowa wersja serwisu) przy jednoczesnym utrzymaniu pozycji i minimalizacji ryzyka migracji (treści, struktura URL, internal linking, sygnały off‑site).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Efekty (rozszerzone) */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="efekty">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-12 md:mb-20 flex items-end justify-between flex-wrap gap-6">
                <h2 className={bigHeadingClass} style={headingStyles}>Efekty</h2>
                <span className="font-extrabold text-xs tracking-wider" style={pillStyle('alloy')}>ROLLOING 12M</span>
              </header>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { v: '+22%', l: 'Wzrost wejść (organic)' },
                  { v: '+3 mln', l: 'Wyświetleń organicznych' },
                  { v: '+650', l: 'Frazy TOP1–10' },
                ].map(s => (
                  <div key={s.l} className="p-8 text-center" style={cardBase('ecru')}>
                    <div style={statNumberStyle}>{s.v}</div>
                    <div className="mt-3 font-extrabold text-sm md:text-base" style={{ opacity: .85 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="p-8 flex flex-col" style={cardBase('white')}>
                  <h3 className="font-extrabold mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Widoczność</h3>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>+39% wyświetleń (2024 → 2025)</li>
                    <li>+22% wejść organicznych rok do roku</li>
                    <li>Stabilny wzrost mimo sezonowości branży</li>
                  </ul>
                </div>
                <div className="p-8 flex flex-col" style={cardBase('white')}>
                  <h3 className="font-extrabold mb-4 flex items-center gap-2"><Target className="h-5 w-5" /> Frazy</h3>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>+90 nowych fraz TOP10 (2024)</li>
                    <li>650+ fraz TOP1–10 na koniec 2024</li>
                    <li>430+ jakościowych linków zewnętrznych (22–24)</li>
                  </ul>
                </div>
                <div className="p-8 flex flex-col" style={cardBase('white')}>
                  <h3 className="font-extrabold mb-4 flex items-center gap-2"><Lightbulb className="h-5 w-5" /> Pozycjonowanie strategiczne</h3>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    Frazy niebrandowe stanowią 91% wyświetleń i 51% wizyt z TOP10 (2024). To realny dopływ nowych użytkowników w górze i środku lejka – baza pod przyszłe konwersje.
                  </p>
                </div>
                <div className="p-8 flex flex-col" style={cardBase('white')}>
                  <h3 className="font-extrabold mb-4 flex items-center gap-2"><ArrowRight className="h-5 w-5" /> Copywriting & Content</h3>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>100+ artykułów blog (systematyczna publikacja)</li>
                    <li>180+ publikacji off‑site (link building / PR)</li>
                    <li>Stałe odświeżanie starych materiałów pod aktualne intencje</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Proces (rozszerzony) */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="proces">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Proces</h2>
              </header>
              <div className="space-y-24">
                {/* Faza 1 */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <span style={pillStyle('amaranth')}>FAZA 1</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Wzrost 2022–2024</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-14">
                    <div className="space-y-8">
                      {[
                        ['Audyt i strategia początkowa', 'Pełny audyt techniczny + treści + profil linków. Zdefiniowanie KPI, segmentacja zapytań i roadmapa kwartalna.'],
                        ['Optymalizacja techniczna', 'Poprawa indeksacji, struktury nagłówków, CWV, kompresja grafiki, porządkowanie przekierowań, eliminacja kanibalizacji.'],
                        ['Systematyczny content marketing', 'Planowanie i publikacja artykułów odpowiadających realnym intencjom użytkowników (TOP/MID/BOTTOM).'],
                      ].map(([t,d])=> (
                        <div key={t}>
                          <h4 className="font-extrabold mb-1 text-sm md:text-base">{t}</h4>
                          <p className="text-sm" style={{ opacity:.75 }}>{d}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-8">
                      {[
                        ['Budowanie autorytetu (link building)', 'Publikacje sponsorowane, outreach jakościowy, dywersyfikacja anchorów i źródeł – nacisk na topical relevance.'],
                        ['Komunikacja i raportowanie', 'Miesięczne raporty + kwartalne przeglądy strategiczne: które klastry rosną, udział non‑brand, efektywność linków.'],
                      ].map(([t,d])=> (
                        <div key={t}>
                          <h4 className="font-extrabold mb-1 text-sm md:text-base">{t}</h4>
                          <p className="text-sm" style={{ opacity:.75 }}>{d}</p>
                        </div>
                      ))}
                      <div className="p-5" style={cardBase('white')}>
                        <div className="grid grid-cols-2 gap-6 text-center">
                          <div>
                            <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>100+</div>
                            <div className="text-[11px] font-bold" style={{ opacity: .6 }}>Artykułów blog</div>
                          </div>
                          <div>
                            <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>180+</div>
                            <div className="text-[11px] font-bold" style={{ opacity: .6 }}>Publikacji off‑site</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Faza 2 */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <span style={pillStyle('alloy')}>FAZA 2</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Przygotowanie rozbudowy 2025</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-10">
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Aktualizacja treści i struktury</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>Odświeżenie kluczowych podstron</li>
                        <li>Refaktoryzacja ~100 wpisów blog + 25 stron</li>
                        <li>Rozbudowa sekcji galerii i bloga</li>
                        <li>Klastry lokalne ("drzwi zewnętrzne + miasto") → przyszła sekcja zakupowa</li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Poprawa wydajności</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>Migracja serwera (prognoza +12–20% wydajności)</li>
                        <li>Optymalizacja czasu TTFB i LCP</li>
                        <li>Standaryzacja komponentów medialnych</li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Zaawansowana analityka</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>Doprecyzowanie GA4 + GTM</li>
                        <li>Integracja z kampaniami Ads (GA4 → Ads / Meta)</li>
                        <li>Hotjar do identyfikacji przeszkód UX</li>
                        <li>Automatyczne raporty (dashboard & alerty)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dlaczego współpraca trwa */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="dlaczego-3-lata">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Dlaczego 3 lata</h2>
              </header>
              <div className="grid md:grid-cols-3 gap-10">
                {[{
                  t: 'Łatwy kontakt i pełna odpowiedzialność',
                  d: 'Stała osoba prowadząca – brak utraty kontekstu, szybkie decyzje, pełna historia zmian.'
                },{
                  t: 'Elastyczne reagowanie',
                  d: 'Strategia iteracyjna – dopasowywana do algorytmów Google i priorytetów biznesowych (sezonowość, nowe linie produktowe).'
                },{
                  t: 'Mierzalne rezultaty',
                  d: 'Każdy etap oparty na danych: wzrost organiczny, udział non‑brand, efektywność linków, konwersje.'
                }].map(b => (
                  <div key={b.t} className="p-6 md:p-8" style={cardBase('ecru')}>
                    <h3 className="font-extrabold mb-3 text-sm md:text-base">{b.t}</h3>
                    <p className="text-sm" style={{ opacity:.8 }}>{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Wnioski */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="wnioski">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Wnioski</h2>
              </header>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  ['Trwałość', 'Konsekwencja i korekty kwartalne zamiast chaotycznych zwrotów kierunku.'],
                  ['ROI', 'Ruch non‑brand to nowi klienci — baza pod retencję i remarketing.'],
                  ['Skalowalność', 'Fundament pod redesign + nowe sekcje produktowe i lokalne.'],
                ].map(([t,d]) => (
                  <div key={t} className="p-6 md:p-8" style={cardBase('ecru')}>
                    <h3 className="font-extrabold mb-2 text-sm md:text-base">{t}</h3>
                    <p className="text-sm" style={{ opacity: .8 }}>{d}</p>
                  </div>
                ))}
              </div>
              <div className="p-8 md:p-12" style={cardBase('butter')}>
                <p className="font-extrabold text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: isDark ? P('white') : P('black') }}>
                  Strategiczne SEO z pełną odpowiedzialnością operacyjną buduje wartość kumulatywną – każdy kwartał zwiększa przewagę i redukuje ryzyko przy dużych zmianach (migracja, redesign, ekspansja).
                </p>
              </div>
            </div>
          </section>

          {/* Tag + CTA powrotu */}
          <section style={sectionOuter(P('ecru'))} className="py-16" id="podsumowanie">
            <div className="container mx-auto max-w-6xl px-6">
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} style={pillStyle('white')}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <span style={pillStyle('amaranth')}>{project.metrics}</span>
                <Button asChild className="rounded-none font-extrabold" style={{ background: P('amaranth'), color: P('white'), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}` }}>
                  <Link to="/portfolio" className="flex items-center gap-2">← Wróć do portfolio</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <FooterSection />
      </div>
    );
  }

  // Default layout for other projects
  return (
    <div style={{ background: isDark ? P("charcoal") : P("white"), color: isDark ? P("white") : P("charcoal") }}>
      <Header />
      <main className="py-16">
        <SEO title={`${project.title} – Portfolio`} description={project.description} />
        <article className="container mx-auto px-6 max-w-5xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground mt-2">{project.description}</p>
          </header>

          <div className="overflow-hidden border-3 border-border mb-8">
            <img src={project.image} alt={`Projekt: ${project.title}`} className="w-full h-auto object-cover" />
          </div>

          <section className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Zakres i technologie</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t} variant="secondary" className="border-2">{t}</Badge>
              ))}
            </div>
          </section>

          <section className="flex items-center gap-3 mb-12">
            <span className="text-sm font-medium text-primary bg-muted px-3 py-1 border-3 border-primary/30">{project.metrics}</span>
            <Button asChild variant="outline" className="border-3">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Live
              </a>
            </Button>
            <Button asChild variant="outline" className="border-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </a>
            </Button>
          </section>

          <footer className="pt-6 border-t-3 border-border">
            <Button asChild variant="outline" className="border-3">
              <Link to="/portfolio">Wróć do listy</Link>
            </Button>
          </footer>
        </article>
      </main>
      <FooterSection />
    </div>
  );
};

export default PortfolioDetail;
