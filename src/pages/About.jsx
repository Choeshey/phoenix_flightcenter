import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">About Us</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Phoenix Flight Center was founded with a passion for aviation and a commitment to excellence in flight training and aircraft services. Our journey began with a simple mission: to make aviation accessible to everyone who dreams of flying.
          </p>
          <p className="text-gray-600">
            Over the years, we've grown into a premier flight training center, serving pilots of all experience levels with top-notch instruction and well-maintained aircraft.
          </p>
        </div>
        
        <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4">
            Our team consists of experienced pilots and instructors who are dedicated to sharing their knowledge and passion for aviation. Each member brings unique expertise and a commitment to safety and excellence.
          </p>
          <p className="text-gray-600">
            We believe in personalized instruction and take pride in helping our students achieve their aviation goals, whether it's earning a private pilot license or advancing to commercial ratings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
