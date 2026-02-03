# ТЕСТОВОЕ ЗАДАНИЕ: QPICK AUDIO SHOP

## Кандидат: Самарина Анна
## Дата выполнения: 04.02.2026
## Демо: https://AnnSamSPb.github.io/Audio-shop/
## GitHub: https://github.com/AnnSamSPb/Audio-shop

---

## 📋 ВЫПОЛНЕНИЕ ТРЕБОВАНИЙ ТЗ

### ✅ Обязательные требования (7/7 выполнено)

| № | Требование | Статус | Реализация |
|---|------------|--------|------------|
| 1 | Две страницы: каталог + корзина | ✅ | HomePage + CartPage |
| 2 | Масштабируемый роутинг | ✅ | React Router 6 |
| 3 | Hover-эффекты на всех элементах | ✅ | Кнопки, ссылки, иконки |
| 4 | Навигация (лого + кнопка "Назад") | ✅ | Логотип + кнопка в корзине |
| 5 | Счетчик товаров при клике "Купить" | ✅ | CartButton с Redux |
| 6 | Динамический пересчет в корзине | ✅ | Сумма обновляется в реальном времени |
| 7 | Данные в массиве + sessionStorage | ✅ | headphones[] + sessionStorage |

---

## 🖼 СКРИНШОТЫ РАБОТЫ ПРИЛОЖЕНИЯ

### Скриншот 1: Главная страница (Каталог товаров)
[ВСТАВЬТЕ СКРИНШОТ ЗДЕСЬ]

### Скриншот 2: Страница корзины
[ВСТАВЬТЕ СКРИНШОТ ЗДЕСЬ]

### Скриншот 3: Hover-эффекты (пример)
[ВСТАВЬТЕ СКРИНШОТ С HOVER ЗДЕСЬ]

### Скриншот 4: Адаптивная версия (мобильная)
[ВСТАВЬТЕ СКРИНШОТ МОБИЛЬНОЙ ВЕРСИИ]

---

## 🏗 ТЕХНОЛОГИИ И АРХИТЕКТУРА ПРОЕКТА

**Технологический стек:**
- ⚛️ React 18 + TypeScript
- 🚀 Vite (быстрая сборка)
- 🔄 Redux Toolkit (управление состоянием)
- 🛣️ React Router 6 (роутинг)
- 🎨 CSS Modules (стилизация)
- ⭐ React Icons (иконки)

**Архитектура (Feature-Sliced Design):**
```
src/
├── app/           # Инициализация приложения
├── pages/         # HomePage, CartPage
├── widgets/       # Header, Footer
├── features/      # cart (логика корзины)
├── entities/      # product (сущность товара)
└── shared/        # UI компоненты, утилиты
```
---

## 💻 КЛЮЧЕВЫЕ ФРАГМЕНТЫ КОДА

### 1. Структура данных:
```typescript
// Массив товаров (entities/product/constants.ts)
export const headphones: Product[] = [
  {
    id: 1,
    img: Apple_BYZ_S852I,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    category: 'wired'
  },
  // ... 8 других товаров
];
```
### 2. Работа с sessionStorage:
```typescript
// shared/lib/sessionStorage.ts
export const sessionStorage = {
  getItem: <T>(key: string, defaultValue?: T): T => {
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : (defaultValue as T);
  },
  setItem: <T>(key: string, value: T): void => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
};
```
### 3. Redux Slice для корзины:
```typescript

// features/cart/slice.ts
const cartSlice = createSlice({
  name: 'cart',
  reducers: {
    addItem: (state, action) => {
      // логика добавления
      sessionStorage.setItem('cart', state); // сохранение
    }
  }
});
```
---
## ✨ ДОПОЛНИТЕЛЬНЫЕ УЛУЧШЕНИЯ

- ✅ Адаптивный дизайн - поддержка mobile/tablet/desktop
- ✅ Удаление товаров из корзины
- ✅ Фильтрация по категориям (проводные/беспроводные)
- ✅ Валидация товаров в корзине (проверка существования)
- ✅ Интерактивные соцсети с подтверждением перехода
- ✅ Оптимизация производительности (useMemo, lazy loading)

---

## 🚀 ИНСТРУКЦИЯ ДЛЯ ПРОВЕРКИ

### Вариант A: Запуск локально
```bash

# 1. Распаковать архив
unzip audio-shop-project.zip

# 2. Установить зависимости
npm install

# 3. Запустить проект
npm run dev
# Откроется на http://localhost:5173
```

### Вариант B: Онлайн демо

Доступно по ссылке: (https://AnnSamSPb.github.io/Audio-shop/)

### Вариант C: Предпросмотр сборки
```bash

npm run build
npm run preview
```

## 📞 КОНТАКТЫ
- GitHub: (https://github.com/AnnSamSPb)
- Telegram:  [@samaannet](https://web.telegram.org/k/#samaannet)

## 🙏 БЛАГОДАРНОСТИ
- Иконки от [React Icons](https://react-icons.github.io/react-icons/)
- Шрифт [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Архитектура [Feature Sliced Design](https://feature-sliced.design/)

---
Проект выполнен с использованием современных подходов к разработке