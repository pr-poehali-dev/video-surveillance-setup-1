import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactsSection = () => {
  const { toast } = useToast();
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

  return (
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
  );
};

export default ContactsSection;
