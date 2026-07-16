import React, { useEffect } from 'react';
import OrderForm from '../components/OrderForm';
import { useCart } from '../context/CartContext';

export default function OrderPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    document.title = "Order / Enquiry — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '100px' }}>
      <OrderForm 
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}
