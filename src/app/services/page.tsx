'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const practiceCategories = [
    {
      id: 1,
      title: 'Tax Services',
      bgColor: '#0A1325',
      subGroups: [
        {
          name: 'VAT Services',
          hasSubgroups: true,
          workstreams: [
            {
              name: 'VAT REGISTRATION',
              desc: 'Seamless FTA tax group & individual registration setup for mandatory and voluntary thresholds.'
            },
            {
              name: 'VAT REFUND SERVICES',
              desc: 'End-to-end management of excess input VAT refund claims with the Federal Tax Authority.'
            },
            {
              name: 'VAT RETURN FILING',
              desc: 'Timely and compliant periodic VAT201 preparation, reconciliation, and submission.'
            },
            {
              name: 'VAT HEALTH CHECKS',
              desc: 'Comprehensive diagnostic audit of tax records to identify compliance gaps and minimize penalties.'
            },
            {
              name: 'VAT ADVISORY SERVICES',
              desc: 'Strategic consultation on transaction structuring, cross-border treatment, and exemption rules.'
            }
          ]
        },
        {
          name: 'Corporate Tax Services',
          hasSubgroups: true,
          workstreams: [
            {
              name: 'CORPORATE TAX REGISTRATION',
              desc: 'Accredited FTA corporate tax enrollment and corporate tax registration number (TRN) issuance.'
            },
            {
              name: 'CORPORATE TAX FILING',
              desc: 'Accurate annual corporate tax return filing aligned with UAE Federal Decree-Law No. 47.'
            },
            {
              name: 'CORPORATE TAX ADVISORY',
              desc: 'Qualifying free zone person assessments, transfer pricing, and proactive tax optimization.'
            }
          ]
        },
        {
          name: 'Tax Residency Certificate',
          hasSubgroups: false,
          desc: 'Procurement of TRCs for corporate entities and individuals to leverage double taxation treaties.'
        },
        {
          name: 'Excise Tax Services',
          hasSubgroups: false,
          desc: 'Excise registration, return filing, declarations, and compliance advisory for scheduled excise goods.'
        }
      ]
    },
    {
      id: 2,
      title: 'Accounting & Book keeping',
      bgColor: '#152845',
      workstreams: [
        {
          name: 'ACCOUNTING SECONDMENT AND SUPERVISION',
          desc: 'On-demand senior finance experts embedded to supervise and elevate internal finance workflows.'
        },
        {
          name: 'OUTSOURCED ACCOUNTING SERVICES',
          desc: 'Full-spectrum financial management, ledger maintenance, and statutory reporting.'
        },
        {
          name: 'MONTHLY BOOKKEEPING SERVICES',
          desc: 'Precise monthly transaction recording, bank reconciliations, and tailored MIS management reporting.'
        },
        {
          name: 'YEARLY BOOKS CLOSING SERVICE',
          desc: 'Fiscal year-end adjustments, trial balance finalization, and audit-ready financial statement drafting.'
        }
      ]
    },
    {
      id: 3,
      title: 'Business Consultancy',
      bgColor: '#07162C',
      workstreams: [
        {
          name: 'COMPANY INCORPORATION SERVICES',
          desc: 'Turnkey business setup across UAE Mainland, Free Zones, and Offshore jurisdictions.'
        },
        {
          name: 'COMPANY LIQUIDATION SERVICES',
          desc: 'Structured deregistration, clearance acquisition, and official liquidator report delivery.'
        },
        {
          name: 'PRO SERVICES',
          desc: 'Government liaison, ministry clearances, commercial licensing, and immigration facilitation.'
        }
      ]
    },
    {
      id: 4,
      title: 'Other Services',
      bgColor: '#10223B',
      workstreams: [
        {
          name: 'PAYROLL SERVICE',
          desc: 'WPS-compliant monthly payroll processing, salary disbursement, and gratuity calculations.'
        },
        {
          name: 'AUDIT ASSISTANCE SERVICE',
          desc: 'Audit liaison, workpaper preparation, and independent external auditor coordination.'
        }
      ]
    }
  ];

  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
          background: 'linear-gradient(90deg, rgba(7,29,43,0.95) 0%, rgba(7,29,43,0.75) 50%, rgba(7,29,43,0.3) 100%)',
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
              Home &nbsp;/&nbsp; Services &nbsp;/&nbsp; <span style={{ color: '#fff' }}>Tax, Accounting &amp; Advisory</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              color: 'var(--color-white)',
              marginBottom: '0.75rem',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Services &amp; Practice Areas
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: '620px'
            }}>
              Specialized Tax Advisory and Complete Accounting &amp; Bookkeeping solutions designed to ensure regulatory compliance and operational excellence in the UAE.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION — CORE PRACTICE DIVISIONS (HIERARCHY ARCHITECTURE DESIGN) */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '6.5rem 5% 7.5rem', borderTop: '1px solid rgba(10, 19, 37, 0.05)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          {/* Section Header */}
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
              
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.2vw, 3rem)', color: 'var(--color-primary)', lineHeight: 1.15, letterSpacing: '-0.02em', margin: 0 }}>
                Service Architecture<br/>
                &amp; <span style={{ color: 'var(--color-secondary)', fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>Practice Hierarchy</span>
              </h2>
            </div>

            <div>
              <p style={{ fontSize: '1.05rem', color: '#4B5868', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
                Structured across four specialized practice disciplines — <strong>Tax Services</strong>, <strong>Accounting &amp; Bookkeeping</strong>, <strong>Business Consultancy</strong>, and <strong>Other Services</strong> — delivering precision, compliance, and end-to-end strategic clarity for UAE companies.
              </p>
            </div>
          </div>

          {/* HIERARCHY ARCHITECTURE TREE */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            
            {/* Top Root Node */}
            <div className="services-root-node" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: '#0A1325',
              color: '#FFFFFF',
              padding: '1rem 2rem',
              borderRadius: '999px',
              border: '1px solid rgba(212, 183, 118, 0.4)',
              boxShadow: '0 12px 30px rgba(10, 19, 37, 0.15)',
              zIndex: 3,
              maxWidth: '92vw',
              textAlign: 'center'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#D4B776',
                boxShadow: '0 0 12px #D4B776',
                flexShrink: 0
              }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: '#D4B776', fontWeight: 700, textTransform: 'uppercase' }}>
                  MJS GLOBAL CORE PRACTICE
                </span>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, fontFamily: 'var(--font-heading)', letterSpacing: '0.02em' }}>
                  Client Advisory &amp; Assurance Framework
                </span>
              </div>
              <span className="services-count-pill" style={{
                backgroundColor: 'rgba(212, 183, 118, 0.18)',
                color: '#D4B776',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                marginLeft: '0.5rem',
                letterSpacing: '0.08em',
                whiteSpace: 'nowrap'
              }}>
                18 WORKSTREAMS
              </span>
            </div>

            {/* Vertical Stem from Root Node */}
            <div style={{ width: '2px', height: '36px', backgroundColor: '#152845', opacity: 0.35 }}></div>

            {/* Top Horizontal Distribution Rail for 4 Branches */}
            <div className="services-rail" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '12.5%',
                right: '12.5%',
                height: '2px',
                backgroundColor: '#152845',
                opacity: 0.25
              }} />
            </div>

            {/* 4 Classification Pillars with Interactive Hover/Tap Expansion */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem',
              width: '100%',
              alignItems: 'start'
            }}>
              {practiceCategories.map((cat, index) => {
                const isHovered = hoveredCard === index;
                return (
                  <div 
                    key={cat.id} 
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setHoveredCard(hoveredCard === index ? null : index)}
                  >
                    {/* Branch vertical connector from rail */}
                    <div style={{ 
                      width: '2px', 
                      height: '24px', 
                      backgroundColor: isHovered ? '#D4B776' : '#152845', 
                      opacity: isHovered ? 1 : 0.25,
                      transition: 'all 0.3s ease'
                    }}></div>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      backgroundColor: '#D4B776', 
                      marginTop: '-4px', 
                      marginBottom: '0.75rem',
                      boxShadow: isHovered ? '0 0 10px #D4B776' : 'none',
                      transition: 'all 0.3s ease'
                    }}></div>

                    {/* Classification Node Card with Tap & Hover Expansion */}
                    <div style={{
                      width: '100%',
                      backgroundColor: cat.bgColor,
                      borderRadius: '16px',
                      padding: '2rem 1.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      border: isHovered ? '1px solid rgba(212, 183, 118, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: isHovered ? '0 20px 45px rgba(10, 19, 37, 0.25), 0 0 30px rgba(212, 183, 118, 0.12)' : '0 12px 28px rgba(10, 19, 37, 0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease',
                      cursor: 'pointer'
                    }}>
                      {/* Subtle Glow */}
                      <div style={{
                        position: 'absolute',
                        top: '-30px',
                        right: '-30px',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(212,183,118,0.18) 0%, rgba(212,183,118,0) 70%)',
                        pointerEvents: 'none'
                      }} />

                      {/* Header with Title and Expand Prompt Indicator */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <h3 style={{
                          fontSize: '1.75rem',
                          color: '#ffffff',
                          margin: 0,
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                          lineHeight: 1.2
                        }}>
                          {cat.title}
                        </h3>

                        {/* Interactive Plus / Arrow toggle indicator */}
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: isHovered ? 'rgba(212, 183, 118, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                          border: isHovered ? '1px solid #D4B776' : '1px solid rgba(255, 255, 255, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.35s ease',
                          transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isHovered ? '#D4B776' : 'rgba(255, 255, 255, 0.7)'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>

                      <div style={{ 
                        width: isHovered ? '70px' : '50px', 
                        height: '2px', 
                        backgroundColor: '#D4B776', 
                        margin: '1.25rem 0 0',
                        transition: 'width 0.3s ease'
                      }}></div>

                      {/* Smooth Collapsible / Expandable Details Container */}
                      <div style={{
                        display: 'grid',
                        gridTemplateRows: isHovered ? '1fr' : '0fr',
                        transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
                        opacity: isHovered ? 1 : 0
                      }}>
                        <div style={{ overflow: 'hidden' }}>
                          {cat.subGroups ? (
                            <div style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '1.25rem',
                              paddingTop: '1.5rem',
                              paddingBottom: '0.5rem'
                            }}>
                              {cat.subGroups.map((sub, sIdx) => (
                                <div 
                                  key={sIdx}
                                  style={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(212, 183, 118, 0.18)',
                                    borderRadius: '10px',
                                    padding: '1rem 1.15rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                  }}
                                >
                                  {/* Subgroup Header */}
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                      <span style={{ 
                                        width: '6px', 
                                        height: '6px', 
                                        borderRadius: '50%', 
                                        backgroundColor: '#D4B776' 
                                      }} />
                                      <span style={{ 
                                        fontSize: '0.82rem', 
                                        fontWeight: 700, 
                                        color: '#D4B776', 
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase'
                                      }}>
                                        {sub.name}
                                      </span>
                                    </div>
                                    {sub.hasSubgroups && (
                                      <span style={{
                                        fontSize: '0.62rem',
                                        color: 'rgba(255, 255, 255, 0.55)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                        padding: '0.15rem 0.45rem',
                                        borderRadius: '10px',
                                        letterSpacing: '0.05em'
                                      }}>
                                        {sub.workstreams?.length} items
                                      </span>
                                    )}
                                  </div>

                                  {/* Subgroup Workstreams (if any) or Single Description */}
                                  {sub.hasSubgroups && sub.workstreams ? (
                                    <div style={{
                                      display: 'grid',
                                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                      gap: '0.75rem 1.25rem',
                                      paddingLeft: '0.5rem'
                                    }}>
                                      {sub.workstreams.map((ws, wsIdx) => (
                                        <div 
                                          key={wsIdx} 
                                          style={{ 
                                            display: 'flex', 
                                            alignItems: 'flex-start', 
                                            position: 'relative',
                                            paddingLeft: '1rem',
                                            borderLeft: '1.5px solid rgba(212, 183, 118, 0.3)'
                                          }}
                                        >
                                          <div style={{
                                            position: 'absolute',
                                            left: '-3px',
                                            top: '6px',
                                            width: '5px',
                                            height: '5px',
                                            borderRadius: '50%',
                                            backgroundColor: '#D4B776'
                                          }}></div>
                                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                                            <span style={{
                                              fontSize: '0.72rem',
                                              color: 'rgba(255,255,255,0.95)',
                                              fontWeight: 600,
                                              letterSpacing: '0.03em',
                                              lineHeight: 1.3
                                            }}>
                                              {ws.name}
                                            </span>
                                            <p style={{
                                              fontSize: '0.68rem',
                                              color: 'rgba(255,255,255,0.6)',
                                              lineHeight: 1.4,
                                              margin: 0,
                                              fontWeight: 400
                                            }}>
                                              {ws.desc}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <p style={{
                                      fontSize: '0.73rem',
                                      color: 'rgba(255,255,255,0.7)',
                                      lineHeight: 1.45,
                                      margin: 0,
                                      paddingLeft: '0.5rem',
                                      fontStyle: 'normal'
                                    }}>
                                      {sub.desc}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: (cat.workstreams && cat.workstreams.length > 4) ? 'repeat(auto-fit, minmax(240px, 1fr))' : '1fr',
                              gap: '1.1rem 1.75rem',
                              paddingTop: '1.5rem',
                              paddingBottom: '0.5rem'
                            }}>
                              {cat.workstreams?.map((ws, idx) => (
                                <div 
                                  key={idx} 
                                  style={{ 
                                    display: 'flex', 
                                    alignItems: 'flex-start', 
                                    position: 'relative',
                                    paddingLeft: '1.25rem',
                                    borderLeft: '2px solid rgba(212, 183, 118, 0.35)'
                                  }}
                                >
                                  {/* Horizontal connector node dot */}
                                  <div style={{
                                    position: 'absolute',
                                    left: '-4px',
                                    top: '7px',
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    backgroundColor: '#D4B776',
                                    boxShadow: '0 0 6px rgba(212, 183, 118, 0.6)'
                                  }}></div>

                                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                    <span style={{
                                      fontSize: '0.78rem',
                                      color: 'rgba(255,255,255,0.95)',
                                      fontWeight: 600,
                                      letterSpacing: '0.04em',
                                      lineHeight: 1.3
                                    }}>
                                      {ws.name}
                                    </span>
                                    <p style={{
                                      fontSize: '0.73rem',
                                      color: 'rgba(255,255,255,0.65)',
                                      lineHeight: 1.45,
                                      margin: 0,
                                      fontWeight: 400
                                    }}>
                                      {ws.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Subtle Hint when collapsed */}
                      {!isHovered && (
                        <div style={{
                          marginTop: '1.25rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontSize: '0.72rem',
                          letterSpacing: '0.08em',
                          color: 'rgba(212, 183, 118, 0.75)',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          transition: 'opacity 0.2s ease'
                        }}>
                          <span>Tap or hover to view workstreams</span>
                          <span>→</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION — HIERARCHY SERVICES SHOWCASE (PINNED IMAGE & SERVICE TREE) */}
      <section className="services-showcase-split" style={{ 
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
        <div className="services-pinned-img" style={{
          position: 'sticky',
          top: '5.5rem',
          flex: '1 1 380px',
          maxWidth: '560px',
          height: 'calc(100vh - 7rem)',
          minHeight: '480px',
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









    </main>
  );
}
