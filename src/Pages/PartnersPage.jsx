import React, { useState } from 'react';

const PartnersPage = () => {
  const [activeTab, setActiveTab] = useState('OEM Partners');

  const partnerCategories = [
    "OEM Partners",
    "Fleet Partners",
    "Battery As A Service",
    "Lending Partners",
    "Financial Service Partners",
    "Memberships",
  ];

  // Dummy data for partners, structured by category
  const partnersData = {
    "OEM Partners": [
      "OEM Partner 1", "OEM Partner 2", "OEM Partner 3", "OEM Partner 4",
      "OEM Partner 5", "OEM Partner 6", "OEM Partner 7", "OEM Partner 8",
      "OEM Partner 9", "OEM Partner 10", "OEM Partner 11", "OEM Partner 12",
    ],
    "Fleet Partners": [
      "Fleet Partner A", "Fleet Partner B", "Fleet Partner C", "Fleet Partner D",
      "Fleet Partner E", "Fleet Partner F",
    ],
    "Battery As A Service": [
      "Battery Partner X", "Battery Partner Y", "Battery Partner Z",
    ],
    "Lending Partners": [
      "Lending Partner I", "Lending Partner II", "Lending Partner III", "Lending Partner IV",
    ],
    "Financial Service Partners": [
      "Financial Partner Alpha", "Financial Partner Beta", "Financial Partner Gamma",
    ],
    "Memberships": [
      "Membership Org 1", "Membership Org 2",
    ],
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section
      className="relative h-70 bg-blue-950 px-20 flex items-center justify-start text-white p-4 "
    >
      <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div> {/* Dark overlay */}

      <div className="container mx-auto z-10 px-4 ">
        <h1 className="text-7xl font-bold leading-tight mb-6">
          Trusted Partners
        </h1>
      </div>
      {/* A placeholder for the large white box that seems to be a section header/intro for the next part */}
    </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Tabs for Partner Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {partnerCategories.map((category) => (
            <button
              key={category}
              className={`py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 border border-gray-300 ${
                activeTab === category
                  ? 'bg-blue-100 text-blue-800 shadow-md'
                  : 'bg-white text-gray-600 hover:bg-blue-200'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
            {activeTab}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {partnersData[activeTab]?.map((partnerName, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32 text-center"
              >
                <span className="text-blue-800 font-semibold text-lg">
                  {partnerName}
                </span>
              </div>
            ))}
          </div>
          {partnersData[activeTab]?.length === 0 && (
            <p className="text-center text-gray-600 text-lg mt-8">
              No partners available in this category.
            </p>
          )}
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} SMG Finance. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PartnersPage;
