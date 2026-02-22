import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import GamesSection from "@/components/GamesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroCarousel />
        <GamesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
