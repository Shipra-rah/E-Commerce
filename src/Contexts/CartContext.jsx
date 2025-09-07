import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
      
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
       
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  
  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
