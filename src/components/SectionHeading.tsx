import { motion } from 'motion/react'
import { revealUp } from '../animations'

export function SectionHeading({
    eyebrow,
    title,
    description
}: {
    eyebrow?: string
    title: string
    description: string
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={revealUp}
            className="max-w-3xl space-y-5"
        >
            <p className="website-kicker">{eyebrow}</p>
            <h2 className="website-display text-4xl text-[var(--website-ink)] md:text-6xl">{title}</h2>
            <p className="website-copy max-w-2xl text-base md:text-lg">{description}</p>
        </motion.div>
    )
}
