import { Button } from "@/components/ui/button";

export const Hero = () => {
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
        </div>
      </div>
    </section>
  );
};
