import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'

import { Layout } from './components/Layout'
import { Hero } from './sections/Hero'
import { Architecture } from './sections/Architecture'
import { Modules } from './sections/Modules'
import { Workflow } from './sections/Workflow'
import { Pricing } from './sections/Pricing'
import { FinalCTA } from './sections/FinalCTA'
import { useScrollProgress } from './context/ScrollContext'

import './website.css'

// Helper to reset scroll on route change
function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        const shell = document.querySelector('.website-shell')
        if (shell) {
            shell.scrollTo(0, 0)
        }
    }, [pathname])
    return null
}

import { useLanguageSync } from './hooks/useLanguageSync'

export function WebsiteApp() {
    const { t } = useTranslation()

    useEffect(() => {
        const previousTitle = document.title
        document.title = t('brand.pageTitle')
        return () => {
            document.title = previousTitle
        }
    }, [t])

    const scrollToSection = (id: string) => {
        const shell = document.querySelector('.website-shell')
        const element = document.getElementById(id.toLowerCase())
        if (shell && element) {
            const offsetTop = element.offsetTop
            shell.scrollTo({ top: offsetTop - 80, behavior: 'smooth' })
        }
    }

    return (
        <Layout>
            <ScrollToTop />
            <Routes>
                <Route path="/:lang" element={<HomePageWrapper scrollToSection={scrollToSection} />} />
                <Route path="/:lang/Architecture" element={<HomePageWrapper scrollToSection={scrollToSection} />} />
                <Route path="/:lang/Modules" element={<HomePageWrapper scrollToSection={scrollToSection} />} />
                <Route path="/:lang/Workflow" element={<HomePageWrapper scrollToSection={scrollToSection} />} />
                <Route path="/:lang/Pricing" element={<HomePageWrapper scrollToSection={scrollToSection} />} />
                <Route path="*" element={<RootRedirect />} />
            </Routes>
        </Layout>
    )
}

function RootRedirect() {
    useLanguageSync()
    return null
}

function HomePageWrapper({ scrollToSection }: { scrollToSection: (id: string) => void }) {
    useLanguageSync()
    return <HomePage scrollToSection={scrollToSection} />
}

function HomePage({ scrollToSection }: { scrollToSection: (id: string) => void }) {
    const location = useLocation()

    useEffect(() => {
        const segments = location.pathname.split('/').filter(Boolean)
        const sectionId = segments[1] // segments[0] is lang, segments[1] is section
        if (sectionId) {
            // Delay slightly to ensure content is rendered
            const timer = setTimeout(() => {
                scrollToSection(sectionId)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [location.pathname, scrollToSection])

    return (
        <>
            <HeroSectionWrapper />
            <Architecture />
            <Modules />
            <Workflow />
            <Pricing />
            <FinalCTA />
        </>
    )
}

// Wrapper for Hero to handle its specific parallax
function HeroSectionWrapper() {
    const scrollYProgress = useScrollProgress()
    const heroLift = useTransform(scrollYProgress, [0, 0.22], [0, -72])
    const canvasLift = useTransform(scrollYProgress, [0, 0.26], [0, -38])

    return <Hero heroLift={heroLift} canvasLift={canvasLift} />
}
