import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-400 py-16 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Grievance Redressal */}
        <div className="bg-secondary p-6 rounded-lg mb-12 border border-gray-700">
          <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Customer Grievance Redressal</h3>
          <p className="text-sm mb-4">
            Our dedicated customer service team is here to assist you with any concerns or queries you may have. You can reach them via email of <a href="mailto:smgfinanceltd@gmail.com" className="text-primary hover:underline">smgfinanceltd@gmail.com</a> or by calling <a href="tel:1882318706" className="text-primary hover:underline">1882318706</a>. If the initial resolution does not meet your expectations, our Grievance Redressal Officer is available to address escalated matters. The details below are:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-white">Nodal Officer & Grievance Centre</p>
              <p>Ms. Payal Malini</p>
            </div>
            <div>
              <p className="font-semibold text-white">Contact</p>
              <p>1882318706</p>
            </div>
            <div>
              <p className="font-semibold text-white">Email</p>
              <p>smgfinanceltd@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-white">Address</p>
              <p>Office 370 , Eminent Mall , Hoshiarpur 146001</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Address */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/smglogo.jpg" alt="SMG FINANCE Logo" className="h-8" /> 
            </div>
            <p className="text-white text-lg font-semibold mb-2">SMG FINANCE</p>
            <p className="text-sm">Office 370 , Eminent Mall , Hoshiarpur 146001</p>
            
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">SMG Finance Capital</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Know Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Room</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ask Viraat FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">SMG Finance Lending</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SMG Finance Mobility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SMG Financesure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SMGioT</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SMGshaala</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dealer Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apply for Loan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zimmedaar Ki Saawari</a></li>
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Equal Opportunity Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Information Security Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RBI Sachet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NACH Mandate Cancellation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Annual Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and App Store links */}
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-xs">
          <p className="mb-4">© 2023 SMG FINANCE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;