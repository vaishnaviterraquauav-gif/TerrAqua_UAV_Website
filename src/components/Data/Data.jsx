import React from 'react'
import { Sparkles, Database, ArrowRight, Layers, BarChart3, ShieldCheck } from 'lucide-react'

export default function Data({ setActiveTab }) {
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
            Spatial Data <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Ecosystem</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            maxWidth: '680px',
            margin: '0 auto 36px',
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}>
            High-density aerial surveys, multispectral indices, and point cloud archives curated with centimeter-level precision.
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

      {/* CONTENT SECTION (OFF-WHITE / WHITE) */}
      <section style={{
        padding: '90px 24px',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF4F8 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* 3 Overview Placeholder Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '60px'
          }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(27, 54, 73, 0.1)',
              boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)'
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(27, 54, 73, 0.14)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.1)'
              e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(27, 54, 73, 0.08)'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: 'rgba(255, 106, 0, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-orange)',
                marginBottom: '24px'
              }}>
                <Database size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading-dark)', marginBottom: '12px' }}>
                Raw Spatial Acquisition
              </h3>
              <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.98rem', lineHeight: 1.65 }}>
                High-resolution orthomosaics, raw LiDAR point clouds, and multispectral flight datasets captured across diverse geographical zones.
              </p>
            </div>

            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(27, 54, 73, 0.1)',
              boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)'
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(27, 54, 73, 0.14)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.1)'
              e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(27, 54, 73, 0.08)'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: 'rgba(0, 181, 226, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-aqua)',
                marginBottom: '24px'
              }}>
                <Layers size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading-dark)', marginBottom: '12px' }}>
                Processed GIS Layers
              </h3>
              <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Digital Elevation Models (DEM/DSM), classified Land Use/Land Cover (LULC), and raster surface models ready for GIS software.
              </p>
            </div>

            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(27, 54, 73, 0.1)',
              boxShadow: '0 15px 35px -10px rgba(27, 54, 73, 0.08)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)'
              e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(27, 54, 73, 0.14)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.1)'
              e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(27, 54, 73, 0.08)'
            }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: 'rgba(255, 106, 0, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-orange)',
                marginBottom: '24px'
              }}>
                <BarChart3 size={26} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading-dark)', marginBottom: '12px' }}>
                Analytical Intelligence
              </h3>
              <p style={{ color: 'var(--text-muted-gray)', fontSize: '0.98rem', lineHeight: 1.65 }}>
                Volumetric cut-and-fill estimates, vegetative vigor metrics, and AI-driven spatial change detection reports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
