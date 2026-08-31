import React from 'react'
import { ChevronRight, ExternalLink } from 'lucide-react'

export default function OurProduct({ setActiveTab }) {
  const products = [
    {
      id: 'mapzest-mobile',
      name: 'Mapzest',
      desc: 'Empowering field teams with mobile WebGIS analytics. Capture real-time spatial data, perform high-accuracy surveys, and render multi-layered vector overlays directly on Android & mobile browsers with offline capabilities.',
      link: 'https://play.google.com/store/apps/details?id=com.terraqua.gis&pcampaignid=web_share',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'mapzest-basic',
      name: 'MapZest Basic',
      desc: 'Cloud-native WebGIS visualization engine designed for rendering high-resolution orthomosaics, multispectral rasters, and digital elevation models (DEM) directly in your browser with zero latency.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'geo-catalog',
      name: 'Geo Catalog',
      desc: 'Enterprise geospatial data repository & catalog management system to store, search, organize, and stream massive GIS datasets with encrypted role-based access control.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'krishizest',
      name: 'KrishiZest',
      desc: 'Specialized agricultural remote sensing & precision analytics platform providing crop health monitoring, multispectral NDVI maps, stress detection, and predictive yield analytics.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'fram-engine',
      name: 'FRAM Engine',
      desc: 'Feature Recognition and Analysis Module powered by deep learning AI pipelines to count tree crowns, trace building footprints, detect solar panel defects, and quantify crop health.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'nrmm-monitoring',
      name: 'NRMM Monitoring',
      desc: 'Natural Resource Management & Monitoring platform for continuous volumetric tracking of mine sites, water body dynamics, forest cover change detection, and environmental compliance.',
      link: 'https://mapzest.com/',
      buttonText: 'Know more',
      img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800'
    }
  ]

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', color: '#0F172A' }}>
      {/* HERO / HEADER SECTION */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', backgroundColor: '#050F24' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 20px',
            borderRadius: '20px',
            background: 'rgba(255, 106, 0, 0.15)',
            border: '1px solid rgba(255, 106, 0, 0.4)',
            color: '#FF6A00',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '0.05em'
          }}>
            GEOSPATIAL SOLUTIONS SUITE
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            color: '#FFFFFF',
            fontWeight: 700,
            marginBottom: '24px',
            lineHeight: 1.2
          }}>
            Innovative <span style={{ color: '#FF6A00' }}>Geospatial Solutions</span>
          </h1>

          <p style={{
            color: '#94A3B8',
            fontSize: '1.15rem',
            lineHeight: '1.7',
            maxWidth: '840px',
            margin: '0 auto'
          }}>
            Discover our innovative suite of Geospatial solutions designed to meet diverse industry needs. From interactive web GIS platforms to specialized modules for mining, image classification, and 3D point cloud analysis.
          </p>
        </div>
      </section>

      {/* PRODUCT CARDS SECTION - MATCHING REFERENCE DESIGN */}
      <section style={{ padding: '80px 24px 100px' }}>
        <style>{`
          .solution-row {
            display: flex;
            align-items: center;
            gap: 36px;
            max-width: 1240px;
            margin: 0 auto 56px auto;
            min-height: 340px;
          }

          .solution-row.reverse {
            flex-direction: row-reverse;
          }

          .solution-img-box {
            flex: 1 1 50%;
            height: 360px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
            position: relative;
            background-color: #E2E8F0;
          }

          .solution-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .solution-row:hover .solution-img {
            transform: scale(1.04);
          }

          .solution-card-box {
            flex: 1 1 50%;
            background: #F1F5F9;
            border-radius: 20px;
            padding: 48px 52px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(226, 232, 240, 0.8);
            min-height: 360px;
          }

          .solution-title-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 2rem;
            font-weight: 700;
            color: #1E293B;
            text-decoration: none;
            margin-bottom: 20px;
            transition: color 0.2s ease;
          }

          .solution-title-link:hover {
            color: #FF6A00;
          }

          .solution-title-chevron {
            color: #FF6A00;
            transition: transform 0.2s ease;
          }

          .solution-title-link:hover .solution-title-chevron {
            transform: translateX(4px);
          }

          .solution-desc {
            color: #475569;
            font-size: 1.05rem;
            line-height: 1.7;
            margin-bottom: 32px;
          }

          .solution-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 34px;
            background: linear-gradient(135deg, #FF6A00 0%, #FF8500 100%);
            color: #FFFFFF;
            font-size: 1rem;
            font-weight: 700;
            border-radius: 30px;
            text-decoration: none;
            box-shadow: 0 6px 18px rgba(255, 106, 0, 0.35);
            transition: all 0.3s ease;
            align-self: flex-start;
          }

          .solution-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 26px rgba(255, 106, 0, 0.5);
            background: linear-gradient(135deg, #FF7A1A 0%, #FFA01A 100%);
          }

          @media (max-width: 960px) {
            .solution-row, .solution-row.reverse {
              flex-direction: column;
              gap: 24px;
              margin-bottom: 48px;
            }
            .solution-img-box, .solution-card-box {
              width: 100%;
              flex: 1 1 100%;
            }
            .solution-img-box {
              height: 280px;
            }
            .solution-card-box {
              padding: 32px 28px;
              min-height: auto;
            }
            .solution-title-link {
              font-size: 1.6rem;
            }
          }
        `}</style>

        <div>
          {products.map((item, idx) => {
            const isReverse = idx % 2 === 1
            return (
              <div key={item.id} className={`solution-row ${isReverse ? 'reverse' : ''}`}>
                {/* IMAGE BOX */}
                <div className="solution-img-box">
                  <img src={item.img} alt={item.name} className="solution-img" />
                </div>

                {/* CONTENT CARD BOX MATCHING REFERENCE DESIGN */}
                <div className="solution-card-box">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="solution-title-link"
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="solution-title-chevron" size={32} strokeWidth={2.8} />
                  </a>

                  <p className="solution-desc">
                    {item.desc}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="solution-btn"
                  >
                    {item.buttonText}
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

