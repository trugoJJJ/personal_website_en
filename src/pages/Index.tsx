import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
    </div>
  );
};

export default Index;