import { useState, useEffect, useRef, MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  DndContext, closestCenter, DragEndEvent, DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove, SortableContext, useSortable, rectSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Target, TrendingUp, Users, Award,
  GraduationCap, Briefcase, Calendar as CalendarIcon,
  Mail, MessageCircle, ExternalLink, Clock,
  Heart, Linkedin, Github, Menu, X, MapPin
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";
import SeasonalBackground from "@/components/SeasonalBackground";
import portrait from "@/assets/hero-portrait.jpg";
import { articles } from "@/data/articles";

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
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
}
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/* ================== DANE / TYPY ================== */
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags?: string[];
  metrics?: string;
};
const CATEGORIES = ["Projekty kreatywne", "Projekty sprzedażowe"] as const;

const portfolioProjects: Omit<Project, 'id'>[] = [
  {
    title: 'Kompleksowa obsługa SEO dla producenta drzwi zewnętrznych',
    description:
      'Optymalizacja techniczna → content → link building → artykuły → analityka → raporty.',
    image: articles?.[0]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty sprzedażowe'],
    tags: ['SEO', 'Content', 'Link building'],
    metrics: '+3 mln wyświetleń'
  },
  {
    title: 'Portfolio płatnych kampanii reklamowych',
    description: 'Google Ads → Meta Ads → LinkedIn Ads.',
    image: articles?.[1]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty sprzedażowe'],
    tags: ['PPC', 'Performance', 'ROAS'],
    metrics: 'Wzrost zapytań 40%'
  },
  {
    title: 'System śledzenia danych o odwiedzających',
    description: 'GA4 → GSC → Ads → Meta → GTM (pełny pomiar).',
    image: articles?.[2]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty kreatywne'],
    tags: ['GA4', 'GTM', 'Attribution'],
    metrics: '150 tys. konwersji'
  },
  {
    title: 'Szablon animacji portfolio',
    description: '2D Motion (AE) – prezentacja produktu/usługi.',
    image: articles?.[0]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty kreatywne'],
    tags: ['After Effects', '2D', 'Template'],
    metrics: '50 tys. wyświetleń'
  },
];
const createSixProjects = (projects: Omit<Project, 'id'>[]): Project[] => {
  const sixProjects: Project[] = [];
  const projectPool = [...projects, ...projects.slice(0, 2)];
  for (let i = 0; i < projectPool.length; i++) {
    const projectTemplate = projectPool[i];
    sixProjects.push({ ...projectTemplate, id: `${projectTemplate.title}-${i}` });
  }
  return sixProjects;
};

/* ================== HEADER ================== */
const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "O mnie" },
  { href: "#experience", label: "Doświadczenie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#articles", label: "Artykuły" },
];

const Header = () => {
  const { isDark, P } = usePalette();
  const [open, setOpen] = useState(false);
  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
  }, [open]);
  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: isDark ? P("charcoal") : P("white"),
        borderBottom: `3px solid ${P("black")}`,
        color: isDark ? P("white") : P("charcoal"),
      }}
    >
      <nav className="container mx-auto px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
  {/* lewa strona */}
  <a
    href="#home"
    className="font-extrabold tracking-tight justify-self-start"
    style={{ color: isDark ? P("white") : P("charcoal") }}
  >
    Adam&nbsp;Gałęcki
  </a>

  {/* środek — NA STAŁE WYŚRODKOWANE */}
  <ul
    className="hidden md:flex items-center gap-8 text-sm justify-self-center"
    style={{ color: isDark ? P("white") : P("charcoal") }}
  >
    {links.map((l) => (
      <li key={l.href}>
        <a href={l.href} className="font-bold hover:underline">
          {l.label}
        </a>
      </li>
    ))}
  </ul>

  {/* prawa strona desktop */}
  <div className="hidden md:flex items-center gap-2 justify-self-end">
    <LanguageSwitch />
    <ThemeToggle />
    <Button
      size="lg"
      asChild
      className="rounded-none font-extrabold transition-transform hover:scale-[1.02]"
      style={{ background: P("amaranth"), color: P("white"), border: `3px solid ${P("black")}` }}
    >
      <a href="#contact">Kontakt</a>
    </Button>
  </div>

  {/* prawa strona mobile */}
  <div className="md:hidden flex items-center gap-2 justify-self-end">
    {/* LanguageSwitch przeniesiony do menu overlay */}
    <ThemeToggle />
    <Button
      variant="outline"
      size="icon"
      aria-label="Otwórz menu"
      onClick={() => setOpen(true)}
      className="rounded-none"
      style={{ border: `3px solid ${P("black")}`, color: isDark ? P("white") : P("charcoal") }}
    >
      <Menu className="h-5 w-5" />
    </Button>
  </div>
</nav>


      {open && (
        <div className="fixed inset-0 z-50"
             style={{ background: isDark ? P("charcoal") : P("ecru") }}>
          <div className="container mx-auto px-6 h-16 flex items-center justify-between"
               style={{ borderBottom: `3px solid ${P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
            <span className="font-extrabold">Menu</span>
            <Button variant="outline" size="icon" aria-label="Zamknij menu"
                    onClick={() => setOpen(false)}
                    className="rounded-none"
                    style={{ border: `3px solid ${P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-6 px-6">
            {/* Language switch inside open mobile menu */}
            <div className="mb-4">
              <LanguageSwitch />
            </div>
            <ul className="grid gap-4 text-lg" style={{ color: isDark ? P("white") : P("charcoal") }}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                     className="block py-3"
                     style={{ borderBottom: `2px solid ${P("black")}` }}
                     onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild size="xl"
                      className="w-full rounded-none font-extrabold"
                      style={{
                        background: P("amaranth"),
                        color: P("white"),
                        border: `3px solid ${P("black")}`,
                      }}>
                <a href="#contact">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

/* ================== BIG TYPE CTA – MALOWANIE KWADRATAMI ================== */
type BrushType = "brush" | "spray" | "cursor";
const useI18n = () => ({
  t: (key: string) =>
    ({
      "portfolio.cta.more": "kliknij, aby zobaczyć portfolio graficzne",
      "portfolio.cta.more.mobile": "Projekty<br/>graficzne",
      "portfolio.cta.contact": "Pobierz CV",
      "portfolio.cta.contact.mobile": "Pobierz CV",
    }[key] || key),
});

const BrushControls = ({
  onSizeChange, onColorChange, onBrushTypeChange,
  currentColor, currentSize, currentBrushType, isVisible,
}: {
  onSizeChange: (size: number) => void;
  onColorChange: (color: string) => void;
  onBrushTypeChange: (type: BrushType) => void;
  currentColor: string;
  currentSize: number;
  currentBrushType: BrushType;
  isVisible: boolean;
}) => {
  const { isDark, P } = usePalette();

  const SIZES = [
    { label: 'Mały', value: 50 },
    { label: 'Duży', value: 500 },
  ];

  const BRUSH_TYPES: { id: BrushType; name: string }[] = [
    { id: "brush", name: "Pędzel" },
    { id: "spray", name: "Spray" },
    { id: "cursor", name: "Kursor" },
  ];

  const PALETTE = [
    { display: P("black"), draw: P("black") },
    { display: P("white"), draw: P("white") },
    { display: P("amaranth"), draw: P("amaranth") },
    { display: P("butter"), draw: P("butter") },
    { display: P("alloy"), draw: P("alloy") },
    { display: P("charcoal"), draw: P("charcoal") },
  ];

  // ✅ Single-select placeholder ring
  const [markedColor, setMarkedColor] = useState<string | null>(null);

  const toggleMarkedClick = (color: string) => {
    // Klik lewym = zmień pędzel + ustaw placeholder tylko na tym kolorze (lub wyłącz jeśli kliknięto ten sam)
    onColorChange(color);
    setMarkedColor(prev => (prev === color ? null : color));
  };

  const toggleMarkedRightClick = (e: React.MouseEvent, color: string) => {
    // PPM = tylko przełącz placeholder (bez zmiany koloru pędzla), nadal single-select
    e.preventDefault();
    setMarkedColor(prev => (prev === color ? null : color));
  };

  return (
    <div
      className={`transition-all ${isVisible ? "opacity-100" : "opacity-0"} flex flex-wrap gap-3 items-center justify-center`}
    >
      {/* Tryby pędzla */}
      <div
        className="flex items-center p-1 gap-1"
        style={{ border: `3px solid ${P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}
      >
        {BRUSH_TYPES.map((b, i) => (
          <button
            key={b.id}
            onClick={() => onBrushTypeChange(b.id)}
            className="px-3 py-2 font-extrabold"
            style={{
              background: currentBrushType === b.id ? P("amaranth") : (isDark ? P("charcoal") : P("ecru")),
              color: currentBrushType === b.id ? P("white") : (isDark ? P("white") : P("black")),
              borderRight: i === BRUSH_TYPES.length - 1 ? 'none' : `3px solid ${P("black")}`,
            }}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Rozmiary pędzla */}
      <div
        className="flex items-center p-1 gap-1"
        style={{ border: `3px solid ${P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}
      >
        {SIZES.map((s, i) => (
          <button
            key={s.value}
            onClick={() => onSizeChange(s.value)}
            className="px-4 py-2 font-extrabold"
            style={{
              background: currentSize === s.value ? P("amaranth") : (isDark ? P("charcoal") : P("ecru")),
              color: currentSize === s.value ? P("white") : (isDark ? P("white") : P("black")),
              borderRight: i === SIZES.length - 1 ? 'none' : `3px solid ${P("black")}`,
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Paleta kolorów z pojedynczym placeholder ringiem */}
      <div
        className="flex items-center p-1 gap-1"
        style={{ border: `3px solid ${P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}
      >
        {PALETTE.map((c, i) => {
          const isSelected = currentColor === c.draw;
          const isMarked = markedColor === c.draw;

          return (
            <button
              key={c.draw + i}
              onClick={() => toggleMarkedClick(c.draw)}
              onContextMenu={(e) => toggleMarkedRightClick(e, c.draw)}
              className="relative w-10 h-10"
              style={{
                background: c.display,
                borderRight: i === PALETTE.length - 1 ? 'none' : `3px solid ${P("black")}`,
              }}
              aria-label={`Kolor ${c.draw}${isMarked ? ' (oznakowany)' : ''}`}
              title={
                isMarked
                  ? 'Kliknij, aby usunąć obrys'
                  : 'Kliknij, aby dodać obrys'
              }
            >
              {/* Ring aktualnie wybranego koloru (wyróżnienie wyboru pędzla) */}
              {isSelected && (
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{ boxShadow: `inset 0 0 0 3px ${P("amaranth")}` }}
                />
              )}

              {/* Single-select placeholder ring — tylko obrys, nie zasłania tła */}
              {isMarked && (
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow: `
                      inset 0 0 0 2px ${P("white")},
                      inset 0 0 0 4px ${P("black")}
                    `,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};



const BigTypeCTA = () => {
  const { t } = useI18n();
  const { isDark, P } = usePalette();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [brushSize, setBrushSize] = useState(500);
  const [drawingColor, setDrawingColor] = useState(P("black"));
  const [brushType, setBrushType] = useState<BrushType>("brush");

  const isPanelVisible = true;

  const isDraggingRef = useRef(false);
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  const lastMousePosition = useRef<{ x: number; y: number } | null>(null);
  const animationFrameId = useRef<number>();

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    isDraggingRef.current = true;
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      mousePosition.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };
  const handleMouseLeave = () => {
    mousePosition.current = null;
    lastMousePosition.current = null;
    setTimeout(() => { isDraggingRef.current = false; }, 100);
  };

  // Setup canvas size + tło wg palety (reaguje na dark mode)
  useEffect(() => {
    const setup = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || !linkRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = linkRef.current.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = P("amaranth");
      ctx.fillRect(0, 0, rect.width, rect.height);
    };
    setup();
    const ro = new ResizeObserver(setup);
    if (linkRef.current) ro.observe(linkRef.current);
    return () => { ro.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  // Rysowanie kwadratami
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d", { willReadFrequently: true });
    let running = true;

    const drawSquare = (x: number, y: number, size: number) => {
      if (!ctx) return;
      const half = size / 2;
      ctx.fillStyle = drawingColor;
      ctx.fillRect(Math.round(x - half), Math.round(y - half), Math.max(1, Math.round(size)), Math.max(1, Math.round(size)));
    };

    const drawBrushSquaresBetween = (from: {x: number; y: number}, to: {x: number; y: number}, step = 6) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const dist = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.floor(dist / step));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = from.x + dx * t;
        const y = from.y + dy * t;
        drawSquare(x, y, Math.max(4, Math.floor(brushSize / 6)));
      }
    };

    const loop = () => {
      if (!running) return;
      if (brushType !== "cursor" && ctx && mousePosition.current && linkRef.current) {
        if (!lastMousePosition.current) lastMousePosition.current = mousePosition.current;

        if (brushType === "spray") {
          for (let i = 0; i < 30; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = (Math.random() * brushSize) / 2;
            const x = mousePosition.current.x + radius * Math.cos(angle);
            const y = mousePosition.current.y + radius * Math.sin(angle);
            drawSquare(x, y, Math.max(2, Math.floor(brushSize / 12)));
          }
        } else {
          drawBrushSquaresBetween(lastMousePosition.current, mousePosition.current, 5);
        }
        lastMousePosition.current = mousePosition.current;
      }

      animationFrameId.current = requestAnimationFrame(loop);
    };

    loop();
    return () => { running = false; if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); };
  }, [drawingColor, brushSize, brushType]);

  return (
    <section className="py-16">
      <div className="w-full flex flex-col items-center gap-6">
        <a
          href="https://www.behance.net/adamgacki1"
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full md:w-[900px] min-h-[160px] select-none"
          style={{
            border: `3px solid ${P("black")}`,
            cursor: brushType === "cursor" ? "pointer" : "crosshair",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label={t("portfolio.cta.more")}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: "none" }}
          />
          <span
            className="relative z-[1] text-3xl md:text-3xl font-extrabold tracking-tighter text-center"
            style={{ color: P("white") }}
            dangerouslySetInnerHTML={{
              __html:
                window.innerWidth > 768
                  ? t("portfolio.cta.more")
                  : t("portfolio.cta.more.mobile"),
            }}
          />
        </a>

        <div className="w-full flex justify-center">
          <BrushControls
            isVisible={true}
            onSizeChange={setBrushSize}
            onColorChange={setDrawingColor}
            onBrushTypeChange={setBrushType}
            currentColor={drawingColor}
            currentSize={brushSize}
            currentBrushType={brushType}
          />
        </div>
      </div>
    </section>
  );
};



/* ================== MINI UI DND ================== */
function SuccessAnimationPlaceholder({ onReset }: { onReset: () => void }) {
  const { P } = usePalette();
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center"
         style={{ background: `rgba(0,0,0,0.85)` }}>
      <div className="p-8 text-center"
           style={{ background: P("ecru"), color: P("black"), border: `3px solid ${P("black")}` }}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">Gratulacje!</h2>
        <p className="mb-8">Sekwencja została ułożona poprawnie.</p>
        <button
          onClick={onReset}
          className="px-6 py-3 font-extrabold"
          style={{ background: P("butter"), border: `3px solid ${P("black")}` }}
        >
          Ułóż od nowa
        </button>
      </div>
    </div>
  );
}
function ProjectCard({ project, isHighlighted = false, isDraggable = true }: { project: Project, isHighlighted?: boolean, isDraggable?: boolean }) {
  const { isDark, P } = usePalette();
  return (
    <article className="group flex flex-col h-full"
             style={{ border: `3px solid ${P("black")}`, outline: isHighlighted ? `4px solid ${P("alloy")}` : "none" }}>
      <div className="overflow-hidden flex flex-col h-full">
      <figure className="aspect-video overflow-hidden"
        style={{ borderBottom: `3px solid ${P("black")}` }}>
  <img
    src={project.image}
    alt={project.title}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
  />
</figure>

        <div className="p-5 flex-1 flex flex-col" style={{ background: isDark ? P("charcoal") : P("white") }}>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-extrabold" style={{ color: isDark ? P("white") : P("charcoal") }}>{project.title}</h3>
            {project.metrics && (
              <span className="text-xs font-extrabold px-2 py-1"
                    style={{ background: P("ecru"), color: isDark ? P("white") : P("black"), border: `2px solid ${P("black")}` }}>
                {project.metrics}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm" style={{ color: isDark ? P("white") : P("charcoal") }}>{project.description}</p>
          {project.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((t) => (
                <span key={t} className="text-xs px-2 py-1"
                      style={{ border: `2px solid ${P("black")}`, color: isDark ? P("white") : P("black") }}>
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-auto pt-6">
            <button
              className="w-full font-extrabold transition-colors"
              style={{
                border: `3px solid ${isDark ? P("white") : P("black")}`,
                padding: "10px 0",
                background: isDark ? P("charcoal") : P("white"),
                color: isDark ? P("white") : P("black")
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = P("amaranth");
                (e.currentTarget as HTMLButtonElement).style.color = P("white");
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = isDark ? P("charcoal") : P("white");
                (e.currentTarget as HTMLButtonElement).style.color = isDark ? P("white") : P("black");
              }}
            >
              Szczegóły
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
function SortableProjectItem({ project, isHighlighted, isDraggable }: { project: Project, isHighlighted: boolean, isDraggable: boolean }) {
  const { P } = usePalette();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: project.id, disabled: !isDraggable });

  const baseStyle: React.CSSProperties = { transform: CSS.Transform.toString(transform), transition };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={{ ...baseStyle, border: `3px dashed ${P("black")}`, background: P("ecru"), height: '100%' }}
      />
    );
  }
  return (
    <div ref={setNodeRef} style={baseStyle} {...attributes} {...listeners}>
      <ProjectCard project={project} isHighlighted={isHighlighted} isDraggable={isDraggable} />
    </div>
  );
}

/* ================== GŁÓWNY KOMPONENT ================== */
export const Hero = () => {
  const { isDark, P } = usePalette();
  const { t } = useI18n();

  // Dodaj useMediaQuery, aby sprawdzić, czy urządzenie to desktop
  const isDesktop = useMediaQuery('(min-width: 640px)'); // używamy tej zmiennej w poniższym kodzie


  // HERO scale
  const [scale, setScale] = useState(0.6);
  const boxRef = useRef<HTMLDivElement | null>(null);

// portfolio
const [items, setItems] = useState<Project[]>([]);
const [initialItems, setInitialItems] = useState<Project[]>([]);
const [isSolved, setIsSolved] = useState(false);
const [activeItem, setActiveItem] = useState<Project | null>(null);
const [activeCategory, setActiveCategory] = useState<string | null>(null);
const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
const hoverClearTimeout = useRef<number | null>(null);

const setHoverCategorySafely = (val: string | null) => {
  if (hoverClearTimeout.current) {
    window.clearTimeout(hoverClearTimeout.current);
    hoverClearTimeout.current = null;
  }
  setHoveredCategory(val);
};

const scheduleHoverClear = (delay = 150) => {
  if (hoverClearTimeout.current) window.clearTimeout(hoverClearTimeout.current);
  hoverClearTimeout.current = window.setTimeout(() => {
    setHoveredCategory(null);
    hoverClearTimeout.current = null;
  }, delay);
};

  // PDF generator UI
  const [generating, setGenerating] = useState(false);
  const [showCV, setShowCV] = useState(false);

  // hero scaling
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = boxRef.current; if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const elCenter = rect.top + rect.height / 2;
      const vpCenter = viewportH / 2;
      const dist = Math.abs(elCenter - vpCenter);
      const falloff = viewportH * 0.6;
      const proximity = Math.max(0, Math.min(1, 1 - dist / falloff));
      const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
      const s = 0.4 + (1.0 - 0.4) * easeOutCubic(proximity);
      setScale(s);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // init portfolio
  useEffect(() => {
    const generatedItems = createSixProjects(portfolioProjects);
    setInitialItems(generatedItems);
    setItems(shuffleArray([...generatedItems]));
  }, []);

  // portfolio helpers
  const checkSolution = (currentOrder: Project[]) => {
    const sequenceTitles = currentOrder.map(item => item.title);
    const a = 'Kompleksowa obsługa SEO dla producenta drzwi zewnętrznych';
    const b = 'Portfolio płatnych kampanii reklamowych';
    const c = 'System śledzenia danych o odwiedzających';
    const d = 'Szablon animacji portfolio';
    const winning1 = [a, a, b, c, d, d];
    const winning2 = [d, d, c, b, a, a];
    const isMatch = (x: string[], y: string[]) => JSON.stringify(x) === JSON.stringify(y);
    if (isMatch(sequenceTitles, winning1) || isMatch(sequenceTitles, winning2)) setIsSolved(true);
  };
  const handleReset = () => { setIsSolved(false); setItems(shuffleArray(initialItems)); };
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      const newOrder = arrayMove(items, oldIndex, newIndex);
      setItems(newOrder);
      checkSolution(newOrder);
    }
    setActiveItem(null);
  }

  /* ————— wspólne headingi i odstępy ————— */
  const SectionHeading = ({ children, id }: { children: any, id?: string }) => (
    <header id={id} className="mt-8 mb-24">
      <h2
        className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
        style={{ color: isDark ? P("white") : P("black") }}
      >
        {children}
      </h2>
    </header>
  );

  /* ———— HERO ———— */
  const HeroSection = () => (
    <section id="home" className="pt-44 pb-32" style={{ background: isDark ? P("charcoal") : P("white") }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-[20vw] sm:text-4xl md:text-9xl font-extrabold uppercase tracking-tight"
              style={{ color: isDark ? P("white") : P("black"), lineHeight: 1.05 }}>
            Digital
          </h1>
          <h1 className="text-[16vw] sm:text-3xl md:text-6xl font-extrabold uppercase tracking-tight"
              style={{ color: isDark ? P("white") : P("black"), lineHeight: 1.05 }}>
            Marketing
          </h1>
          <h1 className="text-[16vw] sm:text-2xl md:text-4xl font-extrabold uppercase tracking-tight"
              style={{ color: isDark ? P("white") : P("black"), lineHeight: 1.15 }}>
            Manager
          </h1>
        </div>

        {/* Video placeholder ze skalowaniem */}
        <div className="relative mx-auto w-full max-w-[1600px]">
          <div
            ref={boxRef}
            className="overflow-hidden transition-transform duration-150 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center",
              border: `3px solid ${P("black")}`,
            }}
          >
            <div className="aspect-video flex items-center justify-center" style={{ background: P("ecru") }}>
              <div className="text-center space-y-3" style={{ color: isDark ? P("white") : P("charcoal") }}>
                <div className="w-16 h-16 mx-auto flex items-center justify-center"
                     style={{ border: `3px solid ${P("black")}` }}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p>Video placeholder</p>
                <p style={{ opacity: .7 }}>Scroll to see video grow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  /* ———— PORTFOLIO ———— */
  const PortfolioSection = () => (
    <section className="py-36" id="portfolio"
             style={{ background: P("ecru"), borderTop: `3px solid ${P("black")}` }}>
      {isSolved && <SuccessAnimationPlaceholder onReset={handleReset} />}
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading>Portfolio</SectionHeading>

        {/* Kategorie (wyrównane do prawej) — DARK MODE FIX */}
        <div className="flex justify-end mb-10 gap-3">
          {CATEGORIES.map((c) => {
            const isActive = activeCategory === c;
            const baseBg = isDark ? P("charcoal") : P("white");
            const baseColor = isDark ? P("white") : P("black");
            const activeBg = P("amaranth");
            const activeColor = P("white");
            const borderColor = isDark ? P("white") : P("black");
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(isActive ? null : (c as string))}
                onMouseEnter={() => setHoverCategorySafely(c as string)}
                onMouseLeave={() => scheduleHoverClear(150)}
                onFocus={() => setHoverCategorySafely(c as string)}
                onBlur={() => scheduleHoverClear(150)}
                className="px-5 py-2 font-extrabold transition-colors"
                style={{
                  border: `3px solid ${borderColor}`,
                  background: isActive ? activeBg : baseBg,
                  color: isActive ? activeColor : baseColor,
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = P("amaranth");
                  (e.currentTarget as HTMLButtonElement).style.color = P("white");
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = isActive ? activeBg : baseBg;
                  (e.currentTarget as HTMLButtonElement).style.color = isActive ? activeColor : baseColor;
                }}
              >
                {c as string}
              </button>
            );
          })}
        </div>

        <DndContext
          collisionDetection={closestCenter}
          onDragStart={(e) => setActiveItem(items.find(i => i.id === (e as any).active.id) || null)}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => {
                const isHighlighted =
                  (activeCategory && item.categories?.includes(activeCategory)) ||
                  (hoveredCategory && item.categories?.includes(hoveredCategory!));
                return (
                  <SortableProjectItem
                    key={item.id}
                    project={item}
                    isHighlighted={!!isHighlighted}
                    isDraggable={isDesktop}
                  />
                );
              })}
            </div>
          </SortableContext>
          <DragOverlay>
            {activeItem ? (
              <div style={{ border: `3px solid ${P("black")}`, background: isDark ? P("charcoal") : P("white") }}>
                <ProjectCard project={activeItem} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        {/* —— CTA POD PORTFOLIO —— */}
        <div className="mt-16 grid lg:grid-cols-[1fr_auto] gap-10 items-start">
          <div>
            <BigTypeCTA />
          </div>
        </div>
      </div>
    </section>
  );

  /* ———— POZOSTAŁE SEKCJE (O mnie / Doświadczenie / Umiejętności / Tech Stack / Artykuły / Kontakt) ———— */
  const AboutSection = () => (
    <section className="py-36" id="about"
             style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `3px solid ${P("black")}` }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-24 mt-8">
          <h2 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
              style={{ color: isDark ? P("white") : P("black") }}>
            O mnie
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <figure className="overflow-hidden" style={{ border: `3px solid ${P("black")}` }}>
              <img src={portrait} alt="Portret – o mnie" loading="lazy" className="w-full h-64 object-cover md:h-80" />
            </figure>
            <div className="space-y-6" style={{ color: isDark ? P("white") : P("charcoal") }}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-center md:text-left">Cześć, nazywam się Adam</h3>
              <p className="text-lg">
                Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych.
              </p>
              <p>
                Przez ostatnie 5 lat rozwijałem się w marketingu – od grafika, przez SEO, po managera zespołu.
                Realizowałem długoterminowe strategie SEO (produkcja drzwi, medyczna, krypto), zarządzałem zespołem
                i wspierałem projekty IT dla największych marek w Polsce.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { Icon: Target, value: "+3 mln", label: "Wyświetleń linku do strony w Google" },
                { Icon: TrendingUp, value: "125 tys.", label: "Wejść na stronę z wyników Google" },
                { Icon: Users, value: "40%", label: "Wzrost zapytań ofertowych" },
                { Icon: Award, value: "750", label: "Wypełnionych formularzy" },
              ].map((s) => (
                <div key={s.label} className="p-6 text-left"
                     style={{ border: `3px solid ${P("black")}`, background: P("ecru"), color: isDark ? P("white") : P("black") }}>
                  <s.Icon className="h-7 w-7 mb-3" />
                  <div className="text-3xl font-extrabold">{s.value}</div>
                  <div className="text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Kontakt (ikony + QR) */}
            <div className="p-10"
                 style={{ background: P("butter"), color: isDark ? P("white") : P("black"), border: `3px solid ${P("black")}` }}>
              {(() => {
                const QR_DATA_URI =
                  'data:image/svg+xml;utf8,' +
                  encodeURIComponent(`
                  <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 120 120">
                    <rect width="120" height="120" fill="#ffffff"/>
                    <rect x="6" y="6" width="28" height="28" fill="none" stroke="#000" stroke-width="6"/>
                    <rect x="6" y="6" width="18" height="18" fill="#000"/>
                    <rect x="86" y="6" width="28" height="28" fill="none" stroke="#000" stroke-width="6"/>
                    <rect x="96" y="16" width="18" height="18" fill="#000"/>
                    <rect x="6" y="86" width="28" height="28" fill="none" stroke="#000" stroke-width="6"/>
                    <rect x="6" y="96" width="18" height="18" fill="#000"/>
                    <rect x="44" y="44" width="8" height="8" fill="#000"/>
                    <rect x="56" y="44" width="8" height="8" fill="#000"/>
                    <rect x="68" y="44" width="8" height="8" fill="#000"/>
                    <rect x="44" y="56" width="8" height="8" fill="#000"/>
                    <rect x="56" y="56" width="8" height="8" fill="#000"/>
                    <rect x="68" y="56" width="8" height="8" fill="#000"/>
                    <rect x="44" y="68" width="8" height="8" fill="#000"/>
                    <rect x="56" y="68" width="8" height="8" fill="#000"/>
                    <rect x="68" y="68" width="8" height="8" fill="#000"/>
                  </svg>
                `);

                return (
                  <div className="grid grid-cols-5 gap-8 items-center">
                    {/* Ikony po lewej (2 rzędy po 3) */}
                    <div className="col-span-3 grid grid-cols-3 gap-6">
                      {[
                        { Icon: Mail, href: "mailto:agalecki.work@gmail.com", label: "Mail" },
                        { Icon: Linkedin, href: "https://linkedin.com/in/adamgalecki", label: "LinkedIn" },
                        { Icon: Github, href: "https://github.com", label: "GitHub" },
                        { Icon: MessageCircle, href: "#", label: "Messenger" },
                        { Icon: Heart, href: "#", label: "Instagram" },
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 64 64" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
                              <path d="M36 8v28" />
                              <path d="M36 36c0 6-6 10-12 10s-12-4-12-10 6-10 12-10c3 0 6 1 8 3" />
                              <path d="M36 14c3 6 10 10 16 10" />
                            </svg>
                          ),
                          href: "https://tiktok.com/@twojprofil",
                          label: "TikTok",
                        },
                      ].map(({ Icon, href, label }, i) => {
                        const baseBg = isDark ? P("charcoal") : P("white");
                        const baseColor = isDark ? P("white") : P("black");
                        return (
                          <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="group w-full aspect-square flex items-center justify-center transition-transform duration-300 ease-out focus-visible:outline-none"
                            style={{
                              border: `3px solid ${P("black")}`,
                              background: baseBg,
                              color: baseColor,
                              position: 'relative',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget;
                              el.style.background = P("amaranth");
                              el.style.color = P("white");
                              el.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget;
                              el.style.background = baseBg;
                              el.style.color = baseColor;
                              el.style.transform = 'translateY(0)';
                            }}
                          >
                            <Icon className="h-6 w-6" />
                          </a>
                        );
                      })}
                    </div>

                    {/* QR po prawej */}
                    <div className="col-span-2 justify-self-end text-center">
                      <div
                        className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto"
                        style={{ border: `3px solid ${P("black")}`, background: isDark ? P("charcoal") : P("white") }}
                      >
                        <img src={QR_DATA_URI} alt="QR" className="w-[85%] h-[85%] object-contain" />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

      </div>
    </section>
  );

  const ExperienceSection = () => {
    const card: React.CSSProperties = {
      border: `3px solid ${P("black")}`,
      background: isDark ? P("charcoal") : P("white"),
      color: isDark ? P("white") : P("charcoal"),
    };

    const jobs = [
      {
        role: "Digital Marketing Specialist",
        company: "Dogtronic",
        period: "2021 – 2025",
        desc: "Prowadzenie kampanii digital, SEO oraz zarządzanie zespołem marketingowym",
        url: "https://example.com/case-study/dogtronic"
      },
      {
        role: "Specjalista ds. marketingu",
        company: "Instytut Rozwoju Szkolnictwa Wyższego",
        period: "2023 – 2024",
        desc: "Koordynacja działań promocyjnych i rozwój komunikacji wizerunkowej",
        url: "https://example.com/case-study/irsw"
      },
      {
        role: "SEO Specialist",
        company: "Kryptobot",
        period: "2021 – 2022",
        desc: "Audyt i optymalizacja serwisów pod SEO, link building i analityka",
        url: "https://example.com/case-study/kryptobot"
      },
      {
        role: "Stażysta w dziale marketingu",
        company: "Akanza",
        period: "2021",
        desc: "Wsparcie zespołu w tworzeniu treści i kampanii reklamowych",
        url: "https://example.com/case-study/akanza"
      },
      {
        role: "Grafik",
        company: "EmArt Studio",
        period: "2021",
        desc: "Projektowanie materiałów graficznych online i offline dla klientów",
        url: "https://example.com/case-study/emart"
      },
    ];

    const certs = [
      { year: "2023", title: "Google Ads Certified", org: "Google", url: "https://example.com/cert/google-ads", image: "https://placehold.co/800x500?text=Google+Ads" },
      { year: "2023", title: "Facebook Blueprint Certified", org: "Meta", url: "https://example.com/cert/meta-blueprint", image: "https://placehold.co/800x500?text=Meta+Blueprint" },
      { year: "2023", title: "Google Analytics 4 Certified", org: "Google", url: "https://example.com/cert/ga4", image: "https://placehold.co/800x500?text=GA4" },
      { year: "2022", title: "HubSpot Inbound Marketing", org: "HubSpot", url: "https://example.com/cert/hubspot-inbound", image: "https://placehold.co/800x500?text=HubSpot+Inbound" },
    ];

    // NEW: lokalny stan popupu dla certyfikatów
    const [selectedCert, setSelectedCert] = useState<typeof certs[number] | null>(null);

    return (
      <section
        className="py-36"
        id="experience"
        style={{ background: P("ecru"), borderTop: `3px solid ${P("black")}` }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading>Doświadczenie</SectionHeading>

          {/* 2 kolumny: PRACA (szerzej) | EDU + CERTYFIKATY */}
          <div className="grid gap-8" style={{ gridTemplateColumns: "2fr 1fr" }}>
            {/* LEWA: PRACA */}
            <div className="flex flex-col gap-8">
              {jobs.map((job) => (
                <a
                  key={job.role}
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group focus-visible:outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02]"
                  style={{ ...card, padding: 28, textDecoration: 'none', position: 'relative' }}
                >
                  <div className="flex items-center gap-2 text-sm mb-2" style={{ opacity: 0.9 }}>
                    <Briefcase className="h-4 w-4" /> {job.period}
                  </div>
                  <h4 className="font-extrabold">{job.role}</h4>
                  <div className="font-bold mb-2">{job.company}</div>
                  <div className="text-sm" style={{ opacity: 0.85 }}>{job.desc}</div>
                </a>
              ))}
            </div>

            {/* PRAWA: EDU na górze + CERTYFIKATY niżej */}
            <div className="flex flex-col gap-8">
              {/* EDU */}
              <a
                href="https://pollub.pl"
                target="_blank"
                rel="noreferrer"
                style={{
                  ...card,
                  padding: 32,
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: isDark ? P("charcoal") : P("white"),
                  boxShadow: `inset 0 0 0 6px ${P("ecru")}`,
                  textDecoration: 'none',
                  color: isDark ? P("white") : P("charcoal"),
                  cursor: 'pointer',
                }}
                className="transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none"
                aria-label="Marketing i Komunikacja Rynkowa – Politechnika Lubelska (otwórz w nowej karcie)"
              >
                <div className="flex items-center gap-2 text-sm mb-2" style={{ opacity: 0.9 }}>
                  <GraduationCap className="h-4 w-4" /> Edukacja
                </div>
                <h4 className="font-extrabold mb-1">Marketing i Komunikacja Rynkowa</h4>
                <div className="font-bold">Politechnika Lubelska</div>
                <span className="mt-4 text-xs font-bold opacity-60">Otwórz stronę uczelni</span>
              </a>

              {/* CERTYFIKATY */}
              {certs.map((c) => (
                <a
                  key={c.title}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => { e.preventDefault(); setSelectedCert(c); }}
                  aria-haspopup="dialog"
                  aria-controls="cert-modal"
                  className="group focus-visible:outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02]"
                  style={{
                    ...card,
                    padding: 28,
                    background: isDark ? "#1c1624" : "#fdfdf6",
                    border: `2px dashed ${P("charcoal")}`,
                    position: "relative",
                    textDecoration: 'none'
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      right: 16,
                      background: P("alloy"),
                      color: P("white"),
                      border: `2px solid ${P("black")}`,
                      padding: "2px 10px",
                      fontWeight: 800,
                    }}
                  >
                    {c.year}
                  </div>

                  <div className="flex items-center gap-2 text-sm mb-2" style={{ opacity: 0.9 }}>
                    <Award className="h-4 w-4" /> Certyfikat
                  </div>
                  <h4 className="font-extrabold">{c.title}</h4>
                  <div className="italic">{c.org}</div>
                  <span className="block mt-3 text-xs font-bold opacity-60">Kliknij, aby zobaczyć szczegóły</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL POPUP CERT */}
        {selectedCert && (
          <div
            id="cert-modal"
            className="fixed inset-0 z-[300] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Certyfikat ${selectedCert.title}`}
            style={{ background: 'rgba(0,0,0,0.6)' }}
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="w-full max-w-md relative"
              style={{ background: isDark ? P("charcoal") : P("white"), border: `3px solid ${P("black")}`, color: isDark ? P("white") : P("black") }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Zamknij"
                className="absolute top-2 right-2 px-2 py-1 font-extrabold"
                style={{ border: `2px solid ${P("black")}` }}
              >
                ×
              </button>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm" style={{ opacity: 0.9 }}>
                  <Award className="h-4 w-4" /> Certyfikat
                </div>
                <h3 className="text-xl font-extrabold leading-tight">{selectedCert.title}</h3>
                {/* NOWE: obrazek certyfikatu (placeholder) */}
                <figure className="overflow-hidden" style={{ border: `2px solid ${P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}>
                  <img
                    src={selectedCert.image || 'https://placehold.co/800x500?text=Certyfikat'}
                    alt={`Podgląd certyfikatu ${selectedCert.title}`}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: 380 }}
                    loading="lazy"
                  />
                </figure>
                <div className="font-bold">Organizacja: {selectedCert.org}</div>
                <div className="text-sm">Rok: {selectedCert.year}</div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 font-extrabold transition-colors"
                    style={{ border: `3px solid ${P("black")}`, background: P("ecru"), color: P("black") }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = P("amaranth"); (e.currentTarget as HTMLAnchorElement).style.color = P("white"); }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = P("ecru"); (e.currentTarget as HTMLAnchorElement).style.color = P("black"); }}
                  >
                    Dowiedz się więcej
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 font-extrabold transition-colors"
                    style={{ border: `3px solid ${P("black")}`, background: P("butter"), color: P("black") }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = P("amaranth"); (e.currentTarget as HTMLButtonElement).style.color = P("white"); }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = P("butter"); (e.currentTarget as HTMLButtonElement).style.color = P("black"); }}
                  >
                    Zamknij
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

  const SkillsAndTechSection = () => {
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
        className="py-36"
        id="skills"
        style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `3px solid ${P("black")}` }}
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
                  border: `3px solid ${P("black")}`,
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  lineHeight: 1.15,
                  boxShadow: `4px 4px 0 0 ${P("black")}`,
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
                    borderRight: `3px solid ${P("black")}`,
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
                    border: `2px solid ${P("black")}`,
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

  const TechStackSection = () => {
    const techStack = [
      { category: "AI Tools", items: [{ name: "ChatGPT", url: "https://chat.openai.com" }, { name: "Claude", url: "https://claude.ai" }, { name: "Midjourney", url: "https://www.midjourney.com" }, { name: "Runway", url: "https://runwayml.com" }, { name: "Copy.ai", url: "https://www.copy.ai" }] },
      { category: "Grafika", items: [{ name: "Photoshop", url: "https://adobe.com" }, { name: "Illustrator", url: "https://adobe.com" }, { name: "Figma", url: "https://figma.com" }, { name: "Canva", url: "https://canva.com" }, { name: "After Effects", url: "https://adobe.com" }] },
      { category: "Animacja", items: [{ name: "After Effects", url: "https://adobe.com" }, { name: "Lottie", url: "https://lottiefiles.com" }, { name: "Rive", url: "https://rive.app" }, { name: "Framer Motion", url: "https://www.framer.com/motion/" }, { name: "GSAP", url: "https://greensock.com/gsap/" }] },
      { category: "Strony internetowe", items: [{ name: "React", url: "https://react.dev" }, { name: "WordPress", url: "https://wordpress.org" }, { name: "Webflow", url: "https://webflow.com" }, { name: "Framer", url: "https://framer.com" }, { name: "Shopify", url: "https://shopify.com" }] },
      { category: "Analityka", items: [{ name: "Google Analytics", url: "https://marketingplatform.google.com/about/analytics/" }, { name: "Hotjar", url: "https://hotjar.com" }, { name: "Mixpanel", url: "https://mixpanel.com" }, { name: "Amplitude", url: "https://amplitude.com" }, { name: "Data Studio", url: "https://lookerstudio.google.com/" }] },
      { category: "SEO", items: [{ name: "Ahrefs", url: "https://ahrefs.com" }, { name: "SEMRush", url: "https://semrush.com" }, { name: "Google Search Console", url: "https://search.google.com/search-console" }, { name: "Screaming Frog", url: "https://www.screamingfrog.co.uk/seo-spider/" }, { name: "Surfer SEO", url: "https://surferseo.com" }] },
      { category: "Zarządzanie projektami", items: [{ name: "Notion", url: "https://notion.so" }, { name: "Asana", url: "https://asana.com" }, { name: "Monday.com", url: "https://monday.com" }, { name: "Trello", url: "https://trello.com" }, { name: "Slack", url: "https://slack.com" }] },
      { category: "Email Marketing", items: [{ name: "Mailchimp", url: "https://mailchimp.com" }, { name: "ConvertKit", url: "https://convertkit.com" }, { name: "ActiveCampaign", url: "https://activecampaign.com" }, { name: "Klaviyo", url: "https://klaviyo.com" }, { name: "Sendinblue", url: "https://www.brevo.com" }] },
      { category: "Systemy reklam PPC", items: [{ name: "Google Ads", url: "https://ads.google.com" }, { name: "Facebook Ads", url: "https://facebook.com/business/ads" }, { name: "LinkedIn Ads", url: "https://business.linkedin.com/marketing-solutions/ads" }, { name: "TikTok Ads", url: "https://ads.tiktok.com" }, { name: "Pinterest Ads", url: "https://ads.pinterest.com" }] },
      { category: "Programowanie", items: [{ name: "React", url: "https://react.dev" }, { name: "TypeScript", url: "https://www.typescriptlang.org" }, { name: "Node.js", url: "https://nodejs.org" }, { name: "Python", url: "https://www.python.org" }, { name: "No-code tools", url: "https://www.nocodelist.co/" }] },
    ];

    return (
      <section className="py-36" id="techstack"
               style={{ background: P("ecru"), borderTop: `3px solid ${P("black")}` }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <header className="mb-24 mt-8">
            <h2 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
                style={{ color: isDark ? P("white") : P("black") }}>
              Tech Stack
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((block) => (
              <div key={block.category} className="p-6"
                   style={{ background: isDark ? P("charcoal") : P("white"), border: `3px solid ${P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
                <h3 className="text-xl font-extrabold mb-4">{block.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {block.items.map((item) => (
                    <a key={item.name}
                       href={item.url}
                       target="_blank"
                       rel="noreferrer"
                       className="px-3 py-1 text-sm font-bold transition-colors"
                       style={{ border: `2px solid ${P("black")}`, background: P("ecru"), color: isDark ? P("white") : P("black") }}
                       onMouseOver={(e) => {
                         (e.currentTarget as HTMLAnchorElement).style.background = P("amaranth");
                         (e.currentTarget as HTMLAnchorElement).style.color = P("white");
                       }}
                       onMouseOut={(e) => {
                         (e.currentTarget as HTMLAnchorElement).style.background = P("ecru");
                         (e.currentTarget as HTMLAnchorElement).style.color = isDark ? P("white") : P("black");
                       }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ArticlesSection = () => (
    <section className="py-36" id="articles"
             style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `3px solid ${P("black")}` }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading>Artykuły</SectionHeading>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group"
              style={{ border: `3px solid ${P("black")}`, background: isDark ? P("charcoal") : P("white"), color: isDark ? P("white") : P("charcoal") }}
            >
              <div className="aspect-[4/3] overflow-hidden relative"
                   style={{ borderBottom: `3px solid ${P("black")}` }}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-extrabold px-2 py-1"
                        style={{ background: P("alloy"), color: P("white"), border: `2px solid ${P("black")}` }}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1"><CalendarIcon className="h-4 w-4" /> {article.publishDate}</div>
                  <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {article.readTime}</div>
                </div>
                <h3 className="text-xl font-extrabold">{article.title}</h3>
                <p className="text-sm">{article.excerpt}</p>
                <Link
                  to={`/articles/${article.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 font-extrabold px-4 py-3 transition-colors"
                  style={{
                    border: `3px solid ${isDark ? P("white") : P("black")}`,
                    background: isDark ? P("charcoal") : P("white"),
                    color: isDark ? P("white") : P("black")
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = P("amaranth");
                    (e.currentTarget as HTMLAnchorElement).style.color = P("white");
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = isDark ? P("charcoal") : P("white");
                    (e.currentTarget as HTMLAnchorElement).style.color = isDark ? P("white") : P("black");
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Czytaj więcej
                </Link>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );

  const CTASection = () => {
    // Kafelki jak w Umiejętnościach: solid tło + boczny pasek
    // Usunięto zagnieżdżone <a> w body (powodowało <a> w <a>) – teraz tylko tekst/span
    const tiles = [
      {
        title: "Email",
        text: "Odpowiadam zwykle w ciągu 24h",
        href: "mailto:agalecki.work@gmail.com",
        display: "agalecki.work@gmail.com",
        Icon: Mail,
      },
      {
        title: "LinkedIn",
        text: "Połączmy się i porozmawiajmy",
        href: "https://linkedin.com/in/adamgalecki",
        display: "linkedin.com/in/adamgalecki",
        Icon: MessageCircle, // unchanged original Icon reference
        external: true,
      },
      {
        title: "Calendly",
        text: "Wybierz dogodny termin",
        href: "#",
        display: "Zarezerwuj spotkanie",
        Icon: CalendarIcon,
      },
    ];

    return (
      <section className="py-36" id="contact"
               style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `3px solid ${P("black")}` }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading>Kontakt</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {tiles.map((t, i) => {
              const baseBg = isDark ? P("charcoal") : P("white");
              return (
                <a
                  key={i}
                  href={t.href}
                  {...(t.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="relative p-8 block focus-visible:outline-none transition-transform duration-200 hover:scale-[1.02]"
                  style={{
                    border: `3px solid ${P("black")}`,
                    background: baseBg,
                    color: isDark ? P("white") : P("charcoal"),
                    textDecoration: 'none',
                    boxShadow: `4px 4px 0 0 ${P("black")}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = P("butter");
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = baseBg;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Boczny pasek */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 10,
                      height: '100%',
                      background: P("butter"),
                      borderRight: `3px solid ${P("black")}`,
                    }}
                  />
                  {/* Numer */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: -12,
                      right: 10,
                      background: P("alloy"),
                      color: P("white"),
                      border: `2px solid ${P("black")}`,
                      fontSize: 10,
                      padding: '2px 6px',
                      letterSpacing: 0.5,
                      fontWeight: 800,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center mb-4"
                         style={{ border: `2px solid ${P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}>
                      <t.Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-extrabold mb-2">{t.title}</h3>
                    <p className="text-sm mb-4" style={{ opacity: 0.85 }}>{t.text}</p>
                    <span className="font-extrabold underline break-all">{t.display}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  /* ———— STOPKA ———— */
  const FooterSection = () => {
    const textColor = isDark ? '#b5b5b5' : '#686a6c';
    const borderColor = isDark ? P('white') : P('black');
    const iconHover = isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white';
    const btnHover = iconHover; // reuse
    return (
      <footer
        style={{
          background: isDark ? P('charcoal') : P('white'),
          borderTop: `3px solid ${P('black')}`,
          color: textColor,
        }}
      >
        <div className="container mx-auto px-2 py-10">
          <div className="py-6 grid gap-6 md:grid-cols-4 items-center justify-items-center">
            {/* Kolumna 1: nazwa + ikony */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-extrabold mb-6" style={{ color: textColor }}>Adam Gałęcki – Firma Gałęcka</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { href: 'mailto:agalecki.work@gmail.com', label: 'Mail', Icon: Mail },
                  { href: 'https://linkedin.com/in/adamgalecki', label: 'LinkedIn', Icon: Linkedin, ext: true },
                  { href: 'https://github.com', label: 'GitHub', Icon: Github, ext: true },
                  { href: '#', label: 'Messenger', Icon: MessageCircle },
                  { href: '#', label: 'Instagram', Icon: Heart },
                  { href: 'https://tiktok.com/@twojprofil', label: 'TikTok', ext: true, Icon: (props: any) => (
                    <svg viewBox="0 0 64 64" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
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
                    className={`w-10 h-10 flex items-center justify-center transition ${iconHover}`}
                    style={{ border: `1px solid ${borderColor}`, color: textColor }}
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            {/* Kolumna 2: NIP */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed">
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
            {/* Kolumna 3: REGON */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed">
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
            {/* Kolumna 4: Lokalizacja */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed">
              <div className="flex items-center gap-2" style={{ color: textColor }}>
                <MapPin className="h-4 w-4" />
                <span>Lublin, Polska</span>
              </div>
            </div>
          </div>
          <div className="pt-0 pb-0 text-left text-[11px] font-semibold tracking-wide" style={{ opacity: 0.45, color: textColor }}>
            © Firma Gałęcka 2025
          </div>
        </div>
      </footer>
    );
  };



  /* ———— RENDER ———— */
  return (
    <div className="relative" style={{ background: isDark ? P("charcoal") : P("white"), color: isDark ? P("white") : P("charcoal") }}>
      <SeasonalBackground />
      {/* Overlay „Tworzę dokument…” */}
      {generating && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center"
             style={{ background: `rgba(255,255,255,0.85)` }}>
          <div className="px-8 py-6 font-extrabold text-2xl"
               style={{ border: `3px solid ${P("black")}`, background: P("ecru"), color: isDark ? P("white") : P("black") }}>
            Tworzę dokument…
          </div>
        </div>
      )}

      {/* Ukryty CV Layout (dopasowany do A4) */}
      {showCV && (
        <div id="cv-root" style={{ position: 'fixed', top: -99999, left: -99999, width: 0, height: 0, overflow: 'hidden' }}>
          {/* Strona 1 */}
          <div className="cv-page"
               style={{
                 width: 794, height: 1123,
                 boxSizing: 'border-box',
                 padding: 36,
                 background: "#FFFFFF",
                 color: "#000000",
                 border: `3px solid #000`,
                 display: 'flex',
                 flexDirection: 'column',
                 gap: 24
               }}>
            {/* Nagłówek + opis */}
            <div>
              <div style={{ fontWeight: 800, fontSize: 42, lineHeight: 1 }}>
                Marketing<br />Manager
              </div>
              <div style={{ marginTop: 12, fontSize: 14, color: "#333", lineHeight: 1.4 }}>
                Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na cele biznesowe.
              </div>
            </div>

            {/* O mnie + Kontakt */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>O mnie</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.55 }}>
                  Przez ostatnie 5 lat rozwijałem się w marketingu – od grafika, przez SEO, po managera zespołu. Realizowałem
                  długoterminowe strategie SEO, zarządzałem zespołem i wspierałem projekty IT dla największych marek w Polsce.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Kontakt</div>
                <div style={{ fontSize: 12, color: "#333", lineHeight: 1.6 }}>
                  e-mail: agalecki.work@gmail.com<br />
                  LinkedIn: linkedin.com/in/adamgalecki
                </div>
              </div>
            </div>

            {/* Klauzula RODO */}
            <div style={{ marginTop: 'auto', fontSize: 10, color: "#333", borderTop: `2px solid #000`, paddingTop: 8, lineHeight: 1.4 }}>
              Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz. U. z 2018 r., poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).
            </div>
          </div>

          {/* Strona 2 */}
          <div className="cv-page"
               style={{
                 width: 794, height: 1123,
                 boxSizing: 'border-box',
                 padding: 24,
                 background: "#FFFFFF",
                 color: "#000000",
                 border: `3px solid #000`,
                 display: 'flex',
                 flexDirection: 'column',
                 gap: 16
               }}>
            <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Portfolio (wybrane)</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {portfolioProjects.slice(0, 4).map((p, i) => (
                <div key={p.title + i} style={{ border: `2px solid #000`, padding: 8 }}>
                  <div style={{ width: '100%', aspectRatio: '4 / 3', background: '#eee', borderBottom: `2px solid #000`, overflow: 'hidden' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontWeight: 800, marginTop: 6, fontSize: 12 }}>{p.title}</div>
                  <div style={{ fontSize: 10, color: "#333" }}>{p.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Strona 3 */}
          <div className="cv-page"
               style={{
                 width: 794, height: 1123,
                 boxSizing: 'border-box',
                 padding: 24,
                 background: "#FFFFFF",
                 color: "#000000",
                 border: `3px solid #000`,
                 display: 'flex',
                 flexDirection: 'column',
                 gap: 16
               }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Umiejętności / Tech Stack</div>
                <ul style={{ paddingLeft: 14, fontSize: 11, color: "#333", lineHeight: 1.5 }}>
                  {[
                    "Zarządzanie zespołem", "Analityka marketingu", "SEO",
                    "Media Społecznościowe", "Płatne Kampanie Reklamowe",
                    "Projektowanie Lejków", "No-Code", "Email Marketing",
                    "Automatyzacja", "Tworzenie stron", "Animacja 2D/3D",
                    "Grafika 2D/3D"
                  ].map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Doświadczenie</div>
                <ul style={{ paddingLeft: 14, fontSize: 11, color: "#333", lineHeight: 1.5 }}>
                  {[
                    "Dogtronic — Digital Marketing Specialist (2021–2025)",
                    "Instytut Rozwoju Szkolnictwa Wyższego — Specjalista ds. marketingu (2023–2024)",
                    "Kryptobot — SEO Specialist (2021–2022)",
                    "Akanza — Stażysta w dziale marketingu (2021)",
                    "EmArt Studio — Grafik (2021)",
                  ].map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsAndTechSection />
        <TechStackSection />
        <ArticlesSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Hero;
