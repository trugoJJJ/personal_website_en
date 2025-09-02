import { redirect } from 'next/navigation';

export default function PortfolioPage() {
  // Natychmiastowe przekierowanie na server-side, bez migania UI
  redirect('/#portfolio');
}
