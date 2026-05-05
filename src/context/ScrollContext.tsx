import { createContext, useContext } from 'react'
import { type MotionValue } from 'motion/react'

interface ScrollContextType {
    scrollYProgress: MotionValue<number>
}

export const ScrollContext = createContext<ScrollContextType | null>(null)

export function useScrollProgress() {
    const context = useContext(ScrollContext)
    if (!context) {
        throw new Error('useScrollProgress must be used within a ScrollProvider')
    }
    return context.scrollYProgress
}
