"use client";

import dynamic from 'next/dynamic';
import ClientOnlyWrapper from '@/components/ClientOnlyWrapper';

const PortfolioPPC = dynamic(() => Promise.resolve(() => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">PPC Portfolio</h1>
      <p className="text-gray-600">This page is under construction.</p>
    </div>
  </div>
)), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>
  )
});

export default function PPCPortfolioPage() {
  return (
    <ClientOnlyWrapper>
      <PortfolioPPC />
    </ClientOnlyWrapper>
  );
}
