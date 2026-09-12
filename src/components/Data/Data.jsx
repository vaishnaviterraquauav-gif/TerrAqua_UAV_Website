import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, ArrowRight, Layers, Database, BarChart3, ShieldCheck } from 'lucide-react'

import data1Img from '../../assets/data1.png'
import dataafterImg from '../../assets/dataafter.png'
import flood1Img from '../../assets/flood1.png'
import floodafterImg from '../../assets/afterflood.png'
import soil1Img from '../../assets/soil1.png'
import soilafterImg from '../../assets/soilafter.png'
import cirBeforeImg from '../../assets/cir_before.jpg'
import cirAfterImg from '../../assets/cir_after.jpg'

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
          height: 'clamp(260px, 35vw, 340px)',
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

        {/* Left Image (Before / Raw - Perfectly clipped with clipPath) */}
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

export default function Data({ setActiveTab }) {
  const comparisonData = [
    {
      id: 1,
      beforeImg: data1Img,
      afterImg: dataafterImg,
      beforeLabel: "Aerial Drone Orthomosaic (RGB)",
      afterLabel: "Digital Surface Model (DEM / DSM)",
      caption: "High-Resolution Remote Sensing: Centimeter-accurate aerial RGB orthomosaic (left) vs calibrated Digital Surface Model with 63.7m – 101m elevation scale gradient (right)",
      title: "AERIAL ORTHOMOSAIC & DIGITAL ELEVATION MODEL (DEM)",
      description: "Centimeter-accurate aerial drone survey transformed into high-density Digital Elevation & Surface Models (DEM/DSM). Accurately calculates building heights (up to 101m), terrain gradients, and tree canopy topographies for urban planning and structural inspections.",
      initialPos: 48
    },
    {
      id: 2,
      beforeImg: soil1Img,
      afterImg: soilafterImg,
      beforeLabel: "True-Color Optical (RGB)",
      afterLabel: "Soil Moisture & Agronomic Index",
      caption: "Precision Agritech & Soil Analytics: Natural optical parcel imagery (left) vs satellite-derived soil moisture and agronomic vigor zoning (right)",
      title: "SOIL MOISTURE & CROP VIGOR FEEDS",
      description: "High-resolution optical & multispectral feeds processed into calibrated soil moisture indices, organic zoning, and canopy vigor analytics for precision irrigation, variable fertilization, and yield optimization.",
      initialPos: 52
    },
    {
      id: 3,
      beforeImg: flood1Img,
      afterImg: floodafterImg,
      beforeLabel: "Pre-Event Hydro Baseline (SAR)",
      afterLabel: "Flood Inundation & Moisture Spread",
      caption: "Disaster Response & Hydro Analytics: Pre-event radar river network baseline (left) vs multi-temporal flood inundation and surface water spread (right)",
      title: "DISASTER ASSESSMENT & FLOOD INUNDATION MAPPING",
      description: "Near real-time satellite radar and multi-sensor change detection to delineate river floodplains, calculate inundated acreage, and pinpoint impacted infrastructure for rapid emergency response.",
      initialPos: 48,
      imagePosition: "center"
    },
    {
      id: 4,
      beforeImg: cirBeforeImg,
      afterImg: cirAfterImg,
      beforeLabel: "True-Color Optical (RGB)",
      afterLabel: "Color-Infrared (CIR / NIR)",
      caption: "Multispectral Remote Sensing: High-resolution true-color RGB optical capture (left) vs Color-Infrared (CIR) false-color composite isolating vegetative canopy vigor and urban density (right)",
      title: "COLOR-INFRARED (CIR) & VEGETATION CANOPY FEEDS",
      description: "Multi-band satellite and aerial Near-Infrared (NIR) band synthesis to distinguish live vegetative biomass, crop canopy health, and urban impervious surfaces with high spectral discrimination.",
      initialPos: 50,
      imagePosition: "center"
    }
  ]

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* HERO SECTION (NAVY BLUE) */}
      <section style={{
        position: 'relative',
        padding: '90px 24px 80px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
        borderBottom: '1px solid rgba(0, 181, 226, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.04em',
            marginBottom: '20px'
          }}>
            Spatial Data <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Ecosystem</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            maxWidth: '680px',
            margin: '0 auto 36px',
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}>
            High-density aerial surveys, multispectral indices, and point cloud archives curated with centimeter-level precision.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              style={{
                padding: '14px 34px',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#FFFFFF',
                background: 'linear-gradient(135deg, var(--color-orange) 0%, #E65000 100%)',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 10px 25px -5px rgba(255, 106, 0, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(255, 106, 0, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 106, 0, 0.4)'
              }}
            >
              Request Custom Dataset <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPARISON SLIDERS SECTION (OFF-WHITE / WHITE) */}
      <section style={{
        padding: 'clamp(50px, 7vw, 90px) clamp(16px, 4vw, 24px) clamp(60px, 8vw, 100px)',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF4F8 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 54px)' }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              color: 'var(--text-heading-dark)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              marginBottom: '14px'
            }}>
              Multi-Layered <span style={{ color: 'var(--color-orange)' }}>Spatial Analytics</span> in Action
            </h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.08rem)',
              color: 'var(--text-muted-gray)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.65
            }}>
              Drag the interactive comparison sliders to explore raw spatial capture versus AI-processed thematic GIS feeds.
            </p>
          </div>

          {/* 4 Interactive Comparison Sliders Grid (2x2) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
            gap: 'clamp(24px, 4vw, 36px)'
          }}>
            {comparisonData.map((item) => (
              <ComparisonCard
                key={item.id}
                beforeImg={item.beforeImg}
                afterImg={item.afterImg}
                beforeLabel={item.beforeLabel}
                afterLabel={item.afterLabel}
                caption={item.caption}
                title={item.title}
                description={item.description}
                initialPos={item.initialPos}
                imagePosition={item.imagePosition || 'center'}
              />
            ))}
          </div>

          {/* Bottom CTA Box */}
          <div style={{
            textAlign: 'center',
            marginTop: 'clamp(48px, 6vw, 72px)',
            padding: '36px 24px',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(27, 54, 73, 0.1)',
            boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.06)',
            maxWidth: '850px',
            margin: 'clamp(48px, 6vw, 72px) auto 0 auto'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)',
              fontWeight: 700,
              color: 'var(--text-heading-dark)',
              marginBottom: '10px'
            }}>
              Need Custom Sensor Flight Feeds or GIS Layers?
            </h3>
            <p style={{
              color: 'var(--text-muted-gray)',
              fontSize: '0.98rem',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto 24px auto'
            }}>
              Schedule tasking for drone photogrammetry, thermal inspection, or multispectral missions tailored to your specific project area.
            </p>
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '13px 32px',
                borderRadius: '28px',
                backgroundColor: 'var(--color-orange, #FF6A00)',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(255, 106, 0, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E65000'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(255, 106, 0, 0.45)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-orange, #FF6A00)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 106, 0, 0.35)'
              }}
            >
              Contact Data Specialists <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
