import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [consultationType, setConsultationType] = useState<string>('offline');
  const [step, setStep] = useState(1);

  const services = [
    'Консультация',
    'Ринопластика',
    'Маммопластика',
    'Блефаропластика',
    'Липосакция',
    'Фейслифтинг',
    'Отопластика',
    'Абдоминопластика'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ];

  const consultationPrices = {
    'Консультация': 3000,
    'Ринопластика': 5000,
    'Маммопластика': 4000,
    'Блефаропластика': 3000,
    'Липосакция': 4000,
    'Фейслифтинг': 5000,
    'Отопластика': 3000,
    'Абдоминопластика': 4000
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Выберите услугу</CardTitle>
              <CardDescription>Что вас интересует?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card 
                    key={service}
                    className={`cursor-pointer transition-all ${
                      selectedService === service 
                        ? 'border-primary bg-primary/5' 
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{service}</h3>
                          <p className="text-sm text-muted-foreground">
                            Консультация: {consultationPrices[service as keyof typeof consultationPrices]} ₽
                          </p>
                        </div>
                        {selectedService === service && (
                          <Icon name="Check" className="text-primary" size={20} />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <Button 
                  onClick={nextStep}
                  disabled={!selectedService}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Тип консультации</CardTitle>
              <CardDescription>Выберите удобный формат</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={consultationType} onValueChange={setConsultationType}>
                <Card className={consultationType === 'offline' ? 'border-primary bg-primary/5' : ''}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="offline" id="offline" />
                      <Label htmlFor="offline" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">Очная консультация</h3>
                            <p className="text-sm text-muted-foreground">В клинике с осмотром</p>
                          </div>
                          <Badge variant="secondary">
                            {consultationPrices[selectedService as keyof typeof consultationPrices]} ₽
                          </Badge>
                        </div>
                      </Label>
                    </div>
                  </CardContent>
                </Card>
                <Card className={consultationType === 'online' ? 'border-primary bg-primary/5' : ''}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">Онлайн консультация</h3>
                            <p className="text-sm text-muted-foreground">По видеосвязи</p>
                          </div>
                          <Badge variant="secondary">
                            {Math.round(consultationPrices[selectedService as keyof typeof consultationPrices] * 0.7)} ₽
                          </Badge>
                        </div>
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </RadioGroup>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevStep}>
                  <Icon name="ArrowLeft" className="mr-2" size={16} />
                  Назад
                </Button>
                <Button 
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Выберите дату и время</CardTitle>
              <CardDescription>Когда вам удобно?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Выберите дату</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                  />
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Выберите время</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className={selectedTime === time ? 'bg-primary text-primary-foreground' : ''}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevStep}>
                  <Icon name="ArrowLeft" className="mr-2" size={16} />
                  Назад
                </Button>
                <Button 
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Ваши данные</CardTitle>
              <CardDescription>Заполните контактную информацию</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Имя" required />
                  <Input placeholder="Фамилия" required />
                </div>
                <Input placeholder="Телефон" type="tel" required />
                <Input placeholder="Email" type="email" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Возраст" type="number" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Пол" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female">Женский</SelectItem>
                      <SelectItem value="male">Мужской</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea 
                  placeholder="Опишите ваши пожелания или вопросы" 
                  className="min-h-[100px]"
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="agreement" required />
                  <Label htmlFor="agreement" className="text-sm">
                    Согласен с <a href="#" className="text-primary underline">политикой конфиденциальности</a>
                  </Label>
                </div>
              </form>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevStep}>
                  <Icon name="ArrowLeft" className="mr-2" size={16} />
                  Назад
                </Button>
                <Button 
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Подтвердить запись
                  <Icon name="Check" className="ml-2" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Check" className="text-green-600" size={32} />
              </div>
              <CardTitle className="text-green-800">Запись подтверждена!</CardTitle>
              <CardDescription>Мы свяжемся с вами для подтверждения</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold">Детали записи:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Услуга:</p>
                    <p className="font-medium">{selectedService}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Тип:</p>
                    <p className="font-medium">
                      {consultationType === 'offline' ? 'Очная консультация' : 'Онлайн консультация'}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Дата:</p>
                    <p className="font-medium">
                      {selectedDate?.toLocaleDateString('ru-RU', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Время:</p>
                    <p className="font-medium">{selectedTime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Стоимость:</p>
                    <p className="font-medium">
                      {consultationType === 'offline' 
                        ? consultationPrices[selectedService as keyof typeof consultationPrices]
                        : Math.round(consultationPrices[selectedService as keyof typeof consultationPrices] * 0.7)
                      } ₽
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button variant="outline" className="flex-1">
                  <Icon name="Calendar" className="mr-2" size={16} />
                  Добавить в календарь
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Написать в Telegram
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
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
              <a href="/services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="/appointment" className="text-primary font-semibold">Запись</a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">О враче</a>
              <a href="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline">
              <Icon name="Phone" className="mr-2" size={16} />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Запись на консультацию
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Выберите удобное время для консультации. Мы предлагаем как очные, так и онлайн консультации.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    stepNumber <= step 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stepNumber < step ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      stepNumber
                    )}
                  </div>
                  {stepNumber < 5 && (
                    <div className={`w-16 h-1 mx-2 ${
                      stepNumber < step ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground">
                Шаг {step} из 5: {
                  step === 1 ? 'Выбор услуги' :
                  step === 2 ? 'Тип консультации' :
                  step === 3 ? 'Дата и время' :
                  step === 4 ? 'Контактные данные' :
                  'Подтверждение'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {renderStep()}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Нужна помощь?</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground mb-4">+7 (495) 123-45-67</p>
                <Button variant="outline" size="sm">Позвонить</Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="MessageCircle" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Telegram</h3>
                <p className="text-muted-foreground mb-4">@plastikklinik</p>
                <Button variant="outline" size="sm">Написать</Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Mail" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">info@plastikklinik.ru</p>
                <Button variant="outline" size="sm">Написать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;