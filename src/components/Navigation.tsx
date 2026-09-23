'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{ display: 'flex', gap: '2.5rem', fontSize: '0.85rem', fontWeight: 400, alignItems: 'center' }}>
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link 
            key={item.name} 
            href={item.path} 
            style={{ 
              position: 'relative', 
              paddingBottom: '0.25rem',
              color: isActive ? '#fff' : 'rgba(255,255,255,0.85)',
              transition: 'color 0.2s'
            }}
          >
            {item.name}
            {isActive && (
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                height: '1px', 
                backgroundColor: 'var(--color-accent)' 
              }}></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
