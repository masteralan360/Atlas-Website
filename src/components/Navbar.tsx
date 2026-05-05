import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import atlasLogoUrl from '../assets/AtlasClear.svg'
import { getWebsiteNavItems } from '../content'

interface NavbarProps {
    scrollRef: React.RefObject<HTMLDivElement | null>
}

export function Navbar({ scrollRef }: NavbarProps) {
    const { t, i18n } = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()
    const websiteNavItems = getWebsiteNavItems(t)

    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
    const langMenuRef = useRef<HTMLDivElement>(null)

    const isHome = location.pathname === `/${i18n.language}` || location.pathname === `/${i18n.language}/`

    const languages = ['en', 'ar', 'ku']

    const changeLanguage = (newLang: string) => {
        const segments = location.pathname.split('/').filter(Boolean)
        segments[0] = newLang
        navigate(`/${segments.join('/')}${location.search}`)
        setIsLangMenuOpen(false)
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
            <div className="website-nav-shell mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-3 md:px-6">
                <Link
                    to={`/${i18n.language}`}
                    onClick={() => isHome && scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-3 text-left hover:opacity-80 transition"
                >
                    <img src={atlasLogoUrl} alt="Atlas logo" className="h-11 w-11 shrink-0 object-contain" />
                    <div>
                        <div className="text-[11px] font-black uppercase tracking-[0.34em] text-[var(--website-muted)]">{t('brand.name')}</div>
                        <div className="text-sm font-semibold text-[var(--website-ink)]">{t('brand.tagline')}</div>
                    </div>
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {websiteNavItems.map((item) => {
                        const sectionId = item.id.charAt(0).toUpperCase() + item.id.slice(1)
                        const route = `/${i18n.language}/${sectionId}`
                        const isActive = location.pathname.toLowerCase() === route.toLowerCase()

                        return (
                            <Link
                                key={item.id}
                                to={route}
                                onClick={(e) => {
                                    if (isActive) {
                                        e.preventDefault()
                                        const shell = document.querySelector('.website-shell')
                                        const element = document.getElementById(item.id.toLowerCase())
                                        if (shell && element) {
                                            shell.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
                                        }
                                    }
                                }}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/70 hover:text-[var(--website-ink)] ${isActive ? 'bg-white/90 text-[var(--website-ink)]' : 'text-[var(--website-muted)]'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Unified Language Selector Dropdown */}
                    <div className="relative" ref={langMenuRef}>
                        <button
                            type="button"
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex h-10 items-center gap-1.5 rounded-full bg-[var(--website-border)] px-3 text-[var(--website-ink)] transition-colors hover:bg-white/50"
                        >
                            <Globe className="h-4 w-4" />
                            <span className="text-xs font-bold uppercase md:text-sm">{i18n.language}</span>
                            <ChevronDown className={`h-3 w-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isLangMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-2xl bg-white/90 border border-[var(--website-border)] p-1 shadow-xl backdrop-blur-xl z-[60] origin-top-right rtl:left-0 rtl:right-auto rtl:origin-top-left"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang}
                                            type="button"
                                            onClick={() => changeLanguage(lang)}
                                            className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-xs font-semibold transition md:text-sm ${i18n.language === lang
                                                    ? 'bg-[var(--website-ink)] text-white'
                                                    : 'text-[var(--website-muted)] hover:bg-black/5 hover:text-[var(--website-ink)]'
                                                }`}
                                        >
                                            {lang === 'en' ? 'English' : lang === 'ar' ? 'العربية' : 'کوردی'}
                                            {i18n.language === lang && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        to={`/${i18n.language}/Pricing`}
                        className="website-cta-primary rounded-full px-4 py-2 text-sm font-semibold md:px-5"
                    >
                        <span className="hidden md:inline">{t('nav.planRollout')}</span>
                        <span className="md:hidden">{t('nav.pricing')}</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
