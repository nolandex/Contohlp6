// /config/data.ts

import { IBenefit, IFaq, IFooterDetails, IHeroDetails, IMenuItem, IPricing, ISiteDetails, IStat, ITestimonial, ICtaDetails } from "@/types";
import { FaBolt, FaChartLine, FaShieldAlt } from 'react-icons/fa'; // Contoh penggunaan react-icons

// --- Detail Situs ---
export const siteDetails: ISiteDetails = {
    siteName: "FinWise",
};

// --- Item Menu Navigasi ---
export const menuItems: IMenuItem[] = [
    { text: "Features", url: "#features" },
    { text: "Pricing", url: "#pricing" },
    { text: "Testimonials", url: "#testimonials" },
    { text: "FAQ", url: "#faq" },
];

// --- Detail Hero Section ---
export const heroDetails: IHeroDetails = {
    heading: "Manage Your Finances with Unmatched Ease and Security",
    subheading: "FinWise offers a seamless, intuitive, and powerful platform to take control of your financial life. All in one place.",
    centerImageSrc: "/path/to/your/app-mockup.png", // Ganti dengan path gambar Anda
};

// --- Detail Keunggulan (Benefits) ---
export const benefits: IBenefit[] = [
    {
        title: "Track Your Spending Effortlessly",
        description: "Connect all your accounts and see where your money is going. Our smart categorization does the heavy lifting for you.",
        imageSrc: "/path/to/your/benefit-image-1.png", // Ganti dengan path gambar Anda
        bullets: [
            {
                title: "Smart Categorization",
                description: "Automatically sort your transactions into intuitive categories.",
                icon: <FaBolt />, // Contoh ikon
            },
            {
                title: "Custom Budgets",
                description: "Create and stick to budgets that work for your lifestyle.",
                icon: <FaChartLine />, // Contoh ikon
            },
            {
                title: "Security First",
                description: "Your data is encrypted and protected with bank-level security.",
                icon: <FaShieldAlt />, // Contoh ikon
            },
        ],
    },
    {
        title: "Invest for Your Future, Simply",
        description: "Whether you're a beginner or a seasoned pro, our tools make it easy to grow your wealth.",
        imageSrc: "/path/to/your/benefit-image-2.png", // Ganti dengan path gambar Anda
        bullets: [
            {
                title: "Goal-Based Investing",
                description: "Set financial goals and we'll help you create a plan to reach them.",
                icon: <FaChartLine />, // Contoh ikon
            },
            {
                title: "Diverse Portfolios",
                description: "Access a wide range of investment options, from stocks to crypto.",
                icon: <FaBolt />, // Contoh ikon
            },
            {
                title: "Expert Insights",
                description: "Get market analysis and tips to make informed decisions.",
                icon: <FaShieldAlt />, // Contoh ikon
            },
        ],
    },
];

// --- Statistik ---
export const stats: IStat[] = [
    {
        icon: <FaBolt />, // Contoh ikon
        title: "Active Users",
        description: "Over 5 million users trust FinWise to manage their finances every day.",
    },
    {
        icon: <FaChartLine />, // Contoh ikon
        title: "Assets Managed",
        description: "More than $10 billion in assets are tracked and managed on our platform.",
    },
    {
        icon: <FaShieldAlt />, // Contoh ikon
        title: "Secure Transactions",
        description: "We process thousands of secure transactions every second without a hitch.",
    },
];

// --- Detail Harga (Pricing) ---
export const tiers: IPricing[] = [
    {
        name: "Basic",
        price: 0,
        features: ["Connect 1 Bank Account", "Basic Budgeting", "Standard Reporting", "Email Support"],
    },
    {
        name: "Pro",
        price: 9.99,
        features: ["Connect Unlimited Accounts", "Advanced Budgeting & Insights", "Investment Tracking", "Priority Support"],
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        features: ["Everything in Pro", "Dedicated Account Manager", "Custom Integrations", "Team Access"],
    },
];

// --- Testimoni ---
export const testimonials: ITestimonial[] = [
    {
        name: "Sarah J.",
        role: "Freelance Designer",
        message: "FinWise has completely changed how I manage my money. It's so intuitive and powerful. I finally feel in control of my finances!",
        avatar: "/path/to/avatar1.png", // Ganti dengan path gambar Anda
    },
    {
        name: "Michael B.",
        role: "Tech Entrepreneur",
        message: "The investment tracking feature is a game-changer. I can see my entire portfolio in one place. Highly recommended for any serious investor.",
        avatar: "/path/to/avatar2.png", // Ganti dengan path gambar Anda
    },
    {
        name: "Emily R.",
        role: "Small Business Owner",
        message: "As a business owner, tracking expenses is crucial. FinWise automates everything and saves me hours of work each month.",
        avatar: "/path/to/avatar3.png", // Ganti dengan path gambar Anda
    },
];

// --- FAQ ---
export const faqs: IFaq[] = [
    {
        question: "Is my financial data secure with FinWise?",
        answer: "Absolutely. We use bank-level 256-bit SSL encryption and follow industry best practices to ensure your data is always safe and secure. We never sell your data.",
    },
    {
        question: "Can I connect all my bank accounts?",
        answer: "Yes, our Pro plan allows you to connect an unlimited number of accounts from thousands of financial institutions worldwide.",
    },
    {
        question: "How do I cancel my subscription?",
        answer: "You can easily cancel your subscription at any time from your account settings. There are no hidden fees or long-term contracts.",
    },
];

// --- Detail CTA (Call to Action) ---
export const ctaDetails: ICtaDetails = {
    heading: "Ready to Take Control? Get Started with FinWise Today!",
    subheading: "Download the app and join millions of users who are building a better financial future.",
    appStoreUrl: "https://apps.apple.com",
    googlePlayUrl: "https://play.google.com",
};

// --- Detail Footer ---
export const footerDetails: IFooterDetails = {
    subheading: "The smartest way to manage your personal finances.",
    quickLinks: [
        { text: "Home", url: "/" },
        { text: "Features", url: "#features" },
        { text: "Pricing", url: "#pricing" },
        { text: "Privacy Policy", url: "/privacy" },
    ],
    email: "support@finwise.com",
    telephone: "+1 (555) 123-4567",
    socials: {
        twitter: "https://twitter.com/finwise",
        linkedin: "https://linkedin.com/company/finwise",
        facebook: "https://facebook.com/finwise",
    },
};

// Pastikan Anda juga membuat file `types.ts` untuk mendefinisikan interface yang digunakan di atas.
// Contoh file types.ts:
/*
// /types/index.ts
import { ReactElement } from "react";

export interface ISiteDetails {
    siteName: string;
}

export interface IMenuItem {
    text: string;
    url: string;
}

export interface IHeroDetails {
    heading: string;
    subheading: string;
    centerImageSrc: string;
}

export interface IBenefitBullet {
    title: string;
    description: string;
    icon: ReactElement;
}

export interface IBenefit {
    title: string;
    description: string;
    imageSrc: string;
    bullets: IBenefitBullet[];
}

export interface IStat {
    icon: ReactElement;
    title: string;
    description: string;
}

export interface IPricing {
    name: string;
    price: number | string;
    features: string[];
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    avatar: string;
}

export interface IFaq {
    question: string;
    answer: string;
}

export interface ICtaDetails {
    heading: string;
    subheading: string;
    appStoreUrl: string;
    googlePlayUrl: string;
}

export interface IFooterDetails {
    subheading: string;
    quickLinks: { text: string; url: string }[];
    email?: string;
    telephone?: string;
    socials?: {
        [key: string]: string;
    };
}
*/
