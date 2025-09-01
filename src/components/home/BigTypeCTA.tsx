"use client";

import { useState, useEffect, useRef } from "react";
import { usePalette, useI18n, COLORS } from "./hooks";
import { BrushType } from "./types";
import { BrushControls } from "./BrushControls";
import { ClientOnlyWrapper } from "../ClientOnlyWrapper";

const BigTypeCTAContent = () => {
  const { t } = useI18n();
  const { isDark, P } = usePalette();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [brushSize, setBrushSize] = useState(500);
  const [drawingColorKey, setDrawingColorKey] = useState<keyof typeof COLORS>('black');
  const [brushType, setBrushType] = useState<BrushType>("brush");

  const drawingColor = P(drawingColorKey);
  const LINK_URL = "https://www.behance.net/adamgacki1";

  // Drawing state
  const isDraggingRef = useRef(false);
  const mousePosition = useRef<{ x: number; y: number } | null>(null);
  const lastMousePosition = useRef<{ x: number; y: number } | null>(null);
  const animationFrameId = useRef<number>();

  // Touch specific
  const touchLongPressTimer = useRef<number | null>(null);
  const TOUCH_LONG_PRESS_MS = 150;
  const touchStartedAt = useRef<number>(0);
  const touchBecameDrawing = useRef(false);

  // Globalne blokowanie scrolla podczas aktywnego rysowania (iOS Safari fallback)
  useEffect(() => {
    const handler = (e: TouchEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
      }
    };
    window.addEventListener('touchmove', handler, { passive: false });
    return () => window.removeEventListener('touchmove', handler);
  }, []);

  const updatePositionFromClient = (clientX: number, clientY: number) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    mousePosition.current = { x: clientX - rect.left, y: clientY - rect.top };
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    if (!e.touches.length) return;
    const t = e.touches[0];
    touchStartedAt.current = Date.now();
    touchBecameDrawing.current = false;
    
    updatePositionFromClient(t.clientX, t.clientY);
    
    touchLongPressTimer.current = window.setTimeout(() => {
      touchBecameDrawing.current = true;
      isDraggingRef.current = true;
    }, TOUCH_LONG_PRESS_MS);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLAnchorElement>) => {
    if (!e.touches.length) return;
    
    if (touchBecameDrawing.current) {
      e.preventDefault();
      const t = e.touches[0];
      updatePositionFromClient(t.clientX, t.clientY);
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLAnchorElement>) => {
    if (touchLongPressTimer.current) {
      clearTimeout(touchLongPressTimer.current);
      touchLongPressTimer.current = null;
    }
    
    if (touchBecameDrawing.current) {
      e.preventDefault();
      isDraggingRef.current = false;
      mousePosition.current = null;
      lastMousePosition.current = null;
    }
    
    touchBecameDrawing.current = false;
  };

  const onTouchCancel = () => {
    if (touchLongPressTimer.current) {
      clearTimeout(touchLongPressTimer.current);
      touchLongPressTimer.current = null;
    }
    touchBecameDrawing.current = false;
    isDraggingRef.current = false;
  };

  // Mouse handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (brushType === "cursor") return;
    updatePositionFromClient(e.clientX, e.clientY);
    isDraggingRef.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (brushType === "cursor") return;
    updatePositionFromClient(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    mousePosition.current = null;
    lastMousePosition.current = null;
  };

  // Canvas sizing & background
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
      
      const ecruColor = isDark ? "#241b2b" : "#FAF6EE";
      const mainColor = isDark ? "#6B2D5B" : "#C25A3A";
      
      ctx.fillStyle = ecruColor;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      const margin = 6;
      ctx.fillStyle = mainColor;
      ctx.fillRect(margin, margin, rect.width - margin * 2, rect.height - margin * 2);
    };
    setup();
    const ro = new ResizeObserver(setup);
    if (linkRef.current) ro.observe(linkRef.current);
    return () => { ro.disconnect(); };
  }, [isDark]);

  // Drawing loop
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
      if (brushType !== "cursor" && ctx && mousePosition.current && isDraggingRef.current) {
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
    return () => { 
      running = false; 
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current); 
    };
  }, [drawingColor, brushSize, brushType]);

  return (
    <section className="pt-8 md:pt-16 pb-24 md:pb-36"
             style={{ background: P("ecru") }}>
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="w-full flex justify-center">
          <a
            role="link"
            ref={linkRef}
            href={LINK_URL}
            target="_blank"
            rel="noopener,noreferrer"
            onContextMenu={(e) => e.preventDefault()}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchCancel}
            className="relative w-full min-h-[clamp(160px,30vw,220px)] select-none"
            style={{
              border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
              cursor: brushType === "cursor" ? "pointer" : "crosshair",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              WebkitTapHighlightColor: 'transparent',
              WebkitTouchCallout: 'none',
              userSelect: 'none',
              touchAction: isDraggingRef.current ? 'none' : 'manipulation',
              boxShadow: `inset 0 0 0 6px ${P("ecru")}`,
            }}
            aria-label={t("portfolio.cta.more")}
            tabIndex={0}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && !isDraggingRef.current) {
                e.preventDefault();
                window.open(LINK_URL, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />
            <div className="relative z-[1] flex flex-col items-center justify-center text-center px-4">
              <span
                className="font-extrabold tracking-tighter leading-tight [word-break:break-word]"
                style={{ 
                  color: P("white"), 
                  fontSize: 'clamp(1.5rem,5vw,2.5rem)'
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    typeof window !== 'undefined' && window.innerWidth > 768
                      ? t("portfolio.cta.more")
                      : t("portfolio.cta.more.mobile"),
                }}
              />
              <span 
                className="block md:hidden mt-2 text-xs font-bold opacity-75"
                style={{ color: P("white") }}
              >
                (przytrzymaj aby rysować)
              </span>
            </div>
          </a>
        </div>

        <div className="w-full flex justify-center mt-8 md:mt-12 px-6">
          <BrushControls
            isVisible={true}
            onSizeChange={setBrushSize}
            onColorChange={setDrawingColorKey}
            onBrushTypeChange={setBrushType}
            currentColorKey={drawingColorKey}
            currentSize={brushSize}
            currentBrushType={brushType}
          />
        </div>
      </div>
    </section>
  );
};

export const BigTypeCTA = () => {
  return (
    <ClientOnlyWrapper>
      <BigTypeCTAContent />
    </ClientOnlyWrapper>
  );
};