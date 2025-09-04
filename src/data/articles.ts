export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  readTime: string;
  publishDate: string;
  category: string;
  link: string;
  excerpt: string;
};

export const articles: Article[] = [
  {
    id: 4,
    title: "ChatGPT in SEO - practical guide",
    description: "How to use AI in search engine optimization",
    image: "/gpt_seo.png",
    readTime: "7 min",
    publishDate: "2024",
    category: "SEO/AI",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-chatgpt-w-seo/",
    excerpt: "Practical course on using ChatGPT in SEO. Learn how AI can help with content optimization and SEO strategy."
  },
  {
    id: 5,
    title: "How to create a website?",
    description: "Complete guide for beginners",
    image: "/wordpress.png",
    readTime: "56 min",
    publishDate: "2025",
    category: "Websites",
    link: "https://dogtronic.io/baza-wiedzy/blog/jak-zalozyc-strone-internetowa/",
    excerpt: "Step-by-step guide on how to create your own website. From choosing a domain to publishing - everything you need to know."
  },
  {
    id: 6,
    title: "How does SEO affect your website?",
    description: "Practical optimization tips",
    image: "/seo.png",
    readTime: "11 min",
    publishDate: "2024",
    category: "SEO",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-jak-seo-wplywa-na-twoja-strone/",
    excerpt: "Learn how SEO affects the visibility and success of your website."
  },
  {
    id: 1,
    title: "How to add Google Maps to your website?",
    description: "How to obtain and configure API key for Google Maps",
    image: "/google_maps.png",
    readTime: "3 min",
    publishDate: "2023",
    category: "Websites",
    link: "https://dogtronic.io/baza-wiedzy/blog/klucz-api-do-google-maps/",
    excerpt: "Complete guide to obtaining and configuring Google Maps API key. Learn how to safely use Google Maps services."
  },
  {
    id: 2,
    title: "History of computers and programming",
    description: "From calculating machines to artificial intelligence",
    image: "/pierwszy_komputer.png",
    readTime: "12 min",
    publishDate: "8 January 2024",
    category: "Programming",
    link: "https://dogtronic.io/baza-wiedzy/blog/historia-komputerow-i-programowania/",
    excerpt: "Fascinating journey through the history of computers and programming - from the first calculating machines to modern times."
  },
  {
    id: 3,
    title: "Bug and debug - history of software testing",
    description: "How testing and debugging methods evolved",
    image: "/bug.png",
    readTime: "2 min",
    publishDate: "2023",
    category: "Programming",
    link: "https://dogtronic.io/baza-wiedzy/blog/bug-i-debug-czyli-historia-testow-oprogramowania/",
    excerpt: "Discover the history of bugs and debugging - from the first bug to modern software testing methods."
  }
];
