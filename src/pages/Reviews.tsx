import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [filterRating, setFilterRating] = useState('all');
  const [filterService, setFilterService] = useState('all');

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Анна Козлова',
      avatar: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      service: 'Ринопластика',
      rating: 5,
      date: '15 декабря 2024',
      text: 'Прекрасный результат ринопластики! Доктор Иванов - настоящий профессионал. Операция прошла без осложнений, результат превзошел все ожидания. Нос выглядит естественно и гармонично. Очень благодарна за внимательное отношение и профессионализм.',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Мария Смирнова',
      avatar: null,
      service: 'Маммопластика',
      rating: 5,
      date: '10 декабря 2024',
      text: 'Делала увеличение груди у доктора Иванова. Результат потрясающий! Грудь выглядит очень естественно, размер идеально подобран. Послеоперационный период прошел легко благодаря четким рекомендациям врача. Рекомендую всем!',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: 'Елена Волкова',
      avatar: null,
      service: 'Блефаропластика',
      rating: 5,
      date: '5 декабря 2024',
      text: 'Блефаропластика верхних и нижних век - лучшее решение! Взгляд стал более открытым и молодым. Доктор очень внимательно выслушал все пожелания и дал подробные рекомендации. Швы зажили быстро и практически незаметны.',
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      name: 'Ольга Петрова',
      avatar: null,
      service: 'Липосакция',
      rating: 4,
      date: '28 ноября 2024',
      text: 'Липосакция живота и боков. Результат хороший, но восстановление было немного дольше, чем ожидала. Доктор предупреждал об этом, так что претензий нет. Фигура стала намного лучше, очень довольна.',
      verified: true,
      helpful: 6
    },
    {
      id: 5,
      name: 'Татьяна Иванова',
      avatar: null,
      service: 'Фейслифтинг',
      rating: 5,
      date: '20 ноября 2024',
      text: 'Фейслифтинг - это невероятно! Выгляжу на 10 лет моложе. Доктор Иванов - мастер своего дела. Операция прошла идеально, результат естественный. Все друзья спрашивают, что я делала - настолько свежо выгляжу!',
      verified: true,
      helpful: 20
    },
    {
      id: 6,
      name: 'Светлана Морозова',
      avatar: null,
      service: 'Отопластика',
      rating: 5,
      date: '15 ноября 2024',
      text: 'Отопластика для дочери (16 лет). Комплекс из-за ушей мучил ребенка годами. Доктор Иванов деликатно провел операцию, результат превосходный. Дочь счастлива, уши теперь аккуратные и симметричные.',
      verified: true,
      helpful: 9
    }
  ]);

  const stats = {
    total: reviews.length,
    average: (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
    distribution: {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length,
    }
  };

  const services = ['Ринопластика', 'Маммопластика', 'Блефаропластика', 'Липосакция', 'Фейслифтинг', 'Отопластика'];

  const filteredReviews = reviews.filter(review => {
    const ratingMatch = filterRating === 'all' || review.rating.toString() === filterRating;
    const serviceMatch = filterService === 'all' || review.service === filterService;
    return ratingMatch && serviceMatch;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newReview = {
      id: reviews.length + 1,
      name: formData.get('name') as string,
      avatar: null,
      service: formData.get('service') as string,
      rating: reviewRating,
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
      text: formData.get('text') as string,
      verified: false,
      helpful: 0
    };
    setReviews([newReview, ...reviews]);
    setIsReviewOpen(false);
    setReviewRating(0);
    (e.target as HTMLFormElement).reset();
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
              <a href="/prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="/reviews" className="text-primary font-semibold">Отзывы</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Оставить отзыв
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
              Отзывы пациентов
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Реальные отзывы наших пациентов о проведенных операциях и качестве обслуживания
            </p>
            <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Plus" className="mr-2" size={20} />
                  Поделиться опытом
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stats.total}</div>
                <p className="text-muted-foreground">Всего отзывов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stats.average}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className={`${i < Math.floor(Number(stats.average)) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      size={16} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">Средняя оценка</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stats.distribution[5]}</div>
                <p className="text-muted-foreground">5-звездочных отзывов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Рекомендуют клинику</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Распределение оценок</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[5, 4, 3, 2, 1].map(rating => (
                    <div key={rating} className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 w-16">
                        <span>{rating}</span>
                        <Icon name="Star" className="text-yellow-400 fill-current" size={16} />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(stats.distribution[rating as keyof typeof stats.distribution] / stats.total) * 100}%` }}
                        />
                      </div>
                      <span className="w-8 text-sm text-muted-foreground">
                        {stats.distribution[rating as keyof typeof stats.distribution]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Все отзывы</h2>
            <div className="flex space-x-4">
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Все оценки" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все оценки</SelectItem>
                  <SelectItem value="5">5 звезд</SelectItem>
                  <SelectItem value="4">4 звезды</SelectItem>
                  <SelectItem value="3">3 звезды</SelectItem>
                  <SelectItem value="2">2 звезды</SelectItem>
                  <SelectItem value="1">1 звезда</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterService} onValueChange={setFilterService}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Все услуги" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все услуги</SelectItem>
                  {services.map(service => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={review.avatar || undefined} />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="CheckCircle" className="mr-1" size={12} />
                              Проверено
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                          ))}
                        </div>
                        <Badge variant="outline">{review.service}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{review.text}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                          <Icon name="ThumbsUp" className="mr-1" size={16} />
                          Полезно ({review.helpful})
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="MessageCircle" className="mr-1" size={16} />
                          Ответить
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-lg font-semibold mb-2">Отзывы не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить фильтры поиска</p>
            </div>
          )}
        </div>
      </section>

      {/* Review Dialog */}
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Оставить отзыв</DialogTitle>
            <DialogDescription>Поделитесь своим опытом с другими пациентами</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ваша оценка</label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none"
                  >
                    <Icon 
                      name="Star" 
                      className={`transition-colors ${
                        star <= (hoverRating || reviewRating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                      size={24}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Input name="name" placeholder="Ваше имя" required />
              <Select name="service" required>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {services.map(service => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea 
                name="text" 
                placeholder="Расскажите о своем опыте..." 
                required 
                className="min-h-[100px]"
              />
            </div>
            <div className="flex space-x-2">
              <Button 
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsReviewOpen(false)}
              >
                Отмена
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={reviewRating === 0}
              >
                Отправить
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reviews;