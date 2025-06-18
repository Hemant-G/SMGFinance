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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800"> {/* Changed font-inter to font-sans for consistency */}
      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[60vh] lg:min-h-[70vh] bg-blue-950 px-4 md:px-10 lg:px-20 flex items-center justify-center text-white p-4">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black opacity-70"></div>{" "}
        {/* Dark overlay */}
        <div className="container mx-auto z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            EV Loans – SMG Lending <br className="hidden sm:inline" /> of Sustainable Mobility
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto mb-6 md:mb-8 text-gray-300">
            Revolutionising Sustainable Mobility with Accessible Financing
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="text-blue-950 py-12 md:py-20 px-4 md:px-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Commercial EV financing options with SMG Finance Lending
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-8 md:mb-12">
            Why Choose SMG Finance?
          </h2>
          <div className="relative">
            {whyChooseSMGFinanceData.map((item, index) => (
              <div
                key={item.id}
                className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12 mb-8 md:mb-12
                           flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12
                           transition-all duration-300 transform md:sticky top-20"              >
                <div className="md:w-1/2 text-center md:text-left">
                  <p className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-2 md:mb-4 opacity-50">
                    {item.number}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 md:mb-4 text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700">{item.description}</p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center w-full">
                  {/* Replaced image with a blue colored div */}
                  <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-40 sm:h-48 md:h-64 bg-blue-900 rounded-xl shadow-md flex items-center justify-center"> {/* Adjusted rounded-xl from rounded-4xl, fixed max-w, adjusted height */}
                    <span className="text-white text-lg sm:text-xl font-semibold text-center px-4">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl text-blue-950 font-bold text-center mb-6 md:mb-8">How It Works</h2>
          <p className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto text-gray-700">
            To apply for loans, connect with our team or visit our nearest E-3W
            OEM Dealer Partners and follow the steps outlined below:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Quick Application */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-xl sm:text-2xl">Q</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {howItWorksData[0].title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{howItWorksData[0].description}</p>
            </div>
            {/* Download the SMG Finance App */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center col-span-1 sm:col-span-2 lg:col-span-1"> {/* Adjusted col-span for sm breakpoint */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                Download the SMG Finance App
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                Start by downloading our user-friendly app, available on both
                iOS and Android platforms.
              </p>
              {/* Replaced image with a blue colored div */}
              <div className="w-32 h-48 sm:w-40 sm:h-60 bg-blue-500 rounded-md shadow-lg flex items-center justify-center">
                <span className="text-white text-base sm:text-lg font-semibold text-center px-2">SMG App</span>
              </div>
            </div>
            {/* Flexible Repayment */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-xl sm:text-2xl">F</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {howItWorksData[2].title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{howItWorksData[2].description}</p>
            </div>
            {/* Instant Approval */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-xl sm:text-2xl">A</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {howItWorksData[1].title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{howItWorksData[1].description}</p>
            </div>
            {/* Get on the Road */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center">
              {/* Replaced icon with a blue colored div */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-md bg-blue-500 flex items-center justify-center text-white text-xl sm:text-2xl">R</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {howItWorksData[3].title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{howItWorksData[3].description}</p>
            </div>
             {/* Empty div for layout on odd number of items, pushes last item to the left on 2-column layouts */}
             <div className="hidden sm:block lg:hidden col-span-1"></div>
          </div>
        </div>
      </section>

      {/* Check Interest Rates Section */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-950">
            Check Interest Rates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {interestRatesData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center text-center"
              >
                {/* Replaced icon with a blue colored div */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold border-2 border-blue-300">
                  {item.type.substring(0, 2).toUpperCase()} {/* Display first two letters as placeholder */}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">{item.type}</h3>
                <a
                  href="#"
                  className="text-blue-600 hover:underline flex items-center text-base sm:text-lg font-medium"
                >
                  Check Interest Rate
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="bg-gray-50 py-12 md:py-16 px-4 md:px-10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-950">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 md:space-y-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 sm:p-6 cursor-pointer border border-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-2"> {/* Added pr-2 for spacing with icon */}
                    {item.question}
                  </h3>
                  <span className="text-xl text-blue-500 flex-shrink-0">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </div>
                {openFAQ === index && (
                  <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base transition-all duration-300 ease-in-out">
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
