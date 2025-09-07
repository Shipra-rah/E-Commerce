import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../Data/clothes.json";
import CartContext from "../Contexts/CartContext";

export default function CardFullDetails({ products, onClick }) {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Data.find((p) => p.id === parseInt(id));

  // Example multiple images
  const images = [
    product.image,
    "https://via.placeholder.com/400x400?text=Image+2",
    "https://via.placeholder.com/400x400?text=Image+3",
  ];

  const [mainImage, setMainImage] = useState(product.image);

  if (!product) return <div>Product not found</div>;

  const handleClick = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div
      className="
        max-w-5xl
        p-6 mx-auto
      "
    >
      <button
        onClick={() => navigate(-1)}
        className="
          mb-4 px-4 py-2
          bg-gray-200
          rounded hover:bg-gray-300
        "
      >
        ← Back
      </button>

      <div
        className="
          flex flex-col
          gap-8
          md:flex-row
        "
      >
        {/* Left: Image gallery */}
        <div
          className="
            md:w-1/2
          "
        >
          <div
            className="
              flex overflow-hidden
              w-full h-96
              mb-4
              bg-gray-100
              rounded-lg
              items-center justify-center
            "
          >
            <img
              src={mainImage}
              alt={product.name}
              className="
                object-contain
                h-full
              "
            />
          </div>
          <div
            className="
              flex
              space-x-4
            "
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setMainImage(img)}
                className="
                  object-cover
                  w-20 h-20
                  rounded-lg border-2 border-gray-200
                  cursor-pointer
                  hover:border-black
                "
              />
            ))}
          </div>
        </div>

        {/* Right: Product info */}
        <div
          className="
            flex flex-col
            md:w-1/2
          "
        >
          <h1
            className="
              text-3xl font-bold
            "
          >
            {product.name}
          </h1>
          <p
            className="
              mt-1
              text-gray-500
            "
          >
            {product.category}
          </p>
          <p
            className="
              mt-4
              text-lg font-semibold
            "
          >
            ₹{product.price}
          </p>

          {/* Sizes */}
          <div
            className="
              mt-4
            "
          >
            <p
              className="
                mb-2
                font-medium
              "
            >
              Available Sizes:
            </p>
            <div
              className="
                flex
                space-x-2
              "
            >
              {product.sizes.map((size, idx) => (
                <span
                  key={idx}
                  className="
                    px-3 py-1
                    border
                    cursor-pointer
                    rounded hover:bg-black hover:text-white transition
                  "
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Description / More Info */}
          <div
            className="
              mt-6
            "
          >
            <h2
              className="
                mb-2
                font-semibold text-xl
              "
            >
              Description
            </h2>
            <p
              className="
                text-gray-700
              "
            >
              This is a high-quality {product.name} from our {product.category}{" "}
              collection. Perfect for any occasion, made from premium materials
              for durability and comfort.
            </p>
          </div>
          <br />
          <div
            className="
              flex
              justify-around items-center
            "
          >
            <button
              onClick={handleClick}
              className={`
                px-4 py-2
                rounded-lg
                cursor-pointer
                transition
                ${isAdded ? "bg-green-600 text-white" : "bg-black text-white hover:bg-gray-800"}
              `}
            >
              {isAdded ? "Item Added" : "Add to Cart"}
            </button>
            <button
              onClick={() => alert(`Buying ${product.name}`)}
              className="
                px-4 py-2
                text-black
                bg-yellow-500
                rounded-lg
                hover:bg-yellow-400 transition
              "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
