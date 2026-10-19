'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const clientsSectionRef = useRef<HTMLElement>(null);
  const clientLogoRefs = useRef<(HTMLImageElement | null)[]>([]);
  const clientsHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const section = clientsSectionRef.current;
    const heading = clientsHeadingRef.current;
    if (!section || !heading) return;

    const logos = section.querySelectorAll<HTMLImageElement>('.client-logo-item');
    if (logos.length !== 6) return;

    // Snapshot 1 (Initial / Start frame):
    // Center heading horizontally (left: 0, right: 0, margin: auto) and vertically with top + yPercent
    gsap.set(heading, { 
      top: '50%',
      yPercent: -50,
      left: '0%',
      xPercent: 0,
      clearProps: 'transform',
    });
    gsap.set(heading, {
      top: '50%',
      yPercent: -50,
    });
    
    const startPositions = [
      { top: '18%', left: '10%', opacity: 0.22, scale: 0.8 },
      { top: '8%', left: '50%', opacity: 0.22, scale: 0.8 },
      { top: '18%', left: '90%', opacity: 0.22, scale: 0.8 },
      { top: '82%', left: '10%', opacity: 0.22, scale: 0.8 },
      { top: '92%', left: '50%', opacity: 0.22, scale: 0.8 },
      { top: '82%', left: '90%', opacity: 0.22, scale: 0.8 },
    ];

    logos.forEach((logo, i) => {
      gsap.set(logo, {
        top: startPositions[i].top,
        left: startPositions[i].left,
        xPercent: -50,
        yPercent: -50,
        opacity: startPositions[i].opacity,
        scale: startPositions[i].scale,
      });
    });

    // Final target positions matching Snapshot 2 (End frame):
    // Title is at top: 20%
    // 2x3 grid centered with good spacing:
    // Row 1: top: 48%, left: 20%, 50%, 80%
    // Row 2: top: 76%, left: 20%, 50%, 80%
    const targetPositions = [
      { top: '48%', left: '20%' },
      { top: '48%', left: '50%' },
      { top: '48%', left: '80%' },
      { top: '76%', left: '20%' },
      { top: '76%', left: '50%' },
      { top: '76%', left: '80%' },
    ];

    const ctx = gsap.context(() => {
      // Create a scrub timeline that starts as soon as the section enters viewport
      // and completes 100% by the time it reaches top of screen, then pins to let user see it!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top top',
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // 1. Move heading up to top
      tl.to(heading, {
        top: '20%',
        yPercent: -50,
        ease: 'power1.out',
        duration: 1
      }, 0);

      // 2. Converge logos cleanly into the final 2x3 grid
      logos.forEach((logo, i) => {
        tl.to(logo, {
          top: targetPositions[i].top,
          left: targetPositions[i].left,
          opacity: 1,
          scale: 1,
          ease: 'power1.out',
          duration: 1
        }, 0);
      });

      // Pin the section when it reaches 'top top' for a brief duration so the user sees the completed final frame
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=400',
        pin: true,
        pinSpacing: true,
      });
    }, section);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [mounted]);
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image
          src="/hero-image.png"
          alt="Burj Al Arab Dubai UAE"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 35%',
            zIndex: 0
          }}
        />

        {/* Company Logo in the middle */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: 'min(560px, 82vw)',
          filter: 'drop-shadow(0 6px 24px rgba(0, 0, 0, 0.45))',
          pointerEvents: 'none'
        }}>
          <Image
            src="/mjs-logo.webp"
            alt="MJS Global - Accounts Tax Advisory"
            width={600}
            height={250}
            priority
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* BOTTOM RIGHT QUICK CONTACT ACTION BUTTONS (CIRCULAR ICONS) */}
        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}>
          {/* 1. CALL BUTTON */}
          <a
            href="tel:+971504926945"
            aria-label="Call +971 50 492 6945"
            title="Call: +971 50 492 6945"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#0A1E3A',
              color: '#D4B776',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(212, 183, 118, 0.45)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
              e.currentTarget.style.backgroundColor = '#D4B776';
              e.currentTarget.style.color = '#0A1325';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.45), 0 0 15px rgba(212, 183, 118, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.backgroundColor = '#0A1E3A';
              e.currentTarget.style.color = '#D4B776';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.35)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          {/* 2. WHATSAPP BUTTON */}
          <a
            href="https://wa.me/971504926945"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp +971 50 492 6945"
            title="WhatsApp: +971 50 492 6945"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.45), 0 0 18px rgba(37, 211, 102, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.35)';
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.003-.464-1.666-.69-2.73-2.383-2.813-2.495-.082-.112-.672-.893-.672-1.706 0-.814.426-1.214.577-1.378.151-.164.33-.205.441-.205.112 0 .223.001.32.007.103.005.241-.039.377.288.144.348.492 1.2.535 1.288.043.088.072.191.014.306-.058.115-.088.188-.174.288-.088.102-.185.228-.264.306-.089.088-.182.185-.078.363.104.179.462.763.992 1.235.683.608 1.26.797 1.439.886.179.088.283.078.389-.044.106-.123.456-.53.578-.711.121-.182.243-.151.408-.09.165.06 1.047.494 1.228.584.18.09.3.135.345.212.045.077.045.448-.099.853z"/>
            </svg>
          </a>

          {/* 3. EMAIL BUTTON */}
          <a
            href="mailto:tax@mjsglobal.co"
            aria-label="Email tax@mjsglobal.co"
            title="Email: tax@mjsglobal.co"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#0A1E3A',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#0A1325';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.45), 0 0 15px rgba(255, 255, 255, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.backgroundColor = '#0A1E3A';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.35)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </section>


      {/* SECTION — VISION, MISSION & CORE VALUES */}
      <section style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '6rem 6% 5.5rem', 
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)' 
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
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
              Guiding Principles
            </span>
          </div>

          {/* Vision & Mission Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}>
            
            {/* Vision Card */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '2.5rem',
              border: '1px solid rgba(21, 40, 69, 0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                backgroundColor: '#D4B776'
              }} />
              <div style={{ 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                color: '#D4B776', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                marginBottom: '0.75rem' 
              }}>
                Our Vision
              </div>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: '#0A1325',
                fontWeight: 500,
                margin: 0
              }}>
                To be the trusted force behind every business’s financial clarity, tax advisory, regulatory confidence, and sustainable success — building enduring partnerships that grow stronger with time.
              </p>
            </div>

            {/* Mission Card */}
            <div style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '2.5rem',
              border: '1px solid rgba(21, 40, 69, 0.08)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                backgroundColor: '#152845'
              }} />
              <div style={{ 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                color: '#152845', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                marginBottom: '0.75rem' 
              }}>
                Our Mission
              </div>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#334155',
                fontWeight: 400,
                margin: 0
              }}>
                To simplify accounting, tax, and compliance through expertise, integrity, and proactive service; deliver tailored solutions that exceed customer expectations; and empower businesses to grow confidently while building a sustainable future for our clients, our people, and our organization.
              </p>
            </div>

          </div>

          {/* Core Values Section */}
          <div style={{
            backgroundColor: '#0A1E3A',
            borderRadius: '20px',
            padding: '3rem',
            color: '#FFFFFF',
            backgroundImage: 'radial-gradient(circle at top right, rgba(212, 183, 118, 0.12) 0%, transparent 60%)',
            boxShadow: '0 20px 40px rgba(10, 30, 58, 0.08)'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.6rem', 
              marginBottom: '2rem' 
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D4B776' }} />
              <h3 style={{ 
                fontSize: '0.9rem', 
                fontWeight: 700, 
                letterSpacing: '0.2em', 
                color: '#D4B776', 
                textTransform: 'uppercase',
                margin: 0
              }}>
                Our Core Values
              </h3>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {[
                { num: '01', title: 'Integrity & Trust', desc: 'Uncompromising honesty and ethical partnership.' },
                { num: '02', title: 'Customer-Centric Excellence', desc: 'Tailored solutions designed around your needs.' },
                { num: '03', title: 'Growth Through Innovation', desc: 'Forward-looking strategies for modern markets.' },
                { num: '04', title: 'Compliance with Confidence', desc: 'Flawless adherence to UAE regulations.' },
                { num: '05', title: 'Long-Term Sustainability', desc: 'Enduring success for clients and community.' },
              ].map((val) => (
                <div 
                  key={val.num}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(212, 183, 118, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(212, 183, 118, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ 
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem', 
                    color: '#D4B776', 
                    fontWeight: 700, 
                    marginBottom: '0.5rem' 
                  }}>
                    {val.num}
                  </div>
                  <div style={{ 
                    fontWeight: 600, 
                    fontSize: '1.05rem', 
                    color: '#FFFFFF', 
                    marginBottom: '0.4rem',
                    lineHeight: 1.35
                  }}>
                    {val.title}
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: 'rgba(255, 255, 255, 0.65)', 
                    lineHeight: 1.5 
                  }}>
                    {val.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION — OUR APPROACH / WHY CHOOSE MJS GLOBAL HIERARCHY BRANCH DESIGN */}
      <section style={{ backgroundColor: '#fff', padding: '2rem 5% 7rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ 
              fontSize: '0.75rem', 
              letterSpacing: '0.25em', 
              color: 'var(--color-text)', 
              fontWeight: 600, 
              textTransform: 'uppercase',
              marginBottom: '1rem' 
            }}>
              OUR APPROACH
            </div>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
              color: '#0A1325', 
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Why Choose MJS Global
            </h2>
          </div>

          {/* Hierarchy Branch Tree Container */}
          <div style={{ width: '100%', maxWidth: '900px' }}>
            <div style={{ 
              borderLeft: '2px solid #152845', 
              marginLeft: '2rem', 
              paddingLeft: '0',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}>
              
              {/* Branch Item 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                {/* Horizontal branch line and connector node */}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.75rem', flexShrink: 0 }}>
                  <div style={{ width: '2.5rem', height: '2px', backgroundColor: '#152845' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-2px' }}></div>
                </div>

                {/* Content Card / Badge */}
                <div style={{ 
                  marginLeft: '1.5rem', 
                  flex: 1,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(21, 40, 69, 0.12)',
                  borderRadius: '12px',
                  padding: '2rem 2.5rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '3.5rem', 
                      height: '3.5rem', 
                      borderRadius: '50%', 
                      backgroundColor: '#f0f5f9', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0 
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                    </div>
                    <h3 style={{ 
                      color: '#152845', 
                      fontWeight: 600, 
                      fontSize: '1.15rem', 
                      letterSpacing: '0.04em',
                      margin: 0
                    }}>
                      COLLABORATIVE, NO SURPRISES APPROACH
                    </h3>
                  </div>
                  <p style={{ 
                    color: '#555', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.7, 
                    margin: 0,
                    paddingLeft: '4.75rem'
                  }}>
                    Our approach to providing accounting services for the company is a distinguishing factor. You will receive significant partner and Team lead involvement during all phases of the assignment, along with a commitment to continue developing our relationship.
                  </p>
                </div>
              </div>

              {/* Branch Item 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                {/* Horizontal branch line and connector node */}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.75rem', flexShrink: 0 }}>
                  <div style={{ width: '2.5rem', height: '2px', backgroundColor: '#152845' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-2px' }}></div>
                </div>

                {/* Content Card / Badge */}
                <div style={{ 
                  marginLeft: '1.5rem', 
                  flex: 1,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(21, 40, 69, 0.12)',
                  borderRadius: '12px',
                  padding: '2rem 2.5rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '3.5rem', 
                      height: '3.5rem', 
                      borderRadius: '50%', 
                      backgroundColor: '#f0f5f9', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0 
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <h3 style={{ 
                      color: '#152845', 
                      fontWeight: 600, 
                      fontSize: '1.15rem', 
                      letterSpacing: '0.04em',
                      margin: 0
                    }}>
                      WE ARE WHERE YOU ARE
                    </h3>
                  </div>
                  <p style={{ 
                    color: '#555', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.7, 
                    margin: 0,
                    paddingLeft: '4.75rem'
                  }}>
                    We have a significant concentration of Technical and senior business resources located in our UAE offices that are &quot;just around the corner&quot; from you. This proximity makes timely input on practical solutions to business issues that much easier.
                  </p>
                </div>
              </div>

              {/* Branch Item 3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                {/* Horizontal branch line and connector node */}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.75rem', flexShrink: 0 }}>
                  <div style={{ width: '2.5rem', height: '2px', backgroundColor: '#152845' }}></div>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#152845', marginLeft: '-2px' }}></div>
                </div>

                {/* Content Card / Badge */}
                <div style={{ 
                  marginLeft: '1.5rem', 
                  flex: 1,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(21, 40, 69, 0.12)',
                  borderRadius: '12px',
                  padding: '2rem 2.5rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '3.5rem', 
                      height: '3.5rem', 
                      borderRadius: '50%', 
                      backgroundColor: '#f0f5f9', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0 
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#152845" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <h3 style={{ 
                      color: '#152845', 
                      fontWeight: 600, 
                      fontSize: '1.15rem', 
                      letterSpacing: '0.04em',
                      margin: 0
                    }}>
                      AN INTEGRATED vTEAM
                    </h3>
                  </div>
                  <p style={{ 
                    color: '#555', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.7, 
                    margin: 0,
                    paddingLeft: '4.75rem'
                  }}>
                    You want fresh ideas as well as a hands-on team and we will work with you to understand your issues and concerns to diligently provide advice and develop Practical approaches and recommendations.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION — MAJOR CLIENTS LOGO CHOREOGRAPHY */}
      <section ref={clientsSectionRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#ffffff' }}>
        <h2 ref={clientsHeadingRef} style={{
          fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
          color: '#152845',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontWeight: 800,
          fontFamily: 'var(--font-inter), sans-serif',
          margin: 0,
          zIndex: 10,
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          textAlign: 'center',
          width: '100%',
          display: 'block'
        }}>
          MAJOR CLIENTS
        </h2>

        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          maxWidth: '1360px', 
          margin: '0 auto', 
          pointerEvents: 'none', 
          zIndex: 5 
        }}>
          {[
            { name: 'GOODY', src: '/clients/client-1.webp' },
            { name: 'EMIRATES MACARONI', src: '/clients/client-2.webp' },
            { name: 'MNG GÜNAL', src: '/clients/client-3.webp' },
            { name: 'UNITED ALSAQER', src: '/clients/client-4.webp' },
            { name: 'MARKETING', src: '/clients/client-5.webp' },
            { name: 'TTR', src: '/clients/client-6.webp' },
          ].map((client, idx) => (
            <img 
              key={idx}
              className="client-logo-item"
              src={client.src}
              alt={client.name}
              style={{
                position: 'absolute',
                width: 'clamp(170px, 19vw, 260px)',
                height: 'clamp(75px, 9vw, 120px)',
                objectFit: 'contain',
                opacity: 0.22,
                willChange: 'transform, opacity, top, left'
              }}
            />
          ))}
        </div>
      </section>

      {/* SECTION — OUR SOLUTIONS & VALUE PROPOSITION (EXECUTIVE 2-COLUMN CORPORATE LAYOUT) */}
      <section style={{ backgroundColor: '#ffffff', padding: '7rem 6% 6rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
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
              OUR SOLUTIONS & SERVICES
            </span>
          </div>

          {/* 2-Column Corporate Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3.5rem 5rem',
            alignItems: 'start'
          }}>
            
            {/* Left Column: Bold Serif Headline & Stats */}
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
                Delivering Measurable Value & Cost-Efficient Solutions for Businesses.
              </h2>
              <div style={{ display: 'flex', gap: '2.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(21, 40, 69, 0.1)' }}>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#152845', fontFamily: 'var(--font-heading)' }}>Cost-Save</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Optimized Operations</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#152845', fontFamily: 'var(--font-heading)' }}>360°</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Full Coverage</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#152845', fontFamily: 'var(--font-heading)' }}>Tailored</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Corporate Demands</div>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Phrased Body Content & Link */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ 
                color: '#152845', 
                fontSize: '1.25rem', 
                lineHeight: 1.6, 
                fontWeight: 500,
                margin: 0
              }}>
                To add more value to the businesses and provide services that could save up their cost and result in the efficient functioning of the business, we are here to serve you.
              </p>
              
              <p style={{ 
                color: '#556377', 
                fontSize: '1.05rem', 
                lineHeight: 1.75, 
                margin: 0 
              }}>
                With our comprehensive solutions we aim at providing that window of opportunity for the businesses with below services; designed to give you strategic clarity, full regulatory compliance, and sustainable long-term performance.
              </p>

              <div style={{ paddingTop: '1rem' }}>
                <a 
                  href="/services" 
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
                    transition: 'opacity 0.2s ease'
                  }}
                >
                  <span>Explore all our specialized services</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
