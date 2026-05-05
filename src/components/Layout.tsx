import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Navbar } from './Navbar'
import { ScrollContext } from '../context/ScrollContext'

interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
    const { i18n } = useTranslation()
    const isRtl = i18n.language === 'ar' || i18n.language === 'ku'
    const scrollRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ container: scrollRef })
    const auraDrift = useTransform(scrollYProgress, [0, 1], [0, 180])
    const auraReverseDrift = useTransform(scrollYProgress, [0, 1], [0, -160])

    return (
        <ScrollContext.Provider value={{ scrollYProgress }}>
            <div ref={scrollRef} className="website-shell">
                <div dir={isRtl ? 'rtl' : 'ltr'} className="relative">
                    <motion.div className="website-progress" style={{ scaleX: scrollYProgress }} />
                    <motion.div className="website-aura website-aura-left" style={{ y: auraDrift }} />
                    <motion.div className="website-aura website-aura-right" style={{ y: auraReverseDrift }} />

                    <div className="relative z-10">
                        <Navbar scrollRef={scrollRef} />
                        <main className="px-4 pb-24 md:px-6">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </ScrollContext.Provider>
    )
}
