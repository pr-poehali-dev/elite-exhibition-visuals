import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ExhibitionsSection from "@/components/home/ExhibitionsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/home/CtaSection";
import PartnersSection from "@/components/home/PartnersSection";
import CountdownTimer from "@/components/home/CountdownTimer";
import NftMarketPreview from "@/components/home/NftMarketPreview";
import { featuredExhibitions } from "@/data/exhibitions";
import { setupRevealAnimations } from "@/utils/animation";

const Index = () => {
  useEffect(() => {
    // Настраиваем анимации при прокрутке
    const cleanupAnimations = setupRevealAnimations();
    
    // Очищаем наблюдатель при размонтировании компонента
    return cleanupAnimations;
  }, []);

  // Дата открытия выставки
  const exhibitionOpenDate = new Date("2025-07-15T18:00:00");

  return (
    <div className="min-h-screen bg-exhibition-anthracite text-exhibition-beige">
      <Header />
      <HeroSection 
        title="Эстамп: от Дюрера к цифре"
        subtitle="Уникальный взгляд на печатную графику как на перспективный инвестиционный актив"
        description="От старинных гравюр до цифровых NFT — выставка демонстрирует, как искусство сохраняет и приумножает свою ценность с течением времени."
      />
      <CountdownTimer targetDate={exhibitionOpenDate} />
      <ExhibitionsSection exhibitions={featuredExhibitions} />
      <FeaturesSection />
      <NftMarketPreview />
      <CtaSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;