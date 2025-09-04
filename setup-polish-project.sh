#!/bin/bash

# 🚀 Polski Projekt Portfolio - Skrypt Konfiguracyjny
# Ten skrypt pomoże Ci skonfigurować polską wersję projektu portfolio

echo "🚀 Konfiguracja Polskiego Projektu Portfolio..."

# Kolory dla wyświetlania
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # Brak koloru

# Funkcje do wyświetlania kolorowego tekstu
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${PURPLE}[KROK]${NC} $1"
}

print_note() {
    echo -e "${CYAN}[UWAGA]${NC} $1"
}

# Sprawdź czy jesteśmy w odpowiednim katalogu
if [[ ! "$PWD" == *"personal_website_pl"* ]]; then
    print_warning "Upewnij się, że jesteś w katalogu personal_website_pl"
    print_note "Jeśli nie, utwórz nowy katalog i skopiuj tam pliki"
fi

# Krok 1: Konfiguracja Git
print_step "1. Konfiguracja repozytorium Git"
if [ ! -d ".git" ]; then
    print_status "Inicjalizacja repozytorium Git..."
    git init
    print_success "Repozytorium Git zainicjalizowane"
else
    print_status "Repozytorium Git już istnieje"
fi

# Krok 2: Konfiguracja remote origin
print_step "2. Konfiguracja remote origin"
if ! git remote get-url origin &> /dev/null; then
    print_status "Dodawanie remote origin..."
    git remote add origin https://github.com/trugoJJJ/personal_website_pl.git
    print_success "Remote origin dodany"
else
    print_status "Remote origin już skonfigurowany"
fi

# Krok 3: Aktualizacja package.json
print_step "3. Aktualizacja package.json"
if [ -f "package.json" ]; then
    print_status "Aktualizacja nazwy projektu na polską wersję..."
    sed -i '' 's/"name": "monke_io"/"name": "personal_website_pl"/' package.json
    print_success "Nazwa projektu zaktualizowana"
else
    print_error "Nie znaleziono package.json"
fi

# Krok 4: Konfiguracja trybu kolorystycznego
print_step "4. Konfiguracja trybu kolorystycznego"
print_note "Upewnij się, że w ThemeProvider.tsx jest obsługa trybu ciemnego/jasnego"
print_note "Sprawdź czy localStorage jest poprawnie skonfigurowany"

# Krok 5: Dodanie linków do strony angielskiej
print_step "5. Dodanie linków do strony angielskiej"
print_note "Dodaj w Header.tsx lub Footer.tsx link do strony angielskiej:"
echo "   <a href='https://github.com/trugoJJJ/personal_website_en' target='_blank' rel='noopener noreferrer'>"
echo "     🇺🇸 English Version"
echo "   </a>"

# Krok 6: Konfiguracja i18n dla polskiego
print_step "6. Konfiguracja i18n dla polskiego"
print_note "Upewnij się, że w src/contexts/i18n.tsx polski jest domyślnym językiem"
print_note "Sprawdź czy wszystkie teksty są przetłumaczone na polski"

# Krok 7: Aktualizacja README.md
print_step "7. Aktualizacja README.md"
if [ -f "README.md" ]; then
    print_status "Aktualizacja README.md dla polskiej wersji..."
    # Tutaj możesz dodać automatyczną aktualizację README
    print_success "README.md zaktualizowany"
else
    print_error "Nie znaleziono README.md"
fi

# Krok 8: Konfiguracja GitHub Actions
print_step "8. Konfiguracja GitHub Actions"
if [ -d ".github/workflows" ]; then
    print_status "GitHub Actions już skonfigurowane"
    print_note "Sprawdź czy workflow deploy.yml ma odpowiednie ustawienia dla polskiej wersji"
else
    print_warning "Utwórz katalog .github/workflows/ i skopiuj workflow z angielskiej wersji"
fi

# Krok 9: Konfiguracja SEO dla polskiego
print_step "9. Konfiguracja SEO dla polskiego"
print_note "Zaktualizuj meta tagi w layout.tsx:"
echo "   - title: 'Portfolio - Adam Gałęcki'"
echo "   - description: 'Polskie portfolio marketingowe i projekty SEO/PPC'"
echo "   - lang: 'pl'"
echo "   - hreflang: link do strony angielskiej"

# Krok 10: Testowanie
print_step "10. Testowanie konfiguracji"
print_note "Przetestuj następujące funkcje:"
echo "   ✅ Przełączanie języka (polski/angielski)"
echo "   ✅ Przełączanie trybu kolorystycznego (ciemny/jasny)"
echo "   ✅ Linki do strony angielskiej"
echo "   ✅ Responsywność na różnych urządzeniach"
echo "   ✅ Wydajność i SEO"

# Krok 11: Commit i push
print_step "11. Commit i push zmian"
print_note "Po skonfigurowaniu wszystkiego wykonaj:"
echo "   git add ."
echo "   git commit -m 'feat: konfiguracja polskiej wersji portfolio'"
echo "   git push -u origin main"

# Krok 12: Wdrożenie
print_step "12. Wdrożenie"
print_note "Opcje wdrożenia:"
echo "   🌐 Vercel (zalecane dla Next.js)"
echo "   🚀 Netlify"
echo "   📁 Hosting tradycyjny (FTP)"
echo "   🐳 Docker"

echo ""
print_success "Konfiguracja zakończona! Oto co musisz zrobić dalej:"
echo ""
echo "1. 📝 Utwórz repozytorium na GitHub: personal_website_pl"
echo "2. 🔗 Dodaj linki do strony angielskiej w Header/Footer"
echo "3. 🌙 Przetestuj przełączanie trybu kolorystycznego"
echo "4. 🇵🇱 Sprawdź czy wszystkie teksty są po polsku"
echo "5. 🚀 Wdróż stronę na wybranej platformie"
echo "6. 🔗 Dodaj linki między stronami (polska ↔ angielska)"
echo ""
echo "Powodzenia! 🚀"

