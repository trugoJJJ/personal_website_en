import { Providers } from "@/components/Providers";
import { LoadingProvider } from "@/components/LoadingProvider";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg?v=3" />
        <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg?v=3" />
        <meta name="theme-color" content="#FAF6EE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Adam Gałęcki" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Adam Gałęcki - Portfolio" />
        <meta property="og:title" content="Portfolio – Adam Gałęcki – Digital Marketing Manager" />
        <meta property="og:description" content="Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych w firmach B2B i B2C." />
        <meta property="og:image" content="/og_cover.png" />
        <meta property="og:url" content="https://galecki.site" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio – Adam Gałęcki – Digital Marketing Manager" />
        <meta name="twitter:description" content="Zajmuję się kompleksową obsługą komunikacji marketingowej nakierowanej na osiąganie zamierzonych celów biznesowych w firmach B2B i B2C." />
        <meta name="twitter:image" content="/og_cover.png" />
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KZF8BJ5085"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KZF8BJ5085');
            `,
          }}
        />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TS69F5NV');
            `,
          }}
        />
        
        {/* Start cookieyes banner */}
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/da9ae73dac2da25aa791bf45/script.js"></script>
        {/* End cookieyes banner */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TS69F5NV"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <LoadingProvider>
          <Providers>
            {children}
            <ScrollToTop />
          </Providers>
        </LoadingProvider>
      </body>
    </html>
  );
}
