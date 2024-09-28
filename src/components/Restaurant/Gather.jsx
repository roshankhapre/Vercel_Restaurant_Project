import React, { useEffect } from "react";
import { assets } from "../../assets/assets";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const Gather = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className=" mt-5 lg:mx-10">
      <div className="grid lg:grid-cols-2 gap-5 items-center">
        <div className="mx-5 ml-5 lg:ml-20  wow animate__animated animate__slideInLeft">
          <h2 className="bg-red-700 text-white w-48 lg:w-64 p-2 lg:p-1 rounded-lg font-bold mb-3 lg:mb-5 text-sm lg:text-xl">
            K's Darshan You'll Love
          </h2>
          <p className="text-2xl lg:text-5xl font-bold mb-3 lg:mb-5">
            Gather around the Table with Your Family
          </p>
          <p className="text-sm lg:text-base mb-5 text-gray-600">
            Enjoy a delightful culinary experience with your family, crafted to
            bring loved ones together over a hearty, delicious meal. Designed
            for sharing, this variety of our finest dishes is carefully prepared
            with fresh ingredients and rich flavors.
          </p>
          <Link to="/bookingtable">
            {" "}
            <button className="bg-red-700 rounded-lg p-2 text-white font-bold mt-5 animate-bounce hover:animate-none flex items-center">
              {" "}
              BOOK A TABLE <ArrowForwardIcon className="ml-2" />
            </button>
          </Link>
        </div>
        <div className="my-5 lg:my-10  wow animate__animated animate__slideInRight ">
          <img
            src={assets.Gather}
            alt="family gathering"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Gather;
