import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Shield" className="text-primary" size={28} />
              <span className="text-xl font-bold">MOSKCOMPANY</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Профессиональные системы видеонаблюдения для вашей безопасности
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Услуги</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Проектирование</li>
              <li>Монтаж</li>
              <li>Настройка</li>
              <li>Поддержка</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Компания</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>О нас</li>
              <li>Портфолио</li>
              <li>Сертификаты</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Контакты</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>+7 (495) 123-45-67</li>
              <li>info@securevision.ru</li>
              <li>Москва, ул. Примерная, 1</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          © 2024 MOSKCOMPANY. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
