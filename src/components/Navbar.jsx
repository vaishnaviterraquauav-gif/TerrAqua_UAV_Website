import React, { useState, useRef, useEffect } from 'react'
import { 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react'

export default function Navbar({ activeTab, setActiveTab, setSelectedDomainId }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const solutionItems = [
    {
      id: null,
      title: "All Solutions (Overview)",
      isOverview: true
    },
    {
      id: "natural-resources",
      title: "Natural Resource Management"
    },
    {
      id: "disaster-risk",
      title: "Disaster Risk Reduction"
    },
    {
      id: "agriculture",
      title: "Agriculture"
    },
    {
      id: "environmental-conservation",
      title: "Environmental Conservation"
    },
    {
      id: "infrastructure-urban",
      title: "Infrastructure & Urban Planning"
    },
    {
      id: "climate-intelligence",
      title: "Climate Intelligence"
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

                  {/* Clean Text-Only Dropdown Menu */}
                  {solutionsDropdownOpen && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '8px',
                      zIndex: 1100,
                      minWidth: '280px'
                    }}>
                      <div style={{
                        background: '#FFFFFF',
                        borderRadius: '14px',
                        border: '1px solid rgba(27, 54, 73, 0.12)',
                        boxShadow: '0 18px 40px -10px rgba(10, 29, 61, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px'
                      }}>
                        {solutionItems.map((sol, idx) => (
                          <div
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleSolutionSelect(sol.id)
                            }}
                            style={{
                              padding: '10px 16px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              background: sol.isOverview ? 'rgba(255, 106, 0, 0.08)' : 'transparent',
                              borderBottom: sol.isOverview ? '1px solid rgba(27, 54, 73, 0.08)' : 'none',
                              marginBottom: sol.isOverview ? '4px' : '0',
                              fontSize: '0.92rem',
                              fontWeight: sol.isOverview ? 700 : 500,
                              color: sol.isOverview ? 'var(--color-orange)' : '#0A1D3D',
                              textAlign: 'left',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = sol.isOverview ? 'rgba(255, 106, 0, 0.15)' : '#F1F5F9'
                              e.currentTarget.style.color = 'var(--color-orange)'
                              e.currentTarget.style.paddingLeft = '20px'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = sol.isOverview ? 'rgba(255, 106, 0, 0.08)' : 'transparent'
                              e.currentTarget.style.color = sol.isOverview ? 'var(--color-orange)' : '#0A1D3D'
                              e.currentTarget.style.paddingLeft = '16px'
                            }}
                          >
                            <span>{sol.title}</span>
                          </div>
                        ))}
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
          {navItems.map((item) => {
            const isActive = activeTab === item.id

            if (item.hasDropdown) {
              return (
                <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className={`navbar-mobile-item-btn ${isActive ? 'active' : ''}`}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        transition: 'transform 0.25s ease',
                        transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }} 
                    />
                  </button>

                  {mobileSolutionsOpen && (
                    <div style={{
                      paddingLeft: '12px',
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
                            padding: '10px 14px',
                            background: sol.isOverview ? 'rgba(255, 106, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '8px',
                            color: sol.isOverview ? '#FF7A29' : '#FFFFFF',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            fontWeight: sol.isOverview ? 700 : 500
                          }}
                        >
                          <span>{sol.title}</span>
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
                <span>{item.label}</span>
                {isActive && <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>•</span>}
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}
