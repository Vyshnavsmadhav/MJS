'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface SlidingWindowShowcaseProps {
  imageLeft?: string;
  imageRight?: string;
  leftTitle?: string;
  leftSubtitle?: string;
  rightTitle?: string;
  rightSubtitle?: string;
}

export default function SlidingWindowShowcase({
  imageLeft = '/showcase-1.webp',
  imageRight = '/showcase-2.webp',
  leftTitle = 'Global Leadership & Keynotes',
  leftSubtitle = 'Commanding insights and visionary keynote addresses that inspire multinational enterprises.',
  rightTitle = 'Hands-On Advisory & Collaboration',
  rightSubtitle = 'Agile, on-the-ground teams delivering tangible tax, compliance, and corporate results.',
}: SlidingWindowShowcaseProps) {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Auto-slide animation loop (gentle smooth oscillation between 32% and 68%)
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    let localStartTime: number | null = null;
    const initialPos = sliderPos;
    // Map initial pos back to phase angle so there is no snap
    const initialPhase = Math.asin(Math.min(Math.max((initialPos - 50) / 20, -1), 1));
    const speed = 0.0012; // gentle speed

    const animate = (timestamp: number) => {
      if (localStartTime === null) localStartTime = timestamp;
      const elapsed = timestamp - localStartTime;
      
      // Sinusoidal motion between 30% and 70%
      const newPos = 50 + 20 * Math.sin(initialPhase + elapsed * speed);
      setSliderPos(Math.round(newPos * 10) / 10);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isAutoPlaying, isDragging]);

  // Handle position calculation from mouse/touch event
  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percent = Math.max(3, Math.min(97, (offsetX / rect.width) * 100));
    setSliderPos(Math.round(percent * 10) / 10);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setHasInteracted(true);
    updateSliderPosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    setIsAutoPlaying(false);
    setHasInteracted(true);
    if (e.key === 'ArrowLeft') {
      setSliderPos(prev => Math.max(5, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos(prev => Math.min(95, prev + 5));
    }
  };

  const setViewPreset = (pos: number) => {
    setIsAutoPlaying(false);
    setHasInteracted(true);
    setSliderPos(pos);
  };

  return (
    <section 
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '6rem 5% 7rem',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ 
            fontSize: '0.75rem', 
            letterSpacing: '0.22em', 
            color: 'var(--color-secondary)', 
            fontWeight: 700, 
            marginBottom: '0.85rem',
            textTransform: 'uppercase',
            fontFamily: '"Neue Montreal", sans-serif'
          }}>
            EXPERIENCE MJS GLOBAL
          </div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', 
            color: '#0A1325',
            fontFamily: '"Neue Montreal", sans-serif',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Visionary Leadership in Action
          </h2>
          <p style={{
            maxWidth: '680px',
            margin: '0 auto',
            fontSize: '1rem',
            color: '#4B5563',
            lineHeight: 1.6
          }}>
            From international keynote stages to hands-on strategic advisory, discover how our experts partner with forward-looking organizations.
          </p>
        </div>

        {/* Sliding Window Frame Container */}
        <div 
          ref={containerRef}
          tabIndex={0}
          role="slider"
          aria-valuenow={sliderPos}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Image comparison slider"
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onMouseEnter={() => {
            if (!hasInteracted) {
              setIsAutoPlaying(false);
            }
          }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(460px, 62vh, 660px)',
            borderRadius: '24px',
            overflow: 'hidden',
            cursor: isDragging ? 'grabbing' : 'ew-resize',
            userSelect: 'none',
            boxShadow: '0 25px 60px -15px rgba(10, 19, 37, 0.16), 0 0 0 1px rgba(10, 19, 37, 0.08)',
            backgroundColor: '#0A1325',
            touchAction: 'none',
            outline: 'none'
          }}
        >
          {/* Base Layer: Right Image (Team Advisory) */}
          <div style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}>
            <img 
              src={imageRight}
              alt="Hands-On Advisory & Collaboration" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                display: 'block'
              }}
              draggable={false}
            />

            {/* Gradient Overlay for Readability */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10, 19, 37, 0.85) 0%, rgba(10, 19, 37, 0.2) 40%, rgba(10, 19, 37, 0.3) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Floating Info Card - Right Image */}
            <div style={{
              position: 'absolute',
              bottom: '2.5rem',
              right: '2.5rem',
              maxWidth: '380px',
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(10, 19, 37, 0.78)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              pointerEvents: 'none',
              transform: `translateX(${sliderPos > 70 ? (sliderPos - 70) * 1.5 : 0}px)`,
              opacity: sliderPos > 85 ? 0.3 : 1,
              transition: isDragging ? 'none' : 'opacity 0.3s ease, transform 0.3s ease'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: '#D4B776',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D4B776' }} />
                STRATEGIC EXECUTION
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#FFFFFF',
                fontFamily: '"Neue Montreal", sans-serif',
                marginBottom: '0.4rem',
                lineHeight: 1.25
              }}>
                {rightTitle}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.5,
                margin: 0
              }}>
                {rightSubtitle}
              </p>
            </div>
          </div>

          {/* Overlay Layer: Left Image (Keynote Speaker) with Clip Path */}
          <div style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            willChange: 'clip-path'
          }}>
            <img 
              src={imageLeft}
              alt="Global Leadership & Keynotes" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block'
              }}
              draggable={false}
            />

            {/* Gradient Overlay for Readability */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10, 19, 37, 0.85) 0%, rgba(10, 19, 37, 0.2) 40%, rgba(10, 19, 37, 0.3) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Floating Info Card - Left Image */}
            <div style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '2.5rem',
              maxWidth: '380px',
              padding: '1.5rem',
              borderRadius: '16px',
              backgroundColor: 'rgba(10, 19, 37, 0.78)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              pointerEvents: 'none',
              transform: `translateX(${sliderPos < 30 ? (sliderPos - 30) * 1.5 : 0}px)`,
              opacity: sliderPos < 15 ? 0.3 : 1,
              transition: isDragging ? 'none' : 'opacity 0.3s ease, transform 0.3s ease'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: '#38BDF8',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38BDF8' }} />
                GLOBAL PRESENCE
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#FFFFFF',
                fontFamily: '"Neue Montreal", sans-serif',
                marginBottom: '0.4rem',
                lineHeight: 1.25
              }}>
                {leftTitle}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.5,
                margin: 0
              }}>
                {leftSubtitle}
              </p>
            </div>
          </div>

          {/* Sliding Divider Bar & Center Handle */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '2px',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 0 14px rgba(255, 255, 255, 0.9), 0 0 4px rgba(0, 0, 0, 0.4)',
            zIndex: 10,
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            willChange: 'left'
          }}>
            {/* Center Circular Sliding Window Controller */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${isDragging ? 1.15 : 1})`,
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: isDragging ? 'grabbing' : 'ew-resize',
              pointerEvents: 'auto'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                color: '#0A1325'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <div style={{ width: '1.5px', height: '14px', backgroundColor: 'rgba(10, 19, 37, 0.25)' }} />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Interactive Hint Badge (Top Center) */}
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 12,
            padding: '0.45rem 1.1rem',
            borderRadius: '100px',
            backgroundColor: 'rgba(10, 19, 37, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            pointerEvents: 'none',
            opacity: hasInteracted ? 0.7 : 1,
            transition: 'opacity 0.3s ease'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#38BDF8',
              boxShadow: '0 0 8px #38BDF8',
              display: 'inline-block'
            }} />
            <span>Slide window to compare</span>
          </div>
        </div>

        {/* View Controls & Action Bar */}
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0 0.5rem'
        }}>
          {/* Quick Perspective Selectors */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setViewPreset(80)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: sliderPos >= 70 ? '1px solid #0A1325' : '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: sliderPos >= 70 ? '#0A1325' : '#FFFFFF',
                color: sliderPos >= 70 ? '#FFFFFF' : '#0A1325',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Keynote Presentation</span>
            </button>

            <button
              onClick={() => setViewPreset(50)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: sliderPos > 35 && sliderPos < 65 ? '1px solid #0A1325' : '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: sliderPos > 35 && sliderPos < 65 ? '#0A1325' : '#FFFFFF',
                color: sliderPos > 35 && sliderPos < 65 ? '#FFFFFF' : '#0A1325',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Split View (50 / 50)
            </button>

            <button
              onClick={() => setViewPreset(20)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '8px',
                border: sliderPos <= 30 ? '1px solid #0A1325' : '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: sliderPos <= 30 ? '#0A1325' : '#FFFFFF',
                color: sliderPos <= 30 ? '#FFFFFF' : '#0A1325',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Team Collaboration</span>
            </button>
          </div>

          {/* Auto-Slide Toggle Button */}
          <div>
            <button
              onClick={() => {
                setIsAutoPlaying(prev => !prev);
                setHasInteracted(true);
              }}
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: '#FFFFFF',
                color: '#4B5563',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
            >
              {isAutoPlaying ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                  <span>Pause Motion</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Auto-Glide Motion</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
