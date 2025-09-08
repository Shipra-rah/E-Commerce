import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Product passed from Buy Now / DataCard or cart from CartPage
  const product = location.state?.product;
  const cartItems = location.state?.cart;

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

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    if (cartItems && cartItems.length > 0) {
      // Place order for each item in cart
      cartItems.forEach((item) => {
        const newOrder = {
          id: Date.now() + Math.random(), // unique id
          product: item,
          customer: formData,
          status: "Pending",
          date: new Date().toLocaleString(),
          qty: item.qty,
        };
        existingOrders.push(newOrder);
      });
    } else if (product) {
      // Single product order
      const newOrder = {
        id: Date.now(),
        product,
        customer: formData,
        status: "Pending",
        date: new Date().toLocaleString(),
        qty: 1,
      };
      existingOrders.push(newOrder);
    }

    // save in localStorage
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    navigate("/order");
  };

  const total = cartItems
    ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
    : product
    ? product.price
    : 0;

  return (
    <div
      className="
        flex flex-col
        min-h-screen
        p-6
        bg-gray-100
        items-center justify-center
      "
    >
      <div
        className="
          w-full max-w-2xl
          p-6
          bg-white
          rounded-2xl
          shadow-lg
        "
      >
        <h1
          className="
            mb-4
            text-2xl font-bold text-gray-800
          "
        >
          Checkout
        </h1>

        {/* Product Summary */}
        {cartItems && cartItems.length > 0 ? (
          <div className="pb-4 mb-4 border-b">
            <h2 className="font-semibold mb-2">Items in Cart:</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 mb-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-16 h-16 rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price} x {item.qty}</p>
                  <p className="text-gray-600">Subtotal: ₹{item.price * item.qty}</p>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center border-t pt-2 mt-2">
              <h3 className="font-bold">Total:</h3>
              <p className="font-semibold">₹{total}</p>
            </div>
          </div>
        ) : product ? (
          <div
            className="
              flex
              pb-4 mb-4
              border-b
              items-center gap-4
            "
          >
            <img
              src={product.image}
              alt={product.name}
              className="
                object-cover
                w-20 h-20
                rounded-lg
              "
            />
            <div>
              <h2
                className="
                  font-semibold
                "
              >
                {product.name}
              </h2>
              <p
                className="
                  text-gray-600
                "
              >
                ₹{product.price}
              </p>
            </div>
          </div>
        ) : null}

        {/* Address Form */}
        <div
          className="
            space-y-4
          "
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full
              px-4 py-2
              border rounded-lg
            "
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="
              w-full
              px-4 py-2
              border rounded-lg
            "
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="
              w-full
              px-4 py-2
              border rounded-lg
            "
          />
        </div>

        <button
          onClick={handlePlaceOrder}
          className="
            w-full
            mt-6 py-2
            text-white
            bg-black
            rounded-lg
            hover:bg-gray-800 transition
          "
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
