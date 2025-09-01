"use client";

import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, MessageCircle, Heart, MapPin } from "lucide-react";

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
  const [isDark, setIsDark] = useState<boolean>(false); // Start with false for SSR

  useEffect(() => {
    // Set initial value on client side
    setIsDark(isDomDark());
    
    const mo = new MutationObserver(() => setIsDark(isDomDark()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const P = (k: keyof typeof COLORS) => (isDark ? DARK_COLORS : COLORS)[k];
  return { isDark, P };
}

const FooterSection = () => {
  const { isDark, P } = usePalette();
  const textColor = isDark ? '#b5b5b5' : '#686a6c';
  const borderColor = isDark ? P('white') : P('black');
  const iconHover = isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white';
  const btnHover = iconHover; // reuse
  
  return (
    <footer
      style={{
        background: isDark ? P('charcoal') : P('white'),
        borderTop: `3px solid ${borderColor}`,
        color: textColor,
      }}
    >
      <div className="w-full px-6">
        <div className="pt-12 md:pt-18 pb-8 md:pb-12">
          <div className="py-6 grid gap-6 md:gap-6 md:grid-cols-4 md:items-center items-start">
            {/* Kolumna 1 - Firma Gałęcka */}
            <div className="flex flex-col items-center text-center md:relative md:pr-8 mb-6 md:mb-0">
              <h3 className="text-base font-extrabold mb-4" style={{ color: textColor }}>Adam Gałęcki – Firma Gałęcka</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: 'mailto:agalecki.work@gmail.com', label: 'Mail', Icon: Mail },
                  { href: 'https://linkedin.com/in/adamgalecki', label: 'LinkedIn', Icon: Linkedin, ext: true },
                  { href: 'https://github.com', label: 'GitHub', Icon: Github, ext: true },
                  { href: '#', label: 'Messenger', Icon: MessageCircle },
                  { href: '#', label: 'Instagram', Icon: Heart },
                  { href: 'https://tiktok.com/@twojprofil', label: 'TikTok', ext: true, Icon: (props: any) => (
                    <svg viewBox="0 0 64 64" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
                      <path d="M36 8v28" />
                      <path d="M36 36c0 6-6 10-12 10s-12-4-12-10 6-10 12-10c3 0 6 1 8 3" />
                      <path d="M36 14c3 6 10 10 16 10" />
                    </svg>
                  ) },
                ].map(({ href, label, Icon, ext }, i) => (
                  <a
                    key={i}
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className={`w-8 h-8 flex items-center justify-center transition ${iconHover}`}
                    style={{ border: `1px solid ${borderColor}`, color: textColor }}
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              {/* Pionowy separator po prawej stronie tylko na desktop */}
              <div 
                className="hidden md:block absolute right-0 top-0 bottom-0 w-px"
                style={{ background: borderColor }}
              />
            </div>
            
            {/* Kolumna 2 - NIP */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-4 md:mb-0">
              <div className="inline-flex items-center gap-3">
                <span style={{ color: textColor }}>NIP: 9462752489</span>
                <button
                  onClick={() => navigator.clipboard.writeText('9462752489')}
                  className={`px-2 py-0.5 text-[10px] font-extrabold tracking-wide transition ${btnHover}`}
                  style={{ border: `1px solid ${borderColor}`, color: textColor }}
                  aria-label="Kopiuj NIP"
                >Kopiuj</button>
              </div>
            </div>
            
            {/* Kolumna 3 - REGON */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-4 md:mb-0">
              <div className="inline-flex items-center gap-3">
                <span style={{ color: textColor }}>REGON: 541404566</span>
                <button
                  onClick={() => navigator.clipboard.writeText('541404566')}
                  className={`px-2 py-0.5 text-[10px] font-extrabold tracking-wide transition ${btnHover}`}
                  style={{ border: `1px solid ${borderColor}`, color: textColor }}
                  aria-label="Kopiuj REGON"
                >Kopiuj</button>
              </div>
            </div>
            
            {/* Kolumna 4 - Lokalizacja */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed">
              <div className="flex items-center gap-2" style={{ color: textColor }}>
                <MapPin className="h-4 w-4" />
                <span>Lublin, Polska</span>
              </div>
            </div>
          </div>
          <div className="pt-12 md:pt-8 pb-8 text-center text-[11px] font-semibold tracking-wide" style={{ opacity: 0.45, color: textColor }}>
            © Firma Gałęcka 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };