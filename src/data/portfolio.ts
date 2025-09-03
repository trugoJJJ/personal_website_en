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
    image: "/seo.png",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    categories: ["SEO"],
    metrics: "+39% wzrost wyświetleń",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Kompleksowa obsługa SEO dla producenta drzwi zewnętrznych",
    description: "Długoterminowa strategia SEO dla czołowego polskiego producenta drzwi zewnętrznych, realizowana od 2022 roku",
    image: "/seo.png",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    categories: ["SEO"],
    metrics: "+39% wzrost wyświetleń",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Kompleksowa obsługa SEO dla producenta drzwi zewnętrznych",
    description: "Długoterminowa strategia SEO dla czołowego polskiego producenta drzwi zewnętrznych, realizowana od 2022 roku",
    image: "/seo.png",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    categories: ["SEO"],
    metrics: "+39% wzrost wyświetleń",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "E-commerce Growth Campaign",
    description: "Kampania marketingowa, która zwiększyła sprzedaż o 340% w 6 miesięcy",
    image: "/wordpress.png",
    tags: ["Google Ads", "Facebook Ads", "Email Marketing", "Analytics"],
    categories: ["Kampanie reklamowe"],
    metrics: "+340% sprzedaż",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "SaaS Landing Page Optimization",
    description: "Redesign i optymalizacja strony głównej, która podwoiła konwersję",
    image: "/bug.png",
    tags: ["A/B Testing", "UX/UI", "Analytics", "Webflow"],
    categories: ["Designe"],
    metrics: "+127% konwersja",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Content Marketing Automation",
    description: "System automatyzacji content marketingu z wykorzystaniem AI",
    image: "/gpt_seo.png",
    tags: ["AI Tools", "Automation", "Content Marketing", "Social Media"],
    categories: ["Animacje"],
    metrics: "70% oszczędność czasu",
    link: "#",
    github: "#"
  },
  {
    id: 7,
    title: "Multi-channel Attribution Model",
    description: "Zaawansowany model atrybukcji do trackowania customer journey",
    image: "/google_maps.png",
    tags: ["Analytics", "Python", "Data Science", "Attribution"],
    categories: ["Zarządzanie zespołem"],
    metrics: "360° wgląd w dane",
    link: "#",
    github: "#"
  }
];
