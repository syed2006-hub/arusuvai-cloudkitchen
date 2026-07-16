import React from 'react';

export default function Contact() {
  const addressLine = "Old Washermenpet, Chennai, Tamil Nadu";
  const phoneDisplay = "+91 93425 61101 — orders & enquiries only, no calls please";
  const emailDisplay = "syedrizwan00211@gmail.com";
  const hoursDisplay = "Daily · 8:00 AM – 10:00 PM";
  const instagramDisplay = "@syed_rizwan_asr";
  const instagramUrl = "https://www.instagram.com/syed_rizwan_asr/";

  return (
    <section className="sec" id="contact" style={{ paddingTop: '10px' }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Contact</div>
          <h2>Find us, <span className="italic">message us.</span></h2>
        </div>
        
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-row">
              <div className="ic">📍</div>
              <div>
                <h4>Kitchen Location</h4>
                <p>{addressLine}</p>
              </div>
            </div>
            
            <div className="contact-row">
              <div className="ic">💬</div>
              <div>
                <h4>WhatsApp</h4>
                <p>{phoneDisplay}</p>
              </div>
            </div>
            
            <div className="contact-row">
              <div className="ic">✉️</div>
              <div>
                <h4>Email</h4>
                <p>{emailDisplay}</p>
              </div>
            </div>
            
            <div className="contact-row">
              <div className="ic">🕐</div>
              <div>
                <h4>Hours</h4>
                <p>{hoursDisplay}</p>
              </div>
            </div>
            
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-row"
              style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}
            >
              <div className="ic">📷</div>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Instagram <span style={{ color: 'var(--clay)', fontSize: '11px' }}>→</span>
                </h4>
                <p style={{ textDecoration: 'underline' }}>{instagramDisplay}</p>
              </div>
            </a>
          </div>
          
          <div className="map-box" style={{ padding: 0, overflow: 'hidden' }}>
            <iframe
              title="Arusuvai CloudKitchen location — Old Washermenpet, Chennai"
              src="https://www.google.com/maps?q=Old%20Washermenpet%2C%20Chennai&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px', display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
