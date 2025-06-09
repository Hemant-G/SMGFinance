// src/components/SocialEconomicSection.jsx
import React from 'react';
// Import your specific images for each card, e.g.:
// import positiveEnv from '../assets/positive-env.jpg';
// import empoweringFin from '../assets/empowering-fin.jpg';

const impactCards = [
  {
    image: '/path/to/your/positive-env.jpg', // image_bce46b.jpg (top left)
    title: 'Positive Environmental Impact',
    description: 'Short description about environmental impact...',
  },
  {
    image: '/path/to/your/empowering-fin.jpg', // image_bce46b.jpg (top middle)
    title: 'Empowering the Financially Excluded',
    description: 'Short description about empowering excluded...',
  },
  {
    image: '/path/to/your/tangible-financial.jpg', // image_bce46b.jpg (top right)
    title: 'Tangible Financial Growth',
    description: 'Short description about financial growth...',
  },
  {
    image: '/path/to/your/inclusive-empowerment.jpg', // image_bce46b.jpg (bottom left)
    title: 'Inclusive Empowerment',
    description: 'Short description about inclusive empowerment...',
  },
  {
    image: '/path/to/your/tier-towns.jpg', // image_bce46b.jpg (bottom middle)
    title: 'Tier 2, 3, and 4 Towns Thriving',
    description: 'Short description about towns thriving...',
  },
  {
    image: '/path/to/your/boosting-gig.jpg', // image_bce46b.jpg (bottom right)
    title: 'Boosting the Gig Economy',
    description: 'Short description about gig economy...',
  },
];

const SocialEconomicSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">
          Driving Positive Social & Economic Change
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialEconomicSection;