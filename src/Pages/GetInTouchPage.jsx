import React, { useState } from 'react';
import locationsData from './locations'; // Import the locations data

const GetInTouchPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    contactNumber: '',
    country: 'India', // Default to India as per screenshot
    state: '',
    city: '',
    userType: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add your form submission logic here (e.g., API call)
    // For now, it just logs the data to the console.
    alert('Thank you for your message! (Check console for form data)');
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      fullName: '',
      emailAddress: '',
      contactNumber: '',
      country: 'India',
      state: '',
      city: '',
      userType: '',
      message: '',
    });
    console.log('Form reset.');
  };

  // Extract states and cities from locationsData
  const locationObject = locationsData[0]; // The data is an array with one object
  const states = ['Select Your State', ...Object.keys(locationObject)];
  const cities = { 'Select Your State': ['Select Your City'], ...locationObject };

  const userTypes = ['Select',
    'A Media Personnel',
    'A SMG Finance Customer',
    'A Dealer',
    'An OEM Partner',
    'A Fleet',
    'Others',
    'Looking For A Job',
    'Looking for SMG Finance insurance',];

  return (
    <div className="min-h-screen bg-gradient-to-l from-slate-800 to-slate-950 flex items-center justify-center py-10 px-4 font-inter">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Fill in the details here</h2>
        <p className="text-gray-600 mb-8">
          Email addresses will not be published. Mandatory fields are marked <span className="text-red-500">*</span>
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="md:col-span-1">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Address */}
          <div className="md:col-span-1">
            <label htmlFor="emailAddress" className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="md:col-span-1">
            <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-semibold mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel" // Using tel for phone numbers
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter Your Contact Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Country */}
          <div className="md:col-span-1">
            <label htmlFor="country" className="block text-gray-700 text-sm font-semibold mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3 3 3-3' stroke='%234B5563' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
              }}
              required
            >
              <option value="India">India</option>
            </select>
          </div>

          {/* State */}
          <div className="md:col-span-1">
            <label htmlFor="state" className="block text-gray-700 text-sm font-semibold mb-2">
              State <span className="text-red-500">*</span>
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3 3 3-3' stroke='%234B5563' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
              }}
              required
            >
              {states.map((s, index) => (
                <option key={index} value={s === 'Select Your State' ? '' : s} disabled={s === 'Select Your State'}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div className="md:col-span-1">
            <label htmlFor="city" className="block text-gray-700 text-sm font-semibold mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3 3 3-3' stroke='%234B5563' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
              }}
              required
              disabled={!formData.state || formData.state === 'Select Your State'}
            >
              {cities[formData.state]?.map((c, index) => (
                <option key={index} value={c === 'Select Your City' ? '' : c} disabled={c === 'Select Your City'}>
                  {c}
                </option>
              )) || <option value="">Select Your City</option>}
            </select>
          </div>

          {/* Are you a/an? */}
          <div className="md:col-span-1">
            <label htmlFor="userType" className="block text-gray-700 text-sm font-semibold mb-2">
              Are you a/an? <span className="text-red-500">*</span>
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3e%3cpath d='M7 7l3 3 3-3' stroke='%234B5563' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
              }}
              required
            >
              {userTypes.map((type, index) => (
                <option key={index} value={type === 'Select' ? '' : type} disabled={type === 'Select'}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-1">
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end space-x-4 mt-6">
            <button
              type="button" // Use type="button" to prevent form submission
              onClick={handleReset}
              className="px-8 py-3 rounded-full border-2 border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Reset</span>
            </button>
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-800 cursor-pointer transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouchPage;
