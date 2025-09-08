import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../Contexts/CartContext";

export default function DataCard({ products, onClick }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(products);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    navigate("/checkout", { state: { product: products } });
  };

  const imageSrc =
    products?.image || "https://via.placeholder.com/400x400?text=Product";

  return (
    <div
      onClick={onClick}
      className="
        relative group cursor-pointer
        bg-white/70 backdrop-blur-md 
        rounded-2xl overflow-hidden
        shadow-md hover:shadow-2xl
        transform transition-all duration-500
        hover:-translate-y-2
        w-full
      "
    >
      {/* Image Section */}
      <div className="relative w-full h-52 md:h-64 overflow-hidden">
        <img
          src={imageSrc}
          alt={products?.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Floating Action Buttons (on hover) */}
        <div
          className="
            absolute bottom-3 left-1/2 -translate-x-1/2
            flex gap-3 opacity-0 group-hover:opacity-100
            transition duration-500
          "
        >
          <button
            onClick={handleAddToCart}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium shadow-md
              ${
                isAdded
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-800 hover:bg-black hover:text-white"
              }
            `}
          >
            {isAdded ? "Added" : "Add"}
          </button>

          <button
            onClick={handleBuyNow}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-yellow-500 text-white hover:bg-gray-800 shadow-md"
          >
            Buy
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {products?.name}
        </h2>
        <p className="text-sm text-gray-500">{products?.category}</p>

        {/* Price & Details */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ₹{products?.price}
          </p>
          <span className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-600">
            {products?.sizes?.[0]}+
          </span>
        </div>
      </div>
    </div>
  );
}
