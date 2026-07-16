import React, { useEffect } from 'react';
import FAQ from '../components/FAQ';

export default function FAQPage() {
  useEffect(() => {
    document.title = "FAQ — Arusuvai CloudKitchen";
  }, []);

  return (
    <div style={{ paddingTop: '100px' }}>
      <FAQ />
    </div>
  );
}
