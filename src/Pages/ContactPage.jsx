import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <section className="relative min-h-[300px] bg-blue-950 flex items-center text-white px-4 sm:px-10 lg:px-20 py-12">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-black opacity-70"></div>
        <div className="container mx-auto z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Contact Us
          </h1>
          <p className="font-medium text-base sm:text-lg max-w-2xl">
            You can reach us through various channels. Choose your preferred mode of communication, and we will respond to you as quickly as possible.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 my-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {/* Address */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-gray-200 rounded-full p-2 mb-2">
              <MdLocationOn className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="font-semibold text-blue-900">Address</h3>
            <p className="text-gray-600 text-sm">
              Office 370, Eminent Mall, Hoshiarpur <br />
              146001
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-gray-200 rounded-full p-2 mb-2">
              <MdEmail className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="font-semibold text-blue-900">Email Address</h3>
            <p className="text-gray-600 text-sm">smgfinanceltd@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-gray-200 rounded-full p-2 mb-2">
              <MdPhone className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="font-semibold text-blue-900">Phone Number</h3>
            <p className="text-gray-600 text-sm">+1882 318 706</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
