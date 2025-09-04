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
    title: "Comprehensive SEO for external door manufacturer",
    description: "Long-term SEO strategy for leading Polish external door manufacturer, implemented since 2022",
    image: "/seo.png",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    categories: ["SEO"],
    metrics: "+39% increase in impressions",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Comprehensive SEO for external door manufacturer",
    description: "Long-term SEO strategy for leading Polish external door manufacturer, implemented since 2022",
    image: "/seo.png",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    categories: ["SEO"],
    metrics: "+39% increase in impressions",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Comprehensive SEO for external door manufacturer",
    description: "Long-term SEO strategy for leading Polish external door manufacturer, implemented since 2022",
    image: "/seo.png",
    tags: ["SEO", "Content Marketing", "Link Building", "Analytics", "Google Ads", "Technical SEO"],
    categories: ["SEO"],
    metrics: "+39% increase in impressions",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "E-commerce Growth Campaign",
    description: "Marketing campaign that increased sales by 340% in 6 months",
    image: "/wordpress.png",
    tags: ["Google Ads", "Facebook Ads", "Email Marketing", "Analytics"],
    categories: ["Advertising Campaigns"],
    metrics: "+340% sales",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "SaaS Landing Page Optimization",
    description: "Homepage redesign and optimization that doubled conversion",
    image: "/bug.png",
    tags: ["A/B Testing", "UX/UI", "Analytics", "Webflow"],
    categories: ["Design"],
    metrics: "+127% conversion",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Content Marketing Automation",
    description: "Content marketing automation system using AI",
    image: "/gpt_seo.png",
    tags: ["AI Tools", "Automation", "Content Marketing", "Social Media"],
    categories: ["Animations"],
    metrics: "70% time savings",
    link: "#",
    github: "#"
  },
  {
    id: 7,
    title: "Multi-channel Attribution Model",
    description: "Advanced attribution model for tracking customer journey",
    image: "/google_maps.png",
    tags: ["Analytics", "Python", "Data Science", "Attribution"],
    categories: ["Team Management"],
    metrics: "360° data insight",
    link: "#",
    github: "#"
  }
];
