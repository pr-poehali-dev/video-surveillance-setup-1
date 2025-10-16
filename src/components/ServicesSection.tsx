import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: 'Camera',
      title: 'Проектирование систем',
      description: 'Разработка индивидуального проекта видеонаблюдения с учетом особенностей объекта'
    },
    {
      icon: 'Settings',
      title: 'Монтаж и установка',
      description: 'Профессиональная установка оборудования с гарантией качества работ'
    },
    {
      icon: 'Monitor',
      title: 'Настройка и интеграция',
      description: 'Настройка системы, подключение к мобильным устройствам и интеграция с другими системами'
    },
    {
      icon: 'Shield',
      title: 'Техническая поддержка',
      description: 'Круглосуточная поддержка и обслуживание установленных систем'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Наши услуги</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Комплексные решения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл работ от проектирования до технической поддержки
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={28} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
