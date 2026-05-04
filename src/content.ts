import type { LucideIcon } from 'lucide-react'
import {
    ArrowRightLeft,
    BarChart3,
    Blocks,
    BriefcaseBusiness,
    Building2,
    CreditCard,
    Globe2,
    HandCoins,
    Languages,
    MessageSquareShare,
    PackageSearch,
    PlaneTakeoff,
    Receipt,
    ShieldCheck,
    Store,
    UsersRound,
    Warehouse,
    Wallet
} from 'lucide-react'

export interface WebsiteNavItem {
    id: string
    label: string
}

export interface WebsiteHeroMetric {
    id: string
    value: string
    label: string
}

export interface WebsiteHeroCommand {
    id: string
    label: string
    value: string
    note: string
    icon: LucideIcon
}

export interface WebsiteArchitectureBlock {
    id: string
    eyebrow: string
    title: string
    description: string
    icon: LucideIcon
    accent: 'teal' | 'clay' | 'ink' | 'gold'
    points: string[]
}

export interface WebsiteSpotlight {
    id: string
    eyebrow: string
    title: string
    description: string
    icon: LucideIcon
}

export interface WebsiteWorkflowStep {
    step: string
    title: string
    description: string
    outcome: string
    points: string[]
}

export interface WebsiteTestimonial {
    id: string
    quote: string
    role: string
    company: string
}

export interface WebsitePricingPlan {
    id: string
    name: string
    priceLabel: string
    annualPriceLabel: string
    annualSaving: string
    description: string
    highlight?: boolean
    features: string[]
    tooltips?: Record<string, string>
    cta: string
}

export const getWebsiteNavItems = (t: (key: string) => string): WebsiteNavItem[] => [
    { id: 'architecture', label: t('nav.architecture') },
    { id: 'modules', label: t('nav.modules') },
    { id: 'workflow', label: t('nav.workflow') },
    { id: 'pricing', label: t('nav.pricing') }
]

export const getWebsiteHeroMetrics = (t: (key: string) => string): WebsiteHeroMetric[] => [
    { id: 'modules', value: t('hero.metrics.modules.value'), label: t('hero.metrics.modules.label') },
    { id: 'currencies', value: t('hero.metrics.currencies.value'), label: t('hero.metrics.currencies.label') },
    { id: 'languages', value: t('hero.metrics.languages.value'), label: t('hero.metrics.languages.label') },
    { id: 'workspace', value: t('hero.metrics.workspace.value'), label: t('hero.metrics.workspace.label') }
]

export const getWebsiteHeroCommands = (t: (key: string) => string): WebsiteHeroCommand[] => [
    {
        id: 'frontline',
        label: t('canvas.commands.frontline.label'),
        value: t('canvas.commands.frontline.value'),
        note: t('canvas.commands.frontline.note'),
        icon: CreditCard
    },
    {
        id: 'stock',
        label: t('canvas.commands.stock.label'),
        value: t('canvas.commands.stock.value'),
        note: t('canvas.commands.stock.note'),
        icon: Warehouse
    },
    {
        id: 'finance',
        label: t('canvas.commands.finance.label'),
        value: t('canvas.commands.finance.value'),
        note: t('canvas.commands.finance.note'),
        icon: Wallet
    },
    {
        id: 'demand',
        label: t('canvas.commands.demand.label'),
        value: t('canvas.commands.demand.value'),
        note: t('canvas.commands.demand.note'),
        icon: Store
    },
    {
        id: 'service',
        label: t('canvas.commands.service.label'),
        value: t('canvas.commands.service.value'),
        note: t('canvas.commands.service.note'),
        icon: PlaneTakeoff
    },
    {
        id: 'people',
        label: t('canvas.commands.people.label'),
        value: t('canvas.commands.people.value'),
        note: t('canvas.commands.people.note'),
        icon: UsersRound
    }
]

export const getWebsiteArchitectureBlocks = (t: (key: string, options?: any) => any): WebsiteArchitectureBlock[] => [
    {
        id: 'commerce',
        eyebrow: t('architecture.blocks.commerce.eyebrow'),
        title: t('architecture.blocks.commerce.title'),
        description: t('architecture.blocks.commerce.description'),
        icon: CreditCard,
        accent: 'teal',
        points: t('architecture.blocks.commerce.points', { returnObjects: true })
    },
    {
        id: 'inventory',
        eyebrow: t('architecture.blocks.inventory.eyebrow'),
        title: t('architecture.blocks.inventory.title'),
        description: t('architecture.blocks.inventory.description'),
        icon: PackageSearch,
        accent: 'gold',
        points: t('architecture.blocks.inventory.points', { returnObjects: true })
    },
    {
        id: 'finance',
        eyebrow: t('architecture.blocks.finance.eyebrow'),
        title: t('architecture.blocks.finance.title'),
        description: t('architecture.blocks.finance.description'),
        icon: HandCoins,
        accent: 'ink',
        points: t('architecture.blocks.finance.points', { returnObjects: true })
    },
    {
        id: 'ecosystem',
        eyebrow: t('architecture.blocks.ecosystem.eyebrow'),
        title: t('architecture.blocks.ecosystem.title'),
        description: t('architecture.blocks.ecosystem.description'),
        icon: Building2,
        accent: 'clay',
        points: t('architecture.blocks.ecosystem.points', { returnObjects: true })
    }
]

export const getWebsiteSpotlights = (t: (key: string) => string): WebsiteSpotlight[] => [
    {
        id: 'offline',
        eyebrow: t('modules.spotlights.offline.eyebrow'),
        title: t('modules.spotlights.offline.title'),
        description: t('modules.spotlights.offline.description'),
        icon: Globe2
    },
    {
        id: 'exchange',
        eyebrow: t('modules.spotlights.exchange.eyebrow'),
        title: t('modules.spotlights.exchange.title'),
        description: t('modules.spotlights.exchange.description'),
        icon: ArrowRightLeft
    },
    {
        id: 'workspace',
        eyebrow: t('modules.spotlights.workspace.eyebrow'),
        title: t('modules.spotlights.workspace.title'),
        description: t('modules.spotlights.workspace.description'),
        icon: ShieldCheck
    },
    {
        id: 'service',
        eyebrow: t('modules.spotlights.service.eyebrow'),
        title: t('modules.spotlights.service.title'),
        description: t('modules.spotlights.service.description'),
        icon: PlaneTakeoff
    },
    {
        id: 'people',
        eyebrow: t('modules.spotlights.people.eyebrow'),
        title: t('modules.spotlights.people.title'),
        description: t('modules.spotlights.people.description'),
        icon: BriefcaseBusiness
    },
    {
        id: 'marketplace',
        eyebrow: t('modules.spotlights.marketplace.eyebrow'),
        title: t('modules.spotlights.marketplace.title'),
        description: t('modules.spotlights.marketplace.description'),
        icon: MessageSquareShare
    }
]

export const getWebsiteWorkflowSteps = (t: (key: string, options?: any) => any): WebsiteWorkflowStep[] => [
    {
        step: '01',
        title: t('workflow.steps.capture.title'),
        description: t('workflow.steps.capture.description'),
        outcome: t('workflow.steps.capture.outcome'),
        points: t('workflow.steps.capture.points', { returnObjects: true })
    },
    {
        step: '02',
        title: t('workflow.steps.synchronize.title'),
        description: t('workflow.steps.synchronize.description'),
        outcome: t('workflow.steps.synchronize.outcome'),
        points: t('workflow.steps.synchronize.points', { returnObjects: true })
    },
    {
        step: '03',
        title: t('workflow.steps.insights.title'),
        description: t('workflow.steps.insights.description'),
        outcome: t('workflow.steps.insights.outcome'),
        points: t('workflow.steps.insights.points', { returnObjects: true })
    }
]

export const getWebsiteTestimonials = (t: (key: string) => string): WebsiteTestimonial[] => [
    {
        id: 'retail',
        quote: t('testimonials.items.retail.quote'),
        role: t('testimonials.items.retail.role'),
        company: t('testimonials.items.retail.company')
    },
    {
        id: 'wholesale',
        quote: t('testimonials.items.wholesale.quote'),
        role: t('testimonials.items.wholesale.role'),
        company: t('testimonials.items.wholesale.company')
    },
    {
        id: 'travel',
        quote: t('testimonials.items.travel.quote'),
        role: t('testimonials.items.travel.role'),
        company: t('testimonials.items.travel.company')
    }
]

export const getWebsitePricingPlans = (t: (key: string, options?: any) => any): WebsitePricingPlan[] => [
    {
        id: 'commerce',
        name: t('pricing.plans.commerce.name'),
        priceLabel: t('pricing.plans.commerce.priceLabel'),
        annualPriceLabel: t('pricing.plans.commerce.annualPriceLabel'),
        annualSaving: t('pricing.plans.commerce.annualSaving'),
        description: t('pricing.plans.commerce.description'),
        features: t('pricing.plans.commerce.features', { returnObjects: true }),
        cta: t('pricing.plans.commerce.cta')
    },
    {
        id: 'operations',
        name: t('pricing.plans.operations.name'),
        priceLabel: t('pricing.plans.operations.priceLabel'),
        annualPriceLabel: t('pricing.plans.operations.annualPriceLabel'),
        annualSaving: t('pricing.plans.operations.annualSaving'),
        description: t('pricing.plans.operations.description'),
        highlight: true,
        features: t('pricing.plans.operations.features', { returnObjects: true }),
        tooltips: t('pricing.plans.operations.tooltips', { returnObjects: true }),
        cta: t('pricing.plans.operations.cta')
    },
    {
        id: 'enterprise',
        name: t('pricing.plans.enterprise.name'),
        priceLabel: t('pricing.plans.enterprise.priceLabel'),
        annualPriceLabel: t('pricing.plans.enterprise.annualPriceLabel'),
        annualSaving: t('pricing.plans.enterprise.annualSaving'),
        description: t('pricing.plans.enterprise.description'),
        features: t('pricing.plans.enterprise.features', { returnObjects: true }),
        tooltips: t('pricing.plans.enterprise.tooltips', { returnObjects: true }),
        cta: t('pricing.plans.enterprise.cta')
    }
]

export const getWebsiteProofStrip = (t: (key: string, options?: any) => any): string[] => t('proofStrip', { returnObjects: true })

export const getWebsiteDesignSignals = (t: (key: string) => string) => [
    {
        id: 'workflow',
        label: t('hero.designSignals.workflow.label'),
        value: t('hero.designSignals.workflow.value'),
        icon: Blocks
    },
    {
        id: 'localization',
        label: t('hero.designSignals.localization.label'),
        value: t('hero.designSignals.localization.value'),
        icon: Languages
    },
    {
        id: 'output',
        label: t('hero.designSignals.output.label'),
        value: t('hero.designSignals.output.value'),
        icon: Receipt
    },
    {
        id: 'insights',
        label: t('hero.designSignals.insights.label'),
        value: t('hero.designSignals.insights.value'),
        icon: BarChart3
    }
]
