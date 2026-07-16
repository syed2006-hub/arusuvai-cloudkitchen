import React from 'react';
import dosaImg from '../assets/dish-dosa.jpg';
import coffeeImg from '../assets/dish-coffee.jpg';
import thaliImg from '../assets/hero-thali.jpg';

export default function Gallery() {
  const items = [
    {
      title: "Handmade Crispy Masala Dosa",
      desc: "Cooked to order with home-ground rice flour and wood-pressed oil.",
      img: dosaImg,
      size: "bento-wide"
    },
    {
      title: "Our Signature South Indian Thali",
      desc: "A rich, balanced meal featuring sambar, kuzhambu, rasam, and daily poriyals.",
      img: thaliImg,
      size: "bento-tall"
    },
    {
      title: "Strong filter coffee",
      desc: "Classic chicory blend, frothed with hot milk.",
      img: coffeeImg,
      size: "bento-standard"
    },
    {
      title: "Daily Sourced Spices",
      desc: "Every day begins with hand-grinding coriander, cumin, and turmeric.",
      img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&auto=format&fit=crop&q=80",
      size: "bento-standard"
    },
    {
      title: "Clean, Sealed Packing",
      desc: "Delivered in food-grade leak-proof tubs so everything stays hot and fresh.",
      img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
      size: "bento-wide"
    },
    {
      title: "Gold Medu Vadas",
      desc: "Crispy on the outside, soft on the inside, cooked fresh.",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80",
      size: "bento-standard"
    }
  ];

  return (
    <section className="sec" id="gallery">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Gallery</div>
          <h2>Our kitchen, <span className="italic">our process.</span></h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: '8px', maxWidth: '600px' }}>
            Real glimpses of our daily preparations, home-ground spices, and packaging hygiene standards.
          </p>
        </div>
        
        <div className="bento-grid">
          {items.map((item, i) => (
            <div 
              key={`bento-${i}`}
              className={`bento-item ${item.size}`}
            >
              <img src={item.img} alt={item.title} className="bento-img" />
              <div className="bento-overlay">
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
