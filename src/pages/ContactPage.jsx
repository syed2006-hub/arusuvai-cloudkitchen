import React, { useEffect } from 'react';
import Contact from '../components/Contact';

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '70px' }}>
      <Contact />
    </div>
  );
}
