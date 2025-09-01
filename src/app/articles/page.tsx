"use client";

import dynamic from 'next/dynamic';

const ArticlesList = dynamic(() => import("@/components/pages/ArticlesList"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-lg">Loading...</div>
    </div>
  )
});

export default function ArticlesPage() {
  return <ArticlesList />;
}
