'use client';
import React, { useState } from 'react';

interface ServiceDetailsCardProps {
  number: string;
  title: string;
  description: string;
  category?: string;
}

export default function ServiceDetailsCard({ number, title, description, category }: ServiceDetailsCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Pick contextual icon based on service index / title
  const getIcon = () => {
    switch (number) {
      case '01': // VAT Registration
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
        );
      case '02': // VAT Return Filing
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="m9 15 2 2 4-4" />
          </svg>
        );
      case '03': // VAT Health Checks
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case '04': // VAT Advisory Services
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <line x1="9" y1="10" x2="15" y2="10" />
            <line x1="12" y1="7" x2="12" y2="13" />
          </svg>
        );
      case '05': // VAT Refund Services
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        );
      case '06': // Corporate Tax Registration
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case '07': // Corporate Tax Filing
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="9" y1="7" x2="15" y2="7" />
            <line x1="9" y1="11" x2="13" y2="11" />
          </svg>
        );
      default: // Corporate Tax Advisory & Compliance (08)
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
    }
  };

  const tagLabel = category || (number.startsWith('0') && parseInt(number, 10) <= 5 ? 'VAT' : 'Corporate Tax');

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '2.2rem 2rem',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: isHovered ? '1px solid rgba(212, 183, 118, 0.55)' : '1px solid rgba(10, 19, 37, 0.07)',
        boxShadow: isHovered 
          ? '0 20px 40px -12px rgba(10, 19, 37, 0.08), 0 0 0 1px rgba(212, 183, 118, 0.3)' 
          : '0 2px 12px rgba(10, 19, 37, 0.03)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'default',
        overflow: 'hidden',
        minHeight: '230px'
      }}
    >
      {/* Top Subtle Accent Strip on hover */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3.5px',
          background: 'linear-gradient(90deg, #D4B776 0%, #152845 100%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Top Header Row: Icon + Number badge & Tag */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div 
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: isHovered ? '#0A1325' : '#F1F5F9',
                color: isHovered ? '#D4B776' : '#152845',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isHovered ? '0 6px 18px rgba(10, 19, 37, 0.22)' : 'none'
              }}
            >
              {getIcon()}
            </div>
            <span 
              style={{
                fontSize: '0.74rem',
                letterSpacing: '0.14em',
                fontWeight: 700,
                color: isHovered ? '#A47E2A' : '#94A3B8',
                transition: 'color 0.25s ease'
              }}
            >
              {number}
            </span>
          </div>

          {/* Tag pill */}
          <span 
            style={{
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.35rem 0.75rem',
              borderRadius: '999px',
              backgroundColor: isHovered ? 'rgba(212, 183, 118, 0.16)' : 'rgba(10, 19, 37, 0.04)',
              color: isHovered ? '#8E6B1D' : '#64748B',
              transition: 'all 0.3s ease'
            }}
          >
            {tagLabel}
          </span>
        </div>

        {/* Title */}
        <h3 
          style={{
            fontSize: '1.22rem',
            fontFamily: 'var(--font-heading)',
            color: isHovered ? '#0A1325' : '#0F172A',
            fontWeight: 600,
            marginBottom: '0.65rem',
            lineHeight: 1.28,
            transition: 'color 0.2s ease'
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p 
          style={{
            fontSize: '0.9rem',
            color: '#64748B',
            lineHeight: 1.65,
            margin: 0,
            fontWeight: 400
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

