import React from "react";
import { cafeImages } from "../../assets/assets";

const CafeDiscover = [
  {
    id: 1,
    img: cafeImages.cafeTest1,
    description: "Come And Taste Our Delicious Food",
  },
  {
    id: 2,
    img: cafeImages.cafeTest2,
    description: "Experience the Best Ambiance",
  },
  {
    id: 3,
    img: cafeImages.cafeTest3,
    description: "Savor the Flavor of Fresh Ingredients",
  },
  {
    id: 4,
    img: cafeImages.cafeTest4,
    description: "A Delight in Every Bite",
  },
];

const CafeDiscoverTest = () => {
  return (
    <div className="w-full bg-gray-100 flex flex-col items-center py-10">
      {/* Heading Section */}
      <div className="mt-10 my-10">
        <h2 className="text-white bg-gradient-to-r from-pink-400 to-pink-600 text-2xl sm:text-3xl md:text-4xl px-5 sm:px-10 py-3 sm:py-5 rounded-lg text-center shadow-lg">
          Discover Your Taste In K's Darshan
        </h2>
      </div>

      {/* Subtitle Section */}
      <div className="px-5 md:px-0 text-center">
        <h2 className="my-5 text-pink-500 font-bold text-xl sm:text-2xl md:text-4xl">
          WE PROVIDE GOOD FOOD FOR YOUR FAMILY!
        </h2>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row w-11/12 lg:w-9/12 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: Grid of Small Images */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 sm:p-8">
          {CafeDiscover.map((cafeDiscover) => (
            <div
              key={cafeDiscover.id}
              className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <img
                src={cafeDiscover.img}
                alt={`Cafe ${cafeDiscover.id}`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mb-4"
              />
              <p className="text-gray-700 font-semibold text-center text-sm sm:text-base">
                {cafeDiscover.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Main Discovery Image */}
        <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
          <img
            src={cafeImages.cafeDiscover}
            alt="Cafe Discover"
            className="w-full h-64 sm:h-80 md:h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CafeDiscoverTest;
