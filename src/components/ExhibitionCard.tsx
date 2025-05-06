
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ExhibitionCardProps {
  title: string;
  artist: string;
  date: string;
  location: string;
  image: string;
  tags: string[];
  price: string;
  isVIP?: boolean;
}

const ExhibitionCard = ({
  title,
  artist,
  date,
  location,
  image,
  tags,
  price,
  isVIP = false,
}: ExhibitionCardProps) => {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 border-border/40 bg-card/50 backdrop-blur-md">
      <div className="relative aspect-[16/9]">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full"
        />
        {isVIP && (
          <Badge className="absolute top-3 right-3 bg-exhibition-gold text-exhibition-anthracite">
            VIP
          </Badge>
        )}
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center mb-1">
          <p className="text-sm font-medium text-muted-foreground">{date}</p>
          <p className="text-sm font-medium text-exhibition-gold">{price}</p>
        </div>
        <CardTitle className="text-xl font-serif tracking-tight">{title}</CardTitle>
        <CardDescription className="text-foreground/70">
          {artist} • {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-exhibition-aquamarine/50 text-exhibition-aquamarine text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-exhibition-darkblue hover:bg-exhibition-darkblue/90 text-white">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExhibitionCard;
