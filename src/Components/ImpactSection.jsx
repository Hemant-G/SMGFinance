// src/components/ImpactSection.jsx
import React, { useState, useEffect } from 'react';
// import impactBg from '../assets/impact-background.jpg'; // Background image for this section
const ImpactSection = () => {
  const images = [
    'https://t3.ftcdn.net/jpg/12/47/65/74/360_F_1247657474_AChExzUjhbVFuBvkmAz7tqIVgxoYurVf.jpg',
    'https://static.vecteezy.com/system/resources/previews/035/443/843/non_2x/ai-generated-explore-the-intricate-ecosystem-dynamics-of-a-primeval-green-tree-forest-emphasizing-the-interdependence-of-flora-and-fauna-photo.jpg',
    'https://t4.ftcdn.net/jpg/02/77/14/19/360_F_277141994_yd3xghk0Alqm9jJijE9ERcHXWSA9mdWb.jpg',
    'https://macelectricco.com/wp-content/uploads/2022/09/Mac-Electric-Featured-Image-Template-5.png'  
  ];

  const impactStats = [
    {
      value: '74',
      label: '',
      subLabel: 'OEM Partners',
    },
    {
      value: '84',
      label: 'Thousand',
      subLabel: 'Assets Financed',
    },
    {
      value: '84',
      label: 'Thousand',
      subLabel: 'Jobs Created',
    },
    { value: '986', subLabel: 'Cities Reached', gradient: '' },
  ];

  // activeLayer determines which layer (0 or 1) is currently fading IN or fully visible.
  // The other layer will be fading OUT or fully transparent.
  const [activeLayer, setActiveLayer] = useState(0);
  // Store the image URLs for each layer
  const [layerImages, setLayerImages] = useState([images[0], null]); // layerImages[0] for layer 0, layerImages[1] for layer 1

  const handleMouseEnter = (index) => {
    const newImage = images[index];
    // Determine the currently visible image based on activeLayer and its URL in layerImages
    const currentVisibleImage = layerImages[activeLayer];

    if (newImage !== currentVisibleImage) {
      const nextLayer = 1 - activeLayer; // Toggle between 0 and 1
      setLayerImages(prev => {
        const newLayerImages = [...prev];
        newLayerImages[nextLayer] = newImage; 
        return newLayerImages;
      });
      setActiveLayer(nextLayer);
    }
  };

  // Optional: Preload images for smoother transitions
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]); // Rerun if images array changes (though it's static here)

  return (
    <section
      className="py-16 px-20 md:py-24  bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-white"></div> 
      <h2 className="relative z-10 text-4xl font-bold text-center mb-12 text-blue-950"> 
          Tracking Progress with Impact
        </h2>
      {/* Container for background image layers and content */}
      <div className="h-130 container rounded-3xl z-10 relative overflow-hidden"> {/* Removed direct bg image & transition from here */}
        {/* Background Layer 0 */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out"
          style={{ backgroundImage: layerImages[0] ? `url(${layerImages[0]})` : 'none', opacity: activeLayer === 0 ? 1 : 0, zIndex: 1 }}
        />
        {/* Background Layer 1 */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out"
          style={{ backgroundImage: layerImages[1] ? `url(${layerImages[1]})` : 'none', opacity: activeLayer === 1 ? 1 : 0, zIndex: 1 }}
        />
        {/* Content - on top of background layers */}
        <div className="relative z-10 h-full flex flex-row w-full text-center"> {/* z-10 to be above z-1 layers */}
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className={`w-1/4 flex flex-col items-center py-6 hover:bg-gradient-to-r border from-blue-800/50 to-blue-950/50  `} 
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div>
                <p className="text-6xl font-bold">{stat.value}</p>
                {stat.label && <p className="text-xl mt-1">{stat.label}</p>} 
                
              </div>

              {stat.subLabel && (
                <div className="mt-auto">
                  <p className="text-4xl font-bold">{stat.subLabel}</p>
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;