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
import pointcloudAfterImg from '../../assets/pointcloudafter.png'
import thermalAfterImg from '../../assets/thermal_after.png'
import geoCatalogImg from '../../assets/geo_catalog_ganga.png'

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

// Custom High-Tech Vector Icons for Data Streams
function DroneSurveyIcon({ size = 22, color = 'currentColor', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Central Drone Chassis */}
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      {/* 4 Diagonal Motor Arms */}
      <line x1="8.5" y1="8.5" x2="4.5" y2="4.5" />
      <line x1="15.5" y1="8.5" x2="19.5" y2="4.5" />
      <line x1="8.5" y1="15.5" x2="4.5" y2="19.5" />
      <line x1="15.5" y1="15.5" x2="19.5" y2="19.5" />
      {/* 4 Rotors / Propellers */}
      <circle cx="4.5" cy="4.5" r="1.5" />
      <line x1="2" y1="4.5" x2="7" y2="4.5" />
      <circle cx="19.5" cy="4.5" r="1.5" />
      <line x1="17" y1="4.5" x2="22" y2="4.5" />
      <circle cx="4.5" cy="19.5" r="1.5" />
      <line x1="2" y1="19.5" x2="7" y2="19.5" />
      <circle cx="19.5" cy="19.5" r="1.5" />
      <line x1="17" y1="19.5" x2="22" y2="19.5" />
    </svg>
  )
}

function SatelliteOrbitIcon({ size = 22, color = 'currentColor', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Central Satellite Body */}
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <circle cx="12" cy="12" r="1.2" fill={color} />
      {/* Left Solar Panel Array */}
      <rect x="1.5" y="9.5" width="6" height="5" rx="0.5" />
      <line x1="4.5" y1="9.5" x2="4.5" y2="14.5" />
      <line x1="7.5" y1="12" x2="9" y2="12" />
      {/* Right Solar Panel Array */}
      <rect x="16.5" y="9.5" width="6" height="5" rx="0.5" />
      <line x1="19.5" y1="9.5" x2="19.5" y2="14.5" />
      <line x1="15" y1="12" x2="16.5" y2="12" />
      {/* Sensor Downlink & Earth Horizon */}
      <path d="M10.5 15L9 17.5H15L13.5 15" />
      <path d="M7 21.5C10 23 14 23 17 21.5" strokeDasharray="1.5 1.5" />
    </svg>
  )
}

function IoTSensorProbeIcon({ size = 22, color = 'currentColor', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* In-situ Telemetry Node Body */}
      <rect x="7.5" y="8" width="9" height="7" rx="1.5" />
      {/* Antenna & Radio Broadcast Waves */}
      <line x1="12" y1="8" x2="12" y2="3.5" />
      <circle cx="12" cy="3" r="1" fill={color} />
      <path d="M8 2.5C10.5 1 13.5 1 16 2.5" />
      {/* Ground Surface Line */}
      <line x1="3" y1="17.5" x2="21" y2="17.5" strokeDasharray="2 2" opacity="0.6" />
      {/* In-Ground Sensor Probe Needles */}
      <line x1="10" y1="15" x2="10" y2="22" />
      <line x1="14" y1="15" x2="14" y2="22" />
    </svg>
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

  // Interactive Tab State & Stream Data
  const [activeTabId, setActiveTabId] = useState('drone')
  const [selectedViews, setSelectedViews] = useState({
    drone: 0,
    satellite: 0,
    iot: 0
  })

  const streamTabs = [
    {
      id: 'drone',
      icon: DroneSurveyIcon,
      title: 'UAV-Based Data Acquisition',
      subtitle: 'Centimeter-Precision Airborne Remote Sensing',
      tabLabel: 'UAV Data Acquisition',
      tabSub: 'LiDAR, Multispectral & Photogrammetry',
      ctaText: 'Explore UAV Data Acquisition',
      desc: 'We use survey-grade multi-rotor and fixed-wing UAVs to capture high-resolution data across land, agriculture, infrastructure, and water environments. Our systems integrate aerial imaging, LiDAR, multispectral, and thermal sensors to generate 3D point clouds, elevation models, orthomosaics, and GIS-ready datasets for detailed mapping and analysis.',
      features: [
        { label: 'High-Resolution Aerial Mapping', detail: 'Centimeter-accurate imagery for boundaries, terrain, and infrastructure.' },
        { label: 'LiDAR & Elevation Models', detail: 'Dense 3D point clouds and DEM/DSM for bare-earth & structure heights.' },
        { label: 'Multispectral & Thermal Imaging', detail: 'Vegetation vigor, crop stress, moisture deficiency, and surface heat.' },
        { label: 'Automated Mission Processing', detail: 'Autonomous flight corridors with rapid GIS-ready orthomosaic delivery.' }
      ],
      stats: [
        { label: 'Mapping Resolution', value: 'Sub-centimeter level' },
        { label: 'Sensor Payloads', value: 'LiDAR • RGB • MS • Thermal' },
        { label: 'Survey Coverage', value: 'Up to 2,500+ ha/day' }
      ],
      views: [
        {
          id: 'uav-capture',
          label: 'Airborne UAV Platform',
          shortLabel: 'Airborne RGB',
          subLabel: 'High-Resolution RGB Capture',
          tag: 'AERIAL OPTICAL',
          img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop',
          caption: 'Survey-grade drone capturing high-resolution aerial imagery for mapping terrain, infrastructure, and agricultural boundaries.'
        },
        {
          id: 'uav-lidar',
          label: 'LiDAR 3D Point Cloud & Elevation (DEM/DSM)',
          shortLabel: '3D LiDAR / DEM',
          subLabel: 'Classified Terrain & Canopy Model',
          tag: '3D ELEVATION / DSM',
          img: pointcloudAfterImg,
          caption: 'LiDAR 3D point cloud penetrating vegetation to generate bare-earth digital elevation models and structure heights.'
        },
        {
          id: 'uav-thermal',
          label: 'Multispectral & Thermal Imaging',
          shortLabel: 'Thermal & MS',
          subLabel: 'Vegetation & Temperature Scan',
          tag: 'RADIOMETRIC & MS',
          img: thermalAfterImg,
          caption: 'Multispectral and thermal imaging assessing crop health, vegetation stress, moisture levels, and surface temperatures.'
        }
      ]
    },
    {
      id: 'satellite',
      icon: SatelliteOrbitIcon,
      title: 'Satellite Remote Sensing Feeds',
      subtitle: 'Constellation Optical & Radar Earth Monitoring',
      tabLabel: 'Satellite Remote Sensing',
      tabSub: 'Optical & SAR Constellations',
      ctaText: 'Request Satellite Analysis',
      desc: 'We process live optical and radar feeds from global satellite constellations. This allows us to track large-scale environmental changes, river flooding, and agricultural seasons across entire districts and states—even through monsoon clouds and at night.',
      features: [
        { label: 'All-Weather Radar (SAR)', detail: 'Cloud-penetrating radar to track active floodwaters and inundation.' },
        { label: 'Frequent Revisit Monitoring', detail: 'Regular optical passes to monitor crop cycles and environmental shifts.' },
        { label: '30+ Year Historical Archives', detail: 'Long-term baselines to analyze multi-decadal climate & drought patterns.' },
        { label: 'Regional Land Classification', detail: 'Automated classification of forests, agriculture, and urban boundaries.' }
      ],
      stats: [
        { label: 'Revisit Cadence', value: 'Every 1 to 3 Days' },
        { label: 'Sensor Coverage', value: 'Optical & Radar (SAR)' },
        { label: 'Coverage Scale', value: 'District & National' }
      ],
      views: [
        {
          id: 'sat-orbit',
          label: 'Planetary Earth Observation',
          shortLabel: 'Optical Sat',
          subLabel: 'Constellation Multi-Spectral',
          tag: 'EARTH OBSERVATION',
          img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
          caption: 'Constellation satellite network capturing repeat optical snapshots of regional terrain and agricultural basins.'
        },
        {
          id: 'sat-sar',
          label: 'SAR Radar Flood & Moisture Map',
          shortLabel: 'SAR Radar Flood',
          subLabel: 'All-Weather Inundation',
          tag: 'SAR RADAR C-BAND',
          img: floodafterImg,
          caption: 'Radar satellite pulses penetrating storm clouds to detect flooded acreage and active river boundary expansion.'
        },
        {
          id: 'sat-cir',
          label: 'Color-Infrared (CIR) Canopy Vigor',
          shortLabel: 'CIR False-Color',
          subLabel: 'False-Color Biomass Index',
          tag: 'MULTISPECTRAL NIR',
          img: cirAfterImg,
          caption: 'Near-infrared color mapping that turns healthy vegetative crop canopies bright red to separate crops from bare ground.'
        }
      ]
    },
    {
      id: 'iot',
      icon: IoTSensorProbeIcon,
      title: 'IoT Ground Sensor Networks',
      subtitle: 'Real-Time Field Telemetry & WebGIS Synchronization',
      tabLabel: 'IoT Ground Telemetry',
      tabSub: 'In-Situ Probes & Real-Time Sync',
      ctaText: 'Connect Field Sensor Stream',
      desc: 'We install in-situ ground sensors, automated weather stations, and water stream gauges directly in the field. These devices continuously send live readings to our MapZest WebGIS platform, validating and calibrating our aerial drone and satellite maps with real-time ground truth.',
      features: [
        { label: 'In-Situ Soil & Root Probes', detail: 'Continuous root-depth moisture, salinity, and temperature telemetry.' },
        { label: 'Automated Water Gauges', detail: 'Ultrasonic river and reservoir level tracking for early flood alerts.' },
        { label: 'Solar Microclimate Stations', detail: 'Localized rainfall, solar radiation, humidity, and wind monitoring.' },
        { label: 'MapZest WebGIS Sync', detail: 'Live sensor feeds streaming directly into interactive spatial layers.' }
      ],
      stats: [
        { label: 'Live Ingest Speed', value: '< 5 Seconds' },
        { label: 'Supported Sensors', value: 'Soil, Water & Weather' },
        { label: 'Platform Connection', value: 'Live MapZest Sync' }
      ],
      views: [
        {
          id: 'iot-board',
          label: 'In-Situ Edge Telemetry Unit',
          shortLabel: 'Edge Telemetry',
          subLabel: 'Hardware Microcontroller',
          tag: 'HARDWARE TELEMETRY',
          img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
          caption: 'Solar-powered ground station transmitting real-time field probe readings via 4G / LoRaWAN to cloud servers.'
        },
        {
          id: 'iot-soil',
          label: 'Soil Moisture & Agronomic Feed',
          shortLabel: 'Soil Moisture',
          subLabel: 'Ground-Truth Calibration',
          tag: 'GROUND-TRUTH SOIL',
          img: soilafterImg,
          caption: 'Map layer showing exact soil moisture percentages across the parcel, calibrated against real in-ground probes.'
        },
        {
          id: 'iot-webgis',
          label: 'MapZest WebGIS Live Stream',
          shortLabel: 'MapZest WebGIS',
          subLabel: 'Real-Time GIS Integration',
          tag: 'MAPZEST GIS SYNC',
          img: geoCatalogImg,
          caption: 'Interactive MapZest WebGIS dashboard showing real-time sensor dots alongside drone and satellite map layers.'
        }
      ]
    }
  ]

  const currentStream = streamTabs.find(s => s.id === activeTabId) || streamTabs[0]
  const currentViewIdx = selectedViews[activeTabId] ?? 0
  const currentView = currentStream.views[currentViewIdx] || currentStream.views[0]

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* HERO SECTION (NAVY BLUE) */}
      <section style={{
        position: 'relative',
        padding: 'clamp(60px, 8vw, 90px) clamp(16px, 4vw, 24px) clamp(50px, 7vw, 80px)',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
        borderBottom: '1px solid rgba(0, 181, 226, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.04em',
            marginBottom: '16px'
          }}>
            Data Acquisition & <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Geospatial Applications</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            maxWidth: '680px',
            margin: '0 auto clamp(24px, 4vw, 36px)',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            lineHeight: 1.65,
            padding: '0 8px'
          }}>
            UAV, satellite, and IoT data integrated for advanced geospatial analysis, monitoring, and real-world applications.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              style={{
                padding: 'clamp(12px, 2.5vw, 14px) clamp(22px, 4vw, 34px)',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                background: 'linear-gradient(135deg, var(--color-orange) 0%, #E65000 100%)',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 10px 25px -5px rgba(255, 106, 0, 0.4)',
                transition: 'all 0.3s ease',
                width: 'auto',
                maxWidth: '100%'
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

      {/* 3 CORE DATA STREAMS: INTERACTIVE TABBED EXPLORER */}
      <section style={{
        padding: 'clamp(40px, 6vw, 85px) 0 clamp(36px, 5vw, 70px) 0',
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(27, 54, 73, 0.08)'
      }}>
        {/* Section Header */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)', textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 40px)' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 3.2rem)',
            color: 'var(--text-heading-dark)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 1.2,
            marginBottom: '12px',
            fontFamily: 'var(--font-universal)'
          }}>
            Drone, Satellite & <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>IoT Data Streams</span>
          </h2>

          <p style={{
            fontSize: 'clamp(0.92rem, 2vw, 1.1rem)',
            color: 'var(--text-muted-gray)',
            maxWidth: '740px',
            margin: '0 auto',
            lineHeight: 1.65,
            fontFamily: 'var(--font-universal)'
          }}>
            Integrating UAV, satellite, and real-time ground IoT data for comprehensive spatial insights.
          </p>
        </div>

        {/* INTERACTIVE 3-STREAM TAB NAVIGATOR */}
        <div style={{ maxWidth: '1280px', margin: '0 auto clamp(20px, 3vw, 32px) auto', padding: '0 clamp(16px, 4vw, 24px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '10px',
            background: '#F1F5F9',
            padding: '6px',
            borderRadius: '16px',
            border: '1px solid rgba(27, 54, 73, 0.08)'
          }}>
            {streamTabs.map((tab) => {
              const IconComp = tab.icon
              const isActive = activeTabId === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: 'clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 18px)',
                    borderRadius: '12px',
                    border: isActive ? '1px solid rgba(255, 106, 0, 0.4)' : '1px solid transparent',
                    background: isActive ? '#FFFFFF' : 'transparent',
                    boxShadow: isActive ? '0 8px 20px -6px rgba(10, 29, 61, 0.12), 0 0 0 1px rgba(255, 106, 0, 0.2)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    textAlign: 'left',
                    width: '100%',
                    minWidth: 0
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(255, 106, 0, 0.12)' : 'rgba(10, 29, 61, 0.06)',
                    color: isActive ? 'var(--color-orange, #FF6A00)' : '#475569',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s ease'
                  }}>
                    <IconComp size={20} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
                    <span style={{
                      fontSize: 'clamp(0.88rem, 2vw, 0.96rem)',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? '#0A1D3D' : '#334155',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.25,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {tab.tabLabel}
                    </span>
                    <span style={{
                      fontSize: 'clamp(0.72rem, 1.8vw, 0.78rem)',
                      color: isActive ? 'var(--color-orange, #FF6A00)' : '#64748B',
                      fontWeight: 500,
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}>
                      {tab.tabSub}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* STREAM DASHBOARD CONTAINER (SPLIT: SPECS PANEL + VISUAL COMMAND CENTER) */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(20px, 3.5vw, 36px)',
            background: '#FFFFFF',
            borderRadius: 'clamp(18px, 3vw, 24px)',
            border: '1px solid rgba(27, 54, 73, 0.1)',
            boxShadow: '0 15px 40px -10px rgba(27, 54, 73, 0.08)',
            padding: 'clamp(18px, 3.5vw, 32px)',
            alignItems: 'start'
          }}>
            {/* LEFT COLUMN: SPECS & TECHNICAL INTELLIGENCE */}
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, width: '100%' }}>
              {/* Title & Subtitle */}
              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.8vw, 1.95rem)',
                fontWeight: 600,
                color: '#0A1D3D',
                margin: '0 0 4px 0',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                fontFamily: 'var(--font-universal)'
              }}>
                {currentStream.title}
              </h3>

              <p style={{
                color: '#00B5E2',
                fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                fontWeight: 600,
                margin: '0 0 12px 0',
                fontFamily: 'var(--font-universal)'
              }}>
                {currentStream.subtitle}
              </p>

              <p style={{
                color: '#475569',
                fontSize: 'clamp(0.88rem, 2vw, 0.93rem)',
                lineHeight: 1.62,
                margin: '0 0 clamp(16px, 3vw, 22px) 0',
                fontWeight: 400,
                fontFamily: 'var(--font-universal)'
              }}>
                {currentStream.desc}
              </p>

              {/* Key Capabilities (2x2 Compact Cards) */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}>
                  Key Capabilities
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
                  gap: '8px'
                }}>
                  {currentStream.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid rgba(27, 54, 73, 0.08)',
                        transition: 'all 0.2s ease',
                        minWidth: 0
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: 'clamp(0.8rem, 1.8vw, 0.84rem)',
                        fontWeight: 700,
                        color: '#0A1D3D',
                        lineHeight: 1.3
                      }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--color-orange, #FF6A00)', flexShrink: 0 }} />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{feat.label}</span>
                      </div>
                      <p style={{
                        fontSize: 'clamp(0.72rem, 1.6vw, 0.75rem)',
                        color: '#64748B',
                        margin: '1px 0 0 0',
                        lineHeight: 1.4
                      }}>
                        {feat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* STATS ROW & CTA ACTION */}
              <div style={{ marginTop: '4px' }}>
                <div style={{
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px'
                }}>
                  Technical Specifications
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 90px), 1fr))',
                  gap: '8px',
                  padding: '12px 14px',
                  backgroundColor: '#F8FAFC',
                  borderRadius: '12px',
                  border: '1px solid rgba(27, 54, 73, 0.08)',
                  marginBottom: '16px'
                }}>
                  {currentStream.stats.map((st, stIdx) => (
                    <div key={stIdx} style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                      <span style={{
                        fontSize: 'clamp(0.62rem, 1.6vw, 0.68rem)',
                        color: '#64748B',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {st.label}
                      </span>
                      <span style={{
                        fontSize: 'clamp(0.8rem, 2vw, 0.86rem)',
                        color: '#0A1D3D',
                        fontWeight: 700,
                        marginTop: '3px',
                        lineHeight: 1.3
                      }}>
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={() => {
                      if (setActiveTab) setActiveTab('contact')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 20px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--color-orange, #FF6A00)',
                      border: 'none',
                      color: '#FFFFFF',
                      fontSize: 'clamp(0.88rem, 2vw, 0.94rem)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: '0 8px 20px rgba(255, 106, 0, 0.28)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#E65000'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-orange, #FF6A00)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {currentStream.ctaText || 'Request Dataset'} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: MULTI-VIEW VISUAL COMMAND CENTER */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0, width: '100%' }}>
              {/* MAIN DISPLAY SCREEN */}
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#050D1A',
                border: '1px solid rgba(27, 54, 73, 0.12)',
                boxShadow: '0 10px 30px rgba(10, 29, 61, 0.1)',
                aspectRatio: '16 / 10',
                minHeight: '220px',
                maxHeight: '360px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Background Image */}
                <img
                  key={currentView.img}
                  src={currentView.img}
                  alt={currentView.label}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'opacity 0.35s ease'
                  }}
                  loading="eager"
                />

                {/* Slim Bottom Title Bar */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(5, 13, 26, 0.75) 100%)'
                }}>
                  <div style={{
                    color: '#FFFFFF',
                    fontSize: 'clamp(0.85rem, 2vw, 0.92rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2
                  }}>
                    {currentView.label}
                  </div>
                </div>
              </div>

              {/* 3-THUMBNAIL MULTI-VIEW SELECTOR STRIP */}
              <div style={{ width: '100%', minWidth: 0 }}>
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#64748B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>Select Output View:</span>
                  <span style={{ color: 'var(--color-orange)', fontWeight: 600, fontSize: '0.72rem' }}>
                    {currentViewIdx + 1} / {currentStream.views.length}
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '8px',
                  width: '100%'
                }}>
                  {currentStream.views.map((v, vIdx) => {
                    const isSelected = currentViewIdx === vIdx

                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedViews(prev => ({ ...prev, [activeTabId]: vIdx }))}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '5px',
                          padding: '5px',
                          borderRadius: '10px',
                          background: isSelected ? 'rgba(255, 106, 0, 0.06)' : '#F8FAFC',
                          border: isSelected ? '2px solid var(--color-orange, #FF6A00)' : '1px solid rgba(27, 54, 73, 0.1)',
                          boxShadow: isSelected ? '0 4px 10px rgba(255, 106, 0, 0.2)' : 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'center',
                          minWidth: 0,
                          width: '100%',
                          overflow: 'hidden'
                        }}
                      >
                        {/* Thumbnail Image Container */}
                        <div style={{
                          width: '100%',
                          height: 'clamp(46px, 10vw, 56px)',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          position: 'relative',
                          backgroundColor: '#0A1D3D'
                        }}>
                          <img
                            src={v.img}
                            alt={v.shortLabel || v.label}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              opacity: isSelected ? 1 : 0.75,
                              transition: 'opacity 0.2s ease'
                            }}
                          />
                        </div>

                        {/* Clean Short Label */}
                        <div style={{
                          fontSize: 'clamp(0.68rem, 1.7vw, 0.74rem)',
                          fontWeight: isSelected ? 700 : 600,
                          color: isSelected ? 'var(--color-orange, #FF6A00)' : '#334155',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          padding: '0 1px 1px',
                          lineHeight: 1.2
                        }}>
                          {v.shortLabel || v.label}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPARISON SLIDERS SECTION (OFF-WHITE / WHITE) */}
      <section style={{
        padding: 'clamp(45px, 6vw, 85px) clamp(16px, 4vw, 24px) clamp(55px, 7vw, 95px)',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF4F8 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 4.5vw, 48px)' }}>
            <h2 style={{
              fontSize: 'clamp(1.7rem, 4vw, 2.9rem)',
              color: 'var(--text-heading-dark)',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              marginBottom: '12px'
            }}>
              From Spatial Data to <span style={{ color: 'var(--color-orange)' }}>Actionable Insights</span>
            </h2>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              color: 'var(--text-muted-gray)',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.62
            }}>
              Explore how raw geospatial data is processed and transformed into detailed, AI-driven thematic layers for deeper spatial analysis.
            </p>
          </div>

          {/* 4 Interactive Comparison Sliders Grid (2x2 on desktop, 1-col on mobile) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(20px, 3.5vw, 32px)'
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
            padding: 'clamp(24px, 5vw, 36px) clamp(16px, 4vw, 28px)',
            background: '#FFFFFF',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            border: '1px solid rgba(27, 54, 73, 0.1)',
            boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.06)',
            maxWidth: '850px',
            margin: 'clamp(36px, 5vw, 60px) auto 0 auto'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.18rem, 2.5vw, 1.5rem)',
              fontWeight: 700,
              color: 'var(--text-heading-dark)',
              marginBottom: '8px',
              lineHeight: 1.3
            }}>
              Need Custom Sensor Flight Feeds or GIS Layers?
            </h3>
            <p style={{
              color: 'var(--text-muted-gray)',
              fontSize: 'clamp(0.88rem, 2vw, 0.96rem)',
              lineHeight: 1.58,
              maxWidth: '620px',
              margin: '0 auto 20px auto'
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
                justifyContent: 'center',
                gap: '8px',
                padding: 'clamp(12px, 2.5vw, 13px) clamp(22px, 4vw, 32px)',
                borderRadius: '28px',
                backgroundColor: 'var(--color-orange, #FF6A00)',
                border: 'none',
                color: '#FFFFFF',
                fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(255, 106, 0, 0.35)',
                transition: 'all 0.25s ease',
                width: 'auto',
                maxWidth: '100%'
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
