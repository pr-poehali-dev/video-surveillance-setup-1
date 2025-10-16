import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const portfolio = [
    {
      title: 'Торговый центр "Галерея"',
      description: '120 камер, система распознавания лиц',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
    },
    {
      title: 'Производственный комплекс',
      description: '85 камер, периметральная защита',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop'
    },
    {
      title: 'Офисный центр "Престиж"',
      description: '45 камер, контроль доступа',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop'
    },
    {
      title: 'Жилой комплекс',
      description: '200+ камер, умное видеонаблюдение',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4">Портфолио</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Реализованные проекты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 500 успешно внедренных систем видеонаблюдения
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
