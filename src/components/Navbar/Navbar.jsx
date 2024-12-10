import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { assets } from "../../assets/assets";

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation(); // Use useLocation to get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      if (dropdownTimer) {
        clearTimeout(dropdownTimer);
      }
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200);
      setDropdownTimer(timer);
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth < 768) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownTimer) clearTimeout(dropdownTimer);
    };
  }, [isOpen, dropdownTimer]);

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="w-full sticky top-0 z-50 " ref={navRef}>
      {/* Top Bar */}
      <div className="bg-neutral-950 hidden lg:block text-white text-sm py-2 border-b border-gray-300 shadow-lg">
        <div className="container mx-auto   items-center px-4">
          <div className="sm:flex sm:flex-row ">
            Mon - Sun: 11:00 am - 11:00 pm{" "}
            <span className="hidden  sm:block">&nbsp;|&nbsp;</span>{" "}
            <span className="flex sm:flex-none hover:text-red-700">Phone: <a href="tel:+9516997144">+91 9516997144</a></span>
            <span className="hidden  sm:block hover:text-red-700">&nbsp;|&nbsp;<a href="https://maps.app.goo.gl/erHXcrZ9iNo6q41v9"> KS Darsan
            Cafe, 1 VIP Paraspar Nagar, Gopur Square, Indore - 452009</a></span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-neutral-950 ">
        <div className="  px-4 py-1 flex items-center justify-between">
          {/* Logo with Home Page Link */}
          <div className="flex items-center">
            <Link to="/" className="text-white xl:text-2xl font-bold">
            <div className="flex">
            <div> <img src={assets.logofood} alt="logo" className=" h-14 lg:w-auto lg:h-16 " /></div><div className="content-center text-orange-300">Darshan's</div>
            </div>
            </Link>
          </div>

          {/* Menu Links */}
          <div className="hidden max-908:flex text-sm lg:text-base xl:text-xl space-x-7 xl:space-x-8 items-center px-5 xl:px-0">
            <Link
              to="/cafe"
              className="text-white  hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              Cafe
            </Link>
            <Link
              to="/restaurant"
              className="text-white  hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              Restaurant
            </Link>

            <Link
              to="/hotel"
              className="text-white  hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hotel Room
            </Link>

            <Link
              to="/rooftop"
              className="text-white  hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              Rooftop
            </Link>
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button
                className="text-white  hover:text-red-500 transition-all duration-300 flex items-center tracking-wide font-medium"
                onClick={toggleDropdown}
              >
                Menu
                <FiChevronDown
                  className={`ml-1 transform transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white bg-opacity-90 border rounded-lg shadow-lg py-2 z-20">
                  <Link
                    to="/CafeMenuCard"
                    className="block px-4 py-2 text-black  hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Cafe
                  </Link>
                  <Link
                    to="/RestaurantMenuCard"
                    className="block px-4 py-2 text-black hover:bg-red-600 hover:bg-opacity-20 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Restaurant
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/aboutus"
              className="text-white  hover:text-red-500 transition-all duration-300 tracking-wide font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </div>
          <div>
            <Link to="/bookingTable">
              <button className=" px-6 xl:px-12 py-2 border-2 text-sm font-bold hidden sm:block border-red-600 text-white  hover:text-red-500 hover:border-red-500 transition-all">
                BOOK A TABLE <ArrowForwardIcon />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="max-908:hidden flex items-center pb-3">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-500 transition-all duration-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="max-908:hidden bg-neutral-950 text-white font-bold shadow-lg border-t border-red-500 animate-slide-in-right">
            <Link
              to="/cafe"
              className="block px-4 py-3 text-white hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Cafe
            </Link>

            <Link
              to="/restaurant"
              className="block px-4 py-3 text-white hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Restaurant
            </Link>
            <Link
              to="hotel"
              className="block px-4 py-3 text-white hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Hotel Room
            </Link>
            <Link
              to="/rooftop"
              className="block px-4 py-3 text-white hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Rooftop
            </Link>

            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-500 transition-all duration-300 tracking-wide"
            >
              Menu{" "}
              <FiChevronDown
                className={`inline ml-1 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <Link
                  to="/CafeMenuCard"
                  className="block px-4 py-2 text-white hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Cafe Menu Card
                </Link>
                <Link
                  to="/RestaurantMenuCard"
                  className="block px-4 py-2 text-white hover:text-red-500 hover:bg-opacity-20 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Restaurant Menu Card
                </Link>
              </div>
            )}
            <Link
              to="/aboutus"
              className="block px-4 py-3 text-white hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/bookingTable"
              className="block px-4 py-3 text-white hover:text-red-500 transition-all duration-300 tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              <button className="px-12 py-2 border-2 text-sm font-bold border-red-600 text-white  hover:text-red-500 hover:border-red-500 transition-all">
                BOOK A TABLE <ArrowForwardIcon />
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarNew;
