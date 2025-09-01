"use client";

import dynamic from 'next/dynamic';

const Blog = dynamic(() => import("@/components/pages/Blog"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>
  )
});

export default function BlogPage() {
  return <Blog />;
}
