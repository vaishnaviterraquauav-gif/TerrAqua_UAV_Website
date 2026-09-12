import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Data from './components/Data/Data'
import Team from './components/Company/Team'
import Solutions from './components/Solutions/Solutions'
import OurProduct from './components/OurProduct/OurProduct'
import OperationDronagiri from './components/OperationDronagiri/OperationDronagiri'
import Infozest from './components/Infozest/Infozest'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'
import HighlightsModal from './components/Highlights/HighlightsModal'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedDomainId, setSelectedDomainId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(
        '.section-black > div, .section-slate > div, .section-light > div, .card-light, .card-dark, .card-slate'
      )
      targets.forEach((el) => {
        if (!el.classList.contains('reveal-on-scroll')) {
          el.classList.add('reveal-on-scroll')
        }
        observer.observe(el)
      })
    }, 150)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [activeTab])

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />
      case 'data':
        return <Data setActiveTab={setActiveTab} />
      case 'team':
        return <Team />
      case 'solutions':
        return <Solutions 
          setActiveTab={setActiveTab} 
          selectedDomainId={selectedDomainId} 
          setSelectedDomainId={setSelectedDomainId} 
        />
      case 'product':
        return <OurProduct setActiveTab={setActiveTab} />
      case 'dronagiri':
        return <OperationDronagiri setActiveTab={setActiveTab} />
      case 'infozest':
        return <Infozest setActiveTab={setActiveTab} />
      case 'contact':
        return <Contact />
      default:
        return <Home setActiveTab={setActiveTab} />
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#000000', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setSelectedDomainId={setSelectedDomainId} 
      />
      <main style={{ flex: 1, width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} setSelectedDomainId={setSelectedDomainId} />
      <HighlightsModal setActiveTab={setActiveTab} />
    </div>
  )
}
