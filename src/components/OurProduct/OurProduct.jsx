import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function OurProduct({ setActiveTab }) {
  const products = [
    {
      id: 'mapzest-mobile',
      name: 'Mapzest',
      desc: 'Empowering field teams with mobile WebGIS analytics. Capture real-time spatial data, perform high-accuracy surveys, and render multi-layered vector overlays directly on Android & mobile browsers with offline capabilities.',
      link: 'https://play.google.com/store/apps/details?id=com.terraqua.gis&pcampaignid=web_share',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'mapzest-basic',
      name: 'MapZest Basic',
      desc: 'Cloud-native WebGIS visualization engine designed for rendering high-resolution orthomosaics, multispectral rasters, and digital elevation models (DEM) directly in your browser with zero latency.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'geo-catalog',
      name: 'Geo Catalog',
      desc: 'Enterprise geospatial data repository & catalog management system to store, search, organize, and stream massive GIS datasets with encrypted role-based access control.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'krishizest',
      name: 'KrishiZest',
      desc: 'Specialized agricultural remote sensing & precision analytics platform providing crop health monitoring, multispectral NDVI maps, stress detection, and predictive yield analytics.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'fram-engine',
      name: 'FRAM Engine',
      desc: 'Feature Recognition and Analysis Module powered by deep learning AI pipelines to count tree crowns, trace building footprints, detect solar panel defects, and quantify crop health.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'nrmm-monitoring',
      name: 'NRMM Monitoring',
      desc: 'Natural Resource Management & Monitoring platform for continuous volumetric tracking of mine sites, water body dynamics, forest cover change detection, and environmental compliance.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200'
    }
  ]

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#0F172A' }}>
      {/* HERO / HEADER SECTION */}
      <section style={{ 
        padding: '90px 24px 80px', 
        textAlign: 'center', 
        background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
        borderBottom: '1px solid rgba(0, 181, 226, 0.2)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            color: '#FFFFFF',
            fontWeight: 400,
            marginBottom: '24px',
            lineHeight: 1.2,
            letterSpacing: '-0.04em'
          }}>
            Innovative <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Geospatial Solutions</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            fontSize: '1.15rem',
            lineHeight: '1.7',
            maxWidth: '840px',
            margin: '0 auto'
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
          .product-split-row {
            display: flex;
            flex-direction: row;
            min-height: 420px;
            width: 100%;
          }

          .product-split-row.reverse {
            flex-direction: row-reverse;
          }

          .product-split-img-box {
            flex: 1 1 50%;
            width: 50%;
            min-height: 400px;
            overflow: hidden;
            background-color: #0F172A;
            position: relative;
          }

          .product-split-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .product-split-row:hover .product-split-img {
            transform: scale(1.03);
          }

          .product-split-content-box {
            flex: 1 1 50%;
            width: 50%;
            display: flex;
            flex-direction: column;
            justifyContent: center;
            padding: clamp(36px, 5vw, 80px) clamp(28px, 4.5vw, 70px);
            background: #FFFFFF;
            box-sizing: border-box;
          }

          .product-split-title {
            font-size: clamp(1.6rem, 2.8vw, 2.4rem);
            font-weight: 700;
            color: #0A1D3D;
            letter-spacing: -0.03em;
            line-height: 1.25;
            margin: 0 0 16px 0;
            font-family: var(--font-universal);
          }

          .product-split-desc {
            color: #546478;
            font-size: clamp(0.95rem, 1.4vw, 1.08rem);
            line-height: 1.7;
            margin: 0 0 28px 0;
            max-width: 560px;
            font-weight: 400;
          }

          .product-split-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-orange, #FF6A00);
            font-size: 1.05rem;
            font-weight: 600;
            text-decoration: none;
            transition: gap 0.2s ease, transform 0.2s ease;
            width: fit-content;
          }

          .product-split-link:hover {
            gap: 12px;
          }

          /* MOBILE RESPONSIVE STACK (CLEAN, READABLE, NO MESSY OVERFLOW) */
          @media (max-width: 768px) {
            .product-split-row,
            .product-split-row.reverse {
              flex-direction: column !important;
              min-height: auto;
              border-bottom: 1px solid #E2E8F0;
            }

            .product-split-img-box {
              width: 100% !important;
              flex: none;
              height: 220px;
              min-height: 220px;
            }

            .product-split-content-box {
              width: 100% !important;
              flex: none;
              padding: 24px 20px 32px 20px !important;
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

            .product-split-link {
              font-size: 0.98rem !important;
            }
          }
        `}</style>

        <div>
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

