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
    value: string
    label: string
}

export interface WebsiteHeroCommand {
    label: string
    value: string
    note: string
    icon: LucideIcon
}

export interface WebsiteArchitectureBlock {
    eyebrow: string
    title: string
    description: string
    icon: LucideIcon
    accent: 'teal' | 'clay' | 'ink' | 'gold'
    points: string[]
}

export interface WebsiteSpotlight {
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
    quote: string
    role: string
    company: string
}

export interface WebsitePricingPlan {
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

export const websiteNavItems: WebsiteNavItem[] = [
    { id: 'architecture', label: 'Architecture' },
    { id: 'modules', label: 'Modules' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pricing', label: 'Pricing' }
]

export const websiteHeroMetrics: WebsiteHeroMetric[] = [
    { value: '30+', label: 'Operational Modules' },
    { value: '04', label: 'Operating Currencies' },
    { value: '03', label: 'Interface Languages' },
    { value: '01', label: 'Shared Workspace' }
]

export const websiteHeroCommands: WebsiteHeroCommand[] = [
    {
        label: 'Frontline',
        value: 'POS & KDS',
        note: 'Streamline checkout and kitchen workflows',
        icon: CreditCard
    },
    {
        label: 'Stock',
        value: 'Inventory Management',
        note: 'Control catalogs and track stock movement',
        icon: Warehouse
    },
    {
        label: 'Finance',
        value: 'Ledger & Payments',
        note: 'Manage budgets and financial settlements',
        icon: Wallet
    },
    {
        label: 'Demand',
        value: 'CRM & Marketplace',
        note: 'Oversee orders and digital storefronts',
        icon: Store
    },
    {
        label: 'Service',
        value: 'Travel Agency',
        note: 'Handle tours and manage commissions',
        icon: PlaneTakeoff
    },
    {
        label: 'People',
        value: 'HR & Workspace',
        note: 'Administer teams and configure access',
        icon: UsersRound
    }
]

export const websiteArchitectureBlocks: WebsiteArchitectureBlock[] = [
    {
        eyebrow: 'Commerce Engine',
        title: 'Unified Transaction Processing',
        description: 'Consolidate sales operations, kitchen displays, and invoicing into a single seamless platform without data silos.',
        icon: CreditCard,
        accent: 'teal',
        points: ['Point of Sale Operations', 'Kitchen Display Systems', 'Sales & Return Tracking', 'Automated Invoicing']
    },
    {
        eyebrow: 'Inventory Core',
        title: 'Intelligent Inventory Oversight',
        description: 'Integrate product catalogs and stock adjustments directly into your main operating workflow for real-time accuracy.',
        icon: PackageSearch,
        accent: 'gold',
        points: ['Product Catalog Management', 'Automated Replenishment', 'Cross-Location Transfers', 'Comprehensive Audit Trails']
    },
    {
        eyebrow: 'Finance Layer',
        title: 'Integrated Financial Control',
        description: 'Anchor ledgers, transactions, and budget reviews to underlying operational activities automatically.',
        icon: HandCoins,
        accent: 'ink',
        points: ['Centralized Ledger', 'Loan & Installment Tracking', 'Dynamic Budget Views', 'Secure Invoice Archives']
    },
    {
        eyebrow: 'Demand + Workspace',
        title: 'Comprehensive Ecosystem Management',
        description: 'Orchestrate business partners, digital storefronts, and internal teams seamlessly across a consolidated environment.',
        icon: Building2,
        accent: 'clay',
        points: ['Integrated CRM Hub', 'Digital Marketplace Stores', 'Human Resources Control', 'External Communication Suite']
    }
]

export const websiteSpotlights: WebsiteSpotlight[] = [
    {
        eyebrow: 'Offline-first',
        title: 'Resilient Offline Operations',
        description: 'Maintain uninterrupted frontline workflows with reliable background synchronization upon reconnection.',
        icon: Globe2
    },
    {
        eyebrow: 'Exchange-aware',
        title: 'Native Multi-Currency Support',
        description: 'Conduct and report business seamlessly across USD, EUR, IQD, and TRY natively.',
        icon: ArrowRightLeft
    },
    {
        eyebrow: 'Workspace control',
        title: 'Granular Role Governance',
        description: 'Securely gate modules and separate configurations across your administrative and frontline staff.',
        icon: ShieldCheck
    },
    {
        eyebrow: 'Service modules',
        title: 'Specialized Service Handling',
        description: 'Manage diverse operations like tourist groups and commission logic alongside standard retail modules.',
        icon: PlaneTakeoff
    },
    {
        eyebrow: 'People ops',
        title: 'Embedded Human Resources',
        description: 'Integrate employee records and payroll context seamlessly into the core workspace model.',
        icon: BriefcaseBusiness
    },
    {
        eyebrow: 'Marketplace',
        title: 'Streamlined Digital Commerce',
        description: 'Launch operational storefronts and automatically funnel inquiries into your centralized fulfillment centers.',
        icon: MessageSquareShare
    }
]

export const websiteWorkflowSteps: WebsiteWorkflowStep[] = [
    {
        step: '01',
        title: 'Capture Demand at the Source',
        description: 'Initiate workflows precisely where value is created—be it the checkout counter or your digital storefront.',
        outcome: 'Unified Revenue Streams',
        points: ['Point of Sale Operations', 'Integrated CRM Platforms', 'Digital Marketplace Checkout']
    },
    {
        step: '02',
        title: 'Synchronize Asset Movement',
        description: 'Link inventory updates with financial events ensuring a transparent and accurate view of the business state.',
        outcome: 'Cohesive Operational Alignment',
        points: ['Automated Inventory Adjustments', 'Real-time Ledger Balancing', 'Integrated Finance Tracking']
    },
    {
        step: '03',
        title: 'Derive Actionable Insights',
        description: 'Transform operating data directly into responsive analytics and comprehensive performance reviews.',
        outcome: 'Actionable Business Intelligence',
        points: ['Real-time Margin Analysis', 'Performance Benchmarking', 'Deep Workspace Analytics']
    }
]

export const websiteTestimonials: WebsiteTestimonial[] = [
    {
        quote: 'Atlas united our disparate systems into one seamless operating board. The improvement in team efficiency is remarkable.',
        role: 'Retail Operations Lead',
        company: 'Multi-Branch Store Group'
    },
    {
        quote: 'A truly consolidated workflow that flawlessly replaces multiple fragmented tools for demand management and financial tracking.',
        role: 'Commercial Coordinator',
        company: 'Wholesale Enterprise'
    },
    {
        quote: 'Managing complex operations like commissions and HR records is now completely effortless and perfectly integrated.',
        role: 'Service Business Manager',
        company: 'Travel Operations'
    }
]

export const websitePricingPlans: WebsitePricingPlan[] = [
    {
        name: 'Commerce Core',
        priceLabel: '75,000 IQD',
        annualPriceLabel: '800,000 IQD',
        annualSaving: '11% Saving',
        description: 'Essential point-of-sale and inventory control for growing businesses.',
        features: [
            'Point Of Sale (POS)',
            'Sales History, Returns & Invoice Output (Receipt)',
            'Products, Categories & Storages',
            'Inventory Transfers & Stock Adjustments',
            'Ledger, Payments & Direct Transactions',
            'Real-Time Dashboard Overview',
            'Workspace In-App Notification Inbox & Alerts',
            'Up to 3 Members in the Workspace'
        ],
        cta: 'Choose Commerce Core'
    },
    {
        name: 'Operations Suite',
        priceLabel: '100,000 IQD',
        annualPriceLabel: '1,000,000 IQD',
        annualSaving: '16% Saving',
        description: 'Advanced functionality including CRM, finance, and digital marketplace integrations.',
        highlight: true,
        features: [
            'Everything in Commerce Core',
            'Barcode Scanner & Thermal Printer Support For POS',
            'High Quality A4 Invoice Outputs (PDF) With Multiple Workspace Contacts',
            'Advanced CRM Business Partners, Suppliers & Customers',
            'Orders & Marketplace E-Commerce Inquiry Orders',
            'Marketplace Storefronts, & QR Sharing',
            'Loans & Installments Management With Invoice Output',
            'Stock & Category Discounts Management',
            'Revenue Analytics & Team Performance',
            'Real-Time Multi-Currency Support (IQD د,ع, USD $, EUR €, TRY ₺)',
            'Supports Sales, Accounting & Analytics monthly Excel Export',
            'Supports uploading PDF files to workspace storage (max 100 MB)',
            'Up to 2 Workspace Branches',
            'Up to 10 Members in the Workspace'
        ],
        tooltips: {
            'Real-Time Multi-Currency Support (IQD د,ع, USD $, EUR €, TRY ₺)': 'Exchange Rates Are Updated Automatically Based on your Region in Iraq, But The User Can Always add Exchange Rates Manually',
            'Marketplace Storefronts, & QR Sharing': 'You Can Create a Free Storefront for your Business and Share it with your Customers via QR Code or Link, and They Can Order from you through it, and the Orders Will Come to your Workspace as Inquiries'
        },
        cta: 'Choose Operations Suite'
    },
    {
        name: 'Enterprise Flow',
        priceLabel: '150,000 IQD',
        annualPriceLabel: '1,500,000 IQD',
        annualSaving: '22% Saving',
        description: 'Complete enterprise solution featuring deep HR management and advanced internal protocols.',
        features: [
            'Everything in Operations Suite',
            'Accounting, HR, Expenses & Payroll Context',
            'Workspace Roles & Permission Controls',
            'Access to In-App Whatsapp & Whatsapp Sharing Features',
            'Stock Expiry, Batches and Lot tracking',
            'Supports uploading various file types to workspace storage (max 1 GB)',
            'Up to 5 Workspace Branches',
            'Up to 20 Members in the Workspace'
        ],
        tooltips: {
            'Accounting, HR, Expenses & Payroll Context': 'Advanced Accounting and HR Management With Dividends and Salaries Management, The User Will Be Alerted Upon Overdues Via the In-App Notification System'
        },
        cta: 'Choose Enterprise Flow'
    }
]

export const websiteProofStrip = [
    'POS',
    'KDS',
    'Inventory',
    'Discounts',
    'Ledger',
    'Marketplace',
    'Orders',
    'Partners',
    'Budgets',
    'Currency',
    'HR',
    'Analytics',
    'Communication',
    'Administration'
]

export const websiteDesignSignals = [
    {
        label: 'Workflow',
        value: 'Commerce & Finance Integration',
        icon: Blocks
    },
    {
        label: 'Localization',
        value: 'Multilingual Interface Output',
        icon: Languages
    },
    {
        label: 'Business output',
        value: 'Standardized Invoicing Systems',
        icon: Receipt
    },
    {
        label: 'Insights',
        value: 'Real-Time Analytic Modeling',
        icon: BarChart3
    }
]
