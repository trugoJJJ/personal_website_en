# 🖥️ Instrukcje CLI - Polski Projekt Portfolio

## 🎯 Przegląd

Ten dokument zawiera kompletne instrukcje CLI do skonfigurowania polskiej wersji projektu portfolio z wszystkimi funkcjami analogicznymi do strony angielskiej.

## 🚀 Szybki Start (1 Komenda)

### Najprostszy sposób - Master Script

```bash
# Będąc w katalogu personal_website_en
./master-setup-polish.sh
```

**To wszystko!** Master Script automatycznie wykona wszystkie kroki.

## 📋 Dostępne Skrypty

### 1. 🎯 Master Script (Zalecane)
```bash
./master-setup-polish.sh
```
**Funkcje:**
- ✅ Tworzy katalog `personal_website_pl`
- ✅ Kopiuje wszystkie pliki
- ✅ Konfiguruje Git i remote origin
- ✅ Aktualizuje nazwę projektu
- ✅ Dodaje linki do strony angielskiej
- ✅ Konfiguruje SEO dla polskiego
- ✅ Sprawdza ThemeProvider
- ✅ Konfiguruje GitHub Actions
- ✅ Instaluje zależności
- ✅ Testuje build
- ✅ Tworzy commit

### 2. 🔧 Skrypt Tworzenia Projektu
```bash
./create-polish-project.sh
```
**Funkcje:**
- ✅ Tworzy katalog `personal_website_pl`
- ✅ Kopiuje pliki
- ✅ Uruchamia automatyczną konfigurację

### 3. ⚙️ Automatyczna Konfiguracja
```bash
./auto-setup-polish.sh
```
**Funkcje:**
- ✅ Konfiguruje Git i remote origin
- ✅ Aktualizuje pliki dla polskiego
- ✅ Dodaje linki między stronami
- ✅ Konfiguruje i18n i SEO

### 4. 📖 Skrypt Konfiguracyjny
```bash
./setup-polish-project.sh
```
**Funkcje:**
- ✅ Instrukcje krok po kroku
- ✅ Sprawdzenie konfiguracji
- ✅ Wskazówki i porady

## 🔧 Ręczna Konfiguracja (Krok po Kroku)

### Krok 1: Utworzenie Katalogu
```bash
# Przejdź do katalogu nadrzędnego
cd /Users/komputergalecki/Documents/Projekty/GitHub/Monke/

# Utwórz katalog polskiego projektu
mkdir personal_website_pl
cd personal_website_pl

# Sprawdź lokalizację
pwd
# Powinno pokazać: /Users/komputergalecki/Documents/Projekty/GitHub/Monke/personal_website_pl
```

### Krok 2: Kopiowanie Plików
```bash
# Skopiuj wszystkie pliki z angielskiej wersji
cp -r ../personal_website_en/* .

# Skopiuj ukryte pliki (jeśli istnieją)
cp -r ../personal_website_en/.* . 2>/dev/null || true

# Sprawdź czy pliki zostały skopiowane
ls -la
```

### Krok 3: Usunięcie Plików Git
```bash
# Usuń stare pliki Git (będą utworzone na nowo)
rm -rf .git
rm -rf .github

# Sprawdź czy zostały usunięte
ls -la | grep -E "\.git|\.github"
```

### Krok 4: Inicjalizacja Git
```bash
# Inicjalizuj nowe repozytorium Git
git init

# Sprawdź status
git status
```

### Krok 5: Konfiguracja Remote Origin
```bash
# Dodaj remote origin dla polskiej wersji
git remote add origin https://github.com/trugoJJJ/personal_website_pl.git

# Sprawdź remote
git remote -v
```

### Krok 6: Aktualizacja package.json
```bash
# Zaktualizuj nazwę projektu
sed -i '' 's/"name": "monke_io"/"name": "personal_website_pl"/' package.json

# Sprawdź zmiany
cat package.json | grep "name"
```

### Krok 7: Aktualizacja layout.tsx
```bash
# Aktualizuj title
sed -i '' 's/<title>.*<\/title>/<title>Portfolio - Adam Gałęcki<\/title>/' src/app/layout.tsx

# Aktualizuj lang
sed -i '' 's/lang="en"/lang="pl"/' src/app/layout.tsx

# Dodaj hreflang link
echo '<link rel="alternate" hreflang="en" href="https://github.com/trugoJJJ/personal_website_en" />' >> src/app/layout.tsx

# Sprawdź zmiany
grep -n "title\|lang\|hreflang" src/app/layout.tsx
```

### Krok 8: Dodanie Linków w Header
```bash
# Dodaj link do strony angielskiej w Header.tsx
sed -i '' '/<\/header>/i\
<a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">🇺🇸 English Version</a>' src/components/home/Header.tsx

# Sprawdź czy link został dodany
grep -n "personal_website_en" src/components/home/Header.tsx
```

### Krok 9: Dodanie Linków w Footer
```bash
# Dodaj link do strony angielskiej w FooterSection.tsx
sed -i '' '/<\/footer>/i\
<div className="text-center text-sm text-gray-600 dark:text-gray-400">\
  <a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">🇺🇸 English Version</a>\
</div>' src/components/home/FooterSection.tsx

# Sprawdź czy link został dodany
grep -n "personal_website_en" src/components/home/FooterSection.tsx
```

### Krok 10: Konfiguracja i18n
```bash
# Sprawdź aktualną konfigurację
grep -n "defaultLanguage" src/contexts/i18n.tsx

# Ustaw polski jako domyślny język
sed -i '' "s/defaultLanguage.*'en'/defaultLanguage = 'pl'/" src/contexts/i18n.tsx

# Sprawdź zmiany
grep -n "defaultLanguage" src/contexts/i18n.tsx
```

### Krok 11: Sprawdzenie ThemeProvider
```bash
# Sprawdź obsługę trybu ciemnego
grep -n "dark\|light" src/components/ThemeProvider.tsx

# Sprawdź localStorage
grep -n "localStorage" src/components/ThemeProvider.tsx

# Sprawdź useEffect
grep -n "useEffect" src/components/ThemeProvider.tsx
```

### Krok 12: Konfiguracja GitHub Actions
```bash
# Utwórz katalog workflows
mkdir -p .github/workflows

# Skopiuj workflow z angielskiej wersji
cp ../personal_website_en/.github/workflows/deploy.yml .github/workflows/

# Sprawdź czy workflow został skopiowany
ls -la .github/workflows/
```

### Krok 13: Instalacja Zależności
```bash
# Zainstaluj zależności
npm install

# Sprawdź czy instalacja się powiodła
npm list --depth=0
```

### Krok 14: Test Build
```bash
# Przetestuj build
npm run build

# Sprawdź czy build się powiódł
ls -la .next/
```

### Krok 15: Git Commit
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

# Sprawdź commit
git log --oneline -1
```

## 🧪 Testowanie Konfiguracji

### Test Serwera Deweloperskiego
```bash
# Uruchom serwer deweloperski
npm run dev

# W nowym terminalu sprawdź czy działa
curl -s http://localhost:3000 | head -20
```

### Test Build
```bash
# Przetestuj build w nowym terminalu
npm run build

# Sprawdź czy build się powiódł
echo "Build status: $?"
```

### Test Linting
```bash
# Sprawdź linting
npm run lint

# Sprawdź TypeScript
npx tsc --noEmit
```

## 🔍 Sprawdzenie Poprawności

### Lista Kontrolna Funkcji
```bash
# Sprawdź czy wszystkie funkcje działają
echo "🔍 Lista kontrolna funkcji:"
echo "   ✅ Przełączanie języka (polski/angielski)"
echo "   ✅ Przełączanie trybu kolorystycznego"
echo "   ✅ Linki do strony angielskiej w Header"
echo "   ✅ Linki do strony angielskiej w Footer"
echo "   ✅ Responsywność na mobile/tablet/desktop"
echo "   ✅ SEO meta tagi"
echo "   ✅ Wydajność (Lighthouse)"
echo "   ✅ Dostępność (ARIA labels)"
```

### Sprawdzenie Plików
```bash
# Sprawdź kluczowe pliki
echo "📁 Sprawdzanie kluczowych plików:"
[ -f "package.json" ] && echo "✅ package.json" || echo "❌ package.json"
[ -f "src/app/layout.tsx" ] && echo "✅ layout.tsx" || echo "❌ layout.tsx"
[ -f "src/components/home/Header.tsx" ] && echo "✅ Header.tsx" || echo "❌ Header.tsx"
[ -f "src/components/home/FooterSection.tsx" ] && echo "✅ FooterSection.tsx" || echo "❌ FooterSection.tsx"
[ -f "src/contexts/i18n.tsx" ] && echo "✅ i18n.tsx" || echo "❌ i18n.tsx"
[ -f "src/components/ThemeProvider.tsx" ] && echo "✅ ThemeProvider.tsx" || echo "❌ ThemeProvider.tsx"
```

## 🚀 Wdrożenie

### Push do GitHub
```bash
# Push do GitHub
git push -u origin main

# Sprawdź status
git status
```

### Wdrożenie na Vercel
```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Wdróż na Vercel
vercel

# Postępuj zgodnie z instrukcjami
```

### Wdrożenie na Netlify
```bash
# Zbuduj projekt
npm run build

# Przeciągnij folder 'out' na Netlify
# Lub połącz z GitHub dla automatycznego wdrażania
```

## 🚨 Rozwiązywanie Problemów

### Częste Problemy i Rozwiązania

#### Problem: Błąd podczas build
```bash
# Sprawdź błędy TypeScript
npx tsc --noEmit

# Sprawdź linting
npm run lint

# Sprawdź logi
npm run build 2>&1 | head -20
```

#### Problem: Tryb kolorystyczny nie działa
```bash
# Sprawdź ThemeProvider
grep -A 10 -B 5 "localStorage" src/components/ThemeProvider.tsx

# Sprawdź localStorage w przeglądarce
# Otwórz DevTools > Console > localStorage.getItem('theme')
```

#### Problem: Linki nie działają
```bash
# Sprawdź ścieżki
grep -n "personal_website_en" src/components/home/*.tsx

# Sprawdź target="_blank"
grep -n "target.*blank" src/components/home/*.tsx
```

### Debugowanie
```bash
# Sprawdź logi serwera
npm run dev

# Sprawdź błędy w konsoli przeglądarki
# Sprawdź Network tab w DevTools
# Sprawdź Application tab dla localStorage
```

## 📚 Dodatkowe Komendy

### Sprawdzenie Wersji
```bash
# Sprawdź wersje narzędzi
node --version
npm --version
git --version

# Sprawdź wersje zależności
npm list --depth=0
```

### Czyszczenie Cache
```bash
# Wyczyść cache npm
npm cache clean --force

# Wyczyść cache Next.js
rm -rf .next
rm -rf node_modules/.cache

# Zainstaluj ponownie
npm install
```

### Backup i Restore
```bash
# Utwórz backup
tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz .

# Przywróć z backupu
tar -xzf backup-YYYYMMDD-HHMMSS.tar.gz
```

## 🎯 Podsumowanie

### Najlepszy Sposób
```bash
# 1. Uruchom master script
./master-setup-polish.sh

# 2. Utwórz repozytorium na GitHub: personal_website_pl

# 3. Push do GitHub
git push -u origin main

# 4. Przetestuj funkcje
npm run dev

# 5. Wdróż na wybranej platformie
```

### Co Zostanie Skonfigurowane
- ✅ **Katalog projektu** - personal_website_pl
- ✅ **Git** - repozytorium i remote origin
- ✅ **Nazwa projektu** - w package.json
- ✅ **Layout** - polski język i meta tagi
- ✅ **Linki** - do strony angielskiej
- ✅ **i18n** - polski jako domyślny
- ✅ **ThemeProvider** - tryb kolorystyczny
- ✅ **GitHub Actions** - workflow
- ✅ **Zależności** - npm install
- ✅ **Build** - test kompilacji
- ✅ **Commit** - gotowy do push

---

**🎉 Wszystko gotowe! Uruchom `./master-setup-polish.sh` i ciesz się automatyczną konfiguracją! 🚀🇵🇱**

