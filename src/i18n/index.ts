import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import ar from './ar.json'
import ku from './ku.json'

const SUPPORTED_LANGUAGES = ['en', 'ar', 'ku']

const getInitialLang = () => {
    // Try to get from URL first for direct links
    const pathLang = window.location.pathname.split('/')[1]
    if (pathLang && SUPPORTED_LANGUAGES.includes(pathLang)) {
        return pathLang
    }
    // Fallback to localStorage or default
    return localStorage.getItem('atlas-lang') || 'en'
}

const initialLang = getInitialLang()

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ar: { translation: ar },
        ku: { translation: ku }
    },
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
})

function applyDirection(lang: string) {
    const dir = lang === 'ar' || lang === 'ku' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.documentElement.dir = dir
}

applyDirection(i18n.language)

i18n.on('languageChanged', (lang) => {
    applyDirection(lang)
    localStorage.setItem('atlas-lang', lang)
})

export default i18n
