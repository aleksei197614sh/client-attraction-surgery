import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      category: 'rhinoplasty',
      title: 'Ринопластика - случай 1',
      description: 'Коррекция горбинки носа',
      beforeImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      afterImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      age: '28 лет',
      gender: 'Женщина',
      duration: '2 часа',
      recovery: '10 дней'
    },
    {
      id: 2,
      category: 'mammoplasty',
      title: 'Увеличение груди - случай 1',
      description: 'Увеличение груди имплантами 350мл',
      beforeImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      afterImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      age: '32 года',
      gender: 'Женщина',
      duration: '2.5 часа',
      recovery: '14 дней'
    },
    {
      id: 3,
      category: 'blepharoplasty',
      title: 'Блефаропластика - случай 1',
      description: 'Коррекция верхних и нижних век',
      beforeImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      afterImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      age: '45 лет',
      gender: 'Женщина',
      duration: '1.5 часа',
      recovery: '7 дней'
    },
    {
      id: 4,
      category: 'liposuction',
      title: 'Липосакция - случай 1',
      description: 'Липосакция живота и боков',
      beforeImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      afterImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      age: '35 лет',
      gender: 'Женщина',
      duration: '2 часа',
      recovery: '10 дней'
    },
    {
      id: 5,
      category: 'facelift',
      title: 'Фейслифтинг - случай 1',
      description: 'SMAS подтяжка лица',
      beforeImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      afterImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      age: '52 года',
      gender: 'Женщина',
      duration: '4 часа',
      recovery: '21 день'
    },
    {
      id: 6,
      category: 'rhinoplasty',
      title: 'Ринопластика - случай 2',
      description: 'Коррекция кончика носа',
      beforeImage: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      afterImage: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      age: '24 года',
      gender: 'Женщина',
      duration: '1.5 часа',
      recovery: '8 дней'
    }
  ];

  const categories = [
    { value: 'all', label: 'Все операции' },
    { value: 'rhinoplasty', label: 'Ринопластика' },
    { value: 'mammoplasty', label: 'Маммопластика' },
    { value: 'blepharoplasty', label: 'Блефаропластика' },
    { value: 'liposuction', label: 'Липосакция' },
    { value: 'facelift', label: 'Фейслифтинг' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
              <a href="/gallery" className="text-primary font-semibold">Галерея</a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Галерея результатов
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Реальные результаты наших пациентов. Фотографии до и после операций с согласия пациентов.
            </p>
            <div className="flex justify-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <img
                          src={item.beforeImage}
                          alt="До операции"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary">До</Badge>
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={item.afterImage}
                          alt="После операции"
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-green-500">После</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            className="opacity-0 hover:opacity-100 transition-opacity"
                            onClick={() => setSelectedImage(item)}
                          >
                            <Icon name="Eye" className="mr-2" size={16} />
                            Подробнее
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{item.title}</DialogTitle>
                            <DialogDescription>{item.description}</DialogDescription>
                          </DialogHeader>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-2">До операции</h4>
                              <img
                                src={item.beforeImage}
                                alt="До операции"
                                className="w-full h-64 object-cover rounded-lg"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">После операции</h4>
                              <img
                                src={item.afterImage}
                                alt="После операции"
                                className="w-full h-64 object-cover rounded-lg"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="text-center">
                              <Icon name="User" className="mx-auto mb-2 text-primary" size={24} />
                              <p className="text-sm font-medium">Возраст</p>
                              <p className="text-sm text-muted-foreground">{item.age}</p>
                            </div>
                            <div className="text-center">
                              <Icon name="Users" className="mx-auto mb-2 text-primary" size={24} />
                              <p className="text-sm font-medium">Пол</p>
                              <p className="text-sm text-muted-foreground">{item.gender}</p>
                            </div>
                            <div className="text-center">
                              <Icon name="Clock" className="mx-auto mb-2 text-primary" size={24} />
                              <p className="text-sm font-medium">Длительность</p>
                              <p className="text-sm text-muted-foreground">{item.duration}</p>
                            </div>
                            <div className="text-center">
                              <Icon name="Calendar" className="mx-auto mb-2 text-primary" size={24} />
                              <p className="text-sm font-medium">Восстановление</p>
                              <p className="text-sm text-muted-foreground">{item.recovery}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{item.age}, {item.gender}</span>
                      <span>Восстановление: {item.recovery}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-lg font-semibold mb-2">Результаты не найдены</h3>
              <p className="text-muted-foreground">Попробуйте выбрать другую категорию</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наша статистика</h2>
            <p className="text-lg text-muted-foreground">Цифры, которые говорят о нашем опыте</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <p className="text-muted-foreground">Операций проведено</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Довольных пациентов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Лет опыта</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <p className="text-muted-foreground">Серьезных осложнений</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <Card className="border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Icon name="Info" className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Важная информация</h3>
                  <div className="text-yellow-700 space-y-2 text-sm">
                    <p>
                      • Все фотографии размещены с письменного согласия пациентов
                    </p>
                    <p>
                      • Результаты индивидуальны и могут отличаться в каждом конкретном случае
                    </p>
                    <p>
                      • Фотографии сделаны в одинаковых условиях освещения и ракурса
                    </p>
                    <p>
                      • Окончательный результат оценивается через 6-12 месяцев после операции
                    </p>
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

export default Gallery;