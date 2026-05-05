import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { revealUp, stagger } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { getWebsiteProofStrip } from '../content'

export function Architecture() {
    const { t } = useTranslation()
    const websiteProofStrip = getWebsiteProofStrip(t)

    return (
        <section id="architecture" className="website-section mx-auto mt-24 max-w-7xl space-y-12 md:mt-32">
            <SectionHeading
                eyebrow={t('architecture.eyebrow')}
                title={t('architecture.title')}
                description={t('architecture.description')}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="grid gap-5 xl:grid-cols-[1.12fr_0.88fr]"
            >
                <motion.article variants={revealUp} className="website-featured-panel rounded-[36px] p-8 md:p-10">
                    <p className="website-kicker">{t('architecture.connectedOps')}</p>
                    <h3 className="website-display mt-5 text-4xl text-[var(--website-ink)] md:text-5xl">
                        {t('architecture.connectedOpsTitle')}
                    </h3>
                    <p className="website-copy mt-5 max-w-2xl text-base">
                        {t('architecture.connectedOpsDescription')}
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {[
                            t('architecture.flowCards.posToInvoice'),
                            t('architecture.flowCards.inventoryToLedger'),
                            t('architecture.flowCards.demandToAnalytics')
                        ].map((item, index) => (
                            <div key={index} className="website-line-card rounded-[24px] p-4">
                                <div className="text-sm font-black text-[var(--website-ink)]">{item}</div>
                            </div>
                        ))}
                    </div>
                </motion.article>

                <motion.div variants={revealUp} className="website-panel rounded-[36px] p-6 md:p-8">
                    <div className="text-[11px] font-black uppercase tracking-[0.28em] text-[var(--website-muted)]">{t('architecture.surfaceInventory')}</div>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {websiteProofStrip.map((item, index) => (
                            <span key={index} className="website-chip-light">
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
