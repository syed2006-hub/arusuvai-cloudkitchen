import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Kind Words</div>
          <h2>Straight from our <span className="italic">customers' kitchens.</span></h2>
        </div>
        
        <div className="testi-wrap">
          {testimonials.map((t, i) => (
            <div 
              key={`testi-${i}`}
              className={`testi ${activeIndex === i ? 'active' : ''}`}
              style={{ padding: '36px 30px' }}
            >
              <div className="stars" style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '15px', marginBottom: '14px' }}>
                {'★'.repeat(t.stars)}
              </div>
              <p style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(20px, 3.2vw, 24px)', lineHeight: '1.45', margin: '0 0 24px 0', color: 'var(--ink)' }}>
                "{t.text}"
              </p>
              
              <div className="testi-profile" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
                <div className="testi-avatar" style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--clay)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '800',
                  fontSize: '18px',
                  fontFamily: 'Karla, sans-serif',
                  boxShadow: '0 4px 10px rgba(216, 67, 21, 0.2)'
                }}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontWeight: '800', fontSize: '14.5px', color: 'var(--ink)' }}>{t.author}</h4>
                  <span style={{ fontSize: '11.5px', color: 'var(--ink-soft)', display: 'block', marginTop: '2px' }}>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="dots" id="testiDots">
            {testimonials.map((_, i) => (
              <button 
                key={`dot-${i}`}
                className={activeIndex === i ? 'active' : ''}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
