import React, { useState } from 'react'
import { CheckCircle2, ChevronDown } from 'lucide-react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    details: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div>
      {/* ==================================================== */}
      {/* 1. TOP SECTION (HEADER & 3 CONTACT CARDS)            */}
      {/* ==================================================== */}
      <section
        style={{
          backgroundColor: '#050F24',
          color: '#FFFFFF',
          padding: '90px 24px 70px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* BACKGROUND TOPOGRAPHIC CONTOURS OVERLAY */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 50% 25%, rgba(0, 181, 226, 0.08) 0%, transparent 65%),
              repeating-radial-gradient(circle at 10% 20%, transparent 0, transparent 40px, rgba(0, 181, 226, 0.025) 41px, transparent 42px),
              repeating-radial-gradient(circle at 90% 80%, transparent 0, transparent 60px, rgba(0, 181, 226, 0.025) 61px, transparent 62px)`,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* MAIN HEADING (HOME PAGE TYPOGRAPHY STYLE) */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                fontWeight: 400,
                letterSpacing: '-0.04em',
                textTransform: 'uppercase',
                margin: 0,
                lineHeight: 1.15,
                color: '#FFFFFF'
              }}
            >
              GET IN <span style={{ color: 'var(--color-aqua, #00B5E2)', fontWeight: 400 }}>TOUCH</span>
            </h1>
          </div>

          {/* 3 CONTACT INFO CARDS (PALETTE BLUE GLASSSMORPHIC THEME) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Card 1: REGISTERED OFFICE */}
            <div
              style={{
                backgroundColor: 'rgba(10, 29, 61, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 181, 226, 0.25)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: '0 16px 36px rgba(5, 15, 36, 0.5)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(0, 181, 226, 0.6)'
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 181, 226, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(0, 181, 226, 0.25)'
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(5, 15, 36, 0.5)'
              }}
            >
              <h2
                style={{
                  color: 'var(--color-aqua, #00B5E2)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}
              >
                REGISTERED OFFICE
              </h2>
              <p
                style={{
                  color: '#CBD5E1',
                  fontSize: '0.96rem',
                  lineHeight: '1.75',
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: '-0.01em'
                }}
              >
                Eldeco County CX-02 Madison,<br />
                Sector-9, Jawaharpuram,<br />
                Barasirohi Kanpur, 209217<br />
                Uttar Pradesh, India
              </p>
            </div>

            {/* Card 2: CORPORATE OFFICE */}
            <div
              style={{
                backgroundColor: 'rgba(10, 29, 61, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 181, 226, 0.25)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: '0 16px 36px rgba(5, 15, 36, 0.5)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(0, 181, 226, 0.6)'
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 181, 226, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(0, 181, 226, 0.25)'
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(5, 15, 36, 0.5)'
              }}
            >
              <h2
                style={{
                  color: 'var(--color-aqua, #00B5E2)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}
              >
                CORPORATE OFFICE
              </h2>
              <p
                style={{
                  color: '#CBD5E1',
                  fontSize: '0.96rem',
                  lineHeight: '1.75',
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: '-0.01em'
                }}
              >
                Diamond Jubilee, Academic Complex,<br />
                Block 401, Cabin No. 20/21,<br />
                IIT Kanpur, Kanpur, 208016,<br />
                India
              </p>
            </div>

            {/* Card 3: CONTACT INFO */}
            <div
              style={{
                backgroundColor: 'rgba(10, 29, 61, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 181, 226, 0.25)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: '0 16px 36px rgba(5, 15, 36, 0.5)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(0, 181, 226, 0.6)'
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 181, 226, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(0, 181, 226, 0.25)'
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(5, 15, 36, 0.5)'
              }}
            >
              <h2
                style={{
                  color: 'var(--color-aqua, #00B5E2)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}
              >
                CONTACT INFO
              </h2>
              <div style={{ color: '#CBD5E1', fontSize: '0.96rem', lineHeight: '1.7', letterSpacing: '-0.01em' }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ color: '#FFFFFF', fontWeight: 500 }}>Phone, whatsapp:</div>
                  <a
                    href="tel:+917985791210"
                    style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-aqua, #00B5E2)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                  >
                    +91 7985791210
                  </a>
                </div>
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 500 }}>Email:</div>
                  <a
                    href="mailto:contact@terraquauav.com"
                    style={{ color: '#CBD5E1', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-aqua, #00B5E2)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                  >
                    contact@terraquauav.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. OFF-WHITE SECTION (MAP, WRITE TO US, QUOTE FORM)   */}
      {/* ==================================================== */}
      <section
        style={{
          backgroundColor: '#F8FAFC',
          color: '#0F172A',
          padding: '70px 24px 110px',
          borderTop: '1px solid #E2E8F0',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          {/* FULL-WIDTH GOOGLE MAP */}
          <div
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
              height: '460px',
              backgroundColor: '#FFFFFF',
              marginBottom: '80px'
            }}
          >
            <iframe
              title="TerrAqua UAV Office Location - IIT Kanpur"
              src="https://maps.google.com/maps?q=Diamond%20Jubilee%20Academic%20Complex%2C%20IIT%20Kanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* WRITE TO US & PRICE QUOTE FORM */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}
          >
            {/* Left Side: Write to us Text & Mailbox Illustration */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                  fontWeight: 700,
                  color: 'var(--color-aqua, #00B5E2)',
                  marginBottom: '20px',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15
                }}
              >
                Write to us
              </h2>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#1E293B',
                  lineHeight: 1.6,
                  maxWidth: '440px',
                  marginBottom: '48px',
                  fontWeight: 400,
                  letterSpacing: '-0.01em'
                }}
              >
                Please share your query with us, and we will be in touch to discuss your requirements.
              </p>

              {/* Mailbox / Airplane Vector Badge */}
              <div
                style={{
                  width: '120px',
                  height: '160px',
                  borderRadius: '60px 60px 20px 20px',
                  border: '1.5px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  background: '#FFFFFF',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)'
                }}
              >
                <svg
                  width="70"
                  height="90"
                  viewBox="0 0 70 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Dotted Flight Line */}
                  <path
                    d="M15 25 Q35 10 50 18"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Paper Airplane */}
                  <path
                    d="M50 18 L62 10 L56 26 L51 21 L50 18 Z"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Mailbox Arch */}
                  <path
                    d="M20 42 C20 30 50 30 50 42 L50 62 L20 62 Z"
                    stroke="#0F172A"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Mailbox Slot */}
                  <rect x="26" y="46" width="18" height="3" rx="1.5" fill="var(--color-aqua, #00B5E2)" />
                  {/* Mailbox Stand */}
                  <line x1="35" y1="62" x2="35" y2="78" stroke="#0F172A" strokeWidth="2" />
                  <line x1="26" y1="78" x2="44" y2="78" stroke="#0F172A" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div
              style={{
                backgroundColor: '#000000',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '16px',
                padding: '40px 36px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)'
              }}
            >
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  marginBottom: '32px',
                  letterSpacing: '-0.02em'
                }}
              >
                Get in touch / get a price quote
              </h3>

              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <CheckCircle2 color="var(--color-aqua, #00B5E2)" size={54} style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '8px' }}>Thank You!</h4>
                  <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                    Your inquiry has been received. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', details: '' })
                    }}
                    style={{
                      background: '#FFFFFF',
                      color: '#000000',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '8px 24px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* First Name */}
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.75rem', marginBottom: '6px' }}>
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 18px',
                        borderRadius: '24px',
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        color: '#FFFFFF',
                        fontSize: '0.85rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.75rem', marginBottom: '6px' }}>
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 18px',
                        borderRadius: '24px',
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        color: '#FFFFFF',
                        fontSize: '0.85rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Email * */}
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.75rem', marginBottom: '6px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 18px',
                        borderRadius: '24px',
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        color: '#FFFFFF',
                        fontSize: '0.85rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Phone * */}
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.75rem', marginBottom: '6px' }}>
                      Phone *
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        borderRadius: '24px',
                        padding: '0 14px',
                        background: 'transparent'
                      }}
                    >
                      <span style={{ color: '#94A3B8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '8px', borderRight: '1px solid rgba(255, 255, 255, 0.2)' }}>
                        🌐 <ChevronDown size={12} />
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 10px',
                          background: 'transparent',
                          border: 'none',
                          color: '#FFFFFF',
                          fontSize: '0.85rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  {/* Select a Service */}
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.75rem', marginBottom: '6px' }}>
                      Select a Service
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '11px 18px',
                          borderRadius: '24px',
                          background: '#000000',
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          color: formData.service ? '#FFFFFF' : '#94A3B8',
                          fontSize: '0.85rem',
                          outline: 'none',
                          appearance: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="" disabled>Select a Service</option>
                        <option value="Precision Agriculture" style={{ color: '#FFF', background: '#111827' }}>Precision Agriculture</option>
                        <option value="Water & Environmental Conservation" style={{ color: '#FFF', background: '#111827' }}>Water & Environmental Conservation</option>
                        <option value="Disaster Risk Reduction & Flood Mapping" style={{ color: '#FFF', background: '#111827' }}>Disaster Risk Reduction & Flood Mapping</option>
                        <option value="Urban & Infrastructure Topography" style={{ color: '#FFF', background: '#111827' }}>Urban & Infrastructure Topography</option>
                        <option value="Mining & Volumetric Survey" style={{ color: '#FFF', background: '#111827' }}>Mining & Volumetric Survey</option>
                        <option value="MapZest WebGIS Enterprise" style={{ color: '#FFF', background: '#111827' }}>MapZest WebGIS Enterprise</option>
                      </select>
                      <ChevronDown
                        size={15}
                        color="#94A3B8"
                        style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                      />
                    </div>
                  </div>

                  {/* Give us more details */}
                  <div>
                    <label style={{ display: 'block', color: '#CBD5E1', fontSize: '0.75rem', marginBottom: '6px' }}>
                      Give us more details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 18px',
                        borderRadius: '16px',
                        background: 'transparent',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                        color: '#FFFFFF',
                        fontSize: '0.85rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ textAlign: 'center', marginTop: '12px' }}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: '#FFFFFF',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '10px 48px',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, opacity 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
