import React, { useState } from 'react'
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  Wifi,
  Sun,
  Cpu,
  Layers,
  Smartphone,
  ArrowRight,
  Droplets,
  CloudRain,
  Leaf,
  Globe,
  Radio,
  TrendingUp,
  ShieldAlert,
  Zap,
  Check,
  ChevronLeft,
  ChevronRight,
  WifiOff,
  ZapOff,
  DollarSign,
  FileText,
  Users,
  Sprout,
  Settings,
  ShieldCheck,
  Mail,
  Send
} from 'lucide-react'
import mapzestImg from '../../assets/mapzest-preview.png'

export default function OperationDronagiri({ setActiveTab }) {
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [activePillarIdx, setActivePillarIdx] = useState(0)
  const [mediaTab, setMediaTab] = useState('photos')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    details: ''
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const carouselItems = [
    {
      id: 'agri',
      title: 'Agriculture Sector',
      icon: <Leaf size={34} color="#FFFFFF" />,
      bgGradient: 'linear-gradient(135deg, rgba(0, 230, 168, 0.25) 0%, rgba(6, 9, 19, 0.95) 100%)',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'weather',
      title: 'Hyper-Local Weather',
      icon: <CloudRain size={34} color="#FFFFFF" />,
      bgGradient: 'linear-gradient(135deg, rgba(0, 181, 226, 0.25) 0%, rgba(6, 9, 19, 0.95) 100%)',
      img: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb17985?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 'iot',
      title: 'IoT Sensor Network',
      icon: <Wifi size={34} color="#FFFFFF" />,
      bgGradient: 'linear-gradient(135deg, rgba(255, 106, 0, 0.25) 0%, rgba(6, 9, 19, 0.95) 100%)',
      img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200'
    }
  ]

  const handlePrev = () => {
    setCarouselIdx((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCarouselIdx((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const challenges = [
    {
      id: 1,
      title: 'Traditional Method Limitations',
      desc: 'Traditional farming methods are struggling to meet rising food demand with limited resources.',
      icon: <TrendingUp size={24} color="#FFFFFF" />
    },
    {
      id: 2,
      title: 'Chemical Overuse & Degradation',
      desc: 'Heavy use of chemical inputs is degrading soil and water quality, raising costs and health risks.',
      icon: <Droplets size={24} color="#FFFFFF" />,
      isFeatured: true
    },
    {
      id: 3,
      title: 'Erratic Weather & Yield Risk',
      desc: 'Erratic weather and changing rainfall patterns reduce yields and increase farmer uncertainty.',
      icon: <CloudRain size={24} color="#FFFFFF" />
    },
    {
      id: 4,
      title: 'Expensive Data & Connectivity',
      desc: 'Farm-level data collection is expensive and connectivity is unreliable in many rural areas.',
      icon: <Wifi size={24} color="#FFFFFF" />
    }
  ]

  const problemSolutionMap = [
    {
      problem: 'Poor rural connectivity',
      problemDesc: 'Limited cellular coverage in remote agricultural belts makes real-time data sync difficult.',
      solution: 'LoRa / LoRaWAN Gateway Links',
      solutionDesc: 'Long-range, low-power data communication engineered specifically for weak cellular zones.'
    },
    {
      problem: 'Power shortages',
      problemDesc: 'Unreliable grid electricity for continuous in-situ sensor monitoring and data relays.',
      solution: 'Solar Powered Hardware',
      solutionDesc: 'Autonomous field monitoring sensor units operating 24/7 on clean solar power.'
    },
    {
      problem: 'High cost',
      problemDesc: 'Prohibitive hardware costs and complex subscriptions for smallholder farmers.',
      solution: 'Affordable Hardware & Shared Gateways',
      solutionDesc: 'Low-cost sensor nodes combined with community-shared gateway infrastructure.'
    }
  ]

  const pillars = [
    {
      id: 0,
      title: 'LoRa / LoRaWAN',
      desc: 'Long-range, low-power data links for fields with weak cellular coverage.'
    },
    {
      id: 1,
      title: 'Solar powered',
      desc: 'Reliable, autonomous field monitoring that runs on sunlight.'
    },
    {
      id: 2,
      title: 'Machine learning',
      desc: 'Yield predictions, irrigation suggestions and pest-risk alerts.'
    },
    {
      id: 3,
      title: 'Multi-layer data',
      desc: 'Combining UAV imagery, satellites and in-situ sensors.'
    },
    {
      id: 4,
      title: 'User-friendly apps',
      desc: 'Simple dashboards and SMS/WhatsApp alerts for farmers.'
    }
  ]

  const deliverables = [
    {
      category: 'Farmers',
      tagline: 'Direct Agricultural Impact',
      badgeColor: '#FF6A00',
      headerBg: 'linear-gradient(135deg, rgba(255, 106, 0, 0.25) 0%, rgba(255, 106, 0, 0.05) 100%)',
      borderColor: 'rgba(255, 106, 0, 0.4)',
      glowColor: 'rgba(255, 106, 0, 0.15)',
      icon: <Leaf size={26} color="#FF6A00" />,
      items: [
        'Direct, actionable crop advisory delivered via SMS & WhatsApp.',
        'Reduced input costs by targeting fertilizer & chemical application.',
        'Early pest and disease detection warnings to save crop yields.',
        'Optimized watering schedules preventing water stress and crop loss.'
      ]
    },
    {
      category: 'The Environment',
      tagline: 'Ecological Conservation',
      badgeColor: '#10B981',
      headerBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.05) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.4)',
      glowColor: 'rgba(16, 185, 129, 0.15)',
      icon: <Sun size={26} color="#10B981" />,
      items: [
        'Substantial reduction in chemical runoff into local water bodies.',
        'Soil microbiome protection through precision nutrient application.',
        'Water conservation driven by moisture-sensor guided irrigation.',
        'Long-term land quality preservation and carbon footprint reduction.'
      ]
    },
    {
      category: 'Local Economies',
      tagline: 'Socio-Economic Growth',
      badgeColor: '#00B5E2',
      headerBg: 'linear-gradient(135deg, rgba(0, 181, 226, 0.25) 0%, rgba(0, 181, 226, 0.05) 100%)',
      borderColor: 'rgba(0, 181, 226, 0.4)',
      glowColor: 'rgba(0, 181, 226, 0.15)',
      icon: <Globe size={26} color="#00B5E2" />,
      items: [
        'Affordable shared gateways enabling community-wide smart farming.',
        'Empowering smallholders with high-tech tools at accessible costs.',
        'Robust WebGIS data standards for district agricultural planners.',
        'Increased farm income stability and sustainable rural growth.'
      ]
    }
  ]

  // Get index items for carousel display (left, center, right)
  const leftIdx = (carouselIdx - 1 + carouselItems.length) % carouselItems.length
  const rightIdx = (carouselIdx + 1) % carouselItems.length

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <style>{`
        /* HERO SECTION WITH MAP OUTLINE OVERLAY */
        .hero-custom-section {
          position: relative;
          background-color: #050F24;
          background-image: 
            radial-gradient(circle at 50% 20%, rgba(255, 106, 0, 0.15) 0%, transparent 65%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='500' viewBox='0 0 1000 500'%3E%3Cpath fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1.5' d='M150,150 Q200,80 350,120 T600,100 T850,200 M100,300 Q300,380 500,320 T900,350 M250,220 Q400,180 550,250 T800,220'/%3E%3Ccircle cx='350' cy='120' r='3' fill='rgba(255,106,0,0.4)'/%3E%3Ccircle cx='500' cy='320' r='3' fill='rgba(255,106,0,0.4)'/%3E%3Ccircle cx='800' cy='220' r='3' fill='rgba(255,106,0,0.4)'/%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
          padding: 80px 24px 70px;
          text-align: center;
          color: #FFFFFF;
          overflow: hidden;
        }

        .hero-title-main {
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 400;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          line-height: 1.12;
          color: #FFFFFF;
          margin-bottom: 16px;
        }

        .hero-title-accent {
          color: var(--color-orange);
          text-shadow: 0 0 20px rgba(255, 106, 0, 0.4);
        }

        .hero-subheading-text {
          color: #CBD5E1;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          max-width: 860px;
          margin: 0 auto 36px;
          line-height: 1.6;
          font-weight: 400;
          opacity: 0.92;
        }

        /* CAROUSEL SHOWCASE LAYOUT MATCHING IMAGE */
        .carousel-showcase-wrapper {
          position: relative;
          max-width: 1120px;
          margin: 40px auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .carousel-arrow-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          z-index: 20;
          backdrop-filter: blur(10px);
        }

        .carousel-arrow-btn:hover {
          background: var(--color-orange);
          border-color: var(--color-orange);
          color: #FFFFFF;
          box-shadow: 0 0 25px rgba(255, 106, 0, 0.6);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-arrow-left { left: 0px; }
        .carousel-arrow-right { right: 0px; }

        .carousel-cards-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          width: 100%;
          padding: 20px 0;
          perspective: 1000px;
        }

        .showcase-card {
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .showcase-card-side {
          width: 300px;
          height: 380px;
          opacity: 0.55;
          transform: scale(0.9);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
          filter: brightness(0.85);
        }

        .showcase-card-side:hover {
          opacity: 0.85;
          transform: scale(0.94);
          border-color: rgba(255, 106, 0, 0.4);
        }

        .showcase-card-center {
          width: 380px;
          height: 460px;
          opacity: 1;
          transform: scale(1.05);
          border: 2px solid var(--color-orange);
          box-shadow: 0 25px 60px rgba(255, 106, 0, 0.3), 0 0 50px rgba(0,0,0,0.8);
          z-index: 5;
        }

        .showcase-card-img-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .showcase-card:hover .showcase-card-img-bg {
          transform: scale(1.08);
        }

        .showcase-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(6, 9, 19, 0.4) 40%, rgba(6, 9, 19, 0.95) 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 24px 20px 32px 20px;
          text-align: center;
        }

        .showcase-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: rgba(18, 24, 38, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px auto;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .showcase-card-title {
          font-size: 1.55rem;
          font-weight: 500;
          color: #FFFFFF;
          letter-spacing: -0.03em;
          line-height: 1.25;
        }

        /* PAGINATION DOTS */
        .carousel-dots-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 24px;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          width: 32px;
          border-radius: 10px;
          background: var(--color-orange);
          box-shadow: 0 0 12px rgba(255, 106, 0, 0.6);
        }

        /* INTERACTIVE STACKED DASHED CARDS MATCHING REFERENCE IMAGE */
        .problem-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
          padding: 20px 0;
        }

        .problem-card-stack-wrapper {
          position: relative;
          perspective: 1000px;
          cursor: pointer;
        }

        .problem-card-stack-bg {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: #1E293B;
          transform: rotate(5deg) scale(0.97);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          z-index: 1;
        }

        .problem-card-stack-wrapper:hover .problem-card-stack-bg {
          opacity: 1;
          transform: rotate(-6deg) scale(1.02) translateY(-6px);
        }

        .problem-card-inner {
          position: relative;
          z-index: 2;
          border-radius: 24px;
          padding: 32px 26px;
          min-height: 290px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #FFFFFF;
          border: 2px dashed #CBD5E1;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.04);
        }

        .problem-card-stack-wrapper:hover .problem-card-inner {
          transform: rotate(-3deg) translateY(-10px) scale(1.02);
          border-color: #94A3B8;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
        }

        .problem-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #0F172A;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .problem-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.3;
        }

        .problem-card-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-top: 24px;
        }

        .solution-side-card-red:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: #EF4444 !important;
          box-shadow: 0 15px 35px rgba(239, 68, 68, 0.25) !important;
        }

        .solution-side-card-green:hover {
          transform: translateY(-4px) scale(1.02);
          border-color: #10B981 !important;
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.25) !important;
        }

        .pillar-hover-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 36px 26px;
          border: 1px solid #E2E8F0;
          box-shadow: none;
          transform: translateY(0);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: center;
        }

        .pillar-hover-card:hover {
          background: #FFF7ED !important;
          border-color: #FF6A00 !important;
          box-shadow: none !important;
          transform: translateY(-8px) !important;
        }

        .adv-challenge-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 32px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 25px rgba(10, 29, 61, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .adv-challenge-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 181, 226, 0.15);
          border-color: #00B5E2;
        }

        .adv-pillar-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 36px 30px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .adv-pillar-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FF6A00 0%, #00B5E2 100%);
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .adv-pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 44px rgba(255, 106, 0, 0.16);
          border-color: #FF6A00;
        }

        .adv-pillar-card:hover::before {
          opacity: 1;
        }

        .matrix-problem-card {
          background: linear-gradient(145deg, rgba(239, 68, 68, 0.08) 0%, rgba(10, 29, 61, 0.85) 100%);
          border: 1px solid rgba(239, 68, 68, 0.35);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .matrix-problem-card:hover {
          border-color: rgba(239, 68, 68, 0.6);
          box-shadow: 0 24px 50px rgba(239, 68, 68, 0.15);
        }

        .matrix-solution-card {
          background: linear-gradient(145deg, rgba(0, 181, 226, 0.12) 0%, rgba(18, 50, 77, 0.9) 100%);
          border: 1px solid rgba(0, 181, 226, 0.45);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 40px rgba(0, 181, 226, 0.15);
          transition: all 0.3s ease;
        }

        .matrix-solution-card:hover {
          border-color: rgba(0, 181, 226, 0.8);
          box-shadow: 0 24px 50px rgba(0, 181, 226, 0.25);
        }

        .deliverable-card {
          background: linear-gradient(160deg, #12324D 0%, #0A1D3D 100%);
          border-radius: 24px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 16px 36px rgba(5, 15, 36, 0.4);
          transition: all 0.35s ease;
          position: relative;
        }

        .deliverable-card:hover {
          transform: translateY(-8px);
        }

        @media (max-width: 840px) {
          .showcase-card-side { display: none; }
          .showcase-card-center { width: 100%; height: 400px; }
          .carousel-arrow-btn { top: 40%; }
        }
      `}</style>

      {/* 1. HERO BANNER SECTION MATCHING USER IMAGE EXACTLY */}
      <section className="hero-custom-section">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Main Title */}
          <h1 className="hero-title-main">
            NEAR-REAL-TIME HYPER-LOCAL WEATHER & <br />
            <span className="hero-title-accent">INSIGHTS FOR FARMER</span>
          </h1>

          {/* Subheading */}
          <p className="hero-subheading-text">
            Actionable farm-level data delivered via low-cost sensors and satellite analytics — helping farmers decide when and how to act, not just what to read
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
            <button
              onClick={() => scrollToSection('challenges')}
              className="btn-orange"
              style={{
                padding: '14px 34px',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '12px'
              }}
            >
              Learn more <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="btn-slate"
              style={{
                padding: '14px 34px',
                fontSize: '1rem',
                borderRadius: '12px'
              }}
            >
              Contact us
            </button>
          </div>

          {/* UPGRADED CAROUSEL SHOWCASE WITH INTERACTIVE SELECTION */}
          <div className="carousel-showcase-wrapper">
            <button onClick={handlePrev} className="carousel-arrow-btn carousel-arrow-left" aria-label="Previous Slide">
              <ChevronLeft size={26} />
            </button>

            <div className="carousel-cards-grid">
              {/* Left Side Card (Clickable to switch) */}
              <div
                onClick={() => setCarouselIdx(leftIdx)}
                className="showcase-card showcase-card-side"
                style={{ background: carouselItems[leftIdx].bgGradient }}
              >
                <img
                  src={carouselItems[leftIdx].img}
                  alt={carouselItems[leftIdx].title}
                  className="showcase-card-img-bg"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="showcase-card-overlay">
                  <div>
                    <div className="showcase-icon-box">{carouselItems[leftIdx].icon}</div>
                    <div className="showcase-card-title">{carouselItems[leftIdx].title}</div>
                  </div>
                </div>
              </div>

              {/* Center Highlighted Active Card */}
              <div
                className="showcase-card showcase-card-center"
                style={{ background: carouselItems[carouselIdx].bgGradient }}
              >
                <img
                  src={carouselItems[carouselIdx].img}
                  alt={carouselItems[carouselIdx].title}
                  className="showcase-card-img-bg"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="showcase-card-overlay">
                  <div>
                    <div className="showcase-icon-box">{carouselItems[carouselIdx].icon}</div>
                    <div className="showcase-card-title">{carouselItems[carouselIdx].title}</div>
                  </div>
                </div>
              </div>

              {/* Right Side Card (Clickable to switch) */}
              <div
                onClick={() => setCarouselIdx(rightIdx)}
                className="showcase-card showcase-card-side"
                style={{ background: carouselItems[rightIdx].bgGradient }}
              >
                <img
                  src={carouselItems[rightIdx].img}
                  alt={carouselItems[rightIdx].title}
                  className="showcase-card-img-bg"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="showcase-card-overlay">
                  <div>
                    <div className="showcase-icon-box">{carouselItems[rightIdx].icon}</div>
                    <div className="showcase-card-title">{carouselItems[rightIdx].title}</div>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={handleNext} className="carousel-arrow-btn carousel-arrow-right" aria-label="Next Slide">
              <ChevronRight size={26} />
            </button>

            {/* Pagination Dots */}
            <div className="carousel-dots-container">
              {carouselItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIdx(idx)}
                  className={`carousel-dot ${idx === carouselIdx ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM STATEMENT SECTION (INTERACTIVE DASHED CARDS WITH TILT STACK EFFECT MATCHING REFERENCE IMAGE) */}
      <section id="challenges" style={{ padding: '90px 24px', backgroundColor: '#F8FAFC', color: '#0F172A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '6px 18px',
                borderRadius: '20px',
                background: 'rgba(255, 106, 0, 0.1)',
                color: 'var(--color-orange)',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '16px',
                border: '1px solid rgba(255, 106, 0, 0.25)'
              }}
            >
              PROBLEM STATEMENT
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3rem)', color: 'var(--text-heading-dark)', marginBottom: '18px', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15 }}>
              Practical challenges smallholders face in day-to-day farming — <span style={{ color: 'var(--color-orange)' }}>and how we plan to help</span>
            </h2>
          </div>

          <div className="problem-cards-grid">
            {challenges.map((item) => (
              <div
                key={item.id}
                className="problem-card-stack-wrapper"
              >
                {/* Back card layer creating stacked deck look from reference image */}
                <div className="problem-card-stack-bg" />

                {/* Main Front Dashed Card */}
                <div className="problem-card-inner">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div className="problem-icon-box">
                      {item.icon}
                    </div>
                    <div className="problem-card-title">
                      {item.title}
                    </div>
                  </div>

                  <div className="problem-card-desc">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLEAN 3-COLUMN OUR SOLUTION SECTION */}
      <section
        id="solution"
        style={{
          padding: '90px 24px',
          backgroundColor: '#060B18',
          color: '#FFFFFF'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section Title */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: '#FFFFFF', fontWeight: 400, letterSpacing: '-0.04em' }}>
              Our Solution
            </h2>
          </div>

          {/* 3 Columns Grid Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* LEFT COLUMN: PROBLEMS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#EF4444', fontWeight: 600, marginBottom: '8px' }}>
                Problems
              </h3>

              {/* Item 1 */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <WifiOff size={22} color="#EF4444" />
                </div>
                <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>Poor rural connectivity</span>
              </div>

              {/* Item 2 */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ZapOff size={22} color="#EF4444" />
                </div>
                <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>Power shortages</span>
              </div>

              {/* Item 3 */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <DollarSign size={22} color="#EF4444" />
                </div>
                <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>High cost</span>
              </div>
            </div>

            {/* CENTER COLUMN: CLEAN MOCKUP IMAGE (NO SHADOW, NO EXTRA BADGES) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: '#0F172A'
                }}
              >
                <img
                  src={mapzestImg}
                  alt="TerrAqua Platform Dashboard"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN: SOLUTION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#10B981', fontWeight: 600, marginBottom: '8px' }}>
                Solution
              </h3>

              {/* Item 1 */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Sun size={22} color="#10B981" />
                </div>
                <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>Solar powered & low-consumption sensors</span>
              </div>

              {/* Item 2 */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Radio size={22} color="#10B981" />
                </div>
                <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>Affordable hardware & shared gateways</span>
              </div>

              {/* Item 3 */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.65)',
                  borderRadius: '16px',
                  padding: '18px 22px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <FileText size={22} color="#10B981" />
                </div>
                <span style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 500 }}>Short, actionable advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE TECHNOLOGY PILLARS (RESPONSIVE FLEX GRID WITH PURE CURSOR HOVER POP-UP EFFECT) */}
      <section style={{ padding: '90px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: '#0F172A', fontWeight: 400, letterSpacing: '-0.04em', margin: 0 }}>
              Core Technological <span style={{ color: 'var(--color-orange)' }}>Pillars</span>
            </h2>
          </div>

          {/* Balanced 5-Card Flex Container (3 on top, 2 centered below) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '28px'
            }}
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="pillar-hover-card"
                style={{
                  flex: '1 1 280px',
                  maxWidth: '360px',
                  minWidth: '260px'
                }}
              >
                <h3 style={{ fontSize: '1.35rem', color: '#1E293B', marginBottom: '12px', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: '1.6', margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION UPDATE SECTION WITH LIGHT ULTRA-PREMIUM CARDS & ZERO SHADOWS */}
      <section style={{ padding: '30px 24px 70px', backgroundColor: '#F8FAFC', color: '#0F172A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Section Header Row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0F172A', fontWeight: 400, letterSpacing: '-0.04em', margin: 0 }}>
              Implementation <span style={{ color: '#10B981' }}>update</span>
            </h2>

            <span
              style={{
                padding: '6px 18px',
                borderRadius: '20px',
                background: '#10B981',
                color: '#FFFFFF',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              Ongoing
            </span>
          </div>

          {/* 2-Column Grid Layout: Left Gallery Box + Right Pilot Status Box */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              alignItems: 'start'
            }}
          >
            {/* LEFT CONTAINER: MEDIA GALLERY */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: 'none'
              }}
            >
              {/* Tab Switcher (Photos / Videos) */}
              <div
                style={{
                  display: 'inline-flex',
                  background: '#F1F5F9',
                  padding: '4px',
                  borderRadius: '12px',
                  marginBottom: '20px'
                }}
              >
                <button
                  onClick={() => setMediaTab('photos')}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '8px',
                    background: mediaTab === 'photos' ? '#0F172A' : 'transparent',
                    color: mediaTab === 'photos' ? '#FFFFFF' : '#64748B',
                    border: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Photos
                </button>

                <button
                  onClick={() => setMediaTab('videos')}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '8px',
                    background: mediaTab === 'videos' ? '#0F172A' : 'transparent',
                    color: mediaTab === 'videos' ? '#FFFFFF' : '#64748B',
                    border: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Videos
                </button>
              </div>

              {/* Photos Grid */}
              {mediaTab === 'photos' ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px'
                  }}
                >
                  {/* Photo 1: Field Sensor Station / Survey Team */}
                  <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', height: '165px', background: '#F1F5F9' }}>
                    <img
                      src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800"
                      alt="Field Sensor Deployment Team"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Photo 2: Agriculture Survey Drone */}
                  <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', height: '165px', background: '#F1F5F9' }}>
                    <img
                      src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
                      alt="Field Survey Payload Drone"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Photo 3: Soil Ground Texture */}
                  <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', height: '165px', background: '#F1F5F9' }}>
                    <img
                      src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800"
                      alt="Soil Composition Analysis"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Photo 4: GIS Farmland Plot Survey */}
                  <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', height: '165px', background: '#F1F5F9' }}>
                    <img
                      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                      alt="GIS Farmland Plot Boundary"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ) : (
                /* Videos Grid */
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px'
                  }}
                >
                  <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', height: '165px', background: '#0F172A', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800"
                      alt="Drone Flight Video"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    />
                    <div style={{ position: 'absolute', width: '48px', height: '48px', borderRadius: '50%', background: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>
                      ▶
                    </div>
                  </div>

                  <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', height: '165px', background: '#0F172A', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800"
                      alt="Sensor Installation Video"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    />
                    <div style={{ position: 'absolute', width: '48px', height: '48px', borderRadius: '50%', background: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>
                      ▶
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT CONTAINER: PILOT STATUS CARD */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: 'none'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '20px' }}>
                Pilot status
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Status Box 1: Phase */}
                <div
                  style={{
                    background: '#F8FAFC',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 500 }}>Phase</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
                    <span style={{ fontSize: '1.05rem', color: '#0F172A', fontWeight: 600 }}>Deployment</span>
                  </div>
                </div>

                {/* Status Box 2: Location */}
                <div
                  style={{
                    background: '#F8FAFC',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 500 }}>Location</span>
                  <span style={{ fontSize: '1.05rem', color: '#0F172A', fontWeight: 600 }}>Varanasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERABLES & IMPACT SECTION (MATCHING USER'S EXACT REFERENCE IMAGE WHILE PRESERVING DARK BACKGROUND) */}
      <section style={{ padding: '90px 24px', backgroundColor: '#050F24', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Main Title & Subtitle Matching Home Page Typography & Color System */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#FFFFFF', fontWeight: 400, letterSpacing: '-0.04em', marginBottom: '14px' }}>
              Impact & <span style={{ color: 'var(--color-orange)' }}>Outcomes</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', fontWeight: 400, margin: 0 }}>
              What we aim to deliver to farmers, the environment and local economies
            </p>
          </div>

          {/* Top Row: 4 Metric Cards (White Cards on Dark Background) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px 24px',
                color: '#0F172A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px'
              }}
            >
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <Users size={26} color="#1E293B" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B192C', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                  Farmers reached
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                  Target: 500+ in the pilot year
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px 24px',
                color: '#0F172A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px'
              }}
            >
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <Sprout size={26} color="#1E293B" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B192C', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                  Sustainable Agriculture
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                  Lower synthetic inputs, improved soil health
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px 24px',
                color: '#0F172A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px'
              }}
            >
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <Settings size={26} color="#1E293B" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B192C', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                  Productivity
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                  Expected 15–20% efficiency gains
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '28px 24px',
                color: '#0F172A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px'
              }}
            >
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <ShieldCheck size={26} color="#1E293B" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0B192C', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                  Risk mitigation
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
                  Realtime alerts reduce weather and pest losses
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Card: Key Deliverables & Progress */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '36px 32px',
              color: '#0F172A'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0B192C', marginBottom: '32px', letterSpacing: '-0.02em' }}>
              Key deliverables & progress
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Progress 1 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B' }}>
                    Central data repository
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-aqua)' }}>
                    75%
                  </span>
                </div>
                <div style={{ width: '100%', height: '10px', background: '#E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: '75%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #00B5E2 0%, #10B981 100%)',
                      borderRadius: '10px',
                      transition: 'width 1s ease-in-out'
                    }}
                  />
                </div>
              </div>

              {/* Progress 2 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B' }}>
                    ML prediction models
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-orange)' }}>
                    60%
                  </span>
                </div>
                <div style={{ width: '100%', height: '10px', background: '#E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: '60%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #FF6A00 0%, #00B5E2 100%)',
                      borderRadius: '10px',
                      transition: 'width 1s ease-in-out'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADDITIONAL INFORMATION SECTION (LIGHT SLATE THEME) */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F8FAFC', color: '#0F172A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Main Title & Subtitle */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#0F172A', fontWeight: 400, letterSpacing: '-0.04em', marginBottom: '14px' }}>
              Additional <span style={{ color: 'var(--color-orange)' }}>Information</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.1rem', fontWeight: 400, margin: 0 }}>
              What we aim to deliver to farmers, the environment and local economies
            </p>
          </div>

          {/* Top Row: 2 Cards Side-by-Side */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '28px'
            }}
          >
            {/* Card 1: Media & press */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#0F172A', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  Media & press
                </h3>
                <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  We will publish press notes once milestones are cross-validated — subscribe to updates for announcements.
                </p>
              </div>

              <div>
                <button
                  style={{
                    padding: '10px 26px',
                    borderRadius: '10px',
                    background: '#0F172A',
                    color: '#FFFFFF',
                    border: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  Notify me
                </button>
              </div>
            </div>

            {/* Card 2: Sustainable Development Goals */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '32px 28px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '200px'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', color: '#0F172A', fontWeight: 700, marginBottom: '20px', letterSpacing: '-0.02em' }}>
                Sustainable Development Goals
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                {/* SDG 1: No Poverty */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#F8FAFC', padding: '12px 14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#E5243B', color: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.75rem', flexShrink: 0 }}>
                    <span>1</span>
                    <span style={{ fontSize: '0.52rem', textTransform: 'uppercase' }}>NO POVERTY</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 700, margin: 0 }}>No poverty</h4>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Local income support</span>
                  </div>
                </div>

                {/* SDG 2: Zero Hunger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#F8FAFC', padding: '12px 14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#DDA63A', color: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.75rem', flexShrink: 0 }}>
                    <span>2</span>
                    <span style={{ fontSize: '0.52rem', textTransform: 'uppercase' }}>ZERO HUNGER</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 700, margin: 0 }}>Zero hunger</h4>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Improved yields & nutrition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Green Banner Card: Transforming Agriculture */}
          <div
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              borderRadius: '24px',
              padding: '48px 32px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#FFFFFF', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.03em' }}>
              Transforming agriculture
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.95)', maxWidth: '780px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: 400 }}>
              Operation Dronagiri brings simple, timely information to farmers so they can make better choices — more resilient harvests and sustainable livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* 7. WRITE TO US / GET IN TOUCH / PRICE QUOTE SECTION MATCHING USER'S REFERENCE IMAGE */}
      <section style={{ padding: '90px 24px', backgroundColor: '#000000', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Background SVG Wireframe Globe Overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)', width: '650px', height: '650px', opacity: 0.15, pointerEvents: 'none' }}>
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ width: '100%', height: '100%', color: '#00B5E2' }}>
            <circle cx="100" cy="100" r="80" strokeDasharray="2 2" />
            <ellipse cx="100" cy="100" rx="80" ry="30" strokeDasharray="3 3" />
            <ellipse cx="100" cy="100" rx="80" ry="60" strokeDasharray="3 3" />
            <ellipse cx="100" cy="100" rx="30" ry="80" strokeDasharray="3 3" />
            <ellipse cx="100" cy="100" rx="60" ry="80" strokeDasharray="3 3" />
            <line x1="20" y1="100" x2="180" y2="100" />
            <line x1="100" y1="20" x2="100" y2="180" />
          </svg>
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* LEFT COLUMN: WRITE TO US */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', color: '#00B5E2', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '18px' }}>
                Write to us
              </h2>

              <p style={{ color: '#E2E8F0', fontSize: '1.15rem', lineHeight: '1.6', maxWidth: '440px', marginBottom: '36px', fontWeight: 400 }}>
                Please share your query with us, and we will be in touch to discuss your requirements
              </p>

              {/* Capsule Icon Box */}
              <div
                style={{
                  width: '90px',
                  height: '110px',
                  borderRadius: '45px',
                  border: '1.5px solid rgba(255, 255, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.03)'
                }}
              >
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={36} color="#FFFFFF" strokeWidth={1.5} />
                  <Send size={16} color="#00B5E2" style={{ position: 'absolute', top: '-10px', right: '-12px' }} />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM CARD */}
            <div
              style={{
                background: '#0B0F17',
                borderRadius: '20px',
                padding: '40px 36px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 700, textAlign: 'center', marginBottom: '28px', letterSpacing: '-0.02em' }}>
                Get in touch / get a price quote
              </h3>

              {formSubmitted ? (
                <div style={{ padding: '32px 24px', background: 'rgba(0, 181, 226, 0.1)', border: '1px solid rgba(0, 181, 226, 0.3)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#00B5E2', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    ✓
                  </div>
                  <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '8px' }}>Thank You!</h4>
                  <p style={{ color: '#CBD5E1', fontSize: '0.96rem', margin: 0, lineHeight: 1.5 }}>
                    Your inquiry has been received. Our team will review your requirements and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* First name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: 500 }}>
                      First name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 18px',
                        borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Last name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: 500 }}>
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 18px',
                        borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Email * */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: 500 }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 18px',
                        borderRadius: '30px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Phone * */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: 500 }}>
                      Phone *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 18px 12px 42px',
                          borderRadius: '30px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF',
                          fontSize: '0.9rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                      <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.95rem' }}>
                        🌐
                      </span>
                    </div>
                  </div>

                  {/* Select a service */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: 500 }}>
                      Select a service
                    </label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 18px',
                        borderRadius: '30px',
                        background: '#0B0F17',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="">Select a service...</option>
                      <option value="uav">UAV Crop Health Survey</option>
                      <option value="iot">LoRa / LoRaWAN Sensors</option>
                      <option value="webgis">MapZest WebGIS Access</option>
                      <option value="custom">Custom Farm Deployment</option>
                    </select>
                  </div>

                  {/* Give us more details */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '6px', fontWeight: 500 }}>
                      Give us more details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Give us more details"
                      value={formData.details}
                      onChange={e => setFormData({ ...formData, details: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button
                      type="submit"
                      style={{
                        padding: '12px 48px',
                        borderRadius: '30px',
                        background: '#FFFFFF',
                        color: '#000000',
                        border: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
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

