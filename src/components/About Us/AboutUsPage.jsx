import React from "react";
import AboutUs from "./AboutUs";
import AboutUsFood from "./AboutUsFood";
import AboutUsGallery from "./AboutUsGallery";
import BookingForm from "../BookingForm";

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs />
      <AboutUsFood />
      <AboutUsGallery />
      <BookingForm/>
    </div>
  );
};

export default AboutUsPage;
