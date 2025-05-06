
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-exhibition-anthracite/90 via-exhibition-anthracite/70 to-exhibition-anthracite"></div>
        <img 
          src="https://images.unsplash.com/photo-1545033131-485ea67fd7c3?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Art Exhibition" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in">
            Искусство как <span className="text-exhibition-gold">инвестиция</span> в будущее
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl animate-slide-up">
            Эксклюзивная платформа для ценителей искусства и инвесторов, 
            объединяющая традиционные и цифровые формы художественных активов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <Button className="bg-exhibition-gold hover:bg-exhibition-gold/90 text-exhibition-anthracite text-base px-6 py-6">
              Каталог выставок
            </Button>
            <Button variant="outline" className="border-exhibition-gold/50 hover:border-exhibition-gold text-exhibition-gold hover:bg-exhibition-gold/10 text-base px-6 py-6">
              Инвестиционные возможности
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
