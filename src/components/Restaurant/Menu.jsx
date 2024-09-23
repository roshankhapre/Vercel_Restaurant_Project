import React, { useState, useRef } from "react";
import { assets, menu, cafemenu } from "../../assets/assets";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarsIcon from "@mui/icons-material/Stars";

const Menu = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bydefaultselected] =useState('paneer')

  // Create a ref for the scrolling container
  const scrollContainerRef = useRef(null);

  const categorys = {
    item1: {
      img: menu.panner,
      itemname: "Panner Special",
      category: "paneer",
    },

    item4: {
      img: menu.khofta,
      itemname: "Kofta",
      category: "kofta",
    },
    item7: {
      img: menu.sweets,
      itemname: "Sweets",
      category: "sweets",
    },
    item8: {
      img: menu.thali,
      itemname: "Thali",
      category: "thali",
    },
    item9: {
      img: menu.indianbread,
      itemname: "Indian Bread",
      category: "indianbread",
    },
    item10: {
      img: menu.mushroom,
      itemname: "Mushroom Special",
      category: "mushroom",
    },
    item11: {
      img: menu.salad,
      itemname: "Starters",
      category: "starters",
    },
    item13: {
      img: menu.soups,
      itemname: "Soups",
      category: "soups",
    },
    item14: {
      img: menu.salad,
      itemname: "Salad & Papad",
      category: "salad",
    },
   
    item2: {
      img: menu.rice,
      itemname: "Rice",
      category: "rice",
    },
  };

  const cafeCategorys = {
    item1: {
      img: cafemenu.hotTea,
      itemname: "Hot Tea",
      category: "hottea",
    },
    item2: {
      img: cafemenu.iceTea,
      itemname: "Ice Tea",
      category: "iceTea",
    },
    item3: {
      img: cafemenu.pizza,
      itemname: "Pizza",
      category: "pizza",
    },
    item4: {
      img: cafemenu.hotBlackCofe,
      itemname: "Hot Black Coffee",
      category: "hotBlackCoffee",
    },
    item5: {
      img: cafemenu.burgers,
      itemname: "Burgers",
      category: "burgers",
    },
    item6: {
      img: cafemenu.hotMilkCoffee,
      itemname: "Hot Milk Coffee",
      category: "hotMilkCoffee",
    },
    item7: {
      img: cafemenu.fries,
      itemname: "Fries",
      category: "fries",
    },
    item8: {
      img: cafemenu.icedCoffee,
      itemname: "Iced Coffee",
      category: "icedCoffee",
    },
    item9: {
      img: cafemenu.sandwich,
      itemname: "Sandwich",
      category: "sandwich",
    },
   
    item10: {
      img: cafemenu.fries,
      itemname: "Fries",
      category: "fries",
    },

    item13: {
      img: cafemenu.pasta,
      itemname: "Pasta",
      category: "pasta",
    },
    item14: {
      img: cafemenu.mocktials,
      itemname: "Moctails",
      category: "mocktails",
    },
    item16: {
      img: cafemenu.sakes,
      itemname: "Shakes",
      category: "shakes",
    },
  };

  const menuitems = {
    item1: {
      img: assets.matarPanner,
      itemname: "Matar Paneer",

      price: "130",
      rating: 4.3,
      category: "paneer",
    },
    item2: {
      img: assets.pannerpalak,
      itemname: "Palak Paneer",

      price: "130",
      rating: 4.2,
      category: "paneer",
    },
    item3: {
      img: assets.pannerchole,
      itemname: "Paneer Chole",

      price: "130",
      rating: 4.3,
      category: "paneer",
    },
    item4: {
      img: assets.pannerbhurji,
      itemname: "Paneer Bhurji",

      price: "130",
      rating: 4.1,
      category: "paneer",
    },
    item5: {
      img: assets.kadaipanner,
      itemname: "Kadai Paneer",

      price: "130",
      rating: 4.3,
      category: "paneer",
    },
    item6: {
      img: assets.pannerHandi,
      itemname: "Paneer Handi",

      price: "130",
      rating: 4.1,
      category: "paneer",
    },
    item7: {
      img: assets.tawaPanner,
      itemname: "Tawa Paneer ",

      price: "130",
      rating: 4.2,
      category: "paneer",
    },
    item8: {
      img: assets.sahiPanner,
      itemname: "Sahi Paneer ",

      price: "130",
      rating: 4.2,
      category: "paneer",
    },
    item9: {
      img: assets.tamatoSoup,
      itemname: "Tomato Soup",

      price: "130",
      rating: 4.3,
      category: "soups",
    },
    item10: {
      img: assets.hotAndSourSoup,
      itemname: "Hot and Sour Soup",

      price: "130",
      rating: 4.0,
      category: "soups",
    },
    item12: {
      img: assets.manchowSoup,
      itemname: "Manchow Soup",

      price: "130",
      rating: 4.2,
      category: "soups",
    },
    item13: {
      img: assets.sweetCornSoup,
      itemname: "Sweet Corn Soup",

      price: "130",
      rating: 4.1,
      category: "soups",
    },

    item16: {
      img: assets.vegKofta,
      itemname: "Veg Kofta",
      price: "180",
      rating: 4.0,
      category: "kofta",
    },
    item17: {
      img: assets.pannerKofta,
      itemname: "Panner Kofta",
      price: "220",
      rating: 4.2,
      category: "kofta",
    },
    item18: {
      img: assets.malaiKofta,
      itemname: "Malai Kofta",
      price: "220",
      rating: 4.0,
      category: "kofta",
    },
    item19: {
      img: assets.nargisKofta,
      itemname: "Nargis Kofta",
      price: "180",
      rating: 4.0,
      category: "kofta",
    },
    item20: {
      img: assets.methiKofta,
      itemname: "Methi Kofta",
      price: "180",
      rating: 3.9,
      category: "kofta",
    },
    item21: {
      img: assets.icecream,
      itemname: "Ice Cream",
      price: "150",
      rating: 4.5,
      category: "sweets",
    },
    item22: {
      img: assets.rasgulla,
      itemname: "Rasgulla",
      price: "50",
      rating: 4.5,
      category: "sweets",
    },
    item23: {
      img: assets.gulabjamunwithicecream,
      itemname: "Gulab Jamun With Ice Cream",
      price: "80",
      rating: 4.2,
      category: "sweets",
    },
    item24: {
      img: assets.rasmalai,
      itemname: "Rasmalai",
      price: "70",
      rating: 4.3,
      category: "sweets",
    },
    item25: {
      img: assets.gullabJamun,
      itemname: "Gullab Jamun",
      price: "60",
      rating: 4.5,
      category: "sweets",
    },
    item26: {
      img: assets.pannerThali,
      itemname: "Panner Thali",
      price: "200",
      rating: 4.5,
      category: "thali",
    },
    item27: {
      img: assets.seasonalvegthali,
      itemname: "seasonal Veg Thali",
      price: "250",
      rating: 4.4,
      category: "thali",
    },
    item28: {
      img: assets.specialThali,
      itemname: "Special Thali",
      price: "220",
      rating: 4.2,
      category: "thali",
    },
    item29: {
      img: assets.greenSalad,
      itemname: "Special Thali",
      price: "50",
      rating: 4.5,
      category: "salad",
    },
    item30: {
      img: assets.onionSalad,
      itemname: "Special Thali",
      price: "40",
      rating: 4.3,
      category: "salad",
    },
    item31: {
      img: assets.Kachumar,
      itemname: "Special Thali",
      price: "60",
      rating: 4.1,
      category: "salad",
    },
    item32: {
      img: assets.papadMasal,
      itemname: "Papad Masal",
      price: "40",
      rating: 4.1,
      category: "salad",
    },
    item33: {
      img: assets.pannerTikka,
      itemname: "Panner Tikka",
      price: "170",
      rating: 4.3,
      category: "starters",
    },
    item34: {
      img: assets.vegLollipop,
      itemname: "Veg Lollipop",
      price: "150",
      rating: 4.3,
      category: "starters",
    },
    item35: {
      img: assets.vegbiryani,
      itemname: "Veg Biryani",
      price: "190",
      rating: 4.4,
      category: "rice",
    },

    item36: {
      img: assets.halfSteamedRice,
      itemname: "Steamed Rice",
      price: "100",
      rating: 4.1,
      category: "rice",
    },
    item37: {
      img: assets.jeeraRice,
      itemname: "Jeera Rice",
      price: "110",
      rating: 4.2,
      category: "rice",
    },

    item38: {
      img: assets.matarPulao,
      itemname: "Matar Pulao",
      price: "170",
      rating: 4.5,
      category: "rice",
    },
    item39: {
      img: assets.classicTea,
      itemname: "Classic Tea",
      price: "20",
      rating: 4.3,
      category: "hottea",
    },
    item40: {
      img: assets.adrak,
      itemname: "Adrak",
      price: "25",
      rating: 4.5,
      category: "hottea",
    },
    item41: {
      img: assets.blackTea,
      itemname: "Black Tea",
      price: "15",
      rating: 4.2,
      category: "hottea",
    },
    item42: {
      img: assets.masala,
      itemname: "Masala Tea",
      price: "25",
      rating: 4.3,
      category: "hottea",
    },
    item43: {
      img: assets.lemonIceTea,
      itemname: "Lemon Iced Tea",
      price: "70",
      rating: 4.1,
      category: "iceTea",
    },
    item44: {
      img: assets.cranberryIcedTea,
      itemname: "Creanberry Tea",
      price: "85",
      rating: 4.2,
      category: "iceTea",
    },

    item45: {
      img: assets.peachIcedTea,
      itemname: "Peach Iced Tea",
      price: "70",
      rating: 4.2,
      category: "iceTea",
    },
    item46: {
      img: assets.strawberryIcedTea,
      itemname: "Strawberry Iced Tea",
      price: "70",
      rating: 4.2,
      category: "iceTea",
    },
    item47: {
      img: assets.cappucccino,
      itemname: "Cappuccino",
      price: "60",
      rating: 4.5,
      category: "hotMilkCoffee",
    },
    item48: {
      img: assets.hazeinut,
      itemname: "Hazeinut",
      price: "70",
      rating: 4.4,
      category: "hotMilkCoffee",
    },
    item49: {
      img: assets.latte,
      itemname: "Latte",
      price: "60",
      rating: 4.4,
      category: "hotMilkCoffee",
    },

    item50: {
      img: assets.icedAmaricano,
      itemname: "Iced Amaricano",
      price: "70",
      rating: 4.3,
      category: "icedCoffee",
    },
    item51: {
      img: assets.icedVanilla,
      itemname: "Iced Vanilla",
      price: "80",
      rating: 4.3,
      category: "icedCoffee",
    },
    item52: {
      img: assets.icedMocha,
      itemname: "Iced Mocha",
      price: "70",
      rating: 4.1,
      category: "icedCoffee",
    },
    item53: {
      img: assets.margarita,
      itemname: "Margarita",
      price: "110",
      rating: 4.5,
      category: "pizza",
    },
    item54: {
      img: assets.cornCapsicum,
      itemname: "CornCapsicum",
      price: "160",
      rating: 4.5,
      category: "pizza",
    },
    item55: {
      img: assets.onionCapsicum,
      itemname: "Onion Capsicum",
      price: "160",
      rating: 4.2,
      category: "pizza",
    },
    item56: {
      img: assets.mushroomSpecial,
      itemname: "Mushroom Special",
      price: "160",
      rating: 4.1,
      category: "pizza",
    },
    
    
    item57: {
      img: assets.americanoHotCaffee,
      itemname: "Americano Hot Coffee",
      price: "40",
      rating: 4.5,
      category: "hotBlackCoffee",
    },
    item58: {
      img: assets.affogate,
      itemname: "Affogate",
      price: "65",
      rating: 4.1,
      category: "hotBlackCoffee",
    },
    item59: {
      img: assets.alfredo,
      itemname: "Alfredo (whiteSauce)",
      price: "150",
      rating: 4.3,
      category: "pasta",
    },
    item60: {
      img: assets.salsaRosa,
      itemname: "Salsa Rosa",
      price: "180",
      rating: 4.4,
      category: "pasta",
    },
    item61: {
      img: assets.arabiatta,
      itemname: "Arabiatta(red sauce)",
      price: "130",
      rating: 4.3,
      category: "pasta",
    },
    item62: {
      img: assets.pesto,
      itemname: "Pesto",
      price: "180",
      rating: 4.1,
      category: "pasta",
    },
    item63: {
      img: assets.vegBurger,
      itemname: "Veg Burger",
      price: "80",
      rating: 4.4,
      category: "burgers",
    },
    item64: {
      img: assets.tikkaBurger,
      itemname: "Double Tikka Burger",
      price: "100",
      rating: 4.2,
      category: "burgers",
    },
    item65: {
      img: assets.cheeseBurger,
      itemname: "Cheese Burst Burger",
      price: "150",
      rating: 4.2,
      category: "burgers",
    },
    item66: {
      img: assets.butterNan,
      itemname: "Butter Nan",
      price: "45",
      rating: 4.1,
      category: "indianbread",
    },
    item67: {
      img: assets.missiRoti,
      itemname: "Missi Roti",
      price: "31",
      rating: 4.2,
      category: "indianbread",
    },
    item68: {
      img: assets.roti,
      itemname: "Roti",
      price: "15",
      rating: 4.2,
      category: "indianbread",
    },
    item69: {
      img: assets.lachhaParatha,
      itemname: "Lachha Paratha",
      price: "35",
      rating: 4.5,
      category: "indianbread",
    },
    item691: {
      img: assets.alooParatha,
      itemname: "Aloo Paratha",
      price: "50",
      rating: 4.5,
      category: "indianbread",
    },
    item70: {
      img: assets.makkaRoti,
      itemname: "Makka Roti",
      price: "21",
      rating: 4.1,
      category: "indianbread",
    },
    item71: {
      img: assets.gobiParatha,
      itemname: "Gobi Paratha",
      price: "55",
      rating: 4.2,
      category: "indianbread",
    },
    item72: {
      img: assets.matarMushroom,
      itemname: "Matar Mushroom",
      price: "210",
      rating: 4.3,
      category: "mushroom",
    },
    item73: {
      img: assets.masalaMushroom,
      itemname: "Masala Mushroom",
      price: "200",
      rating: 4.1,
      category: "mushroom",
    },
    item74: {
      img: assets.pannermushroom,
      itemname: "Panner Mushroom",
      price: "230",
      rating: 4.2,
      category: "mushroom",
    },
    item75: {
      img: assets.blueberry,
      itemname: "Blue berry ",
      price: "100",
      rating: 4.1,
      category: "mocktails",
    },
    item76: {
      img: assets.watermilon,
      itemname: "Watermilon mojito",
      price: "100",
      rating: 4.3,
      category: "mocktails",
    },
    item77: {
      img: assets.cranberrry,
      itemname: "Cranberry",
      price: "100",
      rating: 4.4,
      category: "mocktails",
    },
    item78: {
      img: assets.mintMojita,
      itemname: "Mint Mojito",
      price: "100",
      rating: 4.5,
      category: "mocktails",
    },
    item79: {
      img: assets.strawberry,
      itemname: "Straw berry",
      price: "100",
      rating: 4.5,
      category: "shakes",
    },
    item80: {
      img: assets.mangoshakes,
      itemname: "Mango Shake",
      price: "100",
      rating: 4.4,
      category: "shakes",
    },
    item81: {
      img: assets.kitkat,
      itemname: "Kitkat Shake",
      price: "100",
      rating: 4.1,
      category: "shakes",
    },
    item82: {
      img: assets.chocalate,
      itemname: "Chocalate Shake",
      price: "100",
      rating: 4.4,
      category: "shakes",
    },

    item83: {
      img: assets.vegsandwich,
      itemname: "Veg Sandwich",
      price: "50",
      rating: 4.5,
      category: "sandwich",
    },
    item84: {
      img: assets.vegcheesesandwich,
      itemname: "Veg Cheese Sandwich",
      price: "60",
      rating: 4.4,
      category: "sandwich",
    },
    item85: {
      img: assets.vegscornandwich,
      itemname: "Corn Cheese Sandwich",
      price: "60",
      rating: 4.7,
      category: "sandwich",
    },
    item86: {
      img: assets.vegpaneersandwich,
      itemname: "Cheese Paneer Sandwich",
      price: "80",
      rating: 4.4,
      category: "sandwich",
    },
    item87: {
      img: assets.periPeri,
      itemname: "Peri peri fries",
      price: "80",
      rating: 4.2,
      category: "fries",
    }, item88: {
      img: assets.cheseFries,
      itemname: "Cheese loaded fries",
      price: "100",
      rating: 4.4,
      category: "fries",
    },

    
    
  };

  // Function to scroll the category container
  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  // Function to filter menu items based on selected category
  const filteredMenuItems = selectedCategory
    ? Object.values(menuitems).filter(
        (menuitem) => menuitem.category === selectedCategory
      )
    : Object.values(menuitems).filter(
      (menuitem) => menuitem.category === bydefaultselected
    );

  return (
    <div>
      <div className="grid my-10 ">
        <h2 className="text-4xl lg:text-7xl font-bold text-center text-red-700">MENU</h2>
        <p className="my-5 text-center mx-5 lg:mx-48 text-base lg:text-xl  md:mb-14">
          At K'Darshan, we take pride in offering a diverse selection of freshly
          prepared dishes, crafted with the finest ingredients. Whether you're
          craving hearty classics or modern fusion cuisine, our menu is designed
          to satisfy every palate.
        </p>

        {/* Scroll buttons */}
        <div className="flex justify-between mx-1 lg:mx-20 ">
          <div className="text-xl font-bold ">
              What's on your mind?
          </div>
          <div className="space-x-5 ">
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={() => scroll(-200)} // Scroll left
          >
            <ArrowBackIcon />
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={() => scroll(200)} // Scroll right
          >
            <ArrowForwardIcon />
          </button>
        </div>
        </div>

        <div
          className=" gap-10  my-5  overflow-x-scroll no-scrollbar  md:mx-10 lg:mx-20 border-b-2 pb-5 md:pb-10 "
          style={{
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            msOverflowStyle: "none", // Hide scrollbar in IE/Edge
          }}
          ref={scrollContainerRef}
        >
          <div className="flex  md:gap-10 lg:mb-5">
            {Object.values(categorys).map((category, index) => (
              <div
                key={index}
                className="snap-start   cursor-pointer min-w-[150px]"
                onClick={() => setSelectedCategory(category.category)}
              >
                <div className="w-40  items-center">
                  <img
                    src={category.img}
                    alt="menu"
                    className="items-center ml-10 md:ml-6 w-20 md:w-28"
                  />
                </div>
                <div className="text-center">{category.itemname}</div>
              </div>
            ))}
          </div>
          <div className="flex  md:gap-10">
            {Object.values(cafeCategorys).map((category, index) => (
              <div
                key={index}
                className="snap-start cursor-pointer min-w-[150px]"
                onClick={() => setSelectedCategory(category.category)}
              >
                <div className=" md:w-40 items-center">
                  <img
                    src={category.img}
                    alt="menu"
                    className="ml-10 md:ml-5 mb-3 md:w-28 h-16 md:h-24 w-24 items-center"
                  />
                </div>
                <div className="text-center  text:sm md:text-base">
                  {category.itemname}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display filtered menu items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mx-2 md:mx-20 md:mt-10 lg:mb-10 ">
          {filteredMenuItems.map((menuitem, index) => (
            <div key={index} className="border rounded-xl ">
              <img
                src={menuitem.img}
                alt={menuitem.itemname}
                style={{ borderRadius: " " }}
                className="mb-5 w-48 h-32  md:w-80 md:h-60 rounded-xl "
                loading="lazy"
              />
              <h3 className="ml-2 md:text-3xl font-bold md:mb-5 ">
                {menuitem.itemname}
              </h3>
              {/* <p>{menuitem.description}</p> */}
              <div className=" ml-2 text-sm md:text-base  flex gap-2 pb-1 md:pb-3 md:gap-10 ">
                <div className="mb-">
                  <span className=" rounded-full text-green-600">
                    <StarsIcon />
                  </span>{" "}
                  {menuitem.rating}
                </div>
                <p className="font-bold text-red-700">
                  &#8377; {menuitem.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
