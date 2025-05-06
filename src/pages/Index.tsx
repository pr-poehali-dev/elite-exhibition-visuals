import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ExhibitionsSection from "@/components/home/ExhibitionsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/home/CtaSection";
import PartnersSection from "@/components/home/PartnersSection";
import { featuredExhibitions } from "@/data/exhibitions";
import { setupRevealAnimations } from "@/utils/animation";

const Index = () => {
  useEffect(() => {
    // Настраиваем анимации при прокрутке
    const cleanupAnimations = setupRevealAnimations();
    
    // Очищаем наблюдатель при размонтировании компонента
    return cleanupAnimations;
  }, []);

  return (
    <div className="min-h-screen bg-exhibition-anthracite text-exhibition-beige">
      <Header />
      <HeroSection />
      <ExhibitionsSection exhibitions={featuredExhibitions} />
      <FeaturesSection />
      <CtaSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;