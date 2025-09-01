"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

const ThemeProviderContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      storageKey="theme-preference"
    >
      {children}
    </NextThemeProvider>
  );
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnlyWrapper fallback={<>{children}</>}>
      <ThemeProviderContent>{children}</ThemeProviderContent>
    </ClientOnlyWrapper>
  );
}
