'use client';
import React from 'react';

interface ServiceDetailsCardProps {
  number: string;
  title: string;
  description: string;
  iconType?: string; // Optional if we want dynamic icons later
}

export default function ServiceDetailsCard({ number, title, description }: ServiceDetailsCardProps) {
  return (
    <div 
      className="service-card"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
        padding: '2rem 1.5rem',
        backgroundColor: '#fff',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
        const arrow = e.currentTarget.querySelector('.card-arrow') as HTMLElement;
        if (arrow) arrow.style.transform = 'translateX(4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        const arrow = e.currentTarget.querySelector('.card-arrow') as HTMLElement;
        if (arrow) arrow.style.transform = 'translateX(0)';
      }}
    >
      {/* Icon and Number Column */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          backgroundColor: '#F4F5F7', 
          borderRadius: '2px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {/* Generic Document Icon Placeholder */}
          <div style={{ width: '16px', height: '20px', border: '1.2px solid var(--color-primary)', borderRadius: '1px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '4px', left: '3px', width: '8px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
            <div style={{ position: 'absolute', top: '8px', left: '3px', width: '10px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
            <div style={{ position: 'absolute', top: '12px', left: '3px', width: '6px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
          </div>
        </div>
        <div style={{ color: 'var(--color-text)', fontSize: '0.8rem', opacity: 0.5, fontWeight: 500 }}>
          {number}
        </div>
      </div>

      {/* Content Column */}
      <div style={{ flexGrow: 1, paddingRight: '1rem' }}>
        <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>{title}</h4>
        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>{description}</p>
      </div>

      {/* Arrow Column */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', height: '100%', paddingTop: '0.25rem' }}>
        <div 
          className="card-arrow"
          style={{ 
            color: 'var(--color-text)', 
            opacity: 0.4, 
            fontSize: '1rem', 
            transition: 'transform 0.3s ease' 
          }}
        >
          &rarr;
        </div>
      </div>
    </div>
  );
}
