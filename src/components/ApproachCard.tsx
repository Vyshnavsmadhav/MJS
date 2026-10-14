import React, { useState } from 'react';

interface ApproachCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ApproachCard({ title, description, icon }: ApproachCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="approach-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#F97316' : '#ffffff',
        color: isHovered ? '#000000' : '#000000',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.1)',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        cursor: 'default',
        boxShadow: isHovered ? '0 10px 30px rgba(249, 115, 22, 0.2)' : 'none',
      }}
    >
      <div style={{
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {icon || (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}
      </div>

      <div>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 600, 
          marginBottom: isHovered ? '1rem' : '0',
          transition: 'margin 0.3s ease',
          fontFamily: '"Neue Montreal", sans-serif',
          lineHeight: 1.2
        }}>
          {title}
        </h3>
        
        <div style={{
          maxHeight: isHovered ? '250px' : '0',
          opacity: isHovered ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.4s ease',
        }}>
          <p style={{
            fontSize: '0.85rem',
            lineHeight: 1.6,
            margin: 0
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
