import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* HEADER */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'rgba(10, 25, 47, 0.98)', 
        backdropFilter: 'blur(10px)',
        color: '#fff',
        padding: '1.5rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.15em' }}>MJS GLOBAL</div>
        <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.9rem', fontWeight: 400 }}>
          <a href="#" style={{ transition: 'color 0.2s', color: '#fff' }}>Home</a>
          <a href="#" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>About</a>
          <a href="#" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Services</a>
          <a href="#" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Industries</a>
          <a href="#" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Insights</a>
          <a href="#" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Careers</a>
          <a href="#" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.7)' }}>Contact</a>
        </nav>
        <button style={{
          backgroundColor: 'var(--color-accent)',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontWeight: 500,
          fontSize: '0.85rem',
          letterSpacing: '0.05em',
          transition: 'background-color 0.2s',
          borderRadius: '2px'
        }}>Get in Touch</button>
      </header>

      {/* HERO SECTION */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        color: '#fff',
        padding: '8rem 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          right: '-10%',
          top: '-20%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(197,160,89,0.05) 0%, rgba(10,25,47,0) 70%)',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: 'var(--color-accent)',
            marginBottom: '2rem',
            fontWeight: 600
          }}>
            ACCOUNTING &bull; TAXATION &bull; COMPLIANCE &bull; ADVISORY
          </div>
          <h1 style={{
            fontSize: '4.5rem',
            color: '#fff',
            maxWidth: '800px',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Your Strategic<br />Partner in the UAE
          </h1>
          <p style={{
            fontSize: '1.25rem',
            maxWidth: '600px',
            marginBottom: '3rem',
            opacity: 0.8,
            lineHeight: 1.7,
            fontWeight: 300
          }}>
            Empowering businesses with trusted accounting, tax and advisory solutions — built for what's next.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button style={{
              backgroundColor: 'var(--color-accent)',
              color: '#fff',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '2px',
              transition: 'background-color 0.2s'
            }}>Get in Touch &rarr;</button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#fff',
              border: 'none',
              padding: '1rem 0',
              fontSize: '0.95rem',
              fontWeight: 500,
              borderBottom: '1px solid rgba(255,255,255,0.3)',
              transition: 'border-color 0.2s'
            }}>Explore Our Services</button>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section style={{
        backgroundColor: '#071222',
        color: 'rgba(255,255,255,0.7)',
        padding: '3rem 5%',
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '6rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div>
          <div style={{ fontSize: '2rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>2021</div>
          <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem' }}>Established</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>3</div>
          <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem' }}>Leadership Team Members</div>
        </div>
        <div>
          <div style={{ fontSize: '2rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>UAE</div>
          <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem' }}>Based</div>
        </div>
      </section>

      {/* ABOUT SECTION (Placeholder for full implementation) */}
      <section style={{ padding: '8rem 5%', display: 'flex', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>ABOUT MJS GLOBAL</div>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Built on Trust.<br/>Driven by Impact.</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            MJS Global was formed in 2021 by young aspirant entrepreneurs to serve the industry with competent services. We serve multinational companies, family-office businesses, and SMEs.
          </p>
          <button style={{ backgroundColor: 'transparent', color: 'var(--color-primary)', border: 'none', padding: 0, fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', borderBottom: '2px solid var(--color-primary)' }}>
            Learn More About Us &rarr;
          </button>
        </div>
        <div style={{ flex: 1, backgroundColor: '#E5E5E5', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Placeholder for actual image */}
          <span style={{ color: '#888', letterSpacing: '0.1em' }}>[ PREMIUM UAE OFFICE IMAGE ]</span>
        </div>
      </section>
    </main>
  );
}
