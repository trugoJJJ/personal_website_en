"use client";

// Fixed imports for Vercel deployment
import ClientOnlyWrapper from '@/components/ClientOnlyWrapper';
import { Header } from "@/components/home/Header";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Building, 
  User, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  PhoneCall, 
  Mail 
} from "lucide-react";
import Link from "next/link";
import { usePalette, COLORS } from "@/components/home/hooks";
import { FooterSection } from "@/components/home/FooterSection";

const PortfolioMartomAnalytics = () => {
  const { isDark, P } = usePalette();

  // Hardcoded project data for Analytics portfolio
  const project = {
    id: 3,
    title: "Implementacja systemu śledzenia danych o odwiedzających witrynę",
    description: "Kompleksowa implementacja systemu śledzenia umożliwiająca pełną kontrolę nad danymi analitycznymi",
    tags: ["Google Analytics", "Google Tag Manager", "Konwersje", "Google Ads", "Meta Ads"],
    metrics: "150 tys. wykrytych konwersji",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  };

  if (!project) {
    return (
      <div style={{ background: isDark ? P("charcoal") : P("white"), color: isDark ? P("white") : P("charcoal") }}>
        <Header />
        <main className="py-16">
          <SEO title="Projekt nie znaleziony" noIndex />
          <section className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Projekt nie znaleziony</h1>
            <Button asChild variant="outline">
              <Link href="/portfolio">Wróć do portfolio</Link>
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

  // Specjalny layout dla projektu Analytics (ID = 3) – przebudowany na styl Hero.tsx
  if (project.id === 3) {
    return (
      <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
        <Header />
        <main className="pt-28"> {/* offset pod fixed header */}
          <SEO 
            title="Implementacja systemu śledzenia danych – Adam Gałęcki"
            description="Kompleksowa implementacja systemu śledzenia danych dla producenta drzwi. Google Analytics, Google Tag Manager, śledzenie konwersji i optymalizacja kampanii reklamowych."
            canonical="https://galecki.website/portfolio/analytics"
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
                  Implementacja systemu śledzenia
                </span>
              </nav>
              
              <header className="mt-4 md:mt-8 mb-8 sm:mb-12 md:mb-20 text-center">
                <h1 className={bigHeadingClass + ' mb-8'} style={headingStyles}>Implementacja systemu śledzenia danych</h1>
                
                {/* Tagi przeniesione bezpośrednio pod tytuł */}
                <div className="flex flex-wrap gap-3 mb-12 justify-start">
                  {['Google Analytics', 'Google Tag Manager', 'Konwersje', 'Google Ads', 'Meta Ads'].map(tag => (
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
                    Producent drzwi zewnętrznych miał problem ze starym systemem śledzenia danych (Google Tag Manager + GA4). Stracono do niego dostęp przez urwanie kontaktu z agencją, która go wdrożyła. Reprezentując firmę Dogtronic podjąłem się realizacji projektu, który zakładał stworzenie nowego systemu śledzenia, który da klientowi pełną kontrolę nad danymi.
                  </p>
                </div>
                <p className="italic mt-4 text-sm md:text-base text-left" style={{ opacity: .6 }}>
                  Kompleksowa implementacja umożliwiająca śledzenie całej ścieżki klienta od pierwszego wejścia na stronę do finalizacji kontaktu.
                </p>
              </header>
            </div>
            
            {/* Główne ujęcie - dopasowane do stylu ramek */}
            <div className="container mx-auto max-w-6xl px-6 mb-16">
              <figure 
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '1024/532',
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                  background: isDark ? P('charcoal') : P('ecru'),
                  boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                }}
              >
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <source src="/google_analytics_screen.mp4" type="video/mp4" />
                  Twoja przeglądarka nie obsługuje odtwarzania wideo.
                </video>
              </figure>
            </div>

            {/* Detale projektu - z powrotem w kontenerze */}
            <div className="container mx-auto max-w-6xl px-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
                {[
                  { icon: Calendar, label: 'Data', value: '2024' },
                  { icon: Building, label: 'Branża', value: 'Producent drzwi' },
                  { icon: User, label: 'Udział w projekcie', value: 'Kompleksowa obsługa' },
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

          {/* Problem */}
          <section style={sectionOuter(P('ecru'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="problem">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Problem</h2>
              </header>
              <div className="mb-12 p-8 md:p-12" style={cardBase('white')}>
                <p className="text-lg md:text-xl font-medium leading-relaxed mb-6" style={{ opacity: .9 }}>
                  Po drobnych zmianach na stronie internetowej i w konfiguracji reklam Google Ads nie można było sprawdzić:
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    'Ile osób dzwoni po wejściu na stronę',
                    'Którzy klienci wypełniają formularze kontaktowe',
                    'Jak skuteczne są reklamy internetowe',
                    'Co interesuje klientów na stronie najbardziej'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0 mt-3" style={{ background: P('amaranth') }} />
                      <p className="text-sm md:text-base" style={{ opacity: .85 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Rezultaty */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="rezultaty">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Rezultaty</h2>
              </header>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
                {[
                  { v: '150 tys.', l: 'wykrytych konwersji na stronie' },
                  { v: '10', l: 'nowych ścieżek pomiaru danych' },
                ].map(s => (
                  <div key={s.l} className="p-4 sm:p-6 md:p-8 text-center" style={cardBase('ecru')}>
                    <div style={statNumberStyle}>{s.v}</div>
                    <div className="mt-3 font-extrabold text-sm md:text-base" style={{ opacity: .85 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Integracja</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    Integracja danych ze wszystkich kanałów marketingowych – pełny obraz efektywności działań.
                  </p>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><Target className="h-5 w-5" /> Rozwój</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    System gotowy do dalszego rozwoju i dodawania nowych metryk biznesowych.
                  </p>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Kontrola</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    Pełna kontrola nad danymi i procesami marketingowymi bez zależności od zewnętrznych agencji.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Proces */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="proces">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Proces</h2>
              </header>
              <div className="space-y-16">
                {/* Etap 1 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>ETAP 1</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Analiza potrzeb</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>Ustaliłem:</p>
                    <ul className="space-y-4 text-sm md:text-base" style={{ opacity: .85 }}>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: P('amaranth') }} />
                        jakie akcje klientów są najważniejsze dla biznesu
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: P('amaranth') }} />
                        które dane będą kluczowe w podejmowaniu decyzji marketingowych
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: P('amaranth') }} />
                        jak najskuteczniej połączyć nowy system z istniejącymi narzędziami (Google Analytics, Google Ads, Meta Ads)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Etap 2 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>ETAP 2</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Instalacja i konfiguracja systemu</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>Prace techniczne:</p>
                    <ul className="space-y-4 text-sm md:text-base" style={{ opacity: .85 }}>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        usunięcie starego, niedostępnego Tag Managera
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        instalacja nowego Google Tag Manager na koncie należącym do klienta
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        połączenie z Google Analytics, Google Ads i Meta Ads
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        nadanie odpowiednich uprawnień zespołowi klienta
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Etap 3 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>ETAP 3</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Szczegółowa konfiguracja</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>
                      Skonfigurowałem śledzenie ponad 50 zachowań klientów, w tym:
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {[
                        { icon: PhoneCall, text: 'Kontakt telefoniczny – kiedy ktoś kliknie w numer telefonu na stronie' },
                        { icon: Mail, text: 'Kontakt mailowy – kliknięcia w adresy email' },
                        { icon: Target, text: 'Kopiowanie danych kontaktowych – gdy ktoś skopiuje numer telefonu lub email' },
                        { icon: Search, text: 'Formularz kontaktowy – każde poprawnie wysłane zapytanie przez formularz kontaktowy' },
                        { icon: TrendingUp, text: 'Chat messenger – skorzystanie z okna czatu w prawym dolnym rogu strony' }
                      ].map(({ icon: Icon, text }, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                          <p className="text-sm md:text-base" style={{ opacity: .85 }}>{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Etap 4 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>ETAP 4</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Określenie najważniejszych akcji jako konwersji</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg leading-relaxed mb-6" style={{ opacity: .9 }}>
                      Kompleksowo zmapowałem drogę klienta od pierwszego wejścia na stronę do finalizacji kontaktu. 
                      Klient widzi teraz, które źródła ruchu generują najbardziej wartościowe kontakty. 
                      System rozróżnia konwersje pochodzące z różnych kanałów i przypisuje im odpowiednie wartości.
                    </p>
                    <div className="p-6" style={cardBase('ecru')}>
                      <p className="text-sm md:text-base font-medium" style={{ opacity: .85 }}>
                        Poza kontaktem śledzone są również wszystkie interakcje z konfiguratorem drzwi. 
                        Potwierdzono dzięki temu, że klienci korzystający z konfiguratora są bardziej zaangażowani i częściej składają zamówienia.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Etap 5 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>ETAP 5</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Poprawa skuteczności reklam Google Ads</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="p-8 md:p-12" style={cardBase('white')}>
                      <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>
                        Przed integracją klient zauważył spadek skuteczności reklam Google Ads. 
                        Okazało się, że konwersje ustawione z pomocą poprzedniego konta GTM przestały działać i wpłynęły na ich skuteczność.
                      </p>
                    </div>
                    <div className="p-8 md:p-12" style={cardBase('ecru')}>
                      <h4 className="font-extrabold mb-4 text-lg">Rozwiązanie problemu:</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                            <ArrowRight className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Automatyczny import nowych konwersji do Google Ads</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                            <Target className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Konfiguracja celów reklamowych</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                            <TrendingUp className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Optymalizacja strategii stawek na podstawie nowych danych</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Korzyści długoterminowe */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="korzysci">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Korzyści długoterminowe</h2>
              </header>
              
              <div className="space-y-8">
                {[{
                  num: '01',
                  t: 'Pełna kontrola nad danymi',
                  d: 'System śledzenia został skonfigurowany na koncie należącym do klienta. Brak uzależnienia od zewnętrznych dostawców – klient ma dostęp do wszystkich danych i może je w każdej chwili wykorzystać.'
                },{
                  num: '02',
                  t: 'Skalowalna architektura',
                  d: 'Elastyczny system gotowy na rozwój biznesu. Możliwość łatwego dodawania nowych punktów pomiarowych i metryk w miarę wprowadzania nowych produktów czy kanałów sprzedaży.'
                },{
                  num: '03',
                  t: 'Optymalizacja kampanii reklamowych',
                  d: 'Automatyczny przepływ danych konwersji do Google Ads i Meta Ads umożliwia skuteczniejsze zarządzanie budżetem reklamowym i lepsze targetowanie odbiorców.'
                }].map((item, index) => (
                  <div key={item.num} className="relative">
                    {/* Linia łącząca (tylko między elementami) */}
                    {index < 2 && (
                      <div 
                        className="absolute left-8 top-20 w-0.5 h-16 z-0"
                        style={{ background: P('amaranth') }}
                      />
                    )}
                    
                    <div className="flex gap-8 items-start relative z-10">
                      {/* Numer w kółku */}
                      <div 
                        className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                        style={{
                          background: P('amaranth'),
                          border: `${isDark ? '2px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                          borderRadius: '50%',
                          color: P('white'),
                        }}
                      >
                        <span className="font-extrabold text-lg">{item.num}</span>
                      </div>
                      
                      {/* Zawartość */}
                      <div 
                        className="flex-1 p-8"
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

          {/* Podsumowanie */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="podsumowanie">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Podsumowanie</h2>
              </header>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  ['Autonomia', 'Klient odzyskał pełną kontrolę nad danymi analitycznymi bez uzależnienia od zewnętrznych dostawców.'],
                  ['Przejrzystość', 'Jasny obraz efektywności każdego kanału marketingowego i zachowań użytkowników na stronie.'],
                  ['Rozwój', 'Fundament pod dalszą optymalizację kampanii reklamowych i rozbudowę funkcjonalności śledzenia.'],
                ].map(([t,d]) => (
                  <div key={t} className="p-6 md:p-8" style={cardBase('white')}>
                    <h3 className="font-extrabold mb-2 text-sm md:text-base">{t}</h3>
                    <p className="text-sm" style={{ opacity: .8 }}>{d}</p>
                  </div>
                ))}
              </div>
              <div className="p-8 md:p-12" style={cardBase('butter')}>
                <p className="font-extrabold text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: isDark ? P('white') : P('black') }}>
                  Kompleksowa implementacja systemu śledzenia danych umożliwiła klientowi pełną kontrolę nad procesami analitycznymi i optymalizację skuteczności działań marketingowych.
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
          title="Implementacja systemu śledzenia danych – Adam Gałęcki"
          description="Kompleksowa implementacja systemu śledzenia danych dla producenta drzwi. Google Analytics, Google Tag Manager, śledzenie konwersji i optymalizacja kampanii reklamowych."
          canonical="https://galecki.website/portfolio/analytics"
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

export default function AnalyticsPortfolioPage() {
  return (
    <ClientOnlyWrapper>
      <PortfolioMartomAnalytics />
    </ClientOnlyWrapper>
  );
}
