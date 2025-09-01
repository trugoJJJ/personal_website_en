"use client";

import dynamic from 'next/dynamic';

const Index = dynamic(() => import("@/components/pages/Index"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>
  )
});

export default function HomePage() {
  return <Index />;
}
