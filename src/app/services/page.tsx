'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceDetailsCard from '@/components/ServiceDetailsCard';

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
        minHeight: '480px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 5% 60px',
        overflow: 'hidden',
        backgroundColor: 'var(--color-primary)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("/services-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
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



        </div>
      </section>
       {/* SECTION — HIERARCHY SERVICES SHOWCASE (PINNED IMAGE & SERVICE TREE) */}
      <section style={{ 
        backgroundColor: '#fff', 
        padding: '4rem 5% 5rem', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        gap: '4rem', 
        borderBottom: '1px solid rgba(0,0,0,0.06)', 
        flexWrap: 'wrap', 
        position: 'relative' 
      }}>
        {/* Sticky Pinned Image Container */}
        <div style={{
          position: 'sticky',
          top: '5.5rem',
          flex: '1 1 400px',
          maxWidth: '560px',
          height: 'calc(100vh - 7rem)',
          minHeight: '520px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 12px 35px rgba(0,0,0,0.12)'
        }}>
          <img 
            src="/speaker-showcase.webp" 
            alt="MJS Keynote Speaker" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center 20%',
              display: 'block'
            }} 
          />
        </div>
        
        {/* Right Hierarchy Tree Column */}
        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '4rem', minWidth: '300px', marginTop: '1rem', paddingBottom: '5vh' }}>
          
          {/* Business Consultancy */}
          <div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#152845', margin: 0, paddingBottom: '0.5rem', borderBottom: '2px solid #152845', fontFamily: 'var(--font-heading)' }}>
              Business Consultancy
            </h3>
            <div style={{ borderLeft: '2px solid #152845', marginLeft: '1.5rem', marginTop: 0, paddingBottom: '0.5rem' }}>
              
              {/* Item 1 */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#152845' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-1px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: '#f0f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.5"><path d="M3 21h18M5 21V7a2 2 0 012-2h3m4 0h3a2 2 0 012 2v14m-9-4h4M9 7v14m0-4h4M9 11h4M9 15h4M5 11h2M5 15h2M17 11h2M17 15h2"/></svg>
                  </div>
                  <span style={{ color: '#152845', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.05em' }}>COMPANY INCORPORATION SERVICES</span>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#152845' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-1px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: '#f0f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <span style={{ color: '#152845', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.05em' }}>COMPANY LIQUIDATION SERVICES</span>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#152845' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-1px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: '#f0f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <span style={{ color: '#152845', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.05em' }}>TAX RESIDENCY CERTIFICATE</span>
                </div>
              </div>

              {/* Item 4 */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#152845' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-1px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: '#f0f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.5"><path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/></svg>
                  </div>
                  <span style={{ color: '#152845', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.05em' }}>PRO SERVICES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services */}
          <div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 600, color: '#152845', margin: 0, paddingBottom: '0.5rem', borderBottom: '2px solid #152845', fontFamily: 'var(--font-heading)' }}>
              Other Services
            </h3>
            <div style={{ borderLeft: '2px solid #152845', marginLeft: '1.5rem', marginTop: 0, paddingBottom: '0.5rem' }}>
              
              {/* Item 1 */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#152845' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-1px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: '#f0f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.5"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  </div>
                  <span style={{ color: '#152845', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.05em' }}>PAYROLL SERVICE</span>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.5rem' }}>
                <div style={{ width: '2rem', height: '2px', backgroundColor: '#152845' }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-1px' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem', gap: '1rem' }}>
                  <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', backgroundColor: '#f0f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                  </div>
                  <span style={{ color: '#152845', fontWeight: 500, fontSize: '0.95rem', letterSpacing: '0.05em' }}>AUDIT ASSISTANCE SERVICE</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION — TAX SERVICES PORTFOLIO */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '6rem 5% 7rem', borderTop: '1px solid rgba(10, 19, 37, 0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Header & Mission Statement: Balanced 2-Column Editorial Layout */}
          <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
            gap: '3.5rem', 
            alignItems: 'end',
            marginBottom: '4.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(10, 19, 37, 0.08)'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.35rem 0.85rem', backgroundColor: 'rgba(212, 183, 118, 0.12)', borderRadius: '20px', marginBottom: '1.25rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: '#8A6D24', fontWeight: 700 }}>PRACTICE AREA OVERVIEW</span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', color: 'var(--color-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
                Supporting Your Business<br/>
                Through a <span style={{ color: 'var(--color-secondary)', fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>Changing Tax Landscape</span>
              </h2>
            </div>

            <div>
              <p style={{ fontSize: '1.05rem', color: '#4B5868', lineHeight: 1.75, margin: '0 0 1.5rem', fontWeight: 400 }}>
                We provide end-to-end VAT and Corporate Tax advisory, registration, and ongoing compliance services to help UAE enterprises operate with confidence in a modern regulatory environment.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>08</span>
                  <span style={{ fontSize: '0.8rem', color: '#6A788A', lineHeight: 1.2 }}>Specialized<br/>Workstreams</span>
                </div>
                <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(10, 19, 37, 0.1)' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#A47E2A', fontFamily: 'var(--font-heading)' }}>100%</span>
                  <span style={{ fontSize: '0.8rem', color: '#6A788A', lineHeight: 1.2 }}>FTA Regulatory<br/>Compliance</span>
                </div>
                <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(10, 19, 37, 0.1)' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>UAE</span>
                  <span style={{ fontSize: '0.8rem', color: '#6A788A', lineHeight: 1.2 }}>Jurisdiction<br/>Specialists</span>
                </div>
              </div>
            </div>
          </div>

          {/* Group 1: Value Added Tax (VAT) Services */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#0A1325', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4B776' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary)', margin: 0, fontWeight: 600 }}>Value Added Tax (VAT)</h3>
                  <span style={{ fontSize: '0.8rem', color: '#778494' }}>Registration, returns, refund assistance & regular health checks</span>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8A97A8', letterSpacing: '0.1em' }}>05 SERVICES</span>
            </div>

            <div className={mounted ? 'animate-fade-in-up stagger-2' : ''} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(6, 1fr)', 
              gap: '1.5rem' 
            }}>
              {taxServices.slice(0, 5).map((service, index) => (
                <div 
                  key={index}
                  style={{
                    gridColumn: index < 3 ? 'span 2' : 'span 3'
                  }}
                >
                  <ServiceDetailsCard 
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    category="VAT"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Corporate Tax Services */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#152845', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4B776' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary)', margin: 0, fontWeight: 600 }}>Corporate Tax</h3>
                  <span style={{ fontSize: '0.8rem', color: '#778494' }}>FTA registration, annual filings & ongoing compliance advisory</span>
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8A97A8', letterSpacing: '0.1em' }}>03 SERVICES</span>
            </div>

            <div className={mounted ? 'animate-fade-in-up stagger-3' : ''} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {taxServices.slice(5).map((service, index) => (
                <ServiceDetailsCard 
                  key={index}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  category="Corporate Tax"
                />
              ))}
            </div>
          </div>

        </div>
      </section>









    </main>
  );
}
