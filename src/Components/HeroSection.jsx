import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-blue-950 px-20 flex items-center justify-start text-white p-4 "
    >
      <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div> {/* Dark overlay */}

      <div className="container mx-auto z-10 px-4 ">
        <p className="text-blue-300 text-xl font-semibold mb-4">#EVPoweringIndia</p>
        <h1 className="text-7xl font-bold leading-tight mb-6">
          Revolutionising the Future <br /> of Sustainable Mobility
        </h1>
        <p className="text-2xl font-bold max-w-2xl mb-8 text-gray-300">
          Financing Electric Vehicles for First, Mid and Last Mile Mobility
        </p>
      </div>
    </section>
  );
};

export default HeroSection;