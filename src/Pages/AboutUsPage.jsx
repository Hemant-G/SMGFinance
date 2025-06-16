import React from 'react';
import Team from '../Components/Team';

const AboutUsPage = () => {
  // Data for "Innovation Meets Accessibility" section
  const innovationData = [
    {
      title: 'Inclusive Targeting',
      description: 'Focused on inclusivity, SMG Finance is dedicated to reaching underserved communities, offering affordable 2W/3W EV loans and elevating individuals from ignorance and deprivation by fostering independence, awareness, and accessibility.',
      icon: 'https://placehold.co/60x60/FF7F50/FFFFFF?text=Target', // Placeholder for icon
    },
    {
      title: 'Innovative Financing',
      description: 'SMG Finance pioneers as the fastest and smartest EV loan company in India, providing accessible and efficient financial solutions for EV loans and insurance, leveraging India’s digital infrastructure with a smart and innovative underwriting approach.',
      icon: 'https://placehold.co/60x60/FF7F50/FFFFFF?text=Finance', // Placeholder for icon
    },
    {
      title: 'Transformative Technology',
      description: 'SMG Finance enhances its offerings by incorporating cutting-edge product extensions.',
      icon: 'https://placehold.co/60x60/FF7F50/FFFFFF?text=Tech', // Placeholder for icon
    },
    {
      title: 'Thriving Ecosystem',
      description: 'In partnership with top OEMs and ecosystem partners, SMG Finance invests in building an', // Text incomplete based on screenshot
      icon: 'https://placehold.co/60x60/FF7F50/FFFFFF?text=Eco', // Placeholder for icon
    },
  ];

  const journeyData = [
    { year: 2017, events: [] },
    { year: 2018, events: [] },
    { year: 2019, events: [] },
    { year: 2020, events: [] },
    { year: 2021, events: [] },
    { year: 2022, events: [] },
    { year: 2023, events: [] },
    { year: 2024, events: ['Receives insurance broking license for EVs', 'Launches Revshaala', 'Disburses ₹1000 crore in loans', 'Achieves national coverage in 23 states', 'Certified as a Great Place to Work for the fourth time', 'Partnership with over 30 Fleet Aggregators', 'Finances 70,000+ electric vehicles'] },
  ];

  // Data for "Setting the Bar High for EV Adoption in India" section
  const offeringsData = [
    {
      title: 'SMG Finance Lending',
      description: 'Quick and easy 2W/3W EV loans for underserved customers with no credit history through an innovative underwriting approach, providing loan approvals in just 16 minutes.',
      logo: 'https://placehold.co/150x50/000000/FF7F50?text=SMGFinance+Capital', // Placeholder for logo
    },
    {
      title: 'SMG Finance Mobility',
      description: 'Rapid fleet expansion with streamlined loan disbursement and minimal paperwork.',
      logo: 'https://placehold.co/150x50/000000/FF7F50?text=SMGFinance+Mobility', // Placeholder for logo
    },
    {
      title: 'SMG Finance Insure',
      description: 'IRDAI approved motor and credit life insurance solutions, offered in partnership with leading insurers for comprehensive coverage.',
      logo: 'https://placehold.co/150x50/000000/FF7F50?text=SMGFinance+Insure', // Placeholder for logo
    },
    {
      title: 'SMG Finance IoT',
      description: 'Smart monitoring with telematics to improve EV vehicle and driver performance.',
      logo: 'https://placehold.co/150x50/000000/FF7F50?text=SMGFinance+IoT', // Placeholder for logo
    },
    {
      title: 'SMG Finance shaala',
      description: 'Battery life extension centers with the capability to make EV batteries last longer.',
      logo: 'https://placehold.co/150x50/000000/FF7F50?text=SMGFinance+shaala', // Placeholder for logo
    },
  ];

  return (
    <div className="bg-gradient-to-l from-slate-800 to bg-slate-950  ">

      {/* Hero Section */}
      <section className="text-white py-20 px-4 md:px-10">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className=" text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold ">
              SMG Finance Is On A Mission To Revolutionise Sustainable Mobility
            </h1>
          </div>
        </div>
        
      </section>
      <div className="w-full flex flex-col md:flex-row gap-16 pb-10 justify-center bg-gradient-to-l from-slate-800 to bg-slate-950 " >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEXv8fNod4f19vhkdISPmqVcbX52g5L29/iYoq3l6OuCj5vd4eRfcIHr7fDL0NVaa33Bx81ufIuwt7+7wch8iZeiq7TU2N2Ml6KVn6miqrTGy9G1u8PP1Nl1USWeAAADHUlEQVR4nO3c7XKiMBhAYUjEoAb8/qj1/q9zxXasBFFhE3njnOfXzuzW6emLS42JSQIAAAAAAAAAAAAAAAAAAAAAAAAAAAC4VEhDx1XMIh+FclgPXXdWbDIdjl1Ohg5UG5uGpJdDB5ZZ0MA0td/DPhfNNuwIz0McDVuoch26cGoopJDCVwtt5pW8Qrub+DSz4gqzmdf/1QuJhV4fmMK3obA3Ct+Gwt5iKFRGXdZw+j2w/EKVrPdjnY4PZb9vUHyhWWhb/Y3W2XjXZ4zSC1X+t7ihs3WPROGF6lBb25gfuyfKLlQLZ3nKdl8SlF2YuK+Ke6wmiS5Ui8b6W9Z5iKILzaixsmEXXYcoulAt3cDUbj+qMGkWdn8iRld4+KhCtWk+D5tXqUomj35nFV1ovpqFpROjZvv5PMuL1gcWXZjs5o2r1P2y8ue31rR1gU52oZk6Q7Sreogqf38GWrclyi5MZvVbvh47X/T3pmPrFIUXquPtdap1/Tea2ruqbVMUXniO0Ncx2s2k1uC8bdwyRemFiSryubVa2yz9dp+DzguP+4niC6vG4yr/Wp3Uk8CWCzWCwmoVyhj3W7+7s+HeFKMovPfPy8atsmWKkRa27k1pTjHOwpYJ3p1ilIUPdxe5U4yx8Mn2KWeKERY+3R9Wn2J8hS9sgKslRlf40g6/2ws1tsIXtzDeTDGywge3ibYpxlXYYRPqdYpRFb48wdspxlTYcRvx7xQjKuy8T1qn1SvmeAp7bAS/TDGawl473aspxlLYcyv/OTGJo7D3WYXzhRpFYafbhJt4/ZPgQj+nTQQX/scE4yj0dV5IbKG3A1FSC/2d+BJa6PFIm8xCn2f2RBZ6PZQosdDTbUJuoSq9HrqUV+h3ggILvR8Mllbo/+SzsMIAR7tlFYY4uy6qMMjhfEmF5hTi0wcEFU5Ofm8T4grtOsypbjmFaaCPjxBUGAiFFFL4jNkGL9wPPEP3EJd37g7q9ycuww5R22H7zmapDflZX7rXCVS/itV0HMp0VQwfeDm0HUpjBy4AAAAAAAAAAAAAAAAAAAAAAAAAAACAz/APOCY/FtgxKw4AAAAASUVORK5CYII="
              alt=""
              className="w-180 h-150 rounded-lg shadow-lg object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/FF7F50/FFFFFF?text=Image+Error"; }}
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEXv8fNod4f19vhkdISPmqVcbX52g5L29/iYoq3l6OuCj5vd4eRfcIHr7fDL0NVaa33Bx81ufIuwt7+7wch8iZeiq7TU2N2Ml6KVn6miqrTGy9G1u8PP1Nl1USWeAAADHUlEQVR4nO3c7XKiMBhAYUjEoAb8/qj1/q9zxXasBFFhE3njnOfXzuzW6emLS42JSQIAAAAAAAAAAAAAAAAAAAAAAAAAAAC4VEhDx1XMIh+FclgPXXdWbDIdjl1Ohg5UG5uGpJdDB5ZZ0MA0td/DPhfNNuwIz0McDVuoch26cGoopJDCVwtt5pW8Qrub+DSz4gqzmdf/1QuJhV4fmMK3obA3Ct+Gwt5iKFRGXdZw+j2w/EKVrPdjnY4PZb9vUHyhWWhb/Y3W2XjXZ4zSC1X+t7ihs3WPROGF6lBb25gfuyfKLlQLZ3nKdl8SlF2YuK+Ke6wmiS5Ui8b6W9Z5iKILzaixsmEXXYcoulAt3cDUbj+qMGkWdn8iRld4+KhCtWk+D5tXqUomj35nFV1ovpqFpROjZvv5PMuL1gcWXZjs5o2r1P2y8ue31rR1gU52oZk6Q7Sreogqf38GWrclyi5MZvVbvh47X/T3pmPrFIUXquPtdap1/Tea2ruqbVMUXniO0Ncx2s2k1uC8bdwyRemFiSryubVa2yz9dp+DzguP+4niC6vG4yr/Wp3Uk8CWCzWCwmoVyhj3W7+7s+HeFKMovPfPy8atsmWKkRa27k1pTjHOwpYJ3p1ilIUPdxe5U4yx8Mn2KWeKERY+3R9Wn2J8hS9sgKslRlf40g6/2ws1tsIXtzDeTDGywge3ibYpxlXYYRPqdYpRFb48wdspxlTYcRvx7xQjKuy8T1qn1SvmeAp7bAS/TDGawl473aspxlLYcyv/OTGJo7D3WYXzhRpFYafbhJt4/ZPgQj+nTQQX/scE4yj0dV5IbKG3A1FSC/2d+BJa6PFIm8xCn2f2RBZ6PZQosdDTbUJuoSq9HrqUV+h3ggILvR8Mllbo/+SzsMIAR7tlFYY4uy6qMMjhfEmF5hTi0wcEFU5Ofm8T4grtOsypbjmFaaCPjxBUGAiFFFL4jNkGL9wPPEP3EJd37g7q9ycuww5R22H7zmapDflZX7rXCVS/itV0HMp0VQwfeDm0HUpjBy4AAAAAAAAAAAAAAAAAAAAAAAAAAACAz/APOCY/FtgxKw4AAAAASUVORK5CYII="
              alt=""
              className="w-120 h-150 rounded-lg shadow-lg object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/FF7F50/FFFFFF?text=Image+Error"; }}
            />
          </div>

      {/* Who We Are Section */}
      <section className="py-16 px-4 md:px-10 bg-white" id='who-we-are'>
        <div className="container mx-auto  text-center">
          <h2 className="text-4xl text-blue-950 font-bold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            SMG Finance began in Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Innovation Meets Accessibility Section */}
      <section className="py-16 px-4 md:px-10 bg-white" >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-950">Innovation Meets Accessibility</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-700">
            SMG Finance aspires to Revolutionise Sustainable Mobility in India and cultivate a thriving ecosystem that facilitates seamless EV adoption.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Vision & Mission Section */}
      <section className="py-16 px-4 md:px-10 bg-gray-50" id='mission-and-vision'>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2 text-blue-900">Vision</h3>
              <p className="text-gray-700">To build India's largest lending company.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">Mission</h3>
              <p className="text-gray-700">
                We are on a mission to Revolutionise Sustainable Mobility by financing over 2 million electric vehicles by 2027. We provide financial products to individuals and fleets operating intra-city small commercial vehicles. Using behavioral data and developing deep ecosystem partnerships, we aim to achieve scale and mitigate risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setting the Bar High for EV Adoption in India */}
      <section className="py-16 px-4 md:px-10 bg-white" >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Setting the Bar High for EV Adoption in India</h2>
          <div className="grid grid-cols-1 gap-6">
            {offeringsData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                <div className="flex-shrink-0 bg-blue-900">
                  <img  alt={item.title} className="h-12 w-auto object-contain" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x50/000000/FF7F50?text=Logo+Error"; }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='investors-and-lenders'>
        <Team />
      </section>
    </div>
  );
};

export default AboutUsPage;
