import { Link } from "react-router-dom";
import { useRef, MouseEvent, useEffect, useState } from "react";

// --- Komponenty i funkcje pomocnicze ---

// Fikcyjny hook i18n na potrzeby demonstracji
const useI18n = () => ({
  t: (key: string) => {
    const translations: { [key: string]: string } = {
      "portfolio.cta.more": "Zobacz więcej projektów",
      "portfolio.cta.more.mobile": "Zobacz<br/>więcej",
    };
    return translations[key] || key;
  },
});

/**
 * Oblicza kolor przeciwny (negatyw) do podanego koloru w formacie hex.
 * @param hex - Kolor w formacie #RRGGBB
 * @returns Kolor przeciwny w formacie #RRGGBB
 */
const getOppositeColor = (hex: string): string => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  const opposite = (0xffffff - parseInt(hex, 16)).toString(16);
  return "#" + ("000000" + opposite).slice(-6);
};

type BrushType = "brush" | "pen" | "spray" | "cursor";

// Komponent panelu kontrolnego pędzla
const BrushControls = ({
  onSizeChange,
  onColorChange,
  onBrushTypeChange,
  currentColor,
  currentSize,
  currentBrushType,
  isVisible,
}: {
  onSizeChange: (size: number) => void;
  onColorChange: (color: string) => void;
  onBrushTypeChange: (type: BrushType) => void;
  currentColor: string;
  currentSize: number;
  currentBrushType: BrushType;
  isVisible: boolean;
}) => {
  const SIZES = [40, 90, 140];
  const BRUSH_TYPES: { id: BrushType; name: string }[] = [
    { id: "brush", name: "Pędzel" },
    { id: "pen", name: "Pióro" },
    { id: "spray", name: "Spray" },
    { id: "cursor", name: "Kursor" },
  ];

  // Dynamiczne tworzenie palety kolorów z ich przeciwieństwami
  const BASE_COLORS = ["#FFFFFF", "#000000", "#ff3b30", "#34c759", "#007aff"];
  const oppositeColors = BASE_COLORS.map(getOppositeColor);
  const COLORS = [
    ...new Set([...BASE_COLORS, ...oppositeColors].map(c => c.toLowerCase()))
  ];


  return (
    <div className={`brush-controls-panel ${isVisible ? "visible" : ""}`}>
      {/* Kontrolki rodzaju pędzla */}
      <div className="flex items-center bg-gray-800/50 rounded-full p-1">
        {BRUSH_TYPES.map((brush) => (
          <button
            key={brush.id}
            onClick={() => onBrushTypeChange(brush.id)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              currentBrushType === brush.id
                ? "bg-white text-black"
                : "text-white hover:bg-white/20"
            }`}
            aria-label={`Zmień pędzel na ${brush.name}`}
          >
            {brush.name}
          </button>
        ))}
      </div>
      {/* Kontrolki grubości pędzla */}
      <div className="flex items-center bg-gray-800/50 rounded-full p-1">
        {SIZES.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              currentSize === size ? "bg-white" : "hover:bg-white/20"
            }`}
            aria-label={`Zmień rozmiar pędzla na ${size}`}
            disabled={currentBrushType === 'cursor'}
          >
            <span
              className="bg-gray-400 rounded-full"
              style={{ width: `${size / 5}px`, height: `${size / 5}px` }}
            ></span>
          </button>
        ))}
      </div>
      {/* Kontrolki koloru pędzla */}
      <div className="flex items-center bg-gray-800/50 rounded-full p-1">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            className={`w-10 h-10 rounded-full transition-transform transform hover:scale-110 flex items-center justify-center`}
            style={{ backgroundColor: color }}
            aria-label={`Zmień kolor pędzla na ${color}`}
            disabled={currentBrushType === 'cursor'}
          >
            {currentColor.toLowerCase() === color.toLowerCase() && (
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: getOppositeColor(color),
                }}
              ></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- Główny komponent ---

export const BigTypeCTA = () => {
  const { t } = useI18n();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Stany do zarządzania pędzlem i panelem
  const [brushSize, setBrushSize] = useState(140);
  const [drawingColor, setDrawingColor] = useState("#FFFFFF");
  const [brushType, setBrushType] = useState<BrushType>("brush");
  const [hasUnlockedControls, setHasUnlockedControls] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);

  // Refy do przechowywania stanu animacji
  const animationFrameId = useRef<number>();
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  const lastMousePosition = useRef<{ x: number; y: number } | null>(null);
  const frameCounter = useRef(0);
  const nextDrawingColor = useRef<string | null>(null);

  const handleColorChange = (newColor: string) => {
    if (nextDrawingColor.current) {
      nextDrawingColor.current = null;
    }
    setDrawingColor(newColor);
  };

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      mousePosition.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };

  const handleMouseLeave = () => {
    mousePosition.current = null;
    lastMousePosition.current = null;
  };
  
  // ✅ ZMIANA: Panel pojawia się natychmiast po najechaniu
  const handleMouseEnter = () => {
    // Odblokuj panel kontrolny od razu, bez opóźnienia
    if (!hasUnlockedControls) {
      setHasUnlockedControls(true);
    }
    
    // Pozostała logika do zmiany tła po zamalowaniu
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (nextDrawingColor.current && context) {
      const newColor = nextDrawingColor.current;
      context.fillStyle = drawingColor;
      context.fillRect(0, 0, canvas!.width, canvas!.height);
      setDrawingColor(newColor);
      nextDrawingColor.current = null;
    }
  };

  // Efekt do obserwowania widoczności przycisku
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsButtonVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    if (linkRef.current) observer.observe(linkRef.current);
    return () => {
      if (linkRef.current) observer.unobserve(linkRef.current);
    };
  }, []);

  // Efekt do zarządzania animacją panelu
  useEffect(() => {
    if (hasUnlockedControls && isButtonVisible) {
      setTimeout(() => setIsPanelVisible(true), 50);
    } else {
      setIsPanelVisible(false);
    }
  }, [hasUnlockedControls, isButtonVisible]);
  
  // Efekt do dynamicznej zmiany kursora
  useEffect(() => {
    if (!linkRef.current) return;
    if (brushType === 'cursor') {
      linkRef.current.style.cursor = 'pointer';
    } else {
      linkRef.current.style.cursor = ''; // Wróć do stylu z CSS
    }
  }, [brushType]);

  // Efekt do inicjalizacji i zmiany rozmiaru canvasu
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const setupCanvas = () => {
      if (canvas && context) {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCanvas.getContext("2d")?.drawImage(canvas, 0, 0);
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        context.scale(dpr, dpr);
        context.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
      }
    };

    if (canvas && context) {
      context.fillStyle = "#000000";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    setupCanvas();
    window.addEventListener("resize", setupCanvas);
    return () => window.removeEventListener("resize", setupCanvas);
  }, []);

  // Główny hook do rysowania
  useEffect(() => {
    const context = canvasRef.current?.getContext("2d", { willReadFrequently: true });
    let isRunning = true;

    const checkCanvasCompletion = () => {
      const canvas = canvasRef.current;
      if (!context || !canvas || nextDrawingColor.current) return;
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let matchingPixels = 0;
      const sampleRate = 100;
      const totalSamples = data.length / 4 / sampleRate;
      const targetR = parseInt(drawingColor.slice(1, 3), 16);
      const targetG = parseInt(drawingColor.slice(3, 5), 16);
      const targetB = parseInt(drawingColor.slice(5, 7), 16);
      for (let i = 0; i < data.length; i += 4 * sampleRate) {
        if (
          Math.abs(data[i] - targetR) < 15 &&
          Math.abs(data[i + 1] - targetG) < 15 &&
          Math.abs(data[i + 2] - targetB) < 15
        ) {
          matchingPixels++;
        }
      }
      if (matchingPixels / totalSamples > 0.99) {
        nextDrawingColor.current = getOppositeColor(drawingColor);
      }
    };

    const drawLoop = () => {
      if (brushType === 'cursor' || !isRunning) {
        animationFrameId.current = requestAnimationFrame(drawLoop);
        return;
      };

      if (context && mousePosition.current) {
        if (!lastMousePosition.current) lastMousePosition.current = mousePosition.current;
        context.globalCompositeOperation = "source-over";
        switch (brushType) {
          case "spray":
            context.fillStyle = drawingColor;
            for (let i = 0; i < 30; i++) {
              const angle = Math.random() * 2 * Math.PI;
              const radius = (Math.random() * brushSize) / 2;
              const x = mousePosition.current.x + radius * Math.cos(angle);
              const y = mousePosition.current.y + radius * Math.sin(angle);
              context.beginPath();
              context.arc(x, y, 1, 0, 2 * Math.PI);
              context.fill();
            }
            break;
          case "pen":
            context.strokeStyle = drawingColor;
            context.lineWidth = brushSize / 20;
            context.lineCap = "round";
            context.lineJoin = "round";
            context.beginPath();
            context.moveTo(lastMousePosition.current.x, lastMousePosition.current.y);
            context.lineTo(mousePosition.current.x, mousePosition.current.y);
            context.stroke();
            break;
          case "brush":
          default:
            context.strokeStyle = drawingColor;
            context.lineWidth = brushSize;
            context.lineCap = "round";
            context.lineJoin = "round";
            const midPoint = {
              x: (lastMousePosition.current.x + mousePosition.current.x) / 2,
              y: (lastMousePosition.current.y + mousePosition.current.y) / 2,
            };
            context.beginPath();
            context.moveTo(midPoint.x, midPoint.y);
            context.quadraticCurveTo(lastMousePosition.current.x, lastMousePosition.current.y, mousePosition.current.x, mousePosition.current.y);
            context.stroke();
            break;
        }
        lastMousePosition.current = mousePosition.current;
      }
      frameCounter.current++;
      if (frameCounter.current % 30 === 0) checkCanvasCompletion();
      animationFrameId.current = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      isRunning = false;
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [drawingColor, brushSize, brushType]);

  return (
    <>
      <style>{`
        :root { --background-hsl: 0 0% 100%; --foreground-hsl: 222.2 84% 4.9%; }
        .cta-button-wrapper { 
          position: relative; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          width: 100%; 
        }
        .cta-button {
          position: relative;
          z-index: 1;
          display: block;
          overflow: hidden;
          background-color: transparent;
          transition: transform 0.3s ease;
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          border: none;
          outline: none;
          box-shadow: none;
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'><circle cx='24' cy='24' r='18' fill='rgba(0,0,0,0.2)' stroke='%23fff' stroke-width='2'/></svg>") 24 24, auto;
        }
        .cta-canvas { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; }
        .cta-text { position: relative; z-index: 2; color: hsl(var(--background-hsl)); mix-blend-mode: difference; pointer-events: none; }
      
        .brush-controls-panel {
          position: fixed;
          bottom: 1.25rem;
          left: 50%;
          transform: translate(-50%, 150%);
          z-index: 50;
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 9999px;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease;
        }
      
        .brush-controls-panel.visible {
          transform: translate(-50%, 0);
          opacity: 1;
        }

        @media (hover: hover) and (min-width: 769px) { .cta-button { width: 100%; border-radius: 9999px; min-height: 220px; display: flex; align-items: center; justify-content: center; padding: 0 2rem; } .cta-button:hover { transform: scale(1.02); } }
        
        @media (hover: none), (max-width: 768px) { 
            .cta-button { width: 200px; height: 200px; border-radius: 50%; display: flex; justify-content: center; align-items: center; text-align: center; } 
            .cta-text { font-size: 1.5rem; line-height: 1.2; } 
            
            .cta-button-wrapper::before, .cta-button-wrapper::after { 
                content: ''; 
                position: absolute; 
                top: 50%; 
                left: 50%; 
                transform: translate(-50%, -50%); 
                width: 200px;
                height: 200px;
                border: 1px solid hsl(var(--foreground-hsl)); 
                border-radius: 50%; 
                animation: mobile-pulse 5s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94); 
                opacity: 0; 
                pointer-events: none; 
                z-index: 0;
            } 
            .cta-button-wrapper::after { 
                animation-delay: 2.5s; 
            } 
        }
        /* ✅ ZMIANA: Bardziej subtelne pulsowanie na mobile */
        @keyframes mobile-pulse { 
            0% { 
                transform: translate(-50%, -50%) scale(1); 
                opacity: 0.4; /* Zmniejszona przezroczystość początkowa */
            } 
            100% { 
                transform: translate(-50%, -50%) scale(1.6); /* Zmniejszona skala końcowa */
                opacity: 0; 
            } 
        }
      `}</style>

      <section aria-labelledby="big-type-cta">
        <div className="container mx-auto">
          <div className="cta-button-wrapper">
            <Link
              to="/portfolio"
              className="cta-button"
              aria-label={t("portfolio.cta.more")}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              ref={linkRef}
            >
              <canvas ref={canvasRef} className="cta-canvas" />
              <h2
                id="big-type-cta"
                className="cta-text text-center text-4xl md:text-5xl lg:text-6xl font-regular tracking-tighter"
                dangerouslySetInnerHTML={{
                  __html:
                    window.innerWidth > 768
                      ? t("portfolio.cta.more")
                      : t("portfolio.cta.more.mobile"),
                }}
              />
            </Link>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default BigTypeCTA;