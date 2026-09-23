import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MJS Global | Your Strategic Partner in the UAE",
  description: "Accounting, taxation, compliance and advisory solutions designed to help businesses operate with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <header style={{ 
          position: 'absolute', 
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          backgroundColor: 'transparent', 
          color: '#fff',
          padding: '0 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 100,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.15em', lineHeight: 1 }}>LOGO</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.15em', lineHeight: 1 }}>GLOBAL</span>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Search Icon Placeholder */}
            <div style={{ cursor: 'pointer', width: '16px', height: '16px', border: '1.5px solid #fff', borderRadius: '50%', position: 'relative' }}>
               <div style={{ position: 'absolute', bottom: '-4px', right: '-4px', width: '6px', height: '1.5px', backgroundColor: '#fff', transform: 'rotate(45deg)' }}></div>
            </div>

            <Link href="/contact">
              <button className="header-btn">Get in Touch &rarr;</button>
            </Link>
          </div>
        </header>
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
