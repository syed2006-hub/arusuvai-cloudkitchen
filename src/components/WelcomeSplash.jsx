import React, { useState, useEffect } from 'react';
import thaliImg from '../assets/hero-thali.jpg';

export default function WelcomeSplash({ targetCoords, isTransitioning }) {
  const [stage, setStage] = useState(0);
  const [activeTags, setActiveTags] = useState([false, false, false, false]);

  useEffect(() => {
    // Stage 1: Play entry spin-pop animation right after mounting
    const timer = setTimeout(() => {
      setStage(1);
    }, 80);

    // Staggered corner tags popup (diagonally/sequentially)
    const t1 = setTimeout(() => setActiveTags(prev => [true, prev[1], prev[2], prev[3]]), 300);
    const t2 = setTimeout(() => setActiveTags(prev => [prev[0], true, prev[2], prev[3]]), 700);
    const t3 = setTimeout(() => setActiveTags(prev => [prev[0], prev[1], true, prev[3]]), 1100);
    const t4 = setTimeout(() => setActiveTags(prev => [prev[0], prev[1], prev[2], true]), 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // Calculate plate styles based on stages and transitions
  const plateStyle = targetCoords ? {
    position: 'fixed',
    top: `${targetCoords.top}px`,
    left: `${targetCoords.left}px`,
    width: `${targetCoords.width}px`,
    height: `${targetCoords.height}px`,
    transform: 'none',
    boxShadow: 'var(--shadow)',
    transition: 'all 0.9s cubic-bezier(0.25, 1, 0.5, 1)',
    zIndex: 10000
  } : {
    position: 'fixed',
    top: 'calc(50% - 70px)',
    left: '50%',
    transform: stage === 1 
      ? 'translate(-50%, -50%) scale(1) rotate(0deg)' 
      : 'translate(-50%, -50%) scale(0.1) rotate(-270deg)',
    width: '220px',
    height: '220px',
    zIndex: 10000,
    transition: 'all 1.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
  };

  return (
    <div className={`welcome-splash ${isTransitioning ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <div className="splash-plate-wrap">
          <div 
            className="splash-plate" 
            style={{ 
              ...plateStyle,
              borderRadius: '50%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '6px solid var(--clay)',
              backgroundImage: `radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%), url(${thaliImg})`
            }}
          />
        </div>
        
        {/* Central Brand Title */}
        <div 
          className={`splash-text-group ${isTransitioning ? 'hidden' : ''}`}
          style={{
            position: 'fixed',
            top: 'calc(50% + 120px)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '480px',
            textAlign: 'center',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h1 className="splash-title">Arusuvai</h1>
          <p className="splash-subtitle">Homemade · Fresh · Delivered</p>
        </div>

        {/* Diagonal Corner Trust Tags */}
        {!isTransitioning && (
          <>
            <div 
              className="splash-corner-tag" 
              style={{ 
                top: '12%', 
                left: '10%',
                opacity: activeTags[0] ? 1 : 0,
                transform: activeTags[0] ? 'scale(1)' : 'scale(0.7)'
              }}
            >
              ✦ HOMEMADE WITH LOVE
            </div>
            <div 
              className="splash-corner-tag" 
              style={{ 
                bottom: '12%', 
                right: '10%',
                opacity: activeTags[1] ? 1 : 0,
                transform: activeTags[1] ? 'scale(1)' : 'scale(0.7)'
              }}
            >
              ✦ 0% PRESERVATIVES
            </div>
            <div 
              className="splash-corner-tag" 
              style={{ 
                top: '12%', 
                right: '10%',
                opacity: activeTags[2] ? 1 : 0,
                transform: activeTags[2] ? 'scale(1)' : 'scale(0.7)'
              }}
            >
              ✦ COLD-PRESSED OILS
            </div>
            <div 
              className="splash-corner-tag" 
              style={{ 
                bottom: '12%', 
                left: '10%',
                opacity: activeTags[3] ? 1 : 0,
                transform: activeTags[3] ? 'scale(1)' : 'scale(0.7)'
              }}
            >
              ✦ RO PURIFIED WATER
            </div>
          </>
        )}
      </div>
    </div>
  );
}
