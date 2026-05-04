import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import ar from './ar.json'
import ckb from './ckb.json'

const savedLang = localStorage.getItem('atlas-lang') || 'en'

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        ar: { translation: ar },
        ckb: { translation: ckb }
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
})

function applyDirection(lang: string) {
    const dir = lang === 'ar' || lang === 'ckb' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.documentElement.dir = dir
}

applyDirection(i18n.language)

i18n.on('languageChanged', (lang) => {
    applyDirection(lang)
    localStorage.setItem('atlas-lang', lang)
})

export default i18n
