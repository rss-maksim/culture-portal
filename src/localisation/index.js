import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import ru from '../data/messages/ru.json'
import en from '../data/messages/en.json'
import by from '../data/messages/by.json'
import { LOCALES } from './../const/index'

const locales = {
  [LOCALES.en]: en,
  [LOCALES.ru]: ru,
  [LOCALES.by]: by
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LOCALES.en,
    resources: locales,
    debug: true,
    react: {
      wait: true
    }
  })

export default i18n
