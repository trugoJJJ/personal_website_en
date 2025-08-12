import { Button } from "@/components/ui/button";
import { useI18n, Locale } from "@/contexts/i18n";

export const LanguageSwitch = () => {
  const { locale, setLocale } = useI18n();

  const toggle = () => setLocale(locale === "pl" ? ("en" as Locale) : ("pl" as Locale));

  return (
    <div className="inline-flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={toggle} aria-label="Switch language">
        {locale === "pl" ? "PL" : "EN"}
      </Button>
    </div>
  );
};

export default LanguageSwitch;
