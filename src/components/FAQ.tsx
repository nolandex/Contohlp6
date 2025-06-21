import data from '@/config/data.json';

const FAQ = () => {
    const { faqs, siteDetails } = data;
    const siteName = siteDetails.siteName;

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
                <div className="mt-10 space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="p-6 border rounded-lg bg-white shadow-sm cursor-pointer group">
                            <summary className="font-semibold text-lg list-none flex justify-between items-center">
                                {faq.question.replace(/\$\{siteDetails\.siteName\}/g, siteName)}
                                <span className="ml-4 text-blue-500 transform transition-transform duration-200 group-open:rotate-45">+</span>
                            </summary>
                            <p className="mt-4 text-gray-600">
                                {faq.answer.replace(/\$\{siteDetails\.siteName\}/g, siteName)}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
