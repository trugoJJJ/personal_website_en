"use client";

import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Locale = "pl" | "en";

type Dict = Record<string, string>;

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const PL: Dict = {
  "nav.portfolio": "Portfolio",
  "nav.about": "O mnie",
  "nav.experience": "Doświadczenie",
  "nav.skills": "Umiejętności",
  "nav.articles": "Artykuły",
  "nav.contact": "Kontakt",
  "nav.menu": "Menu",

  "hero.placeholder": "Tutaj będzie wstawiona animacja Rive",

  "portfolio.combined.title": "Wybrane projekty i portfolio graficzne",
  "portfolio.combined.subtitle": "Przegląd realizacji — przefiltruj według kategorii.",
  "portfolio.cta.more": "ZOBACZ WIĘCEJ PRAC",

  "filters.animations": "Animacje",
  "filters.design": "Designe",
  "filters.team": "Zarządzanie zespołem",
  "filters.campaigns": "Kampanie reklamowe",

  "about.tabs.about": "O mnie",
  "about.tabs.education": "Wykształcenie i certyfikaty",
  "about.tabs.experience": "Doświadczenie",
  "about.tabs.skills": "Umiejętności i Tech Stack",
  "about.cv": "POBIERZ CV",

  "articles.title": "Najnowsze Artykuły",
  "articles.subtitle": "Dzielę się wiedzą i insights z branży digital marketingu. Praktyczne porady, case studies i trendy, które warto znać.",
  "articles.readMore": "Czytaj więcej",
  "articles.viewAll": "Zobacz wszystkie artykuły",
  "articles.newsletter.title": "Bądź na bieżąco",
  "articles.newsletter.cta": "Zapisz się do newslettera",
};

const EN: Dict = {
  "nav.portfolio": "Portfolio",
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.skills": "Skills",
  "nav.articles": "Articles",
  "nav.contact": "Contact",
  "nav.menu": "Menu",

  "hero.placeholder": "Rive animation placeholder",

  "portfolio.combined.title": "Selected projects and visual portfolio",
  "portfolio.combined.subtitle": "Browse the work — filter by category.",
  "portfolio.cta.more": "VIEW MORE WORK",

  "filters.animations": "Animations",
  "filters.design": "Design",
  "filters.team": "Team management",
  "filters.campaigns": "Advertising campaigns",

  "about.tabs.about": "About me",
  "about.tabs.education": "Education & Certificates",
  "about.tabs.experience": "Experience",
  "about.tabs.skills": "Skills & Tech Stack",
  "about.cv": "DOWNLOAD CV",

  "articles.title": "Latest Articles",
  "articles.subtitle": "I share knowledge and insights from digital marketing. Practical tips, case studies and trends worth knowing.",
  "articles.readMore": "Read more",
  "articles.viewAll": "View all articles",
  "articles.newsletter.title": "Stay up to date",
  "articles.newsletter.cta": "Subscribe to newsletter",
};

const DICTS: Record<Locale, Dict> = { pl: PL, en: EN };

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("pl");
  const dict = DICTS[locale];

  const value = useMemo<I18nContextType>(
    () => ({
      locale,
      setLocale,
      t: (key) => dict[key] ?? key,
    }),
    [locale, dict]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
