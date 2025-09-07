import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="shadow-md border-b bg-gray-800 text-white sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between h-16 px-6 md:px-12">

        <div onClick={() => navigate("/")} className="text-2xl font-bold tracking-wide cursor-pointer" > SX </div>

        <div className="hidden md:flex space-x-8 font-medium">

          <div className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}    >

            <div className="flex items-center space-x-1  hover:text-gray-300">
              <span>Collections</span>
              <IoIosArrowDown className={`transform  transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </div>

            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white text-gray-800 shadow-lg rounded-lg py-2 w-40">
                <p
                  onClick={() => navigate("/collections/winter")}
                  className="px-4 p-2 h-full hover:bg-gray-100 cursor-pointer"
                >
                  Winter
                </p>
                <p
                  onClick={() => navigate("/collections/summer")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Summer
                </p>
                <p
                  onClick={() => navigate("/collections/new")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  New Arrivals
                </p>
              </div>
            )}
          </div>

          <button onClick={() => navigate("/winter")} className="hover:text-gray-300"> Winter  </button>
          <button onClick={() => navigate("/summer")} className="hover:text-gray-300"> Summer  </button>
          <button onClick={() => navigate("/about")} className="hover:text-gray-300">   About </button>
          <button onClick={() => navigate("/contact")} className="hover:text-gray-300"> Contact   </button>
        </div>

        {/* Search & Profile & Cart */}
        <div className="hidden md:flex items-center space-x-6 text-xl">
          <Link to="/Search"><FaSearch className="cursor-pointer hover:text-gray-300" onClick={() => alert("Search bar can open here!")} /></Link>
          <Link to="/Cart"><FaShoppingCart className="cursor-pointer hover:text-gray-300" onClick={() => navigate("./CartPage")} /></Link>
          <Link to="/Login"><RiAccountCircleLine className="cursor-pointer text-3xl hover:text-gray-300" /> </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu  */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-white px-6 py-4 space-y-3 font-medium">
          <button onClick={() => navigate("/collections")} className="block w-full text-left hover:text-gray-300">Collections</button>
          <button onClick={() => navigate("/winter")} className="block w-full text-left hover:text-gray-300">Winter</button>
          <button onClick={() => navigate("/summer")} className="block w-full text-left hover:text-gray-300">Summer</button>
          <button onClick={() => navigate("/about")} className="block w-full text-left hover:text-gray-300">About</button>
          <button onClick={() => navigate("/contact")} className="block w-full text-left hover:text-gray-300">Contact</button>
          <hr className="border-gray-600" />
          <button onClick={() => navigate("/cart")} className="block w-full text-left hover:text-gray-300">Cart</button>
          <button onClick={() => navigate("/login")} className="block w-full text-left hover:text-gray-300">Login</button>
        </div>
      )}
    </nav>
  );
}
