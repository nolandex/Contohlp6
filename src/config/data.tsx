import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi"
import { BsBarChartFill, BsFillStarFill } from "react-icons/bs"
import { PiGlobeFill } from "react-icons/pi"

import type { IBenefit, IFAQ, IMenuItem, IPricing, ISocials, IStats, ITestimonial } from "@/types"

// Site Details
export const siteConfig = {
  siteName: "Finwise",
  siteUrl: "https://finwise-omega.vercel.app/",
  metadata: {
    title: "Finwise - Next.js and Tailwind CSS Landing Page Template",
    description: "Finwise empowers businesses with cutting-edge technology solutions to drive success and efficiency.",
  },
  language: "en-us",
  locale: "en-US",
  siteLogo: `${process.env.BASE_PATH || ""}/images/logo.png`,
  googleAnalyticsId: "",
}

// Menu Items
export const menuItems: IMenuItem[] = [
  {
    text: "Features",
    url: "#features",
  },
  {
    text: "Pricing",
    url: "#pricing",
  },
  {
    text: "Testimonials",
    url: "#testimonials",
  },
]

// Hero Section
export const heroConfig = {
  heading: "Smart, Secure, Simple Financial Management",
  subheading:
    "From effortless budgeting to real-time investment insights, Finwise puts you in control of your money like never before",
  centerImageSrc: "/images/hero-mockup.webp",
}

// Benefits/Features Section
export const benefitsConfig: IBenefit[] = [
  {
    title: "Smart Budgeting",
    description:
      "Take the guesswork out of managing your money. Our AI-powered budgeting tool adapts to your lifestyle and helps you stay on track.",
    bullets: [
      {
        title: "Intelligent Categorization",
        description: "Automatically sorts your transactions for crystal-clear insights.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Customizable Goals",
        description: "Set and track financial objectives that matter to you.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Predictive Analysis",
        description: "Get ahead of your finances with spending forecasts and alerts.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
  {
    title: "Seamless Investing",
    description:
      "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
    bullets: [
      {
        title: "Micro-Investing",
        description: "Begin with as little as $1 and watch your money grow.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Expert Portfolios",
        description: "Choose from investment strategies tailored to your risk tolerance.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Real-Time Performance",
        description: "Track your investments with easy-to-understand metrics and visuals.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.webp",
  },
  {
    title: "Bank-Grade Security",
    description:
      "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
    bullets: [
      {
        title: "Military-Grade Encryption",
        description: "Your information is safeguarded with the highest level of encryption.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Biometric Authentication",
        description: "Access your account securely with fingerprint or facial recognition.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Real-Time Fraud Detection",
        description: "Our system constantly monitors for suspicious activity to keep your money safe.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.webp",
  },
]

// Pricing Section
export const pricingConfig: IPricing[] = [
  {
    name: "Starter",
    price: 29,
    features: ["Basic cloud integration", "Up to 5 team members", "20GB storage", "Email support"],
  },
  {
    name: "Pro",
    price: 99,
    features: [
      "Advanced cloud integration",
      "Up to 20 team members",
      "100GB storage",
      "Priority email & phone support",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Full cloud integration",
      "Unlimited team members",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom solutions",
      "On-site training",
    ],
  },
]

// Testimonials Section
export const testimonialsConfig: ITestimonial[] = [
  {
    name: "John Smith",
    role: "CEO at Company",
    message: `${siteConfig.siteName}'s AI-driven insights have transformed how we approach financial planning for our clients. It's an invaluable resource in the modern financial landscape.`,
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "Jane Doe",
    role: "CTO at Startup",
    message: `As a CTO, I'm impressed by ${siteConfig.siteName}'s robust security measures and seamless integrations. It's rare to find an app that balances user-friendliness with such advanced technology.`,
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Emily Johnson",
    role: "Product Manager",
    message: `${siteConfig.siteName} is revolutionizing personal finance management. Its intuitive design and powerful features make it an indispensable tool for anyone serious about financial growth.`,
    avatar: "/images/testimonial-3.webp",
  },
]

// FAQ Section
export const faqConfig: IFAQ[] = [
  {
    question: `Is ${siteConfig.siteName} secure?`,
    answer:
      "Absolutely. We use bank-level encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.",
  },
  {
    question: `Can I use ${siteConfig.siteName} on multiple devices?`,
    answer:
      "Absolutely! Your Finwise account syncs seamlessly across all your devices - smartphone, tablet, and computer.",
  },
  {
    question: "Can I connect all my bank accounts?",
    answer: `Yes! ${siteConfig.siteName} supports connections with over 10,000 financial institutions worldwide. Simply log in through our secure portal to link your accounts.`,
  },
  {
    question: "Do I need any financial expertise to use the investing features?",
    answer:
      "Not at all! Our expert-curated portfolios and educational resources make investing accessible to everyone, regardless of experience level.",
  },
  {
    question: "What if I need help using the app?",
    answer:
      "Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of Finwise.",
  },
]

// Stats Section
export const statsConfig: IStats[] = [
  {
    title: "20M+",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description: "Transactions processed securely every day, providing real-time insights.",
  },
  {
    title: "5.0",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Star rating, consistently maintained across app stores.",
  },
  {
    title: "200+ ",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description: "Financial Institutions, seamlessly integrated, so you can manage all accounts.",
  },
]

// CTA Section
export const ctaConfig = {
  heading: "Join Over 1 Million Users To Transform Your Finances",
  subheading:
    "Your journey to financial freedom starts here. Download Finwise today and take the first step towards a brighter financial future!",
  appStoreUrl: "#",
  googlePlayUrl: "#",
}

// Footer Section
export const footerConfig: {
  subheading: string
  quickLinks: IMenuItem[]
  email: string
  telephone: string
  socials: ISocials
} = {
  subheading: "Empowering businesses with cutting-edge financial technology solutions.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
  ],
  email: "address@yoursite.com",
  telephone: "+1 (123) 456-7890",
  socials: {
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
  },
}
