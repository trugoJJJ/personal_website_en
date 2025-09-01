"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

const COLORS = {
  black: "#000000",
  white: "#FFFFFF",
};

const ThemeToggleContent = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const baseBtn = "rounded-none font-extrabold transition-colors";
  const baseStyle: React.CSSProperties = {
    border: `${isDark ? '1px' : '3px'} solid ${isDark ? COLORS.white : COLORS.black}`,
    background: isDark ? COLORS.black : COLORS.white,
    color: isDark ? COLORS.white : COLORS.black,
    width: 44,
    height: 44,
    padding: 0,
  };

  const handleThemeToggle = () => {
    // Add glitch animation to the entire page
    const html = document.documentElement;
    html.classList.add('theme-glitch');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      html.classList.remove('theme-glitch');
    }, 400);
    
    // Toggle theme
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
      onClick={handleThemeToggle}
      className={baseBtn}
      style={baseStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = COLORS.black;
        (e.currentTarget as HTMLButtonElement).style.color = COLORS.white;
        (e.currentTarget as HTMLButtonElement).style.border = `1px solid ${COLORS.white}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = isDark ? COLORS.black : COLORS.white;
        (e.currentTarget as HTMLButtonElement).style.color = isDark ? COLORS.white : COLORS.black;
        (e.currentTarget as HTMLButtonElement).style.border = `${isDark ? '1px' : '3px'} solid ${isDark ? COLORS.white : COLORS.black}`;
      }}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
};

export const ThemeToggle = () => {
  return (
    <ClientOnlyWrapper fallback={
      <div 
        className="rounded-none font-extrabold transition-colors"
        style={{
          border: `3px solid ${COLORS.black}`,
          background: COLORS.white,
          color: COLORS.black,
          width: 44,
          height: 44,
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Sun className="h-4 w-4" />
      </div>
    }>
      <ThemeToggleContent />
    </ClientOnlyWrapper>
  );
};

export default ThemeToggle;
