"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useI18n, Locale } from "@/contexts/i18n";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

// Jesienna paleta spójna z Hero
const LIGHT = {
  black: "#000000",
  white: "#FFFFFF",
  amaranth: "#C25A3A", // Burnt Sienna
  ecru: "#FAF6EE",     // Cream
  butter: "#D8A23A",
  charcoal: "#2E2217",
};
const DARK = {
  black: "#000000",
  white: "#FFFFFF",
  amaranth: "#6B2D5B", // dopasowany do dark mode (#6B2D5B)
  ecru: "#2E2217", // ciemne tło
  butter: "#D8A23A",
  charcoal: "#2E2217",
};

function useIsDark() {
  const is = () => document.documentElement.classList.contains("dark");
  const [dark, setDark] = React.useState(false); // Start with false for SSR
  
  React.useEffect(() => {
    // Check for theme parameter in URL first
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const themeParam = urlParams.get('theme');
      
      if (themeParam === 'dark') {
        document.documentElement.classList.add('dark');
        setDark(true);
        console.log('Theme set to dark from URL parameter');
        return;
      } else if (themeParam === 'light') {
        document.documentElement.classList.remove('dark');
        setDark(false);
        console.log('Theme set to light from URL parameter');
        return;
      }
    }
    
    // Set initial value on client side (fallback to current state)
    setDark(is());
    
    const mo = new MutationObserver(() => setDark(is()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);
  
  return dark;
}

const LanguageSwitchContent = () => {
  const { locale, setLocale } = useI18n();
  const isDark = useIsDark();
  const PALETTE = isDark ? DARK : LIGHT;
  const pathname = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, '') : null;

  const setPL = () => setLocale("pl" as Locale);
  const setEN = () => setLocale("en" as Locale);

  // Generate Polish version URL based on current path
  const getPolishUrl = () => {
    console.log('Current pathname:', pathname); // Debug log
    console.log('Pathname type:', typeof pathname); // Debug log
    console.log('Current theme:', isDark ? 'dark' : 'light'); // Debug log
    
    if (!pathname) return `https://galecki.website/?theme=${isDark ? 'dark' : 'light'}`; // Handle undefined case
    
    const themeParam = `?theme=${isDark ? 'dark' : 'light'}`;
    
    if (pathname === "/") return `https://galecki.website/${themeParam}`;
    if (pathname === "/privacy-policy") return `https://galecki.website/polityka-prywatnosci${themeParam}`;
    if (pathname.startsWith("/portfolio/")) {
      // Keep the same portfolio path for Polish version
      return `https://galecki.website${pathname}${themeParam}`;
    }
    return `https://galecki.website/${themeParam}`;
  };

  const baseBtn = "rounded-none font-extrabold select-none transition-colors";
  const baseStyle: React.CSSProperties = isDark ? {
    border: `1px solid ${PALETTE.white}`,
    background: PALETTE.black, // niewybrany czarny
    color: PALETTE.white,
  } : {
    border: `3px solid ${PALETTE.black}`,
    background: PALETTE.ecru,
    color: PALETTE.black,
  };
  const activeStyle: React.CSSProperties = isDark ? {
    border: `1px solid ${PALETTE.white}`,
    background: PALETTE.amaranth,
    color: PALETTE.white,
  } : {
    border: `3px solid ${PALETTE.black}`,
    background: PALETTE.amaranth,
    color: PALETTE.white,
  };

  return (
    <div className="inline-flex items-center gap-2" aria-label="Language switch">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.href = getPolishUrl()}
          aria-label="Przejdź do polskiej wersji"
          className={baseBtn}
          style={baseStyle}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = PALETTE.amaranth;
            (e.currentTarget as HTMLButtonElement).style.color = PALETTE.white;
            (e.currentTarget as HTMLButtonElement).style.border = `${isDark ? '1px' : '3px'} solid ${isDark ? PALETTE.white : PALETTE.black}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = baseStyle.background as string;
            (e.currentTarget as HTMLButtonElement).style.color = baseStyle.color as string;
            (e.currentTarget as HTMLButtonElement).style.border = baseStyle.border as string;
          }}
        >
          PL
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={setEN}
          aria-pressed={locale === "en"}
          aria-label="Set language to English"
          className={baseBtn}
          style={locale === "en" ? activeStyle : baseStyle}
          onMouseEnter={(e) => {
            if (locale !== "en") {
              (e.currentTarget as HTMLButtonElement).style.background = PALETTE.amaranth;
              (e.currentTarget as HTMLButtonElement).style.color = PALETTE.white;
              (e.currentTarget as HTMLButtonElement).style.border = `${isDark ? '1px' : '3px'} solid ${isDark ? PALETTE.white : PALETTE.black}`;
            }
          }}
          onMouseLeave={(e) => {
            if (locale !== "en") {
              (e.currentTarget as HTMLButtonElement).style.background = baseStyle.background as string;
              (e.currentTarget as HTMLButtonElement).style.color = baseStyle.color as string;
              (e.currentTarget as HTMLButtonElement).style.border = baseStyle.border as string;
            }
          }}
        >
          EN
                </Button>
    </div>
  );
};

export const LanguageSwitch = () => {
  const pathname = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, '') : null;
  return (
    <ClientOnlyWrapper fallback={
      <div className="inline-flex items-center gap-2" aria-label="Language switch">
        <a 
          href="https://galecki.website/?theme=light"
          className="rounded-none font-extrabold select-none transition-colors hover:opacity-80"
          style={{
            border: `3px solid ${LIGHT.black}`,
            background: LIGHT.ecru,
            color: LIGHT.black,
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            fontWeight: 800,
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          PL
        </a>
        <div 
          className="rounded-none font-extrabold select-none transition-colors"
          style={{
            border: `3px solid ${LIGHT.black}`,
            background: LIGHT.amaranth,
            color: LIGHT.white,
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
            fontWeight: 800
          }}
        >
          EN
        </div>
      </div>
    }>
      <LanguageSwitchContent />
    </ClientOnlyWrapper>
  );
};

export default LanguageSwitch;
