"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/contexts/i18n";
import { ClientOnlyWrapper } from "./ClientOnlyWrapper";

const queryClient = new QueryClient();

const ProvidersContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnlyWrapper fallback={<>{children}</>}>
      <ProvidersContent>{children}</ProvidersContent>
    </ClientOnlyWrapper>
  );
}
