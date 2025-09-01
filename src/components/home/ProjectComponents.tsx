"use client";

import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { usePalette } from "./hooks";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  isHighlighted?: boolean;
}

export function ProjectCard({ project, isHighlighted = false }: ProjectCardProps) {
  const { isDark, P } = usePalette();
  
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
          <div className="mt-auto pt-6">
            <button
              className="w-full font-extrabold transition-colors"
              style={{
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
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

interface SortableProjectItemProps {
  project: Project;
  isHighlighted: boolean;
  isDraggable: boolean;
}

export function SortableProjectItem({ project, isHighlighted, isDraggable }: SortableProjectItemProps) {
  const { isDark, P } = usePalette();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: project.id, disabled: !isDraggable });

  const baseStyle: React.CSSProperties = { transform: CSS.Transform.toString(transform), transition };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={{ ...baseStyle, border: `3px dashed ${isDark ? P("white") : P("black")}`, background: P("ecru"), height: '100%' }}
      />
    );
  }
  
  return (
    <div ref={setNodeRef} style={baseStyle} {...attributes} {...listeners}>
      <ProjectCard project={project} isHighlighted={isHighlighted} />
    </div>
  );
}

interface SuccessAnimationPlaceholderProps {
  onReset: () => void;
}

export function SuccessAnimationPlaceholder({ onReset }: SuccessAnimationPlaceholderProps) {
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