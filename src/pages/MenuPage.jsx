import React, { useEffect } from 'react';
import Menu from '../components/Menu';
import { useCart } from '../context/CartContext';
import menuDosaImg from '../assets/menu_hero_dosa.png';

export default function MenuPage() {
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    document.title = "Full Menu — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Trust-Increasing Small Menu Hero Section */}
      <section className="menu-hero-small">
        <div className="wrap menu-hero-small-grid">
          <div className="menu-hero-small-text">
            <div className="eyebrow">Zero Preservatives · Cooked Fresh</div>
            <h2>Full Menu</h2>
            <p>
              13 traditional South Indian dishes prepared fresh in our home kitchen. Made to order using wood-pressed cold oils, RO purified water, and home-ground spices.
            </p>
          </div>
          <div className="menu-hero-small-image">
            <img 
              src={menuDosaImg} 
              alt="Fresh Masala Dosa" 
              className="menu-hero-shaped-img"
            />
          </div>
        </div>
      </section>

      <Menu 
        cart={cart}
        onAdd={addToCart}
        onRemove={removeFromCart}
      />
    </div>
  );
}
