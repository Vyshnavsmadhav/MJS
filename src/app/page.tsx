'use client';
import React, { useEffect, useState } from 'react';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* SECTION 2 — HERO */}
      <section style={{
        position: 'relative',
        height: '600px', // Between 490-560px approx, adjusted for header padding
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
        overflow: 'hidden',
        backgroundColor: 'var(--color-primary)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }} />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(90deg, rgba(10,19,37,0.95) 0%, rgba(10,19,37,0.7) 40%, rgba(10,19,37,0.1) 100%)',
          zIndex: 2
        }} />

        {/* Hero Content Position */}
        <div className={mounted ? 'animate-fade-in-up' : ''} style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ paddingLeft: '2%' }}>
            {/* Eyebrow */}
            <div style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--color-white)',
              marginBottom: '1.5rem',
              fontWeight: 500,
              display: 'flex',
              gap: '1rem'
            }}>
              <span>ACCOUNTING</span> <span style={{ color: 'var(--color-accent)' }}>|</span> 
              <span>TAXATION</span> <span style={{ color: 'var(--color-accent)' }}>|</span> 
              <span>COMPLIANCE</span> <span style={{ color: 'var(--color-accent)' }}>|</span> 
              <span>ADVISORY</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 5rem)',
              color: 'var(--color-white)',
              maxWidth: '700px',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Your <br/> Main Heading <br/> Goes Here
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '480px',
              marginBottom: '3rem',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              Short supporting text goes here. It can be one or two lines of placeholder text.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <button style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '2px',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >Primary CTA &rarr;</button>

              <button style={{
                backgroundColor: 'transparent',
                color: 'var(--color-white)',
                border: '1px solid rgba(255,255,255,0.5)',
                padding: '1rem 2rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderRadius: '2px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 0, height: 0, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: '5px solid #fff', marginLeft: '1px' }}></div>
                </div>
                Watch Video
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Detail */}
        <div style={{ position: 'absolute', top: '25%', right: '5%', zIndex: 3, display: 'flex', gap: '1rem' }}>
          <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.5)' }}></div>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', lineHeight: 1.6 }}>
            SOME SMALL TEXT<br/>GOES HERE
          </div>
        </div>

        {/* Slide Indicator */}
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.75rem' }}>
          <span style={{ color: '#fff', fontWeight: 600 }}>01</span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>02</span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>03</span>
        </div>

        {/* Stats Strip Inside Hero Bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: '5%', right: '5%', zIndex: 3, paddingBottom: '2rem' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem', display: 'flex', gap: '4rem' }}>
            <div style={{ paddingRight: '4rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.75rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>20XX</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>Label</div>
            </div>
            <div style={{ paddingRight: '4rem', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ fontSize: '1.75rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>XXX</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>Label</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>X</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>Label</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT */}
      <section style={{ backgroundColor: 'var(--color-background)', padding: '6rem 5%' }}>
        <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '2%', flexWrap: 'wrap' }}>
          
          {/* Left Column - 40% */}
          <div style={{ flex: '0 0 38%', paddingRight: '4%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.25rem' }}>ABOUT US</div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem', lineHeight: 1.15 }}>Section Heading<br/>Goes Here</h2>
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Short ipsum atr secinng et lore peatitag. It can be per accices docum acca secant cosec adisintingub occummod am, poceding ponsco ca corrumtise na pocet teoting placeholder.
            </p>
            <div>
              <button style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-primary)',
                border: 'none',
                padding: '0.85rem 2rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '2px',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >Learn More &rarr;</button>
            </div>
          </div>

          {/* Center Column - 30% */}
          <div style={{ flex: '0 0 29%', height: '420px', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Corporate Office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Right Column - 30% */}
          <div style={{ flex: '0 0 29%', height: '420px', display: 'flex' }}>
            {/* Dark block */}
            <div style={{ flex: '0 0 55%', backgroundColor: 'var(--color-primary)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', color: '#fff' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.4 }}>SMALL TITLE<br/>HERE</div>
              <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)', marginBottom: '1.5rem' }}></div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Short text or quote goes here.</p>
            </div>
            {/* Adjacent Image */}
            <div style={{ flex: '1', height: '100%', position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=600" alt="Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section style={{ backgroundColor: 'var(--color-background-alt)', padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>OUR SERVICES</div>
              <h2 style={{ fontSize: '2.5rem' }}>Section Heading for<br/>Services Goes Here</h2>
            </div>
            <a href="#" style={{ fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', paddingBottom: '0.5rem' }}>
              View All Services &rarr;
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <ServiceCard 
              delayClass="stagger-1"
              number="01" 
              title="Service Title" 
              bullets={['Placeholder service', 'Placeholder service', 'Placeholder service', 'Placeholder service', 'Placeholder service']} 
            />
            <ServiceCard 
              delayClass="stagger-2"
              number="02" 
              title="Service Title" 
              bullets={['Repdillde gour prepsinet', 'Dorosion gloccis adostces', 'Roating cecteesacides', 'Rocauein gaeeet tolasices']} 
            />
            <ServiceCard 
              delayClass="stagger-3"
              number="03" 
              title="Service Title" 
              bullets={['Corolsesn of crotet fadstines', 'Renting oorcoe esotices', 'Rotbling coruors industies', 'Bobbie s caccctidef cepsines']} 
            />
            <ServiceCard 
              delayClass="stagger-4"
              number="04" 
              title="Service Title" 
              bullets={['Ilccesein on cerson begnices', 'Rocaing caoters tridsties', 'Boeluly of celtaited brities']} 
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — APPROACH */}
      <section style={{ backgroundColor: 'var(--color-secondary)', position: 'relative', display: 'flex' }}>
        
        {/* Left Image (40-45%) */}
        <div style={{ width: '42%', position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" alt="Corporate Meeting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10,19,37,0.75)' }}></div>
          
          <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ position: 'absolute', bottom: '15%', left: '12%', right: '10%', color: '#fff' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 600, marginBottom: '1rem' }}>OUR APPROACH</div>
            <h2 style={{ fontSize: '2.25rem', color: '#fff', marginBottom: '1.5rem' }}>A Section Heading<br/>Goes Here.</h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '380px' }}>
              Thor beequnting amtdenks or dadsafiverdenarioof det jaserenseeed ocerumremna oignotiers.
            </p>
            <button style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)',
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '2px',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >Our Approach &rarr;</button>
          </div>
        </div>

        {/* Right Content (Features) */}
        <div className={mounted ? 'animate-fade-in-up stagger-2' : ''} style={{ width: '58%', padding: '6rem 4% 6rem 6%', display: 'flex', gap: '3rem' }}>
          {[1,2,3].map((item, idx) => (
            <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Feature Icon */}
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid #fff' }}></div>
              </div>
              <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1rem' }}>Approach Title</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                The pooming gaoleclt der bwa e autides aoobotanet rnts inaet agooter ting pifors.
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
