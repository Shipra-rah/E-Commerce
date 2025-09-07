import React from "react";
import logo from "../assets/SX_logo.jpg";

export default function Logo() {
  return (
    <div className=" h-12 object-contain flex items-center justify-center border-yellow-800 ">
      <div className="h-full rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-white">
        <img
          src={logo}
          alt="Logo"
          className="object-cover w-auto h-full rounded-full"
        />
      </div>
    </div>
  );
}
