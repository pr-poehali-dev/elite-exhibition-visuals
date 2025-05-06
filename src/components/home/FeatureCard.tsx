
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card/40 backdrop-blur-sm border border-exhibition-gold/10 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="bg-exhibition-gold/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-exhibition-gold" />
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
