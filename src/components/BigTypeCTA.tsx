import { Link } from "react-router-dom";
import { useI18n } from "@/contexts/i18n";

export const BigTypeCTA = () => {
  const { t } = useI18n();

  return (
    <section aria-labelledby="big-type-cta">
      <div className="container">
        <Link to="/portfolio" className="block focus:outline-none" aria-label={t("portfolio.cta.more")}>
          <div className="rounded-full bg-foreground text-background px-6 py-10 md:py-16 shadow-card hover-scale">
            <h2 id="big-type-cta" className="text-center">
              {t("portfolio.cta.more")}
            </h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BigTypeCTA;
