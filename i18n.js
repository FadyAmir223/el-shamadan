import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.i18nextLng || 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    React: {
      useSuspense: false,
    },
    ns: [],
    backend: {
      loadPath: '/el-shamedan/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
