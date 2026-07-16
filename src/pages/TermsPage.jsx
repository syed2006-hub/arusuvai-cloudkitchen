import React, { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <section className="sec">
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <div className="eyebrow">Legal</div>
            <h2>Terms of Service</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: '8px' }}>Last updated: July 2026</p>
          </div>
          
          <div className="contact-card" style={{ padding: '40px 36px', background: 'var(--card)', borderRadius: '24px', border: '1px solid var(--line)', lineHeight: '1.8', color: 'var(--ink-soft)', fontSize: '15px' }}>
            <p style={{ color: 'var(--ink)', fontWeight: '600' }}>
              Welcome to Arusuvai CloudKitchen. By ordering from our menu or using our events/enquiry services, you agree to comply with the following simple terms.
            </p>
            
            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>1. Order Preparation & Freshness</h3>
            <p>
              Every meal is prepared fresh to order in our home kitchen. Because we do not use pre-made bases or chemical preservatives, we ask that you consume meals within 3 hours of delivery for the best taste and safety.
            </p>

            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>2. Event Bookings & Payments</h3>
            <p>
              For bulk events (15 to 150 plates) booked through our `/events` form:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li>Orders require a minimum 24-hour advance confirmation.</li>
              <li>A booking deposit of 50% is required to secure the slot, with the remaining balance due upon delivery.</li>
              <li>Cancellations made within 12 hours of the event date are subject to a forfeiture of the deposit to cover fresh ingredient costs.</li>
            </ul>

            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>3. Delivery Areas & Timelines</h3>
            <p>
              We deliver within specified circles in Old Washermenpet, Royapuram, Tondiarpet, and Perambur. Delivery timelines are estimates; extreme weather or traffic may delay riders, but we will notify you immediately on WhatsApp.
            </p>

            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>4. Disclaimer</h3>
            <p>
              Arusuvai CloudKitchen is committed to hygiene standards (RO water, wood-pressed cold oils). However, if you have severe food allergies (like peanuts or specific lentils), please notify us on WhatsApp prior to ordering so we can take extra kitchen precautions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
