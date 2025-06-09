import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

function InstructorCard({ name, specialty, imageUrl, social }) {
  const [isHovered, setIsHovered] = useState(false);
  const detailsRef = useRef(null);
  const [detailsHeight, setDetailsHeight] = useState(0);

  useEffect(() => {
    if (detailsRef.current) {
      setDetailsHeight(detailsRef.current.offsetHeight)
    }
  }, []);

  const containerStyle = {
    transform: isHovered ? "translateY(0)" : `translateY(${detailsHeight * 1.2}px)`,
  };

  return (
    <div
      className="relative w-80  mx-2 my-2 overflow-hidden rounded-md shadow-md transition-transform duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto object-cover"
        style={{ maxHeight: "300px" }}
      />
      <div
        className={`absolute bottom-0 left-0 w-full  p-4 transition-all duration-300 flex flex-col items-center ${isHovered? 'bg-blue-950/75': 'bg-white/85'}`}
        style={containerStyle}
      >
        <h4 className={`name font-bold text-xl ${isHovered? 'text-white': 'text-gray-800'}  mb-1`}>
          <a href="#">{name}</a>
        </h4>
        <div ref={detailsRef} className="flex flex-col items-center">
          <span className={`designation text-lg font-semibold text-gray-200 block mb-2`}>
            {specialty}
          </span>
          <ul className="social-links flex space-x-2">
            <li>
              <a href="#" className="text-gray-200 ">
                <FaFacebookF size={18} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 ">
                <FaTwitter size={18} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 ">
                <FaLinkedinIn size={18} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200">
                <FaGooglePlusG size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstructorCard;