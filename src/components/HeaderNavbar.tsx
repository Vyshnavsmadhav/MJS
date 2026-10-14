'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [showNavbar, setShowNavbar] = useState(!isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setShowNavbar(true);
      return;
    }

    const handleScroll = () => {
      // On homepage, appear when scrolling past 150px into the body
      if (window.scrollY > 150) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0,
      right: 0,
      backgroundColor: 'rgba(224, 240, 252, 0.88)', 
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      color: '#0A1E3A',
      padding: '0.95rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      borderBottom: '1px solid rgba(140, 185, 222, 0.45)',
      boxShadow: showNavbar ? '0 10px 30px -6px rgba(45, 95, 145, 0.16)' : 'none',
      transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
      opacity: showNavbar ? 1 : 0,
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
      pointerEvents: showNavbar ? 'auto' : 'none'
    }}>
      {/* Brand Logo with Gold Monogram Accent */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #152E52 0%, #0B1C33 100%)',
          color: '#D4B776',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '0.82rem',
          letterSpacing: '0.05em',
          boxShadow: '0 4px 12px rgba(21, 46, 82, 0.22)'
        }}>
          MJS
        </div>
        <span style={{ 
          fontSize: '1.15rem', 
          fontWeight: 700, 
          letterSpacing: '0.14em', 
          color: '#0A1E3A',
          fontFamily: 'var(--font-heading)'
        }}>
          MJS GLOBAL
        </span>
      </Link>
      
      {/* Navigation Tiles - Preserving Exact Arrangement & Names */}
      <nav style={{ 
        display: 'flex', 
        gap: '0.4rem', 
        fontSize: '0.88rem', 
        fontWeight: 600, 
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: '0.35rem 0.5rem',
        borderRadius: '999px',
        border: '1px solid rgba(140, 185, 222, 0.5)',
        boxShadow: '0 2px 10px rgba(70, 120, 170, 0.08)'
      }}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              style={{
                position: 'relative',
                color: isActive ? '#0A1E3A' : '#415A77',
                backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                padding: '0.5rem 1.15rem',
                borderRadius: '999px',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: isActive ? '0 2px 8px rgba(35, 75, 115, 0.12)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#0A1E3A';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#415A77';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {isActive && (
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#0A1E3A'
                }} />
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* CTA Button */}
      <Link 
        href="/contact" 
        style={{
          background: 'linear-gradient(135deg, #D4B776 0%, #C4A257 100%)',
          color: '#071626',
          border: 'none',
          padding: '0.65rem 1.45rem',
          fontWeight: 600,
          fontSize: '0.84rem',
          letterSpacing: '0.04em',
          transition: 'all 0.25s ease',
          borderRadius: '999px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 4px 15px rgba(212, 183, 118, 0.28)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 183, 118, 0.38)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 183, 118, 0.28)';
        }}
      >
        <span>Get in Touch</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </header>
  );
}
