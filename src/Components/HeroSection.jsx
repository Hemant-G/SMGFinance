import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-130 sm:h-screen bg-blue-950 px-4 sm:px-8 md:px-20 flex items-center justify-start text-white py-4">
      <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div> {/* Dark overlay */}

      <div className="container mx-auto z-10 px-2 sm:px-4 text-center sm:text-left">
        <p className="text-blue-300 text-lg sm:text-xl font-semibold mb-2 sm:mb-4">#EVPoweringIndia</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
          Revolutionising the Future <br /> of Sustainable Mobility
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-2xl mb-8 text-gray-300 mx-auto sm:mx-0">
          Financing Electric Vehicles for First, Mid and Last Mile Mobility
        </p>
      </div>
    </section>
  );
};

export default HeroSection;