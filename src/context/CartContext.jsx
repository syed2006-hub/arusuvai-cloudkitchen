import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Initialize cart from localStorage if present
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('arusuvai_cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // Persist cart state in localStorage
  useEffect(() => {
    localStorage.setItem('arusuvai_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (name, price) => {
    setCart(prev => {
      const currentQty = prev[name]?.qty || 0;
      return {
        ...prev,
        [name]: { qty: currentQty + 1, price }
      };
    });
  };

  const removeFromCart = (name) => {
    setCart(prev => {
      const currentQty = prev[name]?.qty || 0;
      if (currentQty <= 1) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return {
        ...prev,
        [name]: { ...prev[name], qty: currentQty - 1 }
      };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  // Helper values
  let cartCount = 0;
  let cartTotal = 0;
  Object.values(cart).forEach(item => {
    cartCount += item.qty;
    cartTotal += item.qty * item.price;
  });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
