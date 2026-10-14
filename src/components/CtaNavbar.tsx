'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CtaNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
        if (entry.isIntersecting) setIsOpen(false);
      },
      { root: null, threshold: 0.05 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // The CTA will only appear after scrolling down (past the initial hero view)
      setIsScrolledPastHero(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldHideCta = !isScrolledPastHero || isFooterVisible;

  return (
    <div style={{ 
      position: 'relative',
      opacity: shouldHideCta ? 0 : 1,
      pointerEvents: shouldHideCta ? 'none' : 'auto',
      transform: shouldHideCta ? 'translateY(20px)' : 'translateY(0)',
      transition: 'opacity 0.4s ease, transform 0.4s ease'
    }}>
      <style>{`
        @keyframes popoverEnter {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }
        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #152845;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }
        .cta-btn:hover::before {
          transform: scaleX(1);
        }
        .cta-btn:hover {
          color: #fff !important;
        }
        .cta-btn:hover .cta-dot {
          background-color: #fff !important;
        }
        
        .hamburger-btn {
          transition: background-color 0.3s ease;
        }
        .hamburger-btn:hover {
          background-color: #1c365d !important;
        }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button 
          className="cta-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.5rem', 
            backgroundColor: 'transparent', 
            border: '1px solid #152845', 
            color: '#152845', 
            padding: '0.8rem 1.5rem', 
            fontSize: '1.1rem', 
            fontWeight: 500,
            cursor: 'pointer' 
          }}
        >
          Our Selection
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
            <div className="cta-dot" style={{ width: '4px', height: '4px', backgroundColor: '#152845', transition: 'background-color 0.4s ease' }}></div>
            <div className="cta-dot" style={{ width: '4px', height: '4px', backgroundColor: '#152845', transition: 'background-color 0.4s ease' }}></div>
            <div className="cta-dot" style={{ width: '4px', height: '4px', backgroundColor: '#152845', transition: 'background-color 0.4s ease' }}></div>
            <div className="cta-dot" style={{ width: '4px', height: '4px', backgroundColor: '#152845', transition: 'background-color 0.4s ease' }}></div>
          </div>
        </button>
        
        <button 
          className="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            backgroundColor: '#152845', 
            border: 'none', 
            width: '3.5rem', 
            height: '3.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '6px', 
            cursor: 'pointer' 
          }}
        >
          {isOpen ? (
            <div style={{ color: '#fff', fontSize: '1.5rem', lineHeight: 1 }}>&times;</div>
          ) : (
            <>
              <div style={{ width: '20px', height: '2px', backgroundColor: '#fff', alignSelf: 'center', marginLeft: '-4px' }}></div>
              <div style={{ width: '12px', height: '2px', backgroundColor: '#fff', alignSelf: 'center', marginLeft: '-12px' }}></div>
            </>
          )}
        </button>
      </div>

      {/* Popover Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          right: 0,
          marginBottom: '1rem',
          width: '350px',
          height: '380px',
          backgroundColor: '#1f2d4e',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          padding: '2.5rem 2.5rem 1.5rem',
          color: '#fff',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          animation: 'popoverEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '0.25rem'
          }}>
            <Link href="/" onClick={() => setIsOpen(false)} style={{ fontSize: '2.75rem', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-heading), serif', lineHeight: 1.1 }}>Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} style={{ fontSize: '2.75rem', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-heading), serif', lineHeight: 1.1 }}>Services</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} style={{ fontSize: '2.75rem', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-heading), serif', lineHeight: 1.1 }}>About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} style={{ fontSize: '2.75rem', color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-heading), serif', lineHeight: 1.1 }}>Contact</Link>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: '2rem',
            fontSize: '0.85rem', 
            fontWeight: 600 
          }}>
            <a href="https://wa.me/" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#fff', textDecoration: 'none' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> 
              WhatsApp
            </a>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
              <a href="mailto:tax@mjsglobal.co" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#fff', textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> 
                Email
              </a>
              <div style={{ width: '12px', height: '2px', backgroundColor: '#fff', marginTop: '0.5rem' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
