import React from "react";
import { assets } from "../assets/assets";

const WhyUs = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 py-5 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:gap-10 ">
        <div className="lg:w-1/2 animate__fadeInLeft animate__animated wow">
          <div className="bg-red-600 rounded-lg p-2 w-32 text-white font-bold text-center my-5">
            K'S Darshan
          </div>
          <div className="text-2xl sm:text-5xl font-bold mb-5">
            WHY K'S DARSHAN
          </div>
          <div className="text-gray-500 line-clamp-3 lg:line-clamp-none ">
            We believe in delivering an unparalleled experience that blends
            exceptional service with a personal touch. Our commitment to quality
            ensures that every dish, drink, and service exceeds expectations,
            creating memorable moments for every guest.
          </div>
          <div className="mt-5 space-y-10">
            {/* Efficiency & Management */}
            <div className="flex gap-5 sm:gap-10">
              <div className="bg-red-600 rounded-full p-4 sm:p-5 flex items-center justify-center w-40 sm:w-auto">
                <img
                  src={assets.productivity}
                  alt="productivity"
                  className="w-10 sm:w-14"
                />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold">
                  Efficiency & Management
                </div>
                <div className="text-sm sm:text-base">
                  We prioritize efficiency and management to ensure smooth
                  operations and exceptional service.
                </div>
              </div>
            </div>
            {/* Effective Team Work */}
            <div className="flex gap-5 sm:gap-10">
              <div className="bg-red-600 rounded-full p-4 sm:p-6 flex items-center justify-center  w-40 sm:w-auto">
                <img src={assets.team} alt="team" className="w-10 sm:w-14" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold">
                  Effective Team Work
                </div>
                <div className="text-sm sm:text-base">
                  Effective teamwork is at the core of our success, ensuring
                  seamless task completion.
                </div>
              </div>
            </div>
            {/* Amazing Growth Flow */}
            <div className="flex gap-5 sm:gap-10">
              <div className="bg-red-600 rounded-full p-4 sm:p-6 flex items-center justify-center  w-40 sm:w-auto">
                <img
                  src={assets.growth}
                  alt="growth"
                  className="w-10 sm:w-14"
                />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold">
                  Amazing Growth Flow
                </div>
                <div className="text-sm sm:text-base">
                  Our continuous evolution ensures we stay ahead, delivering
                  exceptional value and expanding our reach.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 animate__animated wow animate__fadeInRight ">
          <img
            src={assets.Why}
            alt="whyUs"
            className="w-full h-auto rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
