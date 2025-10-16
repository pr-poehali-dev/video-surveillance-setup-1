import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">О компании</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Надежность и инновации</h2>
            <p className="text-lg text-muted-foreground mb-6">
              MOSKCOMPANY — ведущий интегратор систем безопасности с 12-летним опытом работы. Мы специализируемся на проектировании и внедрении современных систем видеонаблюдения с использованием технологий искусственного интеллекта.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Наша команда сертифицированных специалистов гарантирует высокое качество работ на всех этапах реализации проекта — от проектирования до технической поддержки.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                <div>
                  <div className="font-semibold mb-1">Сертификация</div>
                  <div className="text-sm text-muted-foreground">Официальные партнеры производителей</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Award" className="text-primary mt-1" size={24} />
                <div>
                  <div className="font-semibold mb-1">Гарантия</div>
                  <div className="text-sm text-muted-foreground">До 5 лет на оборудование</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
              alt="Команда"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
