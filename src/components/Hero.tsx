export const Hero = () => {
  return (
    <section className="relative isolate bg-background">
      {/* SEO: zachowujemy pojedynczy H1 (niewidoczny wizualnie) */}
      <h1 className="sr-only">Portfolio — nowoczesny marketing i design</h1>

      <div className="container mx-auto px-6 pt-32 pb-24">
        {/* Placeholder pod integrację Rive */}
        <div
          aria-label="Kontener animacji Rive"
          className="rounded-2xl border border-border bg-card/50 shadow-hero h-[420px] md:h-[520px] flex items-center justify-center"
        >
          <span className="text-muted-foreground text-center">
            Tutaj będzie wstawiona animacja Rive
          </span>
        </div>
      </div>
    </section>
  );
};
