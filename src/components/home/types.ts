/* ================== DANE / TYPY ================== */
export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags?: string[];
  metrics?: string;
};

export const CATEGORIES = ["Projekty kreatywne", "Projekty sprzedażowe"] as const;

export const portfolioProjects: Omit<Project, 'id'>[] = [
  {
    title: 'Kompleksowa obsługa SEO dla producenta drzwi zewnętrznych',
    description:
      'Optymalizacja techniczna → content → link building → artykuły → analityka → raporty.',
    image: '/seo.png',
    categories: ['Projekty sprzedażowe'],
    tags: ['SEO', 'Content', 'Link building'],
    metrics: '+3 mln wyświetleń'
  },
  {
    title: 'Portfolio płatnych kampanii reklamowych',
    description: 'Google Ads → Meta Ads → LinkedIn Ads.',
    image: '/google_maps.png',
    categories: ['Projekty sprzedażowe'],
    tags: ['PPC', 'Performance', 'ROAS'],
    metrics: 'Wzrost zapytań 40%'
  },
  {
    title: 'System śledzenia danych o odwiedzających',
    description: 'GA4 → GSC → Ads → Meta → GTM (pełny pomiar).',
    image: '/gpt_seo.png',
    categories: ['Projekty kreatywne'],
    tags: ['GA4', 'GTM', 'Attribution'],
    metrics: '150 tys. konwersji'
  },
  {
    title: 'Szablon animacji portfolio',
    description: '2D Motion (AE) – prezentacja produktu/usługi.',
    image: '/pierwszy_komputer.png',
    categories: ['Projekty kreatywne'],
    tags: ['After Effects', '2D', 'Template'],
    metrics: '50 tys. wyświetleń'
  },
];

export const createSixProjects = (projects: Omit<Project, 'id'>[]): Project[] => {
  const sixProjects: Project[] = [];
  const projectPool = [...projects, ...projects.slice(0, 2)];
  for (let i = 0; i < projectPool.length; i++) {
    const projectTemplate = projectPool[i];
    sixProjects.push({ ...projectTemplate, id: `${projectTemplate.title}-${i}` });
  }
  return sixProjects;
};

export type BrushType = "brush" | "spray" | "cursor";