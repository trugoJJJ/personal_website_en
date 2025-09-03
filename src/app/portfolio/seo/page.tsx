"use client";

import ClientOnlyWrapper from '@/components/ClientOnlyWrapper';
import { Header } from "@/components/home/Header";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Building, User, TrendingUp, Target, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePalette, COLORS } from "@/components/home/hooks";
import { FooterSection } from "@/components/home/FooterSection";

const PortfolioMartomSEO = () => {
  const { isDark, P } = usePalette();

  // Hardcoded project data for SEO portfolio
  const project = {
    id: 1,
    title: "Kompleksowa obsługa SEO dla producenta drzwi zewnętrznych",
    description: "Długoterminowa strategia SEO dla czołowego polskiego producenta drzwi zewnętrznych, realizowana od 2022 roku",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    metrics: "+39% wzrost wyświetleń",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  };

  // Helpery stylistyczne (spójne z Hero.tsx)
  const headingStyles: React.CSSProperties = {
    color: isDark ? P("white") : P("black"),
  };
  const bigHeadingClass = "text-left text-[8vw] xs:text-[7vw] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]";
  const sectionOuter = (bg: string, withTopBorder = true): React.CSSProperties => ({
    background: bg,
    borderTop: withTopBorder ? `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}` : undefined,
  });
  const cardBase = (accent?: 'ecru' | 'white' | 'charcoal' | 'butter' | 'amaranth' | 'alloy'): React.CSSProperties => ({
    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
    background: accent === 'white' ? (isDark ? P('charcoal') : P('white')) : (accent ? P(accent) : (isDark ? P('charcoal') : P('white'))),
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
    background: bg === 'white' ? (isDark ? P('charcoal') : P('white')) : P(bg),
    color: bg === 'amaranth' || bg === 'alloy' ? P('white') : (isDark ? P('white') : P('black')),
    border: `${isDark ? '1px' : '2px'} solid ${isDark ? P('white') : P('black')}`,
    fontWeight: 800,
    fontSize: 12,
    padding: '4px 10px',
    display: 'inline-block'
  });

  // Specjalny layout dla projektu SEO (ID = 1, 2, 3) – przebudowany na styl Hero.tsx
  if (project.id === 1 || project.id === 2 || project.id === 3) {
    return (
      <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
        <Header />
        <main className="pt-28"> {/* offset pod fixed header */}
          <SEO 
            title="Optymalizacja SEO dla producenta drzwi – Adam Gałęcki"
            description="Kompleksowa optymalizacja SEO dla producenta drzwi zewnętrznych. Analiza słów kluczowych, optymalizacja techniczna, content marketing i wzrost pozycji w Google."
            canonical="https://galecki.website/portfolio/seo"
            ogImage="/og_cover.png"
          />

          {/* Sekcja tytułowa */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'), false)} className="pb-20">
            <div className="container mx-auto max-w-6xl px-6">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm mb-8 pt-4" style={{ opacity: .7 }}>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Start
                </Link>
                <span>→</span>
                <Link href="/portfolio" className="hover:opacity-100 transition-opacity">
                  Portfolio
                </Link>
                <span>→</span>
                <span className="font-medium" style={{ opacity: 1 }}>
                  {project.title}
                </span>
              </nav>
              
              <header className="mt-4 md:mt-8 mb-8 sm:mb-12 md:mb-20 text-center">
                <h1 className={bigHeadingClass + ' mb-8'} style={headingStyles}>{project.title}</h1>
                
                {/* Tagi przeniesione bezpośrednio pod tytuł */}
                <div className="flex flex-wrap gap-3 mb-12 justify-start"> {/* zmienione z justify-center na justify-start */}
                  {project.tags.map(tag => (
                    <span key={tag} style={pillStyle('white')}>{tag}</span>
                  ))}
                </div>
                
                {/* Ramka dopasowana do kontenera (nie full-width) */}
                <div
                  className="mb-8 px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 text-left"
                  style={{
                    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                    background: isDark ? P('ecru') : P('ecru'),
                    boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                  }}
                >
                  <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: isDark ? P('white') : P('charcoal'), opacity: .9 }}>
                    Długoterminowa strategia SEO dla czołowego polskiego producenta drzwi zewnętrznych (start 2022). Samodzielnie prowadziłem pełny zakres działań: audyt, strategia, optymalizacja techniczna, content, link building, analityka, stała komunikacja i raportowanie.
                  </p>
                </div>
                <p className="italic mt-4 text-sm md:text-base text-left" style={{ opacity: .6 }}>
                  W branży SEO przeciętna współpraca trwa 6–12 miesięcy. My pracujemy już 3 lata i planujemy działania co najmniej do końca 2025.
                </p>
              </header>
            </div>
            
            {/* Główne ujęcie - dopasowane do stylu ramek */}
            <div className="container mx-auto max-w-6xl px-6 mb-16">
              <figure 
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '1090/607',
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                  background: isDark ? P('charcoal') : P('ecru'),
                  boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                }}
              >
                <img 
                  src="/wykres_wzrost_ruchu.png" 
                  alt="Wykres wzrostu ruchu organicznego w czasie - dane SEO"
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </figure>
            </div>

            {/* Detale projektu - z powrotem w kontenerze */}
            <div className="container mx-auto max-w-6xl px-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
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
              
            </div>
            
          </section>

          {/* Wyzwania */}
          <section style={sectionOuter(P('ecru'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="wyzwania">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Wyzwania</h2>
              </header>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
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
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="efekty">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20 flex items-end justify-between flex-wrap gap-6">
                <h2 className={bigHeadingClass} style={headingStyles}>Efekty</h2>
              </header>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Widoczność</h4>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>+39% wyświetleń (2024 → 2025)</li>
                    <li>+22% wejść organicznych rok do roku</li>
                    <li>Stabilny wzrost mimo sezonowości branży</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><Target className="h-5 w-5" /> Frazy</h4>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>+90 nowych fraz TOP10 (2024)</li>
                    <li>650+ fraz TOP1–10 na koniec 2024</li>
                    <li>430+ jakościowych linków zewnętrznych (22–24)</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><Lightbulb className="h-5 w-5" /> Pozycjonowanie</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    Frazy niebrandowe stanowią 91% wyświetleń i 51% wizyt z TOP10 (2024). To realny dopływ nowych użytkowników w górze i środku lejka – baza pod przyszłe konwersje.
                  </p>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><ArrowRight className="h-5 w-5" /> Copywriting</h4>
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
                        ['Optymalizacja techniczna', 'Poprawa indeksacji, struktury nagłówków, kompresja grafiki, porządkowanie przekierowań, eliminacja kanibalizacji.'],
                        ['Systematyczny content marketing', 'Planowanie i publikacja artykułów odpowiadających realnym intencjom użytkowników.'],
                      ].map(([t,d])=> (
                        <div key={t}>
                          <h4 className="font-extrabold mb-1 text-sm md:text-base">{t}</h4>
                          <p className="text-sm" style={{ opacity:.75 }}>{d}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-8">
                      {[
                        ['Treści brandowane, proaktywne pozyskiwanie partnerów, optymalizacja profilu linkowego pod kątem różnorodności'],
                        ['Komunikacja i raportowanie', 'Miesięczne raporty + kwartalne przeglądy strategiczne: które klastry rosną, udział słow niebrandowych, efektywność linków.'],
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
                  
                  {/* Galeria przeniesiona z sekcji tytułowej */}
                  <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <figure 
                      className="relative overflow-hidden"
                      style={{
                        aspectRatio: '814/607',
                        ...cardBase('ecru')
                      }}
                    >
                      <img 
                        src="/google_search_console.png" 
                        alt="Dane z Google Search Console - skuteczność SEO"
                        className="w-full h-full object-cover"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </figure>
                    <figure 
                      className="relative overflow-hidden"
                      style={{
                        aspectRatio: '814/607',
                        ...cardBase('ecru')
                      }}
                    >
                      <img 
                        src="/ruch_organiczny.png" 
                        alt="Szczegółowe dane ruchu organicznego - Google Analytics"
                        className="w-full h-full object-cover"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </figure>
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
                        <li>Rozwój ~100 wpisów blog + 25 stron</li>
                        <li>Rozbudowa sekcji galerii i bloga</li>
                        <li>Klastry lokalne ("drzwi zewnętrzne + miasto") → przyszła sekcja zakupowa</li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Poprawa wydajności</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>Migracja serwera (prognoza +12–20% wydajności)</li>
                        <li>Optymalizacja szybkości ładowania</li>
                        
                      </ul>
                    </div>
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Zaawansowana analityka</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>Rozbudowanie GA4 + GTM</li>
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
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="dlaczego-3-lata">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Dlaczego współpraca trwa tak długo?</h2>
              </header>
              
              {/* Przebudowane boxy - pionowy layout z numerami (bez hover i gradientów) */}
              <div className="space-y-8">
                {[{
                  num: '01',
                  t: 'Łatwy kontakt i pełna odpowiedzialność',
                  d: 'Stała osoba prowadząca – brak utraty kontekstu, szybkie decyzje, pełna historia zmian. Klient wie z kim rozmawia, nie musi tłumaczyć od nowa każdemu nowemu specjaliście.'
                },{
                  num: '02',
                  t: 'Elastyczne reagowanie',
                  d: 'Strategia dopasowywana do algorytmów Google i priorytetów biznesowych (sezonowość, nowe linie produktowe). Gdy Google zmienia algorytm, natychmiast dostosowujemy strategię.'
                },{
                  num: '03',
                  t: 'Mierzalne rezultaty',
                  d: 'Każdy etap oparty na danych: wzrost organiczny, udział non‑brand, efektywność linków, konwersje. Comiesięczne raporty pokazują realny ROI z inwestycji w SEO.'
                }].map((item, index) => (
                  <div key={item.num} className="relative">
                    {/* Linia łącząca (tylko między elementami) */}
                    {index < 2 && (
                      <div 
                        className="absolute left-6 sm:left-7 md:left-8 top-16 sm:top-18 md:top-20 w-0.5 h-12 sm:h-14 md:h-16 z-0"
                        style={{ background: P('amaranth') }}
                      />
                    )}
                    
                    <div className="flex gap-3 sm:gap-6 md:gap-8 items-start relative z-10">
                      {/* Numer w kółku */}
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0"
                        style={{
                          background: P('amaranth'),
                          border: `${isDark ? '2px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                          borderRadius: '50%',
                          color: P('white'),
                        }}
                      >
                        <span className="font-extrabold text-sm sm:text-base md:text-lg">{item.num}</span>
                      </div>
                      
                      {/* Zawartość */}
                      <div 
                        className="flex-1 p-4 sm:p-6 md:p-8"
                        style={{
                          ...cardBase('white'),
                          borderLeft: `6px solid ${P('amaranth')}`,
                        }}
                      >
                        <h3 className="font-extrabold mb-4 text-lg md:text-xl flex items-center gap-3">
                          <span 
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ background: P('amaranth') }}
                          />
                          {item.t}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .85 }}>
                          {item.d}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Wnioski */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="wnioski">
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
                  <div key={t} className="p-6 md:p-8" style={cardBase('white')}>
                    <h3 className="font-extrabold mb-2 text-sm md:text-base">{t}</h3>
                    <p className="text-sm" style={{ opacity: .8 }}>{d}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-8 md:p-12" style={cardBase('butter')}>
                <p className="font-extrabold text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: isDark ? P('white') : P('black') }}>
                Gdy mamy pełną kontrolę nad SEO i systematycznie nad nim pracujemy, efekty narastają z czasem - każdy kolejny kwartał daje lepsze wyniki i chroni nas przed problemami przy większych zmianach na stronie.
                </p>
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
        <SEO 
          title="Optymalizacja SEO dla producenta drzwi – Adam Gałęcki"
          description="Kompleksowa optymalizacja SEO dla producenta drzwi zewnętrznych. Analiza słów kluczowych, optymalizacja techniczna, content marketing i wzrost pozycji w Google."
          canonical="https://monke.io/portfolio/seo"
          ogImage="/og_cover.png"
        />
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
              <Link href="/portfolio">Wróć do listy</Link>
            </Button>
          </footer>
        </article>
      </main>
      <FooterSection />
    </div>
  );
};

export default function SEOPortfolioPage() {
  return (
    <ClientOnlyWrapper>
      <PortfolioMartomSEO />
    </ClientOnlyWrapper>
  );
}
