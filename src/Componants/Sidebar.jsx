import React, { useState } from "react";
import { IoFilter } from "react-icons/io5";

const sizes = ["S", "M", "L", "XL", "XXL"];
const prices = ["100", "500", "1000", "1500-above"];

export default function Sidebar() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize((prev) => (prev === size ? "" : size)); // toggle logic
  };

  const handlePriceClick = (price) => {
    setSelectedPrice((prev) => (prev === price ? "" : price)); // toggle logic
  };

  return (
    <div className="h-auto w-3/12 hidden lg:block bg-white shadow-sm flex-col items-start px-8 py-6">
      {/* Filter Header */}
      <div className="px-4 py-2 bg-black flex justify-start items-center gap-[10%]   text-white rounded-xl text-sm font-semibold mb-6">
       <IoFilter /> Filter
      </div>

      {/* Size Filter */}
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Size</h2>
        <div className="flex flex-col space-y-3 w-full">
          {sizes.map((size, index) => (
            <label
              key={index}
              onClick={() => handleSizeClick(size)}
              className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-lg border transition 
                ${selectedSize === size
                  ? "bg-black text-white border-black"
                  : "bg-gray-50 border-gray-200 hover:border-black hover:bg-gray-100"
                }`}
            >
              <span className="text-sm font-medium">{size}</span>
            </label>
          ))}
        </div>
      </div>

      <br />

      {/* Price Filter */}
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Price</h2>
        <div className="flex flex-col space-y-3 w-full">
          {prices.map((price, index) => (
            <label
              key={index}
              onClick={() => handlePriceClick(price)}
              className={`flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-lg border transition 
                ${selectedPrice === price
                  ? "bg-black text-white border-black"
                  : "bg-gray-50 border-gray-200 hover:border-black hover:bg-gray-100"
                }`}
            >
              <span className="text-sm font-medium">{price}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
