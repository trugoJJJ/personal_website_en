"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

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

const ScrollToTopContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark, P } = usePalette();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
        background: isDark ? P("charcoal") : P("white"),
        color: isDark ? P("white") : P("black"),
        boxShadow: `0 4px 12px ${isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = P("amaranth");
        (e.currentTarget as HTMLButtonElement).style.color = P("white");
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = isDark ? P("charcoal") : P("white");
        (e.currentTarget as HTMLButtonElement).style.color = isDark ? P("white") : P("black");
      }}
      aria-label="Przejdź na górę strony"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export const ScrollToTop = () => {
  return (
    <ClientOnlyWrapper>
      <ScrollToTopContent />
    </ClientOnlyWrapper>
  );
};

export default ScrollToTop;
