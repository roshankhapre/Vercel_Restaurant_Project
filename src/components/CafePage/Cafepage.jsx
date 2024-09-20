import React from "react";
import CafeCarousel from "./CafeCarousel";
import CafeDiscoverTest from "./CafeDiscoverTest";
import CafeGallery from "./CafeGallery";
import CafeMenuCard from './CafeMenuCard'
import CafeServices from './CafeServices'


const Cafepage = () => {
  return (
    <div>
      <CafeCarousel />
      <CafeDiscoverTest />
      <CafeGallery />
      <CafeServices/>
      <CafeMenuCard/>
    </div>
  );
};

export default Cafepage;
