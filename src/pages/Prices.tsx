import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const priceCategories = {
    face: {
      title: 'Пластика лица',
      services: [
        { name: 'Ринопластика первичная', price: '150 000 - 200 000', consultation: '3 000' },
        { name: 'Ринопластика повторная', price: '200 000 - 300 000', consultation: '5 000' },
        { name: 'Блефаропластика верхних век', price: '60 000 - 80 000', consultation: '2 000' },
        { name: 'Блефаропластика нижних век', price: '70 000 - 90 000', consultation: '2 000' },
        { name: 'Блефаропластика круговая', price: '120 000 - 150 000', consultation: '3 000' },
        { name: 'Фейслифтинг SMAS', price: '250 000 - 350 000', consultation: '5 000' },
        { name: 'Мини-фейслифтинг', price: '150 000 - 200 000', consultation: '3 000' },
        { name: 'Отопластика', price: '60 000 - 80 000', consultation: '2 000' },
        { name: 'Хейлопластика', price: '40 000 - 60 000', consultation: '2 000' },
        { name: 'Ментопластика', price: '80 000 - 120 000', consultation: '3 000' }
      ]
    },
    breast: {
      title: 'Пластика груди',
      services: [
        { name: 'Увеличение груди (импланты)', price: '200 000 - 280 000', consultation: '3 000' },
        { name: 'Увеличение груди (собственный жир)', price: '180 000 - 250 000', consultation: '3 000' },
        { name: 'Подтяжка груди', price: '180 000 - 220 000', consultation: '3 000' },
        { name: 'Уменьшение груди', price: '220 000 - 280 000', consultation: '4 000' },
        { name: 'Коррекция ареол', price: '50 000 - 70 000', consultation: '2 000' },
        { name: 'Коррекция асимметрии', price: '150 000 - 200 000', consultation: '3 000' },
        { name: 'Замена имплантов', price: '120 000 - 180 000', consultation: '3 000' },
        { name: 'Удаление имплантов', price: '80 000 - 120 000', consultation: '2 000' },
        { name: 'Гинекомастия', price: '100 000 - 150 000', consultation: '3 000' }
      ]
    },
    body: {
      title: 'Пластика тела',
      services: [
        { name: 'Липосакция (1 зона)', price: '60 000 - 100 000', consultation: '2 000' },
        { name: 'Липосакция (2-3 зоны)', price: '120 000 - 180 000', consultation: '3 000' },
        { name: 'Липосакция (4+ зон)', price: '200 000 - 300 000', consultation: '4 000' },
        { name: 'Абдоминопластика', price: '180 000 - 250 000', consultation: '4 000' },
        { name: 'Мини-абдоминопластика', price: '120 000 - 180 000', consultation: '3 000' },
        { name: 'Подтяжка рук', price: '120 000 - 180 000', consultation: '3 000' },
        { name: 'Подтяжка бедер', price: '150 000 - 220 000', consultation: '4 000' },
        { name: 'BBL (бразильская подтяжка)', price: '250 000 - 350 000', consultation: '5 000' },
        { name: 'Липофилинг ягодиц', price: '180 000 - 250 000', consultation: '4 000' }
      ]
    }
  };

  const packages = [
    {
      name: 'Базовый',
      description: 'Одна операция с базовым сервисом',
      features: [
        'Консультация хирурга',
        'Предоперационное обследование',
        'Операция',
        'Послеоперационное наблюдение (1 месяц)',
        'Перевязки'
      ],
      discount: '0%'
    },
    {
      name: 'Комфорт',
      description: 'Расширенный пакет услуг',
      features: [
        'Все из базового пакета',
        'VIP-палата',
        'Персональная медсестра',
        'Послеоперационное наблюдение (3 месяца)',
        'Физиотерапия',
        'Компрессионное белье'
      ],
      discount: '10%'
    },
    {
      name: 'Премиум',
      description: 'Максимальный комфорт и сервис',
      features: [
        'Все из пакета Комфорт',
        'Трансфер до клиники и обратно',
        'Сопровождение переводчика',
        'Послеоперационное наблюдение (6 месяцев)',
        'Косметологические процедуры',
        'Гарантия на результат'
      ],
      discount: '15%'
    }
  ];

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceName) 
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
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
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/prices" className="text-primary font-semibold">Цены</a>
              <a href="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Калькулятор
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
              Цены на услуги
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей. Все цены указаны в рублях и включают НДС.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Icon name="Calculator" className="mr-2" size={20} />
                    Рассчитать стоимость
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button variant="outline" size="lg">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать прайс-лист
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="face" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="face">Лицо</TabsTrigger>
              <TabsTrigger value="breast">Грудь</TabsTrigger>
              <TabsTrigger value="body">Тело</TabsTrigger>
            </TabsList>

            {Object.entries(priceCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription>
                      Цены указаны в рублях. Точная стоимость определяется на консультации.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.services.map((service, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between py-4">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{service.name}</h4>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="text-right">
                                <p className="text-sm text-muted-foreground">Консультация</p>
                                <p className="font-medium">{service.consultation} ₽</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-muted-foreground">Операция</p>
                                <p className="font-bold text-lg">{service.price} ₽</p>
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => toggleService(service.name)}
                                className={selectedServices.includes(service.name) ? 'bg-primary text-primary-foreground' : ''}
                              >
                                {selectedServices.includes(service.name) ? 'Выбрано' : 'Выбрать'}
                              </Button>
                            </div>
                          </div>
                          {index < category.services.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Пакеты услуг</h2>
            <p className="text-lg text-muted-foreground">Выберите оптимальный пакет для максимального комфорта</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={index === 1 ? 'border-primary shadow-lg scale-105' : ''}>
                <CardHeader className="text-center">
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    {pkg.discount !== '0%' && (
                      <Badge variant="secondary">Скидка {pkg.discount}</Badge>
                    )}
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Icon name="Check" className="text-green-500" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Способы оплаты</h2>
            <p className="text-lg text-muted-foreground">Удобные варианты оплаты для вашего комфорта</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="CreditCard" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Банковские карты</h3>
                <p className="text-sm text-muted-foreground">Visa, MasterCard, МИР</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Banknote" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Наличные</h3>
                <p className="text-sm text-muted-foreground">Оплата в клинике</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Building" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Банковский перевод</h3>
                <p className="text-sm text-muted-foreground">Безналичный расчет</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Calendar" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Рассрочка</h3>
                <p className="text-sm text-muted-foreground">До 12 месяцев</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Dialog */}
      <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Калькулятор стоимости</DialogTitle>
            <DialogDescription>Выберите интересующие услуги для расчета стоимости</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {selectedServices.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Выбранные услуги</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedServices.map((service, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{service}</span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => toggleService(service)}
                        >
                          <Icon name="X" size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            
            <div className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Телефон" />
              <Input placeholder="Email" />
              <Textarea placeholder="Дополнительные пожелания" />
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setIsCalculatorOpen(false)}
              >
                Отмена
              </Button>
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setIsCalculatorOpen(false)}
              >
                Получить расчет
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Prices;