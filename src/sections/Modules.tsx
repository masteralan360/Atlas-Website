import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { revealUp, stagger } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { getWebsiteArchitectureBlocks, getWebsiteSpotlights } from '../content'
import { accentClasses } from '../constants'

export function Modules() {
    const { t } = useTranslation()
    const websiteArchitectureBlocks = getWebsiteArchitectureBlocks(t)
    const websiteSpotlights = getWebsiteSpotlights(t)

    return (
        <section id="modules" className="website-section mx-auto mt-24 max-w-7xl space-y-12 md:mt-32">
            <SectionHeading
                eyebrow={t('modules.eyebrow')}
                title={t('modules.title')}
                description={t('modules.description')}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="grid gap-5 xl:grid-cols-2"
            >
                {websiteArchitectureBlocks.map((block, index) => {
                    const tone = accentClasses[block.accent]

                    return (
                        <motion.article
                            key={block.id}
                            variants={revealUp}
                            className={[
                                'website-panel website-card-hover rounded-[34px] p-6 md:p-8',
                                tone.border,
                                index === 0 ? 'xl:col-span-2' : ''
                            ].join(' ')}
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div className="max-w-2xl">
                                    <p className="website-kicker">{block.eyebrow}</p>
                                    <h3 className="website-display mt-4 text-3xl text-[var(--website-ink)] md:text-4xl">{block.title}</h3>
                                    <p className="website-copy mt-4 text-base">{block.description}</p>
                                </div>
                                <div className={['flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px]', tone.icon].join(' ')}>
                                    <block.icon className="h-6 w-6" />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-3 md:grid-cols-2">
                                {block.points.map((point, index) => (
                                    <div key={index} className="website-line-card rounded-[22px] p-4">
                                        <div className="flex items-start gap-3">
                                            <span className={['mt-0.5 inline-flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-black', tone.pill].join(' ')}>
                                                <Check className="h-3.5 w-3.5" />
                                            </span>
                                            <span className="text-sm font-semibold text-[var(--website-ink)]">{point}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.article>
                    )
                })}
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
                {websiteSpotlights.map((spotlight) => (
                    <motion.article key={spotlight.id} variants={revealUp} className="website-spotlight rounded-[30px] p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white text-[var(--website-ink)] shadow-sm">
                            <spotlight.icon className="h-5 w-5" />
                        </div>
                        <p className="website-kicker mt-5">{spotlight.eyebrow}</p>
                        <h3 className="mt-3 text-2xl font-black tracking-tight text-[var(--website-ink)]">{spotlight.title}</h3>
                        <p className="website-copy mt-3 text-sm">{spotlight.description}</p>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    )
}
