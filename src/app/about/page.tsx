'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutUs() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const storySectionRef = useRef<HTMLElement>(null);
  const storyImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      if (heroRef.current && heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      if (storySectionRef.current && storyImageRef.current) {
        gsap.fromTo(storyImageRef.current, 
          { scale: 1.1, yPercent: -5 },
          {
            scale: 1,
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: storySectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach(t => t.kill());
      }
    };
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* SECTION 1 — HERO */}
      <section ref={heroRef} style={{
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
        <div ref={heroBgRef} style={{
          position: 'absolute',
          top: '-15%', left: 0, right: 0, bottom: '-15%',
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

      {/* SECTION — ABOUT US (PREMIUM CORPORATE BUSINESS LAYOUT) */}
      <section style={{ backgroundColor: '#ffffff', padding: '6rem 6% 5.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          {/* Top Category Tag / Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
            <span style={{ 
              display: 'inline-block', 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#D4B776' 
            }} />
            <span style={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: '#152845', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase' 
            }}>
              About MJS Global
            </span>
          </div>

          {/* 2-Column Corporate Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3.5rem 5rem',
            alignItems: 'start'
          }}>
            
            {/* Left Column: Bold Headline & Mission Anchor */}
            <div>
              <h2 style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.1rem, 3.2vw, 3rem)',
                lineHeight: 1.25,
                color: '#0A1325',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                margin: '0 0 2rem'
              }}>
                Your Strategic Partner for Accounting, Tax & Advisory in the UAE.
              </h2>
              <div style={{ display: 'flex', gap: '2.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(21, 40, 69, 0.1)' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#152845', fontFamily: 'var(--font-heading)' }}>2021</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Founded in UAE</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#152845', fontFamily: 'var(--font-heading)' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Regulatory Compliance</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#152845', fontFamily: 'var(--font-heading)' }}>End-to-End</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Corporate Solutions</div>
                </div>
              </div>
            </div>

            {/* Right Column: Refined Body Copy & Professional Context */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ 
                color: '#152845', 
                fontSize: '1.25rem', 
                lineHeight: 1.6, 
                fontWeight: 500,
                margin: 0
              }}>
                MJS Global is a professional services firm formed in 2021 by young aspirant entrepreneurs, serving businesses with competent accounting, tax, compliance, and audit solutions.
              </p>
              
              <p style={{ 
                color: '#556377', 
                fontSize: '1.05rem', 
                lineHeight: 1.75, 
                margin: 0 
              }}>
                From large multinationals and family-office businesses to fast-growing SMEs, we partner with organizations seeking trusted expertise and comprehensive solutions for their corporate demands. Our localized knowledge paired with international quality standards ensures your business stays compliant and ahead.
              </p>

              <div style={{ paddingTop: '1rem' }}>
                <a 
                  href="#team" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: '#152845',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    borderBottom: '2px solid #D4B776',
                    paddingBottom: '0.35rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#0A1325';
                    e.currentTarget.style.borderBottomColor = '#152845';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#152845';
                    e.currentTarget.style.borderBottomColor = '#D4B776';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span>Learn more about our team and firm</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2 — FOUNDERS / LEADERSHIP (BRIGHT THEMED CONTEMPORARY DESIGN) */}
      <section id="team" style={{ 
        backgroundColor: '#F8FAFC', 
        padding: '7rem 6% 7.5rem', 
        color: '#0A1325',
        position: 'relative',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          {/* Header with Modern Split Design */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end', 
            flexWrap: 'wrap', 
            gap: '2rem', 
            marginBottom: '4.5rem',
            borderBottom: '1px solid rgba(21, 40, 69, 0.1)',
            paddingBottom: '2.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D4B776' }} />
                <span style={{ 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.22em', 
                  color: '#152845', 
                  fontWeight: 700, 
                  textTransform: 'uppercase' 
                }}>
                  EXECUTIVE LEADERSHIP
                </span>
              </div>
              <h2 style={{ 
                fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', 
                color: '#0A1325', 
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                margin: 0,
                lineHeight: 1.15
              }}>
                The Mind Behind MJS Global
              </h2>
            </div>

            <p style={{ 
              maxWidth: '460px', 
              color: '#556377', 
              fontSize: '1.05rem', 
              lineHeight: 1.6, 
              margin: 0 
            }}>
              Seasoned veterans, strategic advisors, and financial partners delivering trusted compliance, tax, and governance across the UAE.
            </p>
          </div>

          {/* Executive Leadership Profile */}
          <div style={{ 
            maxWidth: '520px',
            margin: '0 auto',
            width: '100%'
          }}>

            {/* Founder 1: Pradeep Balakrishnan */}
            <div style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(21, 40, 69, 0.08)',
              borderRadius: '16px',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 8px 24px rgba(10, 19, 37, 0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'rgba(212, 183, 118, 0.6)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 19, 37, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(21, 40, 69, 0.08)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 19, 37, 0.05)';
            }}>
              {/* Image Frame */}
              <div style={{
                width: '100%',
                height: '380px',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1.75rem',
                backgroundColor: '#f0f3f6'
              }}>
                <img 
                  src="/pradeep-balakrishnan.png" 
                  alt="Pradeep Balakrishnan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Floating Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(21, 40, 69, 0.1)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#152845',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                }}>
                  13+ Years Exp
                </div>
              </div>

              {/* Name & Roles */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  color: '#0A1325', 
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.01em',
                  margin: '0 0 0.4rem',
                  lineHeight: 1.2
                }}>
                  Pradeep Balakrishnan
                </h3>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#152845', 
                  fontWeight: 600,
                  letterSpacing: '0.01em'
                }}>
                  Managing Partner — Tax & Compliance
                </div>
              </div>

              {/* Divider */}
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(21, 40, 69, 0.08)', marginBottom: '1.25rem' }} />

              {/* Bio */}
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#556377', 
                lineHeight: 1.7, 
                margin: 0,
                flexGrow: 1
              }}>
                Pradeep is a seasoned tax expert with an MBA and over 13 years of experience across India and the Middle East. Having worked with multiple Big 4 firms, he is a key member of MJS Global, bringing strong expertise in finance, tax, and compliance, with a focus on quick turnaround and quality solutions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 — COLLABORATIVE PROCESS & COMMITMENT BANNER (BELOW FOUNDERS) */}
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        minHeight: '460px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '5rem 4%',
        overflow: 'hidden',
        color: '#ffffff'
      }}>
        {/* Background Skyline Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          zIndex: 1
        }} />

        {/* Panoramic Sunset / Corporate Navy Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(70, 30, 35, 0.75) 0%, rgba(15, 30, 55, 0.88) 50%, rgba(7, 20, 38, 0.94) 100%)',
          backdropFilter: 'blur(1px)',
          zIndex: 2
        }} />

        {/* 4 Pillars / Process Columns Container */}
        <div style={{ 
          position: 'relative', 
          zIndex: 3, 
          maxWidth: '1440px', 
          width: '100%', 
          margin: '0 auto',
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '2.5rem 1.5rem',
          alignItems: 'stretch'
        }}>

          {/* Pillar 1: Dedicated Leadership */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            padding: '2rem 1.25rem',
            borderRight: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            {/* Icon */}
            <div style={{ 
              width: '72px', 
              height: '72px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '2rem',
              color: '#ffffff'
            }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <polyline points="12 2 13 4 11 4 12 2" />
              </svg>
            </div>
            {/* Text */}
            <p style={{
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              margin: 0
            }}>
              Assigns a leader within the organization to work with &ldquo;MJS GLOBAL ACCOUNTING &amp; BOOK KEEPING LLC.&rdquo;
            </p>
          </div>

          {/* Pillar 2: Process Owners Access */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            padding: '2rem 1.25rem',
            borderRight: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            {/* Icon */}
            <div style={{ 
              width: '72px', 
              height: '72px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '2rem',
              color: '#ffffff'
            }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            {/* Text */}
            <p style={{
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              margin: 0
            }}>
              Provides access to process owners and relevant staff to gather an understanding of the business.
            </p>
          </div>

          {/* Pillar 3: Documentation & ESR Compliance */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            padding: '2rem 1.25rem',
            borderRight: '1px solid rgba(255, 255, 255, 0.12)'
          }}>
            {/* Icon */}
            <div style={{ 
              width: '72px', 
              height: '72px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '2rem',
              color: '#ffffff'
            }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="13" height="17" rx="1" />
                <polyline points="7 6 14 6" />
                <polyline points="7 10 14 10" />
                <polyline points="7 14 11 14" />
                <path d="M8 22h11a1 1 0 0 0 1-1V6" />
              </svg>
            </div>
            {/* Text */}
            <p style={{
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              margin: 0
            }}>
              Provides access to documents, statements as needed for the VAT Return, Excise return submission assistance and ESR Compliance
            </p>
          </div>

          {/* Pillar 4: Collaborative Execution */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
            padding: '2rem 1.25rem'
          }}>
            {/* Icon */}
            <div style={{ 
              width: '72px', 
              height: '72px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '2rem',
              color: '#ffffff'
            }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <path d="M8 7h8" />
                <text x="8" y="14" fill="currentColor" stroke="none" fontSize="6" fontWeight="bold">VAT</text>
                <circle cx="16" cy="17" r="1.5" />
              </svg>
            </div>
            {/* Text */}
            <p style={{
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              margin: 0
            }}>
              Works collaboratively to complete the VAT Return, Excise return submission assistance and ESR Compliance
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

          {/* Center - Quote (70%) */}
          <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '4rem 3rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.06)', position: 'relative', width: '100%' }}>
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

        </div>
      </section>

    </main>
  );
}
