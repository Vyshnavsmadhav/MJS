'use client';
import React from 'react';

interface ServiceCardProps {
  number: string;
  title: string;
  bullets: string[];
  delayClass?: string;
}

export default function ServiceCard({ number, title, bullets, delayClass = '' }: ServiceCardProps) {
  return (
    <div 
      className={`animate-fade-in-up ${delayClass}`}
      style={{
        backgroundColor: '#fff',
        border: '1px solid var(--color-border)',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        {/* Placeholder Icon */}
        <div style={{ width: '32px', height: '32px', border: '1.5px solid var(--color-primary)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '16px', height: '1.5px', backgroundColor: 'var(--color-primary)' }}></div>
        </div>
        <span style={{ color: '#999', fontSize: '0.85rem' }}>{number}</span>
      </div>

      <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--color-primary)' }}>{title}</h3>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, marginBottom: '2rem' }}>
        {bullets.map((bullet, idx) => (
          <li key={idx} style={{ 
            fontSize: '0.85rem', 
            color: '#555', 
            marginBottom: '0.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem' 
          }}>
            <span style={{ width: '4px', height: '4px', backgroundColor: '#555', borderRadius: '50%' }}></span>
            {bullet}
          </li>
        ))}
      </ul>

      <div style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        Explore <span style={{ transition: 'transform 0.2s' }}>&rarr;</span>
      </div>
    </div>
  );
}
