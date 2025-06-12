import React, { useState } from 'react';
import { FaRupeeSign, FaCalendarAlt, FaPercent, FaCheckCircle, FaClipboardList, FaFileInvoiceDollar, FaArrowRight, FaPlayCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const TwoWheelerPage = () => {
  // State for FAQ accordion
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const loanDetails = [
    {
      icon: <FaRupeeSign className="text-blue-900 text-4xl" />,
      title: 'Loan Amount',
      description: 'Rs 1,50,000 or 75% of the total on-road vehicle price, with a minimum loan amount of Rs 30,000.',
    },
    {
      icon: <FaCalendarAlt className="text-blue-900 text-4xl" />,
      title: 'Loan Tenure',
      description: 'Borrowers can choose a loan tenure ranging from 6 months to 60 months to meet their financial needs.',
    },
    {
      icon: <FaPercent className="text-blue-900 text-4xl" />,
      title: 'Interest Rate',
      description: 'Up to 30% (annualised reducing rate) or 17% (flat interest rate) is available.',
    },
  ];

  const eligibilitySections = [
    {
      title: 'Essential Verifications',
      icon: <FaCheckCircle className="text-white text-3xl" />,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2">Mandatory Requirements</h4>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li>Vehicle Documents: Registration Certificate, Vehicle Insurance</li>
            <li>Others: IOT tracking device through any of SMG Finance Approved vendors</li>
          </ul>
          <h4 className="font-semibold text-lg mb-2">Eligibility Criteria</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Age-Limit: Greater than 21 years and less than 60 years at the time of loan application</li>
            <li>Minimum Monthly Income: Rs 12,000</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Documents Required',
      icon: <FaClipboardList className="text-white text-3xl" />,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2">List of Valid Documents</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>PAN Card</li>
            <li>Proof of Residence</li>
            <li>Three Months Bank Statement</li>
            <li>6 post-dated Cheques</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Applicable Charges',
      icon: <FaFileInvoiceDollar className="text-white text-3xl" />,
      content: (
        <>
          <h4 className="font-semibold text-lg mb-2">Charges List</h4>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Processing Fees/Origination Charges: Upto 5%</li>
            <li>Per EMI Bounce Fee: Rs 250</li>
            <li>Legal/Incidental Charges: As per Actual</li>
            <li>Loan Cancellation Charges: NIL</li>
            <li>Foreclosure Charges: NIL</li>
            <li>Extra Charge for Late EMI payment: NIL</li>
          </ul>
        </>
      ),
    },
  ];


  const testimonials = [
    {
      title: 'Electric 2W with swappable battery',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube embed URL
      thumbnail: 'https://via.placeholder.com/320x180/ADD8E6/000000?text=Video+1+Thumbnail', // Placeholder
      description: 'Electric 2W with swappable battery',
    },
    {
      title: 'How to maintain your electric 2 wheelers?',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube embed URL
      thumbnail: 'https://via.placeholder.com/320x180/ADD8E6/000000?text=Video+2+Thumbnail', // Placeholder
      description: 'How to maintain your electric 2 wheelers?',
    },
  ];

  const faqs = [
    {
      question: 'What is the maximum loan amount I can avail of for an Electric Two-Wheeler?',
      answer: 'You can avail up to Rs 1,50,000 or 75% of the total on-road vehicle price, with a minimum loan amount of Rs 30,000.',
    },
    {
      question: 'What is the interest rate on the SMG Finance Electric Two-Wheeler Loan?',
      answer: 'The interest rate can be up to 30% (annualised reducing rate) or 17% (flat interest rate), depending on the product and your profile.',
    },
    {
      question: 'What are the eligibility criteria for applying for this loan?',
      answer: 'Applicants must be aged between 21 and 60 years at the time of loan application and have a minimum monthly income of Rs 12,000.',
    },
    {
      question: 'What documents are required to apply for this loan?',
      answer: 'You will need your PAN Card, Proof of Residence, Three Months Bank Statement, and 6 post-dated Cheques. Vehicle documents (RC, Insurance) are also required.',
    },
    {
      question: 'Are there any additional charges associated with the loan?',
      answer: 'Yes, there are processing fees (upto 5%), per EMI bounce fee (Rs 250), and potential legal/incidental charges. Loan cancellation and foreclosure charges are NIL.',
    },
    {
      question: 'Can I foreclose the loan early, and are there any penalties?',
      answer: 'You can foreclose the loan early, and there are no foreclosure penalties.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <section
      className="relative h-100 bg-blue-950 px-20 flex items-center justify-start text-white p-4 "
    >
      <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div> {/* Dark overlay */}

      <div className="container mx-auto z-10 px-4 ">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Electric Two-Wheeler Loan
        </h1>
      </div>
    </section>


      <main className='px-4 lg:px-16'>
        <section className=" px-4 lg:px-16">
          <div className="container mx-auto mb-16 -mt-30 relative z-20">
            <div className="bg-blue-100 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-3/5 ">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Drive your income with our Electric Two-Wheeler Loan</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Electric Two-Wheeler Loan is offered by SMG Finance as a closed-ended credit product. With this loan, a fixed amount is borrowed and repaid in equal
                  monthly installments over the loan term. Interest and applicable fees are charged on the loan amount. The loan is exclusively available through approved 
                  dealerships and is provided to individuals or fleet owners purchasing an electric two-wheeler for commercial use only.
                </p>
                <button className="bg-blue-900 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                  Get in Touch &rarr;
                </button>
              </div>
              <div className="md:w-2/5 flex justify-center">
                <img alt="Electric Scooter" className="max-w-xs md:max-w-sm lg:max-w-md h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Loan Details Section */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="container mx-auto ">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Loan Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loanDetails.map((detail, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-blue-900">
                  <div className="mb-4 flex justify-center">{detail.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{detail.title}</h3>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria & Charges Section */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Eligibility Criteria & Charges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eligibilitySections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-blue-900 p-6 flex items-center gap-4 rounded-t-xl">
                    {section.icon}
                    <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                  </div>
                  <div className="p-6">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Trusted Partners</h2>
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

        {/* Loan Checks Section (Eligibility & EMI Calculator) */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Loan Eligibility Check Card */}
              <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Loan Eligibility Check</h3>
                  <p className="text-white mb-6"> 
                    Whether you're salaried or self-employed, SMG Finance offers loans to all with minimal documentation. To learn more,
                    visit your nearest dealer. Start by checking your eligibility here.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Check Your Eligibility"
                    className="w-full bg-transparent focus:outline-none px-2 py-1 text-gray-800"
                  />
                  <button className="text-blue-900 text-xl p-2 hover:text-blue-700">
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* EMI Calculator Card */}
              <div className="bg-blue-900 rounded-xl shadow-lg p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">EMI Calculator</h3>
                  <p className="text-white mb-6"> 
                    SMG Finance offers loans of reducing and flat rates, enabling you to select the EMI that suits your budget best. Quickly
                    check your affordable EMI options here.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Check Your EMI"
                    className="w-full bg-transparent focus:outline-none px-2 py-1 text-gray-800"
                  />
                  <button className="text-blue-600 text-xl p-2 hover:text-blue-700">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    {/* For a real video, use an iframe or video tag */}
                    <img src={testimonial.thumbnail} alt="Video Thumbnail" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <a href={testimonial.videoUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <FaPlayCircle className="text-white text-6xl hover:text-gray-300 transition-colors" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-center font-medium">{testimonial.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Ask Virat: FAQs</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded-lg mb-4">
                  <button
                    className="w-full p-5 flex items-center justify-between text-left text-gray-800 font-semibold text-lg focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    {openFAQIndex === index ? (
                      <FaMinusCircle className="text-blue-900 text-xl" />
                    ) : (
                      <FaPlusCircle className="text-blue-900 text-xl" />
                    )}
                  </button>
                  {openFAQIndex === index && (
                    <div className="p-5 pt-0 text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Optional: Footer */}
      {/* <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2025 SMG Finance. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default TwoWheelerPage;