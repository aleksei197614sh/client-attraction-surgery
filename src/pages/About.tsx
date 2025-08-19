import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const About = () => {
  const achievements = [
    { title: 'Лет опыта', value: '15+', icon: 'Award' },
    { title: 'Операций проведено', value: '2000+', icon: 'Users' },
    { title: 'Довольных пациентов', value: '98%', icon: 'Heart' },
    { title: 'Сертификатов', value: '25+', icon: 'GraduationCap' }
  ];

  const skills = [
    { name: 'Ринопластика', level: 95 },
    { name: 'Маммопластика', level: 92 },
    { name: 'Липосакция', level: 88 },
    { name: 'Фейслифтинг', level: 90 },
    { name: 'Блефаропластика', level: 94 }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Окончание РНИМУ им. Н.И. Пирогова',
      description: 'Диплом с отличием по специальности "Лечебное дело"'
    },
    {
      year: '2010',
      title: 'Ординатура по пластической хирургии',
      description: 'НИИ СП им. Н.В. Склифосовского'
    },
    {
      year: '2012',
      title: 'Первая самостоятельная операция',
      description: 'Начало практической деятельности'
    },
    {
      year: '2015-2016',
      title: 'Стажировка в Европе',
      description: 'Изучение передовых методик в Германии и Швейцарии'
    },
    {
      year: '2018',
      title: 'Кандидат медицинских наук',
      description: 'Защита диссертации по пластической хирургии'
    },
    {
      year: '2020',
      title: 'Открытие собственной клиники',
      description: 'ПластикКлиник - современный центр эстетической медицины'
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
              <a href="/about" className="text-primary font-semibold">О враче</a>
              <a href="/prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="/reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Доктор Иванов Алексей Михайлович
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Пластический хирург высшей категории, кандидат медицинских наук. 
                Специализируется на эстетической и реконструктивной хирургии.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary">Пластический хирург</Badge>
                <Badge variant="secondary">Кандидат мед. наук</Badge>
                <Badge variant="secondary">15+ лет опыта</Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/7e305fed-a8c8-4572-b80a-bb533a91e5e1.jpg"
                alt="Доктор Иванов"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Достижения</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Icon name={achievement.icon as any} className="text-primary mx-auto mb-4" size={48} />
                  <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
                  <p className="text-muted-foreground">{achievement.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Экспертиза</h2>
              <p className="text-muted-foreground mb-8">
                Профессиональные навыки и специализации доктора Иванова в различных областях пластической хирургии.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Образование и сертификаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">РНИМУ им. Н.И. Пирогова</h4>
                      <p className="text-sm text-muted-foreground">Лечебное дело, 2008</p>
                      <p className="text-sm text-muted-foreground">Диплом с отличием</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold">Ординатура по пластической хирургии</h4>
                      <p className="text-sm text-muted-foreground">НИИ СП им. Н.В. Склифосовского, 2010</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold">Кандидат медицинских наук</h4>
                      <p className="text-sm text-muted-foreground">Диссертация по пластической хирургии, 2018</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold">Международные сертификаты</h4>
                      <p className="text-sm text-muted-foreground">Германия, Швейцария, США</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Карьерный путь</h2>
            <p className="text-lg text-muted-foreground">Основные этапы профессионального развития</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <Badge variant="outline">{item.year}</Badge>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Философия работы</h2>
            <blockquote className="text-xl text-muted-foreground italic mb-8">
              "Каждый пациент уникален, и подход к лечению должен быть индивидуальным. 
              Моя цель - не только достичь эстетического результата, но и обеспечить 
              безопасность и комфорт пациента на всех этапах лечения."
            </blockquote>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Shield" className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-semibold mb-2">Безопасность</h3>
                  <p className="text-sm text-muted-foreground">
                    Использование только проверенных методик и материалов
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Heart" className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-semibold mb-2">Индивидуальность</h3>
                  <p className="text-sm text-muted-foreground">
                    Персональный подход к каждому пациенту
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Star" className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-sm text-muted-foreground">
                    Стремление к совершенству в каждой операции
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;