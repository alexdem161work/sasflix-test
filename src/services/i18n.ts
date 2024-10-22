// i18n.js
import { createI18n } from 'vue-i18n';

// Файлы переводов
import en from '@/locales/en.json';

// Определение переводов
const messages = {
  en,
};

// Создание экземпляра i18n
const i18n = createI18n({
  locale: 'en', // Установка языка по умолчанию
  fallbackLocale: 'en', // Язык по умолчанию, если перевод не найден
  messages, // Переводы
});

export default i18n;
