import React from 'react';
import InstructorCard from './InstructorCard';

function Team() {
  const instructors = [
    {
      id: 1,
      name: 'Mr Davinder Mohan',
      specialty: 'Managing Director',
      imageUrl: './DavinderMohan.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
    {
      id: 2,
      name: 'Mr Neeraj Gupta',
      specialty: 'Executive Director',
      imageUrl: './NeerajGupta.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
    {
      id: 3,
      name: 'Mr Tanish Gupta',
      specialty: 'Chief Operating Officer',
      imageUrl: './TanishGupta.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
    {
      id: 4,
      name: 'Mr Saurav Mittal',
      specialty: 'Chief Executive Officer',
      imageUrl: './SauravMittal.jpg',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        google: '#',
      },
    },
  ];

  return (
    <div className="bg-gray-200 py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Leadership Team</h2>

      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-6">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
            <InstructorCard
              name={instructor.name}
              specialty={instructor.specialty}
              imageUrl={instructor.imageUrl}
              social={instructor.social}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
