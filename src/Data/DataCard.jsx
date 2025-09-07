import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../Contexts/CartContext";

function DataCard({ products, onClick }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    addToCart(products);

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div
      onClick={onClick}
      className="
        p-2
        bg-white
        rounded-2xl
        shadow-sm cursor-pointer
        hover:shadow-lg transition
        md:w-full
      "
    >
      {/* products Image */}
      <div
        className="
          flex overflow-hidden
          w-full max-h-48 min-h-36
          mb-4
          bg-gray-100
          rounded-lg
          items-center justify-center
        "
      >
        <img
          src={products.image}
          alt={products.name}
          className="
            object-contain
            h-full
          "
        />
      </div>

      {/* products Info */}
      <h2
        className="
          text-lg font-semibold text-gray-800
        "
      >
        {products.name}
      </h2>
      <p
        className="
          text-sm text-gray-500
        "
      >
        {products.category}
      </p>
      <p
        className="
          mt-1
          text-sm
        "
      >
        <span
          className="
            font-medium text-gray-700
          "
        >
          Color:
        </span>{" "}
        {products.color}
      </p>
      <p
        className="
          mt-1
          text-sm
        "
      >
        <span
          className="
            font-medium text-gray-700
          "
        >
          Sizes:
        </span>{" "}
        {products.sizes.join(", ")}
      </p>

      {/* Price & Button */}
      <div
        className="
          flex
          mt-4
          justify-between items-center
        "
      >
        <p
          className="
            text-lg font-bold text-black
          "
        >
          ₹{products.price}
        </p>
        <button
          onClick={handleClick}
          className={`
            px-4 py-2
            rounded-lg
            cursor-pointer
            transition
            ${
              isAdded
                ? "bg-green-600 text-white"
                : "bg-black text-white hover:bg-gray-800"
            }
          `}
        >
          {isAdded ? "Item Added" : "Add to Cart"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/Checkout", { state: { product: products } });
          }}
          className="
            px-4 py-2
            text-white
            bg-green-600
            rounded-lg
            hover:bg-green-700 transition
          "
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
export default DataCard;
