
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-exhibition-anthracite/95 to-exhibition-anthracite">
      <div className="container px-4 md:px-6">
        <div className="bg-exhibition-darkblue/30 border border-exhibition-gold/20 rounded-2xl p-8 md:p-12 relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1170&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Получите персональную консультацию
            </h2>
            <p className="text-foreground/80 text-lg mb-6">
              Наши арт-консультанты помогут выбрать оптимальную стратегию инвестирования в искусство, 
              основываясь на ваших предпочтениях и финансовых целях.
            </p>
            <Button className="bg-exhibition-cinnabar hover:bg-exhibition-cinnabar/90 text-white text-base px-6 py-6">
              Запросить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
