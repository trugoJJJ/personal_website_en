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
  
  const [hoveredButton, setHoveredButton] = useState<string | number | null>(null);

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
              color: currentBrushType===b.id?P("white"): (isDark?P("white"):P("charcoal")),
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
              color: currentSize===s.value?P("white"): (isDark?P("white"):P("charcoal")),
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
          return (
            <button
              key={key+i}
              onClick={()=>onColorChange(key)}
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
              aria-label={`Kolor ${key}${isActive?' (aktywny)':''}`}
            >
              {/* Wnętrze – właściwy kolor z odwróconym strokiem */}
              <span className="absolute inset-[4px]" style={{ background: P(key), boxShadow: `inset 0 0 0 ${isDark ? '1px' : '2px'} ${isDark ? P("white") : P("black")}` }} />
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