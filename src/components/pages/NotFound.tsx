"use client";

import { useEffect, useState } from "react";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Header } from "@/components/home/Header";
import { FooterSection } from "@/components/home/FooterSection";
import { SEO } from "@/components/SEO";

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
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(isDomDark());
    
    const mo = new MutationObserver(() => setIsDark(isDomDark()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const P = (k: keyof typeof COLORS) => (isDark ? DARK_COLORS : COLORS)[k];
  return { isDark, P };
}

const NotFoundContent = () => {
  const { isDark, P } = usePalette();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        window.location.pathname
      );
    }
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ background: isDark ? P("charcoal") : P("ecru") }}
    >
      {/* Header */}
      <Header />
      
      {/* SEO */}
      <SEO 
        title="404 – Strona nie została znaleziona – Adam Gałęcki"
        description="Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona."
        noIndex
        ogImage="/og_cover.png"
      />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20 pb-8 md:py-16 md:pb-12">
        <div className="text-center max-w-md md:max-w-xl mx-auto w-full mt-0 mb-0 md:mt-16 md:mb-8">
          {/* Main Content Box */}
          <div 
            className="p-8 md:p-12"
            style={{ 
              border: `${isDark ? '2px' : '4px'} solid ${isDark ? P("white") : P("black")}`,
              background: isDark ? P("alloy") : P("white")
            }}
          >
            {/* 404 Number */}
            <div className="mb-6 md:mb-8">
              <h1 
                className="text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight"
                style={{ color: isDark ? P("white") : P("black") }}
              >
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="mb-8 md:mb-12">
              <h2 
                className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 uppercase tracking-wide"
                style={{ color: isDark ? P("white") : P("black") }}
              >
                Strona nie została znaleziona
              </h2>
              <p 
                className="text-base sm:text-lg md:text-xl leading-relaxed px-4"
                style={{ color: isDark ? P("white") : P("charcoal"), opacity: 0.8 }}
              >
                Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
              </p>
            </div>

            {/* Requested URL */}
            <div className="mb-8 md:mb-12">
              <div 
                className="inline-block px-3 py-2 md:px-4 md:py-2 font-mono text-xs sm:text-sm break-all max-w-full"
                style={{ 
                  background: isDark ? P("charcoal") : P("ecru"),
                  border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`,
                  color: isDark ? P("white") : P("charcoal")
                }}
              >
                {typeof window !== 'undefined' ? window.location.pathname : ''}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-extrabold px-6 py-3 transition-all duration-200 hover:scale-105"
                style={{
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                  background: isDark ? P("charcoal") : P("ecru"),
                  color: isDark ? P("white") : P("black")
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = P("amaranth");
                  (e.currentTarget as HTMLAnchorElement).style.color = P("white");
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = isDark ? P("charcoal") : P("ecru");
                  (e.currentTarget as HTMLAnchorElement).style.color = isDark ? P("white") : P("black");
                }}
              >
                <Home className="h-4 w-4" />
                Strona główna
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 font-extrabold px-6 py-3 transition-all duration-200 hover:scale-105"
                style={{
                  border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                  background: isDark ? P("charcoal") : P("ecru"),
                  color: isDark ? P("white") : P("black")
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = P("butter");
                  (e.currentTarget as HTMLButtonElement).style.color = P("white");
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = isDark ? P("charcoal") : P("ecru");
                  (e.currentTarget as HTMLButtonElement).style.color = isDark ? P("white") : P("black");
                }}
              >
                <ArrowLeft className="h-4 w-4" />
                Wstecz
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 md:mt-12">
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

const NotFound = () => {
  return (
    <ClientOnlyWrapper fallback={
      <div className="min-h-screen flex flex-col bg-[#FAF6EE]">
        {/* Header Fallback */}
        <header className="py-6 px-6 border-b-3 border-black bg-white">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-extrabold text-black">Adam Gałęcki</div>
            <div className="flex gap-4">
              <div className="w-8 h-8 border border-black bg-white"></div>
              <div className="w-8 h-8 border border-black bg-white"></div>
            </div>
          </div>
        </header>
        
        {/* Main Content Fallback */}
        <main className="flex-1 flex items-center justify-center px-4 py-20 pb-8 md:py-16 md:pb-12">
          <div className="text-center max-w-md md:max-w-xl mx-auto w-full mt-0 mb-0 md:mt-16 md:mb-8">
            {/* Main Content Box */}
            <div className="p-8 md:p-12 bg-white border-4 border-black">
              <div className="mb-6 md:mb-8">
                <h1 className="text-[15vw] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight text-black">
                  404
                </h1>
              </div>
              <div className="mb-8 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 md:mb-4 uppercase tracking-wide text-black">
                  Strona nie została znaleziona
                </h2>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#2E2217] opacity-80 px-4">
                  Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
                </p>
              </div>
              <div className="mb-8 md:mb-12">
                <div className="inline-block px-3 py-2 md:px-4 md:py-2 font-mono text-xs sm:text-sm bg-[#FAF6EE] border-2 border-black text-[#2E2217] break-all max-w-full">
                  /nieistniejaca-strona
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
                <a href="/" className="inline-flex items-center gap-2 font-extrabold px-6 py-3 border-3 border-black bg-[#FAF6EE] text-black hover:scale-105 transition-all duration-200">
                  <div className="w-4 h-4 border border-black bg-white"></div>
                  Strona główna
                </a>
                <button className="inline-flex items-center gap-2 font-extrabold px-6 py-3 border-3 border-black bg-[#FAF6EE] text-black hover:scale-105 transition-all duration-200">
                  <div className="w-4 h-4 border border-black bg-white"></div>
                  Wstecz
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Fallback */}
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
      <NotFoundContent />
    </ClientOnlyWrapper>
  );
};

export default NotFound;
