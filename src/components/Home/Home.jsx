import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import mapzestImg from '../../assets/mapzest-preview.png'

export default function Home({ setActiveTab }) {
  const metrics = [
    { value: '50,000+', label: 'Hectares Mapped', sub: 'High Precision Aerial LiDAR' },
    { value: '99.4%', label: 'Mapping Accuracy', sub: 'Sub-Centimeter Resolution' },
    { value: 'IITK', label: 'Incubated Tech', sub: 'SIIC Innovation Ecosystem' },
    { value: '10+', label: 'Government Projects', sub: 'Pan-India Deployment' },
  ]

  const fusionCards = [
    {
      title: "Drone",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
      featured: false,
      bullets: [
        "High-resolution multispectral imaging for crop health assessment.",
        "Automated precision spraying and liquid application systems."
      ]
    },
    {
      title: "Satellite",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      featured: true,
      bullets: [
        "Global Earth observation data for large-scale vegetation tracking.",
        "Historical yield analytics and AI-powered predictive modeling."
      ]
    },
    {
      title: "IoT",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      featured: false,
      bullets: [
        "Real-time soil moisture and nutrient level monitoring sensors.",
        "Smart irrigation control with weather-integrated data syncing."
      ]
    }
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <section className="section-black" style={{
        minHeight: 'calc(100vh - 75px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
          <div className="badge-tag" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '20px',
            background: 'rgba(255, 106, 0, 0.15)',
            border: '1px solid rgba(255, 106, 0, 0.4)',
            color: 'var(--color-orange)',
            fontSize: '0.88rem',
            marginBottom: '36px'
          }}>
            <Sparkles size={16} /> Incubated at SIIC, IIT Kanpur
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            lineHeight: 1.12,
            fontWeight: 400,
            letterSpacing: '-0.04em',
            marginBottom: '48px',
            color: '#FFFFFF'
          }}>
            Pioneering Airborne Remote Sensing & <br />
            <span className="text-orange-glow">Geospatial Intelligence Solutions</span>
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('solutions')}
              className="btn-orange"
              style={{
                padding: '16px 38px',
                fontSize: '1.05rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Explore Solutions <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setActiveTab('product')}
              className="btn-slate"
              style={{
                padding: '16px 38px',
                fontSize: '1.05rem'
              }}
            >
              Discover MapZest Platform
            </button>
          </div>
        </div>
      </section>

      {/* METRICS BAR */}
      <section className="section-slate" style={{ padding: '60px 24px', borderTop: '1px solid rgba(255, 106, 0, 0.3)', borderBottom: '1px solid rgba(255, 106, 0, 0.3)' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {metrics.map((m, idx) => (
            <div key={idx} className="card-slate" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{
                fontSize: '2.6rem',
                fontWeight: 400,
                color: 'var(--color-orange)',
                letterSpacing: '-0.04em',
                lineHeight: 1
              }}>
                {m.value}
              </div>
              <div style={{ color: '#FFFFFF', fontSize: '1rem', marginTop: '10px', fontWeight: 500, letterSpacing: '-0.02em' }}>
                {m.label}
              </div>
              <div style={{ color: 'var(--text-body-slate)', fontSize: '0.85rem', marginTop: '4px', fontWeight: 400 }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE FUSION SECTION (STYLISH NEW IMAGE CARD CONTAINER FRAMEWORK) */}
      <section className="section-light" style={{ padding: '90px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '2.8rem', color: 'var(--text-heading-dark)', fontWeight: 400, letterSpacing: '-0.04em', marginBottom: '12px' }}>
              THE <span style={{ color: 'var(--color-orange)' }}>FUSION</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '36px'
          }}>
            {fusionCards.map((card, i) => (
              <div
                key={i}
                className="card-light"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF',
                  border: '1px solid rgba(27, 54, 73, 0.12)',
                  boxShadow: '0 20px 45px -12px rgba(27, 54, 73, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(27, 54, 73, 0.18)';
                  e.currentTarget.style.borderColor = 'rgba(255, 106, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px -12px rgba(27, 54, 73, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.12)';
                }}
              >
                {/* Image Top Header Banner Frame */}
                <div style={{
                  height: '280px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--bg-deep-navy)'
                }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 29, 61, 0.88) 0%, transparent 60%)'
                  }} />
                  <span style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '28px',
                    color: '#FFFFFF',
                    fontSize: '1.85rem',
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    textShadow: '0 2px 12px rgba(0,0,0,0.6)'
                  }}>
                    {card.title}
                  </span>
                </div>

                {/* Bullets Content Box */}
                <div style={{ padding: '36px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {card.bullets.map((bullet, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <span style={{
                          width: '9px',
                          height: '9px',
                          background: 'var(--color-orange)',
                          borderRadius: '50%',
                          marginTop: '9px',
                          flexShrink: 0
                        }} />
                        <p style={{ color: 'var(--text-muted-gray)', fontSize: '1.05rem', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPZEST SECTION */}
      <section className="section-black" style={{ padding: '120px 24px', background: 'radial-gradient(circle at 50% 0%, var(--bg-steel-blue) 0%, #050F24 70%)' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '64px',
          alignItems: 'center'
        }}>
          {/* Left Text Column */}
          <div style={{ textAlign: 'left', padding: '20px' }}>
            <h2 style={{ 
              fontSize: '3.2rem', 
              fontWeight: 600, 
              letterSpacing: '-0.03em', 
              lineHeight: 1.1, 
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #EAEFF5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Explore Geospatial <br /> Insights with <span style={{ background: 'linear-gradient(135deg, #FF7A29, #FFA366)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MapZest</span>
            </h2>
            <p style={{ color: '#EAEFF5', maxWidth: '520px', marginBottom: '40px', fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 400 }}>
              Unlock hidden intelligence in your spatial data with our powerful, intuitive GIS tools. Whether you're mapping complex terrains, analyzing patterns, or visualizing geospatial trends, we've got you covered.
            </p>
            <div>
              <a
                href="https://mapzest.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 48px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#000000',
                  background: '#EAEFF5',
                  border: '1px solid #EAEFF5',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#EAEFF5';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Explore MapZest →
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(0, 181, 226, 0.15) 0%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />
            <img
              src={mapzestImg}
              alt="Explore Geospatial Insights with MapZest"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '16px',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 181, 226, 0.3)',
                transition: 'transform 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02) translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
              }}
            />
          </div>
        </div>
      </section>

      {/* DATA TO DECISIONS SECTION */}
      <section style={{ padding: '80px 24px', background: '#000000', borderTop: '1px solid rgba(255, 122, 41, 0.1)' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '2.8rem', 
            color: '#EAEFF5', 
            fontWeight: 500, 
            letterSpacing: '-0.02em',
            marginBottom: '16px'
          }}>
            From Data to <span style={{ color: '#FF7A29' }}>Decisions</span>
          </h2>
          <p style={{ color: '#EAEFF5', opacity: 0.8, maxWidth: '600px', margin: '0 auto 60px', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Our integrated approach ensures that raw spatial data is transformed into actionable intelligence for your operations.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            position: 'relative'
          }}>
            {/* Step 1 */}
            <div style={{
              background: '#1B3649',
              padding: '40px 30px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                border: '2px solid #FF7A29',
                color: '#FF7A29',
                fontSize: '2rem',
                fontWeight: 600
              }}>1</div>
              <h3 style={{ color: '#EAEFF5', fontSize: '1.4rem', marginBottom: '12px' }}>Capture</h3>
              <p style={{ color: '#EAEFF5', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.9 }}>
                Deploy advanced UAVs and sensors to collect high-resolution geospatial data across challenging terrains.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{
              background: '#1B3649',
              padding: '40px 30px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                border: '2px solid #FF7A29',
                color: '#FF7A29',
                fontSize: '2rem',
                fontWeight: 600
              }}>2</div>
              <h3 style={{ color: '#EAEFF5', fontSize: '1.4rem', marginBottom: '12px' }}>Analyze</h3>
              <p style={{ color: '#EAEFF5', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.9 }}>
                Process and analyze raw data using MapZest's powerful WebGIS tools to uncover hidden patterns.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{
              background: '#1B3649',
              padding: '40px 30px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              position: 'relative',
              zIndex: 1,
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                border: '2px solid #FF7A29',
                color: '#FF7A29',
                fontSize: '2rem',
                fontWeight: 600
              }}>3</div>
              <h3 style={{ color: '#EAEFF5', fontSize: '1.4rem', marginBottom: '12px' }}>Decide</h3>
              <p style={{ color: '#EAEFF5', fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.9 }}>
                Transform analytical insights into actionable strategies for resource management and planning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR COMMITMENT TO SDGs SECTION */}
      <section style={{ 
        padding: '100px 24px', 
        position: 'relative',
        background: 'linear-gradient(180deg, #122533 0%, #1B3649 100%)',
        overflow: 'hidden',
        boxShadow: 'inset 0 20px 50px -20px rgba(0,0,0,0.8)' 
      }}>
        {/* Advanced Background Glow Orbs */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 122, 41, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 163, 255, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Glowing Top Border */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,122,41,0.8), transparent)'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: '2.8rem', 
            fontWeight: 500, 
            letterSpacing: '-0.02em',
            marginBottom: '60px',
            color: 'var(--text-pure-white)'
          }}>
            OUR COMMITMENT TO <span style={{ color: 'var(--color-orange)' }}>SDGs</span>
          </h2>
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '32px',
            paddingBottom: '40px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
            {[7, 9, 11, 12, 13, 14, 15, 4, 6, 7].map((num, i) => (
              <div key={i} style={{
                flex: '0 0 auto',
                width: '160px',
                height: '160px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '1.6rem',
                cursor: 'pointer',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0.6) 100%)',
                border: '1px solid rgba(255, 122, 41, 0.3)',
                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.border = '1px solid rgba(255, 122, 41, 0.8)';
                e.currentTarget.style.boxShadow = '0 30px 50px -15px rgba(255, 122, 41, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.border = '1px solid rgba(255, 122, 41, 0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #B0C4DE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                }}>
                  SDG {num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CLIENTS AND COLLABORATORS SECTION */}
      <section style={{ 
        padding: '100px 24px',
        position: 'relative',
        background: 'linear-gradient(180deg, #EAEFF5 0%, #FFFFFF 100%)',
        overflow: 'hidden'
      }}>
        {/* Top Gradient Separator */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(27, 54, 73, 0.2), transparent)'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
            fontSize: '2.8rem', 
            fontWeight: 500, 
            letterSpacing: '-0.02em',
            marginBottom: '60px',
            color: 'var(--text-heading-dark)'
          }}>
            OUR CLIENTS AND <span style={{ color: 'var(--color-orange)' }}>COLLABORATORS</span>
          </h2>
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '40px',
            paddingBottom: '40px',
            alignItems: 'center',
            justifyContent: 'center',
            scrollbarWidth: 'none'
          }}>
            {['citi', 'VIRGINIA TECH', 'MECL', 'hmda', 'NTPC', 'WWF'].map((client, i) => (
              <div key={i} style={{
                flex: '0 0 auto',
                width: '180px',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '1.2rem',
                cursor: 'pointer',
                borderRadius: '16px',
                background: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 1)',
                boxShadow: '0 20px 40px -10px rgba(27, 54, 73, 0.12), 0 10px 15px -5px rgba(27, 54, 73, 0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(255, 122, 41, 0.2), 0 15px 25px -5px rgba(255, 122, 41, 0.1)';
                e.currentTarget.style.border = '1px solid rgba(255, 122, 41, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(27, 54, 73, 0.12), 0 10px 15px -5px rgba(27, 54, 73, 0.05)';
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 1)';
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #1B3649 0%, #0F172A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section style={{ 
        padding: '100px 24px', 
        background: '#1B3649',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background blur */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 122, 41, 0.1)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'rgba(0, 0, 0, 0.3)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '80px 40px',
          borderRadius: '32px',
          background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.6) 0%, rgba(27, 54, 73, 0.8) 100%)',
          border: '1px solid rgba(255, 122, 41, 0.2)',
          boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{ 
            fontSize: '2.6rem', 
            color: '#FFFFFF', 
            fontWeight: 500, 
            letterSpacing: '-0.02em', 
            marginBottom: '20px' 
          }}>
            Ready to Transform Your Spatial Operations?
          </h2>
          <p style={{ color: '#EAEFF5', maxWidth: '650px', margin: '0 auto 40px', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Consult with our geospatial research experts at IIT Kanpur for custom UAV surveys, WebGIS deployments, or collaborative research initiatives.
          </p>
          <button
            onClick={() => setActiveTab('contact')}
            style={{
              padding: '16px 48px',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: '#FFFFFF',
              background: '#FF7A29',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 10px 25px -5px rgba(255, 122, 41, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(255, 122, 41, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.background = '#FFA366';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 122, 41, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.background = '#FF7A29';
            }}
          >
            Contact Engineering Team
          </button>
        </div>
      </section>
    </div>
  )
}
