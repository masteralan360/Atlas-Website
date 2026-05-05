import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SUPPORTED_LANGUAGES = ['en', 'ar', 'ku']
const DEFAULT_LANGUAGE = 'en'

export function useLanguageSync() {
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const segments = location.pathname.split('/').filter(Boolean)
        const currentLang = segments[0]

        if (currentLang && SUPPORTED_LANGUAGES.includes(currentLang)) {
            if (i18n.language !== currentLang) {
                i18n.changeLanguage(currentLang)
            }
        } else {
            // No valid language at the start of the URL
            const detectedLang = i18n.language || DEFAULT_LANGUAGE
            const targetLang = SUPPORTED_LANGUAGES.includes(detectedLang) ? detectedLang : DEFAULT_LANGUAGE

            // Construct the path: if first segment is a known non-lang or just a page
            // We should check if segments[0] is one of our section names if we want to be very precise,
            // but simply prefixing is usually enough if we haven't matched a lang.

            const newPath = `/${targetLang}${location.pathname}`
            navigate(`${newPath}${location.search}`, { replace: true })
        }
    }, [i18n, navigate, location.pathname, location.search])
}
