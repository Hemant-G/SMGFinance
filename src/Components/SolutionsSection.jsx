// src/components/SolutionsSection.jsx
import React from 'react';
// Import icons from @heroicons/react/24/outline for most icons
import { CurrencyDollarIcon, TruckIcon, ShieldCheckIcon, WifiIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
// Import LeafIcon from react-icons/fa because it's not in Heroicons
import { FaLeaf } from 'react-icons/fa';


const solutions = [
  {
    icon: CurrencyDollarIcon, // Heroicon
    title: 'Revfin Lending',
    description: 'Quick, affordable loans for commercial EVs are provided, promoting green growth and mobility for underserved communities, all in just 16 minutes.',
  },
  {
    icon: TruckIcon, // Heroicon
    title: 'Revfin Mobility',
    description: 'Fleet acceleration is made easy with financing, insurance, telematics, battery swaps, OEM partnerships, and nationwide coverage.',
  },
  {
    icon: ShieldCheckIcon, // Heroicon
    title: 'Revfinsure',
    description: 'IRDAI approved Revfinsure lets EV loan customers compare top policies, helping them secure the best coverage for their green journey.',
  },
  {
    icon: WifiIcon, // Heroicon
    title: 'RevIoT', // Closest to a satellite/connectivity icon
    description: 'Telematics technology enhances EV performance by offering driver insights, health alerts, safety measures, and emergency response features.',
  },
  {
    icon: AcademicCapIcon, // Heroicon (for education/tech hub)
    title: 'Revshaala',
    description: 'The tech hub in Delhi revitalizes EVs and batteries, extending their life and reducing waste for a more sustainable future.',
  },
  {
    icon: FaLeaf, // Now using FaLeaf from react-icons/fa
    title: 'Revfin Ecosystem',
    description: 'A greener future is being built with strong partners in charging infrastructure, green truck upgrades, and battery swapping, revolutionising the industry.',
  },
];

const SolutionsSection = () => {
  return (
    <section className="bg-white py-16 pt-32 md:pt-24 -mt-24 md:-mt-12 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">
          Solutions For Eco-Friendly Journeys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-blue-200 shadow-md border border-gray-200 hover:border hover:border-blue-500 ">
                {/* Render the icon component and apply Tailwind classes */}
                <div className=" text-blue-900 mb-4 ">
                  {/* Heroicons typically need explicit size classes (e.g., w-12 h-12)
                      React Icons often inherit font-size (text-4xl) */}
                  {IconComponent.name && IconComponent.name.startsWith('Fa') ? ( // Check if it's a Font Awesome icon
                    <IconComponent className="text-4xl" /> // Inherit font size
                  ) : (
                    <IconComponent className="w-12 h-12" /> // Explicitly size Heroicons
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{solution.description}</p>
                <a href="#" className=" font-medium flex items-center hover:underline">
                  Read More <span className="ml-2 text-xl">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;