"use client";

import React from "react";
import { Mail, MessageCircle, Calendar as CalendarIcon } from "lucide-react";
import { usePalette } from "./hooks";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";

const SectionHeading = ({ children, id }: { children: React.ReactNode, id?: string }) => {
    const { isDark, P } = usePalette();
    return (
      <header id={id} className="mt-4 md:mt-8 mb-12 md:mb-24">
        <h2
          className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]"
          style={{ color: isDark ? P("white") : P("black") }}
        >
          {children}
        </h2>
      </header>
    );
  };
  
  const CTASectionContent = () => {
    const { isDark, P } = usePalette();
    const tiles = [
      {
        title: "Email",
        text: "Odpowiadam zwykle w ciągu 24h",
        href: "mailto:agalecki.work@gmail.com",
        display: "agalecki.work@gmail.com",
        Icon: Mail,
      },
      {
        title: "LinkedIn",
        text: "Połączmy się i porozmawiajmy",
        href: "https://www.linkedin.com/in/admagalecki/",
        display: "linkedin.com/in/adamgalecki",
        Icon: MessageCircle, // unchanged original Icon reference
        external: true,
      },
      {
        title: "Calendly",
        text: "Wybierz dogodny termin na rozmowę",
        href: "https://calendly.com/agalecki-work",
        display: "Zarezerwuj spotkanie",
        Icon: CalendarIcon,
      },
    ];

    return (
      <section className="py-24 md:py-36" id="contact"
               style={{ background: P("ecru"), borderTop: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
        <div className="container mx-auto max-w-6xl">
          <SectionHeading>Kontakt</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {tiles.map((t, i) => {
              const baseBg = isDark ? P("charcoal") : P("white");
              return (
                <a
                  key={i}
                  href={t.href}
                  {...(t.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="relative p-8 block focus-visible:outline-none transition-transform duration-200 hover:scale-[1.02]"
                  style={{
                    border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                    background: baseBg,
                    color: isDark ? P("white") : P("charcoal"),
                    textDecoration: 'none',
                    boxShadow: `${isDark ? '1px 1px' : '4px 4px'} 0 0 ${isDark ? P("white") : P("black")}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = P("butter");
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = baseBg;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Boczny pasek */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 10,
                      height: '100%',
                      background: P("butter"),
                      borderRight: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`,
                    }}
                  />
                  {/* Numer */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: -12,
                      right: 10,
                      background: P("alloy"),
                      color: P("white"),
                      border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`,
                      fontSize: 10,
                      padding: '2px 6px',
                      letterSpacing: 0.5,
                      fontWeight: 800,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center mb-4"
                         style={{ border: `${isDark ? '1px' : '2px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("charcoal") : P("ecru") }}>
                      <t.Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-extrabold mb-2">{t.title}</h3>
                    <p className="text-sm mb-4" style={{ opacity: 0.85 }}>{t.text}</p>
                    <span className="font-extrabold underline break-all">{t.display}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  export const CTASection = () => {
    return (
      <ClientOnlyWrapper fallback={
        <section className="py-24 md:py-36 bg-[#FAF6EE] border-t-3 border-black" id="contact">
          <div className="container mx-auto max-w-6xl">
            <header className="mt-4 md:mt-8 mb-12 md:mb-24">
              <h2 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
                Kontakt
              </h2>
            </header>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Email", text: "Odpowiadam zwykle w ciągu 24h", display: "agalecki.work@gmail.com" },
                { title: "LinkedIn", text: "Połączmy się i porozmawiajmy", display: "linkedin.com/in/adamgalecki" },
                { title: "Calendly", text: "Wybierz dogodny termin", display: "Zarezerwuj spotkanie" }
              ].map((t, i) => (
                <div
                  key={i}
                  className="relative p-8 block border-3 border-black bg-white text-[#2E2217]"
                  style={{
                    boxShadow: "4px 4px 0 0 #000000",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 10,
                      height: '100%',
                      background: "#D8A23A",
                      borderRight: "3px solid #000000",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: -12,
                      right: 10,
                      background: "#736134",
                      color: "#FFFFFF",
                      border: "2px solid #000000",
                      fontSize: 10,
                      padding: '2px 6px',
                      letterSpacing: 0.5,
                      fontWeight: 800,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center mb-4 border-2 border-black bg-[#FAF6EE]">
                      <div className="w-7 h-7 border border-black bg-white"></div>
                    </div>
                    <h3 className="text-lg font-extrabold mb-2">{t.title}</h3>
                    <p className="text-sm mb-4 opacity-85">{t.text}</p>
                    <span className="font-extrabold underline break-all">{t.display}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      }>
        <CTASectionContent />
      </ClientOnlyWrapper>
    );
  };

  export { CTASectionContent };