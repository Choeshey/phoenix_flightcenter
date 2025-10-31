import { useEffect } from 'react';
import paviation1 from "../assets/paviation1.jpg"
import paviation2 from "../assets/paviation2.jpg"
import paviation3 from "../assets/paviation3.jpg"
import {Link} from "react-router-dom";
import logo2 from "../assets/logo2.png";


const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample packages items - replace with your actual packages data
  const packagesItems = [
    {
      id: 1,
      title: 'Private Pilot Training',
      description: 'Helping students achieve their dream of becoming private pilots with our comprehensive training program.',
      image: paviation1,
    },
    {
      id: 2,
      title: 'Commercial Pilot Program',
      description: 'Advanced training for pilots pursuing commercial aviation careers with our state-of-the-art facilities.',
        image: paviation2,
    },
    {
      id: 3,
      title: 'Aircraft Fleet',
      description: 'Our well-maintained fleet of training and rental aircraft, ready for your next flight.',
        image: paviation3,
    },
  ];

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
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">Our Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packagesItems.map((item) => (
          <div key={item.id} className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="h-48 bg-gray-700 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
          </div>
  );
};

export default Packages;
