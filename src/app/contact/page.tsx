'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formState, setFormState] = useState('idle'); // 'idle', 'submitting', 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    const serviceLabels: { [key: string]: string } = {
      tax: 'Tax Services',
      accounting: 'Accounting & Bookkeeping',
      consultancy: 'Business Consultancy',
      other: 'Other Services'
    };

    const selectedService = serviceLabels[formData.service] || formData.service || 'General Enquiry';

    // Format professional WhatsApp inquiry message
    const waText = 
      `*New Enquiry via MJS Global Website*\n\n` +
      `*Name:* ${formData.name || 'N/A'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Service:* ${selectedService}\n` +
      `*Message:* ${formData.message || 'N/A'}`;

    const phoneNumber = '971504926945';
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }

    setFormState('success');
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* SECTION 1 — CONTACT HERO */}
      <section style={{
        position: 'relative',
        height: '350px', // Adjusted for header
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 5% 0', // Header offset
        overflow: 'hidden',
        backgroundColor: 'var(--color-primary)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000")', // Dubai skyline
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }} />
        
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(90deg, rgba(7,29,43,0.95) 0%, rgba(7,29,43,0.7) 40%, rgba(7,29,43,0.1) 100%)',
          zIndex: 2
        }} />

        {/* Hero Content */}
        <div className={mounted ? 'animate-fade-in-up' : ''} style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          
          <div style={{ paddingLeft: '2%' }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>CONTACT</span>
              <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-accent)' }}></div>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.25rem)',
              color: 'var(--color-white)',
              marginBottom: '1rem',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}>
              Let&apos;s Build<br/>What&apos;s Next.
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.85)',
              maxWidth: '450px',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              We&apos;re here to listen, understand and support your business with the right solutions.
            </p>
          </div>

          {/* Right Detail */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', paddingRight: '2%', marginTop: '2rem' }}>
            <div style={{ width: '1.5px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.25em', lineHeight: 1.8, display: 'flex', flexDirection: 'column' }}>
              <span>LOCAL</span>
              <span>EXPERTISE.</span>
              <span style={{ marginTop: '0.5rem' }}>GLOBAL</span>
              <span>PERSPECTIVE.</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — MAIN CONTACT SECTION */}
      <section style={{ backgroundColor: 'var(--color-background)', padding: '6rem 5%' }}>
        <div className={mounted ? 'animate-fade-in-up stagger-1' : ''} style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', gap: '6%', flexWrap: 'wrap' }}>
          
          {/* LEFT COLUMN — OFFICE INFORMATION */}
          <div style={{ flex: '1 1 45%', minWidth: '400px', display: 'flex', flexDirection: 'column', paddingRight: '2%' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text)', fontWeight: 600 }}>OUR OFFICE</span>
              <div style={{ width: '30px', height: '1.5px', backgroundColor: 'var(--color-accent)' }}></div>
            </div>
            
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
              Dubai Office
            </h2>
            
            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '3rem', lineHeight: 1.7, maxWidth: '400px' }}>
              We are based in Dubai and welcome the opportunity to discuss how we can support your business.
            </p>

            {/* Contact Details */}
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
              {/* Address */}
              <div style={{ flex: 1, borderRight: '1px solid rgba(0,0,0,0.08)', paddingRight: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: '8px', height: '12px', border: '1px solid var(--color-primary)', borderRadius: '4px 4px 0 0' }}></div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>ADDRESS</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>
                      214 King Ali Ahmed<br/>
                      Mohamed Derwish<br/>
                      Hair Al-Anz<br/>
                      Office No. 101<br/>
                      Hair Al Anz, Dubai
                    </p>
                  </div>
                </div>
              </div>

              {/* Email & Phone Container */}
              <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: '12px', height: '8px', border: '1px solid var(--color-primary)', borderRadius: '1px', position: 'relative' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', backgroundColor: 'var(--color-primary)', transform: 'rotate(25deg)', transformOrigin: 'top left' }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>EMAIL</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666' }}>tax@mjsglobal.co</p>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <div style={{ width: '8px', height: '14px', border: '1px solid var(--color-primary)', borderRadius: '2px' }}></div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>PHONE</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.6 }}>
                      +971 50 4926945<br/>
                      +971 58 5390669
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* RIGHT COLUMN — CONTACT FORM */}
          <div style={{ flex: '1 1 45%', minWidth: '400px' }}>
            <div style={{ backgroundColor: '#F9F9F9', padding: '3rem 3.5rem', borderRadius: '4px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--color-text)', fontWeight: 600 }}>SEND US A MESSAGE</span>
                <div style={{ width: '30px', height: '1.5px', backgroundColor: 'var(--color-accent)' }}></div>
              </div>
              
              <h2 style={{ fontSize: '2.25rem', color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1.15 }}>
                Get in Touch
              </h2>
              
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                Fill in the form below and our team will get back to you as soon as possible.
              </p>

              {formState === 'success' ? (
                <div style={{ padding: '3rem 2rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '4px', backgroundColor: '#fff', textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(212,183,118,0.15)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>✓</div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Thank you.</h3>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>Your message has been received.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Row 1 */}
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="name" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        placeholder="Enter your name" 
                        className="contact-input" 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="email" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="Enter your email" 
                        className="contact-input" 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="company" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        placeholder="Enter your company name" 
                        className="contact-input" 
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="phone" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        className="contact-input" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="service" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>Service Interested In</label>
                    <div style={{ position: 'relative' }}>
                      <select 
                        id="service" 
                        className="contact-input" 
                        style={{ appearance: 'none', width: '100%' }}
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="tax">Tax Services</option>
                        <option value="accounting">Accounting & Bookkeeping</option>
                        <option value="consultancy">Business Consultancy</option>
                        <option value="other">Other Services</option>
                      </select>
                      <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#999', fontSize: '0.7rem' }}>
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Row 4 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="message" style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 500 }}>Message *</label>
                    <textarea 
                      id="message" 
                      required 
                      placeholder="Tell us how we can help you..." 
                      className="contact-input" 
                      rows={4} 
                      style={{ resize: 'vertical', minHeight: '100px' }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div style={{ marginTop: '0.5rem' }}>
                    <button type="submit" disabled={formState === 'submitting'} className="header-btn" style={{ padding: '0.9rem 2.5rem' }}>
                      {formState === 'submitting' ? 'Sending...' : 'Send Enquiry \u2192'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>



    </main>
  );
}
