"use client";

import dynamic from 'next/dynamic';

const Index = dynamic(() => import("@/components/pages/Index"), {
  ssr: false,
  loading: () => null
});

export default function HomePage() {
  return <Index />;
}
