import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Product passed from Buy Now / DataCard
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("⚠️ Please fill all details!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      product,
      customer: formData,
      status: "Pending",
      date: new Date().toLocaleString(),
    };

    // save in localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    navigate("/orderConfirmation", { state: { order: newOrder } });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h1>

        {/* Product Summary */}
        {product && (
          <div className="flex items-center gap-4 border-b pb-4 mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          </div>
        )}

        {/* Address Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
