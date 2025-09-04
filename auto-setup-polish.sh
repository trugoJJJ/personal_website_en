#!/bin/bash

# 🚀 Automatyczna Konfiguracja Polskiego Projektu Portfolio
# Ten skrypt automatycznie skonfiguruje polską wersję projektu

set -e  # Zatrzymaj skrypt przy błędzie

echo "🚀 Automatyczna konfiguracja polskiego projektu portfolio..."

# Kolory dla wyświetlania
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

# Funkcje do wyświetlania
print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }
print_step() { echo -e "${PURPLE}[KROK]${NC} $1"; }

# Sprawdź czy jesteśmy w odpowiednim katalogu
if [[ ! "$PWD" == *"personal_website_pl"* ]]; then
    print_error "Musisz być w katalogu personal_website_pl"
    print_note "Uruchom: cd personal_website_pl"
    exit 1
fi

# Krok 1: Inicjalizacja Git
print_step "1. Inicjalizacja repozytorium Git"
if [ ! -d ".git" ]; then
    git init
    print_success "Git zainicjalizowany"
else
    print_status "Git już zainicjalizowany"
fi

# Krok 2: Konfiguracja remote origin
print_step "2. Konfiguracja remote origin"
if ! git remote get-url origin &> /dev/null; then
    git remote add origin https://github.com/trugoJJJ/personal_website_pl.git
    print_success "Remote origin dodany"
else
    print_status "Remote origin już skonfigurowany"
fi

# Krok 3: Aktualizacja package.json
print_step "3. Aktualizacja package.json"
if [ -f "package.json" ]; then
    sed -i '' 's/"name": "monke_io"/"name": "personal_website_pl"/' package.json
    print_success "Nazwa projektu zaktualizowana"
else
    print_error "Nie znaleziono package.json"
fi

# Krok 4: Aktualizacja layout.tsx dla polskiego
print_step "4. Aktualizacja layout.tsx dla polskiego"
if [ -f "src/app/layout.tsx" ]; then
    # Aktualizuj title
    sed -i '' 's/<title>.*<\/title>/<title>Portfolio - Adam Gałęcki<\/title>/' src/app/layout.tsx
    
    # Aktualizuj lang
    sed -i '' 's/lang="en"/lang="pl"/' src/app/layout.tsx
    
    # Dodaj hreflang link
    if ! grep -q "hreflang.*en" src/app/layout.tsx; then
        sed -i '' '/<head>/a\
        <link rel="alternate" hreflang="en" href="https://github.com/trugoJJJ/personal_website_en" />' src/app/layout.tsx
    fi
    
    print_success "Layout.tsx zaktualizowany dla polskiego"
else
    print_error "Nie znaleziono layout.tsx"
fi

# Krok 5: Dodanie linków do strony angielskiej w Header
print_step "5. Dodanie linków do strony angielskiej w Header"
if [ -f "src/components/home/Header.tsx" ]; then
    # Sprawdź czy link już istnieje
    if ! grep -q "personal_website_en" src/components/home/Header.tsx; then
        # Dodaj link w odpowiednim miejscu (przed zamykającym tagiem)
        sed -i '' '/<\/header>/i\
        <a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">🇺🇸 English Version</a>' src/components/home/Header.tsx
        print_success "Link do strony angielskiej dodany w Header"
    else
        print_status "Link do strony angielskiej już istnieje w Header"
    fi
else
    print_warning "Nie znaleziono Header.tsx"
fi

# Krok 6: Dodanie linków do strony angielskiej w Footer
print_step "6. Dodanie linków do strony angielskiej w Footer"
if [ -f "src/components/home/FooterSection.tsx" ]; then
    # Sprawdź czy link już istnieje
    if ! grep -q "personal_website_en" src/components/home/FooterSection.tsx; then
        # Dodaj link w sekcji linków
        sed -i '' '/<\/footer>/i\
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">\
          <a href="https://github.com/trugoJJJ/personal_website_en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-gray-100">🇺🇸 English Version</a>\
        </div>' src/components/home/FooterSection.tsx
        print_success "Link do strony angielskiej dodany w Footer"
    else
        print_status "Link do strony angielskiej już istnieje w Footer"
    fi
else
    print_warning "Nie znaleziono FooterSection.tsx"
fi

# Krok 7: Konfiguracja i18n dla polskiego
print_step "7. Konfiguracja i18n dla polskiego"
if [ -f "src/contexts/i18n.tsx" ]; then
    # Sprawdź czy polski jest domyślnym językiem
    if grep -q "defaultLanguage.*'en'" src/contexts/i18n.tsx; then
        sed -i '' "s/defaultLanguage.*'en'/defaultLanguage = 'pl'/" src/contexts/i18n.tsx
        print_success "Polski ustawiony jako domyślny język"
    else
        print_status "Polski już jest domyślnym językiem"
    fi
else
    print_warning "Nie znaleziono i18n.tsx"
fi

# Krok 8: Sprawdzenie ThemeProvider
print_step "8. Sprawdzenie ThemeProvider"
if [ -f "src/components/ThemeProvider.tsx" ]; then
    if grep -q "localStorage" src/components/ThemeProvider.tsx; then
        print_success "ThemeProvider ma obsługę localStorage"
    else
        print_warning "ThemeProvider może nie mieć obsługi localStorage"
    fi
    
    if grep -q "dark\|light" src/components/ThemeProvider.tsx; then
        print_success "ThemeProvider ma obsługę trybu ciemnego/jasnego"
    else
        print_warning "ThemeProvider może nie mieć obsługi trybu kolorystycznego"
    fi
else
    print_warning "Nie znaleziono ThemeProvider.tsx"
fi

# Krok 9: Konfiguracja GitHub Actions
print_step "9. Konfiguracja GitHub Actions"
if [ ! -d ".github/workflows" ]; then
    mkdir -p .github/workflows
    print_success "Katalog workflows utworzony"
fi

if [ ! -f ".github/workflows/deploy.yml" ]; then
    # Skopiuj workflow z angielskiej wersji jeśli istnieje
    if [ -f "../personal_website_en/.github/workflows/deploy.yml" ]; then
        cp ../personal_website_en/.github/workflows/deploy.yml .github/workflows/
        print_success "Workflow skopiowany z angielskiej wersji"
    else
        print_warning "Nie znaleziono workflow w angielskiej wersji"
    fi
else
    print_status "Workflow już istnieje"
fi

# Krok 10: Instalacja zależności
print_step "10. Instalacja zależności"
if [ -f "package.json" ]; then
    npm install
    print_success "Zależności zainstalowane"
else
    print_error "Nie znaleziono package.json"
fi

# Krok 11: Test build
print_step "11. Test build"
if [ -f "package.json" ]; then
    npm run build
    print_success "Build zakończony pomyślnie"
else
    print_error "Nie można przetestować build"
fi

# Krok 12: Git commit
print_step "12. Git commit"
git add .
git commit -m "feat: automatyczna konfiguracja polskiej wersji portfolio

- Inicjalizacja repozytorium Git
- Konfiguracja remote origin
- Aktualizacja nazwy projektu
- Dodanie linków do strony angielskiej
- Konfiguracja SEO dla polskiego
- Obsługa trybu kolorystycznego
- GitHub Actions workflow
- Automatyczna konfiguracja"

print_success "Commit utworzony"

# Krok 13: Instrukcje końcowe
print_step "13. Instrukcje końcowe"
echo ""
print_success "Automatyczna konfiguracja zakończona! 🎉"
echo ""
echo "📋 Co zostało skonfigurowane:"
echo "   ✅ Repozytorium Git"
echo "   ✅ Remote origin (personal_website_pl)"
echo "   ✅ Nazwa projektu w package.json"
echo "   ✅ Layout.tsx dla polskiego (lang='pl')"
echo "   ✅ Linki do strony angielskiej w Header i Footer"
echo "   ✅ i18n z polskim jako domyślnym językiem"
echo "   ✅ Sprawdzenie ThemeProvider"
echo "   ✅ GitHub Actions workflow"
echo "   ✅ Zależności zainstalowane"
echo "   ✅ Test build"
echo "   ✅ Git commit"
echo ""
echo "🚀 Następne kroki:"
echo "   1. Utwórz repozytorium na GitHub: personal_website_pl"
echo "   2. Push do GitHub: git push -u origin main"
echo "   3. Przetestuj funkcje w przeglądarce"
echo "   4. Wdróż na wybranej platformie"
echo ""
echo "🔗 Linki do sprawdzenia:"
echo "   - Przełączanie języka (polski/angielski)"
echo "   - Przełączanie trybu kolorystycznego"
echo "   - Linki do strony angielskiej w Header i Footer"
echo "   - Responsywność na różnych urządzeniach"
echo ""
print_success "Powodzenia! 🚀🇵🇱"

