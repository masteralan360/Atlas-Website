import { motion, type MotionValue } from 'motion/react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { revealUp, stagger } from '../animations'
import { 
    getWebsiteHeroMetrics, 
    getWebsiteDesignSignals, 
    getWebsiteHeroCommands, 
    getWebsiteWorkflowSteps, 
    getWebsiteProofStrip 
} from '../content'

interface HeroProps {
    heroLift: MotionValue<number>
    canvasLift: MotionValue<number>
}

export function Hero({ heroLift, canvasLift }: HeroProps) {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    
    const websiteHeroMetrics = getWebsiteHeroMetrics(t)
    const websiteDesignSignals = getWebsiteDesignSignals(t)
    const websiteHeroCommands = getWebsiteHeroCommands(t)
    const websiteWorkflowSteps = getWebsiteWorkflowSteps(t)
    const websiteProofStrip = getWebsiteProofStrip(t)

    return (
        <section id="top" className="website-section mx-auto max-w-7xl pt-10 md:pt-16">
            <div className="grid items-start gap-10 xl:grid-cols-[1.03fr_0.97fr]">
                <motion.div
                    className="space-y-8 pt-4 md:space-y-10 md:pt-10"
                    style={{ y: heroLift }}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.div variants={revealUp} className="space-y-5">
                        <span className="website-pill inline-flex items-center rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.28em]">
                            {t('hero.pill')}
                        </span>
                        <h1 className="website-display max-w-5xl text-5xl text-[var(--website-ink)] md:text-7xl xl:text-[6rem]">
                            {t('hero.heading')}
                        </h1>
                        <p className="website-copy max-w-2xl text-base md:xl">
                            {t('hero.description')}
                        </p>
                    </motion.div>

                    <motion.div variants={revealUp} className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => navigate(`/${i18n.language}/Architecture`)}
                            className="website-cta-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                        >
                            {t('hero.ctaExplore')}
                            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(`/${i18n.language}/Modules`)}
                            className="website-cta-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                        >
                            {t('hero.ctaModules')}
                            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                        </button>
                    </motion.div>

                    <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {websiteHeroMetrics.map((metric) => (
                            <motion.div key={metric.id} variants={revealUp} className="website-stat-card rounded-[28px] px-5 py-5">
                                <div className="text-3xl font-black tracking-tight text-[var(--website-ink)]">{metric.value}</div>
                                <div className="mt-2 text-sm font-medium text-[var(--website-muted)]">{metric.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={stagger} className="grid gap-3 md:grid-cols-2">
                        {websiteDesignSignals.map((item) => (
                            <motion.div key={item.id} variants={revealUp} className="website-note-card rounded-[26px] px-5 py-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[var(--website-ink)] shadow-sm">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-black uppercase tracking-[0.24em] text-[var(--website-muted)]">{item.label}</div>
                                        <div className="mt-2 text-sm font-semibold text-[var(--website-ink)]">{item.value}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={revealUp}
                    style={{ y: canvasLift }}
                    className="website-canvas-shell"
                >
                    <div className="website-canvas rounded-[38px] p-5 md:p-6">
                        <div className="website-canvas-header">
                            <div>
                                <p className="website-kicker text-white/52">{t('canvas.kicker')}</p>
                                <h3 className="website-display mt-3 text-3xl text-white md:text-4xl">{t('canvas.heading')}</h3>
                            </div>
                            <span className="website-canvas-badge">{t('canvas.badge')}</span>
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            {websiteHeroCommands.map((command) => (
                                <div key={command.id} className="website-command-card rounded-[24px] p-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.26em] text-white/46">{command.label}</div>
                                            <div className="mt-2 text-lg font-black text-white">{command.value}</div>
                                            <div className="mt-2 text-sm text-white/62">{command.note}</div>
                                        </div>
                                        <div className="website-command-icon">
                                            <command.icon className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                            <div className="website-canvas-panel rounded-[28px] p-5">
                                <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/44">{t('canvas.linkedFlow')}</div>
                                <div className="mt-4 space-y-4">
                                    {websiteWorkflowSteps.map((step) => (
                                        <div key={step.step} className="flex items-start gap-4">
                                            <div className="website-step-chip">{step.step}</div>
                                            <div>
                                                <div className="text-sm font-black text-white">{step.title}</div>
                                                <div className="mt-1 text-sm text-white/58">{step.outcome}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="website-canvas-panel rounded-[28px] p-5">
                                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/44">{t('canvas.deployment')}</div>
                                    <div className="mt-3 text-lg font-black text-white">{t('canvas.deploymentHeading')}</div>
                                    <p className="mt-2 text-sm text-white/58">
                                        {t('canvas.deploymentDescription')}
                                    </p>
                                </div>
                                <div className="website-canvas-panel rounded-[28px] p-5">
                                    <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/44">{t('canvas.coreModuleMix')}</div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {websiteProofStrip.slice(0, 6).map((item, index) => (
                                            <span key={index} className="website-chip-dark">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
