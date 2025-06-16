import React, { useState } from "react";

const LendingPage = () => {
  // State to manage the open/close state of FAQ accordion items
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ accordion items
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Data for "Why Choose SMG Finance?" sections
  const whyChooseSMGFinanceData = [
    {
      id: "swift-approvals",
      number: "01.",
      title: "Swift Approvals",
      description:
        "With our cutting-edge digital platform, loans can be secured quickly. Our innovative underwriting criteria allow us to approve loans even for individuals with no prior credit history, ensuring that everyone has a chance to drive change.",
      image: "https://placehold.co/300x200/FF7F50/FFFFFF?text=Swift+Approvals",
    },
    {
      id: "affordable-financing",
      number: "02.",
      title: "Affordable Financing",
      description:
        "We offer competitive interest rates and flexible repayment options, making it easier than ever to invest in commercial EVs. Our loans are designed to be accessible, empowering drivers and small businesses to grow sustainably.",
      image:
        "https://placehold.co/300x200/FF7F50/FFFFFF?text=Affordable+Financing",
    },
    {
      id: "support-communities",
      number: "03.",
      title: "Support for Underserved Communities",
      description:
        "SMG Finance is dedicated to making EVs accessible to those who need them most. By providing affordable financing, we enable underserved communities to thrive, contributing to economic development and environmental sustainability.",
      image:
        "https://placehold.co/300x200/FF7F50/FFFFFF?text=Support+Communities",
    },
    {
      id: "innovative-underwriting",
      number: "04.",
      title: "Innovative Underwriting Approach",
      description:
        "SMG Finance has developed an innovative underwriting approach using various data points to serve those with no credit history and who are underserved by banks and other financial institutions. This data helps ascertain intent to pay and provides quick approvals for potential customers.",
      image:
        "https://placehold.co/300x200/FF7F50/FFFFFF?text=Innovative+Underwriting",
    },
    {
      id: "drive-growth-reduce-carbon",
      number: "05.",
      title: "Drive Growth and Reduce Your Carbon Footprint",
      description:
        "Every loan from SMG Finance is an investment in a cleaner, greener future. By facilitating the adoption of EVs, we help reduce carbon emissions and support the journey towards achieving Net Zero targets.",
      image: "https://placehold.co/300x200/FF7F50/FFFFFF?text=Drive+Growth",
    },
  ];

  // Data for "How It Works" sections
  const howItWorksData = [
    {
      title: "Quick Application",
      description:
        "Complete the simple loan application process within minutes with minimal documentation",
      icon: "https://placehold.co/60x60/FF7F50/FFFFFF?text=App",
    },
    {
      title: "Instant Approval",
      description:
        "With their innovative algorithms, receive loan approval in just 16 minutes.",
      icon: "https://placehold.co/60x60/FF7F50/FFFFFF?text=Approval",
    },
    {
      title: "Flexible Repayment",
      description:
        "Choose from a variety of repayment plans tailored to your financial needs.",
      icon: "https://placehold.co/60x60/FF7F50/FFFFFF?text=Flex",
    },
    {
      title: "Get on the Road",
      description:
        "Once approved, use the loan to purchase a commercial EV and begin your journey towards a greener future.",
      icon: "https://placehold.co/60x60/FF7F50/FFFFFF?text=Road",
    },
  ];

  // Data for "Check Interest Rates" sections
  const interestRatesData = [
    {
      type: "E-2W Loan",
      icon: "https://placehold.co/60x60/FF7F50/FFFFFF?text=2W",
    },
    {
      type: "E-3W Loan",
      icon: "https://placehold.co/60x60/FF7F50/FFFFFF?text=3W",
    },
  ];

  // Data for "Frequently Asked Questions"
  const faqData = [
    {
      question: "How should I pay my EMI amount?",
      answer:
        "You can pay your EMI amount through various convenient methods including online payment portals, direct bank transfers, or designated collection centers. Detailed instructions and options will be provided upon loan disbursement.",
    },
    {
      question:
        "Can I close my SMG Finance loan early? If so, what is the procedure?",
      answer:
        "Yes, you can pre-close your SMG Finance loan early. The procedure typically involves submitting a request, clearing any outstanding dues, and settling the principal amount. Please contact our customer support for precise steps and any applicable charges.",
    },
    {
      question: "Is there any pre-payment penalty?",
      answer:
        "Pre-payment penalty policies vary based on the loan product and terms. Please refer to your loan agreement or contact our customer service to understand if any pre-payment penalties apply to your specific loan.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-inter text-gray-800 ">
      <section className="relative h-100 bg-blue-950 px-20 flex items-center justify-center text-white p-4 ">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div>{" "}
        {/* Dark overlay */}
        <div className="container mx-auto z-10 px-4 ">
          <h1 className="text-5xl font-bold leading-tight mb-6">
          EV Loans – SMG Lending <br /> of Sustainable Mobility
          </h1>
          <p className="text-xl font-bold max-w-2xl mb-8 text-gray-300">
          Revolutionising Sustainable Mobility with Accessible Financing
          </p>
        </div>
      </section>
      {/* Introduction Section */}
      <section className=" text-blue-950 py-20 px-4 md:px-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Commercial EV financing options with SMG Finance Lending
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            SMG Finance is dedicated to revolutionising the way underserved
            communities access commercial electric vehicles (EVs). Through our
            licensed financing operations, we provide tailored loan solutions
            that empower individuals and businesses to adopt EVs seamlessly for
            first, mid, and last-mile mobility. Our mission is to bridge
            financial gaps and support a greener, more inclusive future.
          </p>
        </div>
      </section>

      {/* Why Choose SMG Finance? Section - Sticky Effect */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-4xl font-bold text-blue-950 text-center mb-12">
            Why Choose SMG Finance?
          </h2>
          <div className="relative">
            {whyChooseSMGFinanceData.map((item, index) => (
              <div
                key={item.id}
                className="relative bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-300 transform md:sticky"
                style={{ top: `${index * 20}px` }}
              >
                <div className="md:w-1/2">
                  <p className="text-5xl font-extrabold text-blue-500 mb-4 opacity-50">
                    {item.number}
                  </p>
                  <h3 className="text-3xl font-bold mb-4 text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700">{item.description}</p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                  {/* Replaced image with a blue colored div */}
                  <div className="w-full max-w-xs md:max-w-sm h-48 md:h-64 bg-blue-900 rounded-4xl shadow-md flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-4xl text-blue-950 font-bold text-center mb-6">How It Works</h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-700">
            To apply for loans, connect with our team or visit our nearest E-3W
            OEM Dealer Partners and follow the steps outlined below:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Application */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-16 h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-2xl">Q</div>

              <h3 className="text-xl font-semibold mb-2">
                {howItWorksData[0].title}
              </h3>
              <p className="text-gray-700">{howItWorksData[0].description}</p>
            </div>
            {/* Download the SMG Finance App */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-2">
                Download the SMG Finance App
              </h3>
              <p className="text-gray-700 mb-4">
                Start by downloading our user-friendly app, available on both
                iOS and Android platforms.
              </p>
              {/* Replaced image with a blue colored div */}
              <div className="w-40 h-60 bg-blue-500 rounded-md shadow-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">SMG App</span>
              </div>
            </div>
            {/* Flexible Repayment */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-16 h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-2xl">F</div>
              <h3 className="text-xl font-semibold mb-2">
                {howItWorksData[2].title}
              </h3>
              <p className="text-gray-700">{howItWorksData[2].description}</p>
            </div>
            {/* Instant Approval */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-16 h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-2xl">A</div>
              <h3 className="text-xl font-semibold mb-2">
                {howItWorksData[1].title}
              </h3>
              <p className="text-gray-700">{howItWorksData[1].description}</p>
            </div>
            {/* Get on the Road */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-16 h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-2xl">R</div>
              <h3 className="text-xl font-semibold mb-2">
                {howItWorksData[3].title}
              </h3>
              <p className="text-gray-700">{howItWorksData[3].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Check Interest Rates Section */}
      <section className="bg-white px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Check Interest Rates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {interestRatesData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
              >
                {/* Replaced icon with a blue colored div */}
                <div className="w-20 h-20 mb-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold border-2 border-blue-300 p-2">
                  {item.type.substring(0, 2).toUpperCase()} {/* Display first two letters as placeholder */}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.type}</h3>
                <a
                  href="#"
                  className="text-blue-500 hover:underline flex items-center"
                >
                  Check Interest Rate <span className="ml-2">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  <span className="text-xl text-blue-500">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </div>
                {openFAQ === index && (
                  <p className="mt-4 text-gray-700 transition-all duration-300 ease-in-out">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LendingPage;
