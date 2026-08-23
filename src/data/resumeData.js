export const personalInfo = {
  name: "Сингаевский Андрей",
  title: "Middle Frontend Developer",
  email: "singaevskiy2001@mail.ru",
  phone: "+7 (977) 607-22-97",
  location: "Москва, Россия",
  avatar: "/img/photo.jpg", // Путь к локальному файлу
  social: {
    github: "https://github.com/Alies12",
    telegram: "https://t.me/Aliesak",
    email: "mailto:singaevskiy2001@mail.ru"
  },
  summary: "Я frontend-разработчик с опытом создания веб-приложений. Специализируюсь на React и современных JavaScript технологиях.",
  fullDescription: [
    "Люблю превращать сложные проблемы в простые, красивые и интуитивно понятные решения.",
    "Постоянно изучаю новые технологии и следую лучшим практикам разработки.",
    "Имею опыт разработки полноценных проектов с нуля и поддержки open source."
  ]
};

export const skills = [
  { name: "React", level: 95, icon: "⚛️", category: "Frontend" },
  { name: "Redux", level: 88, icon: "🔄", category: "Frontend" },
  { name: "JavaScript", level: 90, icon: "📜", category: "Frontend" },
  { name: "TypeScript", level: 85, icon: "🔷", category: "Frontend" },
  { name: "HTML5", level: 95, icon: "🌐", category: "Frontend" },
  { name: "CSS3/SASS", level: 90, icon: "🎨", category: "Frontend" },
  { name: "Node.js", level: 75, icon: "🟢", category: "Backend" },
  { name: "MongoDB", level: 70, icon: "🍃", category: "Backend" },
  { name: "PostgreSQL", level: 75, icon: "🐘", category: "Backend" },
  { name: "Git", level: 85, icon: "📦", category: "Tools" },
  { name: "Docker", level: 65, icon: "🐳", category: "Tools" },
  { name: "CI/CD", level: 70, icon: "🔄", category: "Tools" },
  { name: "AWS", level: 60, icon: "☁️", category: "Tools" }
];

export const experience = [
  {
    title: "Frontend-разработчик",
    company: "Аcтрон",
    period: "Сентябрь 2025 — Май 2026",
    duration: "9 месяцев",
    location: "Очно",
    description: "Разработка новых приложений",
    achievements: [
      "Разработал 3 полноценных проекта с нуля до выпуска",
      "Участвовал в полном цикле разработки: от проектирования до деплоя",
      "Внедрил современные практики разработки и code review"
    ],
    technologies: ["React", "TypeScript", "Node.js","Redux", "PostgreSQL", "Docker"]
  },
  {
    title: "Младший разработчик",
    company: "Глобэкс АйТи",
    period: "Сентябрь 2024 — Август 2025",
    duration: "1 год",
    location: "Удаленно",
    description: "Разработка интерфейсов",
    achievements: [
      "Разрабатывал пользовательские интерфейсы для веб-приложений",
      "Участвовал в разработке и поддержке клиентских проектов",
      "Освоил современные фреймворки и инструменты разработки"
    ],
    technologies: ["JavaScript", "React", "CSS", "HTML", "Git"]
  },
  {
    title: "Frontend-разработчик",
    company: "Хекслет",
    period: "Сентябрь 2023 — Сентябрь 2024",
    duration: "1 год и 1 месяц",
    location: "Удалённо",
    description: "Поддержка опен сорс проектов",
    achievements: [
      "Участвовал в поддержке и развитии open source проектов",
      "Работал с открытым кодом и сообществом разработчиков",
      "Улучшил качество кода и документации проектов"
    ],
    technologies: ["JavaScript", "React", "Open Source", "Git", "CI/CD"]
  }
];

// Проекты будут добавлены позже
export const projects = [];

export const education = [
  {
    degree: "Програмист",
    institution: "МГОК",
    period: "2021 - 2025",
    description: "Системное программирование"
  }
];

export const certifications = [
  {
    title: "Frontend developer",
    issuer: "Хекслет",
    year: "2025"
  },
];