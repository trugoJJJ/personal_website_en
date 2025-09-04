"use client";

import ClientOnlyWrapper from '@/components/ClientOnlyWrapper';
import { Header } from "@/components/home/Header";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { usePalette, COLORS } from "@/components/home/hooks";
import { FooterSection } from "@/components/home/FooterSection";

const PortfolioPPC = () => {
  const { isDark, P } = usePalette();
  
  // Mock PPC project (ID = 4)
  const project = {
    id: 4,
    title: "PPC Advertising Campaigns",
    description: "Portfolio of paid advertising campaigns",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads", "PPC Management", "Conversion Optimization"]
  };

  // Stylistic helpers (consistent with Hero.tsx)
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
          title="PPC Advertising Campaigns Google Ads and Meta Ads – Adam Gałęcki"
          description="Comprehensive Google Ads and Meta Ads advertising campaigns for door manufacturer. Conversion optimization, budget management and sales growth."
          canonical="https://galecki.site/portfolio/ppc"
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
              <h1 className={bigHeadingClass + ' mb-8'} style={headingStyles}>PPC Advertising Campaigns Portfolio</h1>
              
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
                  I specialize in managing Google Ads and Meta Ads advertising campaigns. I have experience in optimizing advertising budgets up to 15,000 PLN monthly. As an independent manager of multiple advertising accounts, I have gained experience in building strategies and optimizing and allocating budgets.
                  </p>
                </div>
            </header>
          </div>
          
          {/* Główne ujęcie - dopasowane do stylu ramek */}
          <div className="container mx-auto max-w-6xl px-6 mb-16">
            <figure 
              className="relative overflow-hidden"
              style={{
                aspectRatio: '1400/826',
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                background: isDark ? P('charcoal') : P('ecru'),
                boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
              }}
            >
              <img 
                src="/ppc_main.jpg" 
                alt="Dashboard kampanii PPC - przegląd wyników"
                className="w-full h-full object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </figure>
          </div>
        </section>

        {/* Case Studies */}
        <section style={sectionOuter(P('ecru'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="case-studies">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-8 sm:mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>Case Studies</h2>
            </header>
            
            <div className="space-y-12 sm:space-y-16 md:space-y-20">
              {/* Case 1 - Producent drzwi */}
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:items-center">
                {/* Zdjęcie - na mobile nad opisem */}
                <div 
                  className="md:order-2 relative overflow-hidden"
                  style={{
                    aspectRatio: '1000/500',
                    ...cardBase('ecru')
                  }}
                >
                  <img 
                    src="/goole_logo.png" 
                    alt="Google Ads - kampanie reklamowe"
                    className="w-full h-full object-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                {/* Opis - na mobile pod zdjęciem */}
                <div className="md:col-span-2 md:order-1">
                  <div className="p-4 sm:p-6 md:p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>5 000 PLN / miesiąc</span>
                      <span style={pillStyle('butter')}>3 lata</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">External Door Manufacturer</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      The campaign goal was to increase the number of potential customers interested in purchasing external doors through Google search campaigns. The project aimed to build a steady source of high-quality leads for the manufacturing company.
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>17%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Conversion rate increase</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>120</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Leads monthly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 2 - Firma doradcza */}
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:items-center">
                {/* Zdjęcie - na mobile nad opisem */}
                <div 
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: '1000/500',
                    ...cardBase('ecru')
                  }}
                >
                  <img 
                    src="/linkedin_logo.png" 
                    alt="LinkedIn Ads - kampanie B2B"
                    className="w-full h-full object-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                {/* Opis - na mobile pod zdjęciem */}
                <div className="md:col-span-2">
                  <div className="p-4 sm:p-6 md:p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('alloy')}>LINKEDIN ADS</span>
                      <span style={pillStyle('amaranth')}>5 000 PLN</span>
                      <span style={pillStyle('butter')}>1 miesiąc</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Educational Consulting Company</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      The campaign goal was to promote a specialized webinar targeted at a narrow target group - higher education management staff. The task was to achieve the maximum number of registrations at the lowest possible cost of acquiring participants.
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>180</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Webinar registrations</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="text-extrabold text-2xl" style={{ color: P('amaranth') }}>28 PLN</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Acquisition cost (50% cheaper)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 3 - Producent oprogramowania */}
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:items-center">
                {/* Zdjęcie - na mobile nad opisem */}
                <div 
                  className="md:order-2 relative overflow-hidden"
                  style={{
                    aspectRatio: '1000/500',
                    ...cardBase('ecru')
                  }}
                >
                  <img 
                    src="/goole_logo.png" 
                    alt="Google Ads - optymalizacja kampanii"
                    className="w-full h-full object-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                {/* Opis - na mobile pod zdjęciem */}
                <div className="md:col-span-2 md:order-1">
                  <div className="p-4 sm:p-6 md:p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>2 000 PLN / miesiąc</span>
                      <span style={pillStyle('butter')}>1 rok</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Software Company</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      Acquiring new clients looking for website and e-commerce development services as well as mobile applications. The main assumption was to increase the number of quote requests and reduce customer acquisition costs.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>+40%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Quote increase</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>-27%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>CPC reduction</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>5x</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Clients 15k+ PLN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 4 - Wydawnictwo */}
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:items-center">
                {/* Zdjęcie - na mobile nad opisem - dwa loga pod sobą */}
                <div 
                  className="flex flex-col"
                  style={{
                    ...cardBase('ecru')
                  }}
                >
                  <div 
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: '1000/500',
                    }}
                  >
                    <img 
                      src="/goole_logo.png" 
                      alt="Google Ads"
                      className="w-full h-full object-cover"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                  <div 
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: '1000/500',
                    }}
                  >
                    <img 
                      src="/logo_meta.png" 
                      alt="Meta Ads"
                      className="w-full h-full object-cover"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </div>
                {/* Opis - na mobile pod zdjęciem */}
                <div className="md:col-span-2">
                  <div className="p-4 sm:p-6 md:p-8" style={cardBase('white')}>
                    {/* Responsive pills - na mobile 2x2 grid */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>META ADS</span>
                      <span style={pillStyle('butter')}>4 000 PLN / miesiąc</span>
                      <span style={pillStyle('alloy')}>6 miesięcy</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Scientific Publishing House</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      Increasing sales of school textbooks. The project involved using various advertising platforms to maximize reach.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>+8%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Sales increase</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>2.8%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Google conversion</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>1.9%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Meta conversion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case 5 - Szpital */}
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 md:items-center">
                {/* Zdjęcie - na mobile nad opisem */}
                <div 
                  className="md:order-2 relative overflow-hidden"
                  style={{
                    aspectRatio: '1000/500',
                    ...cardBase('ecru')
                  }}
                >
                  <img 
                    src="/goole_logo.png" 
                    alt="Google Ads - kampania społeczna"
                    className="w-full h-full object-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                {/* Opis - na mobile pod zdjęciem */}
                <div className="md:col-span-2 md:order-1">
                  <div className="p-4 sm:p-6 md:p-8" style={cardBase('white')}>
                    <div className="flex items-center gap-3 mb-6">
                      <span style={pillStyle('amaranth')}>GOOGLE ADS</span>
                      <span style={pillStyle('alloy')}>2 000 PLN / miesiąc</span>
                      <span style={pillStyle('butter')}>6 miesięcy</span>
                    </div>
                    <h3 className="font-extrabold text-xl md:text-2xl mb-4">Lublin Hospital - Preventive Care Campaign</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-6" style={{ opacity: .85 }}>
                      The goal was to reach women struggling with postpartum depression and encourage them to seek medical help. The campaign focused on raising awareness of the problem and facilitating access to specialized care.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>750</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Completed forms</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>4%</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Conversion rate</div>
                      </div>
                      <div className="text-center p-4" style={cardBase('ecru')}>
                        <div className="font-extrabold text-xl" style={{ color: P('amaranth') }}>16 PLN</div>
                        <div className="text-xs mt-1" style={{ opacity: .7 }}>Conversion cost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proces współpracy */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="proces">
          <div className="container mx-auto max-w-6xl px-6">
            <header className="mb-8 sm:mb-12 md:mb-20">
              <h2 className={bigHeadingClass} style={headingStyles}>What was the typical collaboration process?</h2>
            </header>
            
            <div className="space-y-6 sm:space-y-8">
              {[{
                num: '01',
                t: 'Analysis and Strategy (Week 1)',
                d: 'Audit of current advertising activities, competitor analysis and definition of business goals. Development of campaign strategy considering budget and expected results.'
              },{
                num: '02',
                t: 'Implementation (Weeks 2-3)',
                d: 'Campaign configuration, creation of ad groups, keyword selection and preparation of advertising creatives. Setting up tracking and conversion systems.'
              },{
                num: '03',
                t: 'Optimization and Monitoring (Ongoing)',
                d: 'Weekly performance analysis, testing different ad variants and adjusting bids. Regular reporting with specific metrics and recommendations.'
              },{
                num: '04',
                t: 'Development and Scaling (From Month 2)',
                d: 'Expanding the most effective campaigns, testing new channels and ad formats. Long-term ROI optimization based on collected data.'
              }].map((item, index) => (
                <div key={item.num} className="relative">
                  {/* Linia łącząca */}
                  {index < 3 && (
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
              <h2 className={bigHeadingClass} style={headingStyles}>Conclusions</h2>
            </header>
            <div className="p-8 md:p-12" style={cardBase('butter')}>
              <p className="font-extrabold text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: isDark ? P('white') : P('black') }}>
                Effective management of advertising campaigns requires continuous optimization, testing and adjusting strategies to changing market needs. Each project shows how important precise targeting and systematic monitoring of results are.
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
