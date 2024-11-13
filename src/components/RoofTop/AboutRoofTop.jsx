import React from "react";
import { assets } from "../../assets/assets";

const AboutRoofTop = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 py-10">
      {/* Text Section */}
      <div className="flex flex-col justify-center lg:ml-10 animate__fadeInLeft wow animate__animated">
        <div className="text-white font-bold bg-red-700 p-3 lg:p-4 w-fit text-xl lg:text-2xl rounded-xl mb-4 lg:mb-6">
          Welcome to K'Darshan
        </div>
        <p className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-8">
          Where the sky meets your plate.
        </p>
        <p className="text-base lg:text-lg">
          Step into an elevated dining experience like no other. Nestled above
          the city skyline, our rooftop offers breathtaking views, a vibrant
          ambiance, and culinary delights crafted to perfection. Whether it’s a
          casual evening with friends or a special occasion, K'Darshan is the
          perfect destination to dine, unwind, and savor the moment.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center wow animate__fadeInRight animate__animated">
        <img
          src={assets.friendsHandout}
          alt="Friends dining"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutRoofTop;
