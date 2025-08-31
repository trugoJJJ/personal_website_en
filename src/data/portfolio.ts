export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  categories: string[];
  metrics: string;
  link: string;
  github: string;
};

export const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Kompleksowa obsługa SEO dla producenta drzwi zewnętrznych",
    description: "Długoterminowa strategia SEO dla czołowego polskiego producenta drzwi zewnętrznych, realizowana od 2022 roku",
    image: "/placeholder.svg",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    categories: ["SEO"],
    metrics: "+39% wzrost wyświetleń",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "E-commerce Growth Campaign",
    description: "Kampania marketingowa, która zwiększyła sprzedaż o 340% w 6 miesięcy",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["Google Ads", "Facebook Ads", "Email Marketing", "Analytics"],
    categories: ["Kampanie reklamowe"],
    metrics: "+340% sprzedaż",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "SaaS Landing Page Optimization",
    description: "Redesign i optymalizacja strony głównej, która podwoiła konwersję",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["A/B Testing", "UX/UI", "Analytics", "Webflow"],
    categories: ["Designe"],
    metrics: "+127% konwersja",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Content Marketing Automation",
    description: "System automatyzacji content marketingu z wykorzystaniem AI",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    tags: ["AI Tools", "Automation", "Content Marketing", "Social Media"],
    categories: ["Animacje"],
    metrics: "70% oszczędność czasu",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Multi-channel Attribution Model",
    description: "Zaawansowany model atrybukcji do trackowania customer journey",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Analytics", "Python", "Data Science", "Attribution"],
    categories: ["Zarządzanie zespołem"],
    metrics: "360° wgląd w dane",
    link: "#",
    github: "#"
  }
];
