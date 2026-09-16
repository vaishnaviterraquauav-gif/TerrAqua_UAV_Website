import React, { useState, useRef, useEffect } from 'react'
import { 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight
} from 'lucide-react'

export default function Navbar({ activeTab, setActiveTab, setSelectedDomainId }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const solutionItems = [
    {
      id: null,
      title: "All Solutions Overview",
      desc: "Explore end-to-end aerial remote sensing & WebGIS solutions",
      isOverview: true
    },
    {
      id: "agriculture",
      title: "Agriculture",
      desc: "NDVI multispectral vigor & crop analytics"
    },
    {
      id: "climate-intelligence",
      title: "Climate Intelligence",
      desc: "Thermal emissions & microclimate models"
    },
    {
      id: "infrastructure-urban",
      title: "Infrastructure & Urban",
      desc: "Sub-centimeter 3D digital twins & mapping"
    },
    {
      id: "natural-resources",
      title: "Natural Resource Management",
      desc: "Forest canopy, biomass & water body auditing"
    },
    {
      id: "environmental-conservation",
      title: "Environmental Conservation",
      desc: "Carbon credits & ecological baseline audit"
    },
    {
      id: "disaster-risk",
      title: "Disaster Risk Reduction",
      desc: "Flood inundation, landslide & emergency response"
    }
  ]

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'data', label: 'Data' },
    { id: 'solutions', label: 'Solutions', hasDropdown: true },
    { id: 'product', label: 'Our Product' },
    { id: 'team', label: 'Team' },
    { id: 'dronagiri', label: 'Operation Dronagiri' },
    { id: 'infozest', label: 'Infozest' },
    { id: 'contact', label: 'Contact' },
  ]

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleNavClick = (id) => {
    setActiveTab(id)
    if (id === 'solutions' && setSelectedDomainId) {
      setSelectedDomainId(null)
    }
    setMobileMenuOpen(false)
    setSolutionsDropdownOpen(false)
    setMobileSolutionsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSolutionSelect = (domainId) => {
    setActiveTab('solutions')
    if (setSelectedDomainId) {
      setSelectedDomainId(domainId)
    }
    setSolutionsDropdownOpen(false)
    setMobileMenuOpen(false)
    setMobileSolutionsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="navbar-logo"
        >
          <img src="/image.png" alt="TerrAqua Logo" className="navbar-logo-img" />
        </div>

        {/* Desktop Nav Items */}
        <div className="navbar-desktop-menu">
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            if (item.hasDropdown) {
              return (
                <div 
                  key={item.id} 
                  ref={dropdownRef}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setSolutionsDropdownOpen(true)}
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick('solutions')}
                    className={`navbar-item-btn ${isActive ? 'active' : ''}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      size={14} 
                      style={{ 
                        transition: 'transform 0.25s ease',
                        transform: solutionsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }} 
                    />
                  </button>

                  {/* Monotonous White & Gray Dropdown Menu */}
                  {solutionsDropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '10px',
                      zIndex: 1100,
                      width: '560px'
                    }}>
                      <div style={{
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '1px solid #E2E8F0',
                        boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)',
                        padding: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                      }}>
                        {/* Featured Header: Overview Item */}
                        {solutionItems.filter(s => s.isOverview).map((sol, idx) => (
                          <div
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleSolutionSelect(sol.id)
                            }}
                            style={{
                              padding: '12px 16px',
                              borderRadius: '12px',
                              cursor: 'pointer',
                              background: '#F8FAFC',
                              border: '1px solid #E2E8F0',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#F1F5F9'
                              e.currentTarget.style.borderColor = '#CBD5E1'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = '#F8FAFC'
                              e.currentTarget.style.borderColor = '#E2E8F0'
                            }}
                          >
                            <div>
                              <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#0F172A', fontFamily: 'var(--font-universal)' }}>
                                {sol.title}
                              </div>
                              <div style={{ fontSize: '0.8rem', color: '#64748B', fontFamily: 'var(--font-universal)' }}>
                                {sol.desc}
                              </div>
                            </div>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              color: '#334155',
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              fontFamily: 'var(--font-universal)'
                            }}>
                              <span>View All</span> <ChevronRight size={15} />
                            </div>
                          </div>
                        ))}

                        {/* 2-Column Monotonous Grid */}
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '4px'
                        }}>
                          {solutionItems.filter(s => !s.isOverview).map((sol, idx) => (
                            <div
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleSolutionSelect(sol.id)
                              }}
                              style={{
                                padding: '10px 12px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                background: 'transparent',
                                border: '1px solid transparent',
                                textAlign: 'left',
                                transition: 'all 0.18s ease'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#F8FAFC'
                                e.currentTarget.style.borderColor = '#E2E8F0'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.borderColor = 'transparent'
                              }}
                            >
                              <div style={{
                                fontSize: '0.88rem',
                                fontWeight: 600,
                                color: '#0F172A',
                                marginBottom: '2px',
                                fontFamily: 'var(--font-universal)',
                                lineHeight: 1.25
                              }}>
                                {sol.title}
                              </div>
                              <div style={{
                                fontSize: '0.76rem',
                                color: '#64748B',
                                lineHeight: 1.35,
                                fontFamily: 'var(--font-universal)'
                              }}>
                                {sol.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`navbar-item-btn ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {/* Desktop Right Spacer to keep navigation centered */}
        <div className="navbar-spacer-desktop"></div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="navbar-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map((item) => {
              const isActive = activeTab === item.id

              if (item.hasDropdown) {
                return (
                  <div key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
                    <button
                      onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                      className={`navbar-mobile-item-btn ${isActive ? 'active' : ''}`}
                    >
                      <span style={{ fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
                      <ChevronDown 
                        size={18} 
                        style={{ 
                          transition: 'transform 0.25s ease',
                          transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: isActive ? 'var(--color-orange)' : '#64748B'
                        }} 
                      />
                    </button>

                    {mobileSolutionsOpen && (
                      <div style={{
                        marginLeft: '14px',
                        paddingLeft: '12px',
                        borderLeft: '2px solid rgba(255, 106, 0, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        marginTop: '4px',
                        marginBottom: '8px'
                      }}>
                        {solutionItems.map((sol, sIdx) => (
                          <div
                            key={sIdx}
                            onClick={() => handleSolutionSelect(sol.id)}
                            style={{
                              padding: '9px 12px',
                              background: sol.isOverview ? 'rgba(255, 106, 0, 0.08)' : 'transparent',
                              borderRadius: '8px',
                              color: sol.isOverview ? 'var(--color-orange)' : '#0F172A',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <div style={{
                              fontSize: '0.88rem',
                              fontWeight: 600,
                              color: sol.isOverview ? 'var(--color-orange)' : '#0F172A',
                              fontFamily: 'var(--font-universal)'
                            }}>
                              {sol.title}
                            </div>
                            <div style={{
                              fontSize: '0.74rem',
                              color: '#64748B',
                              marginTop: '1px',
                              fontFamily: 'var(--font-universal)'
                            }}>
                              {sol.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`navbar-mobile-item-btn ${isActive ? 'active' : ''}`}
                >
                  <span style={{ fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
                  {isActive && (
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-orange, #FF6A00)'
                    }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* Bottom Quick CTA for Mobile */}
          <div style={{ marginTop: '10px', paddingTop: '12px', borderTop: '1px solid rgba(10, 29, 61, 0.08)', display: 'flex', justifyContent: 'flex-start' }}>
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--color-orange) 0%, #E65000 100%)',
                color: '#FFFFFF',
                border: 'none',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(255, 106, 0, 0.25)',
                fontFamily: 'var(--font-universal)'
              }}
            >
              <span>Get in Touch</span>
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
