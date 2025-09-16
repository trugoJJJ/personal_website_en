"use client";

import { useState, useEffect, useRef } from "react";
import { usePalette } from "./hooks";
import { ClientOnlyWrapper } from "../ClientOnlyWrapper";

const HeroSectionContent = () => {
  const [scale, setScale] = useState(0.6);
  const boxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isDark, P } = usePalette();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current && !document.hidden) {
        setTimeout(() => {
          videoRef.current?.play().catch(() => {
            // Ignore autoplay errors
          });
        }, 100);
      }
    };

    const handleFocus = () => {
      if (videoRef.current) {
        setTimeout(() => {
          videoRef.current?.play().catch(() => {
            // Ignore autoplay errors
          });
        }, 100);
      }
    };

    const handleResume = () => {
      if (videoRef.current) {
        setTimeout(() => {
          videoRef.current?.play().catch(() => {
            // Ignore autoplay errors
          });
        }, 100);
      }
    };

    const handleTouchStart = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {
          // Ignore autoplay errors
        });
      }
    };

    const handlePageShow = () => {
      if (videoRef.current) {
        setTimeout(() => {
          videoRef.current?.play().catch(() => {
            // Ignore autoplay errors
          });
        }, 200);
      }
    };

    const handleOnline = () => {
      if (videoRef.current) {
        setTimeout(() => {
          videoRef.current?.play().catch(() => {
            // Ignore autoplay errors
          });
        }, 200);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('resume', handleResume);
    document.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('online', handleOnline);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('resume', handleResume);
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

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
    <section id="home" className="pt-36 sm:pt-32 md:pt-44 pb-24 md:pb-32" style={{ background: isDark ? P("charcoal") : P("white") }}>
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-extrabold uppercase tracking-wider leading-[1.05] text-6xl sm:text-9xl mb-4 sm:mb-6" style={{ color: isDark ? P("white") : P("black") }}>Digital</h1>
          <h1 className="font-extrabold uppercase tracking-wider leading-[1.05] text-3xl sm:text-6xl mb-4 sm:mb-6" style={{ color: isDark ? P("white") : P("black") }}>Marketing</h1>
          <h1 className="font-extrabold uppercase tracking-wider leading-[1.15] text-2xl sm:text-5xl" style={{ color: isDark ? P("white") : P("black") }}>Manager</h1>
        </div>
        <div className="relative mx-auto w-full max-w-[1600px]">
          <div
            ref={boxRef}
            className="overflow-hidden transition-transform duration-150 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              border: `${isDark ? '6px' : '8px'} solid ${isDark ? P("white") : P("black")}`,
              borderRadius: '0',
              position: 'relative',
              boxShadow: isDark
                ? `8px 8px 0 ${P("white")}`
                : `8px 8px 0 ${P("black")}`,
            }}
          >

            <video 
              ref={videoRef}
              className="w-full"
              autoPlay 
              muted 
              loop 
              playsInline
              preload="metadata"
              poster="/cover_hero_video.png"
              style={{ 
                background: P("ecru"), 
                width: '100%',
                height: '100%',
                objectFit: 'fill',
                overflow: 'hidden',
                display: 'block',
                transform: 'scale(1.05)',
                transformOrigin: 'center'
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
          <div className="text-center mb-6 sm:mb-10">
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
                poster="/cover_hero_video.png"
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