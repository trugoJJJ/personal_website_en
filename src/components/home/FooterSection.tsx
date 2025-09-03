"use client";

import { usePalette } from "./hooks";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { ClientOnlyWrapper } from "../ClientOnlyWrapper";

const FooterSectionContent = () => {
  const { isDark, P } = usePalette();
  const textColor = isDark ? '#b5b5b5' : '#686a6c';
  const borderColor = isDark ? P('white') : P('black');
  const iconHover = isDark ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white';
  const btnHover = iconHover; // reuse

  const handleCopyToClipboard = (text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <footer
      style={{
        background: isDark ? P('charcoal') : P('white'),
        borderTop: `3px solid ${borderColor}`,
        color: textColor,
      }}
    >
      <div className="w-full px-6">
        <div className="pt-8 md:pt-18 pb-6 md:pb-6">
          <div className="py-6 grid gap-6 md:gap-4 md:grid-cols-4 md:items-center items-start">
            {/* Kolumna 1 - Firma Gałęcka */}
            <div className="flex flex-col items-center text-center md:relative md:pr-8 mb-6 md:mb-0">
              <h3 className="text-base font-extrabold mb-4" style={{ color: textColor }}>Adam Gałęcki – Firma Gałęcka</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  {
                    Icon: (props: any) => (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                    href: "https://www.linkedin.com/in/admagalecki/",
                    label: "LinkedIn",
                    ext: true
                  },
                  {
                    Icon: (props: any) => (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    ),
                    href: "https://www.tiktok.com/@firma_galecka?is_from_webapp=1&sender_device=pc",
                    label: "TikTok",
                    ext: true
                  },
                  {
                    Icon: (props: any) => (
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    href: "https://github.com/trugoJJJ",
                    label: "GitHub",
                    ext: true
                  },
                  {
                    Icon: (props: any) => (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                      </svg>
                    ),
                    href: "https://www.behance.net/adamgacki1",
                    label: "Behance",
                    ext: true
                  },
                  {
                    Icon: (props: any) => (
                      <svg fill="currentColor" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
                        <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"/>
                      </svg>
                    ),
                    href: "https://www.upwork.com/freelancers/~0170962b0b448c7ac5?mp_source=share",
                    label: "UpWork",
                    ext: true
                  },
                  {
                    Icon: (props: any) => (
                      <span className="text-[10px] font-black" {...props}>
                        CV
                      </span>
                    ),
                    href: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                    label: "CV",
                    ext: true
                  },
                ].map(({ href, label, Icon, ext }, i) => (
                  <a
                    key={i}
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noreferrer nofollow' } : {})}
                    className={`w-8 h-8 flex items-center justify-center transition ${iconHover}`}
                    style={{ border: `1px solid ${borderColor}`, color: textColor }}
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
              {/* Pionowy separator po prawej stronie tylko na desktop */}
              <div 
                className="hidden md:block absolute right-0 top-0 bottom-0 w-px"
                style={{ background: borderColor }}
              />
            </div>
            
            {/* Kolumna 2 - NIP */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-1 md:mb-0">
              <div className="inline-flex items-center gap-3">
                <span style={{ color: textColor }}>NIP: 9462752489</span>
                <ClientOnlyWrapper>
                  <button
                    onClick={() => handleCopyToClipboard('9462752489')}
                    className={`px-2 py-0.5 text-[10px] font-extrabold tracking-wide transition ${btnHover}`}
                    style={{ border: `1px solid ${borderColor}`, color: textColor }}
                    aria-label="Kopiuj NIP"
                  >Kopiuj</button>
                </ClientOnlyWrapper>
              </div>
            </div>
            
            {/* Kolumna 3 - REGON */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-1 md:mb-0">
              <div className="inline-flex items-center gap-3">
                <span style={{ color: textColor }}>REGON: 541404566</span>
                <ClientOnlyWrapper>
                  <button
                    onClick={() => handleCopyToClipboard('541404566')}
                    className={`px-2 py-0.5 text-[10px] font-extrabold tracking-wide transition ${btnHover}`}
                    style={{ border: `1px solid ${borderColor}`, color: textColor }}
                    aria-label="Kopiuj REGON"
                  >Kopiuj</button>
                </ClientOnlyWrapper>
              </div>
            </div>
            
            {/* Kolumna 4 - Lokalizacja */}
            <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed">
              <div className="flex items-center gap-2" style={{ color: textColor }}>
                <MapPin className="h-4 w-4" />
                <span>Lublin, Polska</span>
              </div>
            </div>
          </div>
          
          {/* Copyright i Polityka Prywatności w jednej linii */}
          <div className="pt-8 pb-8 md:pb-4 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-semibold tracking-wide" style={{ opacity: 0.45, color: textColor }}>
              <span>© Firma Gałęcka 2025</span>
              <div 
                className="hidden sm:block w-px h-4"
                style={{ background: textColor, opacity: 0.3 }}
              />
              <Link 
                href="/polityka-prywatnosci"
                className="hover:opacity-70 transition-opacity"
                style={{ color: textColor }}
              >
                Polityka Prywatności
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const FooterSection = () => {
  return (
    <ClientOnlyWrapper fallback={
      <footer className="bg-white border-t-3 border-black text-[#686a6c]">
        <div className="w-full px-6">
          <div className="pt-8 md:pt-18 pb-6 md:pb-6">
            <div className="py-6 grid gap-3 md:gap-1 md:grid-cols-4 md:items-center items-start">
              <div className="flex flex-col items-center text-center md:relative md:pr-8 mb-4 md:mb-0">
                <h3 className="text-base font-extrabold mb-4 text-[#686a6c]">Adam Gałęcki – Firma Gałęcka</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="https://www.linkedin.com/in/admagalecki/" target="_blank" rel="noreferrer" className="w-8 h-8 border border-black bg-white flex items-center justify-center" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="#000">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@firma_galecka" target="_blank" rel="noreferrer" className="w-8 h-8 border border-black bg-white flex items-center justify-center" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="#000">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/trugoJJJ" target="_blank" rel="noreferrer" className="w-8 h-8 border border-black bg-white flex items-center justify-center" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="#000">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.behance.net/adamgacki1" target="_blank" rel="noreferrer" className="w-8 h-8 border border-black bg-white flex items-center justify-center" aria-label="Behance">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="#000">
                      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                    </svg>
                  </a>
                  <a href="https://www.upwork.com/freelancers/~0170962b0b448c7ac5" target="_blank" rel="noreferrer" className="w-8 h-8 border border-black bg-white flex items-center justify-center" aria-label="UpWork">
                    <svg viewBox="0 0 32 32" width="12" height="12" fill="#000">
                      <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z"/>
                    </svg>
                  </a>
                  <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noreferrer" className="w-8 h-8 border border-black bg-white flex items-center justify-center text-[8px] font-black" aria-label="CV">
                    CV
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-3 md:mb-0">
                <div className="inline-flex items-center gap-3">
                  <span className="text-[#686a6c]">NIP: 9462752489</span>
                  <div className="px-2 py-0.5 text-[10px] font-extrabold tracking-wide border border-black bg-white text-black">Kopiuj</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed mb-3 md:mb-0">
                <div className="inline-flex items-center gap-3">
                  <span className="text-[#686a6c]">REGON: 541404566</span>
                  <div className="px-2 py-0.5 text-[10px] font-extrabold tracking-wide border border-black bg-white text-black">Kopiuj</div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center font-bold text-sm leading-relaxed">
                <div className="flex items-center gap-2 text-[#686a6c]">
                  <div className="w-4 h-4 border border-black bg-white"></div>
                  <span>Lublin, Polska</span>
                </div>
              </div>
            </div>
            <div className="pt-8 pb-8 md:pb-4 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-semibold tracking-wide opacity-45 text-[#686a6c]">
                <span>© Firma Gałęcka 2025</span>
                <div className="hidden sm:block w-px h-4 bg-[#686a6c] opacity-30"></div>
                <a href="/polityka-prywatnosci" className="hover:opacity-70 transition-opacity text-[#686a6c]">
                  Polityka Prywatności
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    }>
      <FooterSectionContent />
    </ClientOnlyWrapper>
  );
};