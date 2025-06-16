import React from 'react';

// Icon for the back button
const IconChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
  </svg>
);

const JobDetailPage = ({ job, onBack }) => {
  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-600 text-xl mb-4">No job details available.</p>
        <button
          onClick={onBack}
          className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 shadow-md"
        >
          Back to Careers
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <button
          onClick={onBack}
          className="mb-8 flex items-center text-blue-700 hover:underline text-lg"
        >
          <IconChevronLeft className="w-6 h-6 mr-2" /> Back to All Jobs
        </button>

        <div className="bg-white p-6 md:p-8 lg:p-12 rounded-xl shadow-lg border border-blue-100">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">{job.title}</h2>
          <p className="text-gray-700 text-lg mb-2"><strong>Department:</strong> {job.department}</p>
          <p className="text-gray-700 text-lg mb-2"><strong>Location:</strong> {job.location}</p>
          <p className="text-gray-700 text-lg mb-4"><strong>Positions Available:</strong> {job.positions}</p>

          <div className="h-64 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-blue-900 text-md font-semibold">Job Specific Content Placeholder</span>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-3">Job Description</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            {job.description}
          </p>

          <h3 className="text-2xl font-semibold text-blue-800 mb-3">Key Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            {job.responsibilities && job.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-blue-800 mb-3">Qualifications</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            {job.qualifications && job.qualifications.map((qual, idx) => (
              <li key={idx}>{qual}</li>
            ))}
          </ul>

          <button className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 shadow-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
