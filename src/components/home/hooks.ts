"use client";

import { useState, useEffect } from "react";

/* ================== PALETA – LIGHT ================== */
export const COLORS = {
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
export function usePalette() {
  const [isDark, setIsDark] = useState<boolean>(false); // Start with false for SSR

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const isDomDark = () => document.documentElement.classList.contains("dark");
    
    // Set initial value on client side
    setIsDark(isDomDark());
    
    const mo = new MutationObserver(() => setIsDark(isDomDark()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const P = (k: keyof typeof COLORS) => (isDark ? DARK_COLORS : COLORS)[k];
  return { isDark, P };
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const useI18n = () => ({
  t: (key: string) =>
    ({
      "portfolio.cta.more": "Kliknij, aby zobaczyć portfolio graficzne",
      "portfolio.cta.more.mobile": "Kliknij, aby zobaczyć<br/>portfolio graficzne",
      "portfolio.cta.contact": "Pobierz CV",
      "portfolio.cta.contact.mobile": "Pobierz CV",
    }[key] || key),
});