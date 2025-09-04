#!/bin/bash

# 🚀 Tworzenie Polskiego Projektu Portfolio
# Ten skrypt automatycznie utworzy katalog polskiego projektu i skopiuje wszystkie pliki

echo "🚀 Tworzenie polskiego projektu portfolio..."

# Kolory dla wyświetlania
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

# Funkcje do wyświetlania
print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }
print_step() { echo -e "${PURPLE}[KROK]${NC} $1"; }

# Sprawdź czy jesteśmy w katalogu angielskiej wersji
if [[ ! "$PWD" == *"personal_website_en"* ]]; then
    print_error "Musisz być w katalogu personal_website_en"
    print_note "Uruchom: cd personal_website_en"
    exit 1
fi

# Krok 1: Utworzenie katalogu polskiego projektu
print_step "1. Utworzenie katalogu polskiego projektu"
cd ..

if [ -d "personal_website_pl" ]; then
    print_warning "Katalog personal_website_pl już istnieje"
    read -p "Czy chcesz go usunąć i utworzyć ponownie? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf personal_website_pl
        print_status "Stary katalog usunięty"
    else
        print_error "Operacja anulowana"
        exit 1
    fi
fi

mkdir personal_website_pl
cd personal_website_pl
print_success "Katalog personal_website_pl utworzony"

# Krok 2: Kopiowanie plików z angielskiej wersji
print_step "2. Kopiowanie plików z angielskiej wersji"
cp -r ../personal_website_en/* .
cp -r ../personal_website_en/.* . 2>/dev/null || true
print_success "Wszystkie pliki skopiowane"

# Krok 3: Usunięcie plików Git (będą utworzone na nowo)
print_step "3. Usunięcie plików Git"
rm -rf .git
rm -rf .github
print_success "Pliki Git usunięte"

# Krok 4: Uruchomienie automatycznej konfiguracji
print_step "4. Uruchomienie automatycznej konfiguracji"
if [ -f "auto-setup-polish.sh" ]; then
    chmod +x auto-setup-polish.sh
    ./auto-setup-polish.sh
else
    print_error "Nie znaleziono auto-setup-polish.sh"
    print_note "Uruchom ręcznie: ./setup-polish-project.sh"
fi

# Krok 5: Instrukcje końcowe
print_step "5. Instrukcje końcowe"
echo ""
print_success "Polski projekt został utworzony! 🎉"
echo ""
echo "📁 Katalog: $(pwd)"
echo "📋 Pliki skopiowane z angielskiej wersji"
echo "🔧 Konfiguracja automatyczna zakończona"
echo ""
echo "🚀 Następne kroki:"
echo "   1. Sprawdź czy wszystkie pliki zostały skopiowane"
echo "   2. Utwórz repozytorium na GitHub: personal_website_pl"
echo "   3. Push do GitHub: git push -u origin main"
echo "   4. Przetestuj funkcje w przeglądarce"
echo "   5. Wdróż na wybranej platformie"
echo ""
echo "🔗 Funkcje do sprawdzenia:"
echo "   - Przełączanie języka (polski/angielski)"
echo "   - Przełączanie trybu kolorystycznego"
echo "   - Linki do strony angielskiej"
echo "   - Responsywność na różnych urządzeniach"
echo ""
print_success "Powodzenia w konfiguracji polskiej wersji! 🚀🇵🇱"
