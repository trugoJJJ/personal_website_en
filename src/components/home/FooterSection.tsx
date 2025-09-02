"use client";

import { usePalette } from "./hooks";
import { Mail, Linkedin, Github, MessageCircle, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import { ClientOnlyWrapper } from "../ClientOnlyWrapper";

// TikTok icon component
const TikTokIcon = (props: any) => (
  <svg viewBox="0 0 64 64" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" {...props}>
    <path d="M36 8v28" />
    <path d="M36 36c0 6-6 10-12 10s-12-4-12-10 6-10 12-10c3 0 6 1 8 3" />
    <path d="M36 14c3 6 10 10 16 10" />
  </svg>
);

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
                  { href: 'mailto:agalecki.work@gmail.com', label: 'Mail', Icon: Mail },
                  { href: 'https://linkedin.com/in/adamgalecki', label: 'LinkedIn', Icon: Linkedin, ext: true },
                  { href: 'https://github.com', label: 'GitHub', Icon: Github, ext: true },
                  { href: '#', label: 'Messenger', Icon: MessageCircle },
                  { href: '#', label: 'Instagram', Icon: Heart },
                  { href: 'https://tiktok.com/@twojprofil', label: 'TikTok', ext: true, Icon: TikTokIcon },
                ].map(({ href, label, Icon, ext }, i) => (
                  <a
                    key={i}
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noreferrer nofollow' } : {})}
                    className={`w-8 h-8 flex items-center justify-center transition ${iconHover}`}
                    style={{ border: `1px solid ${borderColor}`, color: textColor }}
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
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
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-8 h-8 border border-black bg-white"></div>
                  ))}
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