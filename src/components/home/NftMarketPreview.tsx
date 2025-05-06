
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NftMarketPreview = () => {
  // Примеры NFT работ
  const nftExamples = [
    {
      title: "Меланхолия XII",
      artist: "Digital Dürer",
      price: "0.15 ETH",
      image: "https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Рыцарь цифрового воображения",
      artist: "Crypto Engraver",
      price: "0.25 ETH",
      image: "https://images.unsplash.com/photo-1578741231993-3b8dc572a122?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Polyform Genesis",
      artist: "Neo Renaissance",
      price: "0.18 ETH",
      image: "https://images.unsplash.com/photo-1618005198919-177e9dd3b6c4?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-exhibition-darkblue/40 to-exhibition-anthracite">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 reveal">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              <span className="text-exhibition-aquamarine">NFT</span>-маркет
            </h2>
            <p className="text-foreground/70">
              Уникальная возможность приобрести цифровые работы современных художников, вдохновленные классическими эстампами.
            </p>
          </div>
          <Button variant="ghost" className="text-exhibition-aquamarine hover:text-exhibition-aquamarine/90 hover:bg-exhibition-aquamarine/10">
            Все NFT-работы <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 reveal">
          {nftExamples.map((nft, index) => (
            <Card key={index} className="overflow-hidden transition-transform hover:scale-[1.02] duration-300 bg-card/30 border-exhibition-aquamarine/20 backdrop-blur-sm">
              <div className="aspect-square relative">
                <img src={nft.image} alt={nft.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                  <h3 className="text-lg font-medium text-white">{nft.title}</h3>
                  <p className="text-sm text-white/70">{nft.artist}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-exhibition-aquamarine font-medium">{nft.price}</span>
                    <Button size="sm" variant="outline" className="border-exhibition-aquamarine/50 text-exhibition-aquamarine hover:bg-exhibition-aquamarine/20">
                      Купить
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-exhibition-darkblue/20 border border-exhibition-aquamarine/20 rounded-xl p-6 md:p-8 text-center reveal">
          <h3 className="text-2xl font-serif font-medium mb-4">Создай свой уникальный NFT</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
            Загрузите изображение, выберите фильтр в стиле Дюрера и получите уникальный токен, который можно продать на маркетплейсе.
          </p>
          <Button className="bg-exhibition-aquamarine hover:bg-exhibition-aquamarine/90 text-black">
            Создать NFT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NftMarketPreview;
