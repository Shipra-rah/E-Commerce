import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="shadow-md border-b bg-gray-900 text-gray-100 sticky top-0 z-50 font-[Orbitron]">
      
      <div className="flex items-center justify-between h-16 px-6 md:px-12">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm tracking-wide uppercase">
          
          {/* Dropdown */}
          <div
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-300">
              <span>Collections</span>
              <IoIosArrowDown
                className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180 text-cyan-400" : "rotate-0"
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute mt-3 bg-gray-800 text-gray-200 shadow-xl rounded-xl py-2 w-44 animate-fade-in">
                {["Winter", "Summer", "New Arrivals"].map((item) => (
                  <p
                    key={item}
                    onClick={() =>
                      navigate(`/collections/${item.toLowerCase().replace(" ", "")}`)
                    }
                    className="px-4 py-2 hover:bg-gray-700 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Menu Items with Underline */}
          {["Home","Man", "Female", "Kids", "About"].map((item) => (
            <button
              key={item}
              value={item}
              onClick={() => {
                if (item === "Home") {
                  navigate("/");
                } else if (item === "About") {
                  navigate("/about");
                } else {
                  navigate(`/?menu=${item.toLowerCase()}`);
                }
              }}
              className="relative group cursor-pointer"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-8 text-xl">
          {/* Orders */}
          <Link to="/order">
            <span className="cursor-pointer hover:text-cyan-400 text-xs flex flex-col leading-tight text-center">
              <span>Return</span>
              <span>&Order</span>
            </span>
          </Link>

          {/* Cart */}
          <Link to="/Cart">
            <FaShoppingCart className="cursor-pointer hover:text-cyan-400 transition-colors duration-300" />
          </Link>

          {/* Login */}
          <Link to="/Login">
            <RiAccountCircleLine className="cursor-pointer text-3xl hover:text-cyan-400 transition-colors duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-gray-100 px-6 py-4 space-y-3 text-sm uppercase font-medium animate-fade-in">
          {["Collections", "Man", "Woman", "Kids", "About", "Cart", "Login"].map(
            (item) => (
              <button
                key={item}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className="block w-full text-left hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
