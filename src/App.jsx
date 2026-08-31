import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Team from './components/Company/Team'
import Solutions from './components/Solutions/Solutions'
import OurProduct from './components/OurProduct/OurProduct'
import OperationDronagiri from './components/OperationDronagiri/OperationDronagiri'
import Infozest from './components/Infozest/Infozest'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

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
      case 'team':
        return <Team />
      case 'solutions':
        return <Solutions setActiveTab={setActiveTab} />
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#000000' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main style={{ flex: 1 }}>
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  )
}
