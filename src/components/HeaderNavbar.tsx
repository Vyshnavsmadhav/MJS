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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className="header-container"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0,
        right: 0,
        backgroundColor: 'rgba(7, 19, 39, 0.92)', 
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
          width: '215px',
          height: '56px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Image
            src="/mjs-logo.webp"
            alt="MJS Global - Accounts Tax Advisory"
            fill
            sizes="240px"
            style={{
              objectFit: 'contain',
              objectPosition: 'left center'
            }}
            priority
          />
        </div>
      </Link>
      
      {/* Navigation Tiles - Preserving Exact Arrangement & Names */}
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
