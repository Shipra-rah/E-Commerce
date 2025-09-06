import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header() {


  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-12 px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

      <div className="text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight">
          Winter
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Discover the latest winter collection for your style.
        </p>
      </div>
      <SearchBar />
    </div>
  );
}
