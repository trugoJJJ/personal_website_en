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
    id: 1,
    title: "Klucz API do Google Maps - kompletny przewodnik",
    description: "Jak uzyskać i skonfigurować klucz API do Google Maps",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    readTime: "8 min",
    publishDate: "15 styczeń 2024",
    category: "API & Development",
    link: "https://dogtronic.io/baza-wiedzy/blog/klucz-api-do-google-maps/",
    excerpt: "Kompletny przewodnik po uzyskaniu i konfiguracji klucza API do Google Maps. Dowiedz się, jak bezpiecznie korzystać z usług Google Maps w swoich aplikacjach."
  },
  {
    id: 2,
    title: "Historia komputerów i programowania",
    description: "Od maszyn liczących do sztucznej inteligencji",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    readTime: "12 min",
    publishDate: "8 styczeń 2024",
    category: "Historia IT",
    link: "https://dogtronic.io/baza-wiedzy/blog/historia-komputerow-i-programowania/",
    excerpt: "Fascynująca podróż przez historię komputerów i programowania - od pierwszych maszyn liczących po współczesną sztuczną inteligencję."
  },
  {
    id: 3,
    title: "Bug i debug - historia testów oprogramowania",
    description: "Jak ewoluowały metody testowania i debugowania",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    readTime: "10 min",
    publishDate: "2 styczeń 2024",
    category: "Testing",
    link: "https://dogtronic.io/baza-wiedzy/blog/bug-i-debug-czyli-historia-testow-oprogramowania/",
    excerpt: "Poznaj historię bugów i debugowania - od pierwszego błęda w komputerze po współczesne metody testowania oprogramowania."
  },
  {
    id: 4,
    title: "ChatGPT w SEO - praktyczny kurs",
    description: "Jak wykorzystać AI w optymalizacji dla wyszukiwarek",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    readTime: "9 min",
    publishDate: "20 luty 2024",
    category: "SEO & AI",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-chatgpt-w-seo/",
    excerpt: "Praktyczny kurs wykorzystania ChatGPT w SEO. Dowiedz się, jak AI może pomóc w optymalizacji treści i strategii SEO."
  },
  {
    id: 5,
    title: "Jak założyć stronę internetową",
    description: "Kompletny przewodnik dla początkujących",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    readTime: "7 min",
    publishDate: "3 marzec 2024",
    category: "Web Development",
    link: "https://dogtronic.io/baza-wiedzy/blog/jak-zalozyc-strone-internetowa/",
    excerpt: "Krok po kroku jak założyć własną stronę internetową. Od wyboru domeny po publikację - wszystko co musisz wiedzieć."
  },
  {
    id: 6,
    title: "Jak SEO wpływa na Twoją stronę",
    description: "Praktyczne wskazówki optymalizacji",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    readTime: "11 min",
    publishDate: "18 marzec 2024",
    category: "SEO",
    link: "https://dogtronic.io/baza-wiedzy/kurs-seo/lekcja-jak-seo-wplywa-na-twoja-strone/",
    excerpt: "Poznaj praktyczne sposoby, w jakie SEO wpływa na widoczność i sukces Twojej strony internetowej."
  }
];
