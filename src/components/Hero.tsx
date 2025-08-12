import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import heroProjectPoster from "@/assets/hero-project.jpg";
import heroProjectVideo from "@/assets/hero-project.mp4";

export const Hero = () => {
  const [t, setT] = useState(0);
  const [box, setBox] = useState({ left: 0, top: 0, width: 0, height: 0, radius: 16 });
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = () => {
      const el = placeholderRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const ww = window.innerWidth || 1;

      const progress = Math.min(Math.max((vh - r.top) / vh, 0), 1);

      const cw = r.width;
      const left0 = r.left;
      const top0 = r.top;

      const width = cw + (ww - cw) * progress;
      const height = cw + (ww * 9 / 16 - cw) * progress;
      const left = left0 * (1 - progress);
      const top = Math.max(top0 * (1 - progress), 0);
      const radius = Math.max(0, 16 * (1 - progress));

      setT(progress);
      setBox({ left, top, width, height, radius });
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
            {/* Video wrapper: fixed, smoothly morphs from square (right column) to full-width 16:9 */}
            <div
              className="fixed z-30 pointer-events-none"
              style={{
                left: `${box.left}px`,
                top: `${box.top}px`,
                width: `${box.width}px`,
                height: `${box.height}px`,
              }}
            >
              <figure
                className="w-full h-full overflow-hidden bg-card shadow-hero ring-2 ring-[hsl(0,0%,100%)]"
                style={{ borderRadius: box.radius }}
              >
                <video
                  src={heroProjectVideo}
                  poster={heroProjectPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                  aria-label="Przykładowe wideo projektu — layout strony docelowej"
                />
                {/* Left gradient overlay - appears progressively */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0"
                  style={{
                    width: `${Math.max(0, Math.min(box.left, box.width * 0.4))}px`,
                    opacity: t,
                    background: "linear-gradient(to right, hsl(var(--background)), transparent)",
                  }}
                  aria-hidden
                />
                <figcaption className="sr-only">Przykładowe wideo projektu</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
