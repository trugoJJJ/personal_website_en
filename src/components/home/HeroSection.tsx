"use client";

import { useState, useEffect, useRef } from "react";
import { usePalette } from "./hooks";
import { ClientOnlyWrapper } from "../ClientOnlyWrapper";
import { Rive } from "../ui/rive";

const HeroSectionContent = () => {
  const { isDark, P } = usePalette();
  const [scale, setScale] = useState(0.6);
  const boxRef = useRef<HTMLDivElement | null>(null);

  // hero scaling
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = boxRef.current; 
      if (!el) return;
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
    const onScroll = () => { 
      if (!ticking) { 
        ticking = true; 
        requestAnimationFrame(update); 
      } 
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="home" className="pt-44 pb-24 md:pb-32" style={{ background: isDark ? P("charcoal") : P("white") }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-extrabold uppercase tracking-wider leading-[1.05] text-6xl sm:text-9xl mb-6" style={{ color: isDark ? P("white") : P("black") }}>Digital</h1>
          <h1 className="font-extrabold uppercase tracking-wider leading-[1.05] text-4xl sm:text-6xl mb-6" style={{ color: isDark ? P("white") : P("black") }}>Marketing</h1>
          <h1 className="font-extrabold uppercase tracking-wider leading-[1.15] text-4xl sm:text-5xl" style={{ color: isDark ? P("white") : P("black") }}>Manager</h1>
        </div>
        <div className="relative mx-auto w-full max-w-[1600px]">
          <div
            ref={boxRef}
            className="overflow-hidden transition-transform duration-150 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center",
              border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
            }}
          >
            <video 
              className="w-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
              style={{ 
                background: P("ecru"), 
                width: '100%',
                aspectRatio: '16/9',
                display: 'block'
              }}
            >
              <source src="/hero_video_small.mp4" type="video/mp4" />
              <div className="text-center space-y-3" style={{ color: isDark ? P("white") : P("charcoal") }}>
                <div className="w-16 h-16 mx-auto flex items-center justify-center" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p>Video placeholder</p>
                <p style={{ opacity: .7 }}>Scroll to see video grow</p>
              </div>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroSection = () => {
  return (
    <ClientOnlyWrapper fallback={
      <section id="home" className="pt-44 pb-24 md:pb-32 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-extrabold uppercase tracking-wider leading-[1.05] text-6xl sm:text-9xl mb-6 text-black">Digital</h1>
            <h1 className="font-extrabold uppercase tracking-wider leading-[1.05] text-4xl sm:text-6xl mb-6 text-black">Marketing</h1>
            <h1 className="font-extrabold uppercase tracking-wider leading-[1.15] text-4xl sm:text-5xl text-black">Manager</h1>
          </div>
          <div className="relative mx-auto w-full max-w-[1600px]">
            <div className="overflow-hidden transition-transform duration-150 ease-out scale-60 border-3 border-black">
              <video 
                className="w-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                controls
                style={{ 
                  background: "#FAF6EE", 
                  width: '100%',
                  aspectRatio: '16/9',
                  display: 'block'
                }}
              >
                <source src="./hero_video_small.mp4" type="video/mp4" />
                <div className="text-center space-y-3 text-[#2E2217]">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border-3 border-black">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p>Video placeholder</p>
                  <p className="opacity-70">Scroll to see video grow</p>
                </div>
              </video>
            </div>
          </div>
        </div>
      </section>
    }>
      <HeroSectionContent />
    </ClientOnlyWrapper>
  );
};