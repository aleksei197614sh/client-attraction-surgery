import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('face');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const serviceCategories = {
    face: {
      title: 'Пластика лица',
      services: [
        {
          name: 'Ринопластика',
          description: 'Коррекция формы и размера носа',
          price: 'от 150 000 ₽',
          duration: '2-3 часа',
          recovery: '7-14 дней',
          details: 'Операция по изменению формы носа, устранению горбинки, сужению крыльев носа'
        },
        {
          name: 'Блефаропластика',
          description: 'Коррекция век',
          price: 'от 80 000 ₽',
          duration: '1-2 часа',
          recovery: '5-7 дней',
          details: 'Удаление избытков кожи и жировых грыж в области верхних и нижних век'
        },
        {
          name: 'Фейслифтинг',
          description: 'Подтяжка лица',
          price: 'от 250 000 ₽',
          duration: '3-5 часов',
          recovery: '14-21 день',
          details: 'Комплексная подтяжка кожи лица и шеи для омоложения'
        },
        {
          name: 'Отопластика',
          description: 'Коррекция ушных раковин',
          price: 'от 60 000 ₽',
          duration: '1-2 часа',
          recovery: '7-10 дней',
          details: 'Устранение лопоухости и других деформаций ушных раковин'
        }
      ]
    },
    breast: {
      title: 'Пластика груди',
      services: [
        {
          name: 'Увеличение груди',
          description: 'Маммопластика с имплантами',
          price: 'от 200 000 ₽',
          duration: '2-3 часа',
          recovery: '14-21 день',
          details: 'Увеличение объема груди с помощью силиконовых имплантов'
        },
        {
          name: 'Подтяжка груди',
          description: 'Мастопексия',
          price: 'от 180 000 ₽',
          duration: '2-4 часа',
          recovery: '14-21 день',
          details: 'Подтяжка и коррекция формы груди без изменения размера'
        },
        {
          name: 'Уменьшение груди',
          description: 'Редукционная маммопластика',
          price: 'от 220 000 ₽',
          duration: '3-4 часа',
          recovery: '21-28 дней',
          details: 'Уменьшение размера груди и коррекция формы'
        },
        {
          name: 'Коррекция ареол',
          description: 'Изменение размера и формы ареол',
          price: 'от 50 000 ₽',
          duration: '1 час',
          recovery: '7-10 дней',
          details: 'Уменьшение или коррекция формы ареол сосков'
        }
      ]
    },
    body: {
      title: 'Пластика тела',
      services: [
        {
          name: 'Липосакция',
          description: 'Удаление жировых отложений',
          price: 'от 100 000 ₽',
          duration: '1-3 часа',
          recovery: '7-14 дней',
          details: 'Удаление локальных жировых отложений в различных зонах'
        },
        {
          name: 'Абдоминопластика',
          description: 'Подтяжка живота',
          price: 'от 180 000 ₽',
          duration: '2-4 часа',
          recovery: '21-28 дней',
          details: 'Удаление избытков кожи и подтяжка мышц передней брюшной стенки'
        },
        {
          name: 'Бразильская подтяжка ягодиц',
          description: 'BBL процедура',
          price: 'от 250 000 ₽',
          duration: '3-4 часа',
          recovery: '14-21 день',
          details: 'Увеличение и коррекция формы ягодиц собственным жиром'
        },
        {
          name: 'Подтяжка рук',
          description: 'Брахиопластика',
          price: 'от 120 000 ₽',
          duration: '2-3 часа',
          recovery: '14-21 день',
          details: 'Удаление избытков кожи в области плеч'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cross" className="text-primary" size={24} />
              <span className="text-xl font-bold text-foreground">ПластикКлиник</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/services" className="text-primary font-semibold">Услуги</a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Консультация
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наши услуги
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полный спектр пластических операций с использованием современных методик и оборудования
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="face">Лицо</TabsTrigger>
              <TabsTrigger value="breast">Грудь</TabsTrigger>
              <TabsTrigger value="body">Тело</TabsTrigger>
            </TabsList>

            {Object.entries(serviceCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.services.map((service, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{service.name}</CardTitle>
                            <CardDescription className="mt-2">{service.description}</CardDescription>
                          </div>
                          <Badge variant="secondary" className="text-lg font-semibold">
                            {service.price}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{service.details}</p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Clock" className="text-primary" size={16} />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Calendar" className="text-primary" size={16} />
                            <span className="text-sm">{service.recovery}</span>
                          </div>
                        </div>
                        <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
                          <DialogTrigger asChild>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                              Записаться на консультацию
                            </Button>
                          </DialogTrigger>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Consultation Dialog */}
      <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Записаться на консультацию</DialogTitle>
            <DialogDescription>Заполните форму, и мы свяжемся с вами</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Input placeholder="Ваше имя" />
            <Input placeholder="Телефон" />
            <Input placeholder="Email" />
            <Textarea placeholder="Интересующая услуга" />
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsConsultationOpen(false)}
            >
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;