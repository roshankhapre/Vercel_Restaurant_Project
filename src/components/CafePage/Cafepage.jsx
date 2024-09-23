import React from "react";
import CafeCarousel from "./CafeCarousel";
import CafeDiscoverTest from "./CafeDiscoverTest";
import CafeGallery from "./CafeGallery";
import CafeMenuCard from './CafeMenuCard'
import CafeServices from './CafeServices'
import BookingForm from "../BookingForm";

const Cafepage = () => {
  return (
    <div>
      <CafeCarousel />
      <CafeDiscoverTest />
      <CafeGallery />
      <CafeServices/>
      <CafeMenuCard/>
      <BookingForm/>
    </div>
  );
};

export default Cafepage;
