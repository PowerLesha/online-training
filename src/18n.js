import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./components/locales/en/translation.json";
import translationUKR from "./components/locales/ukr/translation.json";
import translationRU from "./components/locales/ru/translation.json";
import translationBG from "./components/locales/bg/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ukr: {
    translation: translationUKR,
  },
  ru: {
    translation: translationRU,
  },
  bg: {
    translation: translationBG,
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
