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
- React 18 + TypeScript
- Vite (сборка)
- Redux Toolkit (стейт-менеджмент)
- React Router 6 (навигация)
- CSS Modules (стили)
- React Icons (иконки)

**Структура по FSD:**
```
src/
├── app/ # Инициализация
├── pages/ # HomePage, CartPage
├── widgets/ # Header, Footer
├── features/ # cart (логика корзины)
├── entities/ # product (сущность)
└── shared/ # UI компоненты
```


---

## 💻 КЛЮЧЕВЫЕ ФРАГМЕНТЫ КОДА

### 1. Интерфейс товара
```typescript
interface Product {
  id: number;
  name: string;
  price: number;
  category: 'wired' | 'wireless';
  rating: number;
  image: string;
}
```
### 2. Массив товаров
```typescript
const headphones: Product[] = [
    {
        id: 1,
        img: Apple_BYZ_S852I,
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        category: 'wired'
    },
    // ... другие товары
]
```
### 3. Работа с sessionStorage
```typescript

// Сохранение корзины
const saveCartToStorage = (cart: CartItem[]) => {
  sessionStorage.setItem('cart', JSON.stringify(cart));
};
```

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


---
## ✨ ДОПОЛНИТЕЛЬНЫЕ УЛУЧШЕНИЯ

✅ Адаптивный дизайн - поддержка mobile/tablet/desktop
✅ Удаление товаров из корзины
✅ Фильтрация по категориям (проводные/беспроводные)
✅ Анимации и плавные переходы
✅ Оптимизация производительности
📞 КОНТАКТЫ

    GitHub: https://github.com/AnnSamSPb

    Telegram: [@ваш_телеграм]

Проект выполнен с использованием современных подходов к разработке