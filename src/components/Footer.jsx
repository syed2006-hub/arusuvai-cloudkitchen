import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const instagramUrl = "https://www.instagram.com/syed_rizwan_asr/";
  const email = "syedrizwan00211@gmail.com";
  
  return (
    <footer>
      <div className="wrap">
        <div className="ticker small" style={{ marginBottom: '40px' }}>
          <div className="track">
            <span>Homemade with Love</span>
            <span>No Preservatives</span>
            <span>No Artificial Colours</span>
            <span>No Ajinomoto</span>
            <span>Made Fresh Daily</span>
            
            <span>Homemade with Love</span>
            <span>No Preservatives</span>
            <span>No Artificial Colours</span>
            <span>No Ajinomoto</span>
            <span>Made Fresh Daily</span>
          </div>
        </div>
        
        <div className="foot-grid">
          <div>
            <div className="brand">
              Arusuvai <span className="italic">CloudKitchen</span>
            </div>
            <p>Homemade South Indian food, cooked fresh, delivered with care. No preservatives. No colours. No shortcuts.</p>
          </div>
          
          <div>
            <h4>Explore</h4>
            <Link to="/menu">Menu</Link>
            <Link to="/events">Events</Link>
            <Link to="/order">Order</Link>
          </div>
          
          <div>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          
          <div>
            <h4>Reach Us</h4>
            <a href="https://wa.me/919342561101" target="_blank" rel="noopener noreferrer">
              WhatsApp: +91 93425 61101
            </a>
            <a href={`mailto:${email}`}>
              {email}
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram: @syed_rizwan_asr
            </a>
          </div>
        </div>
        
        <div className="foot-bottom">
          <span>© 2026 Arusuvai CloudKitchen. Made with love in Chennai.</span>
          <span>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
