"use client";

import { usePalette } from "@/components/home/hooks";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

const PageLoaderContent = () => {
  const { isDark, P } = usePalette();

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[9998] h-1"
      style={{ background: isDark ? P("charcoal") : P("white") }}
    >
      <div 
        className="h-full transition-all duration-300 ease-out"
        style={{ 
          background: P("amaranth"),
          width: '0%',
          animation: 'pageLoader 2s ease-in-out infinite'
        }}
      />
      
      <style jsx>{`
        @keyframes pageLoader {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <ClientOnlyWrapper>
      <PageLoaderContent />
    </ClientOnlyWrapper>
  );
};

export default PageLoader;
