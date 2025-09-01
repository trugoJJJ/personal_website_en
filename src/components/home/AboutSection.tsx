"use client";

import React from "react";
import { Target, TrendingUp, Users, Award } from "lucide-react";
import { usePalette } from "./hooks";
import portrait from "@/assets/hero-portrait.jpg";

export const AboutSection = () => {
  const { isDark, P } = usePalette();

  const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <header className="mb-12 md:mb-24 mt-4 md:mt-8">
      <h2
        className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
        style={{ color: isDark ? P("white") : P("black") }}
      >
        {children}
      </h2>
    </header>
  );

  return (
    <section className="py-24 md:py-36" id="about"
             style={{ background: isDark ? P("charcoal") : P("white"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
      <div className="container mx-auto max-w-6xl">
        <SectionHeading>O mnie</SectionHeading>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <figure className="overflow-hidden" style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
              <img src={portrait.src} alt="Portret – o mnie" loading="lazy" className="w-full h-64 object-cover md:h-80" />
            </figure>
            <div className="space-y-6" style={{ color: isDark ? P("white") : P("charcoal") }}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-center md:text-left">Cześć, nazywam się Adam</h3>
              <p className="text-lg">
                Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych.
              </p>
              <p>
                Przez ostatnie 5 lat rozwijałem się w marketingu – od grafika, przez SEO, po managera zespołu.
                Realizowałem długoterminowe strategie SEO (produkcja drzwi, medyczna, krypto), zarządzałem zespołem
                i wspierałem projekty IT dla największych marek w Polsce.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { Icon: Target, value: "+3 mln", label: "Wyświetleń linku do strony w Google" },
                { Icon: TrendingUp, value: "125 tys.", label: "Wejść na stronę z wyników Google" },
                { Icon: Users, value: "40%", label: "Wzrost zapytań ofertowych" },
                { Icon: Award, value: "750", label: "Wypełnionych formularzy" },
              ].map((s) => (
                <div key={s.label} className="p-6 text-left"
                     style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: P("ecru"), color: isDark ? P("white") : P("black") }}>
                  <s.Icon className="h-7 w-7 mb-3" />
                  <div className="text-3xl font-extrabold">{s.value}</div>
                  <div className="text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Kontakt (ikony + QR) */}
            <div className="p-10"
                 style={{ background: P("butter"), color: isDark ? P("white") : P("black"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
              {(() => {
                const QR_DATA_URI =
                  'data:image/svg+xml;utf8,' +
                  encodeURIComponent(`
                  <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 120 120">
                    <rect width="120" height="120" fill="#ffffff"/>
                    <rect x="6" y="6" width="28" height="28" fill="none" stroke="#000" stroke-width="6"/>
                    <rect x="6" y="6" width="18" height="18" fill="#000"/>
                    <rect x="86" y="6" width="28" height="28" fill="none" stroke="#000" stroke-width="6"/>
                    <rect x="96" y="16" width="18" height="18" fill="#000"/>
                    <rect x="6" y="86" width="28" height="28" fill="none" stroke="#000" stroke-width="6"/>
                    <rect x="6" y="96" width="18" height="18" fill="#000"/>
                    <rect x="44" y="44" width="8" height="8" fill="#000"/>
                    <rect x="56" y="44" width="8" height="8" fill="#000"/>
                    <rect x="68" y="44" width="8" height="8" fill="#000"/>
                    <rect x="44" y="56" width="8" height="8" fill="#000"/>
                    <rect x="56" y="56" width="8" height="8" fill="#000"/>
                    <rect x="68" y="56" width="8" height="8" fill="#000"/>
                    <rect x="44" y="68" width="8" height="8" fill="#000"/>
                    <rect x="56" y="68" width="8" height="8" fill="#000"/>
                    <rect x="68" y="68" width="8" height="8" fill="#000"/>
                  </svg>
                `);

                return (
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    {/* Ikony - full width na mobile, 3 kolumny na desktop */}
                    <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-4 md:gap-6">
                      {[
                        { Icon: Target, href: "mailto:agalecki.work@gmail.com", label: "Mail" },
                        { Icon: TrendingUp, href: "https://linkedin.com/in/adamgalecki", label: "LinkedIn" },
                        { Icon: Users, href: "https://github.com", label: "GitHub" },
                        { Icon: Award, href: "#", label: "Messenger" },
                        { Icon: Target, href: "#", label: "Instagram" },
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 64 64" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
                              <path d="M36 8v28" />
                              <path d="M36 36c0 6-6 10-12 10s-12-4-12-10 6-10 12-10c3 0 6 1 8 3" />
                              <path d="M36 14c3 6 10 10 16 10" />
                            </svg>
                          ),
                          href: "https://tiktok.com/@twojprofil",
                          label: "TikTok",
                        },
                      ].map(({ Icon, href, label }, i) => {
                        const baseBg = isDark ? P("charcoal") : P("white");
                        const baseColor = isDark ? P("white") : P("black");
                        return (
                          <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="group w-full aspect-square flex items-center justify-center transition-transform duration-300 ease-out focus-visible:outline-none"
                            style={{
                              border: `3px solid ${isDark ? P("white") : P("black")}`,
                              background: baseBg,
                              color: baseColor,
                              position: 'relative',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget;
                              el.style.background = P("amaranth");
                              el.style.color = P("white");
                              el.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget;
                              el.style.background = baseBg;
                              el.style.color = baseColor;
                              el.style.transform = 'translateY(0)';
                            }}
                          >
                            <Icon className="h-8 w-8 md:h-6 md:w-6" />
                          </a>
                        );
                      })}
                    </div>

                    {/* QR po prawej - ukryty na mobile */}
                    <div className="hidden md:block col-span-2 justify-self-end text-center">
                      <div
                        className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto"
                        style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("white") }}
                      >
                        <img src={QR_DATA_URI} alt="QR" className="w-[85%] h-[85%] object-contain" />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};