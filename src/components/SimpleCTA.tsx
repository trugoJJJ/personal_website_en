import { Link } from "react-router-dom";

// Fikcyjny hook i18n na potrzeby demonstracji
const useI18n = () => ({
  t: (key: string) => {
    const translations: { [key: string]: string } = {
      "portfolio.cta.contact": "Pobierz CV",
      "portfolio.cta.contact.mobile": "Pobierz CV",
    };
    return translations[key] || key;
  },
});

export const SimpleCTA = () => {
  const { t } = useI18n();

  return (
    <>
      <style>{`
        /* --- Wrapper dla przycisku --- */
        .cta-button-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        /* --- Style dla nowego, prostego przycisku --- */
        .simple-cta-button {
          padding: 0rem 6rem; /* ✅ DODANY PADDING */
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: 1px solid #000000;
          transition: all 0.3s ease;
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          cursor: pointer;
        }
        .simple-cta-text {
          color: #000000;
          pointer-events: none;
          transition: color 0.3s ease;
        }

        /* --- Style dla Dark Mode --- */
        .dark .simple-cta-button {
            background-color: transparent;
            border-color: #ffffff;
        }
        .dark .simple-cta-text {
            color: #ffffff;
        }
        
        /* --- Media query dla Desktopa (urządzenia z kursorem) --- */
        @media (hover: hover) and (min-width: 768px) {
          .simple-cta-button {
            border-radius: 9999px;
            min-height: 220px;
          }
          .simple-cta-button:hover {
            transform: scale(1.02);
            background-color: #000000;
          }
          .simple-cta-button:hover .simple-cta-text {
            color: #ffffff;
          }
          .dark .simple-cta-button:hover {
            background-color: #ffffff;
          }
          .dark .simple-cta-button:hover .simple-cta-text {
            color: #000000;
          }
        }
        
        /* --- Media query dla Mobile/Tablet (urządzenia dotykowe lub wąskie ekrany) --- */
        @media (hover: none), (max-width: 767px) {
            .simple-cta-button {
              width: 100%;
              min-height: 180px;
              border-radius: 9999px;
              text-align: center;
            }
            .simple-cta-text {
              font-size: 1.5rem;
              line-height: 1.2;
            }
            .simple-cta-button::before, .simple-cta-button::after {
                display: none;
            }
            .dark .simple-cta-button::before,
            .dark .simple-cta-button::after {
                display: none;
            }
        }
      `}</style>
      
      <section aria-labelledby="simple-cta">
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
      </section>
    </>
  );
};