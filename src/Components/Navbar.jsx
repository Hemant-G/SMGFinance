import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router"; 
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  // State and refs for Sustainable Mobility Solutions dropdown
  const [isMobilityDropdownOpen, setIsMobilityDropdownOpen] = useState(false);
  const mobilityDropdownRef = useRef(null);
  const mobilityTriggerRef = useRef(null);
  const mobilityHideTimeoutRef = useRef(null);

  // State and refs for About Us dropdown
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const aboutTriggerRef = useRef(null);
  const aboutHideTimeoutRef = useRef(null);

  // State and refs for Resources dropdown
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const resourcesDropdownRef = useRef(null);
  const resourcesTriggerRef = useRef(null);
  const resourcesHideTimeoutRef = useRef(null);

  // --- Handlers for Sustainable Mobility Solutions dropdown ---
  const handleMobilityMouseEnter = useCallback(() => {
    clearTimeout(mobilityHideTimeoutRef.current);
    setIsMobilityDropdownOpen(true);
  }, []);

  const handleMobilityMouseLeave = useCallback(() => {
    mobilityHideTimeoutRef.current = setTimeout(() => {
      setIsMobilityDropdownOpen(false);
    }, 200);
  }, []);

  // --- Handlers for About Us dropdown ---
  const handleAboutMouseEnter = useCallback(() => {
    clearTimeout(aboutHideTimeoutRef.current);
    setIsAboutDropdownOpen(true);
  }, []);

  const handleAboutMouseLeave = useCallback(() => {
    aboutHideTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 200);
  }, []);

  // --- Handlers for Resources dropdown ---
  const handleResourcesMouseEnter = useCallback(() => {
    clearTimeout(resourcesHideTimeoutRef.current);
    setIsResourcesDropdownOpen(true);
  }, []);

  const handleResourcesMouseLeave = useCallback(() => {
    resourcesHideTimeoutRef.current = setTimeout(() => {
      setIsResourcesDropdownOpen(false);
    }, 200);
  }, []);

  // Effect to close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check for Mobility dropdown
      if (
        mobilityDropdownRef.current &&
        !mobilityDropdownRef.current.contains(event.target) &&
        mobilityTriggerRef.current &&
        !mobilityTriggerRef.current.contains(event.target)
      ) {
        setIsMobilityDropdownOpen(false);
      }
      // Check for About Us dropdown
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target) &&
        aboutTriggerRef.current &&
        !aboutTriggerRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
      }
      // Check for Resources dropdown
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target) &&
        resourcesTriggerRef.current &&
        !resourcesTriggerRef.current.contains(event.target)
      ) {
        setIsResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-slate-900 top-0 left-0 right-0 z-50 py-4 px-10 sticky">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center"> 
          <Link to="/" className="flex items-center">
            <img src="/smglogo.jpg" alt="SMG Logo" className="h-12 rounded-md" /> {/* Placeholder image for SMG Logo */}
            <span className="text-white text-3xl font-bold ml-2 font-inter">FINANCE</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-white font-inter">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>

          {/* About Us Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
            ref={aboutTriggerRef}
          >
            <Link
              to="/about-us"
              className="hover:text-blue-400 transition-colors flex items-center"
            >
              About Us <RiArrowDropDownLine className="text-3xl" />

            </Link>
            {isAboutDropdownOpen && (
              <div
                ref={aboutDropdownRef}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col space-y-2 min-w-[200px]"
              >
                {/* Changed Link to a and to to href */}
                <a
                  href="/about-us#who-we-are"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Who We Are
                </a>
                <a
                  href="/about-us#our-journey"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Our Journey
                </a>
                <a
                  href="/about-us#mission-and-vision"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Mission and Vision
                </a>
                <a
                  href="/about-us#investors-and-lenders"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Investors & Lenders
                </a>
                <a
                  href="/about-us"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Great Place to Work
                </a>
                <a
                  href="/about-us#sdg-goals"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  SDG Goals
                </a>
              </div>
            )}
          </li>


          {/* Sustainable Mobility Solutions Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleMobilityMouseEnter}
            onMouseLeave={handleMobilityMouseLeave}
            ref={mobilityTriggerRef}
          >
            <Link
              to="/lending"
              className="hover:text-blue-400 transition-colors flex items-center"
            >
              Sustainable Mobility Solutions{" "}
              <RiArrowDropDownLine className="text-3xl" />
            </Link>


            {isMobilityDropdownOpen && (
              <div
                ref={mobilityDropdownRef}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 min-w-150"
              >
                <div className="flex-1 space-y-2">
                  <Link
                    to="/lending"
                    className=" text-white hover:text-blue-400 transition-colors  flex items-center justify-between group"
                  >
                    EV Loans - Revfin Lending
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    to="/ev-fleet"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Fleet - Revfin Mobility
                  </Link>
                  <Link
                    to="/ev-insurance"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Insurance - Revfinsure
                  </Link>
                  <Link
                    to="/ev-telematics"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Telematics - RevIoT
                  </Link>
                  <Link
                    to="/ev-workshop"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Workshop - Revshaala
                  </Link>
                  <Link
                    to="/ev-ecosystem-development"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Ecosystem Development
                  </Link>
                </div>

                <div className="flex-1 space-y-2 border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-8">
                  <Link
                    to="/electric-two-wheeler-loan"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    Electric Two Wheeler Loan
                  </Link>
                  <Link
                    to="/electric-rickshaw-loan"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    Electric Rickshaw Loan
                  </Link>
                  <Link
                    to="/electric-three-wheeler-loan"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    Electric Three Wheeler Loan
                  </Link>
                </div>
              </div>
            )}
          </li>
          
          {/* Resources Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleResourcesMouseEnter}
            onMouseLeave={handleResourcesMouseLeave}
            ref={resourcesTriggerRef}
          >
            <Link
              to="/resources"
              className="hover:text-blue-400 transition-colors flex items-center"
            >
              Resources <RiArrowDropDownLine className="text-3xl" />
            </Link>
            {isResourcesDropdownOpen && (
              <div
                ref={resourcesDropdownRef}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col space-y-2 min-w-[250px]"
              >
                <Link
                  to="/media-room"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Media Room
                </Link>
                <Link
                  to="/blogs"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  to="/glossary"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Glossary
                </Link>
                <Link
                  to="/dealer-network"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Dealer Network
                </Link>
                <Link
                  to="/partners"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Partners
                </Link>
                <Link
                  to="/careers"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  to="/testimonials"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  to="/ev-powering-india-podcast"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  EV Powering India Podcast
                </Link>
              </div>
            )}
            
          </li>
          <Link
                  to="/contact-us"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
        </ul>

        {/* Get In Touch Button */}
        <button className=" lg:block bg-blue-950 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-slate-900 transition-colors flex items-center font-inter">
          Get In Touch <span className="ml-2">&rarr;</span>
        </button>

        {/* Mobile menu icon (hamburger) - Hidden on large screens */}
        <div className="lg:hidden text-white text-2xl font-inter">☰</div>
      </nav>
    </header>
  );
};

export default Navbar;
