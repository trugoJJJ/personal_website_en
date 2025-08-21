import { Link } from "react-router-dom";

import { useRef, MouseEvent, TouchEvent, useEffect, useState } from "react";



// --- Komponenty i funkcje pomocnicze ---

const useI18n = () => ({ t: (key: string) => ({ "portfolio.cta.more": "Projekty graficzne", "portfolio.cta.more.mobile": "Projekty<br/>graficzne" }[key] || key) });

const getOppositeColor = (hex: string): string => { if (hex.indexOf("#") === 0) { hex = hex.slice(1); } if (hex.startsWith('linear-gradient')) { return '#ffffff'; } const opposite = (0xffffff - parseInt(hex, 16)).toString(16); return "#" + ("000000" + opposite).slice(-6); };

type BrushType = "brush" | "spray" | "cursor";



const BrushControls = ({

onSizeChange, onColorChange, onBrushTypeChange, currentColor, currentSize, currentBrushType, isVisible,

}: {

onSizeChange: (size: number) => void;

onColorChange: (color: string) => void;

onBrushTypeChange: (type: BrushType) => void;

currentColor: string;

currentSize: number;

currentBrushType: BrushType;

isVisible: boolean;

}) => {

const SIZES = [50, 140];

const BRUSH_TYPES: { id: BrushType; name: string }[] = [{ id: "brush", name: "Pędzel" }, { id: "spray", name: "Spray" }, { id: "cursor", name: "Kursor" }];

const NOISE_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39tbXxwcHDq6urt7e3v7+/y8vLx8fH4+Pj5+fn39/f19fX29vb6+vr7+/v///8AAAAAARyW5gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sHDg4xPAkrjOQAAADLSURBVEiT7dVBEoQwDATADoB3LxzY/z9aFbkIadobk7AnfT8k7gB9G8iHDwAAAAAAAAAAAAAAAAAAAAD/z3/850/sIe3gVvLGTsJ2z2A3M3YyriTWZI3j2E4Y7iT+yP8j2HkV7U6k6q61N/Y/eK7/S+CILx/b+kLqgOOGv2nJ8lE9FVSZ51lPUshN57Nn7kRfmMT0kLjx7aK/B2/UKP5Kj21AIhQ0TCx42FnxMHHi4GPHwceLiY8DAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAADg3wAEAAl3D746+GfnAAAAAElFTkSuQmCC";

const PALETTE = [

{ display: '#ffffff', draw: '#ffffff' }, { display: '#000000', draw: '#000000' },

{ display: `url("${NOISE_URL}"), linear-gradient(135deg, #845ec2, #d65db1, #ff6f91)`, draw: '#845ec2' },

{ display: `url("${NOISE_URL}"), linear-gradient(135deg, #0081cf, #008e9b, #008e5b)`, draw: '#0081cf' },

{ display: `url("${NOISE_URL}"), linear-gradient(135deg, #ffb35a, #ff7b6c, #f85186)`, draw: '#ffb35a' },

{ display: `url("${NOISE_URL}"), linear-gradient(135deg, #00c9a7, #81e385, #d9f56b)`, draw: '#00c9a7' },

];

return (

<div className={`brush-controls-panel ${isVisible ? "visible" : ""}`}>

<div className="flex items-center bg-gray-800/50 rounded-full p-1">{BRUSH_TYPES.map((brush) => (<button key={brush.id} onClick={() => onBrushTypeChange(brush.id)} className={`px-4 py-2 text-sm rounded-full transition-colors ${currentBrushType === brush.id ? "bg-white text-black" : "text-white hover:bg-white/20"}`} aria-label={`Zmień pędzel na ${brush.name}`}>{brush.name}</button>))}</div>

<div className="flex items-center bg-gray-800/50 rounded-full p-1">{SIZES.map((size) => (<button key={size} onClick={() => onSizeChange(size)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${currentSize === size ? "bg-white" : "hover:bg-white/20"}`} aria-label={`Zmień rozmiar pędzla na ${size}`} disabled={currentBrushType === 'cursor'}><span className="bg-gray-400 rounded-full" style={{ width: `${size / 5}px`, height: `${size / 5}px` }}></span></button>))}</div>

<div className="flex items-center bg-gray-800/50 rounded-full p-1">{PALETTE.map((color) => (<button key={color.draw} onClick={() => onColorChange(color.draw)} className={`w-10 h-10 rounded-full transition-transform flex items-center justify-center ${currentColor.toLowerCase() === color.draw.toLowerCase() ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-white scale-110' : 'hover:scale-110'}`} style={{ background: color.display, backgroundSize: 'cover' }} aria-label={`Zmień kolor pędzla na ${color.draw}`} disabled={currentBrushType === 'cursor'} />))}</div>

</div>

);

};



export const BigTypeCTA = () => {

const { t } = useI18n();

const linkRef = useRef<HTMLAnchorElement>(null);

const canvasRef = useRef<HTMLCanvasElement>(null);

const [brushSize, setBrushSize] = useState(140);

const [drawingColor, setDrawingColor] = useState("#FFFFFF");

const [brushType, setBrushType] = useState<BrushType>("brush");

const [hasUnlockedControls, setHasUnlockedControls] = useState(false);

const [isButtonVisible, setIsButtonVisible] = useState(false);

const [isPanelVisible, setIsPanelVisible] = useState(false);

const isDraggingRef = useRef(false);

const hasDrawnRef = useRef(false); // Nowa flaga dla sprawdzenia czy użytkownik rysował

const animationFrameId = useRef<number>();

const mousePosition = useRef<{ x: number; y: number } | null>(null);

const lastMousePosition = useRef<{ x: number; y: number } | null>(null);

const frameCounter = useRef(0);

const nextDrawingColor = useRef<string | null>(null);

const handleColorChange = (newColor: string) => { if (nextDrawingColor.current) { nextDrawingColor.current = null; } setDrawingColor(newColor); };

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
  // Resetuj flagę po opuszczeniu elementu
  setTimeout(() => {
    isDraggingRef.current = false;
  }, 100);
};

const handleMouseEnter = () => { 
  isDraggingRef.current = false; 
  if (!hasUnlockedControls) { 
    setHasUnlockedControls(true); 
  } 
};

const handleTouchStart = (e: TouchEvent<HTMLAnchorElement>) => { 
  isDraggingRef.current = false; 
  handleMouseEnter(); 
  if (linkRef.current) { 
    const rect = linkRef.current.getBoundingClientRect(); 
    const touch = e.touches[0]; 
    mousePosition.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top }; 
  } 
};

const handleTouchMove = (e: TouchEvent<HTMLAnchorElement>) => { 
  isDraggingRef.current = true; 
  // Oznacz że użytkownik rysował tylko jeśli aktywnie rysuje (nie w trybie cursor)
  if (brushType !== 'cursor') {
    hasDrawnRef.current = true;
  }
  if (linkRef.current) { 
    const rect = linkRef.current.getBoundingClientRect(); 
    const touch = e.touches[0]; 
    mousePosition.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top }; 
  } 
};

const handleTouchEnd = () => { 
  handleMouseLeave(); 
  if (!hasDrawnRef.current && linkRef.current) { 
    linkRef.current.click(); 
  } 
};

const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
  // Zapobiegaj kliknięciu tylko jeśli użytkownik rzeczywiście rysował (i nie jest w trybie cursor)
  if (hasDrawnRef.current && brushType !== 'cursor') {
    e.preventDefault();
  }
};

useEffect(() => { const observer = new IntersectionObserver(([entry]) => { setIsButtonVisible(entry.isIntersecting); }, { threshold: 0.1 }); if (linkRef.current) observer.observe(linkRef.current); return () => { if (linkRef.current) observer.unobserve(linkRef.current); }; }, []);

useEffect(() => { if (hasUnlockedControls && isButtonVisible) { setTimeout(() => setIsPanelVisible(true), 50); } else { setIsPanelVisible(false); } }, [hasUnlockedControls, isButtonVisible]);

useEffect(() => { if (!linkRef.current) return; if (brushType === 'cursor') { linkRef.current.style.cursor = 'pointer'; } else { linkRef.current.style.cursor = ''; } }, [brushType]);

useEffect(() => {

const canvas = canvasRef.current;

const setupCanvas = () => {

const context = canvas?.getContext("2d");

if (canvas && context) {

const isDarkMode = document.documentElement.classList.contains('dark');

const canvasBackgroundColor = isDarkMode ? '#FFFFFF' : '#000000';

const dpr = window.devicePixelRatio || 1;

const rect = canvas.getBoundingClientRect();

if (rect.width > 0) {

canvas.width = rect.width * dpr;

canvas.height = rect.height * dpr;

context.scale(dpr, dpr);

context.fillStyle = canvasBackgroundColor;

context.fillRect(0, 0, rect.width, rect.height);

}

}

};

setupCanvas();

const resizeObserver = new ResizeObserver(setupCanvas);

if (linkRef.current) resizeObserver.observe(linkRef.current);

const mutationObserver = new MutationObserver(setupCanvas);

mutationObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

return () => { mutationObserver.disconnect(); if (linkRef.current) resizeObserver.unobserve(linkRef.current); }

}, []);

useEffect(() => {

const context = canvasRef.current?.getContext("2d", { willReadFrequently: true });

let isRunning = true;

const drawLoop = () => {

if (brushType === 'cursor' || !isRunning) { animationFrameId.current = requestAnimationFrame(drawLoop); return; };

if (context && mousePosition.current) {

if (!lastMousePosition.current) lastMousePosition.current = mousePosition.current;

context.globalCompositeOperation = "source-over";

switch (brushType) {

case "spray":

context.fillStyle = drawingColor;

for (let i = 0; i < 30; i++) { const angle = Math.random() * 2 * Math.PI; const radius = (Math.random() * brushSize) / 2; const x = mousePosition.current.x + radius * Math.cos(angle); const y = mousePosition.current.y + radius * Math.sin(angle); context.beginPath(); context.arc(x, y, 1, 0, 2 * Math.PI); context.fill(); }

break;

case "brush":

default:

context.strokeStyle = drawingColor;

context.lineWidth = brushSize;

context.lineCap = "round";

context.lineJoin = "round";

const midPoint = { x: (lastMousePosition.current.x + mousePosition.current.x) / 2, y: (lastMousePosition.current.y + mousePosition.current.y) / 2, };

context.beginPath();

context.moveTo(midPoint.x, midPoint.y);

context.quadraticCurveTo(lastMousePosition.current.x, lastMousePosition.current.y, mousePosition.current.x, mousePosition.current.y);

context.stroke();

break;

}

lastMousePosition.current = mousePosition.current;

}

animationFrameId.current = requestAnimationFrame(drawLoop);

};

drawLoop();

return () => { isRunning = false; if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); };

}, [drawingColor, brushSize, brushType]);



return (

<>

<style>{`

/* --- Style bazowe (Mobile-First) --- */

.big-type-cta-section .cta-button-wrapper {

display: flex; flex-direction: column; align-items: center; gap: 1.5rem; width: 100%;

}

.big-type-cta-section .cta-button {

position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; width: 100%;

overflow: hidden; background-color: transparent; transition: transform 0.3s ease; -webkit-tap-highlight-color: transparent;

text-decoration: none; border: none; outline: none; box-shadow: none; touch-action: none;

min-height: 180px;

border-radius: 2rem; /* ✅ POPRAWKA: Dodano border-radius dla mobilnych */

cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><circle cx='24' cy='24' r='18' fill='rgba(0,0,0,0.2)' stroke='%23000' stroke-width='2'/></svg>") 24 24, auto;

}

.dark .big-type-cta-section .cta-button {

cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><circle cx='24' cy='24' r='18' fill='rgba(255,255,255,0.2)' stroke='%23fff' stroke-width='2'/></svg>") 24 24, auto;

}

.big-type-cta-section .cta-canvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; }

.big-type-cta-section .cta-text {

position: relative; z-index: 2; color: #FFFFFF; mix-blend-mode: difference; pointer-events: none;

font-size: 1.5rem; line-height: 1.2;

}

.controls-container { width: 100%; display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.4s ease-in-out; pointer-events: none; }

.controls-container.visible { grid-template-rows: 1fr; pointer-events: auto; }

.brush-controls-panel {

overflow: hidden; display: flex; align-items: center; justify-content: center; gap: 0.5rem; opacity: 0;

transition: opacity 0.4s ease-in-out; flex-direction: row; flex-wrap: wrap; width: 90%; max-width: 380px; margin: 0 auto;

}

.controls-container.visible .brush-controls-panel { opacity: 1; }

.brush-controls-panel > div {

background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); border-radius: 9999px; padding: 0.5rem;

display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; justify-content: center;

}



/* --- Style dla Tabletu i Desktopa --- */

@media (min-width: 768px) {

.big-type-cta-section .cta-button {

min-height: 220px; padding: 0 2rem;

border-radius: 9999px; /* ✅ POPRAWKA: Pełne zaokrąglenie dla desktop */

}

.big-type-cta-section .cta-text { font-size: 2.25rem; }

}

@media (min-width: 1024px) {

.big-type-cta-section .cta-text { font-size: 3rem; }

.brush-controls-panel { flex-wrap: nowrap; width: auto; max-width: none; }

}


@media (hover: hover) and (min-width: 768px) {

.big-type-cta-section .cta-button:hover { transform: scale(1.02); }

}

/* ✅ Poprawiona logika zmiany tekstu */

.desktop-text { display: none; }

.mobile-text { display: inline-block; }

@media (min-width: 768px) {

.desktop-text { display: inline-block; }

.mobile-text { display: none; }

}

`}</style>


<section aria-labelledby="big-type-cta" className="py-0 big-type-cta-section">

<div className="cta-button-wrapper">

<Link

to="https://www.behance.net/adamgacki1"

className="cta-button"

aria-label={t("portfolio.cta.more")}

onClick={handleClick} // ✅ POPRAWKA: Zmienione na handleClick

onMouseEnter={handleMouseEnter}

onMouseMove={handleMouseMove}

onMouseLeave={handleMouseLeave}

onTouchStart={handleTouchStart}

onTouchMove={handleTouchMove}

onTouchEnd={handleTouchEnd}

ref={linkRef}

target="_blank"

rel="noopener noreferrer"

>

<canvas ref={canvasRef} className="cta-canvas" />

<h2 id="big-type-cta" className="cta-text text-center font-regular tracking-tighter">

<span className="desktop-text">{t("portfolio.cta.more")}</span>

<span className="mobile-text" dangerouslySetInnerHTML={{ __html: t("portfolio.cta.more.mobile") }} />

</h2>

</Link>


<div className={`controls-container ${isPanelVisible ? "visible" : ""}`}>

{hasUnlockedControls && (

<BrushControls

isVisible={isPanelVisible}

onSizeChange={setBrushSize}

onColorChange={handleColorChange}

onBrushTypeChange={setBrushType}

currentColor={drawingColor}

currentSize={brushSize}

currentBrushType={brushType}

/>

)}

</div>

</div>

</section>

</>

);

};



export default BigTypeCTA;