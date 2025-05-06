
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Дюреровская гравюра с наложенным градиентом */}
        <div className="absolute inset-0 bg-gradient-to-b from-exhibition-anthracite/90 via-exhibition-anthracite/70 to-exhibition-anthracite"></div>
        <div className="engraving-animation absolute inset-0 opacity-30">
          <img 
            src="https://cdn.poehali.dev/files/a5a5d9eb-24fb-4b6d-8fa8-ba27a8152c1c.jpg" 
            alt="Гравюра Дюрера" 
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-4 animate-fade-in">
            {title}
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
