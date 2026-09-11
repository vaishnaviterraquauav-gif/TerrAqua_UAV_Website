import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ChevronDown, ExternalLink, Radio, Satellite, Cpu, Database, Brain, Layers, Activity, Plane, BarChart3, CheckCircle2 } from 'lucide-react'
import mapzestImg from '../../assets/mapzest-preview.png'
import home2Img from '../../assets/home2.png'
import DualComparisonSlider from './DualComparisonSlider'
import DataToDecisions from './DataToDecisions'

function BranchingConnectingLine() {
  const [mouse, setMouse] = useState({ x: -100, y: -100, active: false });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      setMouse({
        x: ((e.clientX - rect.left) / rect.width) * 1000,
        y: ((e.clientY - rect.top) / rect.height) * 44,
        active: true
      });
    }
  };

  // Horizontal curly brace divider connecting "What We Do" to "Data" (left) and "Geospatial Intelligence" (right)
  const bracketPath = "M 24,42 C 24,20 44,12 90,12 L 440,12 C 475,12 490,4 500,0 C 510,4 525,12 560,12 L 910,12 C 956,12 976,20 976,42";

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse((prev) => ({ ...prev, active: false }))}
      style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto 16px auto',
        position: 'relative',
        height: '44px',
        cursor: 'crosshair',
        userSelect: 'none'
      }}
    >
      <svg
        viewBox="0 0 1000 44"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          overflow: 'visible'
        }}
      >
        <defs>
          {/* Subtle cursor highlight suited for light background */}
          <radialGradient
            id="bracket-cursor-glow"
            cx={`${(mouse.x / 1000) * 100}%`}
            cy={`${(mouse.y / 44) * 100}%`}
            r="12%"
          >
            <stop offset="0%" stopColor="#0A1D3D" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#0A1D3D" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#0A1D3D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0A1D3D" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base curly bracket line */}
        <path
          d={bracketPath}
          fill="none"
          stroke="rgba(10, 29, 61, 0.12)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Elegant, subtle cursor tracking highlight */}
        {mouse.active && (
          <path
            d={bracketPath}
            fill="none"
            stroke="url(#bracket-cursor-glow)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}

function InteractiveGlowLine({ height = 12, thickness = 1.5 }) {
  const [glow, setGlow] = useState({ x: -300, active: false });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlow({
          x: e.clientX - rect.left,
          active: true
        });
      }}
      onMouseLeave={() => setGlow((prev) => ({ ...prev, active: false }))}
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        cursor: 'crosshair',
        userSelect: 'none'
      }}
    >
      {/* Base Hairline */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(10, 29, 61, 0.08)',
        }}
      />
      {/* Decent, subtle cursor tracking highlight suited for light theme */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: `${thickness}px`,
          background: `radial-gradient(120px circle at ${glow.x}px 50%, rgba(10, 29, 61, 0.35) 0%, rgba(10, 29, 61, 0.1) 50%, transparent 100%)`,
          opacity: glow.active ? 1 : 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}

function OrbitSatelliteGraphic({ size = 52 }) {
  return (
    <img
      src="/real-satellite.png"
      alt="Satellite"
      style={{
        width: `${size}px`,
        height: 'auto',
        objectFit: 'contain',
        display: 'block'
      }}
    />
  );
}

function OrbitDroneGraphic({ size = 56 }) {
  return (
    <img
      src="/real-drone.png"
      alt="Drone"
      style={{
        width: `${size}px`,
        height: 'auto',
        objectFit: 'contain',
        display: 'block'
      }}
    />
  );
}

export default function Home({ setActiveTab }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openDataIndex, setOpenDataIndex] = useState(null)
  const [openGeoIndex, setOpenGeoIndex] = useState(null)

  const dataScrollRef = useRef(null)
  const geoScrollRef = useRef(null)

  const scrollData = (direction) => {
    if (dataScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      dataScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollGeo = (direction) => {
    if (geoScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      geoScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const heroSlides = [
    {
      id: 0,
      title: "Situational-Awareness as a Service Platform",
      subtitle: "Transforming multi-sensor aerial drone, LiDAR & satellite data into near real-time actionable intelligence.",
      buttonText: "Request a Demo",
      buttonLink: "https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20request%20a%20demo%20for%20Situational-Awareness%20Services.",
      isExternal: true,
      circleImg: "https://miro.medium.com/v2/resize:fit:1400/1*XUqLxVP8tUxD1Nzra8Oi-Q.png"
    },
    {
      id: 1,
      title: "A Unified Platform for Drone & Satellite-Based Mapping",
      subtitle: "Advanced airborne remote sensing & sub-centimeter LiDAR analytics for defense, disaster, and enterprise operations.",
      buttonText: "Request a Demo",
      buttonLink: "https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20request%20a%20demo%20for%20Situational-Awareness%20Platform.",
      isExternal: true,
      circleImg: home2Img
    },
    {
      id: 2,
      title: "Expertise and innovation in geospatial technologies",
      subtitle: "MapZest WebGIS enterprise infrastructure to stream, process, and extract automated insights from terabytes of spatial data.",
      buttonText: "Request a Demo",
      buttonLink: "https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20request%20a%20demo%20for%20MapZest%20WebGIS.",
      isExternal: true,
      circleImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUza4VUTa2eFWe1LEZ3kCXVxECXtMhNWM5r3OIYk6Qwvowob2NHw67l9M&s=10"
    },
    {
      id: 3,
      title: "Making Spatial Data Usable, Accessible and Affordable",
      subtitle: "Incubated at SIIC, IIT Kanpur — delivering AI-powered climate intelligence, thermal modeling & precision agritech.",
      buttonText: "Request a Demo",
      buttonLink: "https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20request%20a%20demo%20for%20Spatial%20Data%20Services.",
      isExternal: true,
      circleImg: "https://gisnavigator.co.uk/wp-content/uploads/2024/12/Service-Spatial-Data-Analysis.webp"
    }
  ]

  // Auto-rotate slides every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const metrics = [
    { value: '30,000+', label: 'Hectares Mapped', sub: 'High Precision Aerial LiDAR' },
    { value: '6', label: 'Sensor Capabilities', sub: 'Sub-Centimeter Resolution' },
    { value: 'IITK', label: 'Incubated Tech', sub: 'SIIC Innovation Ecosystem' },
    { value: '5+', label: 'Industry Sectors', sub: 'Pan-India Deployment' },
  ]

  const whatWeDo = {
    data: {
      title: "Data",
      items: [
        {
          title: "Drone",
          color: "#00B5E2",
          bullets: [
            "High-resolution multispectral and RGB imaging for crop health assessment.",
            "Automated precision spraying and liquid application systems."
          ]
        },
        {
          title: "Satellite",
          color: "#10B981",
          bullets: [
            "Global Earth observation data for large-scale vegetation tracking.",
            "Historical yield analytics and AI-powered predictive modeling."
          ]
        },
        {
          title: "IoT",
          color: "#F97316",
          bullets: [
            "Real-time soil moisture and nutrient level monitoring sensors.",
            "Smart irrigation control with weather-integrated data syncing."
          ]
        }
      ]
    },
    intelligence: {
      title: "Geospatial Intelligence",
      items: [
        {
          title: "AI & Predictive Modeling",
          color: "#8B5CF6",
          bullets: [
            "Historical yield analytics and AI-powered predictive modeling.",
            "Automated biomass estimation and vegetation carbon quantification."
          ]
        },
        {
          title: "GIS & Terrain Simulation",
          color: "#00B5E2",
          bullets: [
            "Sub-centimetre 3D LiDAR elevation modeling and watershed flood dynamics.",
            "Automated land use and terrain cover classification."
          ]
        },
        {
          title: "Actionable Decision Systems",
          color: "#10B981",
          bullets: [
            "Actionable field intelligence and conservation reports.",
            "Integration with MapZest WebGIS platform for real-time spatial analytics."
          ]
        }
      ]
    }
  }

  const slide = heroSlides[currentSlide]

  return (
    <div>
      {/* ========================================================================= */}
      {/* EARTHEYE-STYLE HERO: ULTRA-CRISP DEEP SPACE BACKGROUND + SLIDER & ORB     */}
      {/* ========================================================================= */}
      <section style={{
        minHeight: 'calc(85vh - 75px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(40px, 6vw, 70px) clamp(16px, 4vw, 32px)',
        position: 'relative',
        background: 'radial-gradient(ellipse at 80% 50%, #0c1a30 0%, #050d1a 45%, #02060d 100%)',
        overflow: 'hidden'
      }}>
        {/* CSS Multi-layer Starfield for 4K Crystal-Clear Clarity */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 20px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 40px 70px, #00B5E2, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 120px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 230px 190px, #00B5E2, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 300px 80px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 370px 240px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 450px 150px, #00B5E2, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 520px 60px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 600px 200px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 680px 110px, #00B5E2, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 750px 270px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 830px 180px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 900px 90px, #00B5E2, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 970px 220px, #ffffff, rgba(0,0,0,0))
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 300px',
          opacity: 0.65,
          pointerEvents: 'none'
        }} />

        <style>{`
          @keyframes spinOrbitalTrack {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spinOrbitalCounter {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .eartheye-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0;
            outline: none;
          }
          @keyframes spinOrbital3D {
            0% { transform: rotateX(70deg) rotateZ(0deg); }
            100% { transform: rotateX(70deg) rotateZ(360deg); }
          }
          @keyframes counterSpinOrbital3D {
            0% { transform: rotateZ(0deg) rotateX(-70deg); }
            100% { transform: rotateZ(-360deg) rotateX(-70deg); }
          }

          .orbit-trail-ccw {
            position: absolute;
            inset: -20px;
            border-radius: 50%;
            pointer-events: none;
          }
          .orbit-trail-ccw::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: conic-gradient(from 90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.45) 30%, rgba(255, 255, 255, 0.08) 60%, transparent 80%);
            -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2.5px));
            mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2.5px));
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.85));
          }

          .orbit-trail-cw {
            position: absolute;
            inset: -75px;
            border-radius: 50%;
            pointer-events: none;
          }
          .orbit-trail-cw::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: conic-gradient(from 270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.45) 30%, rgba(255, 255, 255, 0.08) 60%, transparent 80%);
            -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2.5px));
            mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2.5px));
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.85));
          }

          .orbit-trail-3d {
            position: absolute;
            inset: -45px;
            border-radius: 50%;
            pointer-events: none;
            transform-style: preserve-3d;
          }
          .orbit-trail-3d::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: conic-gradient(from 0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.45) 30%, rgba(255, 255, 255, 0.08) 60%, transparent 80%);
            -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2.5px));
            mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #fff calc(100% - 2.5px));
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.85));
          }
        `}</style>

        <div style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          alignItems: 'center',
          gap: 'clamp(32px, 5vw, 56px)',
          position: 'relative',
          zIndex: 2
        }}>
          {/* ==================================================== */}
          {/* LEFT COLUMN: EARTHEYE SLIDER TEXT & CALL TO ACTION   */}
          {/* ==================================================== */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Stable Title Container */}
            <div style={{ minHeight: '80px', display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
              <h1
                key={`title-${currentSlide}`}
                style={{
                  fontSize: 'clamp(1.65rem, 3.5vw, 2.35rem)',
                  lineHeight: 1.24,
                  fontWeight: 400,
                  letterSpacing: '-0.04em',
                  color: '#FFFFFF',
                  margin: 0,
                  animation: 'fadeIn 0.4s ease'
                }}
              >
                {slide.title}
              </h1>
            </div>

            {/* 4 Pagination Dots (Fixed Position) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              {heroSlides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="eartheye-dot"
                  style={{
                    width: currentSlide === idx ? '26px' : '10px',
                    height: '10px',
                    borderRadius: '10px',
                    background: currentSlide === idx ? '#FFFFFF' : 'transparent',
                    border: currentSlide === idx ? '1px solid #FFFFFF' : '1.5px solid rgba(255, 255, 255, 0.4)',
                    boxShadow: currentSlide === idx ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none'
                  }}
                  title={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* 4 HERO METRICS CARDS (FIXED POSITION WITHOUT SHADOW) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '24px',
                maxWidth: '520px'
              }}
            >
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 18px',
                    textAlign: 'left',
                    background: 'rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    minHeight: '70px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'border-color 0.25s ease, background 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)',
                      fontWeight: 700,
                      color: 'var(--color-orange, #FF6A00)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.15
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      color: '#E2E8F0',
                      fontSize: 'clamp(0.78rem, 1.8vw, 0.84rem)',
                      marginTop: '4px',
                      fontWeight: 500,
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Button (BELOW METRIC CARDS) */}
            <div>
              {slide.isExternal ? (
                <a
                  href={slide.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    padding: '13px clamp(28px, 5vw, 38px)',
                    fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    color: '#FFFFFF',
                    backgroundColor: 'var(--color-orange, #FF6A00)',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(255, 106, 0, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.backgroundColor = '#E65000'
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 106, 0, 0.55)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.backgroundColor = 'var(--color-orange, #FF6A00)'
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(255, 106, 0, 0.35)'
                  }}
                >
                  {slide.buttonText}
                </a>
              ) : (
                <button
                  onClick={() => setActiveTab(slide.buttonTab)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '13px clamp(28px, 5vw, 38px)',
                    fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    color: '#FFFFFF',
                    backgroundColor: 'var(--color-orange, #FF6A00)',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(255, 106, 0, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.backgroundColor = '#E65000'
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 106, 0, 0.55)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.backgroundColor = 'var(--color-orange, #FF6A00)'
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(255, 106, 0, 0.35)'
                  }}
                >
                  {slide.buttonText}
                </button>
              )}
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: 4 CHANGING IMAGERY IN ORBITAL CIRCLE   */}
          {/* ==================================================== */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'relative',
              width: 'min(380px, 80vw)',
              height: 'min(380px, 80vw)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}>
              {/* Inner Atmospheric Orbit Track: Drone (Counter-Clockwise) */}
              <div
                className="orbit-trail-ccw"
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  animation: 'spinOrbitalCounter 32s linear infinite',
                  pointerEvents: 'none'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '0px',
                    transform: 'translate(50%, -50%)'
                  }}
                  title="TerrAqua UAV Mapping Drone"
                >
                  <div style={{ animation: 'spinOrbitalTrack 32s linear infinite', display: 'flex' }}>
                    <OrbitDroneGraphic size={48} />
                  </div>
                </div>
              </div>

              {/* Outer Space Orbit Track: Satellite (Clockwise) */}
              <div
                className="orbit-trail-cw"
                style={{
                  position: 'absolute',
                  inset: '-75px',
                  borderRadius: '50%',
                  animation: 'spinOrbitalTrack 46s linear infinite',
                  pointerEvents: 'none'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0px',
                    transform: 'translate(-50%, -50%)'
                  }}
                  title="TerrAqua Earth Observation Satellite"
                >
                  <div style={{ animation: 'spinOrbitalCounter 46s linear infinite', display: 'flex' }}>
                    <OrbitSatelliteGraphic size={50} />
                  </div>
                </div>
              </div>

              {/* 3D Z-Axis Orbit Track */}
              <div
                className="orbit-trail-3d"
                style={{
                  position: 'absolute',
                  inset: '-45px',
                  borderRadius: '50%',
                  animation: 'spinOrbital3D 38s linear infinite',
                  pointerEvents: 'none',
                  transformStyle: 'preserve-3d',
                  zIndex: 3
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transformStyle: 'preserve-3d'
                  }}
                  title="TerrAqua Earth Observation Satellite 2"
                >
                  <div style={{ animation: 'counterSpinOrbital3D 38s linear infinite', transformStyle: 'preserve-3d', display: 'flex' }}>
                    <OrbitSatelliteGraphic size={48} />
                  </div>
                </div>
              </div>

              {/* Main Glowing Circular Frame with 4 Synchronized Images */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '3px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 0 40px rgba(42, 112, 241, 0.45), inset 0 0 30px rgba(0, 0, 0, 0.6)',
                  background: '#050D1A',
                  transform: 'translateZ(1px)'
                }}
              >
                <img
                  key={`hero-orb-${currentSlide}`}
                  src={slide.circleImg}
                  alt={slide.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    animation: 'fadeIn 0.6s ease',
                    transition: 'all 0.4s ease'
                  }}
                />

                {/* Spherical Specular Curved Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 55%), linear-gradient(180deg, transparent 40%, rgba(5, 13, 26, 0.5) 100%)',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TRUST BANNER (SLEEK & COMPACT) */}
      <section style={{
        padding: '20px 16px',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)',
        borderTop: '1px solid rgba(27, 54, 73, 0.08)',
        borderBottom: '1px solid rgba(27, 54, 73, 0.08)',
        overflow: 'hidden',
        position: 'relative'
      }}>

        {/* Marquee Styles & Header */}
        <style>{`
          @keyframes clientMarqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .clients-marquee-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          }

          .clients-marquee-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: clientMarqueeScroll 60s linear infinite;
            padding: 8px 0 14px 0;
          }

          .clients-marquee-wrapper:hover .clients-marquee-track {
            animation-play-state: paused;
          }

          .client-logo-card {
            background: #FFFFFF;
            border-radius: 16px;
            border: 1px solid rgba(27, 54, 73, 0.08);
            box-shadow: 0 4px 14px -2px rgba(27, 54, 73, 0.05);
            height: 84px;
            width: 195px;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
            cursor: pointer;
            overflow: hidden;
            outline: none !important;
            user-select: none;
          }

          .client-logo-card:focus,
          .client-logo-card:active,
          .client-logo-card:focus-visible {
            outline: none !important;
          }

          .client-logo-card:hover {
            transform: translateY(-4px) scale(1.03);
            border-color: rgba(255, 106, 0, 0.45);
            box-shadow: 0 12px 26px -2px rgba(27, 54, 73, 0.14);
          }
        `}</style>

        <div style={{ textAlign: 'center', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '0 8px' }}>
          <div style={{ height: '1px', background: 'rgba(27, 54, 73, 0.1)', flex: '0 1 clamp(20px, 8vw, 120px)' }}></div>
          <span style={{
            fontSize: 'clamp(0.68rem, 2vw, 0.78rem)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted-gray)',
            textAlign: 'center'
          }}>
            Trusted by Global Enterprise & Government Partners
          </span>
          <div style={{ height: '1px', background: 'rgba(27, 54, 73, 0.1)', flex: '0 1 clamp(20px, 8vw, 120px)' }}></div>
        </div>

        <div className="clients-marquee-wrapper">
          <div className="clients-marquee-track">
            {[
              { id: 'bharat-carbon', name: 'Bharat Carbon', img: '/partners/bharat-carbon.png' },
              { id: 'ntt-data', name: 'NTT DATA', img: '/partners/ntt-data.png' },
              { id: 'imperial-college', name: 'Imperial College London', img: '/partners/imperial-college.png' },
              { id: 'neer', name: 'NEER', img: '/partners/neer.png' },
              { id: 'citi', name: 'Citi', img: '/partners/citi.png' },
              { id: 'virginia-tech', name: 'Virginia Tech', img: '/partners/virginia-tech.png' },
              { id: 'hmda', name: 'HMDA', img: '/partners/hmda.png' },
              { id: 'lotus-wireless', name: 'Lotus Wireless', img: '/partners/lotus-wireless.png' },
              { id: 'jal-sansadhan', name: 'Jal Sansadhan Vibhag', img: '/partners/jal-sansadhan.png' },
              { id: 'dst-gov', name: 'Department of Science & Technology', img: '/partners/dst-gov.png' },
              { id: 'wwf', name: 'WWF', img: '/partners/wwf.png' },
              { id: 'ntpc', name: 'NTPC', img: '/partners/ntpc.png' },
              { id: 'iit-gandhinagar', name: 'IIT Gandhinagar', img: '/partners/iit-gandhinagar.png' },
              { id: 'bharat-petroleum', name: 'Bharat Petroleum', img: '/partners/bharat-petroleum.png' },
              { id: 'wii', name: 'Wildlife Institute of India', img: '/partners/wii.png' },
              { id: 'gcrs', name: 'Geo Climate Risk Solutions', img: '/partners/gcrs.png' },
              { id: 'cwrm', name: 'CWRM', img: '/partners/cwrm.png' },
              { id: 'bharat-oil-waste', name: 'Bharat Oil & Waste Management Ltd.', img: '/partners/bharat-oil-waste.png' },
              { id: 'enforcement-directorate', name: 'Enforcement Directorate', img: '/partners/enforcement-directorate.png' },
              { id: 'oiltech-engineering', name: 'Oiltech Engineering', img: '/partners/oiltech-engineering.png' },
              { id: 'namami-gange', name: 'Namami Gange', img: '/partners/namami-gange.png' },
              { id: 'uprvunl', name: 'UPRVUNL', img: '/partners/uprvunl.png' },
              { id: 'cropc', name: 'CROPC', img: '/partners/cropc.png' },
              { id: 'up-revenue-board', name: 'Board of Revenue Uttar Pradesh', img: '/partners/up-revenue-board.png' },
              { id: 're-sustainability', name: 'RE Sustainability', img: '/partners/re-sustainability.png' },
              { id: 'green-leaf-ngo', name: 'Conservation Foundation', img: '/partners/green-leaf-ngo.png' },
              { id: 'siic-iitk', name: 'SIIC IIT Kanpur', img: '/partners/siic-iitk.png' },
              { id: 'mecl', name: 'MECL', img: '/partners/mecl.png' },
              { id: 'icimod', name: 'ICIMOD', img: '/partners/icimod.png' },
            ].concat([
              { id: 'bharat-carbon-dup', name: 'Bharat Carbon', img: '/partners/bharat-carbon.png' },
              { id: 'ntt-data-dup', name: 'NTT DATA', img: '/partners/ntt-data.png' },
              { id: 'imperial-college-dup', name: 'Imperial College London', img: '/partners/imperial-college.png' },
              { id: 'neer-dup', name: 'NEER', img: '/partners/neer.png' },
              { id: 'citi-dup', name: 'Citi', img: '/partners/citi.png' },
              { id: 'virginia-tech-dup', name: 'Virginia Tech', img: '/partners/virginia-tech.png' },
              { id: 'hmda-dup', name: 'HMDA', img: '/partners/hmda.png' },
              { id: 'lotus-wireless-dup', name: 'Lotus Wireless', img: '/partners/lotus-wireless.png' },
              { id: 'jal-sansadhan-dup', name: 'Jal Sansadhan Vibhag', img: '/partners/jal-sansadhan.png' },
              { id: 'dst-gov-dup', name: 'Department of Science & Technology', img: '/partners/dst-gov.png' },
              { id: 'wwf-dup', name: 'WWF', img: '/partners/wwf.png' },
              { id: 'ntpc-dup', name: 'NTPC', img: '/partners/ntpc.png' },
              { id: 'iit-gandhinagar-dup', name: 'IIT Gandhinagar', img: '/partners/iit-gandhinagar.png' },
              { id: 'bharat-petroleum-dup', name: 'Bharat Petroleum', img: '/partners/bharat-petroleum.png' },
              { id: 'wii-dup', name: 'Wildlife Institute of India', img: '/partners/wii.png' },
              { id: 'gcrs-dup', name: 'Geo Climate Risk Solutions', img: '/partners/gcrs.png' },
              { id: 'cwrm-dup', name: 'CWRM', img: '/partners/cwrm.png' },
              { id: 'bharat-oil-waste-dup', name: 'Bharat Oil & Waste Management Ltd.', img: '/partners/bharat-oil-waste.png' },
              { id: 'enforcement-directorate-dup', name: 'Enforcement Directorate', img: '/partners/enforcement-directorate.png' },
              { id: 'oiltech-engineering-dup', name: 'Oiltech Engineering', img: '/partners/oiltech-engineering.png' },
              { id: 'namami-gange-dup', name: 'Namami Gange', img: '/partners/namami-gange.png' },
              { id: 'uprvunl-dup', name: 'UPRVUNL', img: '/partners/uprvunl.png' },
              { id: 'cropc-dup', name: 'CROPC', img: '/partners/cropc.png' },
              { id: 'up-revenue-board-dup', name: 'Board of Revenue Uttar Pradesh', img: '/partners/up-revenue-board.png' },
              { id: 're-sustainability-dup', name: 'RE Sustainability', img: '/partners/re-sustainability.png' },
              { id: 'green-leaf-ngo-dup', name: 'Conservation Foundation', img: '/partners/green-leaf-ngo.png' },
              { id: 'siic-iitk-dup', name: 'SIIC IIT Kanpur', img: '/partners/siic-iitk.png' },
              { id: 'mecl-dup', name: 'MECL', img: '/partners/mecl.png' },
              { id: 'icimod-dup', name: 'ICIMOD', img: '/partners/icimod.png' },
            ]).map((partner, pIdx) => (
              <div key={pIdx} className="client-logo-card" title={partner.name}>
                <img
                  src={`${partner.img}?v=2`}
                  alt={partner.name}
                  style={{
                    maxHeight: '52px',
                    maxWidth: '155px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION (SPACIOUS PILL BANNER WITH INTERACTIVE BUTTON CONTROLS) */}
      <section className="section-light" style={{ padding: 'clamp(70px, 9vw, 120px) clamp(20px, 5vw, 40px)', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto', width: '100%' }}>

          <style>{`
            .sensors-pill-banner-container {
              position: relative;
              width: 100%;
              overflow-x: auto;
              scroll-behavior: smooth;
              border-radius: 999px;
              padding: 28px 36px;
              scrollbar-width: none;
              -ms-overflow-style: none;
              mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
              -webkit-mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
            }

            .sensors-pill-banner-container::-webkit-scrollbar {
              display: none;
            }

            .sensors-track-flex {
              display: flex;
              align-items: center;
              gap: 32px;
              width: max-content;
              padding: 4px 12px;
            }

            .sensor-circle-card {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              width: 120px;
              flex-shrink: 0;
              cursor: pointer;
              transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .sensor-circle-card:hover {
              transform: translateY(-6px) scale(1.07);
            }

            .sensor-circle-img-frame {
              width: 94px;
              height: 94px;
              border-radius: 50%;
              overflow: hidden;
              background: #FFFFFF;
              border: 4px solid #FFFFFF;
              box-shadow: 0 8px 20px rgba(10, 29, 61, 0.12);
              margin-bottom: 12px;
              transition: all 0.3s ease;
            }

            .sensor-circle-card:hover .sensor-circle-img-frame {
              border-color: var(--color-orange, #FF6A00);
              box-shadow: 0 12px 28px rgba(255, 106, 0, 0.35);
            }

            .sensor-circle-title {
              font-family: var(--font-universal);
              font-size: 0.76rem;
              font-weight: 700;
              letter-spacing: 0.03em;
              text-transform: uppercase;
              color: #334155;
              line-height: 1.3;
            }

            .what-we-do-row-grid-1 {
              display: grid;
              grid-template-columns: 320px 1fr;
              align-items: center;
              gap: clamp(32px, 5vw, 64px);
              margin-bottom: 64px;
            }

            .what-we-do-row-grid-2 {
              display: grid;
              grid-template-columns: 1fr 340px;
              align-items: center;
              gap: clamp(32px, 5vw, 64px);
            }

            @media (max-width: 980px) {
              .what-we-do-row-grid-1,
              .what-we-do-row-grid-2 {
                grid-template-columns: 1fr !important;
                gap: 24px !important;
              }

              .what-we-do-row-grid-2 {
                display: flex !important;
                flex-direction: column-reverse !important;
              }

              .sensors-pill-banner-container {
                border-radius: 32px !important;
                padding: 20px 18px !important;
              }

              .sensor-circle-card {
                width: 100px !important;
              }

              .sensor-circle-img-frame {
                width: 80px !important;
                height: 80px !important;
              }

              .sensor-circle-title {
                font-size: 0.7rem !important;
              }
            }
          `}</style>

          {/* Main Section Heading */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(2.4rem, 5.8vw, 3.6rem)',
              color: '#0A1D3D',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              margin: '0',
              fontFamily: 'var(--font-universal)'
            }}>
              What We <span style={{ color: 'var(--color-orange, #FF6A00)' }}>Do</span>
            </h2>
            <p style={{
              color: '#64748B',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              marginTop: '14px',
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}>
              Integrated multi-sensor data acquisition and AI-driven spatial intelligence
            </p>
          </div>

          {/* ROW 1: DATA (TITLE ON LEFT, MANUAL SCROLL PILL ON RIGHT) */}
          <div className="what-we-do-row-grid-1">
            {/* Title Block on Left */}
            <div style={{ paddingLeft: '8px' }}>
              <h3 style={{
                fontSize: 'clamp(1.85rem, 3.6vw, 2.7rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-universal)'
              }}>
                <span style={{ color: '#00B5E2' }}>Data</span> <br />
                <span style={{ color: '#0A1D3D' }}>Sensors & Inputs</span>
              </h3>
              <p style={{
                fontSize: '0.92rem',
                color: '#475569',
                lineHeight: 1.55,
                marginTop: '10px',
                fontWeight: 400,
                maxWidth: '280px',
                margin: '10px 0 0 0'
              }}>
                Multispectral, Hyperspectral, LiDAR, SAR & IoT environmental streams.
              </p>

              {/* Navigation Arrows for Data Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                <button
                  onClick={() => scrollData('left')}
                  aria-label="Scroll Left"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1px solid rgba(10, 29, 61, 0.14)',
                    boxShadow: '0 4px 14px rgba(10, 29, 61, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0A1D3D',
                    transition: 'all 0.25s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00B5E2'
                    e.currentTarget.style.color = '#FFFFFF'
                    e.currentTarget.style.borderColor = '#00B5E2'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.color = '#0A1D3D'
                    e.currentTarget.style.borderColor = 'rgba(10, 29, 61, 0.14)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() => scrollData('right')}
                  aria-label="Scroll Right"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1px solid rgba(10, 29, 61, 0.14)',
                    boxShadow: '0 4px 14px rgba(10, 29, 61, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0A1D3D',
                    transition: 'all 0.25s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00B5E2'
                    e.currentTarget.style.color = '#FFFFFF'
                    e.currentTarget.style.borderColor = '#00B5E2'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.color = '#0A1D3D'
                    e.currentTarget.style.borderColor = 'rgba(10, 29, 61, 0.14)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            {/* Pill Banner with Manual Scroll (Right) */}
            <div
              ref={dataScrollRef}
              className="sensors-pill-banner-container"
              style={{ background: '#EAF6FC', border: '1px solid rgba(0, 181, 226, 0.22)' }}
            >
              <div className="sensors-track-flex">
                {[
                  { title: 'Weather & Climate', img: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=250&q=80' },
                  { title: 'Multispectral (MSI)', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=250&q=80' },
                  { title: 'Hyperspectral (HSI)', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=250&q=80' },
                  { title: 'SAR Radar (InSAR)', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=250&q=80' },
                  { title: 'Sub-Centimeter LiDAR', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=250&q=80' },
                  { title: 'High-Res RGB Aerial', img: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=250&q=80' },
                  { title: 'Thermal Infrared (TIR)', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=250&q=80' }
                ].map((sensor, sIdx) => (
                  <div key={sIdx} className="sensor-circle-card">
                    <div className="sensor-circle-img-frame">
                      <img
                        src={sensor.img}
                        alt={sensor.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>
                    <div className="sensor-circle-title">
                      {sensor.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 2: GEOSPATIAL INTELLIGENCE (PILL ON LEFT, TITLE ON RIGHT - OPPOSITE SIDE!) */}
          <div className="what-we-do-row-grid-2">
            {/* Pill Banner with Manual Scroll (Left) */}
            <div
              ref={geoScrollRef}
              className="sensors-pill-banner-container"
              style={{ background: '#FFF4EC', border: '1px solid rgba(255, 106, 0, 0.22)' }}
            >
              <div className="sensors-track-flex">
                {[
                  { title: 'AI Predictive Models', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=250&q=80' },
                  { title: '3D Terrain & LiDAR', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=250&q=80' },
                  { title: 'MapZest WebGIS', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=250&q=80' },
                  { title: 'Biomass & Carbon', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=250&q=80' },
                  { title: 'Flood Dynamics', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=250&q=80' },
                  { title: 'Actionable Analytics', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=250&q=80' }
                ].map((geo, gIdx) => (
                  <div key={gIdx} className="sensor-circle-card">
                    <div className="sensor-circle-img-frame">
                      <img
                        src={geo.img}
                        alt={geo.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>
                    <div className="sensor-circle-title">
                      {geo.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Title Block on Right */}
            <div style={{ textAlign: 'left', paddingRight: '8px' }}>
              <h3 style={{
                fontSize: 'clamp(1.85rem, 3.6vw, 2.7rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                margin: '0 0 8px 0',
                fontFamily: 'var(--font-universal)'
              }}>
                <span style={{ color: 'var(--color-orange, #FF6A00)' }}>Geospatial</span> <br />
                <span style={{ color: '#0A1D3D' }}>Intelligence</span>
              </h3>
              <p style={{
                fontSize: '0.92rem',
                color: '#475569',
                lineHeight: 1.55,
                marginTop: '10px',
                fontWeight: 400,
                maxWidth: '280px',
                margin: '10px 0 0 0'
              }}>
                AI analytics, 3D LiDAR modeling, WebGIS & predictive decision engines.
              </p>

              {/* Navigation Arrows for Geospatial Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                <button
                  onClick={() => scrollGeo('left')}
                  aria-label="Scroll Left"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1px solid rgba(10, 29, 61, 0.14)',
                    boxShadow: '0 4px 14px rgba(10, 29, 61, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0A1D3D',
                    transition: 'all 0.25s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-orange, #FF6A00)'
                    e.currentTarget.style.color = '#FFFFFF'
                    e.currentTarget.style.borderColor = 'var(--color-orange, #FF6A00)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.color = '#0A1D3D'
                    e.currentTarget.style.borderColor = 'rgba(10, 29, 61, 0.14)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() => scrollGeo('right')}
                  aria-label="Scroll Right"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '1px solid rgba(10, 29, 61, 0.14)',
                    boxShadow: '0 4px 14px rgba(10, 29, 61, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#0A1D3D',
                    transition: 'all 0.25s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-orange, #FF6A00)'
                    e.currentTarget.style.color = '#FFFFFF'
                    e.currentTarget.style.borderColor = 'var(--color-orange, #FF6A00)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.color = '#0A1D3D'
                    e.currentTarget.style.borderColor = 'rgba(10, 29, 61, 0.14)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MULTI-SENSOR INTERACTIVE BEFORE/AFTER SLIDER SHOWCASE */}
      <DualComparisonSlider setActiveTab={setActiveTab} />

      {/* MAPZEST SECTION */}
      <section className="section-black" style={{ padding: 'clamp(60px, 8vw, 120px) clamp(16px, 4vw, 24px)', background: 'radial-gradient(circle at 50% 0%, var(--bg-steel-blue) 0%, #050F24 70%)' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center'
        }}>
          {/* Left Text Column */}
          <div style={{ textAlign: 'left', padding: 'clamp(0px, 2vw, 20px)' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #EAEFF5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Explore Geospatial <br /> Insights with <span style={{ background: 'linear-gradient(135deg, #FF7A29, #FFA366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MapZest</span>
            </h2>
            <p style={{ color: '#EAEFF5', maxWidth: '520px', marginBottom: '32px', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.7, fontWeight: 400 }}>
              Unlock hidden intelligence in your spatial data with our powerful, intuitive GIS tools. Whether you're mapping complex terrains, analyzing patterns, or visualizing geospatial trends, we've got you covered.
            </p>
            <div>
              <a
                href="https://mapzest.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px clamp(28px, 5vw, 48px)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#000000',
                  background: '#EAEFF5',
                  border: '1px solid #EAEFF5',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#EAEFF5';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore MapZest →
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(0px, 2vw, 20px)'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(0, 181, 226, 0.15) 0%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />
            <img
              src={mapzestImg}
              alt="Explore Geospatial Insights with MapZest"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '16px',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 181, 226, 0.3)',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
              }}
            />
          </div>
        </div>
      </section>

      {/* DATA TO DECISIONS SECTION */}
      <section style={{
        padding: 'clamp(50px, 7vw, 90px) clamp(16px, 4vw, 24px)',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF4F8 100%)',
        borderTop: '1px solid rgba(27, 54, 73, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1340px',
          margin: '0 auto',
        }}>
          <DataToDecisions />
        </div>
      </section>


      {/* OUR COMMITMENT TO SDGs SECTION */}
      <section style={{
        padding: 'clamp(50px, 6vw, 80px) 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #EFF4F8 0%, #F8FAFC 100%)',
        overflow: 'hidden',
        borderTop: '1px solid rgba(27, 54, 73, 0.06)'
      }}>
        {/* Subtle Warm/Blue Glows for off-white theme */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 106, 0, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 181, 226, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Marquee Styles for SDGs */}
        <style>{`
          @keyframes sdgMarqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .sdg-marquee-wrapper {
            position: relative;
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          }

          .sdg-marquee-track {
            display: flex;
            gap: 24px;
            width: max-content;
            animation: sdgMarqueeScroll 48s linear infinite;
            padding: 10px 0 20px 0;
          }

          .sdg-marquee-wrapper:hover .sdg-marquee-track {
            animation-play-state: paused;
          }

          .sdg-card-item {
            flex: 0 0 auto;
            width: clamp(120px, 14vw, 150px);
            height: clamp(120px, 14vw, 150px);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 20px;
            background: #FFFFFF;
            border: 1px solid rgba(27, 54, 73, 0.08);
            box-shadow: 0 10px 26px -6px rgba(27, 54, 73, 0.08);
            transition: all 0.32s cubic-bezier(0.16, 1, 0.3, 1);
            overflow: hidden;
            padding: 6px;
            outline: none !important;
          }

          .sdg-card-item:hover {
            transform: translateY(-8px) scale(1.06);
            border-color: rgba(255, 106, 0, 0.5);
            box-shadow: 0 20px 38px -8px rgba(255, 106, 0, 0.25);
          }
        `}</style>

        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 16px' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(28px, 4vw, 44px)',
            color: 'var(--text-heading-dark)'
          }}>
            OUR COMMITMENT TO <span style={{ color: 'var(--color-orange)' }}>SDGs</span>
          </h2>
        </div>

        <div className="sdg-marquee-wrapper" style={{ position: 'relative', zIndex: 1 }}>
          <div className="sdg-marquee-track">
            {[
              { num: 1, title: 'No Poverty', img: '/sdgs/sdg-1.png' },
              { num: 2, title: 'Zero Hunger', img: '/sdgs/sdg-2.png' },
              { num: 3, title: 'Good Health and Well-being', img: '/sdgs/sdg-3.png' },
              { num: 4, title: 'Quality Education', img: '/sdgs/sdg-4.png' },
              { num: 5, title: 'Gender Equality', img: '/sdgs/sdg-5.png' },
              { num: 6, title: 'Clean Water and Sanitation', img: '/sdgs/sdg-6.png' },
              { num: 7, title: 'Affordable and Clean Energy', img: '/sdgs/sdg-7.png' },
              { num: 8, title: 'Decent Work and Economic Growth', img: '/sdgs/sdg-8.png' },
              { num: 9, title: 'Industry, Innovation and Infrastructure', img: '/sdgs/sdg-9.png' },
              { num: 10, title: 'Reduced Inequalities', img: '/sdgs/sdg-10.png' },
              { num: 11, title: 'Sustainable Cities and Communities', img: '/sdgs/sdg-11.png' },
              { num: 12, title: 'Responsible Consumption and Production', img: '/sdgs/sdg-12.png' },
              { num: 13, title: 'Climate Action', img: '/sdgs/sdg-13.png' },
              { num: 14, title: 'Life Below Water', img: '/sdgs/sdg-14.png' },
              { num: 15, title: 'Life on Land', img: '/sdgs/sdg-15.png' },
              { num: 16, title: 'Peace, Justice and Strong Institutions', img: '/sdgs/sdg-16.png' },
              { num: 17, title: 'Partnerships for the Goals', img: '/sdgs/sdg-17.png' },
            ].concat([
              { num: 1, title: 'No Poverty', img: '/sdgs/sdg-1.png' },
              { num: 2, title: 'Zero Hunger', img: '/sdgs/sdg-2.png' },
              { num: 3, title: 'Good Health and Well-being', img: '/sdgs/sdg-3.png' },
              { num: 4, title: 'Quality Education', img: '/sdgs/sdg-4.png' },
              { num: 5, title: 'Gender Equality', img: '/sdgs/sdg-5.png' },
              { num: 6, title: 'Clean Water and Sanitation', img: '/sdgs/sdg-6.png' },
              { num: 7, title: 'Affordable and Clean Energy', img: '/sdgs/sdg-7.png' },
              { num: 8, title: 'Decent Work and Economic Growth', img: '/sdgs/sdg-8.png' },
              { num: 9, title: 'Industry, Innovation and Infrastructure', img: '/sdgs/sdg-9.png' },
              { num: 10, title: 'Reduced Inequalities', img: '/sdgs/sdg-10.png' },
              { num: 11, title: 'Sustainable Cities and Communities', img: '/sdgs/sdg-11.png' },
              { num: 12, title: 'Responsible Consumption and Production', img: '/sdgs/sdg-12.png' },
              { num: 13, title: 'Climate Action', img: '/sdgs/sdg-13.png' },
              { num: 14, title: 'Life Below Water', img: '/sdgs/sdg-14.png' },
              { num: 15, title: 'Life on Land', img: '/sdgs/sdg-15.png' },
              { num: 16, title: 'Peace, Justice and Strong Institutions', img: '/sdgs/sdg-16.png' },
              { num: 17, title: 'Partnerships for the Goals', img: '/sdgs/sdg-17.png' },
            ]).map((sdg, i) => (
              <div
                key={i}
                className="sdg-card-item"
                title={`SDG ${sdg.num}: ${sdg.title}`}
              >
                <img
                  src={`${sdg.img}?v=3`}
                  alt={`SDG ${sdg.num}: ${sdg.title}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    display: 'block'
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section style={{
        padding: 'clamp(50px, 7vw, 100px) clamp(16px, 4vw, 24px)',
        background: 'linear-gradient(180deg, #EEF2F6 0%, #F8FAFC 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(27, 54, 73, 0.06)'
      }}>
        {/* Decorative background blur */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 106, 0, 0.06)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(0, 181, 226, 0.05)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          padding: 'clamp(36px, 6vw, 80px) clamp(18px, 5vw, 40px)',
          borderRadius: '32px',
          background: '#FFFFFF',
          border: '1px solid rgba(27, 54, 73, 0.1)',
          boxShadow: '0 25px 50px -12px rgba(27, 54, 73, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 1)',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            color: 'var(--text-heading-dark)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '16px'
          }}>
            Ready to Transform Your Spatial Operations?
          </h2>
          <p style={{ color: 'var(--text-muted-gray)', maxWidth: '650px', margin: '0 auto clamp(24px, 4vw, 40px)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.6 }}>
            Consult with our geospatial research experts at IIT Kanpur for custom UAV surveys, WebGIS deployments, or collaborative research initiatives.
          </p>
          <a
            href="https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20connect%20with%20your%20engineering%20team%20for%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              textDecoration: 'none',
              padding: '14px clamp(24px, 5vw, 48px)',
              fontSize: 'clamp(0.92rem, 2vw, 1.05rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              background: 'linear-gradient(135deg, var(--color-orange) 0%, #E65000 100%)',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 10px 25px -5px rgba(255, 106, 0, 0.4)',
              transition: 'all 0.3s ease',
              maxWidth: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(255, 106, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 106, 0, 0.4)';
            }}
          >
            Contact Engineering Team
          </a>
        </div>
      </section>
    </div>
  )
}
