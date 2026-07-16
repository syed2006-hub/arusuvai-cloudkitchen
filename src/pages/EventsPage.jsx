import React, { useState, useEffect } from 'react';

export default function EventsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    event: 'Pooja / Festival',
    date: '',
    time: '',
    guests: '25',
    menuNote: '',
    note: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Events & Bulk Orders — Arusuvai CloudKitchen";
  }, []);

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      phone: val,
      whatsapp: prev.whatsapp === prev.phone ? val : prev.whatsapp
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
    if (!formData.whatsapp.trim()) tempErrors.whatsapp = 'WhatsApp number is required';
    if (!formData.date) tempErrors.date = 'Event date is required';
    const guestNum = parseInt(formData.guests);
    if (!formData.guests || isNaN(guestNum) || guestNum < 15) {
      tempErrors.guests = 'Minimum count for events is 15 plates';
    } else if (guestNum > 150) {
      tempErrors.guests = 'Maximum capacity is 150 plates';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Format text message for WhatsApp with bold headings
    const text = `New Events / Bulk Enquiry — Arusuvai CloudKitchen%0A%0A` +
                 `*Name:* ${encodeURIComponent(formData.name)}%0A` +
                 `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
                 `*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A` +
                 `*Event Type:* ${encodeURIComponent(formData.event)}%0A` +
                 `*Guests:* ${encodeURIComponent(formData.guests)} plates%0A` +
                 `*Date:* ${encodeURIComponent(formData.date)}%0A` +
                 (formData.time ? `*Time:* ${encodeURIComponent(formData.time)}%0A` : '') +
                 (formData.menuNote ? `%0AMenu Preferences:%0A${encodeURIComponent(formData.menuNote)}%0A` : '') +
                 (formData.note ? `%0ASpecial Instructions:%0A${encodeURIComponent(formData.note)}%0A` : '') +
                 `%0ASent from arusuvaicloudkitchen.com`;

    const waUrl = `https://wa.me/919342561101?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="sec" style={{ paddingBottom: '40px' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Events & Catering</div>
            <h2>Bulk orders & events <span className="italic">undertaken.</span></h2>
            <p className="lede" style={{ marginTop: '12px', maxWidth: '700px' }}>
              We undertake catering orders from **15 to 150 plates** for poojas, birthdays, family gatherings, corporate lunches, and housewarming functions. Prepared in home kitchen hygiene, packaged securely, and delivered fresh to your venue.
            </p>
          </div>

          {/* Quality Assurance Badges */}
          <div className="pillars" style={{ marginBottom: '60px' }}>
            <div className="pillar" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>🍃</span>
              <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 6px 0' }}>100% Home Sourcing</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: 0 }}>Daily handpicked fresh vegetables & high-grade lentils.</p>
            </div>
            <div className="pillar" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>🏺</span>
              <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 6px 0' }}>Cold-Pressed Oils</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: 0 }}>Cooked using premium wood-pressed sesame and peanut oils.</p>
            </div>
            <div className="pillar" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>❌</span>
              <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 6px 0' }}>0% Added MSG / Colours</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: 0 }}>No chemical flavor enhancers, artificial color powders, or baking soda.</p>
            </div>
            <div className="pillar" style={{ textAlign: 'center', padding: '32px 20px' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>💧</span>
              <h4 style={{ fontSize: '17px', fontWeight: '800', margin: '0 0 6px 0' }}>RO Purified Cooking</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', margin: 0 }}>Pure reverse-osmosis purified water used for all cooking and washing.</p>
            </div>
          </div>

          <div className="order-grid">
            {/* Events Form */}
            <div>
              {!submitted ? (
                <form id="eventsForm" onSubmit={handleSubmit} noValidate>
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="name">Your name</label>
                      <input 
                        id="name" 
                        required 
                        placeholder="e.g. Syed Rizwan" 
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span style={{ color: 'var(--clay)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone number</label>
                      <input 
                        id="phone" 
                        required 
                        placeholder="e.g. 93xxxxxxxx" 
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                      {errors.phone && <span style={{ color: 'var(--clay)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="whatsapp">WhatsApp number</label>
                      <input 
                        id="whatsapp" 
                        required 
                        placeholder="Same as phone? Re-enter" 
                        value={formData.whatsapp}
                        onChange={handleChange}
                      />
                      {errors.whatsapp && <span style={{ color: 'var(--clay)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.whatsapp}</span>}
                    </div>
                    <div className="field">
                      <label htmlFor="event">Event / occasion type</label>
                      <select id="event" value={formData.event} onChange={handleChange}>
                        <option value="Pooja / Festival">Pooja / Festival</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Corporate Lunch">Corporate Lunch</option>
                        <option value="Family Gathering">Family Gathering</option>
                        <option value="Other Function">Other Occasion</option>
                      </select>
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="date">Event Date</label>
                      <input 
                        type="date"
                        id="date" 
                        required
                        value={formData.date}
                        onChange={handleChange}
                      />
                      {errors.date && <span style={{ color: 'var(--clay)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.date}</span>}
                    </div>
                    <div className="field">
                      <label htmlFor="guests">Guest Count (plates)</label>
                      <input 
                        type="number"
                        id="guests" 
                        required
                        placeholder="Min 15, Max 150" 
                        value={formData.guests}
                        onChange={handleChange}
                      />
                      {errors.guests && <span style={{ color: 'var(--clay)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.guests}</span>}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="menuNote">Menu choices & preferences</label>
                    <textarea 
                      id="menuNote" 
                      placeholder="e.g. Sambar rice meal, Medu vada, Semiya payasam" 
                      value={formData.menuNote}
                      onChange={handleChange}
                      style={{ minHeight: '80px' }}
                    ></textarea>
                  </div>

                  <div className="field">
                    <label htmlFor="note">Special venue delivery notes (optional)</label>
                    <textarea 
                      id="note" 
                      placeholder="Delivery address, preferred setup time, notes..." 
                      value={formData.note}
                      onChange={handleChange}
                      style={{ minHeight: '60px' }}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Events Inquiry on WhatsApp →
                  </button>
                </form>
              ) : (
                <div className="form-success" style={{ display: 'block' }}>
                  <div className="check-circle">✓</div>
                  <h3 style={{ marginBottom: '8px' }}>Enquiry prepared!</h3>
                  <p style={{ color: 'var(--ink-soft)', fontSize: '14.5px', margin: '0 0 24px' }}>
                    We've opened WhatsApp with your events enquiry details. Press send, and we will get back to you with custom menu options and pricing.
                  </p>
                  <button 
                    className="btn btn-ghost" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        whatsapp: '',
                        event: 'Pooja / Festival',
                        date: '',
                        time: '',
                        guests: '25',
                        menuNote: '',
                        note: ''
                      });
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              )}
            </div>

            {/* Side Info Column */}
            <aside className="contact-card" style={{ padding: '30px', height: 'fit-content' }}>
              <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '14px', marginBottom: '18px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Event Details</h3>
              </div>
              <ul style={{ paddingLeft: '20px', margin: '0 0 20px 0', fontSize: '14.5px', lineHeight: '1.8', color: 'var(--ink-soft)' }}>
                <li>**Order Notice**: Minimum 24-hour notice required for bulk events.</li>
                <li>**Custom Menus**: We can custom craft South Indian traditional meals, snack boxes, and breakfast arrays.</li>
                <li>**Packaging Options**: Choose between individual meal containers or buffet-style thermal container deliveries.</li>
                <li>**Payment Terms**: 50% advance for booking confirmation, balance upon delivery.</li>
              </ul>
              <div style={{ background: 'var(--bg-deep)', padding: '16px', borderRadius: '16px', fontSize: '13.5px', color: 'var(--ink)' }}>
                ℹ️ For customized menus larger than 150 plates or specific requests, message us directly via WhatsApp.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
