"use client";

import { useState } from "react";
import { usePalette, COLORS } from "./hooks";
import { BrushType } from "./types";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";

interface BrushControlsProps {
  onSizeChange: (size: number) => void;
  onColorChange: (colorKey: keyof typeof COLORS) => void;
  onBrushTypeChange: (type: BrushType) => void;
  currentColorKey: keyof typeof COLORS;
  currentSize: number;
  currentBrushType: BrushType;
  isVisible: boolean;
}

const BrushControlsContent = ({
  onSizeChange, onColorChange, onBrushTypeChange,
  currentColorKey, currentSize, currentBrushType, isVisible,
}: BrushControlsProps) => {
  const { isDark, P } = usePalette();
  const SIZES = [ { label: 'Mały', value: 50 }, { label: 'Duży', value: 500 } ];
  const BRUSH_TYPES: { id: BrushType; name: string }[] = [
    { id: "brush", name: "Pędzel" },
    { id: "spray", name: "Spray" },
    { id: "cursor", name: "Kursor" },
  ];
  const PALETTE: (keyof typeof COLORS)[] = ["black","white","amaranth","butter","alloy","charcoal"];
  
  // Persistent (do refresh) zaznaczenia – multi select; nie resetują się przy zmianie pędzla/koloru
  const [markedColors, setMarkedColors] = useState<Set<keyof typeof COLORS>>(()=> new Set([currentColorKey]));
  const [hoveredButton, setHoveredButton] = useState<string | number | null>(null);
  
  const handleLeftClick = (key: keyof typeof COLORS) => {
    onColorChange(key);
    setMarkedColors(prev => {
      if (prev.has(key)) return new Set(prev); // zachowaj
      const next = new Set(prev); next.add(key); return next;
    });
  };
  
  const handleRightClick = (e: React.MouseEvent, key: keyof typeof COLORS) => {
    e.preventDefault();
    // pozwalamy usunąć oznaczenie PPM – opcjonalne
    setMarkedColors(prev => { 
      const next = new Set(prev); 
      if (next.has(key)) next.delete(key); 
      else next.add(key); 
      return next; 
    });
  };

  return (
    <div className={`transition-all ${isVisible ? "opacity-100" : "opacity-0"} flex flex-wrap gap-3 items-center justify-center px-6`}>
      {/* Tryby pędzla */}
      <div className="flex items-center p-1 gap-1" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}>
        {BRUSH_TYPES.map((b,i)=>(
          <button 
            key={b.id} 
            onClick={()=>onBrushTypeChange(b.id)} 
            onMouseEnter={() => setHoveredButton(b.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-3 py-2 font-extrabold transition-transform duration-300 ease-out" 
            style={{
              background: currentBrushType===b.id?P("amaranth"): (isDark?P("charcoal"):P("ecru")),
              color: currentBrushType===b.id?P("white"): (isDark?P("white"):P("black")),
              borderRight: i===BRUSH_TYPES.length-1? 'none': `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
              transform: hoveredButton === b.id ? 'scale(1.05)' : 'scale(1)',
            }}
          >{b.name}</button>
        ))}
      </div>
      
      {/* Rozmiary */}
      <div className="flex items-center p-1 gap-1" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}>
        {SIZES.map((s,i)=>(
          <button 
            key={s.value} 
            onClick={()=>onSizeChange(s.value)} 
            onMouseEnter={() => setHoveredButton(s.value)}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-4 py-2 font-extrabold transition-transform duration-300 ease-out" 
            style={{
              background: currentSize===s.value?P("amaranth"): (isDark?P("charcoal"):P("ecru")),
              color: currentSize===s.value?P("white"): (isDark?P("white"):P("black")),
              borderRight: i===SIZES.length-1? 'none': `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
              transform: hoveredButton === s.value ? 'scale(1.05)' : 'scale(1)',
            }}
          >{s.label}</button>
        ))}
      </div>
      
      {/* Paleta z pustą ramką */}
      <div className="flex items-center p-1 gap-1" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}>
        {PALETTE.map((key,i)=>{
          const isActive = currentColorKey===key;
          const isMarked = markedColors.has(key);
          return (
            <button
              key={key+i}
              onClick={()=>handleLeftClick(key)}
              onContextMenu={(e)=>handleRightClick(e,key)}
              onMouseEnter={() => setHoveredButton(key)}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative w-10 h-10 transition-transform duration-300 ease-out"
              style={{
                // zewnętrzne tło = tło panelu – tworzy wizualną ramkę
                background: isDark ? P("charcoal") : P("ecru"),
                padding: 0,
                borderRight: i===PALETTE.length-1? 'none': `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                transform: hoveredButton === key ? 'scale(1.05)' : 'scale(1)',
              }}
              aria-label={`Kolor ${key}${isMarked? ' (oznaczony)':''}${isActive?' (aktywny)':''}`}
              title={isMarked? 'PPM usuń oznaczenie':'PPM dodaj oznaczenie'}
            >
              {/* Wnętrze – właściwy kolor z odstępem (pusta ramka) */}
              <span className="absolute inset-[4px]" style={{ background: P(key), boxShadow: `inset 0 0 0 ${isDark ? '1px' : '2px'} ${isDark ? P("white") : P("black")}` }} />
              {/* Oznaczenie (persist) */}
              {isMarked && (
                <span className="pointer-events-none absolute inset-0" style={{ boxShadow: `inset 0 0 0 2px ${P("white")}, inset 0 0 0 ${isDark ? '3px' : '4px'} ${isDark ? P("white") : P("black")}` }} />
              )}
              {/* Aktywny kolor – amarantowa ramka wewnętrzna */}
              {isActive && (
                <span className="pointer-events-none absolute inset-0" style={{ boxShadow: `inset 0 0 0 3px ${P("amaranth")}` }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const BrushControls = ({
  onSizeChange, onColorChange, onBrushTypeChange,
  currentColorKey, currentSize, currentBrushType, isVisible,
}: BrushControlsProps) => {
  return (
    <ClientOnlyWrapper>
      <BrushControlsContent
        onSizeChange={onSizeChange}
        onColorChange={onColorChange}
        onBrushTypeChange={onBrushTypeChange}
        currentColorKey={currentColorKey}
        currentSize={currentSize}
        currentBrushType={currentBrushType}
        isVisible={isVisible}
      />
    </ClientOnlyWrapper>
  );
};