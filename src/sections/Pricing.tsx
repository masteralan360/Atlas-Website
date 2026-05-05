import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { revealUp, stagger } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { getWebsitePricingPlans } from '../content'

export function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false)
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const websitePricingPlans = getWebsitePricingPlans(t)

    return (
        <section id="pricing" className="website-section mx-auto mt-24 max-w-7xl space-y-12 md:mt-32">
            <SectionHeading
                eyebrow={t('pricing.eyebrow')}
                title={t('pricing.title')}
                description={t('pricing.description')}
            />

            <div className="flex justify-center mt-8 mb-4">
                <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold ${!isAnnual ? 'text-[var(--website-ink)]' : 'text-[var(--website-muted)]'}`}>{t('pricing.monthly')}</span>
                    <button
                        type="button"
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-[var(--website-ink)] transition-colors focus:outline-none"
                    >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6 rtl:-translate-x-6' : 'translate-x-1 rtl:-translate-x-1'}`} />
                    </button>
                    <span className={`text-sm font-semibold ${isAnnual ? 'text-[var(--website-ink)]' : 'text-[var(--website-muted)]'}`}>{t('pricing.annually')}</span>
                </div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="grid gap-5 xl:grid-cols-3"
            >
                {websitePricingPlans.map((plan) => (
                    <motion.article
                        key={plan.id}
                        variants={revealUp}
                        className={[
                            'rounded-[34px] p-6 md:p-7',
                            plan.highlight ? 'website-pricing-card-featured' : 'website-panel'
                        ].join(' ')}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <div className="website-kicker">{t('pricing.atlasPackage')}</div>
                                <h3 className="website-display mt-4 text-3xl text-[var(--website-ink)]">{plan.name}</h3>
                            </div>
                            {plan.highlight ? (
                                <span className="website-cta-primary rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em]">
                                    {t('pricing.recommended')}
                                </span>
                            ) : null}
                        </div>

                        {isAnnual && plan.annualSaving && (
                            <div className="mt-4">
                                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-600">
                                    {plan.annualSaving}
                                </span>
                            </div>
                        )}

                        <div className="mt-8 flex items-baseline gap-1">
                            <div className="text-3xl font-black tracking-tight text-[var(--website-ink)]">{isAnnual ? plan.annualPriceLabel : plan.priceLabel}</div>
                            <div className="text-sm font-semibold text-[var(--website-muted)]">{isAnnual ? t('pricing.perYear') : t('pricing.perMonth')}</div>
                        </div>
                        <p className="website-copy mt-4 text-sm">{plan.description}</p>

                        <div className="mt-8 space-y-3">
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 text-sm font-medium text-[var(--website-ink)]">
                                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--website-ink)] text-white">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    {plan.tooltips?.[feature] ? (
                                        <span className="group relative mt-0.5 inline-block cursor-help border-b border-dashed border-[var(--website-muted)] pb-[1px] transition-colors hover:border-[var(--website-ink)]">
                                            {feature}
                                            <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-[280px] -translate-x-1/2 rounded-md bg-[var(--website-ink)] px-3 py-2 text-center text-xs font-semibold leading-relaxed text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                                                {plan.tooltips[feature]}
                                                <span className="absolute top-full left-1/2 -mt-1 -translate-x-1/2 border-4 border-transparent border-t-[var(--website-ink)]" />
                                            </span>
                                        </span>
                                    ) : (
                                        <span className="mt-0.5">{feature}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => navigate(`/${i18n.language}`)}
                            className={[
                                'mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition',
                                plan.highlight ? 'website-cta-primary' : 'website-cta-secondary'
                            ].join(' ')}
                        >
                            {plan.cta}
                            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                        </button>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    )
}
