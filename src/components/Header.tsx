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
  // unified icon button style (matches ThemeToggle 44x44)
  const iconBtnStyle: React.CSSProperties = { width: 44, height: 44 };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/70 backdrop-blur border-b border-border py-0">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between whitespace-nowrap">
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

        {/* Right actions desktop */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitch />
          <ThemeToggle />
          <Button size="lg" asChild>
            <a href="#contact">Kontakt</a>
          </Button>
        </div>

        {/* Mobile actions: align right, no LanguageSwitch here to avoid wrapping */}
        <div className="md:hidden ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            aria-label="Otwórz menu"
            onClick={() => setOpen(true)}
            style={iconBtnStyle}
            className="rounded-none font-extrabold border-2 md:border"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          {/* top bar stays visible */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-border flex-shrink-0">
            <span className="font-semibold">Menu</span>
            <div className="flex items-center gap-2">
              <LanguageSwitch />
              <Button
                variant="outline"
                size="icon"
                aria-label="Zamknij menu"
                onClick={() => setOpen(false)}
                style={iconBtnStyle}
                className="rounded-none font-extrabold border-2 md:border"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* scrollable content below */}
          <div className="flex-1 overflow-y-auto">{/* Rive placeholder */}
            <div className="mx-6 mt-6 rounded-xl border border-border bg-card shadow-hero h-[200px]" aria-label="Rive placeholder" />
            <div className="mt-6 px-6 pb-10">
              <ul className="grid gap-4 text-lg">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="block py-3 border-b border-border/60"
                      onClick={() => setOpen(false)}
                    >
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
        </div>
      )}
    </header>
  );
};