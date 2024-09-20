import React from "react";
import { assets } from "../assets/assets";
import CallIcon from "@mui/icons-material/Call";

const Timing = () => {
  return (
    <div className="relative  sm:mt-0 ">
      {/* Background Image */}
      <img
        src={assets.bgTiming}
        alt="Background"
        className="w-full h-auto object-cover "
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center  px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="bg-white bg-opacity-90 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-2xl">
          {/* Heading */}
          <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 text-center">
            Opening Time
          </h2>

          {/* Divider */}
          <div className="border-t-4 border-red-600 w-12 sm:w-16 md:w-20 lg:w-24 mb-4 sm:mb-6 lg:mb-8 mx-auto"></div>

          {/* Hours Information */}
          <div className="text-gray-700 text-center">
            <p className="text-base sm:text-xl md:text-2xl font-semibold mb-2">
              Monday to Sunday
            </p>
            <p className="text-base sm:text-xl md:text-2xl mb-4">
              11:00 AM - 11:00 PM
            </p>
            <button className="flex items-center border border-red-700 text-red-700 rounded-md px-4 py-2 mt-4 sm:mt-6 lg:mt-8 hover:bg-red-100 transition">
              <CallIcon className="mr-2" /> 07947425984
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timing;
