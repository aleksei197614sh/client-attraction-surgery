import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [selectedOffice, setSelectedOffice] = useState('main');

  const offices = {
    main: {
      name: 'Главный офис',
      address: 'г. Москва, ул. Тверская, д. 15, стр. 1',
      phone: '+7 (495) 123-45-67',
      email: 'info@plastikklinik.ru',
      hours: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00, Вс: выходной',
      metro: 'м. Тверская, Пушкинская',
      parking: 'Подземная парковка',
      coordinates: { lat: 55.7558, lng: 37.6176 }
    },
    branch: {
      name: 'Филиал на Арбате',
      address: 'г. Москва, ул. Арбат, д. 25',
      phone: '+7 (495) 987-65-43',
      email: 'arbat@plastikklinik.ru',
      hours: 'Пн-Пт: 10:00-19:00, Сб: 11:00-17:00, Вс: выходной',
      metro: 'м. Арбатская',
      parking: 'Наземная парковка',
      coordinates: { lat: 55.7520, lng: 37.5924 }
    }
  };

  const socialLinks = [
    { name: 'ВКонтакте', url: 'https://vk.com/plastikklinik', icon: 'Users' },
    { name: 'Telegram', url: 'https://t.me/plastikklinik', icon: 'MessageCircle' },
    { name: 'WhatsApp', url: 'https://wa.me/74951234567', icon: 'Phone' },
    { name: 'Instagram', url: 'https://instagram.com/plastikklinik', icon: 'Camera' },
    { name: 'YouTube', url: 'https://youtube.com/@plastikklinik', icon: 'Play' }
  ];

  const faqItems = [
    {
      question: 'Как записаться на консультацию?',
      answer: 'Вы можете записаться по телефону, через форму на сайте или в мессенджерах. Консультация проводится по предварительной записи.'
    },
    {
      question: 'Сколько стоит консультация?',
      answer: 'Стоимость первичной консультации составляет от 2000 до 5000 рублей в зависимости от сложности случая.'
    },
    {
      question: 'Есть ли парковка?',
      answer: 'Да, в главном офисе есть подземная парковка, в филиале - наземная. Парковка бесплатная для пациентов.'
    },
    {
      question: 'Можно ли получить консультацию онлайн?',
      answer: 'Да, мы проводим предварительные онлайн-консультации по видеосвязи. Запишитесь через форму на сайте.'
    }
  ];

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
              <a href="/prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="/contacts" className="text-primary font-semibold">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Контакты
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь с записью на консультацию.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Позвонить
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="MessageCircle" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-muted-foreground">@plastikklinik</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Написать
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Mail" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@plastikklinik.ru</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Написать
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon name="Calendar" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Запись онлайн</h3>
                <p className="text-muted-foreground">24/7</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши офисы</h2>
            <p className="text-lg text-muted-foreground">Выберите удобное для вас расположение</p>
          </div>
          
          <Tabs value={selectedOffice} onValueChange={setSelectedOffice} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="main">Главный офис</TabsTrigger>
              <TabsTrigger value="branch">Филиал на Арбате</TabsTrigger>
            </TabsList>

            {Object.entries(offices).map(([key, office]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Icon name="MapPin" className="text-primary" size={24} />
                        <span>{office.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Адрес</p>
                          <p className="text-muted-foreground">{office.address}</p>
                          <Badge variant="secondary" className="mt-1">{office.metro}</Badge>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Phone" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Телефон</p>
                          <p className="text-muted-foreground">{office.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Mail" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-muted-foreground">{office.email}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Clock" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Часы работы</p>
                          <p className="text-muted-foreground">{office.hours}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Car" className="text-primary mt-1" size={20} />
                        <div>
                          <p className="font-semibold">Парковка</p>
                          <p className="text-muted-foreground">{office.parking}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-0">
                      <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Icon name="Map" className="mx-auto mb-2 text-blue-500" size={48} />
                          <p className="text-blue-700">Карта офиса</p>
                          <p className="text-sm text-blue-600 mt-2">{office.address}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму, и мы свяжемся с вами в течение 15 минут в рабочее время.
              </p>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="Ваше имя" />
                      <Input placeholder="Телефон" />
                    </div>
                    <Input placeholder="Email" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Интересующая услуга" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Консультация</SelectItem>
                        <SelectItem value="rhinoplasty">Ринопластика</SelectItem>
                        <SelectItem value="mammoplasty">Маммопластика</SelectItem>
                        <SelectItem value="liposuction">Липосакция</SelectItem>
                        <SelectItem value="facelift">Фейслифтинг</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Ваш вопрос или комментарий" className="min-h-[100px]" />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Часто задаваемые вопросы</h3>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{item.question}</h4>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Мы в социальных сетях</h2>
            <p className="text-lg text-muted-foreground">Следите за новостями и результатами наших работ</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon name={social.icon as any} className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-semibold mb-2">{social.name}</h3>
                  <Button variant="outline" size="sm" asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      Подписаться
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <Card className="border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Icon name="AlertCircle" className="text-red-500" size={48} />
                <div>
                  <h3 className="text-xl font-semibold text-red-800 mb-2">Экстренная связь</h3>
                  <p className="text-red-700 mb-4">
                    Если у вас возникли осложнения после операции или экстренные вопросы, 
                    звоните по круглосуточному номеру:
                  </p>
                  <div className="flex items-center space-x-4">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      +7 (495) 911-24-24
                    </Badge>
                    <span className="text-red-600 text-sm">Работает 24/7</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contacts;