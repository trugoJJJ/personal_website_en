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
  featured: boolean; // Whether to show on homepage
  order: number; // Order on homepage
}

// Automatic portfolio subpages configuration
export const portfolioPages: PortfolioPage[] = [
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO for external door manufacturer',
    description: 'technical optimization → copywriting → link building → articles → analytics → reports.',
    image: articles?.[0]?.image || 'https://placehold.co/800x500',
    categories: ['Sales Projects'],
    tags: ['SEO', 'Content', 'Link building'],
    metrics: '+3M views',
    featured: true,
    order: 1
  },
  {
    id: 'ppc',
    slug: 'ppc',
    title: 'Paid advertising campaigns PPC',
    description: 'Google Ads → Meta Ads → LinkedIn Ads.',
    image: articles?.[1]?.image || 'https://placehold.co/800x500',
    categories: ['Sales Projects'],
    tags: ['PPC', 'Performance', 'ROAS'],
    metrics: '40% increase in queries',
    featured: true,
    order: 2
  },
  {
    id: 'analytics',
    slug: 'analytics',
    title: 'Visitor data tracking system',
    description: 'GA4 → GSC → Ads → Meta → GTM (full measurement).',
    image: articles?.[2]?.image || 'https://placehold.co/800x500',
    categories: ['Creative Projects'],
    tags: ['GA4', 'GTM', 'Attribution'],
    metrics: '150K conversions',
    featured: true,
    order: 3
  },
  {
    id: 'animation',
    slug: 'animation',
    title: 'Portfolio animation template',
    description: '2D Motion (AE) – product/service presentation.',
    image: articles?.[0]?.image || 'https://placehold.co/800x500',
    categories: ['Creative Projects'],
    tags: ['After Effects', '2D', 'Template'],
    metrics: '50K views',
    externalLink: 'https://www.behance.net/gallery/199466415/Animationforthe-software-dvelopment-company-portfolio',
    featured: true,
    order: 4
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-commerce Growth Campaign',
    description: 'Marketing campaign that increased sales by 340% in 6 months',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    categories: ['Sales Projects'],
    tags: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Analytics'],
    metrics: '+340% sales',
    featured: false,
    order: 5
  },
  {
    id: 'saas',
    slug: 'saas',
    title: 'SaaS Landing Page Optimization',
    description: 'Homepage redesign and optimization that doubled conversion',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    categories: ['Creative Projects'],
    tags: ['A/B Testing', 'UX/UI', 'Analytics', 'Webflow'],
    metrics: '+127% conversion',
    featured: false,
    order: 6
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Content Marketing Automation',
    description: 'Content marketing automation system using AI',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
    categories: ['Creative Projects'],
    tags: ['AI Tools', 'Automation', 'Content Marketing', 'Social Media'],
    metrics: '70% time savings',
    featured: false,
    order: 7
  },
  {
    id: 'attribution',
    slug: 'attribution',
    title: 'Multi-channel Attribution Model',
    description: 'Advanced attribution model for tracking customer journey',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    categories: ['Sales Projects'],
    tags: ['Analytics', 'Python', 'Data Science', 'Attribution'],
    metrics: '360° data insight',
    featured: false,
    order: 8
  }
];

// Function to get projects for the homepage (first 6 featured)
export const getFeaturedProjects = () => {
  return portfolioPages
    .filter(page => page.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);
};

// Function to get all projects for the portfolio page
export const getAllProjects = () => {
  return portfolioPages
    .sort((a, b) => a.order - b.order);
};

// Function to get project by ID
export const getProjectById = (id: string) => {
  return portfolioPages.find(page => page.id === id);
};
