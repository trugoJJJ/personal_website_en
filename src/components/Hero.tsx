import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import heroProjectPoster from "@/assets/hero-project.jpg";
import heroProjectVideo from "@/assets/hero-project.mp4";

export const Hero = () => {
  const [scale, setScale] = useState(1);
  const [isFixed, setIsFixed] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = () => {
      const el = placeholderRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const atTop = rect.top <= 0;
      setIsFixed(atTop);

      if (!atTop) {
        const viewportH = window.innerHeight || 1;
        const progress = Math.min(Math.max((viewportH - rect.top) / viewportH, 0), 1);
        const s = 1 + progress * 0.12; // subtle growth before it sticks to the top
        setScale(s);
      } else {
        setScale(1);
      }
    };

    let rAF = 0;
    const onScroll = () => {
      if (rAF) return;
      rAF = window.requestAnimationFrame(() => {
        handle();
        rAF = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    handle();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rAF) cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <section className="relative isolate bg-background">
      {/* Oversized background word */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[16vw] leading-none font-black tracking-tight text-foreground/5">
          MARKETING
        </span>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              Minimalistyczny marketing i design, który robi robotę.
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl">
              Freelancer & Marketing Manager. Strategie, kampanie i produkty digital — bez zbędnych ozdobników.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="xl" asChild>
                <a href="#contact">Skontaktuj się</a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <a href="#portfolio">Zobacz portfolio</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Placeholder to prevent layout shift */}
            <div ref={placeholderRef} className="aspect-square w-full" />
            {/* Video wrapper: absolute until it reaches top, then fixed full-width 16:9 */}
            <div
              ref={wrapperRef}
              className={`${isFixed ? "fixed top-0 left-0 w-screen z-30" : "absolute inset-0"} transition-all duration-500 ease-out will-change-transform`}
              style={!isFixed ? { transform: `scale(${scale})`, transformOrigin: "center" } : undefined}
            >
              <figure className={`${isFixed ? "rounded-none" : "rounded-2xl"} overflow-hidden bg-card shadow-hero ring-2 ring-[hsl(0,0%,100%)]`}>
                <div className={`${isFixed ? "w-screen aspect-[16/9]" : "w-full h-full"}`}>
                  <video
                    src={heroProjectVideo}
                    poster={heroProjectPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className={`${isFixed ? "w-full h-full object-cover" : "w-full h-full object-cover"}`}
                    aria-label="Przykładowe wideo projektu — layout strony docelowej"
                  />
                </div>
                {/* Left gradient overlay when the video doesn't reach the left edge */}
                {!isFixed && (
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
                    style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
                    aria-hidden
                  />
                )}
                <figcaption className="sr-only">Przykładowe wideo projektu</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
