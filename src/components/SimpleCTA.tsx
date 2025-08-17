import { Link } from "react-router-dom";

// Fikcyjny hook i18n na potrzeby demonstracji
const useI18n = () => ({
  t: (key: string) => {
    const translations: { [key:string]: string } = {
      "portfolio.cta.contact": "Zobacz wszystkie projekty",
      "portfolio.cta.contact.mobile": "Wszystkie<br/>projekty",
    };
    return translations[key] || key;
  },
});

export const SimpleCTA = () => {
  const { t } = useI18n();

  return (
    <>
      <style>{`
        /* --- Style dla obu przycisków --- */
        .cta-button-wrapper { 
          position: relative; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          width: 100%; 
        }

        /* --- Style dla nowego, prostego przycisku --- */
        .simple-cta-button {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ffffff;
          border: 1px solid #000000;
          transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          cursor: pointer;
        }
        .simple-cta-text {
          color: #000000;
          pointer-events: none;
          transition: color 0.3s ease;
        }

        /* --- DODANE STYLE DLA DARK MODE --- */
        .dark .simple-cta-button {
            background-color: #000000;
            border-color: #ffffff;
        }
        .dark .simple-cta-text {
            color: #ffffff;
        }
        .dark .simple-cta-button::before,
        .dark .simple-cta-button::after {
            border-color: #ffffff;
        }
        /* --- KONIEC STYLI DLA DARK MODE --- */

        @media (hover: hover) and (min-width: 769px) { 
          .simple-cta-button { 
            width: 100%; 
            border-radius: 9999px; 
            min-height: 140px;
          } 
          .simple-cta-button:hover { 
            transform: scale(1.02); 
          } 
        }
        
        @media (hover: none), (max-width: 768px) { 
            .simple-cta-button { 
              width: 200px; 
              height: 200px; 
              border-radius: 50%; 
              text-align: center; 
            } 
            .simple-cta-text { font-size: 1.5rem; line-height: 1.2; } 
            
            .simple-cta-button::before, .simple-cta-button::after { 
                content: ''; 
                position: absolute; 
                top: 50%; 
                left: 50%; 
                transform: translate(-50%, -50%); 
                width: 100%;
                height: 100%;
                border: 1px solid #000000;
                border-radius: 50%; 
                animation: mobile-pulse 5s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94); 
                opacity: 0; 
                pointer-events: none; 
                z-index: -1;
            } 
            .simple-cta-button::after { 
                animation-delay: 2.5s; 
            } 
        }

        @keyframes mobile-pulse { 
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; } 
            100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; } 
        }
      `}</style>
      
      <section aria-labelledby="simple-cta">
        <div className="container mx-auto">
          <div className="cta-button-wrapper">
            <Link
              to="/kontakt"
              className="simple-cta-button"
              aria-label={t("portfolio.cta.contact")}
            >
              <h2
                id="simple-cta"
                className="simple-cta-text text-center text-4xl md:text-5xl lg:text-6xl font-regular tracking-tighter"
                dangerouslySetInnerHTML={{
                  __html:
                    window.innerWidth > 768
                      ? t("portfolio.cta.contact")
                      : t("portfolio.cta.contact.mobile"),
                }}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};