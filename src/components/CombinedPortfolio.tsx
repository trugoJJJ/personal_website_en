import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DndContext, closestCenter, DragEndEvent, DragStartEvent, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, rectSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// --- Funkcja pomocnicza ---
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// --- Typy i dane ---
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
    { title: 'Projekt Animacji Korporacyjnej', description: 'Stworzenie animacji promującej nową strategię firmy.', image: 'https://placehold.co/600x400/1e293b/ffffff?text=Animacja', categories: ['Projekty kreatywne'], tags: ['After Effects', 'Motion Graphics', 'Branding'], metrics: '+15% zaangażowania' },
    { title: 'Identyfikacja Wizualna dla Startupu', description: 'Kompleksowe opracowanie identyfikacji wizualnej.', image: 'https://placehold.co/600x400/4a044e/ffffff?text=Design', categories: ['Projekty kreatywne'], tags: ['Logo', 'UI/UX', 'Photoshop'], metrics: 'Nagroda Awwwards' },
    { title: 'Landing Page Optimization', description: 'Redesign i optymalizacja strony, która podwoiła konwersję.', image: 'https://placehold.co/600x400/042f2e/ffffff?text=Optymalizacja', categories: ['Projekty sprzedażowe'], tags: ['A/B Testing', 'UX/UI', 'Analytics'], metrics: '+127% konwersja' },
    { title: 'Kampania w Mediach Społecznościowych', description: 'Wdrożenie kampanii reklamowej na Facebooku i Instagramie.', image: 'https://placehold.co/600x400/581c87/ffffff?text=Kampania', categories: ['Projekty sprzedażowe'], tags: ['Social Media', 'Marketing', 'Grafika'], metrics: 'CTR 5.2%' },
];

const createSixProjects = (projects: Omit<Project, 'id'>[]): Project[] => {
  const sixProjects: Project[] = [];
  const projectPool = [...projects, ...projects.slice(0, 2)]; // Zapewnia po 2x Animacja i Design

  for (let i = 0; i < projectPool.length; i++) {
    const projectTemplate = projectPool[i];
    sixProjects.push({
      ...projectTemplate,
      id: `${projectTemplate.title}-${i}`,
    });
  }
  return sixProjects;
};


// --- Komponenty pomocnicze ---
function SuccessAnimationPlaceholder({ onReset }: { onReset: () => void }) {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in-0 duration-500">
      <div className="bg-card border p-8 rounded-xl text-center shadow-2xl">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Gratulacje!</h2>
        <p className="text-muted-foreground mb-6">Sekwencja została ułożona poprawnie.</p>
        <Button onClick={onReset} size="lg">Ułóż od nowa</Button>
      </div>
    </div>
  );
}

function ProjectCard({ project, isOverlay = false, isHighlighted = false }: { project: Project, isOverlay?: boolean, isHighlighted?: boolean }) {
  const overlayStyles = isOverlay ? 'shadow-2xl' : '';
  const highlightedStyles = isHighlighted ? 'scale-105 z-10' : '';

  return (
    <article className={`group flex flex-col h-full bg-card rounded-xl transition-transform duration-300 cursor-grab ${overlayStyles} ${highlightedStyles}`}>
        {/* ... zawartość karty bez zmian ... */}
         <div className="overflow-hidden rounded-xl flex flex-col h-full">
        <figure className="aspect-video overflow-hidden">
          <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"/>
        </figure>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
            {project.metrics && (<span className="text-xs font-medium bg-secondary text-secondary-foreground whitespace-nowrap px-2 py-1 rounded-md">{project.metrics}</span>)}
          </div>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
          {project.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((t) => (<span key={t} className="text-xs rounded-full bg-gray-800 text-white px-3 py-1 font-medium">{t}</span>))}
            </div>
          ) : null}
          <div className="mt-auto pt-6">
            <Button asChild variant="outline" className="w-full">
              <Link to="/portfolio" className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Szczegóły
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function SortableProjectItem({ project, isHighlighted }: { project: Project, isHighlighted: boolean }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: project.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  if (isDragging) return <div ref={setNodeRef} style={style} className="rounded-xl bg-muted/50 border-2 border-dashed border-muted-foreground/30 h-full" />;
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ProjectCard project={project} isHighlighted={isHighlighted} />
    </div>
  );
}

// --- GŁÓWNY KOMPONENT ---
const CombinedPortfolio = () => {
  const [items, setItems] = useState<Project[]>([]);
  const [initialItems, setInitialItems] = useState<Project[]>([]);
  const [isSolved, setIsSolved] = useState(false);
  const [activeItem, setActiveItem] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const generatedItems = createSixProjects(portfolioProjects);
    setInitialItems(generatedItems);
    setItems(shuffleArray([...generatedItems]));
  }, []);

  const checkSolution = (currentOrder: Project[]) => {
    const sequenceTitles = currentOrder.map(item => item.title);

    const anim = 'Projekt Animacji Korporacyjnej';
    const design = 'Identyfikacja Wizualna dla Startupu';
    const opt = 'Landing Page Optimization';
    const kamp = 'Kampania w Mediach Społecznościowych';

    const winningSequence1 = [anim, anim, kamp, design, design, opt];
    const winningSequence2 = [design, design, opt, anim, anim, kamp];

    const isMatch = (arr1: string[], arr2: string[]) => JSON.stringify(arr1) === JSON.stringify(arr2);

    if (isMatch(sequenceTitles, winningSequence1) || isMatch(sequenceTitles, winningSequence2)) {
      setIsSolved(true);
    }
  };
  
  const handleReset = () => {
    setIsSolved(false);
    setItems(shuffleArray(initialItems));
  };

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
    <section className="py-0 bg-background">
       {isSolved && <SuccessAnimationPlaceholder onReset={handleReset} />}
      <div className="container mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Interaktywne Portfolio
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Przeciągnij projekty, aby ułożyć jedną z dwóch zwycięskich sekwencji.
          </p>
        </header>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((c) => (
            <Button
              key={c}
              size="lg"
              variant={activeCategory === c ? "default" : "outline"}
              className="w-64"
              onClick={() => setActiveCategory(activeCategory === c ? null : c)}
              onMouseEnter={() => setHoveredCategory(c)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {c as string}
            </Button>
          ))}
        </div>

        <DndContext
          collisionDetection={closestCenter}
          onDragStart={(e) => setActiveItem(items.find(i => i.id === e.active.id) || null)}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
              {items.map((item) => {
                 const isHighlighted = (activeCategory && item.categories?.includes(activeCategory)) || (hoveredCategory && item.categories?.includes(hoveredCategory));
                 return <SortableProjectItem key={item.id} project={item} isHighlighted={isHighlighted} />;
              })}
            </div>
          </SortableContext>
          <DragOverlay>
            {activeItem ? <ProjectCard project={activeItem} isOverlay /> : null}
          </DragOverlay>
        </DndContext>
      </div>
    </section>
  );
};

export default CombinedPortfolio;