import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { revealUp, stagger } from '../animations'
import { SectionHeading } from '../components/SectionHeading'
import { getWebsiteTestimonials } from '../content'

export function Testimonials() {
    const { t } = useTranslation()
    const websiteTestimonials = getWebsiteTestimonials(t)

    return (
        <section className="mx-auto mt-24 max-w-7xl space-y-12 md:mt-32">
            <SectionHeading
                eyebrow={t('testimonials.eyebrow')}
                title={t('testimonials.title')}
                description={t('testimonials.description')}
            />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={stagger}
                className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]"
            >
                <motion.blockquote variants={revealUp} className="website-quote-card rounded-[36px] p-8 md:p-10">
                    <p className="website-display text-3xl text-white md:text-5xl">
                        "{websiteTestimonials[0].quote}"
                    </p>
                    <footer className="mt-10 border-t border-white/10 pt-5">
                        <div className="text-[11px] font-black uppercase tracking-[0.28em] text-white/52">{websiteTestimonials[0].role}</div>
                        <div className="mt-2 text-sm font-semibold text-white/78">{websiteTestimonials[0].company}</div>
                    </footer>
                </motion.blockquote>

                <div className="grid gap-5">
                    {websiteTestimonials.slice(1).map((testimonial) => (
                        <motion.blockquote key={testimonial.id} variants={revealUp} className="website-panel rounded-[30px] p-6">
                            <p className="text-lg font-semibold leading-8 text-[var(--website-ink)]">"{testimonial.quote}"</p>
                            <footer className="mt-8 border-t border-[var(--website-border)] pt-5">
                                <div className="text-[11px] font-black uppercase tracking-[0.24em] text-[var(--website-muted)]">{testimonial.role}</div>
                                <div className="mt-2 text-sm font-medium text-[var(--website-ink)]">{testimonial.company}</div>
                            </footer>
                        </motion.blockquote>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
