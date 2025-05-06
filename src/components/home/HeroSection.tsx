import { Button } from "@/components/ui/button";
import { GlitchEffect } from "@/components/effects/GlitchEffect";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Анимированная проекция гравюры Дюрера, трансформирующаяся в цифровой видео-арт */}
        <div className="absolute inset-0 bg-gradient-to-b from-exhibition-anthracite/90 via-exhibition-anthracite/70 to-exhibition-anthracite"></div>
        <div className="print-to-digital-animation absolute inset-0 opacity-40">
          {/* Это будет заменено реальной анимацией */}
          <div className="bg-[url('https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=2071&auto=format&fit=crop')] absolute inset-0 bg-cover bg-center transition-opacity duration-[8s] animate-crossfade-1"></div>
          <div className="bg-[url('https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=1170&auto=format&fit=crop')] absolute inset-0 bg-cover bg-center transition-opacity duration-[8s] animate-crossfade-2"></div>
        </div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          {/* Название выставки со стилизацией под готический шрифт с glitch-эффектом */}
          <h1 className="text-4xl md:text-6xl font-gothic leading-tight mb-4 animate-fade-in">
            <GlitchEffect text={title} />
          </h1>
          <h2 className="text-xl md:text-2xl text-exhibition-gold font-medium mb-4 animate-slide-up">
            {subtitle}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl animate-slide-up">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Button className="bg-exhibition-gold hover:bg-exhibition-gold/90 text-exhibition-anthracite text-base px-6 py-6">
              Купить билет
            </Button>
            <Button variant="outline" className="border-exhibition-gold/50 hover:border-exhibition-gold text-exhibition-gold hover:bg-exhibition-gold/10 text-base px-6 py-6">
              Программа
            </Button>
            <Button variant="outline" className="border-exhibition-aquamarine/50 hover:border-exhibition-aquamarine text-exhibition-aquamarine hover:bg-exhibition-aquamarine/10 text-base px-6 py-6">
              Арт-маркет
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;