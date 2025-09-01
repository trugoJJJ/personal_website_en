"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const COLORS = {
  black: "#000000",
  white: "#FFFFFF",
};

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const baseBtn = "rounded-none font-extrabold transition-colors";
  const baseStyle: React.CSSProperties = {
    border: `3px solid ${COLORS.black}`,
    background: isDark ? COLORS.black : COLORS.white,
    color: isDark ? COLORS.white : COLORS.black,
    width: 44,
    height: 44,
    padding: 0,
  };

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={isDark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={baseBtn}
      style={baseStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = COLORS.black;
        (e.currentTarget as HTMLButtonElement).style.color = COLORS.white;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.background = isDark ? COLORS.black : COLORS.white;
        (e.currentTarget as HTMLButtonElement).style.color = isDark ? COLORS.white : COLORS.black;
      }}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </Button>
  );
};

export default ThemeToggle;
