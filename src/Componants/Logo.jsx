import React from "react";

export default function Logo() {
  return (
    <div className=" h-12 object-contain flex items-center justify-center border-yellow-800 ">      
      <div className="h-full rounded-full overflow-hidden flex items-center justify-center shadow-lg bg-white">
        <img
          src="../assets/SX_Logo.jpg"
          alt="Logo"
          className="object-cover w-auto h-full rounded-full"
        />
      </div>
    </div>
  );
}
