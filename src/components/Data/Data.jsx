import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, ArrowRight, Layers, Database, BarChart3, ShieldCheck, CheckCircle2, Plane, Satellite, Wifi, Cpu } from 'lucide-react'

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

  const dataStreams = [
    {
      id: 'drone-uav',
      badge: "AERIAL UAV SURVEYS",
      title: "Drone & UAV Data Acquisition",
      subtitle: "Centimeter-Precision Airborne Remote Sensing",
      desc: "Deploy state-of-the-art multi-rotor and fixed-wing UAVs equipped with survey-grade LiDAR, 45MP photogrammetric sensors, and multispectral payloads. We capture centimeter-accurate elevation models, dense 3D point clouds, and high-resolution orthomosaics across complex agricultural, urban, and industrial terrains.",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Sub-Centimeter Ground Sampling Distance (GSD)",
        "Penetrative LiDAR Scanning for Dense Canopies & Elevation",
        "Calibrated Multispectral & Thermal Health Analytics",
        "Autonomous Flight Tasking & Fast Turnaround Times"
      ],
      stats: [
        { label: "Spatial Resolution", value: "Sub-Centimeter" },
        { label: "Sensor Modalities", value: "LiDAR / RGB / MS / Thermal" },
        { label: "Daily Flight Capacity", value: "2,500+ Hectares" }
      ]
    },
    {
      id: 'satellite-sensing',
      badge: "PLANETARY EARTH OBSERVATION",
      title: "Satellite Remote Sensing Feeds",
      subtitle: "Constellation-Scale Multi-Temporal Monitoring",
      desc: "Harness global optical, Synthetic Aperture Radar (SAR), and hyperspectral satellite constellations to deliver macro-level environmental monitoring, multi-temporal change detection, and all-weather emergency response mapping across regional and national geographic scales.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      features: [
        "All-Weather Day/Night SAR Radar Flood & Water Inundation",
        "High-Cadence Optical Constellations (0.3m – 10m Resolution)",
        "Multi-Decadal Historical Archives for Climate Trend Analysis",
        "Continental-Scale Land Cover & Agronomic Vigor Rasters"
      ],
      stats: [
        { label: "Revisit Cadence", value: "Near Daily" },
        { label: "Coverage Scale", value: "Regional to Global" },
        { label: "All-Weather SAR", value: "Day / Night Radar" }
      ]
    },
    {
      id: 'iot-sensors',
      badge: "CONNECTED GROUND TELEMETRY",
      title: "IoT & Ground-Truth Sensor Networks",
      subtitle: "Edge-to-Cloud Real-Time In-Situ Telemetry",
      desc: "Integrate real-time IoT ground sensors, automated weather stations, soil moisture probes, and hydrological stream gauges directly into our MapZest WebGIS platform. Ground telemetry continuously calibrates aerial and satellite observations for indisputable real-world environmental intelligence.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Live Soil Moisture, Temperature & Electrical Conductivity Probes",
        "Automated Ultrasonic Water Level & River Discharge Telemetry",
        "Microclimate Meteorological Stations & Air Quality Monitors",
        "Edge-to-Cloud Live Synchronization with MapZest WebGIS"
      ],
      stats: [
        { label: "Telemetry Latency", value: "< 5 Seconds" },
        { label: "Sensor Support", value: "Multi-Probe IoT" },
        { label: "Integration", value: "WebGIS Connected" }
      ]
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
            Data Acquisition & <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Geospatial Applications</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            maxWidth: '680px',
            margin: '0 auto 36px',
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}>
            UAV, satellite, and IoT data integrated for advanced geospatial analysis, monitoring, and real-world applications.
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

      {/* 3 CORE DATA STREAMS: DRONE, SATELLITE, IOT */}
      <section style={{
        padding: 'clamp(50px, 7vw, 90px) 0 clamp(40px, 6vw, 70px) 0',
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(27, 54, 73, 0.08)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)', textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 54px)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: 'rgba(0, 181, 226, 0.08)',
            border: '1px solid rgba(0, 181, 226, 0.25)',
            color: '#00B5E2',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '16px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-universal)'
          }}>
            <Sparkles size={14} /> Multi-Source Data Ecosystem
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: 'var(--text-heading-dark)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1.2,
            marginBottom: '16px',
            fontFamily: 'var(--font-universal)'
          }}>
            Drone, Satellite & <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>IoT Data Streams</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.12rem)',
            color: 'var(--text-muted-gray)',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'var(--font-universal)'
          }}>
            Seamlessly integrating airborne UAV precision, constellation satellite observations, and real-time ground IoT sensors for unified spatial insights.
          </p>
        </div>

        <style>{`
          .data-stream-card {
            display: flex;
            flex-direction: row;
            min-height: 400px;
            align-items: stretch;
            background: #FFFFFF;
            border-radius: 24px;
            border: 1px solid rgba(27, 54, 73, 0.12);
            box-shadow: 0 16px 40px -12px rgba(27, 54, 73, 0.08);
            overflow: hidden;
            margin-bottom: 36px;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          }

          .data-stream-card.reverse {
            flex-direction: row-reverse;
          }

          .data-stream-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 48px -12px rgba(27, 54, 73, 0.14);
            border-color: rgba(0, 181, 226, 0.35);
          }

          .data-stream-img-box {
            flex: 1 1 46%;
            width: 46%;
            min-width: 280px;
            height: 100%;
            position: relative;
            overflow: hidden;
            background-color: #0A1D3D;
          }

          .data-stream-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .data-stream-card:hover .data-stream-img {
            transform: scale(1.05);
          }

          .data-stream-text-box {
            flex: 1 1 54%;
            width: 54%;
            min-width: 280px;
            height: 100%;
            padding: clamp(28px, 4vw, 44px);
            display: flex;
            flex-direction: column;
            justifyContent: center;
            background: #FFFFFF;
            font-family: var(--font-universal);
            box-sizing: border-box;
          }

          @media (max-width: 868px) {
            .data-stream-card,
            .data-stream-card.reverse {
              flex-direction: column !important;
              min-height: 0 !important;
            }

            .data-stream-img-box {
              width: 100% !important;
              min-width: 0 !important;
              flex: none !important;
              min-height: 240px !important;
              height: 240px !important;
            }

            .data-stream-text-box {
              width: 100% !important;
              min-width: 0 !important;
              flex: none !important;
              padding: 24px 18px !important;
            }
          }
        `}</style>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)' }}>
          {dataStreams.map((stream, sIdx) => {
            const isReverse = sIdx % 2 === 1;

            return (
              <div key={stream.id} className={`data-stream-card ${isReverse ? 'reverse' : ''}`}>
                {/* IMAGE BOX */}
                <div className="data-stream-img-box">
                  <img src={stream.img} alt={stream.title} className="data-stream-img" loading="lazy" />
                </div>

                {/* TEXT CONTENT */}
                <div className="data-stream-text-box">
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 122, 41, 0.1)',
                    border: '1px solid rgba(255, 122, 41, 0.25)',
                    color: 'var(--color-orange, #FF6A00)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    marginBottom: '12px',
                    width: 'fit-content',
                    letterSpacing: '0.05em'
                  }}>
                    {stream.badge}
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 500,
                    color: '#0A1D3D',
                    margin: '0 0 8px 0',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    fontFamily: 'var(--font-universal)'
                  }}>
                    {stream.title}
                  </h3>

                  <p style={{
                    color: '#00B5E2',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    margin: '0 0 14px 0',
                    fontFamily: 'var(--font-universal)'
                  }}>
                    {stream.subtitle}
                  </p>

                  <p style={{
                    color: '#475569',
                    fontSize: 'clamp(0.92rem, 1.8vw, 0.98rem)',
                    lineHeight: 1.65,
                    margin: '0 0 20px 0',
                    fontWeight: 400,
                    fontFamily: 'var(--font-universal)'
                  }}>
                    {stream.desc}
                  </p>

                  {/* FEATURE BULLETS */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {stream.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* STATS ROW */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                    gap: '12px',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(27, 54, 73, 0.08)',
                    marginTop: 'auto'
                  }}>
                    {stream.stats.map((st, stIdx) => (
                      <div key={stIdx} style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>{st.label}</span>
                        <span style={{ fontSize: '0.88rem', color: '#0A1D3D', fontWeight: 700, marginTop: '2px' }}>{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
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
