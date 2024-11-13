import React from "react";
import RoofTopCarousel from "./RoofTopCarousel";
import AboutRoofTop from "./AboutRoofTop";
import AboutRoofTop2 from "./AboutRoofTop2";
import BookingTable from "../BookingTable/BookingTable";

const RooftopPage = () => {
  return (
    <div>
      <RoofTopCarousel />
      <AboutRoofTop />
      <AboutRoofTop2 />
      <BookingTable/>
    </div>
  );
};

export default RooftopPage;
