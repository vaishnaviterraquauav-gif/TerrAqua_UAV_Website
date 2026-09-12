import React from 'react'
import { ArrowRight } from 'lucide-react'
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
      name: 'Mapzest',
      desc: 'Empowering field teams with mobile WebGIS analytics. Capture real-time spatial data, perform high-accuracy surveys, and render multi-layered vector overlays directly on Android & mobile browsers with offline capabilities.',
      link: 'https://play.google.com/store/apps/details?id=com.terraqua.gis&pcampaignid=web_share',
      buttonText: 'Know more',
      img: mapzestMobileImg
    },
    {
      id: 'mapzest-basic',
      name: 'MapZest Basic',
      desc: 'Cloud-native WebGIS visualization engine designed for rendering high-resolution orthomosaics, multispectral rasters, and digital elevation models (DEM) directly in your browser with zero latency.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestGeoCatalogImg
    },
    {
      id: 'geo-catalog',
      name: 'Geo Catalog',
      desc: 'Enterprise geospatial data repository & catalog management system to store, search, organize, and stream massive GIS datasets with encrypted role-based access control.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: geoCatalogGangaImg
    },
    {
      id: 'krishizest',
      name: 'KrishiZest',
      desc: 'Specialized agricultural remote sensing & precision analytics platform providing crop health monitoring, multispectral NDVI maps, stress detection, and predictive yield analytics.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestKrishiImg
    },
    {
      id: 'fram-engine',
      name: 'FRAM Engine',
      desc: 'Feature Recognition and Analysis Module powered by deep learning AI pipelines to count tree crowns, trace building footprints, detect solar panel defects, and quantify crop health.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestFramImg
    },
    {
      id: 'nrmm-monitoring',
      name: 'NRMM Monitoring',
      desc: 'Natural Resource Management & Monitoring platform for continuous volumetric tracking of mine sites, water body dynamics, forest cover change detection, and environmental compliance.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: mapzestNrmmImg
    }
  ]

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#0F172A' }}>
      {/* HERO / HEADER SECTION */}
      <section style={{
        position: 'relative',
        padding: '90px 24px 80px',
        overflow: 'hidden',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
        borderBottom: '1px solid rgba(0, 181, 226, 0.2)'
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
            Innovative <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Geospatial Solutions</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            maxWidth: '780px',
            margin: '0 auto',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Discover our innovative suite of Geospatial solutions designed to meet diverse industry needs. From interactive web GIS platforms to specialized modules for mining, image classification, and 3D point cloud analysis.
          </p>
        </div>
      </section>

      {/* SEAMLESS ALTERNATING SPLIT CARDS SECTION */}
      <section style={{
        padding: '0',
        background: '#FFFFFF',
        width: '100%',
        overflow: 'hidden'
      }}>
        <style>{`
          .product-split-container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          .product-split-row {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            min-height: 340px;
          }

          .product-split-row.reverse {
            flex-direction: row-reverse;
          }

          .product-split-img-box {
            flex: 1 1 50%;
            min-width: 320px;
            height: 340px;
            position: relative;
            overflow: hidden;
            background-color: #0F172A;
          }

          .product-split-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .product-split-row:hover .product-split-img {
            transform: scale(1.05);
          }

          .product-split-content-box {
            flex: 1 1 50%;
            min-width: 320px;
            padding: 48px 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #FFFFFF;
            border: 1px solid rgba(27, 54, 73, 0.08);
            box-sizing: border-box;
          }

          .product-split-title {
            font-size: 1.75rem;
            font-weight: 700;
            color: #0F172A;
            margin: 0 0 14px 0;
            letter-spacing: -0.02em;
            line-height: 1.25;
            font-family: var(--font-universal);
          }

          .product-split-desc {
            color: #475569;
            font-size: 1rem;
            line-height: 1.7;
            margin: 0 0 24px 0;
            font-weight: 400;
          }

          .product-split-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-orange, #FF6A00);
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            background: none;
            border: none;
            padding: 0;
            transition: gap 0.2s ease, color 0.2s ease;
            width: fit-content;
          }

          .product-split-link:hover {
            color: #00B5E2;
            gap: 12px;
          }

          /* MOBILE RESPONSIVE STACK */
          @media (max-width: 768px) {
            .product-split-row,
            .product-split-row.reverse {
              flex-direction: column;
            }

            .product-split-img-box {
              width: 100% !important;
              flex: none;
              height: 240px;
              min-height: 240px;
            }

            .product-split-content-box {
              width: 100% !important;
              flex: none;
              padding: 32px 24px !important;
            }

            .product-split-title {
              font-size: 1.5rem !important;
              margin-bottom: 10px !important;
            }

            .product-split-desc {
              font-size: 0.94rem !important;
              line-height: 1.6 !important;
              margin-bottom: 20px !important;
            }
          }
        `}</style>

        <div className="product-split-container">
          {products.map((item, idx) => {
            const isReverse = idx % 2 === 1
            return (
              <div
                key={item.id}
                className={`product-split-row ${isReverse ? 'reverse' : ''}`}
              >
                {/* IMAGE BOX */}
                <div className="product-split-img-box">
                  <img src={item.img} alt={item.name} className="product-split-img" />
                </div>

                {/* CONTENT BOX */}
                <div className="product-split-content-box">
                  <h2 className="product-split-title">
                    {item.name}
                  </h2>

                  <p className="product-split-desc">
                    {item.desc}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-split-link"
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

