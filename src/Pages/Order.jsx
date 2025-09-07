import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleCancel = (id) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status: "Cancelled" } : o,
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const handleConfirm = (id) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status: "Confirmed" } : o,
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };
  // order page

  return (
    <div
      className="
        w-full
        px-6 py-10
        text-gray-800
        bg-gray-50
        md:px-20
      "
    >
      <h1
        className="
          mb-8
          text-3xl font-bold
        "
      >
        Your Orders
      </h1>

      {orders.length === 0 ? (
        <div
          className="
            text-center
          "
        >
          <p
            className="
              text-gray-600
            "
          >
            No orders placed yet.
          </p>
          <button
            onClick={() => navigate("/")}
            className="
              mt-4 px-6 py-2
              text-white
              bg-black
              rounded-lg
            "
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div
          className="
            space-y-6
          "
        >
          {orders.map((order) => (
            <div
              key={order.id}
              className="
                flex
                p-6
                bg-white
                rounded-lg
                shadow-md
                justify-between items-center
              "
            >
              <div
                className="
                  flex
                  items-center gap-4
                "
              >
                <img
                  src={order.product.image}
                  alt={order.product.name}
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
                    {order.product.name}
                  </h2>
                  <p
                    className="
                      text-gray-500
                    "
                  >
                    ₹{order.product.price}
                  </p>
                  <p
                    className="
                      text-sm
                    "
                  >
                    Qty: 1
                  </p>
                  <p
                    className="
                      text-sm
                    "
                  >
                    Date: {order.date}
                  </p>
                  <p
                    className={`
                      text-sm font-semibold
                      ${
                        order.status === "Cancelled"
                          ? "text-red-500"
                          : order.status === "Confirmed"
                            ? "text-green-600"
                            : "text-yellow-600"
                      }
                    `}
                  >
                    Status: {order.status}
                  </p>
                </div>
              </div>

              <div
                className="
                  space-x-2
                "
              >
                {order.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleConfirm(order.id)}
                      className="
                        px-4 py-2
                        text-white
                        bg-green-600
                        rounded-lg
                        hover:bg-green-700
                      "
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => handleCancel(order.id)}
                      className="
                        px-4 py-2
                        text-white
                        bg-red-600
                        rounded-lg
                        hover:bg-red-700
                      "
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => {
          alert("You are Confirm!");
          localStorage.removeItem("orders");
          setOrders([]); // update UI
        }}
        className="
          float-right
          mt-6 px-6 py-2
          text-white
          bg-red-600
          rounded-lg
          hover:bg-red-700
        "
      >
        Clear All Orders
      </button>
      <br />
      <br />
    </div>
  );
}
