import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ menu }) {
  const title = menu.charAt(0).toUpperCase() + menu.slice(1);
  const description = `Discover the latest ${menu.toLowerCase()} collection for your style.`;

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 py-12 px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

      <div className="text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          {description}
        </p>
      </div>
      <SearchBar />
    </div>
  );
}
