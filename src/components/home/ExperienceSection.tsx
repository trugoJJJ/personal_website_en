"use client";

import { useState, useEffect } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { usePalette } from "./hooks";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";

const SectionHeading = ({ children, id }: { children: React.ReactNode, id?: string }) => {
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

const ExperienceSectionContent = () => {
  const { isDark, P } = usePalette();
  const [isMobile, setIsMobile] = useState(false);

  // Bezpieczne sprawdzenie szerokości ekranu
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    if (typeof window !== 'undefined') {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const card: React.CSSProperties = {
    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
    background: isDark ? P("charcoal") : P("white"),
    color: isDark ? P("white") : P("charcoal"),
  };

  const jobs = [
    {
      role: "Digital Marketing Specialist",
      company: "Dogtronic",
      period: "2021 – 2025",
      desc: "Prowadzenie kampanii digital, SEO oraz zarządzanie zespołem marketingowym",
      url: "https://dogtronic.io/"
    },
    {
      role: "Specjalista ds. marketingu",
      company: "Instytut Rozwoju Szkolnictwa Wyższego",
      period: "2023 – 2024",
      desc: "Koordynacja działań promocyjnych i rozwój komunikacji wizerunkowej",
      url: "https://irsw.pl/"
    },
    {
      role: "SEO Specialist",
      company: "Kryptobot",
      period: "2021 – 2022",
      desc: "Audyt i optymalizacja serwisów pod SEO, link building i analityka",
      url: "https://kryptobot.net/"
    },
    {
      role: "Stażysta w dziale marketingu",
      company: "Akanza",
      period: "2021",
      desc: "Wsparcie zespołu w tworzeniu treści i kampanii reklamowych",
      url: "https://akanza.pl/"
    },
    {
      role: "Grafik",
      company: "EmArt Studio",
      period: "2021",
      desc: "Projektowanie materiałów graficznych online i offline dla klientów",
      url: "https://www.emartstudio.pl/"
    },
  ];

  const certs = [
    { year: "2023", title: "Google Internetowe Rewolucje", org: "Google", url: "https://skillshop.exceedlms.com/student/collection/796504-digital-marketing", image: "/google_certfikat.png" },
    { year: "2024", title: "Marketing B2B - lead generation", org: "Szymon Negacz", url: "https://www.sellwise.pl/marketing-b2b-lead-generation/", image: "/lejki_certyfikat.png" },
    { year: "2023", title: "AI dla Marketingu", org: "Sprawny Marketing", url: "https://sprawnymarketing.pl/szkolenia/ai/", image: "/ai_certfikat.png" },
    { year: "2024", title: "Viral i kreatywny marketing", org: "Jakub Biel", url: "https://jakubbiel.pl/viral/", image: "/viral_certyfikat.png" },
  ];

  const [selectedCert, setSelectedCert] = useState<typeof certs[number] | null>(null);

  return (
    <section
      className="py-24 md:py-36"
      id="experience"
      style={{ background: P("ecru"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading>Doświadczenie</SectionHeading>

        <div className="grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-[2fr_1fr]">
          {/* LEWA: PRACA */}
          <div className="flex flex-col gap-4 md:gap-8 col-span-2 lg:col-span-1">
            {jobs.map((job) => (
              <a
                key={job.role}
                href={job.url}
                target="_blank"
                rel="noreferrer nofollow"
                className="group focus-visible:outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02]"
                style={{ 
                  ...card, 
                  padding: isMobile ? 16 : 28, 
                  textDecoration: 'none', 
                  position: 'relative' 
                }}
              >
                <div className="flex items-center gap-2 text-xs md:text-sm mb-1 md:mb-2" style={{ opacity: 0.9 }}>
                  <Briefcase className="h-3 w-3 md:h-4 md:w-4" /> {job.period}
                </div>
                <h4 className="font-extrabold text-sm md:text-base">{job.role}</h4>
                <div className="font-bold mb-1 md:mb-2 text-sm md:text-base">{job.company}</div>
                <div className="hidden md:block text-sm" style={{ opacity: 0.85 }}>{job.desc}</div>
              </a>
            ))}
          </div>

          {/* PRAWA: EDU na górze + CERTYFIKATY niżej */}
          <div className="flex flex-col gap-4 md:gap-8 col-span-2 lg:col-span-1">
            {/* EDU */}
            <a
              href="https://wz.pollub.pl/rekrutacja/kierunki-studiow/marketing-i-komunikacja-rynkowa"
              target="_blank"
              rel="noreferrer nofollow"
              style={{
                ...card,
                padding: isMobile ? 20 : 32,
                minHeight: isMobile ? 160 : 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: isDark ? P("charcoal") : P("white"),
                boxShadow: `inset 0 0 0 6px ${P("ecru")}`,
                textDecoration: 'none',
                color: isDark ? P("white") : P("charcoal"),
                cursor: 'pointer',
              }}
              className="transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none"
              aria-label="Marketing i Komunikacja Rynkowa – Politechnika Lubelska (otwórz w nowej karcie)"
            >
              <div className="flex items-center gap-2 text-xs md:text-sm mb-1 md:mb-2" style={{ opacity: 0.9 }}>
                <GraduationCap className="h-3 w-3 md:h-4 md:w-4" /> Edukacja
              </div>
              <h4 className="font-extrabold mb-1 text-sm md:text-base">Marketing i Komunikacja Rynkowa</h4>
              <div className="font-bold text-sm md:text-base">Politechnika Lubelska</div>
            </a>

            {/* CERTYFIKATY */}
            {certs.map((c) => (
              <a
                key={c.title}
                href={c.url}
                target="_blank"
                rel="noreferrer nofollow"
                onClick={(e) => { e.preventDefault(); setSelectedCert(c); }}
                aria-haspopup="dialog"
                aria-controls="cert-modal"
                className="group focus-visible:outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02]"
                style={{
                  ...card,
                  padding: isMobile ? 16 : 28,
                  background: isDark ? "#1c1624" : "#fdfdf6",
                  border: `${isDark ? '1px' : '2px'} dashed ${isDark ? P("white") : P("charcoal")}`,
                  position: "relative",
                  textDecoration: 'none'
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    right: 12,
                    background: P("alloy"),
                    color: P("white"),
                    border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`,
                    padding: isMobile ? "1px 6px" : "2px 10px",
                    fontWeight: 800,
                    fontSize: isMobile ? 8 : 10,
                  }}
                >
                  {c.year}
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm mb-1 md:mb-2" style={{ opacity: 0.9 }}>
                  <Award className="h-3 w-3 md:h-4 md:w-4" /> Certyfikat
                </div>
                <h4 className="font-extrabold text-sm md:text-base">{c.title}</h4>
                <div className="italic text-sm md:text-base">{c.org}</div>
                <span className="block mt-2 md:mt-3 text-xs font-bold opacity-60">Kliknij, aby zobaczyć certyfikat</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL POPUP CERT */}
      {selectedCert && (
        <div
          id="cert-modal"
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={`Certyfikat ${selectedCert.title}`}
          style={{ background: 'rgba(0,0,0,0.6)' }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-md relative animate-in zoom-in-95 duration-300"
            style={{ background: isDark ? P("charcoal") : P("white"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("black") }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              aria-label="Zamknij"
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center font-bold text-lg transition-colors duration-200"
              style={{ 
                border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`,
                background: isDark ? P("charcoal") : P("white"),
                color: isDark ? P("white") : P("black")
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = P("amaranth");
                e.currentTarget.style.color = P("white");
                e.currentTarget.style.borderColor = isDark ? P("white") : P("black");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark ? P("charcoal") : P("white");
                e.currentTarget.style.color = isDark ? P("white") : P("black");
                e.currentTarget.style.borderColor = isDark ? P("white") : P("black");
              }}
            >
              ✕
            </button>
            <div className="p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-2 text-sm" style={{ opacity: 0.9, color: isDark ? P("white") : P("black") }}>
                <Award className="h-4 w-4" /> Certyfikat
              </div>
              <h3 className="text-xl font-extrabold leading-tight" style={{ color: isDark ? P("white") : P("black") }}>{selectedCert.title}</h3>
              <figure className="overflow-hidden" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}>
                <img
                  src={selectedCert.image || 'https://placehold.co/800x500?text=Certyfikat'}
                  alt={`Podgląd certyfikatu ${selectedCert.title}`}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: 380 }}
                  loading="lazy"
                />
              </figure>
              <div className="font-bold">Organizacja: {selectedCert.org}</div>
              <div className="text-sm">Rok: {selectedCert.year}</div>
              <div className="flex gap-3 pt-2">
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noreferrer nofollow"
                  className="px-6 py-3 font-extrabold transition-colors"
                  style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: P("ecru"), color: isDark ? P("white") : P("black") }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = P("amaranth"); (e.currentTarget as HTMLAnchorElement).style.color = P("white"); }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = P("ecru"); (e.currentTarget as HTMLAnchorElement).style.color = isDark ? P("white") : P("black"); }}
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export const ExperienceSection = () => {
  return (
    <ClientOnlyWrapper fallback={
      <section className="py-24 md:py-36 bg-[#FAF6EE] border-t-3 border-black" id="experience">
        <div className="container mx-auto max-w-6xl">
          <header className="mt-4 md:mt-8 mb-12 md:mb-24">
            <h2 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
              Doświadczenie
            </h2>
          </header>
          <div className="grid gap-4 md:gap-8 grid-cols-2 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                <div className="w-6 h-6 border border-black bg-white"></div>
                Doświadczenie zawodowe
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-6 border-3 border-black bg-white text-black">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-extrabold">Position {i}</h4>
                      <span className="text-sm opacity-60">2021-2025</span>
                    </div>
                    <div className="font-bold mb-1">Company {i}</div>
                    <p className="text-sm">Description of the role and responsibilities.</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-3">
                <div className="w-6 h-6 border border-black bg-white"></div>
                Certyfikaty
              </h3>
              <div className="grid gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 border-3 border-black bg-white text-black relative">
                    <div className="absolute top-[-8px] right-3 bg-[#736134] text-white border-2 border-black px-2 py-1 text-xs font-extrabold">
                      2023
                    </div>
                    <div className="flex items-center gap-2 text-xs mb-1 opacity-90">
                      <div className="w-3 h-3 border border-black bg-white"></div>
                      Certyfikat
                    </div>
                    <h4 className="font-extrabold text-sm">Certyfikat {i}</h4>
                    <div className="italic text-sm">Organizacja {i}</div>
                    <span className="block mt-2 text-xs font-bold opacity-60">Kliknij, aby zobaczyć certyfikat</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    }>
      <ExperienceSectionContent />
    </ClientOnlyWrapper>
  );
};

export { ExperienceSectionContent };