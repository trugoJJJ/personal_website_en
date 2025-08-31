import { useState, useEffect } from "react";

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
  const [isDark, setIsDark] = useState<boolean>(isDomDark());

  useEffect(() => {
    const mo = new MutationObserver(() => setIsDark(isDomDark()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  const P = (k: keyof typeof COLORS) => (isDark ? DARK_COLORS : COLORS)[k];
  return { isDark, P };
}

/* ================== SECTION HEADING ================== */
const SectionHeading = ({ children, id }: { children: any, id?: string }) => {
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

const SkillsSection = () => {
  const { isDark, P } = usePalette();
  
  const technicalSkills = [
    "Zarządzanie zespołem", "Analityka marketingu", "SEO",
    "Media Społecznościowe", "Płatne Kampanie Reklamowe",
    "Projektowanie Lejków", "No-Code", "Email Marketing",
    "Automatyzacja", "Tworzenie stron", "Animacja 3D", "Animacja 2D",
    "Grafika 3D", "Grafika 2D", "+ trochę więcej…"
  ];

  // Styl kafelka jak dla: "Analityka marketingu" (index 1 w poprzedniej wersji)
  const baseBackground = isDark
    ? `linear-gradient(145deg, #14131b 0%, #1d1626 60%, #241b2b 100%)`
    : `linear-gradient(145deg, #ffffff 0%, #faf7ef 55%, #f1ead8 100%)`;

  return (
    <section
      className="py-24 md:py-36"
      id="skills"
      style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading>Umiejętności</SectionHeading>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))" }}
        >
          {technicalSkills.map((skill, i) => (
            <div
              key={skill}
              className="relative font-extrabold tracking-tight select-none"
              style={{
                background: baseBackground,
                color: isDark ? P("white") : P("charcoal"),
                padding: "20px 24px",
                fontSize: "1.05rem",
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                lineHeight: 1.15,
                boxShadow: `${isDark ? '1px 1px' : '4px 4px'} 0 0 ${isDark ? P("white") : P("black")}`,
              }}
            >
              {/* boczny pasek – identyczny jak w kafelku referencyjnym (kolor butter) */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: 10,
                  background: P("butter"),
                  borderRight: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                  mixBlendMode: isDark ? "normal" : "multiply",
                }}
              />
              {/* numer (zostawiamy – spójny element stylu) */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: -12,
                  right: 10,
                  background: P("alloy"),
                  color: P("white"),
                  border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`,
                  fontSize: 10,
                  padding: "2px 6px",
                  letterSpacing: 0.5,
                  fontWeight: 800,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ paddingLeft: 16 }}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SkillsSection };