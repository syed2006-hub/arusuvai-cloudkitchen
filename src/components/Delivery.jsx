import React from 'react';

export default function Delivery() {
  const serviceArea = "Washermenpet, Royapuram, Tondiarpet, Perambur & nearby areas in North Chennai";
  const hours = "Daily · 8:00 AM – 10:00 PM";
  
  const facts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Where we deliver",
      body: serviceArea
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Delivery hours",
      body: `${hours}. Same-day only.`
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Minimum order",
      body: "₹150 for delivery. No minimum order for pickup."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
          <polygon points="12 22.08 12 12 3 6.92 3 17.08 12 22.08" />
          <polygon points="12 22.08 21 17.08 21 6.92 12 12 12 22.08" />
          <polygon points="12 12 21 6.92 12 1.87 3 6.92 12 12" />
        </svg>
      ),
      title: "Packaging",
      body: "Sealed, food-grade containers. Curries in leak-proof pots."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Send us a WhatsApp",
      body: "Message the items you'd like, or fill our quick order form."
    },
    {
      num: "02",
      title: "We confirm within 10 mins",
      body: "You'll get the total, estimated delivery time, and payment options."
    },
    {
      num: "03",
      title: "We cook fresh",
      body: "Your food is prepared to order — nothing sits ready-made."
    },
    {
      num: "04",
      title: "Delivered hot",
      body: "Our rider brings your meal in sealed packaging, hot and ready."
    }
  ];

  return (
    <>
      {/* Timings & Delivery Info Grid */}
      <section className="sec" id="delivery" style={{ background: 'var(--bg-deep)', borderRadius: '40px', margin: '40px 20px 0 20px' }}>
        <div className="wrap" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="sec-head">
            <div className="eyebrow">Delivery Info</div>
            <h2>Hot food, <span className="italic">delivered simply.</span></h2>
          </div>
          
          <div className="pillars" style={{ marginBottom: '50px' }}>
            {facts.map((f, i) => (
              <div key={`delivery-fact-${i}`} className="pillar">
                <span className="inline-flex" style={{ color: 'var(--clay)', marginBottom: '14px' }}>
                  {f.icon}
                </span>
                <h3 style={{ margin: '6px 0 10px 0' }}>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>

          <div className="contact-card" style={{ padding: '40px 36px', background: 'var(--card)', borderRadius: '24px', border: '1px solid var(--line)' }}>
            <div className="sec-head" style={{ marginBottom: '30px' }}>
              <div className="eyebrow">How it works</div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)' }}>From WhatsApp to your door in 4 easy steps.</h2>
            </div>
            
            <div className="pillars">
              {steps.map((s, i) => (
                <div key={`step-${i}`} className="pillar" style={{ background: 'var(--bg-deep)', border: 'none' }}>
                  <div className="num" style={{ fontSize: '32px', fontWeight: '800', opacity: 0.6 }}>{s.num}</div>
                  <h3 style={{ margin: '10px 0 8px 0', fontSize: '18px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13.5px' }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
