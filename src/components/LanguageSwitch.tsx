import React from "react";
import { Button } from "@/components/ui/button";
import { useI18n, Locale } from "@/contexts/i18n";

const LIGHT = {
  black: "#000000",
  white: "#FFFFFF",
  amaranth: "#A4243B",
  ecru: "#D8C99B",
};
const DARK = {
  black: "#000000",
  white: "#FFFFFF",
  amaranth: "#6B2D5B",
  ecru: "#241b2b",
};

function useIsDark() {
  const is = () => document.documentElement.classList.contains("dark");
  const [dark, setDark] = React.useState(is());
  React.useEffect(() => {
    const mo = new MutationObserver(() => setDark(is()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);
  return dark;
}

export const LanguageSwitch = () => {
  const { locale, setLocale } = useI18n();
  const isDark = useIsDark();
  const COLORS = isDark ? DARK : LIGHT;

  const setPL = () => setLocale("pl" as Locale);
  const setEN = () => setLocale("en" as Locale);

  const baseBtn = "rounded-none font-extrabold select-none transition-colors";
  const baseStyle: React.CSSProperties = {
    border: `3px solid ${COLORS.black}`,
    background: COLORS.white,
    color: COLORS.black,
  };
  const activeStyle: React.CSSProperties = {
    border: `3px solid ${COLORS.black}`,
    background: COLORS.amaranth,
    color: COLORS.white,
  };

  return (
    <div className="inline-flex items-center gap-2" aria-label="Przełącz język">
      <Button
        variant="outline"
        size="sm"
        onClick={setPL}
        aria-pressed={locale === "pl"}
        aria-label="Ustaw język polski"
        className={baseBtn}
        style={locale === "pl" ? activeStyle : baseStyle}
        onMouseEnter={(e) => {
          if (locale !== "pl") {
            (e.currentTarget as HTMLButtonElement).style.background = COLORS.black;
            (e.currentTarget as HTMLButtonElement).style.color = COLORS.white;
          }
        }}
        onMouseLeave={(e) => {
          if (locale !== "pl") {
            (e.currentTarget as HTMLButtonElement).style.background = COLORS.white;
            (e.currentTarget as HTMLButtonElement).style.color = COLORS.black;
          }
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
            (e.currentTarget as HTMLButtonElement).style.background = COLORS.black;
            (e.currentTarget as HTMLButtonElement).style.color = COLORS.white;
          }
        }}
        onMouseLeave={(e) => {
          if (locale !== "en") {
            (e.currentTarget as HTMLButtonElement).style.background = COLORS.white;
            (e.currentTarget as HTMLButtonElement).style.color = COLORS.black;
          }
        }}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitch;
