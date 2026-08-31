import React from 'react'
import { Linkedin, Instagram, Facebook, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#050F24',
        backgroundImage: `radial-gradient(circle at 50% 15%, rgba(0, 181, 226, 0.08) 0%, transparent 60%),
          repeating-radial-gradient(circle at 15% 30%, transparent 0, transparent 40px, rgba(0, 181, 226, 0.02) 41px, transparent 42px),
          repeating-radial-gradient(circle at 85% 70%, transparent 0, transparent 50px, rgba(0, 181, 226, 0.02) 51px, transparent 52px)`,
        color: '#FFFFFF',
        padding: '80px 32px 40px',
        borderTop: '1px solid rgba(0, 181, 226, 0.2)',
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
        {/* TOP MAIN GRID: 2 WELL-PROPORTIONED COLUMNS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '64px',
            marginBottom: '60px'
          }}
        >
          {/* ========================================= */}
          {/* LEFT COLUMN: BRAND, RECOGNITION, ISO, CIN */}
          {/* ========================================= */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: '16px' }}>
              <img
                src="/image.png"
                alt="TerrAqua UAV Logo"
                style={{ height: '75px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Mission Statement */}
            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: '1.6',
                color: '#CBD5E1',
                marginBottom: '26px',
                maxWidth: '460px',
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              Empowering Sustainability with High-Resolution Data and Geospatial Intelligence
            </p>

            {/* Recognized By */}
            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-aqua, #00B5E2)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}
              >
                Recognized By
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {/* Startup India Logo Graphic */}
                <img
                  src="/startupindia-clean.png"
                  alt="Startup India"
                  style={{ height: '48px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />

                {/* Start In UP Logo Graphic */}
                <img
                  src="/upstartuplogo.png"
                  alt="Start In UP"
                  style={{ height: '42px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
            </div>

            {/* Certified By */}
            <div style={{ marginBottom: '22px' }}>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-aqua, #00B5E2)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}
              >
                Certified By
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#CBD5E1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--color-aqua, #00B5E2)" />
                  <span>ISO 9001 : 2015</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--color-aqua, #00B5E2)" />
                  <span>ISO 27001 : 2022</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="var(--color-aqua, #00B5E2)" />
                  <span>ISO 14001 : 2015</span>
                </div>
              </div>
            </div>

            {/* CIN Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.82rem',
                color: '#CBD5E1'
              }}
            >
              <span style={{ color: 'var(--color-aqua, #00B5E2)', fontWeight: 700 }}>CIN :</span> U93000UP2018PTC109951
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT COLUMN: GET IN TOUCH, ADDRESS, SOCIAL */}
          {/* ========================================= */}
          <div>
            {/* Get In Touch Title */}
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}
            >
              Get in touch
            </h3>

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '0.94rem', color: '#CBD5E1', marginBottom: '32px' }}>
              {/* Phone */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(0, 181, 226, 0.1)',
                    border: '1px solid rgba(0, 181, 226, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={16} color="var(--color-aqua, #00B5E2)" />
                </div>
                <div>
                  <span style={{ color: '#94A3B8', fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>Phone</span>
                  <a
                    href="tel:+917985791210"
                    style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-aqua, #00B5E2)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  >
                    +91 7985791210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(0, 181, 226, 0.1)',
                    border: '1px solid rgba(0, 181, 226, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Mail size={16} color="var(--color-aqua, #00B5E2)" />
                </div>
                <div>
                  <span style={{ color: '#94A3B8', fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>Email Inquiries</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a
                      href="mailto:contact@terraquauav.com"
                      style={{ color: 'var(--color-aqua, #00B5E2)', textDecoration: 'none', fontWeight: 500 }}
                    >
                      contact@terraquauav.com
                    </a>
                    <a
                      href="mailto:Bussiness@terraquauav.com"
                      style={{ color: '#CBD5E1', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-aqua, #00B5E2)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                    >
                      Bussiness@terraquauav.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Corporate Address */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(0, 181, 226, 0.1)',
                    border: '1px solid rgba(0, 181, 226, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '3px'
                  }}
                >
                  <MapPin size={16} color="var(--color-aqua, #00B5E2)" />
                </div>
                <div>
                  <span style={{ color: '#94A3B8', fontSize: '0.82rem', display: 'block', marginBottom: '2px' }}>Corporate Office</span>
                  <div style={{ color: '#E2E8F0', lineHeight: '1.6', fontSize: '0.9rem' }}>
                    Cabin 20/21, Hall No. 401, Diamond Jubilee Academic Complex,<br />
                    IIT Kanpur, Uttar Pradesh 208016, India
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us & Visitor Badge Row */}
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--color-aqua, #00B5E2)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}
              >
                Follow us
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                {/* Social Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#CBD5E1',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 181, 226, 0.2)'
                      e.currentTarget.style.borderColor = '#00B5E2'
                      e.currentTarget.style.color = '#00B5E2'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                      e.currentTarget.style.color = '#CBD5E1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <Linkedin size={18} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#CBD5E1',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 181, 226, 0.2)'
                      e.currentTarget.style.borderColor = '#00B5E2'
                      e.currentTarget.style.color = '#00B5E2'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                      e.currentTarget.style.color = '#CBD5E1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <Instagram size={18} />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#CBD5E1',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 181, 226, 0.2)'
                      e.currentTarget.style.borderColor = '#00B5E2'
                      e.currentTarget.style.color = '#00B5E2'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                      e.currentTarget.style.color = '#CBD5E1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <Facebook size={18} />
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#CBD5E1',
                      transition: 'all 0.2s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 181, 226, 0.2)'
                      e.currentTarget.style.borderColor = '#00B5E2'
                      e.currentTarget.style.color = '#00B5E2'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
                      e.currentTarget.style.color = '#CBD5E1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>

                {/* Visitor Counter Pill Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    borderRadius: '20px',
                    border: '1px solid rgba(0, 181, 226, 0.4)',
                    overflow: 'hidden',
                    background: 'rgba(5, 15, 36, 0.85)',
                    boxShadow: '0 4px 14px rgba(0, 181, 226, 0.15)'
                  }}
                >
                  {/* Number Blocks */}
                  <div style={{ display: 'flex' }}>
                    {['1', '8', '1', '7', '4'].map((num, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: 'var(--color-aqua, #00B5E2)',
                          color: '#050F24',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          padding: '4px 7px',
                          borderRight: i < 4 ? '1px solid rgba(0,0,0,0.25)' : 'none',
                          fontFamily: 'monospace'
                        }}
                      >
                        {num}
                      </span>
                    ))}
                  </div>

                  {/* Badge Label */}
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      padding: '4px 12px',
                      textTransform: 'uppercase'
                    }}
                  >
                    TERRAQUA <span style={{ color: '#FF6A00' }}>UAV</span> VISITORS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: '#64748B'
          }}
        >
          <div>
            © 2026 <span style={{ color: '#CBD5E1' }}>TerrAqua UAV Solutions Private Limited</span>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Incubated at</span>
            <span style={{ color: '#FF6A00', fontWeight: 600 }}>SIIC IIT Kanpur</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
