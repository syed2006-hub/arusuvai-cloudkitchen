import React, { useState } from 'react';
import { dishes } from '../data/dishes';
import { useCart } from '../context/CartContext';

export function SvgIcon({ name }) {
  switch (name) {
    case 'idli':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="#FFFCF5"/>
          <ellipse cx="20" cy="26" rx="9" ry="7" fill="#F3E7CE" stroke="var(--clay)" strokeWidth="2"/>
          <ellipse cx="42" cy="26" rx="9" ry="7" fill="#F3E7CE" stroke="var(--clay)" strokeWidth="2"/>
          <ellipse cx="32" cy="42" rx="9" ry="7" fill="#F3E7CE" stroke="var(--clay)" strokeWidth="2"/>
        </svg>
      );
    case 'dosa':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="var(--gold)"/>
          <path d="M14 40c6-22 30-22 36 0-10 8-26 8-36 0z" fill="#FDF9F3" stroke="var(--clay)" strokeWidth="2"/>
        </svg>
      );
    case 'bowl':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="var(--clay)"/>
          <path d="M14 30a18 12 0 0036 0z" fill="#FDF9F3"/>
          <rect x="12" y="28" width="40" height="5" rx="2.5" fill="var(--ink)"/>
        </svg>
      );
    case 'plate':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="var(--clay)"/>
          <circle cx="32" cy="32" r="20" fill="#FDF9F3"/>
          <circle cx="32" cy="32" r="8" fill="var(--gold)"/>
        </svg>
      );
    case 'curry':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="var(--gold)"/>
          <path d="M14 34a18 10 0 0036 0z" fill="var(--clay)"/>
          <rect x="12" y="32" width="40" height="4" rx="2" fill="#FDF9F3"/>
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="#FDF9F3"/>
          <path d="M20 44C16 24 40 14 48 20 44 40 26 46 20 44z" fill="var(--clay)"/>
          <path d="M22 42C24 30 34 22 44 20" stroke="var(--clay-light)" strokeWidth="2" fill="none"/>
        </svg>
      );
    case 'vada':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="var(--clay)"/>
          <circle cx="32" cy="32" r="16" fill="none" stroke="var(--gold)" strokeWidth="7"/>
        </svg>
      );
    case 'cup':
      return (
        <svg viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="var(--clay)"/>
          <path d="M20 22h20l-3 22a3 3 0 01-3 2.6h-8a3 3 0 01-3-2.6z" fill="#FDF9F3"/>
          <rect x="16" y="18" width="28" height="5" rx="2.5" fill="var(--gold)"/>
        </svg>
      );
    default:
      return null;
  }
}

export function DishCard({ dish, qty = 0, onAdd, onRemove }) {
  const [animateAdd, setAnimateAdd] = useState(false);

  const handleAddClick = () => {
    onAdd(dish.name, dish.price);
    setAnimateAdd(true);
    setTimeout(() => setAnimateAdd(false), 260);
  };

  return (
    <div className="dish-card" data-cat={dish.cat} data-name={dish.name.toLowerCase()}>
      <div className="dish-visual">
        <span className={`veg-dot ${dish.veg ? 'veg' : 'nonveg'}`}></span>
        {dish.image ? (
          <img 
            src={dish.image} 
            alt={dish.name} 
            className="dish-image"
          />
        ) : (
          <SvgIcon name={dish.icon} />
        )}
      </div>
      <div className="dish-info">
        <div className="cat">{dish.cat}</div>
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <div className="dish-row">
          <span className="price">₹{dish.price}</span>
          
          <div className="add-btn-container">
            {/* Add Button */}
            <button 
              className={`add-btn ${qty > 0 ? 'hidden' : ''}`} 
              onClick={handleAddClick}
              aria-label="Add to cart"
            >
              +
            </button>

            {/* Quantity Control Pill */}
            <div className={`qty-control ${qty > 0 ? 'visible' : ''}`}>
              <button type="button" className="qty-btn" onClick={() => onRemove(dish.name)} aria-label="Decrease quantity">−</button>
              <span className="qty-num">{qty}</span>
              <button type="button" className="qty-btn" onClick={handleAddClick} aria-label="Increase quantity">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [activeCat, setActiveCat] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 6 specific dishes for the Fan Favourites rail:
  // Masala Dosa (id: 2), Chettinad Chicken (id: 6), Sambar Rice (id: 4), Payasam (id: 13), Filter Coffee (id: 11), Mutton Curry (id: 8)
  const featuredIds = [2, 6, 4, 13, 11, 8];
  const featuredDishes = dishes.filter(d => featuredIds.includes(d.id));

  // Filter full menu
  const filteredDishes = dishes.filter(d => {
    const matchesCat = activeCat === 'all' || d.cat === activeCat;
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          d.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = ['all', 'Breakfast', 'Lunch', 'Curry', 'Side Dish', 'Beverage', 'Dessert'];

  return (
    <>
      {/* ============ FEATURED RAIL ============ */}
      <section className="sec" style={{ paddingTop: '40px' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Fan Favourites</div>
            <h2>What Chennai keeps <span className="italic">re-ordering.</span></h2>
          </div>
          <div className="rail" id="featuredRail">
            {featuredDishes.map(dish => (
              <DishCard 
                key={`featured-${dish.id}`}
                dish={dish}
                qty={cart[dish.name]?.qty || 0}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FULL MENU GRID ============ */}
      <section className="sec" id="menu" style={{ background: 'var(--bg-deep)', borderRadius: '40px', margin: '0 20px', paddingLeft: 0, paddingRight: 0 }}>
        <div className="wrap" style={{ paddingTop: '20px' }}>
          <div className="sec-head">
            <div className="eyebrow">Full Menu</div>
            <h2>Thirteen dishes. <span className="italic">Zero compromises.</span></h2>
          </div>
          
          <div className="menu-controls">
            {/* Search Box on the Left */}
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search dishes…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Chips on the Right */}
            <div className="chip-row" id="chipRow">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`chip ${activeCat === cat ? 'active' : ''}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat === 'all' ? 'ALL' : cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          {filteredDishes.length > 0 ? (
            <div className="menu-grid" id="menuGrid">
              {filteredDishes.map(dish => (
                <DishCard 
                  key={`menu-${dish.id}`}
                  dish={dish}
                  qty={cart[dish.name]?.qty || 0}
                  onAdd={addToCart}
                  onRemove={removeFromCart}
                />
              ))}
            </div>
          ) : (
            <p className="empty-state" id="emptyState" style={{ display: 'block' }}>
              No dishes match that search — try another word or category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
