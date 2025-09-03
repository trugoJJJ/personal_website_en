"use client";

import { Header } from "@/components/home/Header";
import { FooterSection } from "@/components/home/FooterSection";
import { SEO } from "@/components/SEO";
import { usePalette } from "@/components/home/hooks";
import { ClientOnlyWrapper } from "@/components/ClientOnlyWrapper";
import Link from "next/link";

const PrivacyPolicyContent = () => {
  const { isDark, P } = usePalette();

  // Helpery stylistyczne
  const headingStyles: React.CSSProperties = {
    color: isDark ? P("white") : P("black"),
  };
  const bigHeadingClass = "text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95]";
  const sectionOuter = (bg: string, withTopBorder = true): React.CSSProperties => ({
    background: bg,
    borderTop: withTopBorder ? `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}` : undefined,
  });

  return (
    <div style={{ background: isDark ? P('charcoal') : P('white'), color: isDark ? P('white') : P('charcoal'), minHeight: '100vh' }}>
      <Header />
      <main className="pt-28">
        <SEO 
          title="Polityka Prywatności – Adam Gałęcki"
          description="Polityka prywatności i cookies serwisu galecki.website. Informacje o przetwarzaniu danych osobowych i wykorzystaniu plików cookies."
          canonical="https://monke.io/polityka-prywatnosci"
          ogImage="/og_cover.png"
        />

        {/* Sekcja tytułowa */}
        <section style={sectionOuter(isDark ? P('charcoal') : P('white'), false)} className="pb-20">
          <div className="container mx-auto max-w-6xl px-6">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm mb-8 pt-4" style={{ opacity: .7 }}>
              <Link href="/" className="hover:opacity-100 transition-opacity">
                Start
              </Link>
              <span>→</span>
              <span className="font-medium" style={{ opacity: 1 }}>
                Polityka Prywatności
              </span>
            </nav>

            {/* Tytuł główny */}
            <div className="mb-12">
              <h1 style={headingStyles} className={bigHeadingClass}>
                Polityka Prywatności
              </h1>
              <p className="mt-6 text-lg max-w-4xl leading-relaxed" style={{ color: isDark ? P('white') : P('charcoal') }}>
                Informacje o przetwarzaniu danych osobowych i wykorzystaniu plików cookies w serwisie galecki.website
              </p>
            </div>
          </div>
        </section>

        {/* Treść polityki */}
        <section style={sectionOuter(P('ecru'))} className="py-24 md:py-32">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="prose prose-lg max-w-none" style={{ color: isDark ? P('white') : P('charcoal') }}>
              
              <h2 style={{ color: isDark ? P('white') : P('black'), fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                Polityka prywatności i cookies
              </h2>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                1. Informacje ogólne
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                1.1 Administrator danych osobowych
              </h4>
              <p>Administratorem Państwa danych osobowych jest:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>NIP:</strong> 9462752489</li>
                <li><strong>REGON:</strong> 541404566</li>
                <li><strong>Forma prawna:</strong> indywidualna działalność gospodarcza</li>
                <li><strong>Adres rejestrowy:</strong> ul. Garbarska 7/5, 20-340 Lublin</li>
                <li><strong>Przedsiębiorca:</strong> Adam Gałęcki</li>
                <li><strong>Adres e-mail:</strong> agalecki.work@gmail.com</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                1.2 Inspektor Ochrony Danych
              </h4>
              <p>W sprawach dotyczących ochrony danych osobowych można się kontaktować z naszym Inspektorem Ochrony Danych: <strong>e-mail: agalecki.work@gmail.com</strong></p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                1.3 Zakres zastosowania
              </h4>
              <p>Niniejsza Polityka Prywatności dotyczy serwisu galecki.website dostępnego pod adresem https://galecki.website oraz związanej z nim aplikacji do automatyzacji procesów odczytywania faktur.</p>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                2. Podstawy prawne przetwarzania danych
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.1 Wykonanie umowy (art. 6 ust. 1 lit. b RODO)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Świadczenie usług automatyzacji odczytywania faktur.</li>
                <li>Przetwarzanie dokumentów księgowych.</li>
                <li>Obsługa konta użytkownika.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.2 Wypełnienie obowiązku prawnego (art. 6 ust. 1 lit. c RODO)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Realizacja obowiązków podatkowych (w zakresie wymaganym przez prawo)</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.3 Prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Zapewnienie bezpieczeństwa systemu.</li>
                <li>Zapobieganie nadużyciom i oszustwom.</li>
                <li>Doskonalenie algorytmów AI.</li>
                <li>Marketing bezpośredni naszych usług.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                2.4 Zgoda (art. 6 ust. 1 lit. a RODO)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Marketing i komunikacja promocyjna (jeśli wyrażona).</li>
                <li>Wykorzystanie plików cookies analitycznych.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                3. Kategorie przetwarzanych danych osobowych
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.1 Dane użytkowników systemu
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Dane identyfikacyjne (imię, nazwisko, nazwa firmy).</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu, adres korespondencyjny).</li>
                <li>Dane do logowania i uwierzytelniania.</li>
                <li>Informacje o preferencjach użytkownika.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.2 Dane z przetwarzanych faktur
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Dane kontrahentów (nazwa, NIP, adres).</li>
                <li>Dane osób kontaktowych (imię, nazwisko, stanowisko).</li>
                <li>Informacje finansowe (kwoty, podatki, numery kont).</li>
                <li>Opisy towarów i usług.</li>
                <li>Daty wystawienia i płatności.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.3 Dane techniczne
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Adres IP.</li>
                <li>Informacje o przeglądarce i urządzeniu.</li>
                <li>Logi systemowe.</li>
                <li>Dane o aktywności w aplikacji.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                3.4 Dane biometryczne (w ograniczonym zakresie)
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Metadane obrazów faktur przetwarzanych przez OCR.</li>
                <li>Wzorce rozpoznawania tekstu (zanonimizowane).</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                4. Cele i sposoby przetwarzania danych
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.1 Automatyzacja procesów księgowych
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Analiza AI:</strong> Wykorzystujemy zaawansowane algorytmy sztucznej inteligencji do automatycznego odczytu danych z faktur.</li>
                <li><strong>Technologia OCR:</strong> Przetwarzanie nieczytelnych dokumentów za pomocą optycznego rozpoznawania znaków.</li>
                <li><strong>Kategoryzacja:</strong> Automatyczne przypisywanie kategorii kosztów i przychodów.</li>
                <li><strong>Weryfikacja:</strong> Sprawdzanie kontrahentów w bazie GUS.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.2 Archiwizacja i organizacja dokumentów
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Tworzenie kopii zapasowych odczytanych danych.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.3 Analiza finansowa i raportowanie
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Tworzenie dashboardów analitycznych w czasie rzeczywistym.</li>
                <li>Przygotowanie dokumentów do przekazania księgowemu.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                4.4 Bezpieczeństwo i integralność danych
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Monitorowanie nieautoryzowanego dostępu.</li>
                <li>Zapobieganie nadużyciom systemu.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                5. Odbiorcy danych osobowych
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                5.1 Podmioty przetwarzające dane w naszym imieniu
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>System OCR:</strong> LlamaIndex Inc. (llamaindex.ai)</li>
                <li><strong>Hosting:</strong> Contabo GmbH (contabo.com)</li>
                <li><strong>System AI:</strong> OpenAI (openai.com)</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                5.2 Podmioty uprawnione do otrzymania danych
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Organy skarbowe i kontrolne (na żądanie).</li>
                <li>Sądy i organy ścigania (w przypadkach przewidzianych prawem).</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                5.3 Przekazywanie danych do państw trzecich
              </h4>
              <p>Niektóre dane mogą być przekazywane do państw poza EOG w związku z:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Korzystaniem z usług Google (USA) – na podstawie decyzji adekwatności lub standardowych klauzul umownych.</li>
                <li>Korzystaniem z usług Contabo GmBH (Niemcy) – przetwarzanie odbywa się w ramach EOG,</li>
                <li>Korzystaniem z usług LlamaIndex Inc. (USA) – z zastosowaniem odpowiednich mechanizmów ochrony danych,</li>
                <li>Korzystaniem z usług OpenAI (USA) – na podstawie standardowych klauzul umownych oraz dodatkowych zabezpieczeń.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                6. Okres przechowywania danych
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                6.1 Dane użytkowników
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Konta aktywne:</strong> przez okres trwania umowy oraz do 3 lat po jej rozwiązaniu.</li>
                <li><strong>Logi systemowe:</strong> do 12 miesięcy.</li>
                <li><strong>Dane marketingowe:</strong> 3 lata od ostatniego kontaktu lub do czasu wycofania zgody.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                6.2 Dane techniczne
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Pliki cookies:</strong> zgodnie z polityką cookies (maksymalnie 24 miesiące).</li>
                <li><strong>Kopie zapasowe:</strong> 6 miesięcy.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                7. Prawa osób, których dane dotyczą
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.1 Prawo dostępu do danych (art. 15 RODO)
              </h4>
              <p>Mają Państwo prawo uzyskać informację o tym, czy przetwarzamy Państwa dane osobowe, a jeśli tak, to jakie dane i w jakim celu.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.2 Prawo do sprostowania (art. 16 RODO)
              </h4>
              <p>Mają Państwo prawo żądać sprostowania nieprawidłowych lub uzupełnienia niekompletnych danych osobowych.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.3 Prawo do usunięcia ("prawo do bycia zapomnianym") (art. 17 RODO)
              </h4>
              <p>Mają Państwo prawo żądać usunięcia danych, z zastrzeżeniem przypadków, gdy jesteśmy zobowiązani do ich przechowywania przez przepisy prawa.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.4 Prawo do ograniczenia przetwarzania (art. 18 RODO)
              </h4>
              <p>W określonych sytuacjach mogą Państwo żądać ograniczenia przetwarzania swoich danych.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.5 Prawo do przenoszenia danych (art. 20 RODO)
              </h4>
              <p>Mają Państwo prawo otrzymać swoje dane w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.6 Prawo sprzeciwu (art. 21 RODO)
              </h4>
              <p>Mogą Państwo wnieść sprzeciw wobec przetwarzania danych opartego na prawnie uzasadnionym interesie.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.7 Prawo do cofnięcia zgody
              </h4>
              <p>Jeśli przetwarzanie odbywa się na podstawie zgody, mogą Państwo ją w każdej chwili cofnąć.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                7.8 Sposób realizacji praw
              </h4>
              <p>Aby skorzystać z powyższych praw, należy skontaktować się z nami:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>E-mail:</strong> agalecki.work@gmail.com</li>
                <li><strong>Listownie na adres:</strong> Adam Gałecki – Firma Gałęcka, ul. Garbarska 7/5, 20-340 Lublin,</li>
              </ul>
              <p>Odpowiadamy na wnioski w terminie do 30 dni.</p>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                8. Bezpieczeństwo danych
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                8.1 Środki techniczne
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Szyfrowanie:</strong> Wszystkie dane są szyfrowane zarówno podczas transmisji (TLS/SSL), jak i przechowywania (AES-256).</li>
                <li><strong>Uwierzytelnianie:</strong> Dwuskładnikowe uwierzytelnianie (2FA) dla wszystkich kont.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                8.2 Środki organizacyjne
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Szkolenia:</strong> Regularne szkolenia pracowników z zakresu ochrony danych.</li>
                <li><strong>Polityki bezpieczeństwa:</strong> Wdrożone procedury bezpieczeństwa informacji.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                8.3 Kopie zapasowe
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Automatyczne kopie zapasowe wykonywane codziennie.</li>
                <li>Szyfrowane przechowywanie kopii w różnych lokalizacjach geograficznych.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                9. Naruszenia ochrony danych
              </h3>
              <p>W przypadku naruszenia ochrony danych osobowych:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Zgłosimy naruszenie do Prezesa UODO w terminie 72 godzin.</li>
                <li>Poinformujemy zainteresowane osoby, jeśli naruszenie może stwarzać wysokie ryzyko dla ich praw.</li>
                <li>Podejmiemy wszystkie niezbędne działania naprawcze.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                10. Polityka cookies
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                10.1 Rodzaje wykorzystywanych plików cookies
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Niezbędne:</strong> Do funkcjonowania systemu uwierzytelniania i sesji użytkownika.</li>
                <li><strong>Analityczne:</strong> Google Analytics do analizy ruchu (po wyrażeniu zgody).</li>
                <li><strong>Funkcjonalne:</strong> Zapamiętywanie preferencji użytkownika.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                10.2 Zarządzanie cookies
              </h4>
              <p>Możecie Państwo zarządzać plikami cookies poprzez ustawienia przeglądarki. Wyłączenie niektórych cookies może ograniczyć funkcjonalność serwisu.</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                10.3 Okres przechowywania cookies
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Cookies sesyjne:</strong> usuwane po zamknięciu przeglądarki.</li>
                <li><strong>Cookies trwałe:</strong> maksymalnie 24 miesiące.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                11. Podstawy prawne i przepisy
              </h3>
              <p>Niniejsza polityka prywatności jest zgodna z:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).</li>
                <li>Ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.</li>
                <li>Ustawą z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                12. Prawo do złożenia skargi
              </h3>
              <p>Mają Państwo prawo złożyć skargę do organu nadzorczego – Urząd Ochrony Danych Osobowych:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>Adres:</strong> ul. Stawki 2, 00-193 Warszawa</li>
                <li><strong>Telefon:</strong> 22 531 03 00</li>
                <li><strong>E-mail:</strong> kancelaria@uodo.gov.pl</li>
                <li><strong>Strona internetowa:</strong> https://uodo.gov.pl</li>
              </ul>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                13. Zmiany w polityce prywatności
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                13.1 Aktualizacje
              </h4>
              <p>Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O istotnych zmianach będziemy informować:</p>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li>Poprzez powiadomienie e-mail (z 14-dniowym wyprzedzeniem).</li>
                <li>Poprzez komunikat w aplikacji.</li>
                <li>Na stronie internetowej serwisu.</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                13.2 Ciągłość ochrony
              </h4>
              <p>Zmiany w polityce nie wpływają na prawa użytkowników wynikające z wcześniejszych wersji dokumentu.</p>

              <h3 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.5rem', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>
                14. Kontakt
              </h3>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                14.1 Dane kontaktowe Administratora
              </h4>
              <ul style={{ marginLeft: '2rem', marginBottom: '0.5rem' }}>
                <li><strong>E-mail:</strong> agalecki.work@gmail.com</li>
                <li><strong>Adres:</strong> Adam Gałecki – Firma Gałęcka., ul. Garbarska 7/5, 20-340 Lublin,</li>
              </ul>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                14.2 Inspektor Ochrony Danych
              </h4>
              <p><strong>E-mail:</strong> agalecki.work@gmail.com</p>

              <h4 style={{ color: isDark ? P('white') : P('black'), fontSize: '1.25rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>
                14.3 Czas odpowiedzi
              </h4>
              <p>Odpowiadamy na wszystkie zapytania dotyczące ochrony danych w terminie do 30 dni roboczych.</p>

              <div style={{ 
                marginTop: '3rem', 
                padding: '2rem', 
                border: `${isDark ? '1px' : '3px'} solid ${isDark ? P('white') : P('black')}`,
                background: isDark ? P('charcoal') : P('ecru'),
                textAlign: 'center'
              }}>
                <p style={{ margin: 0, fontWeight: 600 }}>
                  Niniejsza Polityka Prywatności została sporządzona w dniu 14 sierpnia 2025 r. i jest zgodna z aktualnie obowiązującymi przepisami prawa.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <ClientOnlyWrapper fallback={
      <div className="bg-white text-charcoal min-h-screen">
        <div className="fixed top-0 inset-x-0 z-50 bg-white border-b-3 border-black">
          <nav className="w-full h-16 flex items-center relative">
            <a href="#home" className="font-extrabold tracking-tight leading-none ml-4 md:ml-8 text-charcoal">Adam&nbsp;Gałęcki</a>
          </nav>
        </div>
        <main className="pt-28">
          <div className="container mx-auto max-w-6xl px-6 pb-20">
            <nav className="flex items-center gap-2 text-sm mb-8 pt-4 opacity-70">
              <a href="/" className="hover:opacity-100 transition-opacity">Start</a>
              <span>→</span>
              <span className="font-medium opacity-100">Polityka Prywatności</span>
            </nav>
            <div className="mb-12">
              <h1 className="text-left text-[9vw] sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-black">
                Polityka Prywatności
              </h1>
              <p className="mt-6 text-lg max-w-4xl leading-relaxed text-charcoal">
                Informacje o przetwarzaniu danych osobowych i wykorzystaniu plików cookies w serwisie galecki.website
              </p>
            </div>
          </div>
        </main>
      </div>
    }>
      <PrivacyPolicyContent />
    </ClientOnlyWrapper>
  );
}
