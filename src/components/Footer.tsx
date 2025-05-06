
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-exhibition-anthracite border-t border-exhibition-gold/20 pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-serif font-semibold text-exhibition-gold mb-6">LUXEART</h3>
            <p className="text-sm text-foreground/80 mb-4">
              Эксклюзивная платформа для инвесторов в искусство и коллекционеров, 
              объединяющая традиции и инновации в мире элитарного искусства.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-foreground/70 hover:text-exhibition-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-exhibition-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-exhibition-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-exhibition-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-exhibition-beige mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/exhibitions" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  Выставки
                </Link>
              </li>
              <li>
                <Link to="/artists" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  Художники
                </Link>
              </li>
              <li>
                <Link to="/investments" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  Инвестиции
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  Мероприятия
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-exhibition-beige mb-6">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  О платформе
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-foreground/70 hover:text-exhibition-gold transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium text-exhibition-beige mb-6">Подписка</h3>
            <p className="text-sm text-foreground/80 mb-4">
              Получайте эксклюзивную информацию о новых выставках и инвестиционных возможностях.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-muted/40 border-exhibition-gold/30 focus:border-exhibition-gold"
              />
              <Button 
                className="bg-exhibition-cinnabar hover:bg-exhibition-cinnabar/90 text-white"
              >
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60">
            <p>© 2025 LUXEART. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy" className="hover:text-exhibition-gold transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/cookies" className="hover:text-exhibition-gold transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
