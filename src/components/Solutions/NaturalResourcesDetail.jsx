import React, { useState } from 'react'
import { 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  Sparkles
} from 'lucide-react'

const services = [
  {
    id: "water",
    title: "Water Body Rejuvenation",
    subtitle: "Reviving lakes, ponds & rivers with science-driven insight",
    description:
      "Water bodies sustain ecosystems, communities, and groundwater systems, yet many are shrinking or degraded. We combine drone mapping, satellite monitoring, and AI-driven hydrological analysis to assess waterbody health and guide precise, science-backed restoration.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900&h=500&fit=crop&auto=format",
    accent: "#0284C7",
    accentLight: "#E0F2FE",
    points: [
      "High-resolution mapping of water spread, depth & salinity",
      "Detection of encroachments & buffer-zone violations",
      "Pollution, turbidity & algal bloom monitoring",
      "Inflow-outflow balance & conflict mapping",
    ],
    tags: [
      "Reservoir Water Storage",
      "Groundwater Recharge",
      "Quantify Ecosystem Health",
      "Climate Resilience",
    ],
  },
  {
    id: "wetland",
    title: "Wetland Conservation",
    subtitle: "Protecting fragile ecosystems with geospatial precision",
    description:
      "Wetlands regulate floods, support biodiversity, and stabilize climate systems. We use drone surveys, satellite time-series, and AI habitat analysis to monitor wetland health, detect early threats, and guide long-term conservation.",
    image:
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&q=80&w=900",
    accent: "#0D9488",
    accentLight: "#CCFBF1",
    points: [
      "Boundary change & encroachment detection",
      "Vegetation & animal health assessment",
      "Seasonal hydrology & water balance mapping",
      "Pollution & eutrophication estimation",
    ],
    tags: [
      "Forest Assessment",
      "Study Ecological Driven Extinction",
      "Wetlands Dry Protection",
      "Flood Buffering",
    ],
  },
  {
    id: "mining",
    title: "Mining Activity Assessment",
    subtitle: "Ensuring transparency across mining operations",
    description:
      "Unregulated mining degrades landforms, water resources, and ecosystems. We integrate drone surveys, satellite change-detection, and telemetric analysis to identify mining activity, quantify extraction, and generate legally defensible evidence.",
    image:
      "https://images.unsplash.com/photo-1483638867541-6d87ce7f2d4d?w=900&h=500&fit=crop&auto=format",
    accent: "#C2410C",
    accentLight: "#FFEDD5",
    points: [
      "Volumetric extraction & stockpile estimation",
      "Species, hydrology change monitoring",
      "Structural & material movement tracking",
      "Environmental compliance & lease boundary auditing",
    ],
    tags: [
      "Study Stop Mining Activities",
      "Restore Land & Water Degradation",
      "Mining Infrastructure Documentation",
      "Sustainable Extraction Planning",
    ],
  },
  {
    id: "forest",
    title: "Forest Conservation",
    subtitle: "Protecting biodiversity with landscape-level insight",
    description:
      "Forests are under constant pressure from climate change and human activity. We use drones, satellites, thermal sensors, and AI models to monitor forest health and identify areas requiring urgent intervention.",
    image:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=900&h=500&fit=crop&auto=format",
    accent: "#16A34A",
    accentLight: "#DCFCE7",
    points: [
      "Forest cover & vegetation health mapping",
      "Early fire, degradation & stress alerts",
      "Long-term canopy-level monitoring",
      "Canopy height modeling & biomass quantification",
    ],
    tags: [
      "Improved Forest Health",
      "Study Threat Detection",
      "Smarter Conservation Planning",
      "Stronger Ecosystem Resilience",
    ],
  },
]

const capabilities = [
  "Biomass Estimation",
  "Hydrological Modeling",
  "Land Use Analysis",
  "Conservation Reports",
]

function ServiceCard({ service }) {
  return (
    <div
      id={`service-${service.id}`}
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: '#E2DDD6',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid #E2DDD6',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '240px', flexShrink: 0 }}>
        <img
          src={service.image}
          alt={service.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.7s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2
          style={{
            fontSize: '1.45rem',
            fontWeight: 400,
            marginBottom: '6px',
            lineHeight: 1.25,
            letterSpacing: '-0.04em',
            color: '#1C1C1A'
          }}
        >
          {service.title}
        </h2>
        <p style={{ fontSize: '0.92rem', marginBottom: '14px', color: service.accent, fontWeight: 400, minHeight: '22px' }}>
          {service.subtitle}
        </p>
        <p
          style={{
            fontSize: '0.94rem',
            lineHeight: 1.65,
            marginBottom: '20px',
            color: '#5A5550',
            fontWeight: 400,
            minHeight: '75px'
          }}
        >
          {service.description}
        </p>

        {/* WHY GEOSPATIAL INTELLIGENCE */}
        <div
          style={{
            borderRadius: '14px',
            padding: '18px 20px',
            marginBottom: '20px',
            backgroundColor: '#FAF8F5',
            border: '1px solid #EDE8E1',
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <p
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '12px',
              color: service.accent
            }}
          >
            Why Geospatial Intelligence Matters
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {service.points.map((point, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    marginTop: '6px',
                    flexShrink: 0,
                    backgroundColor: service.accent
                  }}
                />
                <span style={{ fontSize: '0.86rem', lineHeight: 1.55, color: '#5A5550', fontWeight: 400 }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', paddingTop: '6px' }}>
          {service.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.78rem',
                padding: '5px 12px',
                borderRadius: '9999px',
                border: `1px solid ${service.accent}40`,
                color: service.accent,
                backgroundColor: service.accentLight,
                fontWeight: 400,
                letterSpacing: '0.01em'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function NaturalResourcesDetail({ handleBack, setActiveTab }) {
  const [activeTabThumb, setActiveTabThumb] = useState(null)

  const scrollToService = (id) => {
    setActiveTabThumb(id)
    const element = document.getElementById(`service-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#F8FAFC',
        color: '#1C1C1A',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* 1. TOP HERO BANNER */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '260px',
          height: 'clamp(240px, 32vw, 320px)',
          backgroundImage: `url('https://static.wixstatic.com/media/9a5348_e81facd97b7f43bea6b80a3251322a7b~mv2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(0, 181, 226, 0.25)'
        }}
      >
        {/* Dark overlay for contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.58) 100%)'
          }}
        />

        {/* Back button on left */}
        <button
          onClick={handleBack}
          style={{
            position: 'absolute',
            top: '20px',
            left: '24px',
            background: 'rgba(10, 29, 61, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#FFFFFF',
            padding: '8px 16px',
            borderRadius: '10px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: '0.88rem',
            zIndex: 10,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-orange)'
            e.currentTarget.style.borderColor = 'var(--color-orange)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(10, 29, 61, 0.75)'
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <ArrowLeft size={16} /> Back to Solutions
        </button>

        {/* Center Title Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 5,
            textAlign: 'center',
            padding: '0 20px',
            maxWidth: '1000px'
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.8rem)',
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              lineHeight: 1.25,
              margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.7)'
            }}
          >
            <span style={{ color: '#FFFFFF', display: 'block', marginBottom: '4px', fontWeight: 400 }}>
              NATURAL RESOURCE CONSERVATION &
            </span>
            <span style={{ color: '#00FFC8', display: 'block', fontWeight: 400 }}>
              MONITORING
            </span>
          </h1>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '56px 24px 44px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left: Text Content */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.04em',
                marginBottom: '20px',
                color: '#1C1C1A'
              }}
            >
              Resource{' '}
              <em
                style={{
                  fontStyle: 'normal',
                  color: '#FF6A00',
                  fontWeight: 400
                }}
              >
                Monitoring
              </em>{' '}
              at Landscape Scale
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '28px',
                color: '#6B6560',
                maxWidth: '540px',
                fontWeight: 400
              }}
            >
              Combining drone surveys, satellite imagery, and AI analytics to
              monitor, protect, and restore Earth's most vital ecosystems.
            </p>

            {/* Capabilities pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  style={{
                    fontSize: '0.82rem',
                    padding: '7px 16px',
                    borderRadius: '9999px',
                    border: '1px solid #D1D5DB',
                    color: '#374151',
                    backgroundColor: '#FFFFFF',
                    fontWeight: 400,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                  }}
                >
                  {cap}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  const el = document.getElementById('services-grid-section')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  fontSize: '0.94rem',
                  padding: '13px 28px',
                  borderRadius: '12px',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, var(--color-orange) 0%, #E65000 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Explore Services <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20project%20for%20Natural%20Resource%20Management%20and%20Conservation."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.94rem',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontWeight: 500,
                  border: '1.5px solid var(--color-orange)',
                  color: 'var(--color-orange)',
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-orange)'
                  e.currentTarget.style.color = '#FFFFFF'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF'
                  e.currentTarget.style.color = 'var(--color-orange)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Inquire for Project <Send size={15} />
              </a>
            </div>
          </div>

          {/* Right: 2x2 thumbnail grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px'
            }}
          >
            {services.map((svc) => (
              <div
                key={svc.id}
                onClick={() => scrollToService(svc.id)}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4/3',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                  border: activeTabThumb === svc.id ? `2px solid var(--color-orange)` : '1px solid rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 14px 28px rgba(0,0,0,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)'
                }}
              >
                <img
                  src={svc.image}
                  alt={svc.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)'
                  }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
                  <p
                    style={{
                      color: '#FFFFFF',
                      fontSize: '0.88rem',
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25
                    }}
                  >
                    {svc.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION DIVIDER */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E2DDD6' }} />
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#9B9590'
            }}
          >
            Our Specialized Services
          </p>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E2DDD6' }} />
        </div>
      </div>

      {/* 4. SERVICE CARDS GRID - 2x2 BALANCED LAYOUT */}
      <section
        id="services-grid-section"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '48px 24px 64px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {services.map((svc) => (
            <ServiceCard key={svc.id} service={svc} />
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div
          style={{
            marginTop: '48px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2DDD6',
            borderRadius: '24px',
            padding: '40px 32px',
            textAlign: 'center',
            boxShadow: '0 16px 40px rgba(0,0,0,0.06)'
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              color: '#1C1C1A',
              marginBottom: '12px'
            }}
          >
            Need a Custom UAV Deployment for{' '}
            <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Natural Resource Management</span>?
          </h3>

          <p
            style={{
              color: '#6B6560',
              maxWidth: '680px',
              margin: '0 auto 28px',
              fontSize: '1rem',
              lineHeight: 1.65,
              fontWeight: 400
            }}
          >
            Our team of certified drone pilots, GIS analysts, and remote sensing
            engineers is ready to execute your requirements anywhere across the
            country.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20connect%20with%20your%20GIS%20Experts%20for%20Natural%20Resource%20Management."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '13px 32px',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: '#FFFFFF',
                background: 'linear-gradient(135deg, var(--color-orange) 0%, #E65000 100%)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Contact Our GIS Experts <ArrowRight size={16} />
            </a>

            <button
              onClick={handleBack}
              style={{
                padding: '13px 26px',
                fontSize: '0.92rem',
                fontWeight: 500,
                color: '#4A4540',
                backgroundColor: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF'
                e.currentTarget.style.borderColor = 'var(--color-orange)'
                e.currentTarget.style.color = 'var(--color-orange)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC'
                e.currentTarget.style.borderColor = '#CBD5E1'
                e.currentTarget.style.color = '#4A4540'
              }}
            >
              Browse Other Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
