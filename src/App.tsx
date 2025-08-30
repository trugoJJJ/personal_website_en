

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioDetail from "./pages/PortfolioDetail";
import ArticlesList from "./pages/ArticlesList";
import ArticleDetail from "./pages/ArticleDetail";
import Blog from "./pages/Blog";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/contexts/i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <I18nProvider>
          

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/portfolio/:id" element={<PortfolioDetail />} />
              <Route path="/articles" element={<ArticlesList />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route path="/blog" element={<Blog />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </I18nProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
