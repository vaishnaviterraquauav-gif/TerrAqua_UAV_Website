import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'product', label: 'Our Product' },
    { id: 'team', label: 'Company / Team' },
    { id: 'dronagiri', label: 'Operation Dronagiri' },
    { id: 'infozest', label: 'Infozest' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id) => {
    setActiveTab(id)
    setMobileMenuOpen(false)
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

        {/* Desktop Right Spacer to keep navigation perfectly centered */}
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

