import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate video scale based on scroll - starts at 60% width, grows to 100%
  const scale = Math.min(1, 0.6 + (scrollY / window.innerHeight) * 0.4);

  return (
    <section className="relative min-h-screen bg-background flex flex-col">
      {/* SEO: zachowujemy pojedynczy H1 (niewidoczny wizualnie) */}
      <h1 className="sr-only">Marketing manager - Portfolio</h1>

      {/* Main hero content */}
      <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-16">
        <div className="text-center space-y-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
            Marketing
          </h2>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight">
            Manager
          </h2>
        </div>
      </div>

      {/* Video section that grows on scroll */}
      <div className="relative pb-24">
        <div 
          className="mx-auto bg-muted rounded-2xl overflow-hidden transition-all duration-300 ease-out"
          style={{ 
            width: `${scale * 100}%`,
            minWidth: '60%'
          }}
        >
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-muted-foreground text-lg">Video placeholder</p>
              <p className="text-sm text-muted-foreground/70">Scroll to see video grow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
