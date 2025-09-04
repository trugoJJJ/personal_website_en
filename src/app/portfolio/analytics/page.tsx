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
    title: "Implementation of visitor data tracking system",
    description: "Comprehensive implementation of tracking system enabling full control over analytical data",
    tags: ["Google Analytics", "Google Tag Manager", "Conversions", "Google Ads", "Meta Ads"],
    metrics: "150K detected conversions",
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  };

  if (!project) {
    return (
      <div style={{ background: isDark ? P("charcoal") : P("white"), color: isDark ? P("white") : P("charcoal") }}>
        <Header />
        <main className="py-16">
          <SEO title="Project not found" noIndex />
          <section className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Project not found</h1>
            <Button asChild variant="outline">
              <Link href="/portfolio">Back to portfolio</Link>
            </Button>
          </section>
        </main>
        <FooterSection />
      </div>
    );
  }

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

  // Special layout for Analytics project (ID = 3) – rebuilt in Hero.tsx style
  if (project.id === 3) {
    return (
      <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal') }}>
        <Header />
        <main className="pt-28"> {/* offset under fixed header */}
          <SEO 
            title="Data tracking system implementation – Adam Gałęcki"
            description="Comprehensive implementation of data tracking system for door manufacturer. Google Analytics, Google Tag Manager, conversion tracking and advertising campaign optimization."
            canonical="https://galecki.site/portfolio/analytics"
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
                  Data tracking system implementation
                </span>
              </nav>
              
              <header className="mt-4 md:mt-8 mb-8 sm:mb-12 md:mb-20 text-center">
                <h1 className={bigHeadingClass + ' mb-8'} style={headingStyles}>Data tracking system implementation</h1>
                
                {/* Tags moved directly under title */}
                <div className="flex flex-wrap gap-3 mb-12 justify-start">
                  {['Google Analytics', 'Google Tag Manager', 'Conversions', 'Google Ads', 'Meta Ads'].map(tag => (
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
                    The external door manufacturer had a problem with an old data tracking system (Google Tag Manager + GA4). Access to it was lost due to broken contact with the agency that implemented it. Representing Dogtronic company, I undertook to implement a project that would create a new tracking system giving the client full control over data.
                  </p>
                </div>
                <p className="italic mt-4 text-sm md:text-base text-left" style={{ opacity: .6 }}>
                  Comprehensive implementation enabling tracking of the entire customer journey from first entry to the website to contact finalization.
                </p>
              </header>
            </div>
            
            {/* Main shot - matched to frame style */}
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
                  Your browser does not support video playback.
                </video>
              </figure>
            </div>

            {/* Project details - back in container */}
            <div className="container mx-auto max-w-6xl px-6">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
                {[
                  { icon: Calendar, label: 'Date', value: '2024' },
                  { icon: Building, label: 'Industry', value: 'Door manufacturer' },
                  { icon: User, label: 'Project participation', value: 'Comprehensive service' },
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
                  After minor changes to the website and Google Ads configuration, it was impossible to check:
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    'How many people call after visiting the website',
                    'Which clients fill out contact forms',
                    'How effective internet advertising is',
                    'What interests clients most on the website'
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

          {/* Results */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="rezultaty">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Results</h2>
              </header>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
                {[
                  { v: '150K', l: 'detected conversions on website' },
                  { v: '10', l: 'new data measurement paths' },
                ].map(s => (
                  <div key={s.l} className="p-4 sm:p-6 md:p-8 text-center" style={cardBase('ecru')}>
                    <div style={statNumberStyle}>{s.v}</div>
                    <div className="mt-3 font-extrabold text-sm md:text-base" style={{ opacity: .85 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><TrendingUp className="h-5 w-5" /> Integration</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    Integration of data from all marketing channels – complete picture of campaign effectiveness.
                  </p>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><Target className="h-5 w-5" /> Development</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    System ready for further development and adding new business metrics.
                  </p>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col" style={cardBase('white')}>
                  <h4 className="font-extrabold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Control</h4>
                  <p className="text-sm leading-relaxed" style={{ opacity: .85 }}>
                    Full control over data and marketing processes without dependence on external agencies.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="proces">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Process</h2>
              </header>
              <div className="space-y-16">
                {/* Stage 1 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>STAGE 1</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Needs analysis</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>I established:</p>
                    <ul className="space-y-4 text-sm md:text-base" style={{ opacity: .85 }}>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: P('amaranth') }} />
                        which customer actions are most important for business
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: P('amaranth') }} />
                        which data will be key in making marketing decisions
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: P('amaranth') }} />
                        how to most effectively connect the new system with existing tools (Google Analytics, Google Ads, Meta Ads)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Stage 2 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>STAGE 2</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">System installation and configuration</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>Technical work:</p>
                    <ul className="space-y-4 text-sm md:text-base" style={{ opacity: .85 }}>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        removing old, inaccessible Tag Manager
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        installing new Google Tag Manager on account belonging to client
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        connecting with Google Analytics, Google Ads and Meta Ads
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                        granting appropriate permissions to client team
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Stage 3 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>STAGE 3</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Detailed configuration</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>
                      I configured tracking of over 50 customer behaviors, including:
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {[
                        { icon: PhoneCall, text: 'Phone contact – when someone clicks on phone number on website' },
                        { icon: Mail, text: 'Email contact – clicks on email addresses' },
                        { icon: Target, text: 'Copying contact data – when someone copies phone number or email' },
                        { icon: Search, text: 'Contact form – each correctly sent inquiry through contact form' },
                        { icon: TrendingUp, text: 'Messenger chat – using chat window in bottom right corner of website' }
                      ].map(({ icon: Icon, text }, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: P('amaranth') }} />
                          <p className="text-sm md:text-base" style={{ opacity: .85 }}>{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stage 4 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>STAGE 4</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Defining most important actions as conversions</h3>
                  </div>
                  <div className="p-8 md:p-12" style={cardBase('white')}>
                    <p className="text-base md:text-lg leading-relaxed mb-6" style={{ opacity: .9 }}>
                      I comprehensively mapped the customer journey from first entry to the website to contact finalization. 
                      The client now sees which traffic sources generate most valuable contacts. 
                      The system distinguishes conversions from different channels and assigns them appropriate values.
                    </p>
                    <div className="p-6" style={cardBase('ecru')}>
                      <p className="text-sm md:text-base font-medium" style={{ opacity: .85 }}>
                        Beyond contact, all interactions with door configurator are also tracked. 
                        This confirmed that clients using the configurator are more engaged and place orders more frequently.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stage 5 */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span style={pillStyle('amaranth')}>STAGE 5</span>
                    <h3 className="font-extrabold text-xl md:text-2xl">Improving Google Ads campaign effectiveness</h3>
                  </div>
                  <div className="space-y-8">
                    <div className="p-8 md:p-12" style={cardBase('white')}>
                      <p className="text-base md:text-lg mb-6" style={{ opacity: .9 }}>
                        Before integration, the client noticed a decline in Google Ads campaign effectiveness. 
                        It turned out that conversions set up with the previous GTM account stopped working and affected their effectiveness.
                      </p>
                    </div>
                    <div className="p-8 md:p-12" style={cardBase('ecru')}>
                      <h4 className="font-extrabold mb-4 text-lg">Problem solution:</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                            <ArrowRight className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Automatic import of new conversions to Google Ads</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                            <Target className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Configuring advertising goals</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={cardBase('white')}>
                            <TrendingUp className="h-8 w-8" />
                          </div>
                          <p className="text-sm font-medium">Optimizing bid strategy based on new data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Long-term benefits */}
          <section style={sectionOuter(isDark ? P('charcoal') : P('white'))} className="py-24 md:py-32" id="korzysci">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Long-term benefits</h2>
              </header>
              
              <div className="space-y-8">
                {[{
                  num: '01',
                  t: 'Full control over data',
                  d: 'The tracking system was configured on account belonging to client. No dependence on external providers – client has access to all data and can use it at any time.'
                },{
                  num: '02',
                  t: 'Scalable architecture',
                  d: 'Flexible system ready for business development. Easy addition of new measurement points and metrics as new products or sales channels are introduced.'
                },{
                  num: '03',
                  t: 'Advertising campaign optimization',
                  d: 'Automatic flow of conversion data to Google Ads and Meta Ads enables more effective advertising budget management and better audience targeting.'
                }].map((item, index) => (
                  <div key={item.num} className="relative">
                    {/* Connecting line (only between elements) */}
                    {index < 2 && (
                      <div 
                        className="absolute left-8 top-20 w-0.5 h-16 z-0"
                        style={{ background: P('amaranth') }}
                      />
                    )}
                    
                    <div className="flex gap-8 items-start relative z-10">
                      {/* Number in circle */}
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
                      
                      {/* Content */}
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

          {/* Summary */}
          <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32" id="podsumowanie">
            <div className="container mx-auto max-w-6xl px-6">
              <header className="mb-8 sm:mb-12 md:mb-20">
                <h2 className={bigHeadingClass} style={headingStyles}>Summary</h2>
              </header>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  ['Autonomy', 'Client regained full control over analytical data without dependence on external providers.'],
                  ['Transparency', 'Clear picture of effectiveness of each marketing channel and user behaviors on website.'],
                  ['Development', 'Foundation for further advertising campaign optimization and tracking functionality expansion.'],
                ].map(([t,d]) => (
                  <div key={t} className="p-6 md:p-8" style={cardBase('white')}>
                    <h3 className="font-extrabold mb-2 text-sm md:text-base">{t}</h3>
                    <p className="text-sm" style={{ opacity: .8 }}>{d}</p>
                  </div>
                ))}
              </div>
              <div className="p-8 md:p-12" style={cardBase('butter')}>
                <p className="font-extrabold text-center text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: isDark ? P('white') : P('black') }}>
                  Comprehensive implementation of data tracking system enabled client to have full control over analytical processes and optimization of marketing campaign effectiveness.
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
          title="Data tracking system implementation – Adam Gałęcki"
          description="Comprehensive implementation of data tracking system for door manufacturer. Google Analytics, Google Tag Manager, conversion tracking and advertising campaign optimization."
          canonical="https://galecki.site/portfolio/analytics"
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

export default function AnalyticsPortfolioPage() {
  return (
    <ClientOnlyWrapper>
      <PortfolioMartomAnalytics />
    </ClientOnlyWrapper>
  );
}
