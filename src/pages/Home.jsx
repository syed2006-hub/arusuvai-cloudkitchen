import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Gallery from '../components/Gallery';
import Delivery from '../components/Delivery';
import { dishes } from '../data/dishes';
import { DishCard } from '../components/Menu';
import { useCart } from '../context/CartContext';

export default function Home({ splashDone }) {
  const { cart, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    document.title = "Arusuvai CloudKitchen — Homemade South Indian Meals in Chennai";
  }, []);

  // Filter 3 bestseller / specialties dishes for display on Home:
  // Masala Dosa (id 2), Sambar Rice (id 4), Chettinad Chicken (id 6)
  const bestsellers = dishes.filter(d => [2, 4, 6].includes(d.id));

  return (
    <>
      {/* Hero Section */}
      <div className="reveal">
        <Hero splashDone={splashDone} />
      </div>

      {/* Signature Ticker Ribbon */}
      <div className="ticker reveal">
        <div className="track">
          <span>Homemade with Love</span>
          <span>No Preservatives</span>
          <span>No Artificial Colours</span>
          <span>No Ajinomoto</span>
          <span>Made Fresh Daily</span>
          <span>WhatsApp Orders Only</span>
          
          <span>Homemade with Love</span>
          <span>No Preservatives</span>
          <span>No Artificial Colours</span>
          <span>No Ajinomoto</span>
          <span>Made Fresh Daily</span>
          <span>WhatsApp Orders Only</span>
        </div>
      </div>

      {/* specialties Section */}
      <section className="sec" style={{ paddingTop: '80px' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <div>
              <div className="eyebrow">Our Specialties</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)' }}>Freshly made favourites</h2>
            </div>
            <Link to="/menu" style={{ fontSize: '15px', fontWeight: '800', color: 'var(--clay)', textDecoration: 'underline' }}>
              See full menu →
            </Link>
          </div>

          <div className="menu-grid">
            {bestsellers.map(dish => (
              <DishCard 
                key={`bestseller-${dish.id}`}
                dish={dish}
                qty={cart[dish.name]?.qty || 0}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="reveal">
        <Gallery />
      </div>

      {/* Delivery Section */}
      <div className="reveal">
        <Delivery />
      </div>

      {/* Testimonials */}
      <div className="reveal">
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <div className="reveal">
        <FAQ />
      </div>

      {/* Custom SVG Kolam Divider */}
      <div className="kolam-wrap reveal">
        <svg className="kolam in" width="200" height="60" viewBox="0 0 200 60">
          <path d="M10 30 C 10 10, 40 10, 40 30 C 40 50, 70 50, 70 30 C 70 10, 100 10, 100 30 C 100 50, 130 50, 130 30 C 130 10, 160 10, 160 30 C 160 50, 190 50, 190 30"/>
          <circle cx="10" cy="30" r="3"/>
          <circle cx="70" cy="30" r="3"/>
          <circle cx="130" cy="30" r="3"/>
          <circle cx="190" cy="30" r="3"/>
        </svg>
      </div>

      {/* WhatsApp Banner CTA */}
      <section className="sec" style={{ paddingBottom: '80px' }}>
        <div className="wrap">
          <div className="order-side" style={{ padding: '50px 40px', borderRadius: '30px' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4.5vw, 40px)', fontWeight: '800', marginBottom: '14px' }}>
              Hungry? Message us on WhatsApp.
            </h2>
            <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6', maxWidth: '640px', marginBottom: '30px' }}>
              No app to install. No account to create. Just tap and tell us what you'd like — we'll prepare it fresh and take care of the rest.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a 
                href="https://wa.me/919342561101?text=Hi%20Arusuvai%20CloudKitchen%2C%20I%27d%20like%20to%20order" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold"
              >
                Chat on WhatsApp Now
              </a>
              <Link to="/order" className="btn btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                Fill enquiry form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
