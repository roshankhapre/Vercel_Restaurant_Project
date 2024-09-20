import React from "react";
import { hotelRoomImages } from "../../assets/assets";

const hotelRoom = [
  {
    id: 1,
    img: hotelRoomImages.hotelroom1,
  },
  {
    id: 2,
    img: hotelRoomImages.restaurantimage,
  },
  {
    id: 3,
    img: hotelRoomImages.hotelroom2,
  },
];

const HotelRooms = () => {
  return (
    <div className="relative w-full pb-20  h-screen bg-gradient-to-t from-gray-100 via-gray-200 to-red-100 flex flex-col items-center justify-center px-4 md:px-8">
      {/* Rooms View Heading */}
      <div className="absolute top-10 w-full flex justify-center ">
        <h1 className="inline-block text-white  p-4 md:p-6 bg-green-700 rounded-lg text-3xl md:text-4xl font-bold shadow-xl tracking-wide">
          ROOMS VIEW
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 w-full justify-between  items-center pt-24 md:pt-20 flex-col-reverse md:flex-row">
        {/* Left Side: Text Section */}
        <div className="flex-1 space-y-4  text-center md:text-left py-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 py-4 md:py-6">
            RELAX IN OUR ROOMS
          </h2>
          <h3 className="text-lg md:text-2xl text-gray-600 max-w-md mx-auto md:mx-0">
            Experience the comfort and breathtaking views in our luxurious rooms
            and restaurant.
          </h3>
          <button className="bg-green-700 hover:bg-green-800 text-white text-md md:text-lg rounded-lg px-4 md:px-6 py-2 md:py-3 mt-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            About Us
          </button>
        </div>

        {/* Right Side: Image Section */}
        <div className=" flex-1 relative flex items-center justify-center h-full md:h-auto">
          {hotelRoom.map((room, index) => (
            <div
              key={room.id}
              className={`absolute w-56 h-56 md:w-80 md:h-80 transform transition-transform duration-500 ${
                index === 0
                  ? "top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:top-0 md:left-12"
                  : index === 1
                  ? "top-20 md:top-16 md:left-72"
                  : "bottom-0 md:-bottom-12 md:left-36"
              }`}
              style={{
                zIndex: 10 - index,
                transform: `translateY(${index * 20}px)`,
              }}
            >
              <img
                src={room.img}
                alt={`Room ${room.id}`}
                className="w-60 h-60 object-cover rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelRooms;
