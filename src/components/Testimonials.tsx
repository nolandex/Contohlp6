import Image from 'next/image';
import data from '@/config/data.json';

const Testimonials = () => {
  const { testimonials, siteDetails } = data;
  const siteName = siteDetails.siteName;

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">Real stories from real customers.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-8 border rounded-lg shadow-lg bg-white">
              <Image
                src={testimonial.avatar}
                alt={`Avatar of ${testimonial.name}`}
                width={80}
                height={80}
                className="rounded-full mx-auto"
              />
              <p className="mt-6 italic text-gray-700">
                "{testimonial.message.replace(/Bisnovo/g, siteName)}"
              </p>
              <p className="mt-4 font-bold text-lg">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
