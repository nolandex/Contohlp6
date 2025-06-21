import Link from 'next/link';
import data from '@/config/data.json';

const CTA = () => {
    const { ctaDetails } = data;

    return (
        <section id="cta" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">{ctaDetails.heading}</h2>
                <p className="mt-4 max-w-2xl mx-auto">{ctaDetails.subheading}</p>
                <div className="mt-8 flex justify-center gap-4">
                    <Link href={ctaDetails.appStoreUrl}>
                        <a className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                            Download on the App Store
                        </a>
                    </Link>
                    <Link href={ctaDetails.googlePlayUrl}>
                        <a className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                            Get it on Google Play
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
