import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { revealUp, stagger } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { getWebsiteWorkflowSteps } from '../content'

export function Workflow() {
    const { t } = useTranslation()
    const websiteWorkflowSteps = getWebsiteWorkflowSteps(t)

    return (
        <section id="workflow" className="website-section mx-auto mt-24 max-w-7xl space-y-12 md:mt-32">
            <SectionHeading
                eyebrow={t('workflow.eyebrow')}
                title={t('workflow.title')}
                description={t('workflow.description')}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="grid gap-5 lg:grid-cols-3"
            >
                {websiteWorkflowSteps.map((step) => (
                    <motion.article key={step.step} variants={revealUp} className="website-panel rounded-[32px] p-6 md:p-7">
                        <div className="flex items-center justify-between gap-4">
                            <div className="website-step-chip website-step-chip-light rtl:pb-1 rtl:translate-y-px rtl:tracking-normal w-[2.1rem] h-[2.1rem] shrink-0 font-sans tracking-widest flex items-center justify-center">{step.step}</div>
                            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[var(--website-muted)]">{t('workflow.operatingStep')}</div>
                        </div>
                        <h3 className="mt-6 text-2xl font-black tracking-tight text-[var(--website-ink)]">{step.title}</h3>
                        <p className="website-copy mt-4 text-sm">{step.description}</p>
                        <div className="mt-5 rounded-[22px] bg-[var(--website-soft-strong)] px-4 py-3 text-sm font-semibold text-[var(--website-ink)]">
                            {step.outcome}
                        </div>
                        <div className="mt-6 space-y-3">
                            {step.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-3 text-sm font-medium text-[var(--website-ink)]">
                                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--website-ink)] text-white">
                                        <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                                    </div>
                                    {point}
                                </div>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    )
}
