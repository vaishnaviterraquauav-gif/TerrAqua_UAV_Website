import React, { useState, useRef, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'

import pointCloudRawImg from '../../assets/pointcloudraw.png'
import pointCloudAfterImg from '../../assets/pointcloudafter.png'
import demTerrainBefore from '../../assets/dem_terrain_before.jpg'
import dsmElevationAfter from '../../assets/dsm_elevation_after.jpg'

function ComparisonCard({
  beforeImg,
  afterImg,
  beforeLabel,
  afterLabel,
  caption,
  initialPos = 50,
  imagePosition = 'center',
  imageScale = 1,
  imageTransformOrigin = 'center'
}) {
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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            transform: imageScale !== 1 ? `scale(${imageScale})` : undefined,
            transformOrigin: imageTransformOrigin,
            pointerEvents: 'none'
          }}
        >
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
        </div>

        {/* Left Image Container (Before / Raw - Clipped at container level for 100% exact divider alignment) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
            pointerEvents: 'none',
            zIndex: 2
          }}
        >
          {/* Inner div with identical zoom/scale transform */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              transform: imageScale !== 1 ? `scale(${imageScale})` : undefined,
              transformOrigin: imageTransformOrigin,
              pointerEvents: 'none'
            }}
          >
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
                pointerEvents: 'none'
              }}
            />
          </div>
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
      </div>

      {/* Image Caption Footer */}
      <div style={{
        padding: '12px 16px',
        backgroundColor: '#F8FAFC',
        textAlign: 'center'
      }}>
        <p style={{
          margin: 0,
          fontSize: '0.82rem',
          color: 'var(--text-muted-gray)',
          lineHeight: 1.45,
          fontStyle: 'italic'
        }}>
          {caption}
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
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        {/* Top Header Title */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 3.2rem)',
            color: 'var(--text-heading-dark)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1.2
          }}>
            Turning Multi-Sensor Data into <span style={{ color: 'var(--color-orange)' }}>Insights for Real-World Applications</span>
          </h2>
        </div>

        {/* 2-Column Split Slider Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(20px, 4vw, 32px)',
          width: '100%'
        }}>
          {/* Card 1: Multi-Sensor Data Acquisition */}
          <ComparisonCard
            beforeImg={pointCloudRawImg}
            afterImg={pointCloudAfterImg}
            beforeLabel="3D RGB Point Cloud"
            afterLabel="3D LiDAR Elevation (DSM)"
            caption="3D Geospatial Capture: True-color dense point cloud (left) vs height-classified LiDAR elevation model / DSM (right)"
            initialPos={50}
            imagePosition="center 72%"
            imageScale={1.38}
            imageTransformOrigin="32% 72%"
          />

          {/* Card 2: Elevation & Canopy Surface Modeling */}
          <ComparisonCard
            beforeImg={demTerrainBefore}
            afterImg={dsmElevationAfter}
            beforeLabel="Digital Terrain Model (DEM)"
            afterLabel="Canopy Height & Surface (DSM)"
            caption="Elevation & Surface Modeling: Bare-earth Digital Elevation Model (DEM) (left) vs High-density LiDAR Surface Model (DSM) with georeferenced coordinates (right)"
            initialPos={50}
            imagePosition="center"
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
