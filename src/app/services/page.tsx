'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceDetailsCard from '@/components/ServiceDetailsCard';

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const taxServices = [
    { number: '01', title: 'VAT Registration', description: 'Assistance with VAT registration and related formalities.' },
    { number: '02', title: 'VAT Return Filing', description: 'Timely and accurate preparation and filing of VAT returns.' },
    { number: '03', title: 'VAT Health Checks', description: 'Review of VAT compliance and identification of potential issues.' },
    { number: '04', title: 'VAT Advisory Services', description: 'Ongoing advisory on VAT matters and best practices.' },
    { number: '05', title: 'VAT Refund Services', description: 'Support with VAT refund claims and related processes.' },
    { number: '06', title: 'Corporate Tax Registration', description: 'Assistance with Corporate Tax registration and related formalities.' },
    { number: '07', title: 'Corporate Tax Filing', description: 'Preparation and filing of Corporate Tax returns.' },
    { number: '08', title: 'Corporate Tax Advisory & Compliance', description: 'Advisory and compliance support for Corporate Tax.' },
  ];

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* SECTION 1 — SERVICE HERO */}
      <section style={{
        position: 'relative',
        height: '300px', // Adjusted for header
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000")', // Financial consultation style
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }} />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(90deg, rgba(7,29,43,0.95) 0%, rgba(7,29,43,0.7) 50%, rgba(7,29,43,0.3) 100%)',
          zIndex: 2
        }} />

        {/* Hero Content */}
        <div className={mounted ? 'animate-fade-in-up' : ''} style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          
          <div style={{ paddingLeft: '2%' }}>
            {/* Breadcrumb */}
            <div style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              Home &nbsp;/&nbsp; Services &nbsp;/&nbsp; <span style={{ color: '#fff' }}>Tax Services</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              color: 'var(--color-white)',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Tax Services
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              Expert guidance. Complete compliance. Greater confidence.
            </p>
          </div>

          {/* Right Detail */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', paddingRight: '2%', marginTop: '1rem' }}>
            <div style={{ width: '1px', height: '50px', backgroundColor: 'var(--color-accent)' }}></div>
            <div style={{ fontSize: '0.7rem', color: '#fff', letterSpacing: '0.2em', lineHeight: 1.8, display: 'flex', flexDirection: 'column' }}>
              <span>PRACTICAL</span>
              <span>SOLUTIONS</span>
              <span>REAL IMPACT</span>
            </div>
          </div>

        </div>
      </section>

      {/* MAIN SERVICE CONTENT AREA */}
      <section style={{ backgroundColor: '#F9F8F6', padding: '5rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '4%' }}>
          
          {/* LEFT SIDEBAR (approx 22%) */}
          <aside style={{ flex: '0 0 22%', display: 'flex', flexDirection: 'column' }}>
            <div className={mounted ? 'animate-fade-in-up stagger-1' : ''}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', marginBottom: '2rem' }}>Our Services</h3>
              
              <nav style={{ display: 'flex', flexDirection: 'column' }}>
                <Link href="/services" style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '1.25rem 1rem 1.25rem 1.5rem', 
                  backgroundColor: 'rgba(0,0,0,0.04)', 
                  borderLeft: '2px solid var(--color-accent)',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <span>Tax Services</span>
                  <span>&rarr;</span>
                </Link>
                <Link href="/services" style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '1.25rem 1rem 1.25rem 1.5rem', 
                  color: '#555',
                  fontSize: '0.9rem',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  transition: 'background-color 0.2s'
                }}>
                  <span>Accounting & Bookkeeping</span>
                  <span style={{ opacity: 0.5 }}>&rarr;</span>
                </Link>
                <Link href="/services" style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '1.25rem 1rem 1.25rem 1.5rem', 
                  color: '#555',
                  fontSize: '0.9rem',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  transition: 'background-color 0.2s'
                }}>
                  <span>Business Consultancy</span>
                  <span style={{ opacity: 0.5 }}>&rarr;</span>
                </Link>
                <Link href="/services" style={{ 
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '1.25rem 1rem 1.25rem 1.5rem', 
                  color: '#555',
                  fontSize: '0.9rem',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  transition: 'background-color 0.2s'
                }}>
                  <span>Other Services</span>
                  <span style={{ opacity: 0.5 }}>&rarr;</span>
                </Link>
              </nav>

              <div style={{ marginTop: '5rem', paddingRight: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>Need Help?</h4>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Speak to our team about how we can support your business.
                </p>
                <Link href="/contact">
                  <button className="header-btn" style={{ width: '100%' }}>Get in Touch &rarr;</button>
                </Link>
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT (approx 74%) */}
          <div style={{ flex: '1' }}>
            
            {/* Service Introduction & Callout Image */}
            <div className={mounted ? 'animate-fade-in-up stagger-2' : ''} style={{ display: 'flex', gap: '3rem', marginBottom: '4rem', alignItems: 'flex-start' }}>
              
              <div style={{ flex: '1', maxWidth: '600px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text)', fontWeight: 600 }}>TAX SERVICES</span>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)' }}></div>
                </div>
                
                <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Supporting Your Business<br/>Through a Changing Tax Landscape
                </h2>
                
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7 }}>
                  We provide end-to-end VAT and Corporate Tax services to help businesses meet their compliance requirements and operate with confidence.
                </p>
              </div>

              {/* Callout Image */}
              <div style={{ flexShrink: 0, width: '240px', height: '160px', position: 'relative' }}>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" alt="Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(7,29,43,0.85)' }}></div>
                <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', textAlign: 'right' }}>
                  <div style={{ color: '#fff', fontSize: '0.65rem', letterSpacing: '0.2em', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                    LOCAL<br/>EXPERTISE.<br/><br/>PRACTICAL<br/>SOLUTIONS.
                  </div>
                  <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)', marginLeft: 'auto' }}></div>
                </div>
              </div>

            </div>

            {/* Service Grid */}
            <div className={mounted ? 'animate-fade-in-up stagger-3' : ''} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.5rem' 
            }}>
              {taxServices.map((service, index) => (
                <ServiceDetailsCard 
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE MJS SECTION */}
      <section style={{ backgroundColor: 'var(--color-background)', padding: '5rem 5%', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className={mounted ? 'animate-fade-in-up' : ''} style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '5%' }}>
          
          <div style={{ flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text)', fontWeight: 600 }}>WHY CHOOSE MJS GLOBAL</span>
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-accent)' }}></div>
            </div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', lineHeight: 1.15 }}>A Partner<br/>You Can Trust</h2>
          </div>

          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', paddingLeft: '2rem' }}>
            
            {/* Feature 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1, padding: '0 1rem', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                 <div style={{ width: '12px', height: '8px', border: '1px solid var(--color-primary)', borderRadius: '1px' }}></div>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Collaborative<br/>Approach</h4>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1, padding: '0 1rem', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '10px', height: '14px', border: '1px solid var(--color-primary)', borderRadius: '5px 5px 0 0' }}></div>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>UAE-Based<br/>Expertise</h4>
            </div>

            {/* Feature 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1, padding: '0 1rem', borderRight: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '10px', height: '10px', border: '1px solid var(--color-primary)', transform: 'rotate(45deg)' }}></div>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Practical<br/>Solutions</h4>
            </div>

            {/* Feature 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1, padding: '0 1rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                 <div style={{ width: '14px', height: '14px', border: '1px solid var(--color-primary)', borderRadius: '50%' }}></div>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Commitment<br/>to Your Success</h4>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section style={{
        position: 'relative',
        height: '200px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(7,29,43,0.85)',
          zIndex: 2
        }} />

        <div className={mounted ? 'animate-fade-in-up' : ''} style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.15 }}>Let's Start<br/>a Conversation.</h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', maxWidth: '400px', lineHeight: 1.5 }}>
              Speak to our team about your tax, accounting and business advisory needs.
            </p>
          </div>
          <div>
            <Link href="/contact">
              <button className="header-btn" style={{ padding: '1rem 2.5rem', fontSize: '0.95rem' }}>Get in Touch &rarr;</button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
