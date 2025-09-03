"use client";

import React from "react";
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
              <h3 className="text-2xl md:text-3xl font-extrabold text-left">Cześć, nazywam się Adam</h3>
              <p className="text-base md:text-lg">
                Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych.
              </p>
              <p className="text-base md:text-lg">
                Przez ostatnie 5&nbsp;lat rozwijałem się w&nbsp;marketingu –&nbsp;od grafika,&nbsp;przez specjalistę SEO,&nbsp;po managera zespołu.
                Realizowałem długoterminowe strategie marketingowe dla różnych branż (IT,&nbsp;produkcyjna,&nbsp;medyczna,&nbsp;krypto). Zarządzałem zespołem i&nbsp;wspierałem projekty IT oraz marketingowe dla największych marek w&nbsp;Polsce.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {[
                { value: "+5 lat", label: "Doświadczenia w marketingu internetowym" },
                { value: "+100", label: "Zrealizowanych projektów dla różnych branż" },
                { value: "100%", label: "Odpowiedzialności za powierzone zadania" },
                { value: ">847 km", label: "Zapisanych w postach i wpisach blogowych" },
              ].map((s) => (
                <div key={s.label} className="p-4 md:p-6 text-left"
                     style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: P("ecru"), color: isDark ? P("white") : P("black") }}>
                  <div className="text-2xl md:text-3xl font-extrabold">{s.value}</div>
                  <div className="text-xs md:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Kontakt (ikony + QR) */}
            <div className="p-10"
                 style={{ background: P("butter"), color: isDark ? P("white") : P("black"), border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}` }}>
              {(() => {
                // Minimalistyczny QR kod bez dodatkowego tła
                const QR_DATA_URI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://linktr.ee/trugojjj')}&format=png&color=${isDark ? 'ffffff' : '000000'}&bgcolor=${isDark ? '000000' : 'ffffff'}&ecc=L&margin=0`;

                return (
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                    {/* Ikony - full width na mobile, 3 kolumny na desktop */}
                    <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-4 md:gap-6">
                      {[
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          ),
                          href: "https://www.linkedin.com/in/admagalecki/",
                          label: "LinkedIn",
                        },
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
                              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                          ),
                          href: "https://www.tiktok.com/@firma_galecka?is_from_webapp=1&sender_device=pc",
                          label: "TikTok",
                        },
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          ),
                          href: "https://github.com/trugoJJJ",
                          label: "GitHub",
                        },
                        {
                          Icon: (props: any) => (
                            <svg viewBox="0 0 242.5 121" width="20" height="20" fill="currentColor" {...props}>
                              <g>
                                <path d="M110.5,45.8H78c-0.2-2.7-0.8-5.1-1.8-7.3s-2.3-4.1-4-5.7c-1.7-1.6-3.8-2.8-6.2-3.7c-2.4-0.9-5.2-1.3-8.2-1.3
                                  c-5.4,0-9.9,1.3-13.6,3.9c-3.7,2.6-6.5,6.3-8.4,11.2c-1.9,4.9-2.8,10.7-2.8,17.5c0,7.2,1,13.2,2.9,18.1c1.9,4.9,4.7,8.5,8.4,10.9
                                  c3.7,2.4,8.1,3.7,13.3,3.7c3,0,5.6-0.4,7.9-1.1c2.3-0.7,4.4-1.8,6.1-3.3c1.7-1.4,3.1-3.1,4.2-5.1c1.1-2,1.8-4.3,2.2-6.8l32.4,0.2
                                  c-0.4,5-1.8,10.1-4.2,15.2c-2.4,5.2-5.8,9.9-10.3,14.3c-4.4,4.4-9.9,7.9-16.4,10.5c-6.5,2.6-14.1,4-22.7,4c-10.8,0-20.5-2.3-29.1-7
                                  c-8.6-4.6-15.3-11.5-20.3-20.5c-5-9-7.4-20-7.4-33.1c0-13.1,2.5-24.2,7.6-33.2c5.1-9,11.9-15.8,20.5-20.4C36.7,2.3,46.3,0,56.8,0
                                  c7.4,0,14.3,1,20.5,3c6.3,2,11.7,5,16.5,8.9c4.7,3.9,8.5,8.7,11.4,14.4C108.1,32,109.8,38.5,110.5,45.8z"/>
                                <path d="M157.2,1.6l24.2,83.1h0.9l24.2-83.1h36.1l-38.9,117.8h-43.7L121,1.6H157.2z"/>
                              </g>
                            </svg>
                          ),
                          href: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                          label: "CV",
                        },
                        {
                          Icon: (props: any) => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
                              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                            </svg>
                          ),
                          href: "https://www.behance.net/adamgacki1",
                          label: "Behance",
                        },
                        {
                          Icon: (props: any) => (
                            <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
                              <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"/>
                            </svg>
                          ),
                          href: "https://www.upwork.com/freelancers/~0170962b0b448c7ac5?mp_source=share",
                          label: "UpWork",
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
                      <a
                        href="https://linktr.ee/trugojjj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mx-auto transition-transform duration-300 ease-out hover:scale-105"
                        style={{ border: `${isDark ? '1px' : '3px'} solid ${isDark ? P("white") : P("black")}`, background: isDark ? P("black") : P("white") }}
                        aria-label="Linktree - wszystkie linki"
                      >
                        <img src={QR_DATA_URI} alt="QR Code - linktr.ee/trugojjj" className="w-[85%] h-[85%] object-contain" />
                      </a>
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