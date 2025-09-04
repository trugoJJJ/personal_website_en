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

export const CATEGORIES = ["Creative Projects", "Sales Projects"] as const;

export const portfolioProjects: Omit<Project, 'id'>[] = [
  {
    title: 'SEO for external door manufacturer',
    description: 'Technical optimization → content → link building → articles → analytics → reports.',
    image: '/seo.png',
    categories: ['Sales Projects'],
    tags: ['SEO', 'Content', 'Link building'],
    metrics: '+3M views'
  },
  {
    title: 'Portfolio of paid advertising campaigns',
    description: 'Google Ads → Meta Ads → LinkedIn Ads.',
    image: '/google_maps.png',
    categories: ['Sales Projects'],
    tags: ['PPC', 'Performance', 'ROAS'],
    metrics: '40% increase in queries'
  },
  {
    title: 'Data tracking system for visitors',
    description: 'GA4 → GSC → Ads → Meta → GTM (full measurement).',
    image: '/gpt_seo.png',
    categories: ['Creative Projects'],
    tags: ['GA4', 'GTM', 'Attribution'],
    metrics: '150 tys. konwersji'
  },
  {
    title: 'Szablon animacji portfolio',
    description: '2D Motion (AE) – product/service presentation.',
    image: '/pierwszy_komputer.png',
    categories: ['Creative Projects'],
    tags: ['After Effects', '2D', 'Template'],
    metrics: '50K views'
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