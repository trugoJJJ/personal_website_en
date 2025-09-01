"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  DndContext, closestCenter, DragEndEvent, DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove, SortableContext, useSortable, rectSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { articles } from "@/data/articles";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

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
  externalLink?: string;
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
    metrics: '50 tys. wyświetleń',
    externalLink: 'https://www.behance.net/gallery/199466415/Animationforthe-software-dvelopment-company-portfolio'
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

/* ================== MINI UI DND ================== */
function SuccessAnimationPlaceholder({ onReset }: { onReset: () => void }) {
  const { isDark, P } = usePalette();
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center"
         style={{ background: `rgba(0,0,0,0.85)` }}>
      <div className="p-8 text-center"
           style={{ background: P("ecru"), color: P("black"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">Gratulacje!</h2>
        <p className="mb-8">Sekwencja została ułożona poprawnie.</p>
        <button
          onClick={onReset}
          className="px-6 py-3 font-extrabold"
          style={{ background: P("butter"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}
        >
          Ułóż od nowa
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ project, isHighlighted = false }: { project: Project, isHighlighted?: boolean }) {
  const { isDark, P } = usePalette();
  
  // Map project titles to their specific routes
  const getProjectLink = (title: string) => {
    if (title.includes('SEO') || title.includes('Kompleksowa obsługa SEO')) {
      return '/portfolio/seo';
    }
    if (title.includes('płatnych kampanii') || title.includes('Portfolio płatnych')) {
      return '/portfolio/ppc';
    }
    if (title.includes('System śledzenia') || title.includes('śledzenia danych')) {
      return '/portfolio/analytics';
    }
    // For other projects, use generic portfolio detail page
    return 'https://www.behance.net/gallery/199466415/Animationforthe-software-dvelopment-company-portfolio';
  };

  return (
    <article className="group flex flex-col h-full"
             style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, outline: isHighlighted ? `4px solid ${P("alloy")}` : "none" }}>
      <div className="overflow-hidden flex flex-col h-full">
        <figure className="aspect-video overflow-hidden"
                style={{ borderBottom: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
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
                    style={{ background: P("ecru"), color: isDark ? P("white") : P("black"), border: `2px solid ${isDark ? P("white") : P("black")}` }}>
                {project.metrics}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm" style={{ color: isDark ? P("white") : P("charcoal") }}>{project.description}</p>
          {project.tags?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((t) => (
                <span key={t} className="text-xs px-2 py-1"
                      style={{ border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("black") }}>
                  {t}
                </span>
              ))}
            </div>
          ) : null}
          {project.externalLink && (
            <div className="mt-5">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline"
                style={{ color: isDark ? P("butter") : P("amaranth") }}
              >
                Zobacz na Behance
              </a>
            </div>
          )}
          <div className="mt-auto pt-6">
            <Link
              href={getProjectLink(project.title)}
              className="block w-full font-extrabold transition-colors text-center"
              style={{
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                padding: "10px 0",
                background: isDark ? P("charcoal") : P("white"),
                color: isDark ? P("white") : P("black"),
                textDecoration: "none"
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
              Szczegóły
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function SortableProjectItem({ project, isHighlighted, isDraggable }: { project: Project, isHighlighted: boolean, isDraggable: boolean }) {
  const { isDark, P } = usePalette();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ 
      id: project.id, 
      disabled: !isDraggable,
      // Disable drag on certain elements
    });

  const baseStyle: React.CSSProperties = { transform: CSS.Transform.toString(transform), transition };

  // Filter out drag listeners from buttons and links
  const dragHandlers = isDraggable ? {
    ...attributes,
    ...listeners,
    onPointerDown: (e: any) => {
      // Don't start drag if clicking on a link or button
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      if (listeners?.onPointerDown) {
        listeners.onPointerDown(e);
      }
    }
  } : {};

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={{ ...baseStyle, border: `3px dashed ${isDark ? P("white") : P("black")}`, background: P("ecru"), height: '100%' }}
      />
    );
  }
  return (
    <div ref={setNodeRef} style={baseStyle} {...dragHandlers}>
      <ProjectCard project={project} isHighlighted={isHighlighted} />
    </div>
  );
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

/* ================== GŁÓWNY KOMPONENT SEKCJI PORTFOLIO ================== */
const PortfolioSectionContent = () => {
  const { isDark, P } = usePalette();
  const [items, setItems] = useState<Project[]>(() => shuffleArray(createSixProjects(portfolioProjects)));
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<Project | null>(null);
  const [isSolved, setIsSolved] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  const setHoverCategorySafely = (val: string | null) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredCategory(val);
  };

  const scheduleHoverClear = (delay = 150) => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => {
      setHoveredCategory(null);
      hoverTimeoutRef.current = null;
    }, delay);
  };

  // init portfolio
  useEffect(() => {
    const generatedItems = createSixProjects(portfolioProjects);
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

  const handleReset = () => { setIsSolved(false); setItems(shuffleArray(createSixProjects(portfolioProjects))); };

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

  return (
    <section className="pt-24 md:pt-36" id="portfolio"
             style={{ background: P("ecru"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
      {isSolved && <SuccessAnimationPlaceholder onReset={handleReset} />}
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading>Portfolio</SectionHeading>

        {/* Kategorie (wyrównane do prawej) — DARK MODE FIX */}
        <div className="hidden sm:flex justify-end mb-10 gap-3">
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
                  border: `${isDark ? '1px' : '3px'} solid ${borderColor}`,
                  background: isActive ? activeBg : baseBg,
                  color: isActive ? activeColor : baseColor,
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = P("amaranth");
                  (e.currentTarget as HTMLButtonElement).style.color = P("white");
                }}
                onMouseOut={(e) => {
                  const isActive = activeCategory === c;
                  const activeBg = P("amaranth");
                  const activeColor = P("white");
                  const baseBg = isDark ? P("charcoal") : P("white");
                  const baseColor = isDark ? P("white") : P("black");
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
                    isDraggable={false} // TODO: Zmień na true żeby włączyć drag & drop
                  />
                );
              })}
            </div>
          </SortableContext>
          <DragOverlay>
            {activeItem ? (
              <div style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("white") }}>
                <ProjectCard project={activeItem} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </section>
  );
};

export const PortfolioSection = () => {
  return (
    <ClientOnlyWrapper fallback={
      <section className="pt-24 md:pt-36 bg-[#FAF6EE] border-t-3 border-black" id="portfolio">
        <div className="container mx-auto px-6 max-w-6xl">
          <header className="mb-12 md:mb-24 mt-4 md:mt-8">
            <h2 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
              Portfolio
            </h2>
          </header>
          <div className="hidden sm:flex justify-end mb-10 gap-3">
            <button className="px-5 py-2 font-extrabold transition-colors border-3 border-black bg-white text-black">
              Projekty kreatywne
            </button>
            <button className="px-5 py-2 font-extrabold transition-colors border-3 border-black bg-white text-black">
              Projekty sprzedażowe
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border-3 border-black bg-white p-6">
                <div className="w-full h-48 bg-gray-200 mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Project {i}</h3>
                <p className="text-sm text-gray-600">Project description</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    }>
      <PortfolioSectionContent />
    </ClientOnlyWrapper>
  );
};

export default PortfolioSection;
