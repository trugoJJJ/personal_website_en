# 🇵🇱 Instrukcja Konfiguracji Polskiego Projektu Portfolio

## 🎯 Przegląd

Ten dokument zawiera szczegółowe instrukcje CLI do skonfigurowania polskiej wersji projektu portfolio z wszystkimi funkcjami analogicznymi do strony angielskiej, włączając linki między stronami i obsługę trybu kolorystycznego.

## 🚀 Szybki Start

### 1. Utworzenie nowego katalogu projektu

```bash
# Przejdź do katalogu nadrzędnego
cd /Users/komputergalecki/Documents/Projekty/GitHub/Monke/

# Utwórz nowy katalog dla polskiej wersji
mkdir personal_website_pl
cd personal_website_pl

# Skopiuj wszystkie pliki z angielskiej wersji
cp -r ../personal_website_en/* .
cp -r ../personal_website_en/.* . 2>/dev/null || true
```

### 2. Uruchomienie skryptu konfiguracyjnego

```bash
# Nadaj uprawnienia wykonywania
chmod +x setup-polish-project.sh

# Uruchom skrypt konfiguracyjny
./setup-polish-project.sh
```

## 📋 Szczegółowe Instrukcje CLI

### Krok 1: Inicjalizacja Git

```bash
# Sprawdź czy jesteś w odpowiednim katalogu
pwd
# Powinno pokazać: /Users/komputergalecki/Documents/Projekty/GitHub/Monke/personal_website_pl

# Inicjalizuj repozytorium Git
git init

# Sprawdź status
git status
```

### Krok 2: Konfiguracja Remote Origin

```bash
# Dodaj remote origin dla polskiej wersji
git remote add origin https://github.com/trugoJJJ/personal_website_pl.git

# Sprawdź remote
git remote -v
```

### Krok 3: Aktualizacja package.json

```bash
# Zaktualizuj nazwę projektu
sed -i '' 's/"name": "monke_io"/"name": "personal_website_pl"/' package.json

# Sprawdź zmiany
cat package.json | grep "name"
```

### Krok 4: Konfiguracja Trybu Kolorystycznego

```bash
# Sprawdź czy ThemeProvider.tsx ma obsługę trybu ciemnego
grep -n "dark\|light" src/components/ThemeProvider.tsx

# Sprawdź czy localStorage jest skonfigurowany
grep -n "localStorage" src/components/ThemeProvider.tsx
```

### Krok 5: Dodanie Linków do Strony Angielskiej

```bash
# Dodaj link w Header.tsx
echo '// Dodaj w Header.tsx link do strony angielskiej' >> src/components/home/Header.tsx
echo '<a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer">🇺🇸 English Version</a>' >> src/components/home/Header.tsx

# Lub dodaj w Footer.tsx
echo '// Dodaj w Footer.tsx link do strony angielskiej' >> src/components/home/FooterSection.tsx
echo '<a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer">🇺🇸 English Version</a>' >> src/components/home/FooterSection.tsx
```

### Krok 6: Konfiguracja i18n dla Polskiego

```bash
# Sprawdź konfigurację i18n
cat src/contexts/i18n.tsx

# Upewnij się, że polski jest domyślnym językiem
# Znajdź linię z defaultLanguage i ustaw na 'pl'
```

### Krok 7: Aktualizacja Meta Tagów SEO

```bash
# Zaktualizuj layout.tsx dla polskiej wersji
sed -i '' 's/title.*Portfolio.*/title>Portfolio - Adam Gałęcki<\/title>/' src/app/layout.tsx
sed -i '' 's/lang="en"/lang="pl"/' src/app/layout.tsx

# Dodaj hreflang dla strony angielskiej
echo '// Dodaj w head hreflang link' >> src/app/layout.tsx
echo '<link rel="alternate" hreflang="en" href="https://github.com/trugoJJJ/personal_website_en" />' >> src/app/layout.tsx
```

### Krok 8: Konfiguracja GitHub Actions

```bash
# Sprawdź czy katalog workflows istnieje
ls -la .github/workflows/

# Jeśli nie istnieje, utwórz go
mkdir -p .github/workflows/

# Skopiuj workflow z angielskiej wersji
cp ../personal_website_en/.github/workflows/deploy.yml .github/workflows/
```

### Krok 9: Testowanie Konfiguracji

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev

# W nowym terminalu przetestuj build
npm run build

# Sprawdź linting
npm run lint
```

### Krok 10: Commit i Push

```bash
# Dodaj wszystkie pliki
git add .

# Sprawdź status
git status

# Utwórz commit
git commit -m "feat: konfiguracja polskiej wersji portfolio

- Inicjalizacja repozytorium Git
- Konfiguracja remote origin
- Aktualizacja nazwy projektu
- Dodanie linków do strony angielskiej
- Konfiguracja SEO dla polskiego
- Obsługa trybu kolorystycznego
- GitHub Actions workflow"

# Push do GitHub
git push -u origin main
```

## 🔧 Konfiguracja Trybu Kolorystycznego

### Sprawdzenie ThemeProvider

```bash
# Sprawdź czy ThemeProvider ma obsługę trybu ciemnego
grep -A 10 -B 10 "dark" src/components/ThemeProvider.tsx

# Sprawdź localStorage
grep -A 5 -B 5 "localStorage" src/components/ThemeProvider.tsx

# Sprawdź useEffect
grep -A 10 -B 5 "useEffect" src/components/ThemeProvider.tsx
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

## 🌐 Konfiguracja Linków Między Stronami

### Dodanie w Header

```bash
# Otwórz Header.tsx w edytorze
code src/components/home/Header.tsx

# Dodaj link do strony angielskiej w odpowiednim miejscu
# Na przykład w menu nawigacyjnym lub w prawym górnym rogu
```

### Dodanie w Footer

```bash
# Otwórz FooterSection.tsx w edytorze
code src/components/home/FooterSection.tsx

# Dodaj link do strony angielskiej w sekcji linków
# Na przykład w sekcji "Linki" lub "Kontakt"
```

### Dodanie w LanguageSwitch

```bash
# Sprawdź LanguageSwitch.tsx
cat src/components/LanguageSwitch.tsx

# Dodaj opcję przejścia do strony angielskiej
# Może być jako dodatkowy przycisk lub w dropdown menu
```

## 📱 Testowanie Responsywności

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

---

**Powodzenia w konfiguracji polskiej wersji! 🚀🇵🇱**

