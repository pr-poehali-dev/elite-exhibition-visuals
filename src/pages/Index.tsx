import React, { useEffect } from "react");
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/home/CtaSection";
import PartnersSection from "@/components/home/PartnersSection";
import CountdownTimer from "@/components/home/CountdownTimer";
import NftMarketPreview from "@/components/home/NftMarketPreview";
import { setupRevealAnimations } from "@/utils/animation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);

  // Установка даты для таймера обратного отсчета - пример: 15 мая 2025
  const exhibitionDate = new Date(2025, 4, 15, 10, 0, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-exhibition-anthracite text-foreground overflow-hidden">
        <HeroSection 
          title="Эстамп: от Дюрера к цифре"
          subtitle="15 октября - 5 ноября 2025, Москва"
          description="Уникальный взгляд на печатную графику как на перспективный инвестиционный актив. От старинных гравюр до цифровых NFT — искусство, сохраняющее ценность сквозь время."
        />
        
        <CountdownTimer targetDate={exhibitionDate} />
        
        <FeaturesSection />
        
        <NftMarketPreview />
        
        <CtaSection />
        
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
};
export default Index;