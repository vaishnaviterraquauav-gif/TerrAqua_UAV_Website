import React, { useState } from 'react'
import { Globe, Mail } from 'lucide-react'

export default function Team() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const teamMembers = [
    {
      name: "Prof. Rajiv Sinha",
      role: "Founder & Mentor",
      img: "https://static.wixstatic.com/media/9a5348_5aadc3f8b430475a86fc9565d4c96190~mv2.png",
      desc: "Professor of Earth Sciences at IIT Kanpur, pioneering scientific research in river dynamics, flood risk mitigation, and environmental monitoring.",
      socials: { website: "https://home.iitk.ac.in/~rsinha/", email: "mailto:rsinha@iitk.ac.in" }
    },
    {
      name: "Dr. Shobhit Singh",
      role: "Co-Founder & Director",
      img: "https://static.wixstatic.com/media/9a5348_90e07e79f78b4f78b9b6f198a8e1b51d~mv2.png",
      desc: "Leads strategic growth and commercialization, specializing in hydrological modeling, water body rejuvenation, and satellite-UAV analytics.",
      socials: { email: "mailto:contact@terraqua.in" }
    },
    {
      name: "Shikha Sinha",
      role: "Director",
      img: "https://static.wixstatic.com/media/9a5348_60bac881a0384514847939efd7b5149a~mv2.png",
      desc: "Oversees corporate governance, operations, and strategic planning across environmental and geophysical exploration projects.",
      socials: { email: "mailto:contact@terraqua.in" }
    },
    {
      name: "Sambit R Behera",
      role: "Chief Technology Officer",
      img: "https://static.wixstatic.com/media/9a5348_db843b446e694bef93da9d73447ae7fc~mv2.png",
      desc: "Architect of TerrAqua's technology stack, leading development of proprietary aerial software and multispectral sensor analytics.",
      socials: { email: "mailto:contact@terraqua.in" }
    },
    {
      name: "Ankit Yadav",
      role: "Geospatial Lead",
      img: "https://static.wixstatic.com/media/9a5348_c1a2367ead4540ad94ed1350892bb893~mv2.png",
      desc: "Directs end-to-end data processing pipelines from drone data acquisition to delivery of high-precision geomorphological maps."
    },
    {
      name: "Shefali Kuril",
      role: "Remote Sensing & GIS Data Engineer",
      img: "https://static.wixstatic.com/media/9a5348_26ae5eae2a4a4836af467a5b2664ed75~mv2.png",
      desc: "Develops automated spatial algorithms and radiometric calibration scripts for thermal and multispectral drone payloads."
    },
    {
      name: "Kuldeep Yadav",
      role: "Chief GIS System Architect",
      img: "https://static.wixstatic.com/media/9a5348_4a0c5cf9ced04111a291239230f9b5e5~mv2.png",
      desc: "Designs resilient enterprise GIS infrastructure, high-throughput spatial databases, and automated spatial query pipelines."
    },
    {
      name: "Avinash Meheta",
      role: "RS & GIS Project Coordinator",
      img: "https://static.wixstatic.com/media/9a5348_89bf91cd1ccf49f08e5561a91d349434~mv2.png",
      desc: "Coordinates complex remote sensing operations and flight missions, streamlining urban planning and environmental intelligence projects."
    },
    {
      name: "Akshat Unniyal",
      role: "Geospatial Analyst",
      img: "https://static.wixstatic.com/media/9a5348_87723756ea614da5a4240068dbd0d3b7~mv2.png",
      desc: "Transforms complex satellite and aerial imagery into actionable GIS models for precision mapping and terrain change detection."
    },
    {
      name: "Deepak Yadav",
      role: "WebGIS Developer",
      img: "https://static.wixstatic.com/media/9a5348_c430c47f91c24e8086b8a6c551fcc37b~mv2.png",
      desc: "Builds high-performance interactive WebGIS platforms and map portals for seamless real-time visualization of raster layers."
    },
    {
      name: "Dr. Somil Swarnkar",
      role: "Hydroclimatic Systems Expert",
      img: "https://static.wixstatic.com/media/9a5348_6a1536e3928d4e3a91940a34bf16dbc5~mv2.png",
      desc: "Scientific advisor counseling on regional hydroclimatic systems, watershed resilience, and predictive climate modeling."
    },
    {
      name: "Dr. Manudev Singh",
      role: "Remote Sensing & Earth System Expert",
      img: "https://static.wixstatic.com/media/9a5348_e1838fd3f05348c488c9a0aa0d548ca3~mv2.png",
      desc: "Scientific advisor guiding advancements in sensor technologies, radiative transfer physics, and Earth system observations."
    }
  ]

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', color: '#0F172A' }}>
      {/* HERO / HEADER SECTION */}
      <section style={{
        padding: '90px 24px 80px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #0A1D3D 0%, #050F24 100%)',
        borderBottom: '1px solid rgba(0, 181, 226, 0.2)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            color: '#FFFFFF',
            fontWeight: 400,
            marginBottom: '24px',
            lineHeight: 1.2,
            letterSpacing: '-0.04em'
          }}>
            Meet Our <span style={{ color: 'var(--color-orange)', fontWeight: 400 }}>Leadership & Team</span>
          </h1>

          <p style={{
            color: '#CBD5E1',
            fontSize: '1.15rem',
            lineHeight: '1.7',
            maxWidth: '840px',
            margin: '0 auto'
          }}>
            Pioneering researchers, geospatial engineers, and domain experts dedicated to advancing drone intelligence, environmental auditing, and spatial analytics.
          </p>
        </div>
      </section>

      {/* TEAM CARDS GRID SECTION */}
      <section style={{
        padding: '80px 24px 100px',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF4F8 100%)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '5rem 2rem',
            alignItems: 'stretch'
          }}>
            {teamMembers.map((member, idx) => {
              const isHovered = hoveredCard === idx

              return (
                <div
                  key={member.name}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid rgba(27, 54, 73, 0.1)',
                    textAlign: 'center',
                    padding: '1.75rem 1.5rem 1.75rem',
                    paddingTop: '90px',
                    marginTop: '65px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'translateY(-6px)' : 'none',
                    boxShadow: isHovered 
                      ? '0 20px 35px -10px rgba(10, 29, 61, 0.12)' 
                      : '0 10px 25px -8px rgba(10, 29, 61, 0.05)'
                  }}
                >
                  {/* Clean Circle Profile Avatar (Pure White Border) */}
                  <div style={{
                    position: 'absolute',
                    top: '-60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2
                  }}>
                    <div style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      padding: '4px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 8px 22px rgba(10, 29, 61, 0.12)'
                    }}>
                      <img
                        src={member.img}
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          backgroundColor: '#F1F5F9',
                          display: 'block'
                        }}
                      />
                    </div>
                  </div>

                  {/* Main Card Content with aligned heights */}
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Name */}
                    <div style={{
                      minHeight: '34px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '6px'
                    }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-heading-dark)',
                        margin: 0,
                        lineHeight: 1.3
                      }}>
                        {member.name}
                      </h3>
                    </div>

                    {/* Role Container (Fixed height for 1-line & 2-line consistency) */}
                    <div style={{
                      minHeight: '44px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px'
                    }}>
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-orange)',
                        margin: 0,
                        fontWeight: 600,
                        lineHeight: 1.35
                      }}>
                        {member.role}
                      </p>
                    </div>

                    {/* Description (Consistent height & top alignment) */}
                    <p style={{
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: '#475569',
                      margin: 0,
                      minHeight: '84px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center'
                    }}>
                      {member.desc}
                    </p>
                  </div>

                  {/* Social Action Links */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: 'auto',
                    paddingTop: '16px',
                    minHeight: '50px'
                  }}>
                    {member.socials?.website && (
                      <a
                        href={member.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Website`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid rgba(27, 54, 73, 0.12)',
                          color: 'var(--text-heading-dark)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-orange)'
                          e.currentTarget.style.borderColor = 'var(--color-orange)'
                          e.currentTarget.style.color = '#FFFFFF'
                          e.currentTarget.style.transform = 'scale(1.08)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F8FAFC'
                          e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.12)'
                          e.currentTarget.style.color = 'var(--text-heading-dark)'
                          e.currentTarget.style.transform = 'none'
                        }}
                      >
                        <Globe size={16} />
                      </a>
                    )}
                    {member.socials?.email && (
                      <a
                        href={member.socials.email}
                        aria-label={`Email ${member.name}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid rgba(27, 54, 73, 0.12)',
                          color: 'var(--text-heading-dark)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-orange)'
                          e.currentTarget.style.borderColor = 'var(--color-orange)'
                          e.currentTarget.style.color = '#FFFFFF'
                          e.currentTarget.style.transform = 'scale(1.08)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F8FAFC'
                          e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.12)'
                          e.currentTarget.style.color = 'var(--text-heading-dark)'
                          e.currentTarget.style.transform = 'none'
                        }}
                      >
                        <Mail size={16} />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
