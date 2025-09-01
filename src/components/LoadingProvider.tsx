"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Loader from './Loader';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Symulacja ładowania aplikacji
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Opóźnienie usunięcia z DOM po fade out
      setTimeout(() => setShouldRender(false), 500);
    }, 2000); // 2 sekundy ładowania

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {shouldRender && <Loader />}
      {!isLoading && children}
    </LoadingContext.Provider>
  );
};
