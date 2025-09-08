import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutId = useRef(null); // persist timeout between renders
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // 2s delay
  };

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
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center space-x-1 hover:text-cyan-400 transition cursor-pointer">
              <span>Collections</span>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-3 bg-gray-800 text-gray-200 shadow-xl rounded-xl py-2 w-44">
                {["Winter", "Summer", "New Arrivals"].map((item) => (
                  <p
                    key={item}
                    onClick={() =>
                      navigate(`/collections/${item.toLowerCase().replace(" ", "")}`)
                    }
                    className="px-4 py-2 hover:bg-gray-700 hover:text-cyan-400 cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          {["Home", "Man", "Female", "Kids", "About"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Home") navigate("/");
                else if (item === "About") navigate("/about");
                else navigate(`/collections/${item.toLowerCase()}`);
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
          <Link to="/order">
            <span className="cursor-pointer hover:text-cyan-400 text-xs flex flex-col leading-tight text-center">
              <span>Return</span>
              <span>&Order</span>
            </span>
          </Link>
          <Link to="/cart">
            <FaShoppingCart className="cursor-pointer hover:text-cyan-400 transition" />
          </Link>
          <Link to="/login">
            <RiAccountCircleLine className="cursor-pointer text-3xl hover:text-cyan-400 transition" />
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
        <div className="md:hidden bg-gray-800 text-gray-100  space-y-0.5 text-sm uppercase font-medium">
          {["Collections", "Man", "Woman", "Kids", "About","Order", "Cart", "Login"].map(
            (item) => (
              <button
                key={item}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className="block w-full text-left px-5 py-1  hover:bg-cyan-600 hover:text-white transition"
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
