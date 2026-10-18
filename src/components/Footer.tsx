import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#071626',
      color: 'rgba(255,255,255,0.7)',
      padding: '2.5rem 5% 1.75rem',
      fontSize: '0.82rem',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem 2.5rem',
        marginBottom: '1.75rem',
        alignItems: 'start'
      }}>
        {/* Column 1: Logo & Desc */}
        <div>
          <div style={{ 
            color: '#ffffff', 
            fontSize: '1.05rem', 
            fontWeight: 800, 
            letterSpacing: '0.2em', 
            lineHeight: 1.15, 
            marginBottom: '0.85rem',
            fontFamily: 'var(--font-inter), sans-serif'
          }}>
            MJS<br/>GLOBAL
          </div>
          <p style={{ lineHeight: 1.55, maxWidth: '260px', color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', margin: 0 }}>
            Accounting, Taxation, Compliance, Advisory. Helping businesses navigate complex regulatory requirements with confidence.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
            Company
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
            <Link href="/about" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.65)' }}>About</Link>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.65)' }}>Services</Link>
            <Link href="/contact" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.65)' }}>Contact</Link>
          </nav>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
            Services
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.65)' }}>Tax Services</Link>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.65)' }}>Accounting & Bookkeeping</Link>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.65)' }}>Business Consultancy</Link>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.65)' }}>Other Services</Link>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.85rem', letterSpacing: '-0.01em' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.82rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: '#E53E3E', fontSize: '0.85rem' }}>📍</span>
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>Dubai, UAE</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: '#ffffff', fontSize: '0.75rem' }}>✉</span>
              <a href="mailto:tax@mjsglobal.co" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>tax@mjsglobal.co</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: '#E53E3E', fontSize: '0.82rem' }}>📞</span>
              <a href="tel:+971504926945" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>+971 50 4926945</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', paddingLeft: '1.45rem' }}>
              <a href="tel:+971585390669" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>+971 58 5390669</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
        fontSize: '0.78rem'
      }}>
        <div style={{ color: 'rgba(255,255,255,0.55)' }}>
          &copy; 2026 MJS Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
