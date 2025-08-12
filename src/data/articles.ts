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
  },
  // Placeholdery dodatkowe
  {
    id: 4,
    title: "Strategie wzrostu dla SaaS: taktyki na 2025",
    description: "Przegląd działań wzrostowych dla firm SaaS",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    readTime: "9 min",
    publishDate: "20 luty 2024",
    category: "Growth",
    link: "#",
    excerpt: "Taktyki wzrostu, które działają — pricing, onboarding, aktywacja i retencja."
  },
  {
    id: 5,
    title: "Design system w marketingu: spójność i tempo",
    description: "Dlaczego design system przyspiesza marketing",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    readTime: "7 min",
    publishDate: "3 marzec 2024",
    category: "Design",
    link: "#",
    excerpt: "Spójność wizualna i reusable komponenty skracają time‑to‑market i poprawiają UX."
  },
  {
    id: 6,
    title: "Analityka produktowa: jak podejmować decyzje",
    description: "KPI, eventy i dashboardy dla product marketingu",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    readTime: "11 min",
    publishDate: "18 marzec 2024",
    category: "Analytics",
    link: "#",
    excerpt: "Mądre decyzje opierają się na danych. Jak projektować pomiary i analizować wyniki."
  }
];
