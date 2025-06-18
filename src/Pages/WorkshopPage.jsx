import React, { useState } from "react";

const WorkshopPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SMG Finance Workshop?",
      answer:
        "SMG Finance Workshop is a state-of-the-art facility dedicated to extending the lifespan and roadworthiness of commercial EVs financed by SMG Finance. It specializes in refurbishing repossessed EVs and ensuring they are restored to optimal performance for continued use.",
    },
    {
      question: "What type of refurbishment do we do at SMG Finance Workshop?",
      answer:
        "At SMG Finance Workshop, we handle comprehensive electrical, electronic, and mechanical work. This includes refurbishment of critical components such as motors, batteries, controllers, Battery Management Systems (BMS), chargers, suspensions, chassis, wire harnesses, and DC-DC converters. We adhere to the highest standards of operation using the latest equipment and technologies.",
    },
    {
      question:
        "What other refurbishment procedures are conducted at SMG Finance Workshop?",
      answer:
        "In addition to component refurbishment, SMG Finance Workshop also conducts rigorous testing and verification of IoT and Telematics devices to ensure every vehicle is restored to optimal performance and all systems are fully functional.",
    },
    {
      question: "How many SMG Finance Workshops are there in the country?",
      answer:
        "Currently, SMG Finance operates its flagship workshop in Dwarka, New Delhi. We are committed to expanding our facilities to further support EV refurbishment across the country.",
    },
  ];

  const vehicleCheckSteps = [
    {
      step: "Step 01",
      title: "Comprehensive Inspection",
      description: "Faults and defects are identified.",
    },
    {
      step: "Step 02",
      title: "Refurbishment",
      description: "All identified issues are corrected.",
    },
    {
      step: "Step 03",
      title: "Final Inspection",
      description:
        "A quality check is conducted to ensure all defects are rectified.",
    },
    {
      step: "Step 04",
      title: "Finish and Deployment",
      description: "The vehicle is prepared for redeployment on the road.",
    },
  ];

  const advancedSetupItems = [
    "Battery Charging & Discharging Systems",
    "Battery Balancers",
    "Battery Capacity Analysers",
    "Hydraulic Jacks",
    "Battery Quick Testers",
    "Cell Analysers",
    "Nickel Weld Removal Machines",
    "Soldering Stations",
    "Fluke Multimeters",
    "Portable Welding Machines",
    "Cell Internal Resistance Testers",
    "Air Filling Compressors",
    "2-Post Lifting Machines",
    "Power, Pneumatic & Mechanical Tools",
    "Motor Winding Machines",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-80 bg-blue-950 px-20 flex items-center justify-start text-white p-4 ">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div>{" "}
        {/* Dark overlay */}
        <div className="container mx-auto z-10 px-4 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            EV Workshop - SMGshaala
          </h1>
          <p className="text-2xl font-bold max-w-2xl mb-8 text-gray-300">
            Reviving EVs, Driving Sustainability
          </p>
        </div>
      </section>

      {/* Header Section */}
      <header className="bg-white text-blue-900 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4">
            Extending EV Lifespan with SMG Finance Workshop
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Increasing the lifespan of your electric vehicle (EV) has been
            crucial for sustainable mobility, and SMG Finance Workshop, launched
            by SMG Finance, has offered an innovative solution. As part of SMG
            Finance's mission to revolutionise sustainable mobility, SMG Finance
            Workshop has become a state-of-the-art facility dedicated to
            extending the lifespan and roadworthiness of commercial EVs financed
            by SMG Finance - vehicles that might otherwise have been scrapped.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Specializing in refurbishing repossessed EVs, SMG Finance Workshop
            has expertly handled a diverse range of vehicles, including electric
            two-wheelers (E-2W), electric three-wheelers (E-3W), and electric
            four-wheelers (E-4W). The facility has conducted comprehensive
            electrical, electronic, and mechanical work under one roof, adhering
            to the highest industry standards. This ensures that every
            refurbished vehicle meets rigorous quality and performance
            benchmarks, contributing to a more sustainable and circular economy
            in the EV sector.
          </p>
        </div>
      </header>

      {/* Why Choose SMG Finance Workshop Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Why Choose SMG Finance Workshop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-800 text-2xl font-bold">🛠️</span>{" "}
              {/* Placeholder for icon */}
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Comprehensive Refurbishment
            </h3>
            <p className="text-gray-700">
              Expert handling of electrical, electronic, and mechanical work
              under one roof.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-800 text-2xl font-bold">⭐</span>{" "}
              {/* Placeholder for icon */}
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-700">
              Adherence to highest industry standards and rigorous testing for
              optimal performance.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-800 text-2xl font-bold">🌱</span>{" "}
              {/* Placeholder for icon */}
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Sustainable Mobility
            </h3>
            <p className="text-gray-700">
              Contributing to a greener future by extending the life of EVs and
              reducing waste.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process: Vehicle Check Steps */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Our Process: Vehicle Check Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicleCheckSteps.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-5xl font-extrabold text-blue-500 mb-4 opacity-50">
                {item.step}
              </p>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Setup Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Advanced Setup & Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-100">
          {advancedSetupItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm"
            >
              <span className="text-blue-700 text-xl">&bull;</span>{" "}
              {/* Bullet point instead of icon */}
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ask Virat: FAQs Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Ask Virat: FAQs
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-lg mb-4 shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none bg-blue-50 hover:bg-blue-100 transition-colors duration-200 rounded-lg"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-semibold text-blue-800">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <span className="text-blue-700 text-2xl">&darr;</span> // Down arrow character
                ) : (
                  <span className="text-blue-700 text-2xl">&rarr;</span> // Right arrow character
                )}
              </button>
              {openFaq === index && (
                <div className="p-6 bg-white text-gray-700 border-t border-blue-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default WorkshopPage;
