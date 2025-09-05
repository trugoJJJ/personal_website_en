"use client";

import { useState, useEffect } from "react";
import { usePalette } from "./home/hooks";

interface CVViewerProps {
  children: React.ReactNode;
}

export const CVViewer = ({ children }: CVViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDark, P } = usePalette();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Tablet i mobile otwierają w nowej karcie
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/adam_galecki_cv.pdf';
    link.download = 'Adam_Galecki_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewPDF = () => {
    window.open('/adam_galecki_cv.pdf', '_blank');
  };

  const handleClick = () => {
    if (isMobile) {
      // Mobile i tablet - otwórz w nowej karcie
      handleViewPDF();
    } else {
      // Desktop - otwórz popup
      setIsOpen(true);
    }
  };

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>

      {isOpen && !isMobile && ( // Tylko na desktop (>=1024px)
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-6xl h-[98vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div 
              className="flex items-center justify-between p-2 border-b"
              style={{ 
                backgroundColor: isDark ? P("charcoal") : P("white"),
                borderColor: isDark ? P("white") : P("black")
              }}
            >
              <h2 
                className="text-base font-bold"
                style={{ color: isDark ? P("white") : P("black") }}
              >
                CV - Adam Gałęcki
              </h2>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleDownload}
                  className="px-2 py-1 text-xs font-bold transition-colors"
                  style={{ 
                    border: `1px solid ${isDark ? P("white") : P("black")}`, 
                    background: P("ecru"), 
                    color: isDark ? P("white") : P("black") 
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = P("amaranth");
                    (e.currentTarget as HTMLButtonElement).style.color = P("white");
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = P("ecru");
                    (e.currentTarget as HTMLButtonElement).style.color = isDark ? P("white") : P("black");
                  }}
                >
                  Pobierz
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 flex items-center justify-center text-sm font-bold transition-colors"
                  style={{ 
                    border: `1px solid ${isDark ? P("white") : P("black")}`, 
                    background: P("ecru"), 
                    color: isDark ? P("white") : P("black") 
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = P("amaranth");
                    (e.currentTarget as HTMLButtonElement).style.color = P("white");
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = P("ecru");
                    (e.currentTarget as HTMLButtonElement).style.color = isDark ? P("white") : P("black");
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="h-full">
              <iframe
                src="/adam_galecki_cv.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                className="w-full h-full border-0"
                title="CV - Adam Gałęcki"
                style={{ minHeight: 'calc(100% - 40px)' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
