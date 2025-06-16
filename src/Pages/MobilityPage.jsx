import React, { useState } from 'react';

// Inline SVG Icons (simplified representations)
const IconWarning = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.487 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM10 11a1 1 0 100-2 1 1 0 000 2zm-1 4a1 1 0 102 0 1 1 0 00-2 0z" clipRule="evenodd" />
  </svg>
);

const IconLightbulb = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a6 6 0 00-6 6c0 2.22 1.22 4.1 3 5.12V16a1 1 0 001 1h4a1 1 0 001-1v-2.88c1.78-1.02 3-2.9 3-5.12a6 6 0 00-6-6zM9 18a1 1 0 002 0h-2z" />
  </svg>
);

const IconScooter = ({ className }) => ( // E-2 Wheelers
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a1 1 0 00-1 1v1h-3a1 1 0 00-1 1v3a1 1 0 001 1h.586l.707.707A1 1 0 007 11h6a1 1 0 00.707-.293l.707-.707H15a1 1 0 001-1V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H10zM5 13a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"/>
  </svg>
);

const IconAutoRickshaw = ({ className }) => ( // E-3 Wheelers
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a1 1 0 00-1 1v1h-3a1 1 0 00-1 1v3a1 1 0 001 1h.586l.707.707A1 1 0 007 11h6a1 1 0 00.707-.293l.707-.707H15a1 1 0 001-1V5a1 1 0 00-1-1h-3V3a1 1 0 00-1-1H10zM5 13a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"/>
  </svg>
);

const IconCar = ({ className }) => ( // Passenger E-4 Wheelers
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M7 2a1 1 0 00-1 1v1h-.5a1.5 1.5 0 00-1.5 1.5v2A1.5 1.5 0 005.5 10H6v4a2 2 0 002 2h4a2 2 0 002-2v-4h.5a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 0014.5 4H14V3a1 1 0 00-1-1H7zM5 14a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"/>
  </svg>
);

const IconTruck = ({ className }) => ( // Zero Emission Trucks / LCV E-4 Wheelers
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a1 1 0 00-1-1H8a1 1 0 00-1 1v2H4a1 1 0 00-1 1v4a1 1 0 001 1h9a1 1 0 001-1v-4a1 1 0 00-1-1h-3V6zM5 13a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"/>
  </svg>
);

const IconBattery = ({ className }) => ( // EV Ancillary loans
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M15 7h-.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zM13 5H5a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2z"/>
  </svg>
);

const IconChartBar = ({ className }) => ( // IoT Features
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm5 2a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0V6a1 1 0 011-1zm-4 4a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm4 0a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

const IconShoppingCart = ({ className }) => ( // Current Market Segments - E-Commerce
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H3zm0 2h12v10H3V3zm4 3a1 1 0 100 2h6a1 1 0 100-2H7z"/>
  </svg>
);

const IconFastForward = ({ className }) => ( // Current Market Segments - Quick Commerce
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M14.707 5.293a1 1 0 00-1.414 0L10 8.586 6.707 5.293a1 1 0 00-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 001.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 000-1.414z"/>
  </svg>
);

const IconTaxi = ({ className }) => ( // Current Market Segments - Cab Operators
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M7 2a1 1 0 00-1 1v1h-.5a1.5 1.5 0 00-1.5 1.5v2A1.5 1.5 0 005.5 10H6v4a2 2 0 002 2h4a2 2 0 002-2v-4h.5a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 0014.5 4H14V3a1 1 0 00-1-1H7zM5 14a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"/>
  </svg>
);

const IconBuildingStore = ({ className }) => ( // Target Market Segments - First/Last Mile Commerce
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 6a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm2 1v6h2V7H5zm4 0v6h2V7H9zm4 0v6h2V7h-2z"/>
  </svg>
);

const IconPlug = ({ className }) => ( // Target Market Segments - Financing Charging Infrastructure
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M7 2a1 1 0 00-1 1v1h-.5a1.5 1.5 0 00-1.5 1.5v2A1.5 1.5 0 005.5 10H6v4a2 2 0 002 2h4a2 2 0 002-2v-4h.5a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 0014.5 4H14V3a1 1 0 00-1-1H7zM9 13a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z"/>
  </svg>
);

const IconChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const IconChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);


const MobilityPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const fleetFaqs = [
    {
      question: "What is Fleet Financing?",
      answer: "Fleet financing provides capital for businesses to acquire multiple vehicles for commercial use, allowing them to expand operations without significant upfront investment. This includes various types of vehicles like E-2Ws, E-3Ws, and E-4Ws."
    },
    {
      question: "Who typically needs Fleet Financing?",
      answer: "Fleet financing is typically needed by fleet owners, logistics companies, e-commerce delivery services, cab operators, and aggregators who require a large number of vehicles for their daily operations and are looking to scale their business efficiently."
    },
    {
      question: "What is the difference between leasing and buying vehicles for a fleet?",
      answer: "Leasing involves making regular payments for the use of vehicles over a set period, with ownership typically remaining with the lessor. Buying, on the other hand, means the business owns the vehicles outright, often requiring a larger initial investment or a loan to purchase the assets."
    },
    {
      question: "What are the benefits of fleet financing?",
      answer: "Benefits include improved cash flow, the ability to acquire a large fleet without draining capital, tax advantages (depending on local regulations), access to the latest vehicle models, and simplified fleet management through integrated solutions."
    },
    {
      question: "How does fleet financing help with cash flow management?",
      answer: "Fleet financing helps by breaking down the large cost of vehicle acquisition into manageable monthly payments. This frees up working capital for other operational needs and allows businesses to maintain healthier cash reserves."
    },
    {
      question: "What are the eligibility criteria for fleet financing?",
      answer: "Eligibility criteria typically include a minimum fleet size (e.g., 50-100 vehicles), a robust business plan, creditworthiness assessment, and sometimes a minimum operating history. Specific criteria may vary by lender."
    },
    {
      question: "What documentation is required to apply for fleet financing?",
      answer: "Required documents often include PAN, Proof of ID/Residence, Promoter ITR, Company financial statements and ITR (if LLP or Pvt Ltd), contracts with companies six months bank statements, and 6-Cheques. Additional documents may be requested based on the financier's policies."
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="bg-blue-900 text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Accelerating Fleet Growth for Owners and Aggregators</h1>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-20 transform -skew-y-3 scale-110"></div>
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0d47a1/ffffff?text=Background')] bg-cover opacity-10"></div>
      </header>

      {/* Challenges & Solutions Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenges Faced By Fleet Owners */}
          <div className="bg-red-50 p-6 md:p-8 rounded-xl shadow-lg border border-red-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-200 rounded-full">
                <IconWarning className="text-red-700 text-3xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-red-800">Challenges Faced By Fleet Owners</h2>
            </div>
            <ul className="list-decimal list-inside text-gray-700 space-y-3 text-lg">
              <li>Loan processing delays that significantly determine scale-up business plans</li>
              <li>Limited loan access where young startups often find it difficult to get financing and scale up quickly</li>
              <li>Tracking vehicle and driver compliance effectively and ensuring regulatory adherence</li>
              <li>Securing the most favorable deal from OEMs and partners</li>
            </ul>
          </div>

          {/* Solutions by SMG Finance Mobility */}
          <div className="bg-green-50 p-6 md:p-8 rounded-xl shadow-lg border border-green-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-green-200 rounded-full">
                <IconLightbulb className="text-green-700 text-3xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-800">Solutions by SMG Finance Mobility</h2>
            </div>
            <ul className="list-decimal list-inside text-gray-700 space-y-3 text-lg">
              <li>Minimal paperwork and processing time helps fleet operators scale faster</li>
              <li>Streamlined disbursement and support for young startups for easy access to loans and financing</li>
              <li>SMG Finance offers IoT installation that allows for vehicle monitoring on fleet activity and monthly inspections</li>
              <li>SMG Finance offers the best deals through multiple OEMs and partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fleet Categories Financed */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Fleet Categories Financed By SMG Finance Mobility</h2>
        <p className="text-center text-gray-600 text-lg mb-10">
          SMG Finance Mobility finances all types of fleet operators, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">
              <IconScooter className="text-blue-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">E-2 Wheelers</h3>
            <p className="text-gray-700">For E-Commerce, QuickCommerce, and concierge apps, enabling fast and efficient deliveries.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">
              <IconAutoRickshaw className="text-blue-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">E-3 Wheelers</h3>
            <p className="text-gray-700">Financing for E-Loaders in both L3 (E-rickshaw) and L5 categories, supporting logistics and cargo transport.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">
              <IconCar className="text-blue-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Passenger E-4 Wheelers</h3>
            <p className="text-gray-700">For cab operators and intra/intercity transportation, offering clean passenger mobility.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">
              <IconTruck className="text-blue-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Zero Emission Trucks</h3>
            <p className="text-gray-700">Financing for ZET used by logistics service providers, promoting electric freight solutions.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">
              <IconBattery className="text-blue-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">EV Ancillary loans</h3>
            <p className="text-gray-700">Supporting battery leasing, charging station infrastructure, and essential EV technologies.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">
              <IconTruck className="text-blue-700 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">LCV E-4 Wheelers</h3>
            <p className="text-gray-700">For logistic providers using light commercial EVs, promoting sustainable logistics operations.</p>
          </div>
        </div>
      </section>

      {/* Operating Model for Fleets */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Operating Model for Fleets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-300 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">IoT Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Real-Time Vehicle Diagnostics</li>
              <li>Driver Performance Insights</li>
              <li>Remote Immobilization Control</li>
              <li>Fleet Utilization Monitoring</li>
              <li>Proactive Health Alerts</li>
              <li>Geo-Fencing Capabilities</li>
              <li>700+ Million Data Points</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-300 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Current Market Segments</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>E-Commerce: Flipkart, Amazon</li>
              <li>Quick Commerce: Zomato, Blinkit, Zepto, Bigbasket, Swiggy Instamart, etc.</li>
              <li>Cab Operators: Evana, Shoffr, Taxi etc.</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-300 shadow-md">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Target Market Segments</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>First, Mid Mile: Beyond E-Commerce and General Commerce</li>
              <li>Last Mile: Beyond E-Commerce Use Case</li>
              <li>Financing Charging Infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

{/* Fleet Products Table */}
<section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
  <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Fleet Products</h2>

  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <h3 className="text-xl font-semibold text-blue-800 p-6 bg-blue-50 border-b border-blue-100">Product Details</h3>
    <table className="min-w-full divide-y divide-blue-100">
      <tbody>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800 w-1/3">Types of Vehicles</td>
          <td className="py-3 px-6 text-gray-700">
            <ul className="list-none space-y-1">
              <li>E-2W - High Speed and Low Speed</li>
              <li>E-3W - L3 and L5</li>
              <li>E-4W - Passenger</li>
              <li>E-4W - Light Commercial Vehicles</li>
              <li>E-Trucks</li>
              <li>Battery Finance</li>
            </ul>
          </td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">No. of Vehicles</td>
          <td className="py-3 px-6 text-gray-700">Minimum 20 vehicles, maximum 1,000 vehicles</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Loan Term</td>
          <td className="py-3 px-6 text-gray-700">24 months to 84 months (depends on the vehicle type)</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Down Payment</td>
          <td className="py-3 px-6 text-gray-700">20%</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">EMI / Interest Rate</td>
          <td className="py-3 px-6 text-blue-700">
            Please write to <a href="mailto:fleet.mobility@smgfinance.in" className="underline">fleet.mobility@smgfinance.in</a> for your requirements and we will assist you with the same.
          </td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Eligibility Criteria</td>
          <td className="py-3 px-6 text-gray-700">Minimum Fleet Size: 50–100 vehicles</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Documents Required</td>
          <td className="py-3 px-6 text-gray-700">
            PAN, Proof of ID/Residence, Promoter ITR, Company financial statements and ITR (if LLP or Pvt Ltd), contracts with companies, six months bank statements, and 6 post-dated cheques
          </td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Processing Fee / Origination Charges</td>
          <td className="py-3 px-6 text-gray-700">2%</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Foreclosure Charges</td>
          <td className="py-3 px-6 text-gray-700">NIL</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Additional Interest on Late Payment of EMI</td>
          <td className="py-3 px-6 text-gray-700">NIL</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Per EMI Bounce Charges</td>
          <td className="py-3 px-6 text-gray-700">₹250</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Legal / Incidental Charges</td>
          <td className="py-3 px-6 text-gray-700">At actuals</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50">
          <td className="py-3 px-6 font-semibold text-gray-800">Advance EMI</td>
          <td className="py-3 px-6 text-gray-700">1 Month</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      {/* Ask Virat: FAQs Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Ask Virat: FAQs</h2>
        <div className="max-w-3xl mx-auto">
          {fleetFaqs.map((faq, index) => (
            <div key={index} className="border border-blue-200 rounded-lg mb-4 shadow-sm">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none bg-blue-50 hover:bg-blue-100 transition-colors duration-200 rounded-lg"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-semibold text-gray-700">{faq.question}</span>
                {openFaq === index ? (
                  <IconChevronDown className="w-6 h-6 text-blue-700" />
                ) : (
                  <IconChevronRight className="w-6 h-6 text-blue-700" />
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

export default MobilityPage;
