"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";
import { usePalette } from "./hooks";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "O mnie" },
  { href: "#experience", label: "Doświadczenie" },
  { href: "#skills", label: "Umiejętności" },
  { href: "#articles", label: "Artykuły" },
];

export const Header = () => {
  const { isDark, P } = usePalette();
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalOverflow; };
    }
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={{ background: isDark ? P("charcoal") : P("white"), borderBottom: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
      {/* Full width nav without container so center is relative to viewport */}
      <nav className="w-full h-16 flex items-center relative">
        {/* Left brand */}
        <a href="#home" className="font-extrabold tracking-tight leading-none ml-4 md:ml-8" style={{ color: isDark ? P("white") : P("charcoal") }}>Adam&nbsp;Gałęcki</a>
        
        {/* Center desktop nav absolutely centered to page */}
        <ul
          className="hidden desk:flex items-center gap-8 text-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ color: isDark ? P("white") : P("charcoal") }}
        >
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="font-bold hover:underline">{l.label}</a>
            </li>
          ))}
        </ul>
        
        {/* Right actions desktop */}
        <div className="hidden desk:flex items-center gap-2 ml-auto mr-4 md:mr-8">
          <LanguageSwitch />
          <ThemeToggle />
          <Button size="lg" asChild className="rounded-none font-extrabold transition-transform hover:scale-[1.02]" style={{ background: P("amaranth"), color: P("white"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
            <a href="#contact">Kontakt</a>
          </Button>
        </div>
        
        {/* Mobile right side */}
        <div className="flex items-center gap-2 ml-auto mr-4 desk:hidden">
          <ThemeToggle />
          <Button variant="outline" size="icon" aria-label="Otwórz menu" onClick={() => setOpen(true)} className="rounded-none" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      
      {open && (
        <div className="fixed inset-0 z-50" style={{ background: isDark ? P("charcoal") : P("ecru") }}>
          <div className="w-full h-16 px-4 md:px-8 flex items-center justify-between" style={{ borderBottom: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
            <span className="font-extrabold text-sm">Menu</span>
            <div className="flex items-center gap-2">
              <LanguageSwitch />
              <Button variant="outline" size="icon" aria-label="Zamknij menu" onClick={() => setOpen(false)} className="rounded-none" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, color: isDark ? P("white") : P("charcoal") }}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mt-6 px-6 desk:hidden">
            <ul className="grid gap-4 text-sm font-extrabold" style={{ color: isDark ? P("white") : P("charcoal") }}>
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="block py-3" style={{ borderBottom: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}` }} onClick={() => setOpen(false)}>{l.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild size="xl" className="w-full rounded-none font-extrabold" style={{ background: P("amaranth"), color: P("white"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
                <a href="#contact">Kontakt</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};