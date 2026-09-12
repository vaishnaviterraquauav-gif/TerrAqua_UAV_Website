import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import mapzestMobileImg from '../../assets/mapzest_mobile.png'
import mapzestGeoCatalogImg from '../../assets/mapzest_geo_catalog.png'
import geoCatalogGangaImg from '../../assets/geo_catalog_ganga.png'
import mapzestKrishiImg from '../../assets/mapzest_krishizest.png'
import mapzestFramImg from '../../assets/mapzest_fram_engine.png'
import mapzestNrmmImg from '../../assets/mapzest_nrmm.png'

export default function OurProduct({ setActiveTab }) {
  const products = [
    {
      id: 'mapzest-mobile',
      name: 'Mapzest Mobile',
      desc: 'Empowering field teams with mobile WebGIS analytics. Capture real-time spatial data, perform high-accuracy surveys, and render multi-layered vector overlays directly on Android & mobile browsers with offline capabilities.',
      features: ['Offline Spatial Field Surveys', 'Real-Time Vector Overlays', 'Android & Mobile GIS Support'],
      link: 'https://play.google.com/store/apps/details?id=com.terraqua.gis&pcampaignid=web_share',
      buttonText: 'Know more',
      img: mapzestMobileImg
    },
    {
      id: 'mapzest-basic',
      name: 'MapZest Basic',
      desc: 'Cloud-native WebGIS visualization engine designed for rendering high-resolution orthomosaics, multispectral rasters, and digital elevation models (DEM) directly in your browser with zero latency.',
      features: ['High-Res Orthomosaics', 'Multispectral Raster Streaming', 'Zero-Latency DEM Rendering'],
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestGeoCatalogImg
    },
    {
      id: 'geo-catalog',
      name: 'Geo Catalog',
      desc: 'Enterprise geospatial data repository & catalog management system to store, search, organize, and stream massive GIS datasets with encrypted role-based access control.',
      features: ['Role-Based Access Control', 'Massive GIS Dataset Streaming', 'Encrypted Metadata Search'],
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: geoCatalogGangaImg
    },
    {
      id: 'krishizest',
      name: 'KrishiZest',
      desc: 'Specialized agricultural remote sensing & precision analytics platform providing crop health monitoring, multispectral NDVI maps, stress detection, and predictive yield analytics.',
      features: ['Multispectral NDVI Mapping', 'Crop Stress Detection', 'Predictive Yield Analytics'],
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestKrishiImg
    },
    {
      id: 'fram-engine',
      name: 'FRAM Engine',
      desc: 'Feature Recognition and Analysis Module powered by deep learning AI pipelines to count tree crowns, trace building footprints, detect solar panel defects, and quantify crop health.',
      features: ['Tree Crown Automated Counting', 'Building Footprint Tracing', 'Solar Panel Defect Detection'],
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestFramImg
    },
    {
      id: 'nrmm-monitoring',
      name: 'NRMM Monitoring',
      desc: 'Natural Resource Management & Monitoring platform for continuous volumetric tracking of mine sites, water body dynamics, forest cover change detection, and environmental compliance.',
      features: ['Volumetric Mine Tracking', 'Water Body Surface Dynamics', 'Forest Cover Change Detection'],
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestNrmmImg
    }
  ]

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', color: '#0F172A', fontFamily: 'var(--font-universal)' }}>
      {/* HERO / HEADER SECTION */}
      <section style={{
        position: 'relative',
        padding: '90px 24px 75px',
        overflow: 'hidden',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
        borderBottom: '1px solid rgba(0, 181, 226, 0.2)'
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 181, 226, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 400,
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.04em',
            marginBottom: '20px',
            fontFamily: 'var(--font-universal)'
          }}>
            Innovative <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Geospatial Solutions</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            maxWidth: '780px',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            fontWeight: 400,
            fontFamily: 'var(--font-universal)'
          }}>
            Discover our innovative suite of Geospatial solutions designed to meet diverse industry needs. From interactive web GIS platforms to specialized modules for mining, image classification, and 3D point cloud analysis.
          </p>
        </div>
      </section>

      {/* PRODUCTS CARD GRID CONTAINER */}
      <section style={{
        padding: 'clamp(40px, 5vw, 70px) clamp(16px, 4vw, 24px)',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <style>{`
          .product-card-row {
            display: flex;
            flex-direction: row;
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

          .product-card-row.reverse {
            flex-direction: row-reverse;
          }

          .product-card-row:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 48px -12px rgba(27, 54, 73, 0.14);
            border-color: rgba(0, 181, 226, 0.35);
          }

          .product-card-img-box {
            flex: 1 1 50%;
            width: 50%;
            min-width: 300px;
            min-height: 380px;
            background: linear-gradient(135deg, #0A172C 0%, #050D1A 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 28px;
            position: relative;
            overflow: hidden;
          }

          .product-card-img {
            max-width: 100%;
            max-height: 330px;
            object-fit: contain;
            border-radius: 12px;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
            position: relative;
            z-index: 1;
            transition: transform 0.4s ease;
          }

          .product-card-row:hover .product-card-img {
            transform: scale(1.03);
          }

          .product-card-content-box {
            flex: 1 1 50%;
            width: 50%;
            min-width: 300px;
            min-height: 380px;
            padding: clamp(32px, 4vw, 48px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #FFFFFF;
            font-family: var(--font-universal);
            box-sizing: border-box;
          }

          .product-card-cta-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-orange, #FF6A00);
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            transition: gap 0.2s ease, color 0.2s ease;
            width: fit-content;
            font-family: var(--font-universal);
          }

          .product-card-cta-link:hover {
            color: #00B5E2;
            gap: 12px;
          }

          /* MOBILE RESPONSIVE BREAKPOINT */
          @media (max-width: 868px) {
            .product-card-row,
            .product-card-row.reverse {
              flex-direction: column !important;
            }

            .product-card-img-box {
              width: 100% !important;
              flex: none;
              min-height: 260px;
              padding: 20px;
            }

            .product-card-content-box {
              width: 100% !important;
              flex: none;
              padding: 28px 20px !important;
            }
          }
        `}</style>

        <div>
          {products.map((item, idx) => {
            const isReverse = idx % 2 === 1
            return (
              <div
                key={item.id}
                className={`product-card-row ${isReverse ? 'reverse' : ''}`}
              >
                {/* IMAGE BOX - CONTAINED ASPECT RATIO & DARK MOCKUP FRAME */}
                <div className="product-card-img-box">
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(0, 181, 226, 0.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.35,
                    pointerEvents: 'none'
                  }} />
                  <img
                    src={item.img}
                    alt={item.name}
                    className="product-card-img"
                  />
                </div>

                {/* CONTENT BOX - CLEAN & BALANCED WITH UNIVERSAL SITE TYPOGRAPHY */}
                <div className="product-card-content-box">
                  <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
                    fontWeight: 500,
                    color: '#0A1D3D',
                    margin: '0 0 14px 0',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.25,
                    fontFamily: 'var(--font-universal)'
                  }}>
                    {item.name}
                  </h2>

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

                  {/* FEATURE BULLETS */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '9px',
                    marginBottom: '24px'
                  }}>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.9rem', color: '#1E293B', fontWeight: 500, fontFamily: 'var(--font-universal)' }}>
                        <CheckCircle2 size={16} style={{ color: '#00B5E2', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-cta-link"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}



