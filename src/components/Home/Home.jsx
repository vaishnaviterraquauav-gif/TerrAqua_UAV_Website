import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, ChevronRight, ChevronDown, ExternalLink, Radio, Satellite, Cpu, Database, Brain, Layers, Activity, Plane, BarChart3, CheckCircle2 } from 'lucide-react'
import mapzestImg from '../../assets/mapzest-preview.png'
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

export default function Home({ setActiveTab }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openDataIndex, setOpenDataIndex] = useState(0)
  const [openGeoIndex, setOpenGeoIndex] = useState(2)

  const heroSlides = [
    {
      id: 0,
      title: "Situational-Awareness as a Service Platform",
      subtitle: "Transforming multi-sensor aerial drone, LiDAR & satellite data into near real-time actionable intelligence.",
      buttonText: "Request a Demo",
      buttonLink: "https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20request%20a%20demo%20for%20Situational-Awareness%20Services.",
      isExternal: true,
      circleImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 1,
      title: "The World’s Leading Situational Awareness Platform",
      subtitle: "Advanced airborne remote sensing & sub-centimeter LiDAR analytics for defense, disaster, and enterprise operations.",
      buttonText: "Request a Demo",
      buttonTab: "solutions",
      isExternal: false,
      circleImg: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 2,
      title: "Transforming Geospatial Data into Actionable Intelligence",
      subtitle: "MapZest WebGIS enterprise infrastructure to stream, process, and extract automated insights from terabytes of spatial data.",
      buttonText: "Request a Demo",
      buttonTab: "product",
      isExternal: false,
      circleImg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=85"
    },
    {
      id: 3,
      title: "Making Spatial Data Usable, Accessible and Affordable",
      subtitle: "Incubated at SIIC, IIT Kanpur — delivering AI-powered climate intelligence, thermal modeling & precision agritech.",
      buttonText: "Request a Demo",
      buttonTab: "contact",
      isExternal: false,
      circleImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=85"
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
    { value: '50,000+', label: 'Hectares Mapped', sub: 'High Precision Aerial LiDAR' },
    { value: '99.4%', label: 'Mapping Accuracy', sub: 'Sub-Centimeter Resolution' },
    { value: 'IITK', label: 'Incubated Tech', sub: 'SIIC Innovation Ecosystem' },
    { value: '10+', label: 'Government Projects', sub: 'Pan-India Deployment' },
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
        minHeight: 'calc(100vh - 75px)',
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

            {/* Action CTA Button */}
            <div>
              {slide.isExternal ? (
                <a
                  href={slide.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    padding: '13px clamp(28px, 5vw, 40px)',
                    fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                    backgroundColor: 'var(--color-orange, #FF6A00)',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.backgroundColor = '#E65000'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.backgroundColor = 'var(--color-orange, #FF6A00)'
                  }}
                >
                  {slide.buttonText}
                </a>
              ) : (
                <button
                  onClick={() => setActiveTab(slide.buttonTab)}
                  style={{
                    display: 'inline-block',
                    padding: '13px clamp(28px, 5vw, 40px)',
                    fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: '#FFFFFF',
                    backgroundColor: 'var(--color-orange, #FF6A00)',
                    border: 'none',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.backgroundColor = '#E65000'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.backgroundColor = 'var(--color-orange, #FF6A00)'
                  }}
                >
                  {slide.buttonText}
                </button>
              )}
            </div>
            {/* 4 HERO METRICS CARDS (FIXED POSITION & CLEAN RESPONSIVE FORMAT) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginTop: '28px',
              maxWidth: '540px'
            }}>
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '10px 14px',
                    textAlign: 'left',
                    background: 'rgba(255, 255, 255, 0.04)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    minHeight: '68px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.07)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <div style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
                    fontWeight: 800,
                    color: 'var(--color-orange, #FF6A00)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1
                  }}>
                    {m.value}
                  </div>
                  <div style={{ color: '#FFFFFF', fontSize: 'clamp(0.74rem, 1.8vw, 0.82rem)', marginTop: '4px', fontWeight: 600, lineHeight: 1.25 }}>
                    {m.label}
                  </div>
                </div>
              ))}
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
              justifyContent: 'center'
            }}>
              {/* Outer Orbit Track 1 with Satellite Node */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-16px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(43, 171, 226, 0.35)',
                  animation: 'spinOrbitalTrack 30s linear infinite',
                  pointerEvents: 'none'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-4px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#2BABE2',
                  boxShadow: '0 0 14px #2BABE2'
                }} />
              </div>

              {/* Outer Orbit Track 2 (Counter-rotation) */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(43, 171, 226, 0.15)',
                  animation: 'spinOrbitalCounter 45s linear infinite',
                  pointerEvents: 'none'
                }}
              >
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '-4px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#2BABE2',
                  boxShadow: '0 0 10px #2BABE2'
                }} />
              </div>

              {/* Main Glowing Circular Frame with 4 Synchronized Images */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '3px solid rgba(43, 171, 226, 0.7)',
                  boxShadow: '0 0 40px rgba(43, 171, 226, 0.35), inset 0 0 30px rgba(0, 0, 0, 0.6)',
                  background: '#050D1A'
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
            gap: 22px;
            width: max-content;
            animation: clientMarqueeScroll 32s linear infinite;
            padding: 6px 0 10px 0;
          }

          .clients-marquee-wrapper:hover .clients-marquee-track {
            animation-play-state: paused;
          }

          .client-logo-card {
            background: #FFFFFF;
            border-radius: 14px;
            border: 1px solid rgba(27, 54, 73, 0.09);
            box-shadow: 0 6px 18px -4px rgba(27, 54, 73, 0.06);
            height: 84px;
            min-width: 215px;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            justifyContent: center;
            flex-shrink: 0;
            transition: all 0.25s ease;
            cursor: pointer;
          }

          .client-logo-card:hover {
            transform: translateY(-3px);
            border-color: rgba(27, 54, 73, 0.18);
            box-shadow: 0 12px 28px -4px rgba(27, 54, 73, 0.14);
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
              // 1. CITI
              {
                id: 'citi',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" 
                      alt="Citi" 
                      style={{ maxHeight: '40px', maxWidth: '150px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: '-7px',
                        left: '20px',
                        right: '4px',
                        height: '11px',
                        borderTop: '3px solid #D92D27',
                        borderRadius: '12px 12px 0 0'
                      }} />
                      <span style={{ fontSize: '1.55rem', fontWeight: 800, color: '#003B70', letterSpacing: '-0.5px' }}>citi</span>
                    </div>
                  </div>
                )
              },
              // 2. VIRGINIA TECH
              {
                id: 'vt',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '100%' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/60/Virginia_Tech_Hokies_logo.svg" 
                      alt="Virginia Tech" 
                      style={{ maxHeight: '42px', maxWidth: '155px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#861F41', fontStyle: 'italic' }}>VT</span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#861F41' }}>VIRGINIA TECH</span>
                    </div>
                  </div>
                )
              },
              // 3. MECL
              {
                id: 'mecl',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1.5px solid #0284C7', background: '#F0F9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284C7', fontWeight: 900, fontSize: '0.9rem' }}>
                      ⛏️
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0369A1' }}>एम. ई. सी. एल.</span>
                      <span style={{ fontSize: '1rem', fontWeight: 900, color: '#0284C7', letterSpacing: '0.5px' }}>MECL</span>
                    </div>
                  </div>
                )
              },
              // 4. HMDA
              {
                id: 'hmda',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/HMDA_Logo.png/220px-HMDA_Logo.png" 
                      alt="HMDA" 
                      style={{ maxHeight: '38px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '26px', height: '26px', background: '#0284C7', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.85rem' }}>⬢</div>
                      <span style={{ fontSize: '1.12rem', fontWeight: 900, color: '#0F172A' }}>hmda</span>
                    </div>
                  </div>
                )
              },
              // 5. SAC ISRO
              {
                id: 'sac-isro',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" 
                      alt="ISRO SAC" 
                      style={{ maxHeight: '42px', maxWidth: '145px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0A1D3D' }}>SAC • ISRO</span>
                    </div>
                  </div>
                )
              },
              // 6. NTPC
              {
                id: 'ntpc',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/3/30/NTPC_Logo.svg" 
                      alt="NTPC" 
                      style={{ maxHeight: '38px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', background: '#0047AB', borderRadius: '5px', padding: '4px 10px', color: '#FFF', fontWeight: 900, fontSize: '0.95rem' }}>
                      NTPC
                    </div>
                  </div>
                )
              },
              // 7. WWF
              {
                id: 'wwf',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/2/24/WWF_logo.svg" 
                      alt="WWF" 
                      style={{ maxHeight: '38px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.2rem' }}>🐼</span>
                      <span style={{ fontSize: '1.12rem', fontWeight: 900 }}>WWF</span>
                    </div>
                  </div>
                )
              },
              // 8. CROPC
              {
                id: 'cropc',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #EAB308', background: '#FEF08A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>
                      ⚡
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.96rem', fontWeight: 900, color: '#1E293B', lineHeight: 1.1 }}>CROPC</span>
                      <span style={{ fontSize: '0.64rem', fontWeight: 600, color: '#CA8A04' }}>INDIA RESILIENCE</span>
                    </div>
                  </div>
                )
              },
              // 9. PHILOGY
              {
                id: 'philogy',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', border: '2px solid #1E293B', borderLeftColor: 'var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '2.5px', height: '16px', background: '#1E293B' }}></div>
                    </div>
                    <span style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.5px' }}>phil<span style={{ color: 'var(--color-orange)' }}>φ</span>gy</span>
                  </div>
                )
              },
              // 10. GEOINFY SOLUTIONS
              {
                id: 'geoinfy',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
                      <div style={{ width: '13px', height: '13px', border: '2px solid #2563EB', transform: 'rotate(45deg)' }}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '1.02rem', fontWeight: 800, color: '#1E40AF', lineHeight: 1.1 }}>GeoInfy</span>
                      <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#475569', letterSpacing: '0.6px' }}>SOLUTIONS</span>
                    </div>
                  </div>
                )
              },
              // 11. ADITYA BIRLA GROUP
              {
                id: 'aditya-birla',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/47/Aditya_Birla_Group_Logo.svg" 
                      alt="Aditya Birla Group" 
                      style={{ maxHeight: '38px', maxWidth: '145px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.96rem', fontWeight: 900, color: '#991B1B' }}>ADITYA BIRLA</span>
                    </div>
                  </div>
                )
              },
              // 12. LCB FERTILIZERS
              {
                id: 'lcb',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A', fontSize: '1.1rem' }}>
                      ☘
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#15803D', lineHeight: 1.1 }}>LCB FERTILIZERS</span>
                    </div>
                  </div>
                )
              },
              // 13. BHARAT CARBON
              {
                id: 'bharat-carbon',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px dashed #059669', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', fontSize: '0.95rem' }}>
                      ⚛
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#047857', lineHeight: 1.1 }}>Bharat Carbon</span>
                    </div>
                  </div>
                )
              },
              // 14. NTT DATA
              {
                id: 'ntt-data',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4e/NTT_Data_Logo.svg" 
                      alt="NTT DATA" 
                      style={{ maxHeight: '30px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.12rem', fontWeight: 900, color: '#0072C6' }}>NTT DATA</span>
                    </div>
                  </div>
                )
              },
              // 15. IMPERIAL COLLEGE LONDON
              {
                id: 'imperial',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Imperial_College_London_new_logo.svg" 
                      alt="Imperial College London" 
                      style={{ maxHeight: '34px', maxWidth: '145px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#002147' }}>Imperial College</span>
                    </div>
                  </div>
                )
              },
              // 16. RCCD
              {
                id: 'rccd',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #0284C7 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.9rem' }}>
                      💧
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 900, color: '#0369A1', lineHeight: 1.1 }}>RCCD</span>
                    </div>
                  </div>
                )
              },

              // ============================================
              // DUPLICATE ARRAY FOR SEAMLESS INFINITE LOOP
              // ============================================
              // 1. CITI
              {
                id: 'citi-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Citi.svg" 
                      alt="Citi" 
                      style={{ maxHeight: '40px', maxWidth: '150px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      <div style={{
                        position: 'absolute',
                        top: '-7px',
                        left: '20px',
                        right: '4px',
                        height: '11px',
                        borderTop: '3px solid #D92D27',
                        borderRadius: '12px 12px 0 0'
                      }} />
                      <span style={{ fontSize: '1.55rem', fontWeight: 800, color: '#003B70', letterSpacing: '-0.5px' }}>citi</span>
                    </div>
                  </div>
                )
              },
              // 2. VIRGINIA TECH
              {
                id: 'vt-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '100%' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/60/Virginia_Tech_Hokies_logo.svg" 
                      alt="Virginia Tech" 
                      style={{ maxHeight: '42px', maxWidth: '155px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#861F41', fontStyle: 'italic' }}>VT</span>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#861F41' }}>VIRGINIA TECH</span>
                    </div>
                  </div>
                )
              },
              // 3. MECL
              {
                id: 'mecl-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1.5px solid #0284C7', background: '#F0F9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284C7', fontWeight: 900, fontSize: '0.9rem' }}>
                      ⛏️
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0369A1' }}>एम. ई. सी. एल.</span>
                      <span style={{ fontSize: '1rem', fontWeight: 900, color: '#0284C7', letterSpacing: '0.5px' }}>MECL</span>
                    </div>
                  </div>
                )
              },
              // 4. HMDA
              {
                id: 'hmda-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/HMDA_Logo.png/220px-HMDA_Logo.png" 
                      alt="HMDA" 
                      style={{ maxHeight: '38px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '26px', height: '26px', background: '#0284C7', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.85rem' }}>⬢</div>
                      <span style={{ fontSize: '1.12rem', fontWeight: 900, color: '#0F172A' }}>hmda</span>
                    </div>
                  </div>
                )
              },
              // 5. SAC ISRO
              {
                id: 'sac-isro-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" 
                      alt="ISRO SAC" 
                      style={{ maxHeight: '42px', maxWidth: '145px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0A1D3D' }}>SAC • ISRO</span>
                    </div>
                  </div>
                )
              },
              // 6. NTPC
              {
                id: 'ntpc-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/3/30/NTPC_Logo.svg" 
                      alt="NTPC" 
                      style={{ maxHeight: '38px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', background: '#0047AB', borderRadius: '5px', padding: '4px 10px', color: '#FFF', fontWeight: 900, fontSize: '0.95rem' }}>
                      NTPC
                    </div>
                  </div>
                )
              },
              // 7. WWF
              {
                id: 'wwf-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/2/24/WWF_logo.svg" 
                      alt="WWF" 
                      style={{ maxHeight: '38px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.2rem' }}>🐼</span>
                      <span style={{ fontSize: '1.12rem', fontWeight: 900 }}>WWF</span>
                    </div>
                  </div>
                )
              },
              // 8. CROPC
              {
                id: 'cropc-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #EAB308', background: '#FEF08A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>
                      ⚡
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.96rem', fontWeight: 900, color: '#1E293B', lineHeight: 1.1 }}>CROPC</span>
                      <span style={{ fontSize: '0.64rem', fontWeight: 600, color: '#CA8A04' }}>INDIA RESILIENCE</span>
                    </div>
                  </div>
                )
              },
              // 9. PHILOGY
              {
                id: 'philogy-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', border: '2px solid #1E293B', borderLeftColor: 'var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '2.5px', height: '16px', background: '#1E293B' }}></div>
                    </div>
                    <span style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.5px' }}>phil<span style={{ color: 'var(--color-orange)' }}>φ</span>gy</span>
                  </div>
                )
              },
              // 10. GEOINFY SOLUTIONS
              {
                id: 'geoinfy-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
                      <div style={{ width: '13px', height: '13px', border: '2px solid #2563EB', transform: 'rotate(45deg)' }}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '1.02rem', fontWeight: 800, color: '#1E40AF', lineHeight: 1.1 }}>GeoInfy</span>
                      <span style={{ fontSize: '0.64rem', fontWeight: 700, color: '#475569', letterSpacing: '0.6px' }}>SOLUTIONS</span>
                    </div>
                  </div>
                )
              },
              // 11. ADITYA BIRLA GROUP
              {
                id: 'aditya-birla-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/47/Aditya_Birla_Group_Logo.svg" 
                      alt="Aditya Birla Group" 
                      style={{ maxHeight: '38px', maxWidth: '145px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.96rem', fontWeight: 900, color: '#991B1B' }}>ADITYA BIRLA</span>
                    </div>
                  </div>
                )
              },
              // 12. LCB FERTILIZERS
              {
                id: 'lcb-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A', fontSize: '1.1rem' }}>
                      ☘
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#15803D', lineHeight: 1.1 }}>LCB FERTILIZERS</span>
                    </div>
                  </div>
                )
              },
              // 13. BHARAT CARBON
              {
                id: 'bharat-carbon-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px dashed #059669', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', fontSize: '0.95rem' }}>
                      ⚛
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#047857', lineHeight: 1.1 }}>Bharat Carbon</span>
                    </div>
                  </div>
                )
              },
              // 14. NTT DATA
              {
                id: 'ntt-data-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4e/NTT_Data_Logo.svg" 
                      alt="NTT DATA" 
                      style={{ maxHeight: '30px', maxWidth: '135px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.12rem', fontWeight: 900, color: '#0072C6' }}>NTT DATA</span>
                    </div>
                  </div>
                )
              },
              // 15. IMPERIAL COLLEGE LONDON
              {
                id: 'imperial-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Imperial_College_London_new_logo.svg" 
                      alt="Imperial College London" 
                      style={{ maxHeight: '34px', maxWidth: '145px', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{ display: 'none', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#002147' }}>Imperial College</span>
                    </div>
                  </div>
                )
              },
              // 16. RCCD
              {
                id: 'rccd-dup',
                render: (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #0284C7 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '0.9rem' }}>
                      💧
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 900, color: '#0369A1', lineHeight: 1.1 }}>RCCD</span>
                    </div>
                  </div>
                )
              }
            ].map((cl, cIdx) => (
              <div key={cIdx} className="client-logo-card">
                {cl.render}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION (ADVANCED LIGHT THEME WITH CURLY BRACKET DIVIDER & GLOWING INTERACTION) */}
      <section className="section-light" style={{ padding: 'clamp(40px, 6vw, 80px) clamp(16px, 4vw, 24px)', background: '#F6F9FB' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
          
          <style>{`
            .what-we-do-bracket-wrapper {
              display: block;
            }

            .what-we-do-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: clamp(32px, 5vw, 64px);
              align-items: start;
              margin-top: 4px;
              width: 100%;
            }

            .what-we-do-col {
              display: flex;
              flex-direction: column;
              min-width: 0;
              width: 100%;
            }

            .what-we-do-heading {
              font-family: var(--font-universal);
              font-size: clamp(1.5rem, 2.5vw, 1.95rem);
              font-weight: 600;
              color: var(--text-heading-dark, #0A1D3D);
              margin: 0 0 16px 0;
              letter-spacing: -0.03em;
              line-height: 1.2;
            }

            .what-we-do-btn-text {
              font-family: var(--font-universal);
              font-size: clamp(1.02rem, 1.8vw, 1.16rem);
              font-weight: 600;
              letter-spacing: -0.01em;
              transition: color 0.2s ease;
            }

            .what-we-do-bullet-text {
              font-family: var(--font-universal);
              margin: 0;
              font-size: clamp(0.9rem, 1.5vw, 0.96rem);
              color: var(--text-muted-gray, #475569);
              line-height: 1.6;
              font-weight: 400;
            }

            @media (max-width: 768px) {
              .what-we-do-bracket-wrapper {
                display: none;
              }

              .what-we-do-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
                margin-top: 24px !important;
              }

              .what-we-do-heading {
                font-size: 1.65rem !important;
                margin-bottom: 12px !important;
              }

              .what-we-do-btn-text {
                font-size: 1.08rem !important;
              }

              .what-we-do-bullet-text {
                font-size: 0.94rem !important;
                line-height: 1.6 !important;
              }
            }
          `}</style>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <h2 style={{
              fontSize: 'clamp(2.1rem, 5vw, 3rem)',
              color: 'var(--text-heading-dark, #0A1D3D)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0',
              fontFamily: 'var(--font-universal)'
            }}>
              What We <span style={{ color: 'var(--color-orange, #FF6A00)' }}>Do</span>
            </h2>
          </div>

          {/* Branching Curly Bracket Connecting Line (Desktop) */}
          <div className="what-we-do-bracket-wrapper">
            <BranchingConnectingLine />
          </div>

          {/* Responsive Layout: 2 Columns on Desktop, Full-Width Stacked on Mobile */}
          <div className="what-we-do-grid">

            {/* PART 1: DATA */}
            <div className="what-we-do-col">
              <h3 className="what-we-do-heading">
                {whatWeDo.data.title}
              </h3>

              {/* Part 1 Items */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {whatWeDo.data.items.map((item, idx) => {
                  const isOpen = openDataIndex === idx;
                  return (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                      <button
                        onClick={() => setOpenDataIndex(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          padding: '16px 0',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          outline: 'none',
                          textAlign: 'left'
                        }}
                      >
                        <span
                          className="what-we-do-btn-text"
                          style={{
                            color: isOpen ? '#00B5E2' : 'var(--text-heading-dark, #0A1D3D)'
                          }}
                        >
                          {item.title}
                        </span>

                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isOpen ? 'rgba(0, 181, 226, 0.1)' : 'rgba(10, 29, 61, 0.04)',
                          border: '1px solid rgba(10, 29, 61, 0.06)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'all 0.25s ease',
                          flexShrink: 0
                        }}>
                          <ChevronDown size={16} color={isOpen ? '#00B5E2' : '#64748B'} />
                        </div>
                      </button>

                      {isOpen && (
                        <div style={{
                          padding: '0 0 16px 8px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          animation: 'fadeIn 0.25s ease'
                        }}>
                          {item.bullets.map((b, bIdx) => (
                            <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <span style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: '#00B5E2',
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <p className="what-we-do-bullet-text">
                                {b}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <InteractiveGlowLine height={10} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PART 2: GEOSPATIAL INTELLIGENCE */}
            <div className="what-we-do-col">
              <h3 className="what-we-do-heading">
                {whatWeDo.intelligence.title}
              </h3>

              {/* Part 2 Items */}
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {whatWeDo.intelligence.items.map((item, idx) => {
                  const isOpen = openGeoIndex === idx;
                  return (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                      <button
                        onClick={() => setOpenGeoIndex(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          padding: '16px 0',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          outline: 'none',
                          textAlign: 'left'
                        }}
                      >
                        <span
                          className="what-we-do-btn-text"
                          style={{
                            color: isOpen ? 'var(--color-orange, #FF6A00)' : 'var(--text-heading-dark, #0A1D3D)'
                          }}
                        >
                          {item.title}
                        </span>

                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isOpen ? 'rgba(255, 106, 0, 0.1)' : 'rgba(10, 29, 61, 0.04)',
                          border: '1px solid rgba(10, 29, 61, 0.06)',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'all 0.25s ease',
                          flexShrink: 0
                        }}>
                          <ChevronDown size={16} color={isOpen ? 'var(--color-orange, #FF6A00)' : '#64748B'} />
                        </div>
                      </button>

                      {isOpen && (
                        <div style={{
                          padding: '0 0 16px 8px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          animation: 'fadeIn 0.25s ease'
                        }}>
                          {item.bullets.map((b, bIdx) => (
                            <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <span style={{
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                                background: 'var(--color-orange, #FF6A00)',
                                marginTop: '8px',
                                flexShrink: 0
                              }} />
                              <p className="what-we-do-bullet-text">
                                {b}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <InteractiveGlowLine height={10} />
                    </div>
                  );
                })}
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
        padding: 'clamp(50px, 7vw, 90px) clamp(16px, 4vw, 24px)', 
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
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', 
            fontWeight: 500, 
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(32px, 5vw, 60px)',
            color: 'var(--text-heading-dark)'
          }}>
            OUR COMMITMENT TO <span style={{ color: 'var(--color-orange)' }}>SDGs</span>
          </h2>
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: 'clamp(16px, 3vw, 32px)',
            paddingBottom: '24px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {[7, 9, 11, 12, 13, 14, 15, 4, 6, 7].map((num, i) => (
              <div key={i} style={{
                flex: '0 0 auto',
                width: 'clamp(120px, 24vw, 160px)',
                height: 'clamp(120px, 24vw, 160px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                cursor: 'pointer',
                borderRadius: '24px',
                background: '#FFFFFF',
                border: '1px solid rgba(27, 54, 73, 0.1)',
                boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.08)',
                transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.04)';
                e.currentTarget.style.border = '1px solid var(--color-orange)';
                e.currentTarget.style.boxShadow = '0 25px 45px -10px rgba(255, 106, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.border = '1px solid rgba(27, 54, 73, 0.1)';
                e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(27, 54, 73, 0.08)';
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #0A1D3D 0%, #1B3649 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>
                  SDG {num}
                </div>
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
