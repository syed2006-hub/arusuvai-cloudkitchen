import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import CartBar from './components/CartBar';
import Footer from './components/Footer';
import WelcomeSplash from './components/WelcomeSplash';

// Pages
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import OrderPage from './pages/OrderPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Scroll reveal observer and route navigation reset
function ScrollToTopAndReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll page to top on route change
    window.scrollTo(0, 0);
    
    // Setup Scroll Reveal Intersection Observer
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elementsToReveal = document.querySelectorAll('.reveal, .reveal-scale, .reveal-stagger');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function AppContent() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [splashState, setSplashState] = useState('welcome');
  const [targetCoords, setTargetCoords] = useState(null);

  useEffect(() => {
    // Skip splash completely on other pages
    if (location.pathname !== '/') {
      setSplashState('done');
      return;
    }

    if (splashState === 'welcome') {
      const transTimer = setTimeout(() => {
        const heroPlate = document.getElementById('heroThaliPlate');
        if (heroPlate) {
          const rect = heroPlate.getBoundingClientRect();
          setTargetCoords({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          });
        }
        setSplashState('transitioning');
      }, 2000); // Increased welcome delay by 0.5s (from 2.0s to 2.5s)

      return () => clearTimeout(transTimer);
    }

    if (splashState === 'transitioning') {
      const doneTimer = setTimeout(() => {
        setSplashState('done');
      }, 900); // 900ms matches the CSS coordinate transition duration

      return () => clearTimeout(doneTimer);
    }
  }, [location.pathname, splashState]);

  return (
    <>
      {splashState !== 'done' && (
        <WelcomeSplash 
          targetCoords={targetCoords} 
          isTransitioning={splashState === 'transitioning'} 
        />
      )}

      <ScrollToTopAndReveal />
      
      {/* Navigation Header */}
      <Header />

      {/* Dynamic Route Pages */}
      <Routes>
        <Route path="/" element={<Home splashDone={splashState === 'done'} />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/catering" element={<Navigate to="/events" replace />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery" element={<Navigate to="/" replace />} />
        <Route path="/gallery" element={<Navigate to="/" replace />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>

      {/* Footer Section */}
      <Footer />

      {/* Global Cart Bar (floats on all routes when items are present) */}
      <CartBar />

      {/* WhatsApp Fixed Floating Action Button (FAB) */}
      <a 
        className={`wa-fab ${cartCount > 0 ? 'cart-visible' : ''}`}
        href="https://wa.me/919342561101?text=Hi%20Arusuvai%20CloudKitchen%2C%20I%27d%20like%20to%20order" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.2-1.44a9.9 9.9 0 0 0 4.84 1.24h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2zm5.79 14.11c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.92-1.26-4.82-4.2-4.97-4.4-.15-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.02-2.42.26-.29.58-.36.77-.36l.55.01c.18.01.42-.07.65.5.24.58.82 2.01.89 2.16.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.15.28.68 1.13 1.47 1.83 1.01.9 1.86 1.18 2.14 1.31.28.13.44.11.6-.07.17-.18.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/>
        </svg>
      </a>
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
