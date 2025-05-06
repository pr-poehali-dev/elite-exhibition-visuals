
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExhibitionCard from "@/components/ExhibitionCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, PaintBucket, Award } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Анимация при прокрутке
    const elements = document.querySelectorAll('.reveal');
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });
    
    return () => {
      if (observerRef.current) {
        elements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  const featuredExhibitions = [
    {
      title: "Цифровая Элегия",
      artist: "Алексей Вернов",
      date: "15-30 мая 2025",
      location: "Галерея Модерн",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=600&h=338&auto=format&fit=crop",
      tags: ["NFT", "Цифровое искусство"],
      price: "от €2,500",
      isVIP: true
    },
    {
      title: "Хроники Наследия",
      artist: "Елена Форте",
      date: "10-25 июня 2025",
      location: "Арт-центр Престиж",
      image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=600&h=338&auto=format&fit=crop",
      tags: ["Живопись", "Коллекционное"],
      price: "от €3,800",
      isVIP: false
    },
    {
      title: "Метаморфозы",
      artist: "Джеймс Риверс",
      date: "5-20 июля 2025",
      location: "Галерея Континуум",
      image: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=600&h=338&auto=format&fit=crop",
      tags: ["Скульптура", "Современное"],
      price: "от €5,000",
      isVIP: true
    }
  ];

  return (
    <div className="min-h-screen bg-exhibition-anthracite text-exhibition-beige">
      <Header />
      
      {/* Hero секция */}
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
      
      {/* Следующие выставки */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-exhibition-anthracite to-exhibition-anthracite/95">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 reveal">
                Актуальные <span className="text-exhibition-gold">экспозиции</span>
              </h2>
              <p className="text-foreground/70 reveal">
                Исследуйте выставки, которые привлекают внимание коллекционеров и инвесторов со всего мира.
              </p>
            </div>
            <Button variant="ghost" className="text-exhibition-gold hover:text-exhibition-gold/90 hover:bg-exhibition-gold/10 reveal">
              Все выставки <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {featuredExhibitions.map((exhibition, index) => (
              <ExhibitionCard key={index} {...exhibition} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Преимущества */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-exhibition-darkblue/30 to-exhibition-anthracite/95">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Почему <span className="text-exhibition-gold">LUXE</span>ART
            </h2>
            <p className="text-foreground/70">
              Мы предоставляем уникальные возможности на пересечении искусства и инвестиций
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="bg-card/40 backdrop-blur-sm border border-exhibition-gold/10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-exhibition-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-exhibition-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Инвестиционный потенциал</h3>
              <p className="text-foreground/70">
                Аналитика и экспертное мнение о перспективных художниках и направлениях искусства для инвестирования.
              </p>
            </div>
            
            <div className="bg-card/40 backdrop-blur-sm border border-exhibition-gold/10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-exhibition-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <PaintBucket className="h-6 w-6 text-exhibition-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Эксклюзивный доступ</h3>
              <p className="text-foreground/70">
                Закрытые предпоказы, VIP-мероприятия и персональные встречи с художниками и кураторами.
              </p>
            </div>
            
            <div className="bg-card/40 backdrop-blur-sm border border-exhibition-gold/10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-exhibition-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-exhibition-gold" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Проверенные активы</h3>
              <p className="text-foreground/70">
                Все представленные произведения проходят тщательную экспертизу подлинности и провенанс.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
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
      
      {/* Отзывы/Партнеры */}
      <section className="py-16 md:py-24 bg-exhibition-anthracite border-t border-exhibition-gold/10">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Сотрудничество с <span className="text-exhibition-aquamarine">лидерами</span> рынка
            </h2>
            <p className="text-foreground/70">
              Мы гордимся партнерством с ведущими галереями, аукционными домами и финансовыми институтами
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center reveal">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="h-12 w-32 bg-foreground/10 rounded-md flex items-center justify-center">
                  <div className="font-serif text-exhibition-gold text-lg font-medium">
                    PARTNER {i}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
