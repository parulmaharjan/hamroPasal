import React from "react";
import { FaSearch } from "react-icons/fa";
//import { FaSearch } from "react-icons/fa5";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import Logo from "../../assets/images/NavLogo.png";
import { NavLink } from "react-router-dom";
//import {MdFavouriteBorder} from "react-icons/md"
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <NavLink to="/" activeClassName="active">
          <img src={Logo} alt="Logo" className="h-30 w-200 ml-20 mt-2" />
        </NavLink>
      </div>

      <input
        type="text"
        placeholder="Search for products here..."
        className="pl-10 pr-3 py-2 w-30 ml-60   mr-1 mt-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
        style={{ paddingRight: "2.5rem" }}
      />

      <div className="flex items-center ml-2 mr-3">
        <div className="mr-5">
          {" "}
          <FaSearch
            size={25}
            className="text-white h-9 w-19 mr-35 mt-1 fill-red-700"
          />
        </div>

        <div className="flex items-center">
          <FiHeart size={23} className="h-6 w-6 text-gray-700 " />
          <span className="ml-1 text-gray-700">Wishlist</span>
        </div>
        <div className="ml-4">
          <button className="relative">
            <FiShoppingCart size={23} className="h-6 w-6 text-gray-700" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-700 rounded-full">
              0
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
