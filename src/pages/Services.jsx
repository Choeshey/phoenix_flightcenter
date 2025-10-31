import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Our Services</h1>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Flight Training</h2>
          <p className="text-gray-600">Comprehensive flight training programs for all levels, from beginners to advanced pilots. Our certified instructors provide personalized training to help you achieve your aviation goals.</p>
        </div>
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Aircraft Rental</h2>
          <p className="text-gray-600">Well-maintained fleet of aircraft available for rent. Whether you need a plane for training, business, or leisure, we have options to suit your needs.</p>
        </div>
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Aircraft Maintenance</h2>
          <p className="text-gray-600">FAA-certified maintenance services to keep your aircraft in top condition. Our experienced technicians provide comprehensive maintenance and repair services.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
