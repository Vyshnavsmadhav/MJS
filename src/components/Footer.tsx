import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-primary)',
      color: 'rgba(255,255,255,0.7)',
      padding: '5rem 5% 2rem',
      fontSize: '0.85rem'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        justifyContent: 'space-between',
        marginBottom: '4rem'
      }}>
        {/* Column 1: Logo & Desc */}
        <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: 'var(--color-white)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.15em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            MJS<br/>GLOBAL
          </div>
          <p style={{ lineHeight: 1.6, maxWidth: '280px' }}>
            Accounting, Taxation, Compliance, Advisory. Helping businesses navigate complex regulatory requirements with confidence.
          </p>
        </div>

        {/* Column 2: Company */}
        <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem' }}>Company</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/about" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>About</Link>
            <Link href="/team" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Our Team</Link>
            <Link href="/careers" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Careers</Link>
          </nav>
        </div>

        {/* Column 3: Services */}
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem' }}>Services</h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Tax Services</Link>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Accounting & Bookkeeping</Link>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Business Consultancy</Link>
            <Link href="/services" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Other Services</Link>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 500, marginBottom: '1.5rem' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--color-accent)' }}>📍</span>
              <span>Dubai, UAE</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--color-accent)' }}>✉️</span>
              <span>tax@mjsglobal.co</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span style={{ color: 'var(--color-accent)' }}>📞</span>
              <span>+971 50 4926945</span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', paddingLeft: '1.75rem' }}>
              <span>+971 58 5390669</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div>
          &copy; 2026 MJS Global. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/privacy" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Terms of Use</Link>
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
            {/* Social icons */}
            <div style={{ width: '24px', height: '24px', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>in</div>
            <div style={{ width: '24px', height: '24px', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}>ig</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
