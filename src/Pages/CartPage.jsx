import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  // Sample cart data (normally you’d fetch this from context or API)
  const [cart, setCart] = useState([
    { id: 1, name: "T-Shirt", price: 500, qty: 1, image: "/images/tshirt.jpg" },
    { id: 2, name: "Jeans", price: 1200, qty: 2, image: "/images/jeans.jpg" },
  ]);

  // Update quantity
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
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
                  onClick={() => updateQuantity(item.id, item.qty - 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3">{item.qty}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.qty + 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Remove + Total per item */}
              <div className="flex items-center space-x-4">
                <p className="font-semibold">₹{item.price * item.qty}</p>
                <button
                  onClick={() => removeItem(item.id)}
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
          <button className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
