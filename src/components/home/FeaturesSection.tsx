
import { TrendingUp, PaintBucket, Award } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Инвестиционный потенциал",
      description: "Аналитика и экспертное мнение о перспективных художниках и направлениях искусства для инвестирования."
    },
    {
      icon: PaintBucket,
      title: "Эксклюзивный доступ",
      description: "Закрытые предпоказы, VIP-мероприятия и персональные встречи с художниками и кураторами."
    },
    {
      icon: Award,
      title: "Проверенные активы",
      description: "Все представленные произведения проходят тщательную экспертизу подлинности и провенанс."
    }
  ];

  return (
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
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
