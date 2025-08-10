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
    title: "Jak AI zmienia landscape digital marketingu w 2024",
    description: "Praktyczny przewodnik po wykorzystaniu sztucznej inteligencji w kampaniach marketingowych",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    readTime: "8 min",
    publishDate: "15 styczeń 2024",
    category: "AI & Marketing",
    link: "#",
    excerpt: "Sztuczna inteligencja już nie jest przyszłością - to teraźniejszość marketingu. Dowiedz się, jak wykorzystać AI do automatyzacji, personalizacji i optymalizacji kampanii."
  },
  {
    id: 2,
    title: "Customer Journey Mapping: Od świadomości do konwersji",
    description: "Kompleksowy guide po mapowaniu ścieżki klienta w erze omnichannel",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
    readTime: "12 min",
    publishDate: "8 styczeń 2024",
    category: "Strategy",
    link: "#",
    excerpt: "Skuteczna strategia marketingowa wymaga głębokiego zrozumienia ścieżki klienta. Zobacz, jak krok po kroku zmapować customer journey i zoptymalizować każdy touchpoint."
  },
  {
    id: 3,
    title: "Marketing Automation: Workflows, które sprzedają",
    description: "Jak stworzyć automatyzacje marketingowe, które zwiększają konwersję o 300%",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    readTime: "10 min",
    publishDate: "2 styczeń 2024",
    category: "Automation",
    link: "#",
    excerpt: "Marketing automation to nie tylko wysyłanie maili. To inteligentne nurturing leadów, segmentacja behawioralna i spersonalizowane doświadczenia w skali."
  }
];
