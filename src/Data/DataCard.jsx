import React, { useContext } from "react";
import CartContext from "../Contexts/CartContext";

function DataCard({ products, onClick }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      onClick={onClick}
      className="md:w-full rounded-2xl shadow-sm hover:shadow-lg transition p-2 bg-white cursor-pointer"
    >
      {/* products Image */}
      <div className="w-full max-h-48 min-h-36 flex items-center justify-center bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img
          src={products.image}
          alt={products.name}
          className="object-contain h-full"
        />
      </div>

      {/* products Info */}
      <h2 className="text-lg font-semibold text-gray-800">
        {products.name}
      </h2>
      <p className="text-sm text-gray-500">{products.category}</p>
      <p className="text-sm mt-1">
        <span className="font-medium text-gray-700">Color:</span>{" "}
        {products.color}
      </p>
      <p className="text-sm mt-1">
        <span className="font-medium text-gray-700">Sizes:</span>{" "}
        {products.sizes.join(", ")}
      </p>

      {/* Price & Button */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-black">₹{products.price}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(products);
          }}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default DataCard;