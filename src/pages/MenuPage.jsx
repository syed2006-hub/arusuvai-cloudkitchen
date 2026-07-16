import React, { useEffect } from 'react';
import Menu from '../components/Menu';
import { useCart } from '../context/CartContext';

export default function MenuPage() {
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    document.title = "Full Menu — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '100px' }}>
      <Menu 
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
    </div>
  );
}
