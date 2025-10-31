import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo2 from "../assets/logo2.png";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="min-h-screen px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#faeade] to-[#faeade]  text-black">
      {/* Header with Logo */}
      <header className="py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-block transition-transform hover:scale-105">
            <img 
              src={logo2} 
              alt="Phoenix Flight Center" 
              className="h-16 w-auto md:h-20"
            />
          </Link>
        </div>
      </header>
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center text-amber-400">Our Services</h1>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">Flight Training</h2>
            <p className="text-black mb-4">Comprehensive flight training programs for all levels, from beginners to advanced pilots. Our certified instructors provide personalized training to help you achieve your aviation goals.</p>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>Private Pilot License (PPL)</li>
              <li>Commercial Pilot License (CPL)</li>
              <li>Instrument Rating (IR)</li>
              <li>Multi-Engine Rating</li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">Aircraft Rental</h2>
            <p className="text-black">Well-maintained fleet of aircraft available for rent. Whether you need a plane for training, business, or leisure, we have options to suit your needs.</p>
          </div>

          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">Aircraft Maintenance</h2>
            <p className="text-black">FAA-certified maintenance services to keep your aircraft in top condition. Our experienced technicians provide comprehensive maintenance and repair services.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services
