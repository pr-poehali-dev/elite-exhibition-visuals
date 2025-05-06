
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
  const exhibitionDate = new Date("2025-07-20T10:00:00");

  return (
    <>
      <Header />
      <main>
        <HeroSection 
          title={<><GlitchEffect text="MULTIPLE" /> <span className="text-exhibition-gold">ART</span> 2025</>}
          subtitle="Международная выставка искусства и NFT-инвестиций"
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
