import React, { useState } from 'react'
import { Sparkles, Globe, Mail } from 'lucide-react'

export default function Team() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const teamMembers = [
    {
      name: "Prof. Rajiv Sinha",
      role: "Founder & Mentor",
      img: "https://static.wixstatic.com/media/9a5348_5aadc3f8b430475a86fc9565d4c96190~mv2.png",
      desc: "As the Founder & Mentor, Prof. Sinha provides the guiding vision for TerrAqua. With extensive experience in Earth Sciences from IIT Kanpur, RS and GIS applications in Agriculture, Wetland conservation, flood risk reduction, natural resource management, environmental monitoring.",
      socials: { website: "https://home.iitk.ac.in/~rsinha/", email: "mailto:rsinha@iitk.ac.in" }
    },
    {
      name: "Dr. Shobhit Singh",
      role: "Co-founder & Director",
      img: "https://static.wixstatic.com/media/9a5348_90e07e79f78b4f78b9b6f198a8e1b51d~mv2.png",
      desc: "Shobhit, our Co-founder & Director, leads the company's strategic direction and business development. His expertise in Hydrology, water body rejuvenation, Flood modelling, satellite and UAV remote sensing."
    },
    {
      name: "Shikha Sinha",
      role: "Director",
      img: "https://static.wixstatic.com/media/9a5348_60bac881a0384514847939efd7b5149a~mv2.png",
      desc: "As a Director, Shikha oversees corporate governance and operational management. She plays a crucial role in Ground water, Geophysical exploration, web development, strategy planning."
    },
    {
      name: "Sambit R Behera",
      role: "Chief Technology Officer",
      img: "https://static.wixstatic.com/media/9a5348_db843b446e694bef93da9d73447ae7fc~mv2.png",
      desc: "As the Chief Technology Officer, Sambit is the architect of our technology stack. He leads the development of our proprietary software and platforms, Agriculture, Satellite and UAV (Thermal, multispectral, Hyperspectral) remote sensing."
    },
    {
      name: "Ankit Yadav",
      role: "Geospatial Lead",
      img: "https://static.wixstatic.com/media/9a5348_c1a2367ead4540ad94ed1350892bb893~mv2.png",
      desc: "Ankit serves as the Geospatial Lead. He manages the entire data processing pipeline, from UAV data acquisition to the final delivery of high-precision maps and analytical reports, ensuring quality and Geomorphology, Geohazard, Agriculture, Satellite and UAV remote sensing."
    },
    {
      name: "Shefali Kuril",
      role: "Remote Sensing & GIS Data Engineer",
      img: "https://static.wixstatic.com/media/9a5348_26ae5eae2a4a4836af467a5b2664ed75~mv2.png",
      desc: "Shefali is a key Remote Sensing & GIS Engineer, specializing in data analysis and automation. She develops custom scripts and workflows to process Agriculture, Thermal, Multispectral Remote sensing."
    },
    {
      name: "Kuldeep Yadav",
      role: "Chief GIS System Architect",
      img: "https://static.wixstatic.com/media/9a5348_4a0c5cf9ced04111a291239230f9b5e5~mv2.png",
      desc: "As the Chief GIS System Architect, Kuldeep designs and implements the core GIS infrastructure that our services are built upon. His work ensures our systems are powerful, secure, and capable of handling complex spatial queries and analytics."
    },
    {
      name: "Avinash Meheta",
      role: "RS And GIS Project Coordinator",
      img: "https://static.wixstatic.com/media/9a5348_89bf91cd1ccf49f08e5561a91d349434~mv2.png",
      desc: "Avinash specializes in the coordination of complex remote sensing workflows and GIS mapping projects. By optimizing data acquisition and processing pipelines, he ensures that our environmental and urban planning projects are backed by the most accurate geospatial intelligence."
    },
    {
      name: "Akshat Unniyal",
      role: "Geospatial Analyst",
      img: "https://static.wixstatic.com/media/9a5348_87723756ea614da5a4240068dbd0d3b7~mv2.png",
      desc: "Akshat specializes in advanced geospatial analytics, spatial data processing, and satellite image interpretation. By transforming complex datasets into actionable GIS models, he provides vital analytical support for environmental monitoring and precision mapping."
    },
    {
      name: "Deepak Yadav",
      role: "WebGIS Developer",
      img: "https://static.wixstatic.com/media/9a5348_c430c47f91c24e8086b8a6c551fcc37b~mv2.png",
      desc: "Deepak specializes in the architecture and deployment of high-performance WebGIS applications and interactive spatial platforms. By integrating complex geospatial datasets into intuitive web interfaces, he ensures clients can visualize and analyze data in real-time."
    },
    {
      name: "Dr. Somil Swarnkar",
      role: "Hydroclimatic Systems Expert",
      img: "https://static.wixstatic.com/media/9a5348_6a1536e3928d4e3a91940a34bf16dbc5~mv2.png",
      desc: "Dr. Swarnkar, a Scientific Advisor, brings deep expertise in hydroclimatic systems. He advises on projects related to water resource management, climate change modeling, and flood risk assessment."
    },
    {
      name: "Dr. Manudev Singh",
      role: "Remote Sensing & Earth System Science Expert",
      img: "https://static.wixstatic.com/media/9a5348_e1838fd3f05348c488c9a0aa0d548ca3~mv2.png",
      desc: "As a Scientific Advisor specializing in Remote Sensing & Earth System Science, Dr. Singh provides invaluable insights into advanced sensor technologies and data interpretation methods."
    }
  ]

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', color: '#0F172A' }}>
      {/* HERO / HEADER SECTION (DEEP NAVY BLUE) */}
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

      {/* TEAM CARDS SECTION (OFF-WHITE BACKGROUND WITH WHITE CARDS) */}
      <section style={{
        padding: '80px 24px 100px',
        background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF4F8 100%)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4.5rem 2rem'
          }}>
            {teamMembers.map((member, idx) => {
              const isHovered = hoveredCard === idx

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid rgba(27, 54, 73, 0.1)',
                    textAlign: 'center',
                    padding: '1.75rem',
                    paddingTop: '90px',
                    marginTop: '75px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered ? 'translateY(-8px)' : 'none',
                    boxShadow: isHovered ? '0 20px 40px -10px rgba(27, 54, 73, 0.15)' : '0 15px 35px -10px rgba(27, 54, 73, 0.08)'
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: '145px',
                      height: '145px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '5px solid #FFFFFF',
                      boxShadow: '0 8px 24px rgba(10, 29, 61, 0.15)',
                      position: 'absolute',
                      top: '-75px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 2,
                      backgroundColor: '#F1F5F9'
                    }}
                  />

                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--text-heading-dark)',
                    margin: '0 0 0.35rem 0'
                  }}>
                    {member.name}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--color-orange)',
                    marginBottom: '1rem',
                    fontWeight: 600
                  }}>
                    {member.role}
                  </p>

                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted-gray)',
                    margin: '0.5rem 0 0 0'
                  }}>
                    {member.desc}
                  </p>

                  {member.socials && (
                    <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '1.25rem' }}>
                      {member.socials.website && (
                        <a 
                          href={member.socials.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          aria-label="Website" 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: '#F8FAFC',
                            border: '1px solid rgba(27, 54, 73, 0.15)',
                            color: 'var(--text-heading-dark)',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-orange)'
                            e.currentTarget.style.borderColor = 'var(--color-orange)'
                            e.currentTarget.style.color = '#FFFFFF'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#F8FAFC'
                            e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.15)'
                            e.currentTarget.style.color = 'var(--text-heading-dark)'
                          }}
                        >
                          <Globe size={18} />
                        </a>
                      )}
                      {member.socials.email && (
                        <a 
                          href={member.socials.email} 
                          aria-label="Email" 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: '#F8FAFC',
                            border: '1px solid rgba(27, 54, 73, 0.15)',
                            color: 'var(--text-heading-dark)',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-orange)'
                            e.currentTarget.style.borderColor = 'var(--color-orange)'
                            e.currentTarget.style.color = '#FFFFFF'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#F8FAFC'
                            e.currentTarget.style.borderColor = 'rgba(27, 54, 73, 0.15)'
                            e.currentTarget.style.color = 'var(--text-heading-dark)'
                          }}
                        >
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
