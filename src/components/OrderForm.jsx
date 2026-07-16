import React, { useState, useEffect } from 'react';
import { dishes } from '../data/dishes';
import { useCart } from '../context/CartContext';

export default function OrderForm() {
  const { cart, addToCart, removeFromCart, clearCart, cartTotal } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    mode: 'delivery',
    address: '',
    time: '',
    payment: 'either',
    note: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill phone/whatsapp matching
  const handlePhoneChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      phone: val,
      // If whatsapp is empty or matched previous phone, update it too
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
    if (formData.mode === 'delivery' && !formData.address.trim()) {
      tempErrors.address = 'Please enter your delivery address';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build items list formatting
    const itemsLines = Object.entries(cart)
      .filter(([_, item]) => item.qty > 0)
      .map(([name, item]) => `• ${name} × ${item.qty} = ₹${item.qty * item.price}`)
      .join('\n');

    const itemsText = itemsLines || '(No items selected — please suggest)';

    // Format text message for WhatsApp with bold headings
    const text = `New Order / Enquiry — Arusuvai CloudKitchen%0A%0A` +
                 `*Name:* ${encodeURIComponent(formData.name)}%0A` +
                 `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
                 `*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}%0A` +
                 `*Type:* ${formData.mode === 'delivery' ? 'Delivery' : 'Pickup'}%0A` +
                 (formData.mode === 'delivery' && formData.address ? `*Address:* ${encodeURIComponent(formData.address)}%0A` : '') +
                 (formData.time ? `*Preferred time:* ${encodeURIComponent(formData.time)}%0A` : '') +
                 `*Payment:* ${formData.payment.toUpperCase()}%0A` +
                 (formData.note ? `*Notes:* ${encodeURIComponent(formData.note)}%0A` : '') +
                 `%0A*Items:*%0A${encodeURIComponent(itemsText)}%0A%0A` +
                 `*Subtotal:* ₹${cartTotal}%0A%0A` +
                 `Sent from arusuvaicloudkitchen.com`;

    const waUrl = `https://wa.me/919342561101?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    setSubmitted(true);
    if (clearCart) {
      clearCart();
    }
  };

  const totalQty = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);

  return (
    <section className="sec" id="order">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Order / Enquiry</div>
          <h2>Tell us what you're <span className="italic">craving.</span></h2>
        </div>
        
        <div className="order-grid">
          {/* Form Column */}
          <div>
            {!submitted ? (
              <form id="orderForm" onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input 
                      id="name" 
                      required 
                      placeholder="e.g. Divya Shankar" 
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
                      placeholder="e.g. 98xxxxxxxx" 
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
                      placeholder="Same as phone? Just re-enter" 
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                    {errors.whatsapp && <span style={{ color: 'var(--clay)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.whatsapp}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="mode">Delivery or pickup</label>
                    <select id="mode" value={formData.mode} onChange={handleChange}>
                      <option value="delivery">Delivery</option>
                      <option value="pickup">Pickup</option>
                    </select>
                  </div>
                </div>

                {formData.mode === 'delivery' && (
                  <div className="field">
                    <label htmlFor="address">Delivery address</label>
                    <textarea 
                      id="address" 
                      required
                      placeholder="Door / flat, street, landmark, area, pincode" 
                      value={formData.address}
                      onChange={handleChange}
                      style={{ minHeight: '70px' }}
                    ></textarea>
                    {errors.address && <span style={{ color: 'var(--clay)', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.address}</span>}
                  </div>
                )}

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="time">Preferred time (optional)</label>
                    <input 
                      id="time" 
                      placeholder="e.g. 1:00 PM today" 
                      value={formData.time}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="payment">Payment Mode</label>
                    <select id="payment" value={formData.payment} onChange={handleChange}>
                      <option value="either">Cash or UPI (decide later)</option>
                      <option value="cash">Cash on delivery</option>
                      <option value="upi">UPI / Online</option>
                    </select>
                  </div>
                </div>
                
                <div className="field">
                  <label htmlFor="note">Special instructions (optional)</label>
                  <textarea 
                    id="note" 
                    placeholder="Less spicy, no onion, allergy notes…" 
                    value={formData.note}
                    onChange={handleChange}
                    style={{ minHeight: '70px' }}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Order on WhatsApp →
                </button>
              </form>
            ) : (
              <div className="form-success" style={{ display: 'block' }}>
                <div className="check-circle">✓</div>
                <h3 style={{ marginBottom: '8px' }}>Order ready to send!</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '14.5px', margin: '0 0 24px' }}>
                  We've opened WhatsApp with your order pre-filled — just hit send and we'll confirm right away.
                </p>
                <button 
                  className="btn btn-ghost" 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      whatsapp: '',
                      mode: 'delivery',
                      address: '',
                      time: '',
                      payment: 'either',
                      note: ''
                    });
                  }}
                >
                  Place Another Order
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Cart Column */}
          <aside className="contact-card" style={{ padding: '30px', height: 'fit-content', position: 'sticky', top: '100px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid var(--line)', paddingBottom: '14px', marginBottom: '18px' }}>
              <span style={{ fontSize: '20px' }}>🛒</span>
              <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Your items</h3>
            </div>
            
            {totalQty === 0 ? (
              <p style={{ color: 'var(--ink-soft)', fontSize: '14px', margin: '0 0 20px 0', lineHeight: '1.6' }}>
                No items yet. Add from the list below, or leave empty and describe what you'd like in the notes.
              </p>
            ) : (
              <>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {Object.entries(cart)
                    .filter(([_, item]) => item.qty > 0)
                    .map(([name, item]) => (
                      <li key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                        <div style={{ minWidth: 0 }}>
                          <p style={{ margin: 0, fontWeight: '700', fontSize: '14.5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</p>
                          <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: 'var(--ink-soft)' }}>
                            ₹{item.price} × {item.qty} = ₹{item.qty * item.price}
                          </p>
                        </div>
                        <div className="qty-control" style={{ flexShrink: 0 }}>
                          <button type="button" className="qty-btn" onClick={() => removeFromCart(name)}>−</button>
                          <span className="qty-num" style={{ fontSize: '13px' }}>{item.qty}</span>
                          <button type="button" className="qty-btn" onClick={() => addToCart(name, item.price)}>+</button>
                        </div>
                      </li>
                    ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: '14px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>Subtotal</span>
                  <strong style={{ fontSize: '20px', color: 'var(--clay)', fontWeight: '800' }}>₹{cartTotal}</strong>
                </div>
                <button 
                  type="button" 
                  onClick={clearCart} 
                  style={{ background: 'none', border: 'none', color: 'var(--ink-soft)', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px', padding: 0, display: 'block', marginBottom: '24px' }}
                >
                  Clear items
                </button>
              </>
            )}

            {/* Quick Add Menu Dropdown Accordion */}
            <details style={{ borderTop: '1px solid var(--line)', paddingTop: '16px' }}>
              <summary style={{ cursor: 'pointer', fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--clay)', listStyle: 'none' }}>
                + Add items from menu
              </summary>
              <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0 0', maxHeight: '250px', overflowY: 'auto' }}>
                {dishes.map(dish => {
                  const currentQty = cart[dish.name]?.qty || 0;
                  return (
                    <li 
                      key={dish.id} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        gap: '10px', 
                        padding: '10px 12px', 
                        borderRadius: '12px', 
                        border: '1.5px solid var(--line)', 
                        background: 'var(--bg)', 
                        marginBottom: '8px' 
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <p style={{ margin: 0, fontWeight: '700', fontSize: '12.5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{dish.name}</p>
                        <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'var(--ink-soft)' }}>₹{dish.price}</p>
                      </div>
                      
                      <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={() => addToCart(dish.name, dish.price)}
                        style={{ padding: '6px 12px', fontSize: '11px', borderRadius: '50px' }}
                      >
                        {currentQty > 0 ? `In Cart (${currentQty})` : 'Add'}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </details>
          </aside>
        </div>
      </div>
    </section>
  );
}
