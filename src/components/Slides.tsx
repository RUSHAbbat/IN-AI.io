import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cpu, 
  Clock, 
  Wallet, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Lightbulb,
  BookOpen,
  Users,
  MessageSquare,
  Zap,
  Search,
  FileText,
  Mic,
  BarChart3
} from "lucide-react";

const slideVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

export const Slide1 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="flex flex-col items-center justify-center h-full text-center space-y-8"
  >
    <div className="relative">
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"
      />
      <h1 className="text-7xl font-black tracking-tighter uppercase sm:text-8xl md:text-9xl">
        Внедрение <span className="text-blue-500">AI</span>
      </h1>
    </div>
    <p className="text-xl text-muted-foreground font-medium tracking-wide uppercase max-w-2xl">
      Возможности, сроки и перспективные проекты
    </p>
  </motion.div>
);

export const Slide2 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">02 / Параметры</Badge>
      <h2 className="text-5xl font-bold tracking-tight">Базовые условия внедрения</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-secondary/50 border-none shadow-2xl">
        <CardHeader>
          <Cpu className="w-10 h-10 text-blue-500 mb-2" />
          <CardTitle className="text-2xl">Инфраструктура</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed">
          Внедрение возможно как на собственных ресурсах компании, так и на ресурсах ГМК (в зависимости от конкретной задачи).
        </CardContent>
      </Card>

      <Card className="bg-secondary/50 border-none shadow-2xl">
        <CardHeader>
          <Clock className="w-10 h-10 text-blue-500 mb-2" />
          <CardTitle className="text-2xl">Сроки</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed">
          Время реализации проектов составляет от <span className="text-foreground font-semibold">6 месяцев до 2 лет</span>.
        </CardContent>
      </Card>

      <Card className="bg-secondary/50 border-none shadow-2xl">
        <CardHeader>
          <Wallet className="w-10 h-10 text-blue-500 mb-2" />
          <CardTitle className="text-2xl">Бюджет</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground leading-relaxed">
          Стоимость проектов варьируется от <span className="text-foreground font-semibold">0 до 100 млн рублей</span>.
        </CardContent>
      </Card>
    </div>
  </motion.div>
);

export const Slide3 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">03 / Критерии</Badge>
      <h2 className="text-5xl font-bold tracking-tight">Критерии отбора проектов</h2>
    </div>

    <div className="bg-secondary/30 p-8 rounded-3xl border border-blue-500/10 space-y-8">
      <p className="text-xl text-muted-foreground">
        Сотрудники могут предлагать абсолютно любые идеи (несмотря на цену проекта), если они отвечают хотя бы одному из критериев:
      </p>
      
      <div className="grid gap-4">
        {[
          { icon: TrendingUp, text: "Наличие прямого экономического эффекта" },
          { icon: Target, text: "Сильная бизнес-необходимость при наличии выделенного бюджета" },
          { icon: Lightbulb, text: "Любой другой (неэкономический) положительный эффект для компании" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border/50"
          >
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-lg font-medium">{item.text}</span>
            <CheckCircle2 className="ml-auto w-5 h-5 text-emerald-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Slide4 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">04 / Решения I</Badge>
      <h2 className="text-5xl font-bold tracking-tight">Проекты с быстрым запуском</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Умная база знаний</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: Search, text: "Чат-консультант и поисковик для всех отделов" },
            { icon: MessageSquare, text: "Консультации на основе внутренних регламентов" },
            { icon: FileText, text: "Быстрый поиск и автоподготовка документов" }
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <item.icon className="w-5 h-5 mt-1 shrink-0 text-blue-500/70" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Ассистент для совещаний</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: Mic, text: "Транскрибация встреч и селекторных совещаний" },
            { icon: BarChart3, text: "Автоматическое выделение главных тезисов" },
            { icon: CheckCircle2, text: "Подведение итогов встреч" }
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <item.icon className="w-5 h-5 mt-1 shrink-0 text-blue-500/70" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export const Slide5 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">05 / Решения II</Badge>
      <h2 className="text-5xl font-bold tracking-tight">Автоматизация процессов</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-secondary/50 border-none p-8 space-y-6">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">RPA (Роботизация)</h3>
        </div>
        <p className="text-muted-foreground">
          Быстрое внедрение по запросу практически в любые рутинные процессы компании.
        </p>
        <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <p className="text-sm font-medium text-blue-400">
            Важно: Для старта требуется стандартное обоснование (экономический или иной эффект).
          </p>
        </div>
      </Card>

      <Card className="bg-secondary/50 border-none p-8 space-y-6">
        <div className="flex items-center gap-3">
          <Search className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Быстрая инвентаризация</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
            <span>Сканирование штрихкодов материальных ценностей</span>
          </li>
          <li className="flex gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-blue-500" />
            <span>Объекты автоматически попадают и отмечаются в базе</span>
          </li>
        </ul>
      </Card>
    </div>
  </motion.div>
);

export const Slide6 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">06 / HR Пилот</Badge>
      <h2 className="text-5xl font-bold tracking-tight">AI Mira — виртуальный рекрутер</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Стоимость действий</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase tracking-wider font-semibold">
              <span>Проверка резюме</span>
              <span className="text-blue-500">5 ₽</span>
            </div>
            <Progress value={5} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase tracking-wider font-semibold">
              <span>Собеседование</span>
              <span className="text-blue-500">500 ₽</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
          <p className="text-sm text-muted-foreground italic">
            * Собеседование в чате, по телефону или видеосвязи
          </p>
        </div>
      </div>

      <div className="bg-secondary/50 p-8 rounded-3xl border border-blue-500/10 space-y-6">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Тестовый период</h3>
        <div className="flex items-center gap-4">
          <div className="text-6xl font-black text-blue-500">7</div>
          <div className="text-xl font-bold uppercase leading-tight">дней<br/>теста</div>
        </div>
        <p className="text-muted-foreground">
          Предоставляется неделя для тестирования платформы. Включено полное обучение: покажем и расскажем, как правильно работать с системой.
        </p>
        <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1">Обучение включено</Badge>
      </div>
    </div>
  </motion.div>
);

export const Slide7 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">07 / Логистика</Badge>
      <h2 className="text-5xl font-bold tracking-tight">Логистический портал</h2>
      <p className="text-xl text-muted-foreground">Умный калькулятор грузоперевозок</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2 bg-secondary/50 border-none p-8 space-y-6">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Функциональные возможности</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Wallet, title: "Мгновенный расчет", text: "Точная калькуляция тарифов на основе заданных параметров" },
            { icon: MessageSquare, title: "AI Поддержка", text: "Чат-бот для консультаций по логистике и статусам грузов" },
            { icon: TrendingUp, title: "Воронка продаж", text: "Отслеживание этапов сделки — от расчета до доставки" },
            { icon: Users, title: "Умный сбор CRM", text: "Автосохранение клиентской базы и истории обращений" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-center gap-2 text-blue-500">
                <item.icon className="w-5 h-5" />
                <span className="font-bold uppercase text-xs tracking-wider">{item.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="bg-blue-500 p-8 flex flex-col justify-center space-y-4 text-white">
        <Zap className="w-12 h-12 mb-2" />
        <h3 className="text-2xl font-bold uppercase leading-tight">Масштабируемость</h3>
        <p className="text-blue-100">
          Гибкая архитектура, позволяющая внедрять любые дополнительные модули и функции по запросу бизнеса.
        </p>
      </Card>
    </div>
  </motion.div>
);

export const Slide8 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">08 / AI Секретарь</Badge>
      <h2 className="text-5xl font-bold tracking-tight">Голосовой AI-секретарь</h2>
      <p className="text-xl text-muted-foreground">Автоматизация первой линии поддержки</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        {[
          { icon: Mic, title: "Прием всех обращений", text: "AI принимает 100% входящих звонков без очередей и ожидания" },
          { icon: BookOpen, title: "Консультации по базе", text: "Точные ответы на частые вопросы (FAQ) и регламенты" }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 bg-secondary/50 rounded-2xl border border-border/50">
            <div className="p-3 bg-blue-500/10 rounded-xl shrink-0">
              <item.icon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold uppercase text-sm tracking-wider">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {[
          { icon: Target, title: "Умная маршрутизация", text: "Анализ запроса и перевод на нужного специалиста или отдел" },
          { icon: Users, title: "Бесшовная передача", text: "Перевод на живого секретаря вместе с контекстом разговора" }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 bg-secondary/50 rounded-2xl border border-border/50">
            <div className="p-3 bg-blue-500/10 rounded-xl shrink-0">
              <item.icon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold uppercase text-sm tracking-wider">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Slide9 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-12"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">09 / Цифровизация</Badge>
      <h2 className="text-5xl font-bold tracking-tight">Web-приложения как основа</h2>
      <p className="text-xl text-muted-foreground">Почему мы выбираем веб-формат для AI-решений?</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: Clock, title: "Доступность 24/7", text: "Работа в браузере на ПК, планшете или смартфоне без скачивания" },
        { icon: Cpu, title: "Единая экосистема", text: "Объединение калькуляторов, чатов, CRM и телефонии в одном окне" },
        { icon: Zap, title: "Скорость обновлений", text: "Новые функции мгновенно становятся доступны всем пользователям" },
        { icon: Target, title: "Безопасность", text: "Корпоративные данные надежно защищены на серверах компании" }
      ].map((item, i) => (
        <Card key={i} className="bg-secondary/50 border-none p-6 space-y-4 hover:bg-secondary/70 transition-colors">
          <div className="p-3 bg-blue-500/10 rounded-xl w-fit">
            <item.icon className="w-6 h-6 text-blue-500" />
          </div>
          <div className="space-y-2">
            <h4 className="font-bold uppercase text-xs tracking-widest">{item.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
          </div>
        </Card>
      ))}
    </div>
  </motion.div>
);
