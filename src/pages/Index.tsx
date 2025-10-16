import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш специалист свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

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

  const equipment = [
    {
      category: 'IP-камеры',
      items: [
        { name: 'Hikvision DS-2CD2043G2', resolution: '4MP', price: 'от 8 500 ₽' },
        { name: 'Dahua IPC-HFW2431S', resolution: '4MP', price: 'от 7 200 ₽' },
        { name: 'Uniview IPC2124SR3', resolution: '4MP', price: 'от 6 900 ₽' }
      ]
    },
    {
      category: 'Видеорегистраторы',
      items: [
        { name: 'Hikvision DS-7608NI-K2', resolution: '8 каналов', price: 'от 15 000 ₽' },
        { name: 'Dahua NVR4108HS', resolution: '8 каналов', price: 'от 13 500 ₽' },
        { name: 'Uniview NVR301-08S2', resolution: '8 каналов', price: 'от 12 800 ₽' }
      ]
    },
    {
      category: 'Аналитика',
      items: [
        { name: 'Распознавание лиц', resolution: 'AI модуль', price: 'от 25 000 ₽' },
        { name: 'Подсчет посетителей', resolution: 'AI модуль', price: 'от 20 000 ₽' },
        { name: 'Распознавание номеров', resolution: 'AI модуль', price: 'от 30 000 ₽' }
      ]
    }
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
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
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
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
              <Button className="w-full">
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        )}
      </nav>

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

      <section id="equipment" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Оборудование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Работаем только с ведущими производителями
            </p>
          </div>
          <Tabs defaultValue="IP-камеры" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              {equipment.map((cat) => (
                <TabsTrigger key={cat.category} value={cat.category}>
                  {cat.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {equipment.map((cat) => (
              <TabsContent key={cat.category} value={cat.category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.resolution}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{item.price}</span>
                          <Button size="sm">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

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

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Бесплатная консультация</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите расчет стоимости в течение 24 часов
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем объекте и задачах..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-semibold mb-2">Телефон</div>
                <div className="text-muted-foreground">+7 (495) 123-45-67</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-semibold mb-2">Email</div>
                <div className="text-muted-foreground">info@securevision.ru</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-semibold mb-2">Адрес</div>
                <div className="text-muted-foreground">Москва, ул. Примерная, 1</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;