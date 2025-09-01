"use client";

import dynamic from 'next/dynamic';

const NotFound = dynamic(() => import("@/components/pages/NotFound"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>
  )
});

export default function NotFoundPage() {
  return <NotFound />;
}
