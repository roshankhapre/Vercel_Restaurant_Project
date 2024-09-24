import React from "react";
import chat_icon from "../assets/chat-icon.webp";
import footer_img from "../assets/footer-img.webp";

import InstagramIcon from "@mui/icons-material/Instagram";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img_1 from "../assets/chocolateShake.webp";
import img_2 from "../assets/MintMojito.webp";
import img_3 from "../assets/hazeinut.webp";
import img_4 from "../assets/hotAndSourSoup.webp";
import img_5 from "../assets/lemonCoriderSoup.jpeg";
import img_6 from "../assets/matar paneer.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className=" bg-neutral-900">
        <div className="flex flex-col md:flex-row justify-around p-10">
          <div className=" hidden lg:block text-center md:text-left text-2xl mb-6 md:mb-0">
            <p className="text-gray-400">
              Are You Want To Make A Reservation,
              <span className="text-white underline hover:text-red-700 transition-colors duration-300">
                {" "}
                Get Your Table
              </span>
            </p>
          </div>
          <div className="text-white ml-10 ">
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src={chat_icon}
                  alt="Chat Icon"
                  className="w-12 h-12"
                  loading="lazy"
                />
              </div>
              <div className="font-semibold ">
                <span>Have Question?</span>
                <h2 className="text-gray-400 text-2xl">
                 CONTACT{" "}
                 <span className="text-yellow-50 hover:text-red-700 transition-colors duration-300">
                    <a href="tel:+9516997144">+9516997144</a>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="text-white py-12 bg-cover bg-center px-5"
        style={{ backgroundImage: `url(${footer_img})` }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="text-lg">
              <li className="mb-2 transition-colors duration-300">
                <a
                  href="https://goo.gl/maps/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KS Darsan Cafe, 1 VIP Paraspar Nagar, Gopur Square, Indore -
                  452009 (Narmada Square)
                </a>
              </li>
              <li className="mb-2 w-32 hover:text-red-700 transition-colors duration-300">
                <a href="tel:+9516997144">+9516997144</a>
              </li>
              <li className="mb-2 hover:text-red-700 w-64 transition-colors duration-300">
                booking@webexample.com
              </li>
            </ul>
            <div className="flex mt-4 space-x-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 p-2 rounded-full text-white hover:bg-red-700 transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://wa.me/+9516997144"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-2 rounded-full text-white hover:bg-red-700 transition-colors duration-300"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Food Menu */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">FOOD MENU</h3>
            <ul className="space-y-2 text-lg">
             <Link to='/CafeMenuCard'>
             <li className="hover:text-red-700  w-32 transition-colors duration-300 cursor-pointer">
                → Cafe Menu
              </li>
             </Link>
             <Link to='/RestaurantMenuCard'>
             <li className="hover:text-red-700  w-48 transition-colors duration-300 cursor-pointer">
                → Restaurant Menu
              </li>
             </Link>
             <Link to='/menu'>
             <li className="hover:text-red-700  w-28 transition-colors duration-300 cursor-pointer">
                → All Menu
              </li>
             </Link>
             
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">WORKING HOURS</h3>
            <ul className="text-lg">
              <li>Monday - Sunday 11:00am - 11:00pm </li>
             
              <li className="mt-4">* Happy hour 17:00 - 21:00</li>
            </ul>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">MEALS</h3>
            <div className="grid grid-cols-3 gap-2">
              {[img_1, img_2, img_3, img_4, img_5, img_6].map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 duration-400">
                    <p className="text-white text-lg">
                      <InstagramIcon />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-neutral-900">
        <div className="flex flex-col md:flex-row justify-between text-white p-8">
          <div className="text-lg mb-4 md:mb-0 md:ml-10">
            © Copyright K's Darshan. All Rights Reserved.
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 md:mr-10">
            <div className="text-lg hover:text-red-700 transition-colors duration-300">
              Terms of use
            </div>
            <div className="text-lg hover:text-red-700 transition-colors duration-300">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
