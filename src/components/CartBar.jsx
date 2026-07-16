import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartBar() {
  const { cartCount, cartTotal } = useCart();
  const location = useLocation();

  // Hide the floating bar on the checkout/order page itself to prevent duplication
  const isOrderPage = location.pathname === '/order';
  const showCartBar = cartCount > 0 && !isOrderPage;

  return (
    <div className={`cart-bar ${showCartBar ? 'show' : ''}`} id="cartBar">
      <span>
        <strong id="cartCount">{cartCount}</strong> items · ₹<strong id="cartTotal">{cartTotal}</strong>
      </span>
      <Link 
        to="/order" 
        className="btn btn-gold" 
        id="cartOrderBtn"
      >
        Review Order & Checkout →
      </Link>
    </div>
  );
}
