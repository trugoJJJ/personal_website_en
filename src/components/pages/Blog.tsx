import { SEO } from '../SEO';

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO title="Blog – Coming Soon" description="Blog section in preparation" />
      <h1 className="text-4xl font-bold mb-4">Blog – Coming Soon</h1>
      <p className="text-muted-foreground mt-3">New blog section will appear soon. Check out the Articles section now.</p>
      <a href="/articles" className="underline">Go to articles</a>
    </div>
  );
}
