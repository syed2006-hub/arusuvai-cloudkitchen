import React, { useEffect } from 'react';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '70px', paddingBottom: '80px' }}>
      <section className="sec" style={{ paddingTop: '10px' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div className="sec-head" style={{ marginBottom: '40px' }}>
            <div className="eyebrow">Legal</div>
            <h2>Privacy Policy</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: '8px' }}>Last updated: July 2026</p>
          </div>
          
          <div className="contact-card" style={{ padding: '40px 36px', background: 'var(--card)', borderRadius: '24px', border: '1px solid var(--line)', lineHeight: '1.8', color: 'var(--ink-soft)', fontSize: '15px' }}>
            <p style={{ color: 'var(--ink)', fontWeight: '600' }}>
              At Arusuvai CloudKitchen, we respect your privacy. This policy explains what information we collect when you place an order or enquiry, and how we protect it.
            </p>
            
            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>1. Information We Collect</h3>
            <p>
              When you order via our website checkout form or direct WhatsApp messaging, we collect essential details to fulfill your food order:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li>Name & contact details (phone, WhatsApp number).</li>
              <li>Delivery address & venue coordinates.</li>
              <li>Order selections & special food preparation preferences.</li>
            </ul>

            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>2. How We Use Your Data</h3>
            <p>
              We only use your information to prepare and deliver your hot meals, confirm payment status, and communicate order updates. We do not sell, rent, or share your data with third-party marketing companies.
            </p>

            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>3. Data Storage & Local Persistence</h3>
            <p>
              Your temporary shopping cart selections are saved locally in your browser's storage (`localStorage`) for your convenience so you do not lose your items during browsing. We do not store financial or credit card information on our servers; payments are verified directly via secure UPI redirects or cash upon delivery.
            </p>

            <h3 style={{ color: 'var(--ink)', marginTop: '30px', marginBottom: '10px', fontSize: '18px', fontWeight: '800' }}>4. Contact Us</h3>
            <p>
              If you have any questions about your data privacy, you can reach out to us at:
              <br />
              <strong>Email:</strong> syedrizwan00211@gmail.com
              <br />
              <strong>WhatsApp:</strong> +91 93425 61101
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
