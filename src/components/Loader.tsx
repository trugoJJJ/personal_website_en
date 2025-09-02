"use client";

import { ClientOnlyWrapper } from "./ClientOnlyWrapper";
import { useState, useEffect } from "react";

// Paleta kolorów
const COLORS = {
  amaranth: "#C25A3A",
  ecru: "#FAF6EE",
  butter: "#D8A23A",
  alloy: "#736134",
  charcoal: "#2E2217",
  white: "#FFFFFF",
  black: "#000000",
};

const DARK_COLORS = {
  amaranth: "#6B2D5B",
  ecru: "#241b2b",
  butter: "#3A245A",
  alloy: "#4E2A7F",
  charcoal: "#0B0B10",
  white: "#FFFFFF",
  black: "#000000",
};

const LoaderContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Function to check current theme
  const checkTheme = () => {
    if (typeof window === 'undefined') return false;
    
    // Check localStorage first (using the same key as ThemeProvider)
    const storedTheme = localStorage.getItem('theme-preference');
    if (storedTheme === 'dark') return true;
    if (storedTheme === 'light') return false;
    
    // If system theme, check document class
    if (storedTheme === 'system' || !storedTheme) {
      return document.documentElement.classList.contains('dark');
    }
    
    return false;
  };

  useEffect(() => {
    setMounted(true);
    
    // Set initial theme
    setIsDark(checkTheme());
    
    // MutationObserver to watch for class changes on document.documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsDark(checkTheme());
        }
      });
    });

    // Listen for localStorage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme-preference') {
        setIsDark(checkTheme());
      }
    };

    // Listen for custom theme change events (from next-themes)
    const handleThemeChange = () => {
      setIsDark(checkTheme());
    };

    if (typeof window !== 'undefined') {
      // Observe document.documentElement for class changes
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });

      // Listen for storage events
      window.addEventListener('storage', handleStorageChange);
      
      // Listen for custom theme change events
      window.addEventListener('theme-change', handleThemeChange);
      
      // Also listen for next-themes specific events
      window.addEventListener('next-themes:change', handleThemeChange);
    }

    const timer = setTimeout(() => setIsVisible(true), 10);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      if (typeof window !== 'undefined') {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('theme-change', handleThemeChange);
        window.removeEventListener('next-themes:change', handleThemeChange);
      }
    };
  }, []);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const P = (color: keyof typeof COLORS) => (isDark ? DARK_COLORS : COLORS)[color];

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ease-in-out"
      style={{ 
        background: isDark ? P("charcoal") : P("white"),
        opacity: isVisible ? 1 : 0
      }}
    >
      {/* Kręcące się kwadratowe kółko */}
      <div 
        className="w-16 h-16 md:w-20 md:h-20 relative"
        style={{
          animation: 'spin 1.5s linear infinite'
        }}
      >
        {/* Górny kwadrat */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-5 md:h-5"
          style={{
            background: P("amaranth"),
            border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`
          }}
        />
        
        {/* Prawy kwadrat */}
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5"
          style={{
            background: P("amaranth"),
            border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`
          }}
        />
        
        {/* Dolny kwadrat */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-5 md:h-5"
          style={{
            background: P("amaranth"),
            border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`
          }}
        />
        
        {/* Lewy kwadrat */}
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5"
          style={{
            background: P("amaranth"),
            border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`
          }}
        />
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export const Loader = () => {
  return (
    <ClientOnlyWrapper>
      <LoaderContent />
    </ClientOnlyWrapper>
  );
};

export default Loader;
