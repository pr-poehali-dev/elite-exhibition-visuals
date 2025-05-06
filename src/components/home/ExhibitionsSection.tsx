
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ExhibitionCard from "@/components/ExhibitionCard";
import { ExhibitionData } from "@/types/exhibition";

interface ExhibitionsSectionProps {
  exhibitions: ExhibitionData[];
}

const ExhibitionsSection = ({ exhibitions }: ExhibitionsSectionProps) => {
  return (
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
          {exhibitions.map((exhibition, index) => (
            <ExhibitionCard key={index} {...exhibition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
