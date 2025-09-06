import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../Data/clothes.json";

export default function CardFullDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = Data.find((p) => p.id === parseInt(id));

  // Example multiple images
  const images = [
    product.image,
    "https://via.placeholder.com/400x400?text=Image+2",
    "https://via.placeholder.com/400x400?text=Image+3"
  ];

  const [mainImage, setMainImage] = useState(product.image);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Image gallery */}
        <div className="md:w-1/2">
          <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg mb-4 overflow-hidden">
            <img src={mainImage} alt={product.name} className="object-contain h-full" />
          </div>
          <div className="flex space-x-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-200 hover:border-black"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product info */}
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-1">{product.category}</p>
          <p className="mt-4 text-lg font-semibold">₹{product.price}</p>

          {/* Sizes */}
          <div className="mt-4">
            <p className="font-medium mb-2">Available Sizes:</p>
            <div className="flex space-x-2">
              {product.sizes.map((size, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border rounded cursor-pointer hover:bg-black hover:text-white transition"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Description / More Info */}
          <div className="mt-6">
            <h2 className="font-semibold text-xl mb-2">Description</h2>
            <p className="text-gray-700">
              This is a high-quality {product.name} from our {product.category} collection. Perfect for any occasion, made from premium materials for durability and comfort.
            </p>
          </div>
          <br />
          <button
            onClick={() => alert(`Buying ${product.name}`)} // replace with real checkout route
            className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
