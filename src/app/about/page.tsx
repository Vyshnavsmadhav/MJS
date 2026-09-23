'use client';
import React, { useEffect, useState } from 'react';

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* SECTION 1 — HERO */}
      <section style={{
        position: 'relative',
        height: '420px', // Adjusted to account for the header and visual balance
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 5% 0', // Header offset
        overflow: 'hidden',
        backgroundColor: 'var(--color-primary)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          zIndex: 1
        }} />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(90deg, rgba(7,29,43,0.95) 0%, rgba(7,29,43,0.8) 40%, rgba(7,29,43,0.2) 100%)',
          zIndex: 2
        }} />

        {/* Hero Content */}
        <div className={mounted ? 'animate-fade-in-up' : ''} style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div style={{ paddingLeft: '2%' }}>
            {/* Breadcrumb */}
            <div style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              Home &nbsp;/&nbsp; <span style={{ color: '#fff' }}>About</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.25rem)',
              color: 'var(--color-white)',
              marginBottom: '1rem',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              About Us
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '500px',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              A team of dedicated professionals committed to your success.
            </p>
          </div>

          {/* Right Detail */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', paddingRight: '2%' }}>
            <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--color-accent)' }}></div>
            <div style={{ fontSize: '0.75rem', color: '#fff', letterSpacing: '0.25em', lineHeight: 1.8, display: 'flex', flexDirection: 'column' }}>
              <span>PEOPLE</span>
              <span>PARTNERSHIP</span>
              <span>PROGRESS</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — OUR STORY */}
      <section style={{ backgroundColor: 'var(--color-background)', padding: '6rem 5%' }}>
        <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '3%', flexWrap: 'wrap' }}>
          
          {/* Left Column - 40% */}
          <div style={{ flex: '0 0 38%', paddingRight: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text)', fontWeight: 600 }}>OUR STORY</span>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-accent)' }}></div>
            </div>
            
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Built on Trust.<br/>Driven by Impact.</h2>
            
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              MJS Global was established in 2021 by young aspirant entrepreneurs to serve the industry with best and competent service. We work with multinational companies, family office businesses and SMEs, helping them navigate complex regulatory requirements with confidence.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              To add more value to the businesses and provide services that could save up their cost and result in the efficient functioning of the business, we are here to serve you.
            </p>

            <div>
              <button style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
                border: 'none',
                padding: '0.85rem 2rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '2px',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >Our Journey &rarr;</button>
            </div>
          </div>

          {/* Center Column - 36% */}
          <div style={{ flex: '0 0 34%', height: '560px', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="MJS Global Office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {/* Embedded Logo Overlay */}
            <div style={{ position: 'absolute', top: '35%', right: '15%', color: 'rgba(0,0,0,0.8)' }}>
              <span style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '0.1em', lineHeight: 1.1, display: 'block' }}>MJS</span>
              <span style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '0.1em', lineHeight: 1.1, display: 'block' }}>GLOBAL</span>
            </div>
          </div>

          {/* Right Column - 24% */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#F4F5F7', flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '0 2.5rem' }}>
              
              {/* Feature 1 */}
              <div style={{ display: 'flex', gap: '1.5rem', padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Placeholder Icon */}
                  <div style={{ width: '20px', height: '14px', border: '1.5px solid var(--color-primary)', borderRadius: '2px' }}></div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Our People</h3>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>A dedicated team with technical expertise and industry knowledge.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{ display: 'flex', gap: '1.5rem', padding: '3rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Placeholder Icon */}
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid var(--color-primary)' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-primary)', borderRadius: '50%', margin: '3px auto 0' }}></div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Our Focus</h3>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>Delivering practical solutions that create real value.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div style={{ display: 'flex', gap: '1.5rem', padding: '3rem 0' }}>
                <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Placeholder Icon */}
                  <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '20px' }}>
                     <div style={{ width: '4px', height: '8px', border: '1px solid var(--color-primary)' }}></div>
                     <div style={{ width: '4px', height: '14px', border: '1px solid var(--color-primary)' }}></div>
                     <div style={{ width: '4px', height: '20px', border: '1px solid var(--color-primary)' }}></div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Our Clients</h3>
                  <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>Serving multinational companies, family office businesses and SMEs.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR APPROACH */}
      <section style={{ backgroundColor: 'var(--color-primary)', position: 'relative', display: 'flex', minHeight: '400px' }}>
        
        {/* Left Image (45-50%) */}
        <div style={{ width: '48%', position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" alt="Collaborative Approach" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(7,29,43,0.8)' }}></div>
          
          <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10%', right: '10%', color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 600 }}>OUR APPROACH</span>
              <div style={{ width: '30px', height: '1.5px', backgroundColor: 'var(--color-accent)' }}></div>
            </div>
            
            <h2 style={{ fontSize: '2.75rem', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.15 }}>A Collaborative<br/>Approach. Always.</h2>
            
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', maxWidth: '440px', lineHeight: 1.6 }}>
              We work closely with our clients, with senior involvement at every stage, ensuring transparency, efficiency and practical solutions.
            </p>
            
            <button style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)',
              border: 'none',
              padding: '0.85rem 2rem',
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '2px',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >Learn More &rarr;</button>
          </div>
        </div>

        {/* Right Content (Features) */}
        <div className={mounted ? 'animate-fade-in-up stagger-2' : ''} style={{ width: '52%', padding: '6rem 4% 6rem 5%', display: 'flex', gap: '3rem' }}>
          
          {/* Feature 1 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '2.5rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '20px', height: '16px', borderRadius: '2px', border: '1.5px solid #fff' }}></div>
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.3, fontWeight: 500 }}>Collaborative,<br/>No Surprises Approach</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
              Significant partner and team lead involvement throughout the assignment and a transparent approach to managing assignment fees.
            </p>
          </div>

          {/* Feature 2 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '2.5rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '16px', height: '20px', borderRadius: '50% 50% 0 0', border: '1.5px solid #fff', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '6px', left: '4px', width: '4px', height: '4px', backgroundColor: '#fff', borderRadius: '50%' }}></div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.3, fontWeight: 500 }}>We Are<br/>Where You Are</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
              UAE-based technical and senior business resources that are just around the corner from you, making face-to-face meetings easy.
            </p>
          </div>

          {/* Feature 3 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ width: '20px', height: '20px', border: '1.5px solid #fff', borderRadius: '50%', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: '1.5px', height: '6px', backgroundColor: '#fff' }}></div>
              </div>
            </div>
            <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.3, fontWeight: 500 }}>An Integrated<br/>Team</h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
              Fresh ideas, practical recommendations and a big-picture approach to maximize efficiency and eliminate duplicative efforts.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4 — OUR VALUES */}
      <section style={{ backgroundColor: '#fff', padding: '6rem 5%' }}>
        <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '3%' }}>
          
          {/* Left - 30% */}
          <div style={{ flex: '0 0 30%', paddingRight: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text)', fontWeight: 600 }}>OUR VALUES</span>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-accent)' }}></div>
            </div>
            
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>People.<br/>Partnership. Progress.</h2>
            
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
              We are committed to building long-term relationships with our clients, understanding their business and helping them achieve their goals through dedicated and expert support.
            </p>
          </div>

          {/* Center - Quote (42%) */}
          <div style={{ flex: '0 0 42%', display: 'flex', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#F9F8F6', padding: '4rem 3rem', position: 'relative', width: '100%' }}>
              <div style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '4rem', color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', lineHeight: 1, opacity: 0.8 }}>“</div>
              <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-primary)', lineHeight: 1.4, marginTop: '2rem', marginBottom: '2rem', paddingLeft: '1rem' }}>
                Our goal is to be a trusted partner for businesses, providing solutions that create opportunities and support sustainable growth.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem' }}>
                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-accent)' }}></div>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--color-text)', fontWeight: 600 }}>MJS GLOBAL</span>
              </div>
            </div>
          </div>

          {/* Right - Image (25%) */}
          <div style={{ flex: '1', position: 'relative', minHeight: '380px' }}>
            <img src="https://images.unsplash.com/photo-1542152862-2bd1343ad5d0?auto=format&fit=crop&q=80&w=600" alt="UAE Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            
            <div style={{ position: 'absolute', bottom: '15%', right: 0, backgroundColor: 'rgba(7,29,43,0.85)', padding: '2rem', color: '#fff' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', lineHeight: 1.8, fontWeight: 500, marginBottom: '1.5rem' }}>
                LOCAL<br/>EXPERTISE.<br/><br/>GLOBAL<br/>PERSPECTIVE.
              </div>
              <div style={{ width: '30px', height: '1.5px', backgroundColor: 'var(--color-accent)' }}></div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
