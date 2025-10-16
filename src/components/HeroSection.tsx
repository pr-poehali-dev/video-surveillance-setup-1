import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Инновационные решения
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Системы видеонаблюдения нового поколения
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Защитите свой бизнес с помощью современных технологий искусственного интеллекта и облачного хранения данных
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="group">
                <Icon name="Calendar" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Техподдержка</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop" 
              alt="Система видеонаблюдения"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
