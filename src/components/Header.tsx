import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Search } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-exhibition-anthracite/90 backdrop-blur-md border-b border-exhibition-gold/20">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-6">
            <span className="text-exhibition-gold font-serif text-xl font-bold tracking-wide">
              MULTIPLE<span className="text-exhibition-aquamarine">ART</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-foreground/80 hover:text-exhibition-gold transition-colors text-sm font-medium">
              О выставке
            </Link>
            <Link to="/program" className="text-foreground/80 hover:text-exhibition-gold transition-colors text-sm font-medium">
              Программа
            </Link>
            <Link to="/artists" className="text-foreground/80 hover:text-exhibition-gold transition-colors text-sm font-medium">
              Артисты
            </Link>
            <Link to="/gallery" className="text-foreground/80 hover:text-exhibition-gold transition-colors text-sm font-medium">
              Галерея
            </Link>
            <div className="relative group">
              <button className="flex items-center text-foreground/80 hover:text-exhibition-aquamarine transition-colors text-sm font-medium">
                NFT <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 rounded-md shadow-lg bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="py-2 px-3">
                  <Link to="/nft/market" className="block py-2 text-sm text-foreground/80 hover:text-exhibition-aquamarine">
                    NFT-Маркет
                  </Link>
                  <Link to="/nft/create" className="block py-2 text-sm text-foreground/80 hover:text-exhibition-aquamarine">
                    Создать NFT
                  </Link>
                  <Link to="/nft/collection" className="block py-2 text-sm text-foreground/80 hover:text-exhibition-aquamarine">
                    Коллекция
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button aria-label="Поиск" className="text-foreground/80 hover:text-exhibition-gold p-2 rounded-full">
            <Search size={20} />
          </button>
          
          <Button className="bg-exhibition-gold hover:bg-exhibition-gold/90 text-exhibition-anthracite hidden md:inline-flex">
            Купить билет
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-exhibition-anthracite border-l border-exhibition-gold/20">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/about" className="text-foreground hover:text-exhibition-gold py-2 transition-colors">
                  О выставке
                </Link>
                <Link to="/program" className="text-foreground hover:text-exhibition-gold py-2 transition-colors">
                  Программа
                </Link>
                <Link to="/artists" className="text-foreground hover:text-exhibition-gold py-2 transition-colors">
                  Артисты
                </Link>
                <Link to="/gallery" className="text-foreground hover:text-exhibition-gold py-2 transition-colors">
                  Галерея
                </Link>
                <Link to="/nft" className="text-foreground hover:text-exhibition-aquamarine py-2 transition-colors">
                  NFT-Маркет
                </Link>
                <Link to="/tickets" className="text-foreground hover:text-exhibition-gold py-2 transition-colors">
                  Купить билет
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;