import { Providers } from "@/components/Providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <title>Monke.io - Portfolio & Blog</title>
        <meta name="description" content="Professional portfolio and blog showcasing web development, SEO, PPC, and analytics projects." />
        <meta name="keywords" content="web development,SEO,PPC,analytics,portfolio,blog" />
        <meta name="author" content="Adam Gacki" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Monke.io - Portfolio & Blog" />
        <meta property="og:description" content="Professional portfolio and blog showcasing web development, SEO, PPC, and analytics projects." />
        <meta property="og:url" content="https://monke.io" />
        <meta property="og:site_name" content="Monke.io" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monke.io - Portfolio & Blog" />
        <meta name="twitter:description" content="Professional portfolio and blog showcasing web development, SEO, PPC, and analytics projects." />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
