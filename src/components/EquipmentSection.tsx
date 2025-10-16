import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const EquipmentSection = () => {
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

  return (
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
  );
};

export default EquipmentSection;
