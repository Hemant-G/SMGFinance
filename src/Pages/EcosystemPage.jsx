import React from 'react';

const EcosystemPage = () => {
  // Data for the EV Ecosystem sections
  const evEcosystemData = [
    {
      id: "oems",
      number: "01.",
      title: "OEMs",
      description: "SMG Finance is partnered with over 50 OEMs specializing in first, mid, and last-mile manufacturing. This collaboration is aligned with SMG Finance's core strategy of accelerating market adoption of electric vehicles (EVs) in the commercial mobility segment. Through these partnerships, easy financing solutions are made accessible.",
      imagePlaceholderText: "Illustration Placeholder", // Removed specific illustration text
    },
    {
      id: "battery-swapping",
      number: "02.",
      title: "Battery Swapping / BaaS",
      description: "In the journey toward EV adoption, battery packs are a costly component, accounting for approximately one-third of the total vehicle cost. Additionally, they degrade over time. Facilitating battery maintenance, replacement, and swapping can be a game changer in accelerating EV adoption and reducing operational costs.",
      imagePlaceholderText: "Illustration Placeholder", // Removed specific illustration text
    },
    {
      id: "charging-infrastructure",
      number: "03.",
      title: "Charging Infrastructure",
      description: "India's journey towards transport electrification is being driven primarily by Light Electric Vehicles (LEVs) over the next decade, including two-wheelers, three-wheelers, and light commercial vehicles (LCVs). As these segments gain momentum, the infrastructure supporting them is crucial for widespread EV adoption.",
      imagePlaceholderText: "Illustration Placeholder", // Removed specific illustration text
    },
    {
      id: "zero-emission-trucks",
      number: "04.",
      title: "Zero Emission Trucks",
      description: "Transforming trucking in India is seen as key to deploying Zero Emission Trucks (ZETs) across the country. As the world's fifth-largest economy, India's freight transportation sector is rapidly expanding, with road transport, particularly trucks, carrying approximately 70% of the nation's goods, making ZETs vital for sustainable logistics.",
      imagePlaceholderText: "Illustration Placeholder", // Removed specific illustration text
    },
    {
      id: "emfai",
      number: "05.",
      title: "EMFAI",
      description: "The Electric Mobility Financiers Association of India (EMFAI) is seen as the official professional association representing Indian financial institutions involved in financing electric vehicles and other products and services within the EV ecosystem. EMFAI aims to foster close collaboration and growth within the EV financing sector.",
      imagePlaceholderText: "Illustration Placeholder", // Removed specific illustration text
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
          {/* Header Section */}
          <section
      className="relative h-70 bg-blue-950 px-20 flex items-center justify-start text-white p-4 "
    >
      <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div> {/* Dark overlay */}

      <div className="container mx-auto z-10 px-4 ">
        <h1 className="text-7xl font-bold leading-tight mb-6">
        EV Ecosystem Development
        </h1>
        <p className="text-2xl font-bold max-w-2xl mb-8 text-gray-300">
        Collaborative Together to Build a Future for Sustainable Mobility
        </p>
      </div>
    </section>

      {/* EV Ecosystem Sections */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="space-y-16">
          {evEcosystemData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center bg-white p-6 md:p-10 rounded-xl shadow-lg border border-blue-100 sticky top-22
                ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
                <p className="text-5xl font-extrabold text-blue-500 mb-4 opacity-50">
                  {item.number}
                </p>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">{item.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {item.description}
                  {" "}
                  <a href="#" className="text-blue-700 hover:underline">See More</a>
                </p>
                <button className="bg-blue-800 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
                  Get In Touch &rarr;
                </button>
              </div>
              <div className="lg:w-1/2 flex justify-center items-center">
                {/* Image Placeholder */}
                <div className="w-full max-w-md h-64 bg-blue-200 rounded-lg flex items-center justify-center shadow-inner">
                  <span className="text-blue-800 text-xl font-semibold">{item.imagePlaceholderText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default EcosystemPage;
