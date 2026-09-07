import React from 'react'
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#050D1A',
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(0, 181, 226, 0.06) 0%, transparent 70%)',
        color: '#FFFFFF',
        padding: '44px 24px 24px',
        borderTop: '1px solid rgba(0, 181, 226, 0.15)',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* MAIN 3-COLUMN COMPACT & BALANCED GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            marginBottom: '32px',
            alignItems: 'start'
          }}
        >
          {/* ========================================= */}
          {/* COLUMN 1: BRAND, MISSION & ACCREDITATION */}
          {/* ========================================= */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center' }}>
              <img
                src="/image.png"
                alt="TerrAqua UAV"
                style={{ height: '74px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: '1.6',
                color: '#CBD5E1',
                marginBottom: '16px',
                maxWidth: '340px'
              }}
            >
              Empowering Sustainability with High-Resolution Remote Sensing & Geospatial Intelligence.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.75rem',
                  color: '#CBD5E1'
                }}
              >
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>CIN:</span> U93000UP2018PTC109951
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.75rem',
                  color: '#CBD5E1'
                }}
              >
                <Sparkles size={12} color="#00E5FF" /> SIIC IIT Kanpur
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* COLUMN 2: RECOGNITION & ISO CERTIFICATIONS */}
          {/* ========================================= */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Header row with fixed 42px height for perfect horizontal alignment across columns */}
            <div style={{ height: '42px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                Recognized & Certified
              </span>
            </div>

            {/* Gov Recognitions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <img
                src="/startupindia-clean.png"
                alt="Startup India"
                style={{ height: '72px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
              <img
                src="/upstartuplogo.png"
                alt="Start In UP"
                style={{ height: '72px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* ISO Certifications */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 12px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.78rem',
                color: '#CBD5E1',
                maxWidth: 'fit-content',
                marginBottom: '12px'
              }}
            >
              <ShieldCheck size={14} color="#00E5FF" style={{ flexShrink: 0 }} />
              <span style={{ color: '#CBD5E1', fontWeight: 500 }}>
                <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>ISO:</strong> 9001:2015, 27001:2022, 14001:2015
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#94A3B8', marginTop: 'auto' }}>
              <CheckCircle2 size={13} color="#00E5FF" style={{ flexShrink: 0 }} />
              <span>DPIIT & UP State Startup Recognized</span>
            </div>
          </div>

          {/* ========================================= */}
          {/* COLUMN 3: GET IN TOUCH & LOCATION        */}
          {/* ========================================= */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Header row with fixed 42px height for perfect horizontal alignment across columns */}
            <div style={{ height: '42px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                Get in Touch
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.84rem' }}>
              {/* Phone / WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={13} color="#00E5FF" />
                </div>
                <a
                  href="https://wa.me/917985791210?text=Hello%20TerrAqua%20UAV%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                >
                  +91 7985791210
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Mail size={13} color="#00E5FF" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <a
                    href="mailto:contact@terraquauav.com"
                    style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                  >
                    contact@terraquauav.com
                  </a>
                  <a
                    href="mailto:business@terraquauav.com"
                    style={{ color: '#94A3B8', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                  >
                    business@terraquauav.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <MapPin size={13} color="#00E5FF" />
                </div>
                <div style={{ color: '#CBD5E1', lineHeight: '1.45', fontSize: '0.8rem' }}>
                  Cabin 20/21, Hall No. 401, DJAC,
                  <br />
                  IIT Kanpur, Uttar Pradesh 208016
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL & VISITOR BADGE ROW */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '18px',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#CBD5E1',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginRight: '2px'
              }}
            >
              Follow Us
            </span>
            {[
              {
                name: 'LinkedIn',
                icon: <Linkedin size={18} strokeWidth={2.2} />,
                href: 'https://linkedin.com/',
                hoverBg: '#0A66C2',
                hoverBorder: '#0A66C2'
              },
              {
                name: 'Instagram',
                icon: <Instagram size={18} strokeWidth={2.2} />,
                href: 'https://instagram.com/',
                hoverBg: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)',
                hoverBorder: '#FD1D1D'
              },
              {
                name: 'Facebook',
                icon: <Facebook size={18} strokeWidth={2.2} />,
                href: 'https://facebook.com/',
                hoverBg: '#1877F2',
                hoverBorder: '#1877F2'
              },
              {
                name: 'X (Twitter)',
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: 'https://twitter.com/',
                hoverBg: '#000000',
                hoverBorder: 'rgba(255, 255, 255, 0.6)'
              }
            ].map((soc, sIdx) => (
              <a
                key={sIdx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                title={soc.name}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = soc.hoverBg
                  e.currentTarget.style.borderColor = soc.hoverBorder
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)'
                }}
              >
                {soc.icon}
              </a>
            ))}
          </div>

          {/* Visitor Counter Compact Badge (High-Attention Vibrant Capsule) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              borderRadius: '20px',
              border: '1.5px solid rgba(255, 106, 0, 0.55)',
              overflow: 'hidden',
              background: '#040B17',
              boxShadow: '0 0 18px rgba(255, 106, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ display: 'flex' }}>
              {['1', '8', '1', '7', '4'].map((num, i) => (
                <span
                  key={i}
                  style={{
                    background: 'linear-gradient(180deg, #FF7711 0%, #FF5500 100%)',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    padding: '4px 7px',
                    borderRight: i < 4 ? '1px solid rgba(0, 0, 0, 0.2)' : 'none',
                    fontFamily: 'monospace',
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {num}
                </span>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                background: 'rgba(10, 29, 61, 0.95)'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#00E5FF',
                  boxShadow: '0 0 8px #00E5FF'
                }}
              />
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                VISITORS
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM 1-LINE COPYRIGHT BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            paddingTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.78rem',
            color: '#94A3B8'
          }}
        >
          <div>
            © 2026 <span>TerrAqua UAV Solutions Private Limited</span>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Incubated at</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>SIIC IIT Kanpur</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

