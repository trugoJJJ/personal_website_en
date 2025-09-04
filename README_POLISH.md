# 🇵🇱 Polski Projekt Portfolio - Kompletna Instrukcja

## 🎯 Przegląd

Ten dokument zawiera kompletne instrukcje do skonfigurowania polskiej wersji projektu portfolio z wszystkimi funkcjami analogicznymi do strony angielskiej, włączając linki między stronami i obsługę trybu kolorystycznego.

## 🚀 Szybki Start (3 Minuty)

### Opcja 1: Automatyczna Konfiguracja (Zalecane)

```bash
# Będąc w katalogu personal_website_en
./create-polish-project.sh
```

### Opcja 2: Ręczna Konfiguracja

```bash
# 1. Utwórz katalog
cd /Users/komputergalecki/Documents/Projekty/GitHub/Monke/
mkdir personal_website_pl
cd personal_website_pl

# 2. Skopiuj pliki
cp -r ../personal_website_en/* .
cp -r ../personal_website_en/.* . 2>/dev/null || true

# 3. Uruchom automatyczną konfigurację
chmod +x auto-setup-polish.sh
./auto-setup-polish.sh
```

## 📋 Co Zostanie Skonfigurowane Automatycznie

### ✅ Podstawowa Konfiguracja
- **Repozytorium Git** - inicjalizacja i konfiguracja
- **Remote Origin** - połączenie z GitHub personal_website_pl
- **Nazwa Projektu** - aktualizacja w package.json
- **Zależności** - automatyczna instalacja npm

### ✅ Konfiguracja Polskiego Języka
- **Layout.tsx** - lang="pl" i polski title
- **i18n** - polski jako domyślny język
- **Meta Tagi** - SEO dla polskiego rynku
- **Hreflang** - link do strony angielskiej

### ✅ Linki Między Stronami
- **Header** - link do strony angielskiej
- **Footer** - link do strony angielskiej
- **Nawigacja** - łatwe przełączanie między wersjami

### ✅ Tryb Kolorystyczny
- **ThemeProvider** - sprawdzenie konfiguracji
- **localStorage** - zapisywanie preferencji
- **Dark/Light Mode** - automatyczne przełączanie

### ✅ GitHub Actions
- **Workflow** - skopiowanie z angielskiej wersji
- **Deployment** - automatyczne wdrażanie
- **CI/CD** - ciągła integracja

## 🔧 Szczegółowe Instrukcje CLI

### Krok 1: Sprawdzenie Struktury

```bash
# Sprawdź czy jesteś w odpowiednim katalogu
pwd
# Powinno pokazać: /Users/komputergalecki/Documents/Projekty/GitHub/Monke/personal_website_pl

# Sprawdź strukturę plików
ls -la
```

### Krok 2: Konfiguracja Git

```bash
# Sprawdź status Git
git status

# Sprawdź remote origin
git remote -v

# Powinno pokazać: origin https://github.com/trugoJJJ/personal_website_pl.git
```

### Krok 3: Testowanie Konfiguracji

```bash
# Zainstaluj zależności (jeśli nie zostały)
npm install

# Uruchom serwer deweloperski
npm run dev

# W nowym terminalu przetestuj build
npm run build
```

### Krok 4: Sprawdzenie Funkcji

```bash
# Sprawdź czy wszystkie funkcje działają:
echo "🔍 Lista kontrolna funkcji:"
echo "   ✅ Przełączanie języka (polski/angielski)"
echo "   ✅ Przełączanie trybu kolorystycznego"
echo "   ✅ Linki do strony angielskiej w Header"
echo "   ✅ Linki do strony angielskiej w Footer"
echo "   ✅ Responsywność na mobile/tablet/desktop"
echo "   ✅ SEO meta tagi"
echo "   ✅ Wydajność (Lighthouse)"
```

## 🌐 Konfiguracja Linków Między Stronami

### Automatyczne Dodanie Linków

Skrypt automatycznie doda linki do strony angielskiej w:

1. **Header.tsx** - w prawym górnym rogu
2. **FooterSection.tsx** - w sekcji linków
3. **Layout.tsx** - hreflang dla SEO

### Ręczne Dodanie Linków (Jeśli Potrzebne)

```bash
# Dodaj w Header.tsx
echo '<a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer">🇺🇸 English Version</a>' >> src/components/home/Header.tsx

# Dodaj w Footer.tsx
echo '<a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer">🇺🇸 English Version</a>' >> src/components/home/FooterSection.tsx
```

## 🌙 Konfiguracja Trybu Kolorystycznego

### Sprawdzenie Konfiguracji

```bash
# Sprawdź ThemeProvider
grep -n "dark\|light" src/components/ThemeProvider.tsx

# Sprawdź localStorage
grep -n "localStorage" src/components/ThemeProvider.tsx

# Sprawdź useEffect
grep -n "useEffect" src/components/ThemeProvider.tsx
```

### Testowanie Trybu Kolorystycznego

```bash
# Uruchom aplikację
npm run dev

# W przeglądarce:
# 1. Otwórz DevTools (F12)
# 2. Przejdź do Console
# 3. Sprawdź localStorage:
#    localStorage.getItem('theme')
# 4. Zmień tryb i sprawdź ponownie
```

## 📱 Testowanie Responsywności

### Automatyczne Testy

```bash
# Uruchom aplikację
npm run dev

# W przeglądarce:
# 1. Otwórz DevTools (F12)
# 2. Kliknij ikonę urządzenia mobilnego
# 3. Przetestuj różne rozmiary ekranów:
#    - Mobile: 375x667
#    - Tablet: 768x1024
#    - Desktop: 1920x1080
```

## 🚀 Wdrożenie

### Opcja 1: Vercel (Zalecane)

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Wdróż na Vercel
vercel

# Postępuj zgodnie z instrukcjami
# Wybierz opcję "Link to existing project" lub utwórz nowy
```

### Opcja 2: Netlify

```bash
# Zbuduj projekt
npm run build

# Przeciągnij folder 'out' na Netlify
# Lub połącz z GitHub dla automatycznego wdrażania
```

### Opcja 3: Hosting Tradycyjny (FTP)

```bash
# Zbuduj projekt
npm run build

# Użyj skryptu deploy.cjs
npm run deploy

# Upewnij się, że masz skonfigurowane zmienne środowiskowe FTP
```

## 🔍 Sprawdzenie Poprawności

### Lista Kontrolna

```bash
# Sprawdź czy wszystkie funkcje działają:
echo "✅ Sprawdź następujące funkcje:"
echo "   - Przełączanie języka (polski/angielski)"
echo "   - Przełączanie trybu kolorystycznego"
echo "   - Linki do strony angielskiej"
echo "   - Responsywność na mobile/tablet/desktop"
echo "   - SEO meta tagi"
echo "   - Wydajność (Lighthouse)"
echo "   - Dostępność (ARIA labels)"
```

### Testy Wydajności

```bash
# Uruchom Lighthouse w Chrome DevTools
# Lub użyj PageSpeed Insights online
# Cel: Score > 90 dla wszystkich kategorii
```

## 🚨 Rozwiązywanie Problemów

### Częste Problemy

```bash
# Problem: Błąd podczas build
npm run build
# Rozwiązanie: Sprawdź błędy TypeScript i ESLint

# Problem: Tryb kolorystyczny nie działa
# Rozwiązanie: Sprawdź localStorage i ThemeProvider

# Problem: Linki nie działają
# Rozwiązanie: Sprawdź ścieżki i target="_blank"
```

### Debugowanie

```bash
# Sprawdź logi
npm run dev

# Sprawdź błędy w konsoli przeglądarki
# Sprawdź Network tab w DevTools
# Sprawdź Application tab dla localStorage
```

## 📚 Dodatkowe Zasoby

### Dokumentacja

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Narzędzia

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

## 🎯 Następne Kroki

### Po Konfiguracji

1. **Utwórz repozytorium na GitHub**: `personal_website_pl`
2. **Push do GitHub**: `git push -u origin main`
3. **Przetestuj funkcje** w przeglądarce
4. **Wdróż na wybranej platformie**
5. **Dodaj linki między stronami** (polska ↔ angielska)

### Funkcje do Sprawdzenia

- ✅ Przełączanie języka (polski/angielski)
- ✅ Przełączanie trybu kolorystycznego (ciemny/jasny)
- ✅ Linki do strony angielskiej w Header i Footer
- ✅ Responsywność na różnych urządzeniach
- ✅ SEO meta tagi dla polskiego rynku
- ✅ Wydajność i dostępność

---

**Powodzenia w konfiguracji polskiej wersji! 🚀🇵🇱**

*Ten dokument został automatycznie wygenerowany dla polskiego projektu portfolio.*

