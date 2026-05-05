import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { revealUp } from '../animations'

export function FinalCTA() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()

    return (
        <section className="mx-auto mt-24 max-w-7xl md:mt-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={revealUp}
                className="website-final-panel rounded-[40px] p-8 md:p-12"
            >
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                    <div className="space-y-5">
                        <p className="website-kicker text-white/52">{t('cta.eyebrow')}</p>
                        <h2 className="website-display max-w-3xl text-4xl text-white md:text-6xl">
                            {t('cta.title')}
                        </h2>
                        <p className="max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                            {t('cta.description')}
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <button
                            type="button"
                            onClick={() => navigate(`/${i18n.language}/Modules`)}
                            className="website-cta-primary rounded-full px-6 py-3 text-sm font-semibold"
                        >
                            {t('cta.reviewModules')}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(`/${i18n.language}/Pricing`)}
                            className="rounded-full border border-white/16 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            {t('nav.pricing')}
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
