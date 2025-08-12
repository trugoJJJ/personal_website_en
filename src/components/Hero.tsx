import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroProjectPoster from "@/assets/hero-project.jpg";
import heroProjectVideo from "@/assets/hero-project.mp4";

export const Hero = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const s = 1 + Math.min(window.scrollY / 1200, 0.15);
        setScale(s);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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
        <div className="max-w-5xl">
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
          <div className="mt-12 will-change-transform" style={{ transform: `scale(${scale})`, transformOrigin: "center" }}>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-hero">
              <video
                src={heroProjectVideo}
                poster={heroProjectPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="w-full h-[380px] md:h-[460px] object-cover"
                aria-label="Przykładowe wideo projektu — layout strony docelowej"
              />
              <figcaption className="sr-only">Przykładowe wideo projektu</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
