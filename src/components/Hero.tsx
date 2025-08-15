import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const [scale, setScale] = useState(0.6); // minimalna skala
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = boxRef.current;
      if (!el) return;

// ...
const rect = el.getBoundingClientRect();
const viewportH = window.innerHeight;

const elCenter = rect.top + rect.height / 2;
const vpCenter = viewportH / 2;
const dist = Math.abs(elCenter - vpCenter);

// jak blisko środka (0 daleko → 1 w środku)
const falloff = viewportH * 0.6;         // większe = łagodniejsze
const proximity = Math.max(0, Math.min(1, 1 - dist / falloff));

// easing out (gładkie dojście do 1)
const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

const minScale = 0.4;
const maxScale = 1.0;

const s = minScale + (maxScale - minScale) * easeOutCubic(proximity);
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
    // init
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-background flex flex-col py-0">
      <h1 className="sr-only">Marketing manager - Portfolio</h1>

      <div className="flex-1 flex items-center justify-center px-6 pt-4 pb-16">
        <div className="text-center space-y-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-foreground tracking-tight">
            Marketing
          </h2>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-foreground tracking-tight">
            Manager
          </h2>
        </div>
      </div>

      {/* Video section */}
      <div className="relative pb-24">
        {/* wrapper trzyma layout, a wewnętrzne pudełko skaluje się transformem */}
        <div className="mx-auto w-full max-w-[1600px] px-4">
          <div
            ref={boxRef}
            className="rounded-2xl overflow-hidden will-change-transform transition-transform duration-150 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center",
            }}
          >
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-lg">Video placeholder</p>
                <p className="text-sm text-muted-foreground/70">Scroll to see video grow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
