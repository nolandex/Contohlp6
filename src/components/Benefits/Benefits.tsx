import Image from 'next/image';
import data from '@/config/data.json';
import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

// "Kamus" untuk menerjemahkan teks dari JSON menjadi komponen Ikon
const iconMap = {
    FiBarChart2: <FiBarChart2 size={26} className="text-blue-500" />,
    FiTarget: <FiTarget size={26} className="text-blue-500" />,
    FiTrendingUp: <FiTrendingUp size={26} className="text-blue-500" />,
    FiDollarSign: <FiDollarSign size={26} className="text-blue-500" />,
    FiBriefcase: <FiBriefcase size={26} className="text-blue-500" />,
    FiPieChart: <FiPieChart size={26} className="text-blue-500" />,
    FiLock: <FiLock size={26} className="text-blue-500" />,
    FiUser: <FiUser size={26} className="text-blue-500" />,
    FiShield: <FiShield size={26} className="text-blue-500" />
};

const Benefits = () => {
    const { benefits } = data;

    return (
        <section id="features" className="py-20 space-y-20">
            {benefits.map((benefit, index) => (
                <div key={benefit.title} className={`container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
                    <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                        <h2 className="text-3xl font-bold mb-4">{benefit.title}</h2>
                        <p className="text-gray-600 mb-6">{benefit.description}</p>
                        <ul className="space-y-4">
                            {benefit.bullets.map((bullet) => (
                                <li key={bullet.title} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                      {iconMap[bullet.icon as keyof typeof iconMap]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{bullet.title}</h4>
                                        <p className="text-gray-600">{bullet.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
                        <Image src={benefit.imageSrc} alt={benefit.title} width={500} height={500} className="rounded-lg shadow-xl mx-auto" />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Benefits;
