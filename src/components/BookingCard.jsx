import React from "react";
import { selectedAssets } from "../assets/assets";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const servicesBooking = [
  {
    id: 1,
    title: "Cafe Services",
    description:
      "Relax and enjoy premium coffees, freshly baked pastries, and light meals in a cozy atmosphere.",
    img: selectedAssets.cafe5,
    link: "/cafe",
  },
  {
    id: 2,
    title: "Restaurant Services",
    description:
      "Savor meticulously crafted dishes in an elegant setting, perfect for every occasion.",
    img: selectedAssets.restaurantimage,
    link: "/restaurant",
  },
  {
    id: 3,
    title: "Rooftop Services",
    description:
      "Dine under the stars with breathtaking city views and a gourmet menu tailored for you.",
    img: selectedAssets.rooftop,
    link: "/rooftop",
  },
  {
    id: 4,
    title: "Hotel Services",
    description:
      "Experience ultimate comfort in our plush rooms, designed for relaxation and rejuvenation.",
    img: selectedAssets.hotelroom1,
    link: "/hotel",
  },
];

const BookingCard = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-12 px-4 sm:px-8 md:px-10 lg:px-20 ">
      {/* Section Title */}
      <div className="text-center mb-12 wow animate__animated animate__bounceInDown">
        <h2 className="inline-block text-3xl sm:text-4xl lg:text-5xl font-semibold text-white bg-red-700 py-2 px-6 rounded-lg shadow-lg ">
          Our Services
        </h2>
        <div className="mt-10">
          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Explore Our Services
          </h4>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 wow animate__animated animate__fadeInUp">
        {servicesBooking.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between border p-4 sm:p-6 rounded-xl shadow-lg bg-white bg-opacity-80 backdrop-filter transition-transform duration-300 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative mb-4">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-36 sm:h-48 md:h-52 lg:h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 ease-in-out rounded-lg"></div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-4 py-2 md:py-4">
              {service.description}
            </p>

            {/* Button */}
            <div className="flex justify-center mt-auto py-2">
              <Link to={service.link}>
                <button className="flex items-center justify-center gap-2 text-white text-sm sm:text-lg bg-red-500 hover:bg-red-700 px-4 py-2 sm:px-6 sm:py-3 rounded-md shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105">
                  Read More
                  <ArrowForwardIcon className="ml-2 transform transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCard;
