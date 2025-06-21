import data from '@/config/data.json';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const { tiers } = data;

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
        <p className="text-gray-600 mt-2">Choose the plan that's right for you.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="border p-8 rounded-lg shadow-lg bg-white flex flex-col">
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="my-4">
                <span className="text-4xl font-extrabold">
                  {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                </span>
                {typeof tier.price === 'number' && <span className="text-gray-500">/mo</span>}
              </div>
              <ul className="space-y-3 text-left flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FiCheck className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
