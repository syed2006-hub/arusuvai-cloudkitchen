import React, { useState, useEffect, useRef } from 'react';
import aboutImg from '../assets/about-kitchen.jpg';

function Counter({ target, duration = 1000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix && <sup>{suffix}</sup>}
    </span>
  );
}

export default function About() {
  const kolamRef = useRef(null);
  const [kolamIn, setKolamIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKolamIn(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (kolamRef.current) {
      observer.observe(kolamRef.current);
    }
    return () => {
      if (kolamRef.current) observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="sec" id="about" style={{ paddingBottom: '40px' }}>
        <div className="wrap">
          {/* Story Sub-section */}
          <div className="contact-grid" style={{ alignItems: 'center', marginBottom: '80px', gap: '50px' }}>
            <div>
              <div className="eyebrow">Our Story</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: '22px' }}>
                A home kitchen that grew <span className="italic text-primary">into a family</span>
              </h2>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', fontSize: '15.5px', marginBottom: '16px' }}>
                Arusuvai — the Tamil word for the six tastes — was born from a simple belief: real food, cooked with care, should be available to everyone. What started as meals for our neighbours quickly became a small cloud kitchen serving families across North Chennai.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7', fontSize: '15.5px', marginBottom: '0' }}>
                We don't cut corners. There's no preservative bottle in our kitchen, no artificial colour, no MSG. Just rice, dal, spices, coconut, curry leaves, and the same recipes our grandmothers taught us.
              </p>
            </div>
            <div className="relative" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '24px',
                background: 'var(--bg-deep)',
                transform: 'rotate(2deg)',
                zIndex: 0
              }} />
              <img 
                src={aboutImg} 
                alt="Cooking fresh food in a kitchen" 
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  boxShadow: 'var(--shadow)',
                  zIndex: 1
                }}
              />
            </div>
          </div>

          {/* Promises Sub-section */}
          <div className="sec-head">
            <div className="eyebrow">Why Arusuvai</div>
            <h2>Four promises we don't <span className="italic">bend on.</span></h2>
          </div>
          
          <div className="pillars">
            <div className="pillar">
              <div className="num">
                <Counter target={0} suffix="%" />
              </div>
              <h3>Preservatives</h3>
              <p>Every dish is cooked fresh per order — nothing sits in a freezer waiting for you.</p>
            </div>
            
            <div className="pillar">
              <div className="num">
                <Counter target={100} suffix="%" />
              </div>
              <h3>Homemade</h3>
              <p>Recipes from a real home kitchen, not a factory line — the way your family taught it.</p>
            </div>
            
            <div className="pillar">
              <div className="num">
                <Counter target={13} />
              </div>
              <h3>Signature Dishes</h3>
              <p>A tight, honest menu we can actually promise the quality of, every single time.</p>
            </div>
            
            <div className="pillar">
              <div className="num">
                <Counter target={30} suffix="m" />
              </div>
              <h3>Avg. Prep Time</h3>
              <p>From your WhatsApp message to your doorstep — quick without cutting a single corner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kolam Divider */}
      <div className="kolam-wrap" ref={kolamRef}>
        <svg className={`kolam ${kolamIn ? 'in' : ''}`} width="200" height="60" viewBox="0 0 200 60">
          <path d="M10 30 C 10 10, 40 10, 40 30 C 40 50, 70 50, 70 30 C 70 10, 100 10, 100 30 C 100 50, 130 50, 130 30 C 130 10, 160 10, 160 30 C 160 50, 190 50, 190 30"/>
          <circle cx="10" cy="30" r="3"/>
          <circle cx="70" cy="30" r="3"/>
          <circle cx="130" cy="30" r="3"/>
          <circle cx="190" cy="30" r="3"/>
        </svg>
      </div>
    </>
  );
}
