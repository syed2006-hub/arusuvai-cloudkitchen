import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="siteHeader" className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
      <div className="wrap">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-mark">A</span>
          <span className="brand-text">
            <span className="brand-title">Arusuvai</span>
            <span className="brand-subtitle">CloudKitchen</span>
          </span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/catering">Catering</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        {/* Right Actions */}
        <div className="nav-actions">
          {/* Order / Cart Button */}
          <Link to="/order" className="nav-cart-btn" onClick={closeMenu}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="txt">Order</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>

          {/* WhatsApp Order Button */}
          <a 
            href="https://wa.me/919342561101?text=Hi%20Arusuvai%20CloudKitchen%2C%20I%27d%20like%20to%20order" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary nav-wa-btn"
          >
            WhatsApp Order
          </a>
          
          {/* Hamburger Menu Toggle */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown Accordion */}
      <div className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/menu" onClick={closeMenu}>Menu</NavLink>
          <NavLink to="/catering" onClick={closeMenu}>Catering</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/order" onClick={closeMenu}>Order</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
            <Link to="/order" onClick={closeMenu} className="nav-cart-btn" style={{ justifyContent: 'center', width: '100%', display: 'inline-flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span style={{ marginLeft: '8px' }}>Review Order ({cartCount})</span>
            </Link>
            
            <a 
              href="https://wa.me/919342561101?text=Hi%20Arusuvai%20CloudKitchen%2C%20I%27d%20like%20to%20order" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary" 
              onClick={closeMenu} 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
