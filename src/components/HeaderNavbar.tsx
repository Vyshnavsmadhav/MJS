'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
        className="header-container"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0,
          right: 0,
          backgroundColor: 'rgba(7, 19, 39, 0.95)', 
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          color: '#FFFFFF',
          padding: '0.75rem 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: showNavbar ? '0 10px 30px -6px rgba(3, 10, 22, 0.5)' : 'none',
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          opacity: showNavbar ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
          pointerEvents: showNavbar ? 'auto' : 'none'
        }}
      >
        {/* Brand Logo with Official Circular Emblem & Typography */}
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
          <div style={{
            position: 'relative',
            width: 'clamp(160px, 38vw, 215px)',
            height: '48px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Image
              src="/mjs-logo.webp"
              alt="MJS Global - Accounts Tax Advisory"
              fill
              sizes="(max-width: 768px) 180px, 240px"
              style={{
                objectFit: 'contain',
                objectPosition: 'left center'
              }}
              priority
            />
          </div>
        </Link>
        
        {/* Navigation Tiles - Preserving Exact Arrangement & Names (Desktop) */}
        <nav 
          className="nav-center-dock"
          style={{ 
            display: 'flex', 
            gap: '0.4rem', 
            fontSize: '0.88rem', 
            fontWeight: 600, 
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            padding: '0.35rem 0.5rem',
            borderRadius: '999px',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.25)'
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                style={{
                  position: 'relative',
                  color: isActive ? '#07162C' : 'rgba(255, 255, 255, 0.78)',
                  backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.2)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.78)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {isActive && (
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#07162C'
                  }} />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Desktop CTA Button + Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link 
            href="/contact" 
            className="nav-cta-btn"
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

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: mobileMenuOpen ? 'rgba(212, 183, 118, 0.2)' : 'rgba(255, 255, 255, 0.08)',
              border: mobileMenuOpen ? '1px solid #D4B776' : '1px solid rgba(255, 255, 255, 0.15)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: 0
            }}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4B776" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="17" x2="20" y2="17"></line>
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(4, 10, 20, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 998,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        className="mobile-drawer-panel"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 86vw)',
          backgroundColor: '#07162C',
          borderLeft: '1px solid rgba(212, 183, 118, 0.25)',
          boxShadow: '-10px 0 35px rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          padding: '5rem 1.75rem 2rem',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          overflowY: 'auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D4B776' }} />
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: '#D4B776', fontWeight: 700, textTransform: 'uppercase' }}>
            NAVIGATION
          </span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: '0.9rem 1.15rem',
                  borderRadius: '10px',
                  backgroundColor: isActive ? 'rgba(212, 183, 118, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: isActive ? '1px solid rgba(212, 183, 118, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#D4B776' : '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{item.name}</span>
                <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>→</span>
              </Link>
            );
          })}
        </nav>

        {/* Quick Contact within Drawer */}
        <div style={{
          marginTop: 'auto',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: 'linear-gradient(135deg, #D4B776 0%, #C4A257 100%)',
              color: '#071626',
              padding: '0.85rem 1.25rem',
              borderRadius: '999px',
              textAlign: 'center',
              fontWeight: 700,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <span>Get in Touch</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            <a href="tel:+971504926945" style={{ textDecoration: 'none', color: 'inherit' }}>📞 +971 50 4926945</a>
            <a href="mailto:tax@mjsglobal.co" style={{ textDecoration: 'none', color: 'inherit' }}>✉ tax@mjsglobal.co</a>
            <span>📍 Dubai, UAE</span>
          </div>
        </div>
      </div>
    </>
  );
}
