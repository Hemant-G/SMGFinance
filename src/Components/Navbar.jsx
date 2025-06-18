import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router"; 

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

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Inline SVG for dropdown arrow
  const DropdownArrowIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
    </svg>
  );

  // Inline SVG for menu icon (hamburger)
  const MenuIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
    </svg>
  );

  // Inline SVG for close icon (X)
  const CloseIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
    </svg>
  );


  return (
    <header className="bg-slate-900 top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 md:px-10 sticky">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Using a placeholder image with placehold.co, remember to replace with your actual logo */}
            <img
              src="https://placehold.co/40x40/0A2342/FFFFFF?text=SMG"
              alt="SMG Logo"
              className="h-10 sm:h-12 rounded-md"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/CCCCCC/333333?text=Logo" }} // Fallback image
            />
            <span className="text-white text-2xl sm:text-3xl font-bold ml-2 font-inter">FINANCE</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-3xl focus:outline-none">
            {isMobileMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-4 xl:space-x-8 text-white font-inter items-center">
          <li>
            <Link to="/" className="hover:text-blue-400 transition-colors flex items-center py-2">
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
              className="hover:text-blue-400 transition-colors flex items-center py-2"
            >
              About Us <DropdownArrowIcon className="w-6 h-6" />
            </Link>
            {isAboutDropdownOpen && (
              <div
                ref={aboutDropdownRef}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col space-y-2 min-w-[200px]"
              >
                <a
                  href="/about-us#who-we-are"
                  className="block text-white hover:text-blue-400 transition-colors"
                >
                  Who We Are
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
              className="hover:text-blue-400 transition-colors flex items-center py-2"
            >
              Sustainable Mobility Solutions{" "}
              <DropdownArrowIcon className="w-6 h-6" />
            </Link>

            {isMobilityDropdownOpen && (
              <div
                ref={mobilityDropdownRef}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 min-w-[500px]"
              >
                <div className="flex-1 space-y-2">
                  <Link
                    to="/lending"
                    className=" text-white hover:text-blue-400 transition-colors  flex items-center justify-between group"
                  >
                    EV Loans - SMG Lending
                    <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    to="/ev-fleet"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Fleet - SMG Mobility
                  </Link>
                  <Link
                    to="/ev-insurance"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Insurance - SMGsure
                  </Link>
                  <Link
                    to="/ev-telematics"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Telematics - SMGIoT
                  </Link>
                  <Link
                    to="/ev-workshop"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Workshop - SMGshaala
                  </Link>
                  <Link
                    to="/ev-ecosystem"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    EV Ecosystem Development
                  </Link>
                </div>

                <div className="flex-1 space-y-2 border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-8">
                  <Link
                    to="/two-wheeler-loan"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    Electric Two Wheeler Loan
                  </Link>
                  <Link
                    to="/rickshaw-loan"
                    className="block text-white hover:text-blue-400 transition-colors"
                  >
                    Electric Rickshaw Loan
                  </Link>
                  <Link
                    to="three-wheeler-loan"
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
              className="hover:text-blue-400 transition-colors flex items-center py-2"
            >
              Resources <DropdownArrowIcon className="w-6 h-6" />
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
          <li>
            <Link
              to="/contact-us"
              className="hover:text-blue-400 transition-colors flex items-center py-2"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Get In Touch Button */}
        <Link className="hidden lg:flex bg-blue-950 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-800 transition-colors items-center font-inter"
          to={"/get-in-touch"}>
          Get In Touch <span className="ml-2">&rarr;</span>
        </Link>

      </nav>

      {/* Mobile Menu - Absolutely Positioned */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 shadow-lg z-40 py-4">
          <ul className="flex flex-col items-center space-y-4 text-white font-inter">
            {/* Ensure all list items take full width and center their content */}
            <li className="w-full">
              <Link to="/" className="block w-full text-center hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>

            {/* About Us Mobile */}
            <li className="w-full"> {/* Ensure li takes full width */}
              <details className="group w-full"> {/* Ensure details takes full width */}
                <summary className="hover:text-blue-400 transition-colors flex items-center justify-center py-2 cursor-pointer w-full">
                  About Us <DropdownArrowIcon className="w-6 h-6 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="bg-slate-700 py-2">
                  <a href="/about-us#who-we-are" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Who We Are</a>
                  <a href="/about-us#mission-and-vision" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Mission and Vision</a>
                  <a href="/about-us#investors-and-lenders" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Investors & Lenders</a>
                </div>
              </details>
            </li>

            {/* Sustainable Mobility Solutions Mobile */}
            <li className="w-full"> {/* Ensure li takes full width */}
              <details className="group w-full"> {/* Ensure details takes full width */}
                <summary className="hover:text-blue-400 transition-colors flex items-center justify-center py-2 cursor-pointer w-full">
                  Sustainable Mobility Solutions <DropdownArrowIcon className="w-6 h-6 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="bg-slate-700 py-2">
                  <Link to="/lending" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>EV Loans - SMG Lending</Link>
                  <Link to="/ev-fleet" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>EV Fleet - SMG Mobility</Link>
                  <Link to="/ev-insurance" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>EV Insurance - SMGsure</Link>
                  <Link to="/ev-telematics" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>EV Telematics - SMGIoT</Link>
                  <Link to="/ev-workshop" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>EV Workshop - SMGshaala</Link>
                  <Link to="/ev-ecosystem" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>EV Ecosystem Development</Link>
                  <Link to="/two-wheeler-loan" className="block py-1 mt-2 border-t border-slate-600 pt-2 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Electric Two Wheeler Loan</Link>
                  <Link to="/rickshaw-loan" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Electric Rickshaw Loan</Link>
                  <Link to="/three-wheeler-loan" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Electric Three Wheeler Loan</Link>
                </div>
              </details>
            </li>

            {/* Resources Mobile */}
            <li className="w-full"> {/* Ensure li takes full width */}
              <details className="group w-full"> {/* Ensure details takes full width */}
                <summary className="hover:text-blue-400 transition-colors flex items-center justify-center py-2 cursor-pointer w-full">
                  Resources <DropdownArrowIcon className="w-6 h-6 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="bg-slate-700 py-2">
                  <Link to="/media-room" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Media Room</Link>
                  <Link to="/blogs" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
                  <Link to="/glossary" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Glossary</Link>
                  <Link to="/dealer-network" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Dealer Network</Link>
                  <Link to="/partners" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Partners</Link>
                  <Link to="/careers" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                  <Link to="/testimonials" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
                  <Link to="/ev-powering-india-podcast" className="block py-1 text-white hover:text-blue-400 transition-colors text-center" onClick={() => setIsMobileMenuOpen(false)}>EV Powering India Podcast</Link>
                </div>
              </details>
            </li>

            <li className="w-full"> {/* Ensure li takes full width */}
              <Link to="/contact-us" className="block w-full text-center hover:text-blue-400 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li className="w-full flex justify-center"> {/* Ensure li takes full width and centers its child */}
              <Link
                to="/get-in-touch"
                className="bg-blue-950 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-blue-800 transition-colors flex items-center font-inter mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch <span className="ml-2">&rarr;</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
