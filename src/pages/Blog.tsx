import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Подготовка к ринопластике: что нужно знать',
      excerpt: 'Подробное руководство по подготовке к операции на носу. Рассказываем о всех этапах подготовки.',
      content: 'Полная статья о подготовке к ринопластике...',
      category: 'rhinoplasty',
      author: 'Доктор Иванов',
      date: '15 декабря 2024',
      readTime: '5 мин',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      tags: ['ринопластика', 'подготовка', 'советы']
    },
    {
      id: 2,
      title: 'Реабилитация после маммопластики',
      excerpt: 'Как правильно восстанавливаться после операции по увеличению груди. Советы и рекомендации.',
      content: 'Полная статья о реабилитации после маммопластики...',
      category: 'mammoplasty',
      author: 'Доктор Иванов',
      date: '10 декабря 2024',
      readTime: '7 мин',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      tags: ['маммопластика', 'реабилитация', 'восстановление']
    },
    {
      id: 3,
      title: 'Мифы о пластической хирургии',
      excerpt: 'Развенчиваем самые популярные мифы о пластических операциях. Факты против предрассудков.',
      content: 'Полная статья о мифах пластической хирургии...',
      category: 'general',
      author: 'Доктор Иванов',
      date: '5 декабря 2024',
      readTime: '6 мин',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      tags: ['мифы', 'факты', 'образование']
    },
    {
      id: 4,
      title: 'Липосакция: современные методы',
      excerpt: 'Обзор современных методов липосакции. Какой метод выбрать для лучшего результата.',
      content: 'Полная статья о методах липосакции...',
      category: 'liposuction',
      author: 'Доктор Иванов',
      date: '28 ноября 2024',
      readTime: '8 мин',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      tags: ['липосакция', 'методы', 'технологии']
    },
    {
      id: 5,
      title: 'Психологическая подготовка к операции',
      excerpt: 'Как морально подготовиться к пластической операции. Работа с ожиданиями и страхами.',
      content: 'Полная статья о психологической подготовке...',
      category: 'psychology',
      author: 'Доктор Иванов',
      date: '20 ноября 2024',
      readTime: '4 мин',
      image: '/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg',
      tags: ['психология', 'подготовка', 'страхи']
    },
    {
      id: 6,
      title: 'Уход за кожей после операции',
      excerpt: 'Правильный уход за кожей в период восстановления. Косметические средства и процедуры.',
      content: 'Полная статья об уходе за кожей...',
      category: 'care',
      author: 'Доктор Иванов',
      date: '15 ноября 2024',
      readTime: '6 мин',
      image: '/img/074df8ef-c9f9-49a6-9e49-362c3a24ad5a.jpg',
      tags: ['уход', 'кожа', 'восстановление']
    }
  ];

  const categories = [
    { value: 'all', label: 'Все статьи' },
    { value: 'rhinoplasty', label: 'Ринопластика' },
    { value: 'mammoplasty', label: 'Маммопластика' },
    { value: 'liposuction', label: 'Липосакция' },
    { value: 'psychology', label: 'Психология' },
    { value: 'care', label: 'Уход' },
    { value: 'general', label: 'Общее' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

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
              <a href="/blog" className="text-primary font-semibold">Блог</a>
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
              Блог о пластической хирургии
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Полезные статьи, советы и рекомендации от опытного пластического хирурга
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Поиск статей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Категория" />
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

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Рекомендуемая статья</h2>
          </div>
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Рекомендуем</Badge>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="outline">{categories.find(c => c.value === featuredPost.category)?.label}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" className="text-muted-foreground" size={16} />
                    <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                  </div>
                  <Button>
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Все статьи</h2>
            <p className="text-lg text-muted-foreground">
              Найдено статей: {filteredPosts.length}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">
                      {categories.find(c => c.value === post.category)?.label}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Icon name="Clock" className="text-muted-foreground" size={16} />
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" className="text-muted-foreground" size={16} />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-lg font-semibold mb-2">Статьи не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить поисковый запрос или категорию</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Подпишитесь на новости
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Получайте новые статьи и полезные советы о пластической хирургии на свою почту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Ваш email"
                className="flex-1 bg-white"
              />
              <Button variant="secondary">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Популярные темы</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['ринопластика', 'маммопластика', 'липосакция', 'реабилитация', 'подготовка', 'уход', 'советы', 'мифы', 'технологии', 'безопасность'].map((tag, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;