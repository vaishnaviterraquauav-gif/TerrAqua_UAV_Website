import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

function ComparisonCard({ beforeImg, afterImg, beforeLabel, afterLabel, caption, title, description, initialPos = 50 }) {
  const [sliderPos, setSliderPos] = useState(initialPos)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#FFFFFF',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid rgba(27, 54, 73, 0.12)',
      boxShadow: '0 20px 45px -12px rgba(27, 54, 73, 0.08)',
      transition: 'all 0.35s ease'
    }}>
      {/* Interactive Split Image Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(240px, 42vw, 320px)',
          overflow: 'hidden',
          cursor: 'ew-resize',
          userSelect: 'none',
          backgroundColor: '#050D1A'
        }}
      >
        {/* Right Image (After / Processed) */}
        <img
          src={afterImg}
          alt={afterLabel}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none'
          }}
        />

        {/* Left Image (Before / Raw - Clipped) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: `${sliderPos}%`,
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <img
            src={beforeImg}
            alt={beforeLabel}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              maxWidth: 'none',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Vertical Divider Line & Drag Handle */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: '2.5px',
            backgroundColor: '#FFFFFF',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            zIndex: 3
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '2px solid #FFFFFF',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px'
            }}
          >
            ◂▸
          </div>
        </div>

        {/* Floating Sensor Badges on Top (Guaranteed Non-Overlapping & Mobile-Responsive) */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          maxWidth: '46%',
          background: 'rgba(5, 13, 26, 0.88)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: '#FFFFFF',
          fontSize: 'clamp(0.64rem, 1.8vw, 0.74rem)',
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: '10px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          zIndex: 4
        }} title={beforeLabel}>
          {beforeLabel}
        </div>
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          maxWidth: '46%',
          background: 'rgba(5, 13, 26, 0.88)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0, 181, 226, 0.5)',
          color: '#00B5E2',
          fontSize: 'clamp(0.64rem, 1.8vw, 0.74rem)',
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: '10px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          zIndex: 4
        }} title={afterLabel}>
          {afterLabel}
        </div>
      </div>

      {/* Image Caption Footer */}
      <div style={{
        padding: '10px 16px',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid rgba(27, 54, 73, 0.08)',
        textAlign: 'center'
      }}>
        <p style={{
          margin: 0,
          fontSize: '0.8rem',
          color: 'var(--text-muted-gray)',
          lineHeight: 1.45,
          fontStyle: 'italic'
        }}>
          {caption}
        </p>
      </div>

      {/* Content Info Box */}
      <div style={{ padding: 'clamp(20px, 4vw, 28px) clamp(16px, 4vw, 30px)', flex: 1, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <h3 style={{
          fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)',
          fontWeight: 700,
          color: 'var(--color-aqua, #00B5E2)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginBottom: '12px'
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
          lineHeight: 1.65,
          color: 'var(--text-muted-gray)',
          margin: 0
        }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default function DualComparisonSlider({ setActiveTab }) {
  return (
    <section className="section-light" style={{
      padding: 'clamp(50px, 7vw, 90px) clamp(16px, 4vw, 24px) clamp(60px, 8vw, 100px)',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
      borderTop: '1px solid rgba(27, 54, 73, 0.08)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top Header Title */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 3.2rem)',
            color: 'var(--text-heading-dark)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1.2
          }}>
            Transforming Multi-Sensor Data into <span style={{ color: 'var(--color-orange)' }}>Actionable Information</span>
          </h2>
        </div>

        {/* 2-Column Split Slider Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(20px, 4vw, 32px)'
        }}>
          {/* Card 1: Tasking as a Service – Data */}
          <ComparisonCard
            beforeImg="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=80"
            afterImg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
            beforeLabel="Aerial Drone & Optical Survey"
            afterLabel="Sub-Centimeter 3D LiDAR Model"
            caption="Airborne remote sensing: High-resolution drone capture (left) vs 3D LiDAR & digital elevation model (right)"
            title="TASKING AS A SERVICE – DATA"
            description="Direct access to drone & satellite tasking, allowing users to schedule any sensor to capture data in near real-time with sub-centimeter accuracy across complex terrains."
            initialPos={48}
          />

          {/* Card 2: Information as a Service – Feeds */}
          <ComparisonCard
            beforeImg="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
            afterImg="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80"
            beforeLabel="Raw Spatial Data Stream"
            afterLabel="MapZest AI Insights & Feeds"
            caption="Raw geospatial data (left) vs MapZest automated detection, NDVI indices & risk analytics feed (right)"
            title="INFORMATION AS A SERVICE – FEEDS"
            description="Transform raw multi-sensor geospatial data into actionable information instantly with MapZest WebGIS enterprise infrastructure to stream, process, and extract automated insights."
            initialPos={52}
          />
        </div>

        {/* Bottom CTA Button */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(32px, 5vw, 48px)' }}>
          <button
            onClick={() => {
              if (setActiveTab) setActiveTab('solutions')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 32px',
              borderRadius: '28px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(27, 54, 73, 0.15)',
              color: 'var(--text-heading-dark)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(27, 54, 73, 0.06)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-orange)'
              e.currentTarget.style.color = 'var(--color-orange)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.15)'
              e.currentTarget.style.color = 'var(--text-heading-dark)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Explore Solutions <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
