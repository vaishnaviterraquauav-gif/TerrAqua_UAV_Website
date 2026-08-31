import React, { useEffect, useState } from 'react'

export default function Team() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const teamMembers = [
    {
      name: "Prof. Rajiv Sinha",
      role: "Founder & Mentor",
      img: "https://static.wixstatic.com/media/9a5348_5aadc3f8b430475a86fc9565d4c96190~mv2.png",
      desc: "As the Founder & Mentor, Prof. Sinha provides the guiding vision for TerrAqua. With extensive experience in Earth Sciences from IIT Kanpur, RS and GIS applications in Agriculture, Wetland conservation, flood risk reduction, natural resource management, environmental monitoring.",
      socials: { website: "https://home.iitk.ac.in/~rsinha/", linkedin: "#", email: "mailto:rsinha@iitk.ac.in" }
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
    <section style={{
      padding: 'clamp(3rem, 8vw, 6rem) 1rem',
      backgroundColor: '#000000',
      backgroundImage: 'radial-gradient(#7e7e7e4d 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      color: '#ffffff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          textAlign: 'center',
          margin: '0 0 4rem 0',
          color: '#ffffff'
        }}>
          Our Team
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4.5rem 2rem'
        }}>
          {teamMembers.map((member, idx) => {
            const isHovered = hoveredCard === idx
            const isOtherHovered = hoveredCard !== null && hoveredCard !== idx

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: '#000000',
                  borderRadius: '16px',
                  border: '1px solid #7e7e7e4d',
                  textAlign: 'center',
                  padding: '1.5rem',
                  paddingTop: '90px',
                  marginTop: '75px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isHovered ? 'translateY(-10px) scale(1.03)' : (isOtherHovered ? 'scale(0.96)' : 'none'),
                  opacity: isOtherHovered ? 0.7 : 1,
                  boxShadow: isHovered ? '0 20px 40px rgba(0, 35, 95, 0.4)' : 'none'
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '6px solid #000000',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)',
                    position: 'absolute',
                    top: '-75px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2
                  }}
                />

                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: '0 0 0.25rem 0'
                }}>
                  {member.name}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#CBD5E1',
                  marginBottom: '1rem',
                  fontWeight: 500
                }}>
                  {member.role}
                </p>

                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: '#94A3B8',
                  margin: '1rem 0 0 0'
                }}>
                  {member.desc}
                </p>

                {member.socials && (
                  <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
                    {member.socials.website && (
                      <a href={member.socials.website} target="_blank" rel="noopener noreferrer" aria-label="Website" style={socialLinkStyle}>
                        <svg viewBox="0 0 16 16" width="18" height="18" fill="#FFFFFF"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.247 9.247 0 0 1 .64-1.539 7.021 7.021 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.99 6.99 0 0 1-.597-.933A9.248 9.248 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.248 9.248 0 0 1-.64 1.539 6.99 6.99 0 0 1-.597.933zM8.5 12h2.855c.173-.324.33-.682.468-1.068.552-1.035 1.218-1.65 1.887-1.855V12H8.5zm3.68-1h2.49a6.958 6.958 0 0 0-.656-2.5h-2.49a13.65 13.65 0 0 1 .312 2.5zm2.802-3.5a6.959 6.959 0 0 0 .656-2.5H12.18c-.174.782-.282 1.623-.312 2.5h2.49zM11.27 4a9.248 9.248 0 0 1 .64 1.539 7.021 7.021 0 0 1 .597.933A7.025 7.025 0 0 0 13.745 4h-1.852zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z" /></svg>
                      </a>
                    )}
                    {member.socials.email && (
                      <a href={member.socials.email} aria-label="Email" style={socialLinkStyle}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>
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
  )
}

const socialLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: '#00235F',
  border: '1px solid #7e7e7e4d',
  transition: 'transform 0.2s ease'
}
