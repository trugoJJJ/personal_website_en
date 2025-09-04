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
    title: "Comprehensive SEO for external door manufacturer",
    description: "Long-term SEO strategy for leading Polish external door manufacturer, implemented since 2022",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    metrics: "+39% increase in impressions",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  };

          // Stylistic helpers (consistent with Hero.tsx)
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

  // Special layout for SEO project (ID = 1, 2, 3) – rebuilt in Hero.tsx style
  if (project.id === 1 || project.id === 2 || project.id === 3) {
    return (
      <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
        <Header />
        <main className="pt-28"> {/* offset under fixed header */}
          <SEO 
            title="SEO optimization for door manufacturer – Adam Gałęcki"
            description="Comprehensive SEO optimization for external door manufacturer. Keyword analysis, technical optimization, content marketing and Google ranking growth."
            canonical="https://galecki.site/portfolio/seo"
            ogImage="/og_cover.png"
          />

          {/* Title section */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'), false)} className="pb-20">
            <div className="container mx-auto max-w-6xl px-6">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-sm mb-8 pt-4" style={{ opacity: .7 }}>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Home
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
                
                {/* Tags moved directly under title */}
                <div className="flex flex-wrap gap-3 mb-12 justify-start"> {/* changed from justify-center to justify-start */}
                  {project.tags.map(tag => (
                    <span key={tag} style={pillStyle('white')}>{tag}</span>
                  ))}
                </div>
                
                {/* Frame matched to container (not full-width) */}
                <div
                  className="mb-8 px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 text-left"
                  style={{
                    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                    background: isDark ? P('ecru') : P('ecru'),
                    boxShadow: `inset 0 0 0 6px ${isDark ? P('charcoal') : P('white')}`,
                  }}
                >
                  <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: isDark ? P('white') : P('charcoal'), opacity: .9 }}>
                    Long-term SEO strategy for leading Polish external door manufacturer (start 2022). I independently managed the full scope of activities: audit, strategy, technical optimization, content, link building, analytics, ongoing communication and reporting.
                  </p>
                </div>
                <p className="italic mt-4 text-sm md:text-base text-left" style={{ opacity: .6 }}>
                  In the SEO industry, average collaboration lasts 6-12 months. We've been working for 3 years and plan activities at least until the end of 2025.
                </p>
              </header>
            </div>
            
            {/* Main shot - matched to frame style */}
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
                  alt="Organic traffic growth chart over time - SEO data"
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </figure>
            </div>

            {/* Project details - back in container */}
            <div className="container mx-auto max-w-6xl px-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
                {[
                  { icon: Calendar, label: 'Period', value: '2022 → 2025+' },
                  { icon: Building, label: 'Industry', value: 'Door manufacturer' },
                  { icon: User, label: 'Scope', value: 'Comprehensive service' },
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

          {/* Challenges */}
          <section style={sectionOuter(P('ecru'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="wyzwania">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Challenges</h2>
              </header>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <div style={pillStyle('amaranth')} className="mb-4">01</div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .9 }}>
                    Increasing organic visibility in highly competitive door industry – it was necessary to create a multi-layered strategy (TOP, mid, bottom funnel) and thematic cluster map.
                  </p>
                </div>
                <div className="p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <div style={pillStyle('amaranth')} className="mb-4">02</div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .9 }}>
                    Balancing brand vs. non-brand phrase share – the goal was to acquire new audience that doesn't know the brand yet, without losing dominance on brand queries.
                  </p>
                </div>
                <div className="p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <div style={pillStyle('amaranth')} className="mb-4">03</div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ opacity: .9 }}>
                    Preparing infrastructure for 2026 transformation (new website version) while maintaining positions and minimizing migration risk (content, URL structure, internal linking, off-site signals).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results (expanded) */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="efekty">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20 flex items-end justify-between flex-wrap gap-6">
                <h2 className={bigHeadingClass} style={headingStyles}>Results</h2>
              </header>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
                {[
                  { v: '+22%', l: 'Increase in entries (organic)' },
                  { v: '+3M', l: 'Organic impressions' },
                  { v: '+650', l: 'TOP1–10 phrases' },
                ].map(s => (
                  <div key={s.l} className="p-8 text-center" style={cardBase('ecru')}>
                    <div style={statNumberStyle}>{s.v}</div>
                    <div className="mt-3 font-extrabold text-sm md:text-base" style={{ opacity: .85 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Visibility</h4>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>+39% impressions (2024 → 2025)</li>
                    <li>+22% organic entries year over year</li>
                    <li>Stable growth despite industry seasonality</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><Target className="h-5 w-5" /> Phrases</h4>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>+90 new TOP10 phrases (2024)</li>
                    <li>650+ TOP1–10 phrases by end of 2024</li>
                    <li>430+ quality external links (22–24)</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><Lightbulb className="h-5 w-5" /> Positioning</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    Non-brand phrases constitute 91% of impressions and 51% of TOP10 visits (2024). This is real inflow of new users in upper and middle funnel – foundation for future conversions.
                  </p>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><ArrowRight className="h-5 w-5" /> Copywriting</h4>
                  <ul className="space-y-3 text-sm" style={{ opacity: .85 }}>
                    <li>100+ blog articles (systematic publication)</li>
                    <li>180+ off‑site publications (link building / PR)</li>
                    <li>Constant refreshing of old materials for current intents</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Process (expanded) */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="proces">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Process</h2>
              </header>
              <div className="space-y-24">
                {/* Phase 1 */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <span style={pillStyle('amaranth')}>PHASE 1</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Growth 2022–2024</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-14">
                    <div className="space-y-8">
                      {[
                        ['Initial audit and strategy', 'Full technical audit + content + link profile. KPI definition, query segmentation and quarterly roadmap.'],
                        ['Technical optimization', 'Improving indexing, header structure, image compression, redirect organization, eliminating cannibalization.'],
                        ['Systematic content marketing', 'Planning and publishing articles responding to real user intents.'],
                      ].map(([t,d])=> (
                        <div key={t}>
                          <h4 className="font-extrabold mb-1 text-sm md:text-base">{t}</h4>
                          <p className="text-sm" style={{ opacity:.75 }}>{d}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-8">
                      {[
                        ['Branded content, proactive partner acquisition, link profile optimization for diversity'],
                        ['Communication and reporting', 'Monthly reports + quarterly strategic reviews: which clusters are growing, non-brand phrase share, link effectiveness.'],
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
                            <div className="text-[11px] font-bold" style={{ opacity: .6 }}>Blog articles</div>
                          </div>
                          <div>
                            <div className="font-extrabold text-2xl" style={{ color: P('amaranth') }}>180+</div>
                            <div className="text-[11px] font-bold" style={{ opacity: .6 }}>Off‑site publications</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gallery moved from title section */}
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
                        alt="Google Search Console data - SEO effectiveness"
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
                        alt="Detailed organic traffic data - Google Analytics"
                        className="w-full h-full object-cover"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </figure>
                  </div>
                </div>
                {/* Phase 2 */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <span style={pillStyle('alloy')}>PHASE 2</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Expansion preparation 2025</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-10">
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Content and structure updates</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>Refreshing key subpages</li>
                        <li>Developing ~100 blog posts + 25 pages</li>
                        <li>Gallery and blog section expansion</li>
                        <li>Local clusters ("external doors + city") → future shopping section</li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Performance improvement</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>Server migration (forecast +12–20% performance)</li>
                        <li>Loading speed optimization</li>
                        
                      </ul>
                    </div>
                    <div className="p-6 md:p-8" style={cardBase('white')}>
                      <h4 className="font-extrabold mb-3 text-sm md:text-base">Advanced analytics</h4>
                      <ul className="space-y-2 text-sm" style={{ opacity:.8 }}>
                        <li>GA4 + GTM expansion</li>
                        <li>Ads campaign integration (GA4 → Ads / Meta)</li>
                        <li>Hotjar for UX obstacle identification</li>
                        <li>Automatic reports (dashboard & alerts)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why collaboration lasts */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-16 sm:py-20 md:py-24 lg:py-32" id="dlaczego-3-lata">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Why does the collaboration last so long?</h2>
              </header>
              
              {/* Rebuilt boxes - vertical layout with numbers (no hover and gradients) */}
              <div className="space-y-8">
                {[{
                  num: '01',
                  t: 'Easy contact and full responsibility',
                  d: 'Constant person leading – no loss of context, quick decisions, full history of changes. Client knows who they\'re talking to, doesn\'t have to explain everything to each new specialist.'
                },{
                  num: '02',
                  t: 'Flexible response',
                  d: 'Strategy adapted to Google algorithms and business priorities (seasonality, new product lines). When Google changes algorithm, we immediately adjust strategy.'
                },{
                  num: '03',
                  t: 'Measurable results',
                  d: 'Every stage based on data: organic growth, non-brand share, link effectiveness, conversions. Monthly reports show real ROI from SEO investment.'
                }].map((item, index) => (
                  <div key={item.num} className="relative">
                    {/* Connecting line (only between elements) */}
                    {index < 2 && (
                      <div 
                        className="absolute left-6 sm:left-7 md:left-8 top-16 sm:top-18 md:top-20 w-0.5 h-12 sm:h-14 md:h-16 z-0"
                        style={{ background: P('amaranth') }}
                      />
                    )}
                    
                    <div className="flex gap-3 sm:gap-6 md:gap-8 items-start relative z-10">
                      {/* Number in circle */}
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
                      
                      {/* Content */}
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

          {/* Conclusions */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="wnioski">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Conclusions</h2>
              </header>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  ['Sustainability', 'Consistency and quarterly corrections instead of chaotic direction changes.'],
                  ['ROI', 'Non-brand traffic is new clients — foundation for retention and remarketing.'],
                  ['Scalability', 'Foundation for redesign + new product sections and local ones.'],
                ].map(([t,d]) => (
                  <div key={t} className="p-6 md:p-8" style={cardBase('white')}>
                    <h3 className="font-extrabold mb-2 text-sm md:text-base">{t}</h3>
                    <p className="text-sm" style={{ opacity: .8 }}>{d}</p>
                  </div>
                ))}
              </div>
              
              <div className="p-8 md:p-12" style={cardBase('butter')}>
                <p className="font-extrabold text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: isDark ? P('white') : P('black') }}>
                When we have full control over SEO and work on it systematically, effects accumulate over time - each subsequent quarter gives better results and protects us from problems during major website changes.
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
          title="SEO optimization for door manufacturer – Adam Gałęcki"
          description="Comprehensive SEO optimization for external door manufacturer. Keyword analysis, technical optimization, content marketing and Google ranking growth."
          canonical="https://galecki.site/portfolio/seo"
          ogImage="/og_cover.png"
        />
        <article className="container mx-auto px-6 max-w-5xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground mt-2">{project.description}</p>
          </header>

          <div className="overflow-hidden border-3 border-border mb-8">
            <img src={project.image} alt={`Project: ${project.title}`} className="w-full h-auto object-cover" />
          </div>

          <section className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Scope and technologies</h2>
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
              <Link href="/portfolio">Back to list</Link>
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
