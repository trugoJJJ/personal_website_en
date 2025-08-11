import { Button } from "@/components/ui/button";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "O mnie" },
  { href: "#experience", label: "Doświadczenie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#articles", label: "Artykuły" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur border-b border-border">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-foreground">
          Studio
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Button size="lg" asChild>
            <a href="#contact">Kontakt</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
