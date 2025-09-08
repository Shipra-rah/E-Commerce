import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import CartContext from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, total } = useContext(CartContext);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="h-96 flex justify-center items-center text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className=" min-h-screen space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="flex cursor-pointer items-center justify-between bg-white p-4 rounded-xl shadow"
            >
              {/* Image + Name */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateQuantity(item.id, item.qty - 1);
                  }}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3">{item.qty}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    updateQuantity(item.id, item.qty + 1);
                  }}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Remove + Total per item */}
              <div className="flex items-center space-x-4">
                <p className="font-semibold">₹{item.price * item.qty}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(item.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {/* Total Summary */}
          <div className="flex justify-between items-center border-t pt-6 mt-6">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-xl font-semibold">₹{total}</p>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleProceedToCheckout}
            className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
