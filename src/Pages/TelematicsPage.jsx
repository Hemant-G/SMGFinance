import React, { useState } from "react";

const TelematicsPage = () => {
  const [activeTab, setActiveTab] = useState("Driver/Fleet Performance");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const iotFeaturesTabs = [
    "Driver/Fleet Performance",
    "Vehicle Safety & Security",
    "Collection Efficiency",
    "Vehicle Standards Improvement",
  ];

  const iotFeaturesContent = {
    "Driver/Fleet Performance": [
      "Monitor distance, efficiency, and fleet diagnostics in real-time.",
      "Track driver performance with 40+ data points.",
      "Assess driver income potential.",
    ],
    "Vehicle Safety & Security": [
      "Real-time GPS tracking for vehicle location.",
      "Geofencing capabilities for restricted areas.",
      "Remote immobilization control in case of theft or unauthorized use.",
      "Alerts for unauthorized vehicle movement.",
    ],
    "Collection Efficiency": [
      "Optimize route planning and fuel efficiency.",
      "Automated mileage and trip logging.",
      "Reduced operational costs through efficient fleet management.",
      "Enhanced transparency in payment collections.",
    ],
    "Vehicle Standards Improvement": [
      "Regular diagnostic checks for vehicle health.",
      "Predictive maintenance alerts.",
      "Analysis of vehicle performance data for long-term improvements.",
      "Compliance monitoring for regulatory standards.",
    ],
  };

  const faqs = [
    {
      question: "What is SMG Finance IoT (Telematics)?",
      answer:
        "SMG Finance IoT (Telematics) is a cutting-edge solution designed to enhance vehicle and driver performance for our customers, OEMs, and fleet operators. It equips financed vehicles with telematics devices to monitor safety, efficiency, and overall performance, leveraging over 700 million data points for better vehicle intelligence.",
    },
    {
      question: "What advantages are there in choosing SMG Finance IoT?",
      answer:
        "Choosing SMG Finance IoT offers numerous advantages, including real-time vehicle diagnostics, driver performance insights, remote immobilization control, efficient fleet utilization monitoring, proactive health alerts, and geo-fencing capabilities. These features contribute to increased safety, efficiency, and profitability for vehicle owners and fleet managers.",
    },
    {
      question: "I am a fleet operator, why should I use SMG Finance IoT?",
      answer:
        "As a fleet operator, SMG Finance IoT provides you with comprehensive tools to optimize your fleet operations. You can monitor vehicle safety and security, track driver performance, assess collection efficiency, and improve vehicle standards. This leads to better route planning, reduced operational costs, increased productivity, and enhanced overall fleet management.",
    },
    {
      question: "I am a 3W owner: Why do I need SMG Finance IoT?",
      answer:
        "As a 3W owner, SMG Finance IoT helps you maximize your income potential and ensures your safety. It provides valuable insights into your vehicle's performance, helps optimize your routes, and offers security features like real-time tracking. This technology empowers you to make data-driven decisions to enhance your daily operations and secure your asset.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-80 bg-blue-950 px-20 flex items-center justify-start text-white p-4 ">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div>{" "}
        {/* Dark overlay */}
        <div className="container mx-auto z-10 px-4 ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            EV Telematics - SMGIoT
          </h1>
          <p className="text-2xl font-bold max-w-2xl mb-8 text-gray-300">
            Smart Monitoring with SMGIoT
          </p>
        </div>
      </section>

      {/* Header Section */}
      <header className="bg-white text-blue-900 py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Innovating EVs with Telematics
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            SMG Finance has launched SMG Finance IoT (Telematics) to elevate
            vehicle and driver performance for its customers, OEMs, and fleet
            operators. All financed vehicles are equipped with telematics
            devices, enabling owners of commercial EVs and fleet managers to run
            more efficient fleets and monitor their safety and performance. SMG
            Finance's telematics data, with 700 million data points, is being
            used to build better vehicle intelligence and features for its
            stakeholders and customers.
          </p>
          <button
            className="mt-8 bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 shadow-md"
            onClick={() => (window.location.href = "/get-in-touch")}
          >
            Get In Touch &rarr;
          </button>
        </div>
      </header>

      {/* SMG Finance IoT Features Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          SMG Finance IoT Features
        </h2>
        <p className="text-center text-gray-600 text-lg mb-10">
          Self-owned commercial EV drivers and fleet owners use SMG Finance IoT
          (Telematics) to gain insights in Driver performance with 40+ data
          points
        </p>

        {/* Feature Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {iotFeaturesTabs.map((tab) => (
            <button
              key={tab}
              className={`py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 ${
                activeTab === tab
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature Content and Placeholder Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-blue-50 p-6 md:p-10 rounded-xl shadow-lg border border-blue-100">
          <div className="lg:pr-8 order-2 lg:order-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              {iotFeaturesContent[activeTab]?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Placeholder for illustration */}
            <div className="w-full max-w-sm h-64 bg-blue-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-blue-800 text-xl font-semibold">
                Illustration Placeholder
              </span>
            </div>
          </div>
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

export default TelematicsPage;
