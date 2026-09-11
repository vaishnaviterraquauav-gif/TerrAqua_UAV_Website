import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

import pointCloudRawImg from '../../assets/pointcloudraw.png'
import pointCloudAfterImg from '../../assets/pointcloudafter.png'
import beforeVegImg from '../../assets/beforeveg2.png'
import afterVegImg from '../../assets/imggafterveg2.png'

function ComparisonCard({ beforeImg, afterImg, beforeLabel, afterLabel, caption, title, description, initialPos = 50, imagePosition = 'center' }) {
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

  const handleMouseDown = (e) => {
    setIsDragging(true)
    handleMove(e.clientX)
  }
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(250px, 42vw, 330px)',
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
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imagePosition,
            pointerEvents: 'none'
          }}
        />

        {/* Left Image (Before / Raw - Perfectly clipped with clipPath for 100% pixel alignment) */}
        <img
          src={beforeImg}
          alt={beforeLabel}
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imagePosition,
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            pointerEvents: 'none'
          }}
        />

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
            beforeImg={pointCloudRawImg}
            afterImg={pointCloudAfterImg}
            beforeLabel="3D RGB Point Cloud"
            afterLabel="3D LiDAR Elevation (DSM)"
            caption="3D Geospatial Capture: True-color dense point cloud (left) vs height-classified LiDAR elevation model / DSM (right)"
            title="TASKING AS A SERVICE – DATA"
            description="Direct access to drone & LiDAR sensor tasking to capture high-density 3D point clouds, digital surface models (DSM), and elevation analytics in near real-time with sub-centimeter spatial accuracy across complex terrains."
            initialPos={50}
            imagePosition="center"
          />

          {/* Card 2: Information as a Service – Feeds */}
          <ComparisonCard
            beforeImg={beforeVegImg}
            afterImg={afterVegImg}
            beforeLabel="Raw Optical (RGB)"
            afterLabel="Multispectral NDVI"
            caption="True-color raw spatial stream (left) vs MapZest multispectral NDVI crop health & vegetation stress analytics (right)"
            title="INFORMATION AS A SERVICE – FEEDS"
            description="Transform raw multi-spectral and optical drone/satellite data into real-time crop vigor indices (NDVI), canopy stress detection, and actionable agricultural intelligence through MapZest WebGIS platform."
            initialPos={52}
            imagePosition="center 18%"
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
