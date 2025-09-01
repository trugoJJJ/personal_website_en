"use client";

import ClientOnlyWrapper from '@/components/ClientOnlyWrapper';
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePalette, COLORS } from "@/components/home/hooks";
import { FooterSection } from "@/components/home/FooterSection";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";

// Header component from Hero.tsx
const links = [
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "O mnie" },
  { href: "/#experience", label: "Doświadczenie" },
  { href: "/#skills", label: "Umiejętności" },
  { href: "/#articles", label: "Artykuły" },
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
      <nav className="w-full h-16 flex items-center relative">
        <a href="/" className="font-extrabold tracking-tight leading-none ml-4 md:ml-8" style={{ color: isDark ? P("white") : P("charcoal") }}>Adam&nbsp;Gałęcki</a>
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
        <div className="hidden desk:flex items-center gap-2 ml-auto mr-4 md:mr-8">
          <LanguageSwitch />
          <ThemeToggle />
          <Button size="lg" asChild className="rounded-none font-extrabold transition-transform hover:scale-[1.02]" style={{ background: P("amaranth"), color: P("white"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
            <a href="/#contact">Kontakt</a>
          </Button>
        </div>
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
                <a href="/#contact">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const PortfolioPPC = () => {
  const { isDark, P } = usePalette();
  
  // Mockowy projekt PPC (ID = 4)
  const project = {
    id: 4,
    title: "Kampanie reklamowe PPC",
    description: "Portfolio płatnych kampanii reklamowych",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "PPC Management", "Conversion Optimization"]
  };

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
    background: accent === 'white' ? (isDark ? P('charcoal') : P('white')) : (accent ? P(accent) : (isDark ? P('charcoal') : P('white'))),
    color: isDark ? P('white') : P('charcoal'),
  });
  const pillStyle = (bg: keyof typeof COLORS) => ({
    background: bg === 'white' ? (isDark ? P('charcoal') : P('white')) : P(bg),
    color: bg === 'amaranth' || bg === 'alloy' ? P('white') : (isDark ? P('white') : P('black')),
    border: `${isDark ? '1px' : '2px'} solid ${isDark ? P('white') : P('black')}`,
    fontWeight: 800,
    fontSize: 12,
    padding: '4px 10px',
    display: 'inline-block'
  });

  return (
    <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
      <Header />
      <main className="pt-28">
        <SEO 
          title="Kampanie reklamowe Google Ads i Meta Ads – Adam Gałęcki"
          description="Kompleksowe kampanie reklamowe Google Ads i Meta Ads dla producenta drzwi. Optymalizacja konwersji, zarządzanie budżetem i wzrost sprzedaży."
          canonical="https://monke.io/portfolio/ppc"
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
            
            <header className="mt-4 md:mt-8 mb-12 md:mb-20 text-center">
              <h1 className={bigHeadingClass + ' mb-8'} style={headingStyles}>Portfolio płatnych kampanii reklamowych</h1>
              
              {/* Tagi przeniesione bezpośrednio pod tytuł */}
              <div className="flex flex-wrap gap-3 mb-12 justify-start">
                {project.tags.map(tag => (
                  <span key={tag} style={pillStyle('white')}>{tag}</span>
                ))}
              </div>
              
              {/* Ramka dopasowana do kontenera */}
              <div
                  className="mb-8 px-12 py-10 text-left"
                  style={{
                    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                    background: isDark ? P('ecru') : P('ecru'),
                    boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                  }}
                >
                  <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: isDark ? P('white') : P('charcoal'), opacity: .9 }}>
                  Specjalizuję się w zarządzaniu kampaniami reklamowymi Google Ads i Meta Ads. Mam doświadczenie w optymalizacji budżetów reklamowych o wartości do 15 000 zł miesięcznie. Jako samodzielny menedżer wielu kont reklamowych zdobyłem doświadczenie w zakresie budowania strategii oraz optymalizacji i alokacji budżetów.
                  </p>
                </div>
            </header>
          </div>
          
          {/* Główne ujęcie - dopasowane do stylu ramek */}
          <div className="container mx-auto max-w-6xl px-6 mb-16">
            <figure 
              className="aspect-video flex items-center justify-center relative overflow-hidden"
              style={{
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                background: isDark ? P('charcoal') : P('ecru'),
                boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
              }}
            >
              <div className="text-center px-6">
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center" style={cardBase('white')}>
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="font-extrabold mb-2">Główne ujęcie</h3>
                <p className="text-sm" style={{ opacity: .7 }}>Format 16:9 – miejsce na grafikę kampanii</p>
              </div>
            </figure>
          </div>
        </section>

        {/* Case Studies */}
        <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="case-studies">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Case Studies</h2>
            </header>
            
            <div className="space-y-20">
              {/* Case 1 - Producent drzwi */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>5 000 PLN / miesiąc</span>
                      <span style={pillStyle('butter')}>3 lata</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Producent drzwi zewnętrznych</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      Celem kampanii było zwiększenie liczby potencjalnych klientów zainteresowanych zakupem drzwi zewnętrznych poprzez kampanie wyszukiwania w Google. Projekt miał na celu budowę stałego źródła wysokojakościowych leadów dla firmy produkcyjnej.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>17%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Wzrost współczynnika konwersji</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>120</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Leadów miesięcznie</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center" style={cardBase('ecru')}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                      <Target className="h-8 w-8" />
                    </div>
                    <div className="font-extrabold text-sm">Case Study 1</div>
                  </div>
                </div>
              </div>

              {/* Case 2 - Firma doradcza */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center" style={cardBase('ecru')}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <div className="font-extrabold text-sm">Case Study 2</div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('alloy')}>LINKEDIN ADS</span>
                      <span style={pillStyle('amaranth')}>5 000 PLN</span>
                      <span style={pillStyle('butter')}>1 miesiąc</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Firma doradcza z sektora edukacyjnego</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      Celem kampanii było wypromowanie specjalistycznego webinaru skierowanego do wąskiej grupy docelowej - kadry zarządzającej uczelniami wyższymi. Zadaniem było osiągnięcie maksymalnej liczby rejestracji przy jak najniższym koszcie pozyskania uczestnika.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>180</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Rejestracji na webinar</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>28 zł</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Koszt pozyskania (50% taniej)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 - Producent oprogramowania */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>2 000 PLN / miesiąc</span>
                      <span style={pillStyle('butter')}>1 rok</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Producent oprogramowania</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      Pozyskanie nowych klientów poszukujących usług tworzenia stron i sklepów internetowych oraz aplikacji mobilnych. Głównym założeniem było zwiększenie liczby zapytań ofertowych oraz obniżenie kosztów pozyskania klienta.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>+40%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Wzrost zapytań</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>-27%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Obniżenie CPC</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>5x</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Klientów 15k+ zł</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center" style={cardBase('ecru')}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                      <TrendingUp className="h-8 w-8" />
                    </div>
                    <div className="font-extrabold text-sm">Case Study 3</div>
                  </div>
                </div>
              </div>

              {/* Case 4 - Wydawnictwo */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center" style={cardBase('ecru')}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                      <ArrowRight className="h-8 w-8" />
                    </div>
                    <div className="font-extrabold text-sm">Case Study 4</div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>META ADS</span>
                      <span style={pillStyle('butter')}>4 000 PLN / miesiąc</span>
                      <span style={pillStyle('charcoal')}>6 miesięcy</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Wydawnictwo naukowe</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      Zwiększenie sprzedaży podręczników szkolnych. Projekt zakładał wykorzystanie różnych platform reklamowych dla maksymalizacji zasięgu.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>+8%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Wzrost sprzedaży</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>2,8%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Konwersja Google</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>1,9%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Konwersja Meta</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 5 - Szpital */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>2 000 PLN / miesiąc</span>
                      <span style={pillStyle('butter')}>6 miesięcy</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Lubelski szpital - kampania promująca profilaktykę</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      Celem było dotarcie do kobiet zmagających się z depresją poporodową i zachęcenie ich do zgłoszenia się po pomoc medyczną. Kampania dotyczyła zwiększenie świadomości problemu oraz ułatwienie dostępu do specjalistycznej opieki.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>750</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Wypełnionych formularzy</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>4%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Współczynnik konwersji</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>16 PLN</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Koszt konwersji</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center" style={cardBase('ecru')}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div className="font-extrabold text-sm">Case Study 5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proces współpracy */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="proces">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Jak wyglądał typowy proces współpracy?</h2>
            </header>
            
            <div className="space-y-8">
              {[{
                num: '01',
                t: 'Analiza i Strategia (Tydzień 1)',
                d: 'Audyt obecnych działań reklamowych, analiza konkurencji i zdefiniowanie celów biznesowych. Opracowanie strategii kampanii z uwzględnieniem budżetu i oczekiwanych rezultatów.'
              },{
                num: '02',
                t: 'Implementacja (Tygodnie 2-3)',
                d: 'Konfiguracja kampanii, tworzenie grup reklamowych, dobór słów kluczowych i przygotowanie kreacji reklamowych. Ustawienie systemów trackingu i konwersji.'
              },{
                num: '03',
                t: 'Optymalizacja i Monitoring (Na bieżąco)',
                d: 'Cotygodniowe analizy wyników, testowanie różnych wariantów reklam i dostosowywanie stawek. Regularne raportowanie z konkretnymi metrykami i rekomendacjami.'
              },{
                num: '04',
                t: 'Rozwój i Skalowanie (Od miesiąca 2)',
                d: 'Rozszerzanie najskuteczniejszych kampanii, testowanie nowych kanałów i formatów reklamowych. Długoterminowa optymalizacja ROI na podstawie zebranych danych.'
              }].map((item, index) => (
                <div key={item.num} className="relative">
                  {/* Linia łącząca */}
                  {index < 3 && (
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

        {/* Wnioski */}
        <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="wnioski">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Wnioski</h2>
            </header>
            <div className="p-8 md:p-12" style={cardBase('butter')}>
              <p className="font-extrabold text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: isDark ? P('white') : P('black') }}>
                Skuteczne zarządzanie kampaniami reklamowymi wymaga ciągłej optymalizacji, testowania i dostosowywania strategii do zmieniających się potrzeb rynku. Każdy projekt pokazuje, jak ważne jest precyzyjne targetowanie i systematyczny monitoring wyników.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default function PPCPortfolioPage() {
  return (
    <ClientOnlyWrapper>
      <PortfolioPPC />
    </ClientOnlyWrapper>
  );
}
