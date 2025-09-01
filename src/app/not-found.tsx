"use client";

import dynamic from 'next/dynamic';

const NotFound = dynamic(() => import("@/components/pages/NotFound"), {
  ssr: false,
  loading: () => null
});

export default function NotFoundPage() {
  return <NotFound />;
}
