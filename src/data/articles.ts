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
    title: "ChatGPT w SEO - praktyczny poradnik",
    description: "Jak wykorzystać AI w optymalizacji dla wyszukiwarek",
    image: "/gpt_seo.png",
    readTime: "7 min",
    publishDate: "2024",
    category: "SEO/AI",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-chatgpt-w-seo/",
    excerpt: "Praktyczny kurs wykorzystania ChatGPT w SEO. Dowiedz się, jak AI może pomóc w optymalizacji treści i strategii SEO."
  },
  {
    id: 5,
    title: "Jak założyć stronę internetową?",
    description: "Kompletny przewodnik dla początkujących",
    image: "/wordpress.png",
    readTime: "56 min",
    publishDate: "2025",
    category: "Strony internetowe",
    link: "https://dogtronic.io/baza-wiedzy/blog/jak-zalozyc-strone-internetowa/",
    excerpt: "Poradnik krok po kroku jak założyć własną stronę internetową. Od wyboru domeny po publikację - wszystko co musisz wiedzieć."
  },
  {
    id: 6,
    title: "Jak SEO wpływa na Twoją stronę?",
    description: "Praktyczne wskazówki optymalizacji",
    image: "/seo.png",
    readTime: "11 min",
    publishDate: "2024",
    category: "SEO",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-jak-seo-wplywa-na-twoja-strone/",
    excerpt: "Dowiedz się, w jakis sposób SEO wpływa na widoczność i sukces Twojej strony internetowej."
  },
  {
    id: 1,
    title: "Jak dodać Google Maps do swojej strony internetowej?",
    description: "Jak uzyskać i skonfigurować klucz API do Google Maps",
    image: "/google_maps.png",
    readTime: "3 min",
    publishDate: "2023",
    category: "Strony internetowe",
    link: "https://dogtronic.io/baza-wiedzy/blog/klucz-api-do-google-maps/",
    excerpt: "Kompletny przewodnik uzyskania i konfiguracji klucza API do Google Maps. Dowiedz się, jak bezpiecznie korzystać z usług Google Maps."
  },
  {
    id: 2,
    title: "Historia komputerów i programowania",
    description: "Od maszyn liczących do sztucznej inteligencji",
    image: "/pierwszy_komputer.png",
    readTime: "12 min",
    publishDate: "8 styczeń 2024",
    category: "Programowanie",
    link: "https://dogtronic.io/baza-wiedzy/blog/historia-komputerow-i-programowania/",
    excerpt: "Fascynująca podróż przez historię komputerów i programowania - od pierwszych maszyn liczących do zcasów współczesnych."
  },
  {
    id: 3,
    title: "Bug i debug - historia testów oprogramowania",
    description: "Jak ewoluowały metody testowania i debugowania",
    image: "/bug.png",
    readTime: "2 min",
    publishDate: "2023",
    category: "Programowanie",
    link: "https://dogtronic.io/baza-wiedzy/blog/bug-i-debug-czyli-historia-testow-oprogramowania/",
    excerpt: "Poznaj historię bugów i debugowania - od pierwszego błędu po współczesne metody testowania oprogramowania."
  }
];
