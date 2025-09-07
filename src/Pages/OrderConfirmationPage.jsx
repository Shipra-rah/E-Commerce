import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { product, customer } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-green-600">✅ Order Confirmed!</h1>
        <p className="mt-2 text-gray-600">
          Thank you <span className="font-semibold">{customer?.name}</span>, your
          order has been placed successfully.
        </p>

        {product && (
          <div className="mt-6 border rounded-lg p-4 flex items-center gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="text-left">
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-500">₹{product.price}</p>
            </div>
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
