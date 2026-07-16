import React from 'react';
import thaliImg from '../assets/hero-thali.jpg';

export default function Hero({ splashDone }) {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Old Washermenpet, Chennai</div>
          <h1>
            <span className="line"><span>Homemade food,</span></span>
            <span className="line"><span><span className="italic">made with</span></span></span>
            <span className="line"><span>real love.</span></span>
          </h1>
          <p className="lede">
            No preservatives. No colours. No shortcuts — just the food your amma would approve of, cooked fresh and sent straight to your door.
          </p>
          <div className="cta-row">
            <a href="#order" className="btn btn-primary">Order on WhatsApp →</a>
            <a href="#menu" className="btn btn-ghost">View Menu</a>
          </div>
          <div className="trust-badges">
            <div className="badge"><span className="dot"></span>0% Preservatives</div>
            <div className="badge"><span className="dot"></span>0% Artificial Colour</div>
            <div className="badge"><span className="dot"></span>Cooked to Order</div>
            <div className="badge"><span className="dot"></span>WhatsApp Only, No Calls</div>
          </div>
        </div>
        
        <div className="hero-art">
          <svg className="steam" viewBox="0 0 120 110">
            <path d="M20 100 C 10 80, 30 70, 20 50 C 10 30, 30 20, 24 0"/>
            <path d="M60 100 C 50 80, 70 70, 60 50 C 50 30, 70 20, 64 0"/>
            <path d="M100 100 C 90 80, 110 70, 100 50 C 90 30, 110 20, 104 0"/>
          </svg>
          <div 
            id="heroThaliPlate"
            className="leaf-plate"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3) 100%), url(${thaliImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '6px solid var(--clay-dark)',
              opacity: splashDone ? 1 : 0,
              visibility: splashDone ? 'visible' : 'hidden',
              transition: 'opacity 0.2s ease, visibility 0.2s'
            }}
          ></div>
          
          <svg className="float-icon i1" width="52" height="52" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" fill="#FF9800"/>
            <path d="M20 34c0-10 8-18 12-18s12 8 12 18-6 12-12 12-12-2-12-12z" fill="#FDF9F3"/>
          </svg>
          <svg className="float-icon i2" width="60" height="60" viewBox="0 0 64 64">
            <rect x="6" y="6" width="52" height="52" rx="16" fill="#D84315"/>
            <path d="M20 40c4-12 8-18 22-22" stroke="#FDF9F3" strokeWidth="4" fill="none" strokeLinecap="round"/>
          </svg>
          <svg className="float-icon i3" width="46" height="46" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="30" fill="#BF360C"/>
            <circle cx="32" cy="32" r="12" fill="#FDF9F3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
