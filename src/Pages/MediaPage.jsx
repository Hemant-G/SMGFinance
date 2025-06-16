import React, { useState } from 'react';

// Sample data for media articles, updated with SMG Finance and relevant dates
const mediaArticles = [
  {
    id: 1,
    year: 2024,
    source: 'BW BUSINESSWORLD',
    title: 'SMG Finance\'s Electrifying Path: Bridging Innovation And Sustainability In Urban Mobility',
    date: 'December 13, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 2,
    year: 2024,
    source: 'ET Auto',
    title: 'SMG Finance aims to finance 20 lakh vehicles, INR 20k cr loan disbursements in 5 yrs: CEO',
    date: 'December 2, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 3,
    year: 2024,
    source: 'Business Standard',
    title: 'SMG Finance eyes financing 2 mn vehicles. Rs 20k cr loan payment in 5 yrs: CEO',
    date: 'December 1, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 4,
    year: 2024,
    source: 'Inc42',
    title: 'How SMG Finance Is Accelerating India\'s EV Transition With Accessible Financing',
    date: 'November 20, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 5,
    year: 2024,
    source: 'businessline.',
    title: 'SMG Finance set to double two-wheeler portfolio through takeover of 15,000 electric vehicles fro...',
    date: 'September 6, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 6,
    year: 2024,
    source: 'ET Auto',
    title: 'SMG Finance and Bajaj Auto join to promote high speed E3W adoption',
    date: 'August 6, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 7,
    year: 2024,
    source: 'MOBILITY OUTLOOK',
    title: 'SMG Finance Unveils \'Jagriti Yatra\' Abhiyaan\' To Support EV Adoption In Uttar Pradesh',
    date: 'July 28, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 8,
    year: 2024,
    source: 'DriveSpark',
    title: 'SMG Finance CEO Outlines Expectations For Government Support In EV Sector',
    date: 'July 15, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 9,
    year: 2024,
    source: 'EarthAndroid', // Assuming EarthAndroid is a typo for Earth And Road, but keeping as is based on image.
    title: '"Anticipating Strategic Boosts for India\'s EV Sector and Fintech Innovation," says SMG Finance\'s',
    date: 'July 10, 2024',
    link: '#', // Placeholder link
  },
  {
    id: 10,
    year: 2023,
    source: 'The Economic Times',
    title: 'SMG Finance secures new funding round',
    date: 'March 15, 2023',
    link: '#',
  },
  {
    id: 11,
    year: 2022,
    source: 'Forbes India',
    title: 'SMG Finance: Leading the Charge in Sustainable Financing',
    date: 'January 20, 2022',
    link: '#',
  },
  {
    id: 12,
    year: 2021,
    source: 'Livemint',
    title: 'How SMG Finance is revolutionizing rural lending',
    date: 'October 10, 2021',
    link: '#',
  },
];

function MediaPage() {
  const [selectedYear, setSelectedYear] = useState(2024); // Default to 2024

  // Get unique years from the media articles, sorted in descending order
  const years = [...new Set(mediaArticles.map((article) => article.year))].sort((a, b) => b - a);

  // Filter articles based on the selected year
  const filteredArticles = mediaArticles.filter((article) => article.year === selectedYear);

  return (
    <div className="min-h-screen bg-white font-sans">
        {/* Hero Section */}
      <section
      className="relative h-60 bg-blue-950 px-20 flex items-center justify-start text-white p-4 "
    >
      <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black  opacity-70"></div> {/* Dark overlay */}

      <div className="container mx-auto z-10 px-4 ">
        <h1 className="text-7xl font-bold leading-tight mb-6">
          Media Room
        </h1>
      </div>
    </section>

      {/* Main Content Area */}
      <div className="container mx-auto p-6 md:p-10">
        {/* Year Filter Section */}
        <div className="flex flex-wrap gap-4 mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all cursor-pointer duration-300
                ${selectedYear === year
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-blue-800 border border-blue-300 hover:bg-blue-100'
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Media Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
                         border border-blue-100 flex flex-col p-6"
            >
              <div className="mb-4">
                {/* Source Logo/Text */}
                {/* You would typically use images for logos here, but using text for simplicity */}
                <p className="text-blue-800 text-sm font-semibold uppercase">{article.source}</p>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex-grow">
                {article.title}
              </h3>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-auto">
                <div className="flex items-center">
                  {/* Calendar icon for date - using a simple SVG/emoji for demonstration */}
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                  <span>{article.date}</span>
                </div>
                <a
                  href={article.link}
                  className="text-blue-800 font-medium hover:text-blue-600 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaPage;
