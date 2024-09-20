import React from "react";
import HotelCarosel from "./HotelCarousel";
import HotelServices from "./HotelServices";
import HotelRooms from "./HotelRooms";

const HotelPage = () => {
  return (
    <div>
      <HotelCarosel />
      <HotelServices />
      <HotelRooms />
    </div>
  );
};

export default HotelPage;
