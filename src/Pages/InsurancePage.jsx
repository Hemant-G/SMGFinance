import React, { useState } from 'react';

// Removed all inline SVG Icons as requested.

const InsurancePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [openWhyChoose, setOpenWhyChoose] = useState(null);


  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleWhyChoose = (index) => {
    setOpenWhyChoose(openWhyChoose === index ? null : index);
  };


  const whyChooseSMGFinance = [
    {
      title: "100% Digital Experience",
      description: "Enjoy a completely paperless and seamless digital process from application to policy issuance. No more waiting in long queues or dealing with cumbersome paperwork."
    },
    {
      title: "Wide Range of Rates & Plans",
      description: "Access a diverse selection of insurance plans and competitive rates from leading insurers, ensuring you find the perfect coverage that fits your needs and budget."
    },
    {
      title: "Single Window for Claim Processing & Settlement",
      description: "Benefit from a simplified and efficient claim process. Our single-window approach ensures quick processing and hassle-free settlement, reducing your stress during difficult times."
    },
    {
      title: "Effortless Renewals",
      description: "Renew your policies with ease through our intuitive online platform. Get timely reminders and complete your renewal process in just a few clicks, ensuring continuous coverage without interruption."
    },
  ];

  const faqs = [
    {
      question: "What is SMG Finance Insure?",
      answer: "SMG Finance Insure is the brokering subsidiary of SMG Finance, offering tailored vehicle and credit life insurance solutions to SMG Finance customers. We collaborate with leading insurers to provide the best policies."
    },
    {
      question: "What is speciality of SMG Finance Insure?",
      answer: "Our specialty lies in offering comprehensive, tech-based real-time insurance issuance solutions, ensuring a seamless digital experience. We also offer policies tailored to meet specific customer needs, whether individual or fleet owners."
    },
    {
      question: "In what types of insurance is SMG Finance Insure involved?",
      answer: "SMG Finance Insure is primarily involved in Motor Vehicle Insurance and Credit Life Insurance, with policies designed to provide extensive coverage and financial security."
    },
    {
      question: "How is SMG Finance Insure connected to the SMG Finance Group?",
      answer: "SMG Finance Insure is the brokering subsidiary of SMG Finance, extending our commitment to financial solutions by offering integrated insurance products that complement our vehicle loan services."
    },
    {
      question: "How can I obtain insurance from SMG Finance Insure?",
      answer: "You can obtain insurance through our approved dealerships and OEM partners, or by contacting our team directly at fleet.mobility@smgfinance.in or helpline number xxxx. We aim for same-day policy issuance."
    },
    {
      question: "What should I do for renewal of the policies?",
      answer: "Policy renewals with SMG Finance Insure are effortless. You will receive timely reminders, and you can complete the renewal process through our digital platform or by contacting our support team for assistance."
    },
    {
      question: "How can I file a claim?",
      answer: "To file a claim, you can reach out to our claims support team via email at xxxx@smgfinance.in or call our helpline at xxxx. Our single-window process aims for quick processing and settlement."
    },
    {
      question: "How can I reach out to you?",
      answer: "You can reach us via email at fleet.mobility@smgfinance.in or by calling our helpline number xxxx. Our team is available to assist you with any insurance-related queries."
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
        {/* Header Section */}
      <section
      className="relative h-70 bg-blue-950 px-20 flex items-center justify-start text-white p-4 "
    >
      <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div> {/* Dark overlay */}

      <div className="container mx-auto z-10 px-4 ">
        <h1 className="text-7xl font-bold leading-tight mb-6">
        EV Insurance
        </h1>
        <p className="text-2xl font-bold max-w-2xl mb-8 text-gray-300">
        Your Tailored Mobility Insurance from Revfin
        </p>
      </div>
    </section>

      {/* About SMG Finance Insure Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-blue-50 p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
          <div className="lg:pr-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About SMG Finance Insure</h2>
            <p className="text-gray-700 leading-relaxed">
              After pioneering financial lending with EV loans, SMG Finance is proud to have expanded its offerings to vehicle loans with the tailored solution, SMG Finance Insure. Approved by IRDAI and offered through SMG Finance's broking arm, SMG Finance Insurance Broking Private Limited, SMG Finance Insure collaborates with leading insurers. This allows customers to compare policies and premiums to find the perfect coverage for their vehicles. All SMG Finance customers, whether with an electric vehicle loan or any other vehicle loan, can now benefit from SMG Finance Insure, enhancing their journey towards sustainable and eco-friendly mobility.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            {/* Placeholder for About image */}
            <div className="w-full max-w-sm h-64 bg-blue-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-blue-700 text-xl">Image Placeholder</span> {/* Replaced icon with text */}
            </div>
          </div>
        </div>
      </section>

      {/* What SMG Finance Insure Offers Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-blue-50 p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            {/* Placeholder for Offers image */}
            <div className="w-full max-w-sm h-64 bg-blue-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-blue-700 text-xl">Image Placeholder</span> {/* Replaced icon with text */}
            </div>
          </div>
          <div className="lg:pl-8 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What SMG Finance Insure Offers</h2>
            <p className="text-gray-700 leading-relaxed">
              As the brokering subsidiary of SMG Finance, all customers and retail partners can now enjoy the benefits of SMG Finance Insure. SMG Finance Insure provides Motor Vehicle and Credit Life Insurance, with each policy tailored to meet the specific needs of the customer, whether individual or fleet owner. In partnership with leading insurers, customers are able to compare policies and premiums to find the perfect coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Motor Vehicle Insurance */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-32 h-32 bg-blue-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-blue-700 text-xl">Product Image</span> {/* Replaced icon with text */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Motor Vehicle Insurance</h3>
              <p className="text-gray-700">
                SMG Finance Insure allows real-time policy issuance via API integration with different insurance companies. The system chooses the best quotation based on the vehicle details and coverages, such as IMT'23, zero depreciation, PA owner driver, and RTO code, and automatically generates the insurance policy for customers.
              </p>
            </div>
          </div>
          {/* Credit Life Insurance */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-32 h-32 bg-blue-200 rounded-lg flex items-center justify-center shadow-inner">
              <span className="text-blue-700 text-xl">Product Image</span> {/* Replaced icon with text */}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Credit Life Insurance</h3>
              <p className="text-gray-700">
                Credit life insurance settles outstanding debts in the event of the borrower's death, ensuring financial obligations do not burden loved ones during challenging times. The premium is determined based on the loan amount, tenure, and age of the insured. SMG Finance Insure offers comprehensive, tech-based real-time issuance solutions, creating a seamless digital insurance experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMG Finance Insure Coverage Highlights */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-12 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">SMG Finance Insure Coverage Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <span className="text-blue-700 text-2xl font-bold">0%</span> {/* Replaced icon with text */}
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Zero Depreciation Benefit</h3>
            </div>
            <p className="text-gray-700">
              Ensures policy coverage benefits are not reduced by the depreciation value of damaged parts. Zero depreciation maximizes car insurance reimbursements by providing the full claim amount at the time of a claim.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <span className="text-blue-700 text-2xl font-bold">IMT</span> {/* Replaced icon with text */}
              </div>
              <h3 className="text-xl font-semibold text-blue-800">IMT23 Indian Motor Tariff</h3>
            </div>
            <p className="text-gray-700">
              Standard commercial motor insurance often excludes coverage for fenders, bonnets, bumpers, fires, etc. However, with IMT'23 included in the commercial motor insurance policy, customers can receive up to 50% coverage for these parts.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <span className="text-blue-700 text-2xl font-bold">C$</span> {/* Replaced icon with text */}
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Cashless Vehicle Insurance</h3>
            </div>
            <p className="text-gray-700">
              A cashless vehicle insurance policy provides the benefit of getting the vehicle repaired without paying out of pocket. Under this policy, the insurer directly settles the claim amount with the service provider or garage on the customer's behalf.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <span className="text-blue-700 text-2xl font-bold">🛡️</span> {/* Replaced icon with text */}
              </div>
              <h3 className="text-xl font-semibold text-blue-800">Comprehensive Insurance Coverage</h3>
            </div>
            <p className="text-gray-700">
              Offers comprehensive coverage for damages to the vehicle from non-collision incidents, such as theft, fire, or natural disasters, as well as damages the vehicle may cause to others. This coverage ensures financial protection in a wide range of situations.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-blue-900 ">Trusted Insurance Partners</h2>
          <div className="w-full overflow-hidden py-4">
            <div className="flex whitespace-nowrap animate-marquee">
              {[
                'Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5', 
                'Partner 6', 'Partner 7' // Add more partners as needed
              ].flatMap(partner => [partner, partner]).map((partner, index) => ( // Duplicate for seamless loop
                <div 
                  key={index} 
                  className="flex-shrink-0 w-40 h-24 bg-blue-50 rounded-lg flex items-center justify-center shadow-md mx-4 border border-blue-200"
                >
                  <span className="text-blue-800 font-semibold">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Why Choose SMG Finance Insure Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-8 mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Why Choose SMG Finance Insure</h2>
        <div className="max-w-3xl mx-auto">
          {whyChooseSMGFinance.map((item, index) => (
            <div key={index} className="border border-blue-200 rounded-lg mb-4 shadow-sm">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none bg-blue-50 hover:bg-blue-100 transition-colors duration-200 rounded-lg"
                onClick={() => toggleWhyChoose(index)}
              >
                <span className="text-xl font-semibold text-blue-800">{item.title}</span>
                {openWhyChoose === index ? (
                  <span className="text-blue-700 text-2xl">&darr;</span> // Down arrow character
                ) : (
                  <span className="text-blue-700 text-2xl">&rarr;</span> // Right arrow character
                )}
              </button>
              {openWhyChoose === index && (
                <div className="p-6 bg-white text-gray-700 border-t border-blue-200">
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ask Virat: FAQs Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16  mb-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Ask Virat: FAQs</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-blue-200 rounded-lg mb-4 shadow-sm">
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none bg-blue-50 hover:bg-blue-100 transition-colors duration-200 rounded-lg"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-semibold text-blue-800">{faq.question}</span>
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

export default InsurancePage;
