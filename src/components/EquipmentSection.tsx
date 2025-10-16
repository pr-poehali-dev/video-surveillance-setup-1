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
        { name: 'DSSL DS-2CD2043G2', resolution: '4MP, IR 30м', price: 'от 8 500 ₽' },
        { name: 'DSSL DS-H216Q', resolution: '2MP, IR 20м', price: 'от 6 200 ₽' },
        { name: 'DSSL DS-H254Z', resolution: '5MP, Zoom 4x', price: 'от 12 900 ₽' },
        { name: 'DSSL DS-I252W', resolution: '5MP, Wi-Fi', price: 'от 9 800 ₽' },
        { name: 'DSSL DS-I123', resolution: '2MP, Compact', price: 'от 5 400 ₽' },
        { name: 'DSSL DS-H456Q', resolution: '4MP, IR 40м', price: 'от 10 200 ₽' }
      ]
    },
    {
      category: 'Видеорегистраторы',
      items: [
        { name: 'DSSL NVR-04M', resolution: '4 канала, 4K', price: 'от 12 000 ₽' },
        { name: 'DSSL NVR-08M', resolution: '8 каналов, 4K', price: 'от 18 500 ₽' },
        { name: 'DSSL NVR-16M', resolution: '16 каналов, 4K', price: 'от 28 000 ₽' },
        { name: 'DSSL DVR-08H', resolution: '8 каналов, AHD', price: 'от 14 300 ₽' },
        { name: 'DSSL NVR-32M', resolution: '32 канала, 4K', price: 'от 42 000 ₽' },
        { name: 'DSSL NVR-64M', resolution: '64 канала, 4K', price: 'от 68 000 ₽' }
      ]
    },
    {
      category: 'Серверное ПО',
      items: [
        { name: 'DSSL Trassir Pro', resolution: '16 каналов', price: 'от 35 000 ₽' },
        { name: 'DSSL NetStation', resolution: 'До 64 камер', price: 'от 45 000 ₽' },
        { name: 'DSSL VideoOS', resolution: 'До 128 камер', price: 'от 85 000 ₽' },
        { name: 'DSSL Analytics AI', resolution: 'Модуль аналитики', price: 'от 28 000 ₽' },
        { name: 'DSSL Face Recognition', resolution: 'Распознавание лиц', price: 'от 52 000 ₽' },
        { name: 'DSSL LPR Module', resolution: 'Распознавание номеров', price: 'от 38 000 ₽' }
      ]
    },
    {
      category: 'Аксессуары',
      items: [
        { name: 'DSSL PoE Switch 8p', resolution: '8 портов PoE', price: 'от 7 800 ₽' },
        { name: 'DSSL PoE Switch 16p', resolution: '16 портов PoE', price: 'от 14 500 ₽' },
        { name: 'DSSL UPS-1000', resolution: 'ИБП 1000VA', price: 'от 9 200 ₽' },
        { name: 'DSSL HDD 4TB', resolution: 'Жесткий диск 4TB', price: 'от 8 900 ₽' },
        { name: 'DSSL Bracket Kit', resolution: 'Кронштейны', price: 'от 1 200 ₽' },
        { name: 'DSSL Cable UTP 305m', resolution: 'Кабель витая пара', price: 'от 4 500 ₽' }
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
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-4 mb-8">
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