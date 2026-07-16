import React, { useState, useRef } from 'react';
import { faqs } from '../data/faqs';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sec" id="faq">
      <div className="wrap" style={{ maxWidth: '820px' }}>
        <div className="sec-head">
          <div className="eyebrow">FAQ</div>
          <h2>Good to know <span className="italic">before you order.</span></h2>
        </div>
        <div id="faqList">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={`faq-${index}`} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-q" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="plus">+</span>
                </button>
                <div 
                  className="faq-a"
                  ref={el => contentRefs.current[index] = el}
                  style={{
                    maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
                  }}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
