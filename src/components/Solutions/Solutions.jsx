import React, { useState, useEffect } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  ShieldCheck,
  Compass,
  Send,
  Sparkles,
  ChevronRight
} from 'lucide-react'
import NaturalResourcesDetail from './NaturalResourcesDetail'
import DisasterRiskDetail from './DisasterRiskDetail'
import AgricultureDetail from './AgricultureDetail'
import EnvironmentalConservationDetail from './EnvironmentalConservationDetail'
import InfrastructureUrbanDetail from './InfrastructureUrbanDetail'
import ClimateIntelligenceDetail from './ClimateIntelligenceDetail'

export default function Solutions({ setActiveTab, selectedDomainId, setSelectedDomainId }) {
  const [selectedDomain, setSelectedDomain] = useState(null)

  useEffect(() => {
    if (selectedDomainId) {
      const found = domainApplications.find(d => d.id === selectedDomainId)
      if (found) {
        setSelectedDomain(found)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSelectedDomain(null)
      }
    } else {
      setSelectedDomain(null)
    }
  }, [selectedDomainId])

  const cards = [
    {
      id: 'daas',
      title: "DaaS",
      subtitle: "TerrAqua UAV",
      desc: "Drone as a Service. We provide professional aerial data acquisition, deploying advanced UAVs for high-resolution mapping and environmental surveillance.",
      img: "/daas-solution.png",
      features: [
        "Aerial Photogrammetry & LiDAR Acquisition",
        "Certified Remote Sensing Pilot Fleet",
        "Sub-Centimeter Spatial Resolution"
      ]
    },
    {
      id: 'dpaas',
      title: "DPaaS",
      subtitle: "TerrAqua UAV",
      desc: "Data Processing as a Service. Transform raw aerial footage into actionable insights using our advanced multispectral and LiDAR processing pipelines.",
      img: "https://static.wixstatic.com/media/9a5348_91599db1a0df4ab7b898716c1fe2aa75~mv2.jpg",
      features: [
        "Multispectral & Thermal Index Processing",
        "3D Point Cloud & Reality Mesh Generation",
        "GIS-Ready Orthomosaic & DEM Outputs"
      ]
    },
    {
      id: 'saas',
      title: "SaaS",
      subtitle: "TerrAqua UAV",
      desc: "Software as a Service. Access our cloud platform for real-time fleet management, geospatial archiving, and AI-driven precision agriculture reports.",
      img: "https://static.wixstatic.com/media/9a5348_e437fc3e29564a0397e0dd54f0bd7ea3~mv2.jpg",
      features: [
        "Cloud-Based Geospatial Data Archiving",
        "AI Vigor & Anomaly Analytics Platform",
        "Collaborative WebGIS Telemetry Dashboard"
      ]
    }
  ]

  const domainApplications = [
    {
      id: 'natural-resources',
      title: "Natural Resource Management",
      subtitle: "Ecological Auditing & Resource Preservation",
      desc: "Comprehensive aerial remote sensing and high-resolution mapping to monitor forests, water bodies, mineral reserves, and ecological habitats.",
      img: "https://static.wixstatic.com/media/9a5348_e81facd97b7f43bea6b80a3251322a7b~mv2.jpg",
      heroBadge: "ECOLOGICAL & MINING INTELLIGENCE",
      overview: "TerrAqua UAV delivers military-grade aerial surveys and multispectral remote sensing to track, quantify, and preserve vital natural assets. From vast forest reserves and water catchment basins to commercial mining quarries, our UAV fleet provides millimeter-level spatial fidelity and volumetric accuracy.",
      keyCapabilities: [
        {
          title: "Forest Canopy & Biomass Estimation",
          desc: "Multi-layered LiDAR scanning through dense foliage to map ground terrain, quantify tree density, canopy height models (CHM), and estimate above-ground biomass."
        },
        {
          title: "Water Body Dynamics & Depth Mapping",
          desc: "Bathymetric and multispectral spectral index analysis for reservoir siltation monitoring, algal bloom detection, and water volume estimation."
        },
        {
          title: "Mining & Quarry Volumetric Audits",
          desc: "Autonomous 3D cut-and-fill volumetric calculation for open-cast mines, aggregate stockpiles, and excavation boundary tracking with sub-centimeter error margins."
        },
        {
          title: "Ecological Habitat & Wildlife Protection",
          desc: "Thermal night-vision patrols and AI species recognition to curb illegal poaching, monitor wildlife migration corridors, and track habitat encroachment."
        }
      ],
      payloads: ["Airborne LiDAR Scanners (Velodyne / Livox)", "45MP Full-Frame Photogrammetry RGB", "6-Band Multispectral Sensors", "Radiometric Thermal Vision"],
      deliverables: ["High-Density 3D Point Clouds (.LAS / .LAZ)", "Digital Surface & Elevation Models (DSM / DEM)", "Volumetric Stockpile Variance Reports (CSV/PDF)", "Classified Land Use / Land Cover (LULC) Rasters"],
      stats: [
        { label: "Survey Speed vs Ground Crew", value: "10x Faster" },
        { label: "Volumetric Measurement Accuracy", value: "99.2%" },
        { label: "Max Single-Day Area Coverage", value: "2,500+ Ha" }
      ]
    },
    {
      id: 'disaster-risk',
      title: "Disaster Risk Reduction",
      subtitle: "Emergency Response & Crisis Mitigation",
      desc: "Rapid response UAV deployment for real-time flood monitoring, landslide vulnerability analysis, emergency route mapping, and disaster recovery.",
      img: "https://i.abcnewsfe.com/a/7317b202-b250-4686-a784-7c69b7d4e803/nepal-floods_1787739415018_hpMain.jpg",
      heroBadge: "RAPID EMERGENCY DEPLOYMENT",
      overview: "When natural disasters strike, ground access is compromised. TerrAqua UAV's emergency rapid-deployment unit provides first responders, disaster management authorities, and civil administrations with real-time situational intelligence, flood inundation modeling, and post-disaster damage assessments.",
      keyCapabilities: [
        {
          title: "Real-Time Flood Inundation & Velocity Modeling",
          desc: "Continuous aerial monitoring during active flood events to trace flood boundaries, calculate water flow velocities, and predict breach risks in embankments."
        },
        {
          title: "Landslide Vulnerability & Slope Stability",
          desc: "High-precision digital elevation modeling and slope-aspect computation in hilly terrains to identify active displacement zones and early warning landslide triggers."
        },
        {
          title: "Post-Disaster Structural Damage Assessment",
          desc: "Rapid orthomosaic generation to audit collapsed infrastructure, compromised bridges, destroyed road links, and power line severances for disaster relief funding."
        },
        {
          title: "Thermal Search & Rescue Guidance",
          desc: "Deploying high-altitude radiometric thermal UAVs to pinpoint trapped survivors through smoke, debris, or night conditions, relaying GPS coordinates directly to rescue squads."
        }
      ],
      payloads: ["Dual Thermal FLIR Boson 640 + RGB 4K", "Long-Range Hybrid VTOL (2.5 Hr Endurance)", "High-Lumen Night Illumination Spotlight", "Emergency Drop-Payload Delivery Module"],
      deliverables: ["Live Encrypted Video Feed to Command Center", "Rapid Turnaround Orthophoto Maps (< 2 hrs)", "Emergency Evacuation Route Accessibility Maps", "Disaster Compensation & Structural Damage Audits"],
      stats: [
        { label: "Deployment Readiness Time", value: "< 15 Mins" },
        { label: "Live Telemetry & Video Range", value: "15+ km" },
        { label: "Survivor Detection Reliability", value: "99.8%" }
      ]
    },
    {
      id: 'agriculture',
      title: "Agriculture",
      subtitle: "Multispectral Health Analytics & Smart Crop Scouting",
      desc: "Precision crop health analytics, multispectral plant vigor metrics (NDVI/NDRE), automated variable rate spraying, and yield forecast reporting.",
      img: "https://cdn.agriland.ie/uploads/2026/06/tractor-mowing-grass-in-countryside-farm-field-2026-03-25-22-55-54-utc-scaled.jpg",
      heroBadge: "AGRITECH & PRECISION FARMING",
      overview: "Empowering modern agriculture with aerial artificial intelligence and multispectral agronomy. Our UAV solutions detect plant stress 10 to 14 days before visible to the naked human eye, enabling surgical fertilizer application, automated crop spraying, and verified yield insurance assessments.",
      keyCapabilities: [
        {
          title: "NDVI / NDRE Chlorophyll & Vigor Analytics",
          desc: "Compute multi-band spectral reflectance indexes to gauge chlorophyll absorption, nitrogen deficiency, and micro-nutrient requirements across micro-zones."
        },
        {
          title: "Autonomous Variable Rate Drone Spraying",
          desc: "Convert spectral disease prescription maps into autonomous UAV flight paths, spraying crop protection chemicals only on infested pockets with zero soil compaction."
        },
        {
          title: "Weed & Pest Hotspot Detection",
          desc: "AI edge vision models to classify invasive weed clusters and localized fungal outbreaks before they spread across acreage."
        },
        {
          title: "Yield Forecasting & Insurance Claim Verification",
          desc: "High-accuracy crop stand count, plant height metrics, and crop lodge assessments to settle crop insurance claims transparently with indisputable GIS proof."
        }
      ],
      payloads: ["MicaSense RedEdge-P Multispectral", "30-Liter Autonomous Agri-Spray Payload", "Centimeter-Level RTK GNSS Positioning", "Thermal Soil Moisture Scanner"],
      deliverables: ["Calibrated NDVI, NDRE, GNDVI Index Maps", "Variable Rate Prescription Shapefiles (.SHP)", "Automated Stand Count & Canopy Cover Reports", "Crop Damage Assessment Dossier"],
      stats: [
        { label: "Chemical & Fertilizer Savings", value: "Up to 35%" },
        { label: "Yield Increase Optimization", value: "+18-25%" },
        { label: "Field Spraying Speed", value: "25 Acres/Hr" }
      ]
    },
    {
      id: 'environmental-conservation',
      title: "Environmental Conservation",
      subtitle: "Carbon Sequestration & Ecosystem Protection",
      desc: "Ecological auditing, carbon stock quantification, wildlife tracking, and environmental compliance monitoring using multi-sensor UAV payloads.",
      img: "https://static.wixstatic.com/media/9a5348_0149884df72441a89574b1c908490b12~mv2.jpg",
      heroBadge: "ESG & CLIMATE RESTORATION",
      overview: "Actionable environmental intelligence for governments, global conservation organizations, and green ESG enterprises. TerrAqua UAV creates immutable geospatial baselines to track afforestation progress, measure carbon sequestration, and enforce ecological compliance.",
      keyCapabilities: [
        {
          title: "Carbon Stock & Above-Ground Biomass Audits",
          desc: "Combine LiDAR and multispectral indices to measure tree trunk girth, crown diameter, and calculate verifiable carbon credit certification metrics."
        },
        {
          title: "Wetland, Mangrove & Coastal Restoration",
          desc: "Track shoreline erosion dynamics, mangrove plantation survival rates, and wetland hydrologic connectivity over multi-temporal flight missions."
        },
        {
          title: "Illegal Deforestation & Encroachment Patrols",
          desc: "Continuous autonomous perimeter surveillance across national parks, generating instant alerts when illegal logging or land grabbing occurs."
        },
        {
          title: "EIA (Environmental Impact Assessment) Baseline",
          desc: "Pre-construction and post-project ecological impact assessments for green energy developments, mining reclamation, and industrial corridors."
        }
      ],
      payloads: ["Dual-Frequency Airborne LiDAR", "High-Resolution 60MP Photogrammetry", "Hyperspectral Vegetation Sensors", "Autonomous Solar-Powered Charging Docks"],
      deliverables: ["Verifiable Carbon Credit Sequestration Datasets", "Temporal Deforestation & Growth Heatmaps", "High-Precision 3D Terrain & Watershed Models", "Official EIA Environmental Compliance Reports"],
      stats: [
        { label: "Carbon Model Accuracy", value: "96.4%" },
        { label: "Canopy Penetration Rate", value: "85%+" },
        { label: "Conservation ROI Boost", value: "4x Efficiency" }
      ]
    },
    {
      id: 'infrastructure-urban',
      title: "Infrastructure & Urban Planning",
      subtitle: "Sub-Centimeter 3D Digital Twins & Surveying",
      desc: "Sub-centimeter accurate 3D point clouds, digital twin generation, and automated elevation monitoring for smart city development and civil engineering.",
      img: "https://etimg.etb2bimg.com/photo/106074745.cms",
      heroBadge: "SMART CITIES & CIVIL ENGINEERING",
      overview: "Revolutionizing modern civil infrastructure, highways, railways, and municipal urban design with millimetric 3D aerial modeling. We convert complex physical topography into interactive BIM/CAD compatible digital twins with survey-grade absolute accuracy.",
      keyCapabilities: [
        {
          title: "Highways, Bridges & Railway Corridor Surveys",
          desc: "Linear asset corridor mapping covering hundreds of kilometers, producing precise topographic profiles, earthwork calculations, and clash detection."
        },
        {
          title: "Smart City Digital Twins & 3D Reality Mesh",
          desc: "Photorealistic 3D city models for municipal property tax assessment, urban flood simulation, zoning compliance, and utility asset management."
        },
        {
          title: "Structural Health & Concrete Crack Inspection",
          desc: "Ultra-close high-resolution drone inspections of tall towers, bridges, wind turbines, and dams without requiring risky rope-access human teams."
        },
        {
          title: "As-Built Construction Progress Tracking",
          desc: "Weekly or bi-weekly drone flyovers compared against original CAD/BIM schematics to flag schedule deviations and subcontractor billing variances."
        }
      ],
      payloads: ["Phase One 100MP Metric Camera", "RIEGL Survey-Grade UAV LiDAR", "PPK/RTK Dual-Frequency GPS Modules", "30x Optical Zoom Visual Payloads"],
      deliverables: ["Georeferenced 3D Reality Mesh (.OBJ / .FBX / .3MX)", "CAD Contour Drawings & Spot Elevation Maps (.DWG / .DXF)", "Digital Terrain Models (DTM) & Cross-Sections", "AI Concrete Defect & Crack Classification Reports"],
      stats: [
        { label: "Survey Turnaround vs Total Station", value: "80% Faster" },
        { label: "Absolute Spatial Accuracy", value: "< 1.5 cm" },
        { label: "Linear Corridor Mapping Range", value: "50 km/Day" }
      ]
    },
    {
      id: 'climate-intelligence',
      title: "Climate Intelligence",
      subtitle: "Microclimate Modeling & Emission Tracking",
      desc: "Advanced climate data modeling, thermal emission tracking, and microclimate analytics powered by AI and aerial GIS integration.",
      img: "https://cdn.mos.cms.futurecdn.net/Bkcs2EBgW5hqaCSfGGAghh-1400-80.jpg",
      heroBadge: "CLIMATE ACTION & GEO-ANALYTICS",
      overview: "Understanding microclimate volatility requires hyper-localized spatial observations. TerrAqua UAV leverages airborne thermal radiometry, atmospheric sniffer payloads, and predictive GIS models to quantify urban heat islands, industrial emissions, and climate risks.",
      keyCapabilities: [
        {
          title: "Urban Heat Island (UHI) Thermal Mapping",
          desc: "Calibrated aerial surface temperature mapping across urban settlements to detect overheating concrete canyons and design targeted green-roof cooling policies."
        },
        {
          title: "Industrial Greenhouse Gas & Methane Tracking",
          desc: "Mounting optical gas imaging (OGI) sensors on UAVs to pinpoint fugitive methane leaks, pipeline emissions, and landfill bio-gas releases."
        },
        {
          title: "Coastal Storm Surge & Sea-Level Modeling",
          desc: "Simulating extreme weather inundation scenarios based on centimeter-precision coastal elevation models and tidal wave hydrodynamics."
        },
        {
          title: "Renewable Energy Solar & Wind Farm Optimization",
          desc: "Thermal anomaly inspection across gigawatt solar farms to identify defective photovoltaic cells and bypass diode failures in minutes."
        }
      ],
      payloads: ["Radiometric Thermal FLIR Duo Pro R", "Optical Gas Imaging (OGI) Sensor Payload", "Air Quality PM2.5 / PM10 / VOC Sniffers", "High-Resolution Multispectral Sensors"],
      deliverables: ["Calibrated Surface Temperature GeoTIFFs", "Fugitive Gas Plume Concentration Heatmaps", "Solar Farm Thermal Defect Audit Reports (IEC Compliant)", "Microclimate Vulnerability Index Rasters"],
      stats: [
        { label: "Thermal Sensitivity Precision", value: "< 0.03°C" },
        { label: "Solar Inspection Speed", value: "100 MW / Day" },
        { label: "Gas Leak Detection Accuracy", value: "99.1%" }
      ]
    }
  ]

  const handleOpenDomain = (item) => {
    setSelectedDomain(item)
    if (setSelectedDomainId) {
      setSelectedDomainId(item.id)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setSelectedDomain(null)
    if (setSelectedDomainId) {
      setSelectedDomainId(null)
    }
    window.scrollTo({ top: 400, behavior: 'smooth' })
  }

  // If a domain application is selected, render the dedicated Full-Page View
  if (selectedDomain) {
    if (selectedDomain.id === 'natural-resources') {
      return <NaturalResourcesDetail handleBack={handleBack} setActiveTab={setActiveTab} />
    }
    if (selectedDomain.id === 'disaster-risk') {
      return <DisasterRiskDetail handleBack={handleBack} setActiveTab={setActiveTab} />
    }
    if (selectedDomain.id === 'agriculture') {
      return <AgricultureDetail handleBack={handleBack} setActiveTab={setActiveTab} />
    }
    if (selectedDomain.id === 'environmental-conservation') {
      return <EnvironmentalConservationDetail handleBack={handleBack} setActiveTab={setActiveTab} />
    }
    if (selectedDomain.id === 'infrastructure-urban') {
      return <InfrastructureUrbanDetail handleBack={handleBack} setActiveTab={setActiveTab} />
    }
    if (selectedDomain.id === 'climate-intelligence') {
      return <ClimateIntelligenceDetail handleBack={handleBack} setActiveTab={setActiveTab} />
    }

    return (
      <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A' }}>
        {/* TOP NAVIGATION BAR */}
        <div style={{
          position: 'sticky',
          top: '72px',
          zIndex: 90,
          background: 'rgba(10, 29, 61, 0.96)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0, 181, 226, 0.2)',
          padding: '12px 24px'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <button
              onClick={handleBack}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                padding: '8px 18px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-orange)'
                e.currentTarget.style.borderColor = 'var(--color-orange)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <ArrowLeft size={18} /> Back to Solutions
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#8BADC1' }}>
              <span>Solutions</span>
              <ChevronRight size={14} />
              <span style={{ color: '#00B5E2', fontWeight: 600 }}>{selectedDomain.title}</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION (NAVY BLUE) */}
        <section style={{
          position: 'relative',
          padding: '52px 24px 56px',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
          borderBottom: '1px solid rgba(0, 181, 226, 0.2)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '20px',
                background: 'rgba(255, 122, 41, 0.15)',
                border: '1px solid rgba(255, 122, 41, 0.4)',
                color: '#FF7A29',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '16px',
                letterSpacing: '0.05em'
              }}>
                <Sparkles size={14} /> {selectedDomain.heroBadge}
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: '14px'
              }}>
                {selectedDomain.title}
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: '#00B5E2',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                {selectedDomain.subtitle}
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#CBD5E1',
                lineHeight: 1.65,
                marginBottom: '28px'
              }}>
                {selectedDomain.overview}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <button
                  onClick={() => {
                    if (setActiveTab) setActiveTab('contact')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  style={{
                    padding: '12px 26px',
                    fontSize: '0.95rem',
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
                  Inquire for Project <Send size={16} />
                </button>
                <button
                  onClick={handleBack}
                  style={{
                    padding: '12px 22px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  Explore Other Domains
                </button>
              </div>
            </div>

            {/* HERO IMAGE CONTAINER */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(0, 181, 226, 0.3)',
              height: '340px'
            }}>
              <img
                src={selectedDomain.img}
                alt={selectedDomain.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 40%, rgba(5, 15, 36, 0.85) 100%)'
              }} />
            </div>
          </div>
        </section>

        {/* KEY METRICS STATS BAR */}
        <section style={{
          background: 'linear-gradient(180deg, #EEF2F6 0%, #F8FAFC 100%)',
          borderBottom: '1px solid rgba(27, 54, 73, 0.08)',
          padding: '28px 24px'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            {selectedDomain.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(27, 54, 73, 0.1)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  textAlign: 'center',
                  boxShadow: '0 10px 25px -8px rgba(27, 54, 73, 0.06)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)'
                  e.currentTarget.style.boxShadow = '0 15px 30px -8px rgba(27, 54, 73, 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.1)'
                  e.currentTarget.style.boxShadow = '0 10px 25px -8px rgba(27, 54, 73, 0.06)'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--color-orange)',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted-gray)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE CAPABILITIES SECTION */}
        <section style={{ padding: '56px 24px', background: 'linear-gradient(180deg, #F8FAFC 0%, #EEF2F6 100%)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--text-heading-dark)', marginBottom: '10px' }}>
                Key <span style={{ color: 'var(--color-orange)' }}>Technical Capabilities</span>
              </h2>
              <p style={{ color: 'var(--text-muted-gray)', maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}>
                End-to-end remote sensing capabilities customized specifically for {selectedDomain.title.toLowerCase()} missions.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {selectedDomain.keyCapabilities.map((cap, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(27, 54, 73, 0.1)',
                    borderRadius: '18px',
                    padding: '26px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 12px 30px -10px rgba(27, 54, 73, 0.07)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 16px 35px -10px rgba(27, 54, 73, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 12px 30px -10px rgba(27, 54, 73, 0.07)'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 106, 0, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-orange)',
                    marginBottom: '16px'
                  }}>
                    <Layers size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-heading-dark)', marginBottom: '10px' }}>
                    {cap.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.94rem', lineHeight: '1.6' }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAYLOADS & DELIVERABLES DUAL GRID */}
        <section style={{ padding: '56px 24px 60px', background: 'linear-gradient(180deg, #EEF2F6 0%, #F8FAFC 100%)', borderTop: '1px solid rgba(27, 54, 73, 0.08)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}>
              {/* SENSORS & PAYLOADS */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(27, 54, 73, 0.1)',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.07)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(0, 181, 226, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-aqua)'
                  }}>
                    <Cpu size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-heading-dark)' }}>Sensor Payloads</h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted-gray)' }}>Hardware & Sensor Integration</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedDomain.payloads.map((payload, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={16} color="var(--color-aqua)" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-heading-dark)', fontSize: '0.94rem', fontWeight: 500 }}>{payload}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SAMPLE DELIVERABLES */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid rgba(27, 54, 73, 0.1)',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.07)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 106, 0, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-orange)'
                  }}>
                    <BarChart3 size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-heading-dark)' }}>Standard Deliverables</h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted-gray)' }}>Industry-standard export formats</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedDomain.deliverables.map((deliv, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <ShieldCheck size={16} color="var(--color-orange)" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-heading-dark)', fontSize: '0.94rem', fontWeight: 500 }}>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM CALL TO ACTION */}
            <div style={{
              marginTop: '40px',
              background: '#FFFFFF',
              border: '1px solid rgba(27, 54, 73, 0.1)',
              borderRadius: '20px',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 20px 40px -12px rgba(27, 54, 73, 0.08)'
            }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-heading-dark)', marginBottom: '12px' }}>
                Need a Custom UAV Deployment for <span style={{ color: 'var(--color-orange)' }}>{selectedDomain.title}</span>?
              </h3>
              <p style={{ color: 'var(--text-muted-gray)', maxWidth: '680px', margin: '0 auto 24px', fontSize: '1rem', lineHeight: '1.6' }}>
                Our team of certified drone pilots, GIS analysts, and remote sensing engineers is ready to execute your requirements anywhere across the country.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => {
                    if (setActiveTab) setActiveTab('contact')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  style={{
                    padding: '12px 32px',
                    fontSize: '0.95rem',
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
                  Contact Our GIS Experts <ArrowRight size={16} />
                </button>
                <button
                  onClick={handleBack}
                  style={{
                    padding: '12px 24px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: 'var(--text-heading-dark)',
                    background: '#FFFFFF',
                    border: '1px solid rgba(27, 54, 73, 0.15)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F1F5F9'
                    e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFFFFF'
                    e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.15)'
                  }}
                >
                  Browse Other Solutions
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // DEFAULT VIEW: Grid of Solutions + Domain Applications
  return (
    <div>
      {/* SECTION 1: NAVY BLUE HEADER */}
      <section style={{
        padding: '90px 24px 80px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
        borderBottom: '1px solid rgba(0, 181, 226, 0.2)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            color: '#FFFFFF',
            fontWeight: 400,
            marginBottom: '24px',
            lineHeight: 1.2,
            letterSpacing: '-0.04em'
          }}>
            End-to-End <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Expertise</span>
          </h1>
          <p style={{ color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Delivering enterprise-grade aerial remote sensing solutions backed by academic rigor and cutting-edge sensor technology.
          </p>
        </div>
      </section>

      {/* SECTION 2: ADVANCED SOLUTIONS GRID (OFF-WHITE) */}
      <section style={{
        padding: '60px 24px 80px',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF4F8 100%)',
        borderBottom: '1px solid rgba(27, 54, 73, 0.08)'
      }}>
        <style>{`
          .advanced-card {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: 0;
            background: #FFFFFF;
            border-radius: 24px;
            border: 1px solid rgba(27, 54, 73, 0.12);
            box-shadow: 0 15px 35px -10px rgba(27, 54, 73, 0.08);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            height: 100%;
          }
          
          .advanced-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px -10px rgba(27, 54, 73, 0.15);
            border-color: rgba(255, 106, 0, 0.4);
          }

          .advanced-card .card-img-wrapper {
            height: 220px;
            width: 100%;
            overflow: hidden;
            position: relative;
            background: #FFFFFF;
          }

          .advanced-card .card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .advanced-card:hover .card-img {
            transform: scale(1.08);
          }
        `}</style>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}>
            {cards.map((card, idx) => (
              <div key={idx} className="advanced-card">
                <div className="card-img-wrapper">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="card-img"
                  />
                </div>
                <div style={{ padding: '28px 28px 32px 28px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 2, fontFamily: 'var(--font-universal)' }}>
                  <h3 style={{ fontSize: '1.7rem', color: 'var(--text-heading-dark)', marginBottom: '12px', fontWeight: 500, fontFamily: 'var(--font-universal)' }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '20px', fontFamily: 'var(--font-universal)' }}>
                    {card.desc}
                  </p>

                  {card.features && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '28px', marginTop: 'auto' }}>
                      {card.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.88rem', color: '#1E293B', fontWeight: 500, fontFamily: 'var(--font-universal)' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => {
                      if (setActiveTab) setActiveTab('contact')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    style={{
                      padding: '14px 24px',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      background: 'linear-gradient(135deg, var(--color-orange) 0%, #E65000 100%)',
                      border: 'none',
                      borderRadius: '10px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      boxShadow: '0 8px 20px -4px rgba(255, 106, 0, 0.4)',
                      transition: 'all 0.3s ease',
                      fontFamily: 'var(--font-universal)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 12px 26px -4px rgba(255, 106, 0, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 8px 20px -4px rgba(255, 106, 0, 0.4)'
                    }}
                  >
                    Contact Now <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: DOMAIN APPLICATIONS (CONTAINED CARD LAYOUT WITH LIGHTER HEADINGS & CONTAINED IMAGES) */}
      <section style={{
        padding: '80px 0 60px 0',
        background: 'linear-gradient(180deg, #EFF4F8 0%, #F8FAFC 100%)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 50px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', color: 'var(--text-heading-dark)', marginBottom: '16px', fontWeight: 500, fontFamily: 'var(--font-universal)' }}>
            Key Application <span style={{ color: 'var(--color-orange)', fontWeight: 500 }}>Domains</span>
          </h2>
          <p style={{ color: 'var(--text-muted-gray)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6', fontFamily: 'var(--font-universal)' }}>
            Delivering tailor-made aerial remote sensing, multispectral mapping, and geospatial intelligence across diverse industries.
          </p>
        </div>

        <style>{`
          .checker-card-row {
            display: flex;
            flex-direction: row;
            height: 380px;
            min-height: 380px;
            align-items: stretch;
            background: #FFFFFF;
            border-radius: 24px;
            border: 1px solid rgba(27, 54, 73, 0.12);
            box-shadow: 0 16px 40px -12px rgba(27, 54, 73, 0.08);
            overflow: hidden;
            margin-bottom: 36px;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          }

          .checker-card-row.reverse {
            flex-direction: row-reverse;
          }

          .checker-card-row:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 48px -12px rgba(27, 54, 73, 0.14);
            border-color: rgba(0, 181, 226, 0.35);
          }

          .checker-col-img-box {
            flex: 1 1 50%;
            width: 50%;
            min-width: 300px;
            height: 100%;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            background-color: #FFFFFF;
          }

          .checker-card-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .checker-card-row:hover .checker-card-img {
            transform: scale(1.05);
          }

          .checker-col-text-box {
            flex: 1 1 50%;
            width: 50%;
            min-width: 300px;
            height: 100%;
            padding: clamp(28px, 3.5vw, 44px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #FFFFFF;
            font-family: var(--font-universal);
            box-sizing: border-box;
          }

          .know-more-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-orange, #FF6A00);
            font-weight: 700;
            font-size: 1rem;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            transition: gap 0.2s ease, color 0.2s ease;
            font-family: var(--font-universal);
          }

          .know-more-link:hover {
            color: #00B5E2;
            gap: 12px;
          }

          /* MOBILE RESPONSIVE STACK */
          @media (max-width: 868px) {
            .checker-card-row,
            .checker-card-row.reverse {
              flex-direction: column !important;
              height: auto !important;
              min-height: 0 !important;
            }

            .checker-col-img-box {
              width: 100% !important;
              flex: none;
              min-height: 240px;
              height: 240px;
            }

            .checker-col-text-box {
              width: 100% !important;
              flex: none;
              padding: 28px 20px !important;
            }
          }
        `}</style>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 24px)' }}>
          {domainApplications.map((item, idx) => {
            const isReverse = idx % 2 === 1;
            const topCapabilities = item.keyCapabilities ? item.keyCapabilities.slice(0, 3) : [];
            return (
              <div key={idx} className={`checker-card-row ${isReverse ? 'reverse' : ''}`}>
                {/* IMAGE BOX - EDGE TO EDGE PHOTO FIT INSIDE CARD */}
                <div className="checker-col-img-box" onClick={() => handleOpenDomain(item)}>
                  <img src={item.img} alt={item.title} className="checker-card-img" />
                </div>

                {/* CONTENT BOX - BALANCED & RICH WITH UNIVERSAL SITE TYPOGRAPHY (FONT WEIGHT 500) */}
                <div className="checker-col-text-box">
                  <h3
                    onClick={() => handleOpenDomain(item)}
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                      fontWeight: 500,
                      color: '#0A1D3D',
                      margin: '0 0 14px 0',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-universal)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FF7A29'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#0A1D3D'}
                  >
                    {item.title}
                  </h3>

                  <p style={{
                    color: '#475569',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.02rem)',
                    lineHeight: 1.7,
                    margin: '0 0 20px 0',
                    fontWeight: 400,
                    fontFamily: 'var(--font-universal)'
                  }}>
                    {item.desc}
                  </p>

                  {/* FEATURE BULLETS FROM CAPABILITIES */}
                  {topCapabilities.length > 0 && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '9px',
                      marginBottom: '24px'
                    }}>
                      {topCapabilities.map((cap, cIdx) => (
                        <div key={cIdx} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.9rem', color: '#1E293B', fontWeight: 500, fontFamily: 'var(--font-universal)' }}>
                          <CheckCircle2 size={16} style={{ color: '#00B5E2', flexShrink: 0 }} />
                          <span>{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <button
                      onClick={() => handleOpenDomain(item)}
                      className="know-more-link"
                    >
                      <span>Know more</span> <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}
