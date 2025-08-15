import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "O mnie" },
  { href: "#experience", label: "Doświadczenie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#articles", label: "Artykuły" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur border-b border-border py-0">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-foreground">
          Adam Gałęcki
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />
          <Button size="lg" asChild>
            <a href="#contact">Kontakt</a>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitch />
          <ThemeToggle />
          <Button variant="outline" size="icon" aria-label="Otwórz menu" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile overlay menu with Rive placeholder */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 py-0">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between border-b border-border">
            <span className="font-semibold">Menu</span>
            <Button variant="outline" size="icon" aria-label="Zamknij menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Rive placeholder full width */}
          <div className="relative">
            <div className="mx-6 mt-6 rounded-xl border border-border bg-card shadow-hero h-[200px]" aria-label="Rive placeholder" />
          </div>

          <div className="mt-6 px-6">
            <ul className="grid gap-4 text-lg">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block py-3 border-b border-border/60" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <Button asChild size="xl" className="w-full">
                <a href="#contact">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};