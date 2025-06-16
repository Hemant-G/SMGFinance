import React, { useState } from 'react';
import JobDetailPage from './JobDetailsPage';

// Inline SVG Icons (simplified representations)
const IconBuilding = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 10a8 8 0 018-8v8h8a8 8_0_01-8 8v-8H2z"/>
  </svg>
);

const IconAward = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a8 8 0 00-8 8c0 1.83.6 3.53 1.63 4.9L10 18l6.37-3.1A7.95 7.95 0 0018 10a8 8 0 00-8-8zM7 10a3 3 0 116 0 3 3 0 01-6 0z"/>
  </svg>
);

const IconLeaf = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M12 2c-.37 0-.71.18-.9.49l-6 10c-.39.65.11 1.46.88 1.46H9v3a1 1 0 001 1h2a1 1 0 001-1v-3h2.02c.77 0 1.27-.81.88-1.46l-6-10C12.71 2.18 12.37 2 12 2z"/>
  </svg>
);

const IconGrowth = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L9.586 10l-2.293 2.293a1 1 0 001.414 1.414L11 11.414l2.293 2.293a1 1 0 001.414-1.414L12.414 10l2.293-2.293a1 1 0 00-1.414-1.414L11 8.586l-2.293-2.293z"/>
  </svg>
);

const IconUsers = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm-2 6a4 4 0 00-8 0v2a2 2 0 002 2h8a2 2 0 002-2v-2a4 4 0 00-4-4z"/>
  </svg>
);

const IconFlexibility = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 001 1h8a1 1 0 001-1 1 1 0 00-1-1H6a1 1 0 00-1 1z"/>
  </svg>
);

const IconGift = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M18 6H2a1 1 0 00-1 1v2a1 1 0 001 1h16a1 1 0 001-1V7a1 1 0 00-1-1zM2 12h16v3a2 2 0 01-2 2H4a2 2 0 01-2-2v-3zM10 2a2 2 0 00-2 2h4a2 2 0 00-2-2z"/>
  </svg>
);

const IconBaby = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM2 14a8 8 0 1116 0H2z"/>
  </svg>
);

const IconGraduationCap = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2a8 8 0 00-8 8c0 1.83.6 3.53 1.63 4.9L10 18l6.37-3.1A7.95 7.95 0 0018 10a8 8 0 00-8-8zM7 10h2v2H7v-2zm4 0h2v2h-2v-2z"/>
  </svg>
);

const IconCalendarStar = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5h8v2H6V7zm0 4h5v2H6v-2zm9-3a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a1 1 0 011-1h2z"/>
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

// Added IconChevronLeft for back button
const IconChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
  </svg>
);


const CareersPage = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null); // State to hold selected job details

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job); // Set the selected job
  };

  const handleBackToCareers = () => {
    setSelectedJob(null); // Clear selected job to return to main careers page
  };

  const whyWorkAtSMGFinance = [
    {
      icon: IconBuilding,
      title: "Shadow Founder for a Day",
      description: "Get a unique insight into the vision and operations by shadowing a founder.",
    },
    {
      icon: IconAward,
      title: "Award-Winning Workplace",
      description: "Join a recognized leader with a culture of excellence and innovation.",
    },
    {
      icon: IconLeaf,
      title: "Equal Opportunity Employer",
      description: "We embrace diversity and provide a fair and inclusive environment for all.",
    },
    {
      icon: IconGrowth,
      title: "Career Growth and Development",
      description: "Opportunities for continuous learning, skill enhancement, and career progression.",
    },
    {
      icon: IconUsers,
      title: "Collaborative Environment",
      description: "Work in a supportive team where ideas are shared and contributions are valued.",
    },
    {
      icon: IconFlexibility,
      title: "Flexibility @ SMG Finance",
      description: "Enjoy work-life balance with flexible work arrangements and policies.",
    },
  ];

  // Mock job data (expanded for job details)
  const allJobs = [
    {
      id: "CMD001",
      department: "Command Centre",
      title: "Power BI Developer",
      location: "New Delhi",
      positions: 1,
      description: "We are seeking a skilled Power BI Developer to join our Command Centre team. You will be responsible for designing, developing, and maintaining business intelligence solutions.",
      responsibilities: [
        "Develop and maintain Power BI reports and dashboards.",
        "Collaborate with stakeholders to gather requirements and translate them into technical specifications.",
        "Optimize Power BI reports for performance and scalability.",
        "Ensure data accuracy and consistency in reporting.",
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field.",
        "2+ years of experience with Power BI development.",
        "Strong understanding of data modeling and ETL processes.",
        "Excellent analytical and problem-solving skills.",
      ],
    },
    {
        id: "COL001",
        department: "Collections",
        title: "Collections Specialist",
        location: "Mumbai",
        positions: 5,
        description: "Join our Collections team to help manage and recover outstanding debts while maintaining positive customer relationships.",
        responsibilities: [
          "Contact customers regarding overdue payments.",
          "Negotiate payment plans.",
          "Maintain accurate records of collection activities.",
        ],
        qualifications: [
          "High school diploma or equivalent.",
          "1+ year of experience in collections or customer service.",
          "Strong communication and negotiation skills.",
        ],
    },
    {
        id: "FIN001",
        department: "Finance",
        title: "Financial Analyst",
        location: "Bengaluru",
        positions: 2,
        description: "We are looking for a Financial Analyst to support our financial planning and analysis activities.",
        responsibilities: [
          "Conduct financial forecasting and budgeting.",
          "Analyze financial data and prepare reports.",
          "Provide insights to support business decisions.",
        ],
        qualifications: [
          "Bachelor's degree in Finance or Accounting.",
          "3+ years of experience in financial analysis.",
          "Proficiency in financial modeling.",
        ],
    },
    {
        id: "HR001",
        department: "HR & Administration",
        title: "HR Business Partner",
        location: "Gurugram",
        positions: 1,
        description: "An experienced HR Business Partner is needed to align HR strategies with business objectives.",
        responsibilities: [
          "Provide HR guidance to management and employees.",
          "Manage recruitment and talent acquisition.",
          "Oversee performance management processes.",
        ],
        qualifications: [
          "Master's degree in Human Resources or related field.",
          "5+ years of HR experience.",
          "Strong understanding of labor laws and HR best practices.",
        ],
    },
    {
        id: "TECH001",
        department: "Technology & Product",
        title: "Frontend Developer",
        location: "Hyderabad",
        positions: 3,
        description: "Seeking a talented Frontend Developer to build and maintain user interfaces for our web applications.",
        responsibilities: [
          "Develop responsive and user-friendly web applications.",
          "Collaborate with UX/UI designers and backend developers.",
          "Ensure high performance and scalability of frontend components.",
        ],
        qualifications: [
          "Bachelor's degree in Computer Science or related field.",
          "2+ years of experience with React, HTML, CSS, JavaScript.",
          "Proficiency with Tailwind CSS.",
        ],
    },
  ];

  // Group jobs by department for display in categories
  const jobCategories = [
    { icon: IconBuilding, name: "Collections" },
    { icon: IconBuilding, name: "Command Centre" },
    { icon: IconBuilding, name: "Compliance" },
    { icon: IconBuilding, name: "Finance" },
    { icon: IconBuilding, name: "Fleet" },
    { icon: IconBuilding, name: "HR & Administration" },
    { icon: IconBuilding, name: "Marketing" },
    { icon: IconBuilding, name: "Operations" },
    { icon: IconBuilding, name: "Quality & Training" },
    { icon: IconBuilding, name: "Retail" },
    { icon: IconBuilding, name: "Technology & Product" },
  ].map(category => ({
      ...category,
      jobs: allJobs.filter(job => job.department === category.name)
  }));


  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="bg-slate-950 text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Join the Team at SMG Finance</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Be a part of a dynamic and innovative company shaping the future.
          </p>
          {/* Placeholder for hero image - group of people */}
          <div className="w-full max-w-4xl mx-auto h-64 md:h-80 lg:h-120 bg-slate-950 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
            <img src="SMGTeam.jpg" alt="SMG Finance Team" />
          </div>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 opacity-20 transform -skew-y-3 scale-110"></div>
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/0d47a1/ffffff?text=Background')] bg-cover opacity-10"></div>
      </header>

      {/* Main Content Area - Conditional Rendering */}
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        {selectedJob ? (
          // If a job is selected, render JobDetailPage
          <JobDetailPage job={selectedJob} onBack={handleBackToCareers} />
        ) : (
          // Otherwise, render the main Careers page content
          <>
            {/* Why Work at SMG Finance Section (Accordion) */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Why Work at SMG Finance</h2>
              <div className="max-w-3xl mx-auto">
                {whyWorkAtSMGFinance.map((item, index) => (
                  <div key={index} className="border border-blue-200 rounded-lg mb-4 shadow-sm">
                    <button
                      className="flex justify-between items-center w-full p-6 text-left focus:outline-none bg-blue-50 hover:bg-blue-100 transition-colors duration-200 rounded-lg"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                          <item.icon className="text-blue-700 text-xl" />
                        </div>
                        <span className="text-xl font-semibold text-blue-800">{item.title}</span>
                      </div>
                      {openAccordion === index ? (
                        <IconChevronDown className="w-6 h-6 text-blue-700" />
                      ) : (
                        <IconChevronRight className="w-6 h-6 text-blue-700" />
                      )}
                    </button>
                    {openAccordion === index && (
                      <div className="p-6 bg-white text-gray-700 border-t border-blue-200">
                        <p>{item.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Beyond Benefits Section */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Beyond Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                    <IconGift className="text-blue-700 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Birthday Meal Voucher</h3>
                    <p className="text-gray-700">
                      SMG Finance believes in celebrating team members. All permanent and confirmed employees are eligible for a special birthday meal voucher to make their day memorable.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                    <IconBaby className="text-blue-700 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Childbirth Salary Increment</h3>
                    <p className="text-gray-700">
                      The significance of family milestones is valued at SMG Finance. Upon childbirth, all permanent and confirmed employees receive a 5% salary increment, applicable for up to two children.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                    <IconGraduationCap className="text-blue-700 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Development Allowance</h3>
                    <p className="text-gray-700">
                      Investment in personal and professional growth is encouraged. All permanent and confirmed employees are eligible for this allowance, which can be used for educational courses, certifications, gym memberships, hobby courses, or subscriptions to relevant publications. Reimbursement is available anytime during the financial year, tailored to career bonds.
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-100 rounded-full">
                    <IconCalendarStar className="text-blue-700 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Work Anniversary Benefits</h3>
                    <p className="text-gray-700">
                      Dedication and loyalty of employees are recognized at SMG Finance. Special cash rewards are offered upon completion of 2, 3, and 5 years with the company.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Join the Dynamic Team Section (Job Categories) */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Join the Dynamic Team at SMG Finance</h2>
              <p className="text-center text-gray-600 mb-10">
                Open positions can be explored by clicking on the relevant job postings available.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobCategories.map((category, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <category.icon className="text-blue-700 text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-800">{category.name}</h3>
                      </div>
                    </div>
                    {category.jobs.length > 0 ? (
                      <ul className="list-none space-y-2">
                        {category.jobs.map((job) => (
                          <li
                            key={job.id}
                            className="flex justify-between items-center text-blue-700 hover:underline cursor-pointer"
                            onClick={() => handleJobClick(job)} // Attach click handler
                          >
                            <span>{job.title} ({job.location})</span>
                            <IconChevronRight className="w-5 h-5" />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm">No open positions in this category.</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
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

export default CareersPage;
