import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Shield" className="text-primary" size={32} />
          <span className="text-2xl font-bold gradient-text">MOSKCOMPANY</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
          <a href="#about" className="hover:text-primary transition-colors">О компании</a>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
        </div>
        <div className="flex items-center gap-2">
          <Button className="hidden md:flex" asChild>
            <a href="tel:+79003004545">
              <Icon name="Phone" size={16} className="mr-2" />
              8 (900) 300-45-45
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#services" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#equipment" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Оборудование
            </a>
            <a 
              href="#portfolio" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Портфолио
            </a>
            <a 
              href="#about" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              О компании
            </a>
            <a 
              href="#contacts" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="w-full" asChild>
              <a href="tel:+79003004545">
                <Icon name="Phone" size={16} className="mr-2" />
                8 (900) 300-45-45
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;