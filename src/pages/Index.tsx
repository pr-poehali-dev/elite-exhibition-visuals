import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CtaSection from "@/components/home/CtaSection";
import CountdownTimer from "@/components/home/CountdownTimer";
import PartnersSection from "@/components/home/PartnersSection";
import NftMarketPreview from "@/components/home/NftMarketPreview";
import { setupRevealAnimations } from "@/utils/animation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GlitchEffect } from "@/components/effects/GlitchEffect";

const Index = () => {
  // Настроить анимации появления элементов
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);

  // Дата открытия выставки (пример)
  const exhibitionDate = new Date("2025-10-15T10:00:00");

  return (
    <>
      <Header />
      <main>
        <HeroSection 
          title={<><GlitchEffect text="Эстамп:" /> <span className="text-exhibition-gold">от Дюрера к цифре</span></>}
          subtitle="15 октября - 5 ноября, 2025, Москва"
          description="Уникальная выставка, объединяющая классические техники гравюры и современные NFT-технологии. Откройте для себя новые возможности инвестирования в искусство."
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