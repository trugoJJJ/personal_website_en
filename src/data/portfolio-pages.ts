import { articles } from "@/data/articles";

export interface PortfolioPage {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags: string[];
  metrics: string;
  externalLink?: string;
  featured: boolean; // Czy pokazywać na stronie głównej
  order: number; // Kolejność na stronie głównej
}

// Automatyczna konfiguracja podstron portfolio
export const portfolioPages: PortfolioPage[] = [
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO dla producenta drzwi zewnętrznych',
    description: 'optymalizacja techniczna → copywriting → link building → artykuły → analityka → raporty.',
    image: articles?.[0]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty sprzedażowe'],
    tags: ['SEO', 'Content', 'Link building'],
    metrics: '+3 mln wyświetleń',
    featured: true,
    order: 1
  },
  {
    id: 'ppc',
    slug: 'ppc',
    title: 'Płatne kampanie reklamowe PPC',
    description: 'Google Ads → Meta Ads → LinkedIn Ads.',
    image: articles?.[1]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty sprzedażowe'],
    tags: ['PPC', 'Performance', 'ROAS'],
    metrics: '40% wzrost zapytań',
    featured: true,
    order: 2
  },
  {
    id: 'analytics',
    slug: 'analytics',
    title: 'System śledzenia danych o odwiedzających',
    description: 'GA4 → GSC → Ads → Meta → GTM (pełny pomiar).',
    image: articles?.[2]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty kreatywne'],
    tags: ['GA4', 'GTM', 'Attribution'],
    metrics: '150 tys. konwersji',
    featured: true,
    order: 3
  },
  {
    id: 'animation',
    slug: 'animation',
    title: 'Szablon animacji portfolio',
    description: '2D Motion (AE) – prezentacja produktu/usługi.',
    image: articles?.[0]?.image || 'https://placehold.co/800x500',
    categories: ['Projekty kreatywne'],
    tags: ['After Effects', '2D', 'Template'],
    metrics: '50 tys. wyświetleń',
    externalLink: 'https://www.behance.net/gallery/199466415/Animationforthe-software-dvelopment-company-portfolio',
    featured: true,
    order: 4
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-commerce Growth Campaign',
    description: 'Kampania marketingowa, która zwiększyła sprzedaż o 340% w 6 miesięcy',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    categories: ['Projekty sprzedażowe'],
    tags: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Analytics'],
    metrics: '+340% sprzedaż',
    featured: false,
    order: 5
  },
  {
    id: 'saas',
    slug: 'saas',
    title: 'SaaS Landing Page Optimization',
    description: 'Redesign i optymalizacja strony głównej, która podwoiła konwersję',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    categories: ['Projekty kreatywne'],
    tags: ['A/B Testing', 'UX/UI', 'Analytics', 'Webflow'],
    metrics: '+127% konwersja',
    featured: false,
    order: 6
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Content Marketing Automation',
    description: 'System automatyzacji content marketingu z wykorzystaniem AI',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
    categories: ['Projekty kreatywne'],
    tags: ['AI Tools', 'Automation', 'Content Marketing', 'Social Media'],
    metrics: '70% oszczędność czasu',
    featured: false,
    order: 7
  },
  {
    id: 'attribution',
    slug: 'attribution',
    title: 'Multi-channel Attribution Model',
    description: 'Zaawansowany model atrybukcji do trackowania customer journey',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    categories: ['Projekty sprzedażowe'],
    tags: ['Analytics', 'Python', 'Data Science', 'Attribution'],
    metrics: '360° wgląd w dane',
    featured: false,
    order: 8
  }
];

// Funkcja do pobierania projektów na stronę główną (6 pierwszych featured)
export const getFeaturedProjects = () => {
  return portfolioPages
    .filter(page => page.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6)
    .map(page => ({
      id: page.id,
      title: page.title,
      description: page.description,
      image: page.image,
      categories: page.categories,
      tags: page.tags,
      metrics: page.metrics,
      externalLink: page.externalLink
    }));
};

// Funkcja do pobierania wszystkich projektów dla strony portfolio
export const getAllProjects = () => {
  return portfolioPages
    .sort((a, b) => a.order - b.order)
    .map(page => ({
      id: page.id,
      title: page.title,
      description: page.description,
      image: page.image,
      categories: page.categories,
      tags: page.tags,
      metrics: page.metrics,
      externalLink: page.externalLink
    }));
};

// Funkcja do pobierania projektu po slug
export const getProjectBySlug = (slug: string) => {
  return portfolioPages.find(page => page.slug === slug);
};

// Funkcja do pobierania projektu po ID
export const getProjectById = (id: string) => {
  return portfolioPages.find(page => page.id === id);
};
