import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight, Download, ExternalLink } from 'lucide-react';

export default function HighlightsModal({ setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Trigger popup after 10 seconds (10,000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const slides = [
    {
      id: 0,
      title: 'Map, Track, Collect, Share',
      subtitle: 'Track the Path. Capture the Moment. Share the Experience.',
      badge: 'Mobile & Web App',
      btnText: 'DOWNLOAD',
      btnAction: () => {
        window.open('https://play.google.com/store/search?q=mapzest&c=apps&hl=en_IN', '_blank', 'noopener,noreferrer');
      },
      fullBannerImg: '/highlightmapzest.png',
      thumbImg: '/highlightmapzest.png',
      thumbTitle: 'MapZest App',
      bgType: 'map'
    },
    {
      id: 1,
      title: 'TerrAqua at GATES Global Summit',
      subtitle: 'Showcasing IIT Kanpur-incubated geospatial AI to international industry delegates.',
      badge: 'Summit Spotlight',
      btnText: 'READ HIGHLIGHT',
      btnAction: () => {
        setIsOpen(false);
        if (setActiveTab) setActiveTab('infozest');
      },
      fullBannerImg: '/highlight2.png',
      thumbImg: '/highlight2.png',
      thumbTitle: 'GATES Summit',
      bgType: 'event'
    },
    {
      id: 2,
      title: 'TerrAqua UAV Technology Expo',
      subtitle: 'Showcasing our complete hardware, IoT sensors, geospatial AI platform & client solutions.',
      badge: 'Technology Stack',
      btnText: 'EXPLORE SOLUTIONS',
      btnAction: () => {
        setIsOpen(false);
        if (setActiveTab) setActiveTab('solutions');
      },
      fullBannerImg: '/highlight3.png',
      thumbImg: '/highlight3.png',
      thumbTitle: 'TerrAqua Expo',
      bgType: 'expo'
    }
  ];

  // Auto-advance slides every 5 seconds when not paused
  useEffect(() => {
    if (!isOpen || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isOpen, isPaused, slides.length]);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleGoToBlogs = () => {
    setIsOpen(false);
    if (setActiveTab) {
      setActiveTab('infozest');
    }
  };

  if (!isOpen) return null;

  const currentItem = slides[currentSlide];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 28px)',
        backgroundColor: 'rgba(10, 29, 61, 0.38)',
        animation: 'highlightsFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onClick={() => setIsOpen(false)}
    >
      <style>{`
        @keyframes highlightsFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes highlightsModalSlideUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .highlights-card-hover {
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .highlights-nav-btn {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(10, 29, 61, 0.12);
          color: #0A1D3D;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(10, 29, 61, 0.08);
        }

        .highlights-nav-btn:hover {
          background: #FF6A00;
          color: #FFFFFF;
          border-color: #FF6A00;
          transform: scale(1.08);
          box-shadow: 0 6px 16px rgba(255, 106, 0, 0.3);
        }

        .highlights-thumb-card {
          border: 1px solid rgba(10, 29, 61, 0.08);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
          overflow: hidden;
          background: #F8FAFC;
        }

        .highlights-thumb-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 106, 0, 0.3);
          box-shadow: 0 4px 14px rgba(10, 29, 61, 0.06);
        }

        .highlights-thumb-card.active {
          background: #FFFFFF;
          border-color: rgba(255, 106, 0, 0.45);
          box-shadow: 0 4px 14px rgba(255, 106, 0, 0.1);
          transform: translateY(-1px);
        }

        .highlights-blog-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-heading-dark, #0A1D3D);
          font-family: var(--font-universal);
          font-weight: 600;
          letter-spacing: -0.01em;
          font-size: 0.95rem;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 10px;
          background: rgba(10, 29, 61, 0.04);
          border: 1px solid rgba(10, 29, 61, 0.08);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .highlights-blog-link:hover {
          background: #0A1D3D;
          color: #FFFFFF;
          transform: translateX(4px);
          box-shadow: 0 4px 14px rgba(10, 29, 61, 0.15);
        }

        .highlights-blog-link:hover .arrow-icon {
          transform: translateX(4px);
        }

        .arrow-icon {
          transition: transform 0.25s ease;
        }

        .highlights-cta-btn {
          background: linear-gradient(135deg, #FF6A00 0%, #FF8533 100%);
          color: #FFFFFF;
          font-family: var(--font-universal);
          border: none;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
          padding: 10px 22px;
          border-radius: 9999px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 18px rgba(255, 106, 0, 0.35);
          transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .highlights-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(255, 106, 0, 0.45);
          background: linear-gradient(135deg, #E65C00 0%, #FF771F 100%);
        }

        @media (max-width: 900px) {
          .highlights-container-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            max-height: 85vh;
            overflow-y: auto;
          }
          .highlights-left-panel {
            text-align: center;
            align-items: center !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(10, 29, 61, 0.08);
            padding-bottom: 20px !important;
            padding-right: 0 !important;
          }
        }
      `}</style>

      {/* Main Modal Card (Light Background Theme) */}
      <div
        className="highlights-card-hover"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '960px',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 36px)',
          boxShadow: '0 25px 50px -12px rgba(10, 29, 61, 0.35), 0 0 0 1px rgba(10, 29, 61, 0.08)',
          animation: 'highlightsModalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Subtle decorative background glow in corner */}
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 106, 0, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 181, 226, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close Highlights"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#F1F5F9',
            border: '1px solid rgba(10, 29, 61, 0.1)',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#E2E8F0';
            e.currentTarget.style.color = '#0A1D3D';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#F1F5F9';
            e.currentTarget.style.color = '#475569';
          }}
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Grid Content */}
        <div
          className="highlights-container-grid"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1.05fr 1.75fr',
            gap: 'clamp(20px, 3.5vw, 36px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Title, Description, Blogs CTA */}
          <div
            className="highlights-left-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              paddingRight: 'clamp(10px, 2vw, 20px)'
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-universal)',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                fontWeight: 600,
                color: 'var(--text-heading-dark, #0A1D3D)',
                letterSpacing: '-0.04em',
                lineHeight: 1.15,
                margin: '0 0 16px 0'
              }}
            >
              Highlights
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-universal)',
                fontSize: 'clamp(0.92rem, 1.1vw, 1rem)',
                lineHeight: 1.6,
                color: 'var(--text-muted-gray, #475569)',
                letterSpacing: '-0.01em',
                margin: '0 0 24px 0',
                fontWeight: 400
              }}
            >
              Stay updated with our newest features, event news, and handy tips on our blog. Check it often for instant alerts so you never miss what's coming next!
            </p>

            <button
              onClick={handleGoToBlogs}
              className="highlights-blog-link"
              aria-label="View All Blogs"
            >
              <span>BLOGS</span>
              <span className="arrow-icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <ArrowRight size={18} strokeWidth={2.4} />
              </span>
            </button>
          </div>

          {/* Right Column: Featured Interactive Showcase Card & Thumbnails */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Active Highlight Showcase Card */}
            <div
              style={{
                position: 'relative',
                background: currentItem.fullBannerImg ? '#FFFFFF' : '#F8FAFC',
                borderRadius: '18px',
                border: '1px solid rgba(10, 29, 61, 0.09)',
                minHeight: '260px',
                height: '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8), 0 8px 24px rgba(10, 29, 61, 0.04)'
              }}
            >
              {/* Navigation Left / Right Arrows on the Card */}
              <button
                onClick={handlePrev}
                className="highlights-nav-btn"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10
                }}
                aria-label="Previous Highlight"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>

              <button
                onClick={handleNext}
                className="highlights-nav-btn"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10
                }}
                aria-label="Next Highlight"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>

              {currentItem.fullBannerImg ? (
                /* Full Graphical Banner with Ambient Backdrop (Eliminates side gaps in a luxury way) */
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    background: currentItem.id === 0 ? '#FFFFFF' : '#071326'
                  }}
                  onClick={currentItem.btnAction}
                  title={currentItem.id === 0 ? "Click to Download MapZest App" : "Click to view details"}
                >
                  {currentItem.id === 0 ? (
                    /* MapZest wide banner (fills edge-to-edge) */
                    <img
                      src={currentItem.fullBannerImg}
                      alt={currentItem.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                  ) : (
                    <>
                      {/* Ambient Blurred Background to eliminate empty gaps */}
                      <img
                        src={currentItem.fullBannerImg}
                        alt=""
                        aria-hidden="true"
                        style={{
                          position: 'absolute',
                          inset: '-15%',
                          width: '130%',
                          height: '130%',
                          objectFit: 'cover',
                          filter: 'blur(32px) saturate(1.4) brightness(0.8)',
                          transform: 'scale(1.15)',
                          pointerEvents: 'none'
                        }}
                      />

                      {/* Vignette / Glass Layer */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'radial-gradient(ellipse at center, rgba(10,29,61,0.1) 0%, rgba(10,29,61,0.5) 100%)',
                          pointerEvents: 'none',
                          zIndex: 1
                        }}
                      />

                      {/* Crisp Foreground Main Image */}
                      <img
                        src={currentItem.fullBannerImg}
                        alt={currentItem.title}
                        style={{
                          position: 'relative',
                          zIndex: 2,
                          maxHeight: '94%',
                          maxWidth: '85%',
                          height: 'auto',
                          width: 'auto',
                          objectFit: 'contain',
                          display: 'block',
                          borderRadius: '12px',
                          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15)'
                        }}
                      />

                      {/* Floating Bottom Glass Title Pill */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '12px',
                          zIndex: 3,
                          padding: '6px 16px',
                          borderRadius: '20px',
                          background: 'rgba(10, 29, 61, 0.75)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#FFFFFF',
                          fontFamily: 'var(--font-universal)',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          letterSpacing: '-0.01em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                        }}
                      >
                        <span style={{ color: '#FF6A00' }}>●</span>
                        <span>{currentItem.title}</span>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                /* Standard 2-Column Content for other highlights */
                <div
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0 40px',
                    gap: '18px'
                  }}
                >
                  {/* Text Content */}
                  <div style={{ flex: 1, maxWidth: '270px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-universal)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--color-orange, #FF6A00)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '6px'
                      }}
                    >
                      {currentItem.badge}
                    </span>

                    <h3
                      style={{
                        fontFamily: 'var(--font-universal)',
                        fontSize: 'clamp(1.15rem, 1.8vw, 1.45rem)',
                        fontWeight: 600,
                        color: 'var(--text-heading-dark, #0A1D3D)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.2,
                        margin: '0 0 8px 0'
                      }}
                    >
                      {currentItem.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-universal)',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        letterSpacing: '-0.01em',
                        color: 'var(--text-muted-gray, #475569)',
                        margin: '0 0 16px 0',
                        fontWeight: 400
                      }}
                    >
                      {currentItem.subtitle}
                    </p>

                    <button
                      onClick={currentItem.btnAction}
                      className="highlights-cta-btn"
                    >
                      <span>{currentItem.btnText}</span>
                      {currentItem.btnText.includes('DOWNLOAD') ? (
                        <Download size={15} strokeWidth={2.5} />
                      ) : (
                        <ArrowRight size={15} strokeWidth={2.5} />
                      )}
                    </button>
                  </div>

                  {/* Banner Photo */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: '150px',
                      height: '180px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 24px rgba(10, 29, 61, 0.15)',
                      border: '2px solid #FFFFFF',
                      background: '#0A1D3D'
                    }}
                  >
                    <img
                      src={currentItem.bannerImg}
                      alt={currentItem.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom 3 Thumbnails Selector matching the image */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px'
              }}
            >
              {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`highlights-thumb-card ${isActive ? 'active' : ''}`}
                    style={{
                      height: '74px',
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      background: isActive ? '#FFFFFF' : '#F8FAFC',
                      border: isActive
                        ? '1px solid rgba(255, 106, 0, 0.45)'
                        : '1px solid rgba(10, 29, 61, 0.08)',
                      borderRadius: '12px',
                      padding: '6px 8px',
                      gap: '8px',
                      boxShadow: isActive ? '0 4px 14px rgba(255, 106, 0, 0.08)' : 'none'
                    }}
                  >
                    {/* Thumbnail Image */}
                    <div
                      style={{
                        width: '48px',
                        height: '56px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        background: '#0A1D3D'
                      }}
                    >
                      <img
                        src={slide.thumbImg}
                        alt={slide.thumbTitle}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=200&q=80';
                        }}
                      />
                    </div>

                    {/* Thumbnail Title & Status */}
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-universal)',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                          color: isActive ? 'var(--color-orange, #FF6A00)' : 'var(--text-heading-dark, #0A1D3D)',
                          margin: '0 0 2px 0',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {slide.thumbTitle}
                      </p>
                      <span
                        style={{
                          fontFamily: 'var(--font-universal)',
                          fontSize: '0.68rem',
                          fontWeight: 400,
                          letterSpacing: '-0.01em',
                          color: 'var(--text-muted-gray, #64748B)',
                          display: 'block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {slide.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
