import React, { useEffect } from 'react';
import About from '../components/About';

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '70px' }}>
      <About />
    </div>
  );
}
