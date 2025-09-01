# System Automatycznego Portfolio

## 🎯 **Jak to działa**

System automatycznie wykrywa nowe podstrony portfolio i tworzy kafelki na stronie głównej. Wszystko jest skonfigurowane w jednym pliku `src/data/portfolio-pages.ts`.

## 📁 **Struktura plików**

```
src/
├── data/
│   └── portfolio-pages.ts          # Konfiguracja wszystkich projektów
├── app/portfolio/
│   ├── page.tsx                    # Strona główna portfolio
│   ├── [id]/page.tsx               # Dynamiczne strony projektów
│   ├── seo/page.tsx                # Specjalne strony (SEO, PPC, Analytics)
│   ├── ppc/page.tsx
│   └── analytics/page.tsx
└── components/home/
    └── PortfolioSection.tsx        # Sekcja portfolio na stronie głównej
```

## ➕ **Jak dodać nowy projekt**

### 1. Dodaj konfigurację w `portfolio-pages.ts`

```typescript
{
  id: 'nazwa-projektu',           // Unikalny ID (używany w URL)
  slug: 'nazwa-projektu',         // Slug URL (może być taki sam jak ID)
  title: 'Tytuł projektu',
  description: 'Opis projektu',
  image: '/sciezka/do/obrazka.jpg',
  categories: ['Projekty sprzedażowe'], // Kategorie
  tags: ['Tag1', 'Tag2'],         // Tagi wyświetlane na kafelku
  metrics: '+100% wzrost',        // Metryki (opcjonalne)
  externalLink: 'https://...',    // Link zewnętrzny (opcjonalne)
  featured: true,                 // Czy pokazywać na stronie głównej
  order: 5                        // Kolejność (1-6 dla featured)
}
```

### 2. Utwórz podstronę (opcjonalnie)

Jeśli chcesz specjalną podstronę dla projektu:

```bash
mkdir src/app/portfolio/nazwa-projektu
touch src/app/portfolio/nazwa-projektu/page.tsx
```

Lub użyj dynamicznej strony `[id]/page.tsx` - automatycznie będzie działać!

## 🎛️ **Konfiguracja**

### Pola konfiguracyjne:

- **`id`** - Unikalny identyfikator projektu
- **`slug`** - Slug URL (może być taki sam jak ID)
- **`title`** - Tytuł wyświetlany na kafelku
- **`description`** - Opis projektu
- **`image`** - Ścieżka do obrazka
- **`categories`** - Tablica kategorii (używane do filtrowania)
- **`tags`** - Tagi wyświetlane na kafelku
- **`metrics`** - Metryki projektu (np. "+100% wzrost")
- **`externalLink`** - Link zewnętrzny (opcjonalny)
- **`featured`** - `true` = pokazuje na stronie głównej
- **`order`** - Kolejność (1-6 dla featured projektów)

### Kategorie:

- `"Projekty sprzedażowe"`
- `"Projekty kreatywne"`

## 🔄 **Automatyzacja**

### Co się dzieje automatycznie:

1. **Strona główna** - Pokazuje 6 projektów z `featured: true`
2. **Strona portfolio** - Pokazuje wszystkie projekty
3. **Dynamiczne strony** - `/portfolio/[id]` automatycznie działa
4. **Filtrowanie** - Według kategorii
5. **Linki** - Automatyczne przekierowania do podstron

### Funkcje pomocnicze:

```typescript
import { 
  getFeaturedProjects,  // Projekty na stronę główną
  getAllProjects,       // Wszystkie projekty
  getProjectById,       // Projekt po ID
  getProjectBySlug      // Projekt po slug
} from "@/data/portfolio-pages";
```

## 📝 **Przykład dodania nowego projektu**

1. **Dodaj do konfiguracji:**

```typescript
{
  id: 'nowy-projekt',
  slug: 'nowy-projekt',
  title: 'Nowy Projekt Marketingowy',
  description: 'Opis nowego projektu...',
  image: '/images/nowy-projekt.jpg',
  categories: ['Projekty sprzedażowe'],
  tags: ['Marketing', 'SEO', 'Analytics'],
  metrics: '+200% konwersja',
  featured: true,
  order: 5
}
```

2. **Gotowe!** Projekt automatycznie pojawi się:
   - Na stronie głównej (jeśli `featured: true`)
   - Na stronie portfolio
   - Będzie dostępny pod `/portfolio/nowy-projekt`

## 🎨 **Kompatybilność**

System jest w pełni kompatybilny z:
- ✅ Obecnymi komponentami
- ✅ Kategoriami
- ✅ Dark/Light mode
- ✅ Responsywnością
- ✅ SEO
- ✅ Stylistyką strony

## 🚀 **Korzyści**

- **Automatyzacja** - Nie musisz ręcznie dodawać kafelków
- **Spójność** - Wszystkie projekty używają tej samej struktury
- **Łatwość** - Jeden plik konfiguracyjny
- **Elastyczność** - Możesz wybrać które projekty pokazywać na głównej
- **SEO** - Automatyczne meta tagi i struktura
