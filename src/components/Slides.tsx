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
  BarChart3,
  ShieldCheck,
  Layout,
  Image,
  Database,
  ExternalLink,
  AlertCircle,
  Shapes,
  UserPlus,
  Lock,
  Monitor,
  Sparkles,
  RefreshCw,
  AlertTriangle,
  BadgeCheck,
  Headphones,
  Rocket,
  Key
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
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">02 / Параметры</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Базовые условия внедрения</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-secondary/50 border-none shadow-xl">
        <CardHeader className="p-6">
          <Cpu className="w-10 h-10 text-blue-500 mb-2" />
          <CardTitle className="text-2xl">Инфраструктура</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed">
          Внедрение возможно как на собственных ресурсах компании, так и на ресурсах ГМК.
        </CardContent>
      </Card>

      <Card className="bg-secondary/50 border-none shadow-xl">
        <CardHeader className="p-6">
          <Clock className="w-10 h-10 text-blue-500 mb-2" />
          <CardTitle className="text-2xl">Сроки</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed">
          Время реализации проектов составляет от <span className="text-foreground font-semibold">6 месяцев до 2 лет</span>.
        </CardContent>
      </Card>

      <Card className="bg-secondary/50 border-none shadow-xl">
        <CardHeader className="p-6">
          <Wallet className="w-10 h-10 text-blue-500 mb-2" />
          <CardTitle className="text-2xl">Бюджет</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 text-base text-muted-foreground leading-relaxed">
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
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">03 / Критерии</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Критерии отбора проектов</h2>
    </div>

    <div className="bg-secondary/30 p-8 rounded-3xl border border-blue-500/10 space-y-6">
      <p className="text-xl text-muted-foreground">
        Сотрудники могут предлагать любые идеи, если они отвечают хотя бы одному из критериев:
      </p>
      
      <div className="grid gap-4">
        {[
          { icon: TrendingUp, text: "Наличие прямого экономического эффекта" },
          { icon: Target, text: "Сильная бизнес-необходимость при наличии выделенного бюджета" },
          { icon: Lightbulb, text: "Другой (неэкономический) положительный эффект для компании" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-6 p-4 bg-background rounded-xl border border-border/50"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-lg font-medium">{item.text}</span>
            <CheckCircle2 className="ml-auto w-6 h-6 text-emerald-500" />
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
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">04 / Решения I</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Проекты с быстрым запуском</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <BookOpen className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Умная база знаний</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: Search, text: "Чат-консультант и поисковик для всех отделов" },
            { icon: MessageSquare, text: "Консультации на основе внутренних регламентов" },
            { icon: FileText, text: "Быстрый поиск и автоподготовка документов" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4 text-base text-muted-foreground">
              <item.icon className="w-5 h-5 mt-0.5 shrink-0 text-blue-500/70" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Users className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Ассистент для встреч</h3>
        </div>
        <ul className="space-y-4">
          {[
            { icon: Mic, text: "Транскрибация встреч и селекторных совещаний" },
            { icon: BarChart3, text: "Выделение тезисов и подведение итогов" },
            { icon: CheckCircle2, text: "Автоматическое создание протоколов" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4 text-base text-muted-foreground">
              <item.icon className="w-5 h-5 mt-0.5 shrink-0 text-blue-500/70" />
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
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">05 / Решения II</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Автоматизация процессов</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-secondary/50 border-none p-8 space-y-6">
        <div className="flex items-center gap-4">
          <Zap className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">RPA (Роботизация)</h3>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          Быстрое внедрение по запросу практически в любые рутинные процессы компании.
        </p>
        <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
          <p className="text-sm font-medium text-blue-400">
            Для старта требуется стандартное обоснование эффекта.
          </p>
        </div>
      </Card>

      <Card className="bg-secondary/50 border-none p-8 space-y-6">
        <div className="flex items-center gap-4">
          <Search className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Инвентаризация</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex gap-4 text-base text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-blue-500" />
            <span>Сканирование штрихкодов матценностей</span>
          </li>
          <li className="flex gap-4 text-base text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-blue-500" />
            <span>Объекты автоматически падают в базу</span>
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
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">06 / HR Пилот</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">AI Mira — виртуальный рекрутер</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Стоимость действий</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase tracking-wider font-semibold">
              <span>Проверка резюме</span>
              <span className="text-blue-500 text-lg">5 ₽</span>
            </div>
            <Progress value={5} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm uppercase tracking-wider font-semibold">
              <span>Собеседование</span>
              <span className="text-blue-500 text-lg">500 ₽</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
          <p className="text-xs text-muted-foreground italic">
            * Чат, телефон или видеосвязь
          </p>
        </div>
      </div>

      <div className="bg-secondary/50 p-8 rounded-3xl border border-blue-500/10 space-y-6">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Тестовый период</h3>
        <div className="flex items-center gap-4">
          <div className="text-6xl font-black text-blue-500">7</div>
          <div className="text-2xl font-bold uppercase leading-tight">дней<br/>теста</div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Бесплатная неделя теста платформы и обучение сотрудников специалистами.
        </p>
        <Badge className="bg-blue-500 hover:bg-blue-600 text-xs text-white px-4 py-1">Обучение включено</Badge>
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
    className="space-y-8"
  >
    <div className="space-y-2">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">07 / Логистика</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Логистический портал</h2>
      <p className="text-xl text-muted-foreground italic">Умный калькулятор грузоперевозок</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2 bg-secondary/50 border-none p-8 space-y-6">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Возможности</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { icon: Wallet, title: "Расчет", text: "Мгновенная калькуляция тарифов" },
            { icon: MessageSquare, title: "AI Помощник", text: "Консультации по статусам грузов" },
            { icon: TrendingUp, title: "Воронка", text: "Отслеживание этапов сделки" },
            { icon: Users, title: "CRM", text: "Автосохранение истории обращений" }
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
        <Zap className="w-10 h-10 mb-2" />
        <h3 className="text-2xl font-bold uppercase leading-tight">Гибкость</h3>
        <p className="text-blue-100 text-sm">
          Модульная архитектура для быстрого внедрения новых функций по запросу бизнеса.
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
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">08 / AI Секретарь</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Голосовой AI-секретарь</h2>
      <p className="text-2xl text-muted-foreground">Автоматизация первой линии поддержки</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        {[
          { icon: Mic, title: "Прием всех обращений", text: "AI принимает 100% входящих звонков без очередей и ожидания" },
          { icon: BookOpen, title: "Консультации по базе", text: "Точные ответы на частые вопросы (FAQ) и регламенты" }
        ].map((item, i) => (
          <div key={i} className="flex gap-6 p-8 bg-secondary/50 rounded-2xl border border-border/50">
            <div className="p-4 bg-blue-500/10 rounded-xl shrink-0">
              <item.icon className="w-8 h-8 text-blue-500" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold uppercase text-base tracking-wider">{item.title}</h4>
              <p className="text-muted-foreground text-base leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {[
          { icon: Target, title: "Умная маршрутизация", text: "Анализ запроса и перевод на нужного специалиста или отдел" },
          { icon: Users, title: "Бесшовная передача", text: "Перевод на живого секретаря вместе с контекстом разговора" }
        ].map((item, i) => (
          <div key={i} className="flex gap-6 p-8 bg-secondary/50 rounded-2xl border border-border/50">
            <div className="p-4 bg-blue-500/10 rounded-xl shrink-0">
              <item.icon className="w-8 h-8 text-blue-500" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold uppercase text-base tracking-wider">{item.title}</h4>
              <p className="text-muted-foreground text-base leading-relaxed">{item.text}</p>
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
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">09 / Платформа</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Что такое ЛИИС</h2>
      <p className="text-2xl text-muted-foreground italic tracking-tight">Корпоративный ChatGPT для «Норникеля»</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="bg-secondary/50 border-none p-10 space-y-6">
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-blue-500" />
          <h3 className="text-3xl font-bold uppercase tracking-tight">Безопасность</h3>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Инструмент в КСПД «Норникеля». Данные <span className="text-foreground font-semibold">не утекают</span> в публичные сервисы и хранятся внутри периметра.
        </p>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {[
          { icon: FileText, title: "Текст", text: "Письма, отчеты, структурирование заметок" },
          { icon: Search, title: "Анализ", text: "Сравнение ТКП, поиск противоречий в договорах" },
          { icon: Zap, title: "Код", text: "SQL, Excel-формулы, макросы VBA и скрипты" },
          { icon: Mic, title: "Протоколы", text: "Транскрибация записей совещаний в текст" }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-5 bg-secondary/30 rounded-xl border border-border/50">
            <item.icon className="w-6 h-6 text-blue-500 shrink-0" />
            <div className="space-y-1">
              <h4 className="font-bold text-base uppercase leading-none">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-tight">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Slide10 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">10 / Выбор моделей</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Гайд по выбору моделей</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        {[
          { icon: MessageSquare, title: "Алиса AI", text: "Простые задачи, письма и черновики", color: "blue" },
          { icon: BookOpen, title: "Qwen3 (235B)", text: "Огромный размер контекста — до 480 стр.", color: "emerald" },
          { icon: Cpu, title: "DeepSeek v3", text: "Сложные расчеты и пошаговая логика", color: "purple" },
          { icon: Image, title: "Qwen3.5 Vis", text: "Анализ скриншотов и фото документов", color: "orange" }
        ].map((item, i) => (
          <div key={i} className={`flex gap-4 p-4 bg-secondary/50 rounded-xl border-l-4 border-l-${item.color}-500`}>
            <item.icon className={`w-8 h-8 text-${item.color}-500 shrink-0`} />
            <div>
              <h4 className="font-bold text-base uppercase leading-tight">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <Card className="bg-red-500/10 border-red-500/20 p-8 space-y-4">
          <div className="flex items-center gap-3 text-red-500">
            <AlertTriangle className="w-8 h-8" />
            <h4 className="font-bold uppercase tracking-wider text-base">Ограничения</h4>
          </div>
          <ul className="space-y-4 text-base text-muted-foreground">
            <li>• <span className="font-bold text-foreground">Нет интернета:</span> Модели не знают новостей</li>
            <li>• <span className="font-bold text-foreground">Нет интеграций:</span> Данные SAP грузятся вручную</li>
            <li>• <span className="font-bold text-foreground">Галлюцинации:</span> ИИ может ошибаться</li>
          </ul>
        </Card>
        <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-blue-500 shrink-0" />
          <p className="text-sm font-black text-blue-400 uppercase tracking-tighter">Запрещено загружать инсайды!</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Slide11 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-6"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">11 / Доступ</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Регистрация и вход</h2>
      <p className="text-xl text-blue-400 font-mono tracking-tight">https://liis.nornik.ru (КСПД)</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-4">
          <Lock className="w-8 h-8 text-blue-500" />
          Пароль
        </h3>
        <ul className="space-y-4">
          {[
            "Почта @nornik.ru",
            "От 12 символов",
            "3 из 4 категорий символов",
            "Не равен корпоративному!"
          ].map((text, i) => (
            <li key={i} className="flex gap-4 text-base text-muted-foreground p-4 bg-secondary/30 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <Card className="bg-secondary/50 border-none p-8 space-y-4">
          <div className="flex items-center gap-4 text-blue-500">
            <Clock className="w-8 h-8" />
            <h4 className="font-bold uppercase text-base">Активация</h4>
          </div>
          <p className="text-lg">В течение <span className="font-bold text-blue-400">24 часов</span> в раб. дни.</p>
        </Card>

        <Card className="bg-orange-500/10 border-orange-500/20 p-8 space-y-4">
          <div className="flex items-center gap-4 text-orange-500">
            <AlertCircle className="w-8 h-8" />
            <h4 className="font-bold uppercase text-base">Важно</h4>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Проверка информации обязательна. Используйте только обезличенные данные.
          </p>
        </Card>
      </div>
    </div>
  </motion.div>
);

export const Slide12 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">12 / Интерфейс</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Работа в системе</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="p-8 bg-secondary/50 rounded-2xl border border-border/50 space-y-6">
          <h3 className="text-base font-bold uppercase text-blue-500 tracking-wider">Навигация</h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 text-base">
              <div className="w-12 h-10 bg-background border flex items-center justify-center rounded text-sm font-bold">←</div>
              <span>История чатов (слева)</span>
            </div>
            <div className="flex items-center gap-4 text-base">
              <div className="w-12 h-10 bg-background border flex items-center justify-center rounded text-sm font-bold">□</div>
              <span>Рабочая область (центр)</span>
            </div>
            <div className="flex items-center gap-4 text-base">
              <div className="w-12 h-10 bg-background border flex items-center justify-center rounded text-sm font-bold">⇅</div>
              <span>Модели (вверху)</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 p-5 bg-blue-500/5 rounded-xl border border-blue-500/10">
          <Mic className="w-6 h-6 text-blue-500 mt-1" />
          <p className="text-sm text-muted-foreground font-medium">Голосовой ввод и работа с несколькими моделями одновременно.</p>
        </div>
      </div>

      <Card className="bg-emerald-500/5 border-emerald-500/20 p-10 space-y-6 flex flex-col justify-center">
        <div className="flex items-center gap-4 text-emerald-500">
          <ExternalLink className="w-8 h-8" />
          <h3 className="text-3xl font-bold uppercase tracking-tight italic leading-none">Анализ документов</h3>
        </div>
        <p className="text-base font-medium leading-relaxed">
          Поддержка PDF, Word, Excel и Видео. Быстрая загрузка через кнопку (+).
        </p>
        <div className="p-5 bg-emerald-500 rounded-xl text-white space-y-2">
          <h4 className="font-bold text-xs uppercase flex items-center gap-3">
            <AlertCircle className="w-4 h-4" />
            Важное правило
          </h4>
          <p className="text-sm leading-snug">
            Включите <span className="font-black italic">«Использование всего документа»</span> в настройках модели.
          </p>
        </div>
      </Card>
    </div>
  </motion.div>
);

export const Slide13 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">13 / Промпты</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Искусство промптов</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-6">
        <h3 className="text-base font-bold uppercase text-blue-500 tracking-widest">5 принципов идеала</h3>
        <div className="grid gap-3">
          {[
            "Задайте роль (Как аналитик...)",
            "Предоставьте контекст и данные",
            "Задайте структуру шагами",
            "Укажите формат (Таблица, JSON)",
            "Включите защиту (Если не знаешь...)"
          ].map((v, i) => (
            <div key={i} className="p-4 bg-secondary/50 rounded-xl flex items-center gap-4 text-base">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-lg font-bold text-sm text-blue-500 shrink-0">
                {i+1}
              </div>
              <span className="font-medium">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 flex flex-col justify-center">
        <div className="p-8 bg-blue-500/5 border border-blue-500/20 rounded-3xl space-y-4">
          <h4 className="font-bold text-base uppercase leading-none">Итеративность</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Лучший результат достигается за <span className="font-bold text-blue-500">3–5 правок</span> диалога.</p>
        </div>

        <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-500 flex items-center justify-center rounded-xl font-mono font-bold text-white text-2xl">/</div>
            <h4 className="font-bold text-base uppercase leading-none">Быстрый старт</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">Введите <span className="font-bold text-emerald-500">«/»</span> в поле ввода для доступа к библиотеке готовых шаблонов промптов.</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Slide14 = () => (
  <motion.div 
    variants={slideVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="space-y-8"
  >
    <div className="space-y-4">
      <Badge variant="outline" className="text-blue-500 border-blue-500/50">14 / Сопровождение</Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Экспертная поддержка</h2>
      <p className="text-2xl text-muted-foreground italic leading-none">Человек + ИИ = Рост эффективности</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <Card className="bg-blue-600 p-10 text-white space-y-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-2xl">
            <Headphones className="w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black uppercase leading-none">ИИ-Ментор</h3>
        </div>
        <p className="text-lg leading-snug text-blue-50">
          Поможет преодолеть барьер <span className="font-bold italic">«не знаю, что спросить»</span> и настроит ИИ под ваши нужды.
        </p>
        <div className="space-y-3">
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="bg-white/10 p-3 rounded-xl border border-white/10">• Индивидуальное обучение</li>
            <li className="bg-white/10 p-3 rounded-xl border border-white/10">• Кастомизация под задачи</li>
            <li className="bg-white/10 p-3 rounded-xl border border-white/10">• Оптимизация процессов</li>
          </ul>
        </div>
      </Card>

      <div className="space-y-6 flex flex-col justify-center">
        <div className="p-8 bg-secondary/50 rounded-3xl border-l-8 border-l-blue-500 space-y-2">
          <h4 className="font-bold uppercase text-xs tracking-widest text-blue-500">Адаптация</h4>
          <p className="text-lg text-muted-foreground leading-tight">
            Личный ассистент, обученный под ваш уникальный стиль работы.
          </p>
        </div>

        <div className="p-8 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 flex gap-6">
          <Rocket className="w-10 h-10 text-emerald-500 shrink-0" />
          <div className="space-y-2">
            <h4 className="font-bold uppercase text-xs text-emerald-500 tracking-widest">Развитие</h4>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">Постоянная обратная связь для доработки платформы под ваши кейсы.</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
