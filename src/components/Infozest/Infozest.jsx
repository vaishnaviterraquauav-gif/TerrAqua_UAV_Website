import React, { useState } from 'react'
import blogBanner from '../../assets/blog-banner.png'
import mapzestAppCard from '../../assets/mapzest_app_card.png'
import nttDataLaunch from '../../assets/ntt_data_launch.png'
import operationDronagiri from '../../assets/operation_dronagiri.jpg'
import unlockingWebGis from '../../assets/unlocking_web_gis.png'
import aseanScalehubBali from '../../assets/asean_scalehub_bali.png'
import newspaperFloodResponse from '../../assets/newspaper_flood_response.jpg'
import newsSlide1 from '../../assets/news_slide_1.jpg'
import newsSlide2 from '../../assets/news_slide_2.jpg'
import newsSlide3 from '../../assets/news_slide_3.png'
import newsSlide4 from '../../assets/news_slide_4.jpg'
import newsSlide5 from '../../assets/news_slide_5.jpg'
import newsSlide6 from '../../assets/news_slide_6.jpg'
import launchEventPoster from '../../assets/launch_event_poster.png'
import {
  Heart,
  Share2,
  MoreVertical,
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle2,
  Download,
  ExternalLink
} from 'lucide-react'

export default function Infozest({ setActiveTab }) {
  const [selectedPost, setSelectedPost] = useState(null)
  const [likes, setLikes] = useState({})
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const blogPosts = [
    // 1. MapZest Mobile App
    {
      id: 1,
      category: 'Data',
      author: 'TerrAquaUAV Solutions',
      date: 'Jun 20, 2025',
      readTime: '2 min read',
      title: 'MapZest: The Smart, Simple Way to Track and Map From Anywhere',
      excerpt: "Ever needed to track where you've walked, driven, or worked without carrying around expensive, bulky equipment? That's exactly the problem MapZest solves...",
      views: 21,
      comments: 0,
      initialLikes: 1,
      imgUrl: mapzestAppCard,
      content: {
        intro: "In modern geospatial field operations, capturing accurate geographic coordinates and metadata in real-time has traditionally required heavy differential GPS receivers and complex survey gear. MapZest revolutionizes this entire workflow by placing enterprise-grade spatial data collection directly inside an intuitive mobile application.",
        sections: [
          {
            heading: "What Makes MapZest Different?",
            text: "MapZest is built from the ground up for field teams, forestry scouts, civil surveyors, and agricultural field officers who need reliable, offline-first geospatial tracking. With seamless background telemetry, MapZest captures high-density waypoints, calculates perimeter boundaries, and tags georeferenced photographs even in zero-cellular network environments."
          },
          {
            heading: "Key Capabilities of the Mobile WebGIS Ecosystem",
            points: [
              "Offline Vector & Raster Caching: Download base maps and high-res drone orthomosaics directly onto Android devices before heading into remote forest or rural survey zones.",
              "Sub-Meter Coordinate Precision: Advanced smoothing algorithms and external Bluetooth RTK GNSS receiver integration for millimetric surveying.",
              "One-Touch Geospatial Export: Export surveyed spatial data instantly into standard GeoJSON, ESRI Shapefile, KML, and DXF CAD formats.",
              "Cloud-Sync with Enterprise Dashboard: As soon as internet connectivity is restored, field assets automatically sync with the MapZest cloud visualization server."
            ]
          }
        ]
      }
    },

    // 2. Unlocking Web GIS
    {
      id: 2,
      category: 'Drone/UAV',
      author: 'TerraquaUAV Solutions',
      date: 'Feb 25, 2025',
      readTime: '3 min read',
      title: "Unlocking the Power of Web GIS with TerrAqua UAV's Mapzest Ecosystem",
      excerpt: 'In a world where location data drives critical decisions, Web GIS platforms have become essential tools across industries. From managing natural resources to responding to disasters...',
      views: 12,
      comments: 0,
      initialLikes: 1,
      imgUrl: unlockingWebGis,
      content: {
        intro: "In a world where location data drives critical decisions, Web GIS platforms have become essential tools across industries. From managing natural resources to responding to disasters, the ability to access, analyze, and act on spatial information in real time shapes outcomes and saves lives. TerrAqua UAV understands this need deeply. That’s why we developed Mapzest, a comprehensive ecosystem of seven specialized platforms designed to harness the full potential of geospatial technology. This blog explores why Web GIS matters today and how Mapzest empowers organizations to work smarter with location data.",
        sections: [
          {
            heading: "Why Web GIS Platforms Matter Today",
            text: "Web GIS platforms transform raw spatial data into actionable insights accessible anywhere, anytime. Here are five key reasons these platforms are indispensable:",
            points: [
              "Real-Time Decision Making: Emergencies and fast-changing environments demand instant access to accurate maps and data. Web GIS platforms provide live updates, enabling quick responses in fields like disaster management and urban planning.",
              "Accessibility: Cloud-based GIS removes barriers of specialized software and hardware. Teams across locations and devices can view and share maps, fostering collaboration and transparency.",
              "Resource Management: Managing forests, water, minerals, and farmland requires detailed spatial monitoring. Web GIS integrates satellite, drone, and IoT data to track changes and optimize resource use sustainably.",
              "Disaster Preparedness: Early warning systems and risk assessments rely on layered spatial data. Web GIS platforms help visualize hazards, simulate scenarios, and coordinate emergency responses effectively.",
              "Data-Driven Governance: Governments and organizations use Web GIS to base policies on evidence. Spatial analysis supports zoning, infrastructure development, and environmental protection with clear, data-backed insights."
            ]
          },
          {
            heading: "Introducing Mapzest: TerrAqua UAV’s Geospatial Ecosystem",
            text: "Mapzest is a suite of platforms tailored to meet diverse geospatial needs. Each platform integrates seamlessly, offering specialized tools that cover everything from flood risk to crop health. Together, they create a powerful ecosystem for managing spatial workflows with precision and ease.",
            points: [
              "FRAM Engine (Flood Risk Mapping): Flood risk mapping using drone imagery and elevation data. FRAM Engine combines high-resolution drone images with terrain models to identify flood-prone areas. This platform supports urban planners and emergency teams by providing detailed, up-to-date flood risk maps that improve preparedness and response.",
              "NRMM Monitoring: NRMM Monitoring gathers data from satellites and ground sensors to monitor forests, water bodies, and mineral sites. It helps conservationists and resource managers detect changes early and make informed decisions to protect ecosystems.",
              "ADSS Intelligence: ADSS Intelligence analyzes multispectral drone and satellite imagery to assess crop conditions. Farmers use this platform to optimize irrigation, detect pests, and increase yields while reducing environmental impact.",
              "Mapzest Go: Mapzest Go offers core GIS functions accessible through a user-friendly web interface. It supports mapping, data visualization, and collaboration for teams needing reliable, flexible spatial tools.",
              "Geo Catalog: Geo Catalog acts as a hub for spatial datasets, making it easy to find, preview, and integrate diverse geospatial information. This platform simplifies data management and accelerates analysis.",
              "TerraPoint: TerraPoint enables accurate data collection in remote locations without internet access. Field teams capture points, lines, and polygons offline, then sync and verify data in the cloud when connected.",
              "Mapzest Geo Tools: Mapzest Geo Tools provides essential utilities for coordinate conversions, UTM zone calculations, and geodetic computations. It supports surveyors, engineers, and GIS professionals with reliable, easy-to-use tools."
            ]
          },
          {
            heading: "Delivering Complete Spatial Solutions",
            text: "TerrAqua UAV’s Mapzest ecosystem offers a complete solution for organizations that rely on spatial data. Whether managing natural resources, preparing for disasters, or improving agricultural productivity, Mapzest platforms deliver clear, actionable insights. By integrating drone, satellite, IoT, and cloud technologies, Mapzest empowers users to make confident decisions based on accurate, up-to-date location information."
          }
        ]
      }
    },

    // 3. ASEAN ScaleHub Bali
    {
      id: 3,
      category: 'Data',
      author: 'TerraquaUAV Solutions',
      date: 'Jul 4, 2025',
      readTime: '1 min read',
      title: 'TerrAqua UAV Joins ASEAN ScaleHub 2025 in Bali',
      excerpt: 'Exciting times for TerrAqua UAV! Our co-founder and director is proudly representing us at the ASEAN ScaleHub 2025 in Bali. This global platform is a fantastic opportunity to showcase our work...',
      views: 9,
      comments: 0,
      initialLikes: 7,
      imgUrl: aseanScalehubBali,
      content: {
        intro: "Exciting times for TerrAqua UAV! Our co-founder and director is proudly representing us at the ASEAN ScaleHub 2025 in Bali.",
        sections: [
          {
            text: "This global platform is a fantastic opportunity to showcase our work in geospatial intelligence and connect with innovators working at the intersection of technology, sustainability, and regional development."
          },
          {
            text: "A heartfelt thank you to the Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk), and the Department of Science & Technology, Government of India, for their constant support and encouragement."
          },
          {
            text: "We're looking forward to exchanging ideas, building meaningful collaborations, and contributing to a collective vision of cross-border innovation."
          }
        ]
      }
    },

    // 4. Flood Response Newspaper Feature
    {
      id: 4,
      category: 'Drone/UAV',
      author: 'TerraquaUAV Solutions',
      date: 'May 8, 2025',
      readTime: '1 min read',
      title: "TerrAqua UAV’s Flood Response Innovation Featured in Leading Newspapers",
      excerpt: 'We are honored to share that our work at TerrAqua UAV has been featured in multiple newspapers. Our contribution to the development of a web-based Flood Disaster Response System...',
      views: 15,
      comments: 0,
      initialLikes: 4,
      imgUrl: newspaperFloodResponse,
      slides: [
        { img: newsSlide1, title: 'Amar Ujala (Page 05 - 04-05-2025)' },
        { img: newsSlide2, title: 'AAJ (Page 11 - 04-05-2025)' },
        { img: newsSlide3, title: 'Rashtriya Sahara / Mahanagar Kanpur (Page 05 - 05-05-2025)' },
        { img: newsSlide4, title: 'NBT Pradesh / Amrit Vichar (04-05-2025)' },
        { img: newsSlide5, title: 'Dainik Jagran I-Next & Times of India (04-05-2025 / 05-05-2025)' },
        { img: newsSlide6, title: 'Swatantra Hit & Dainik Jagran (05-05-2025 / 04-05-2025)' }
      ],
      content: {
        intro: "We are honored to share that our work at TerrAqua UAV has been featured in multiple newspapers.",
        sections: [
          {
            text: "Our contribution to the development of a web-based Flood Disaster Response System marks a significant milestone in leveraging geospatial intelligence for real-world impact in disaster management, early warning systems, and emergency preparedness."
          },
          {
            text: "This recognition reinforces our commitment to advancing innovative solutions that enhance resilience and response capabilities in the face of natural disasters."
          },
          {
            text: "We extend our sincere gratitude to the Startup Incubation and Innovation Centre at IIT Kanpur (incubatoriitk) and NTT DATA for their unwavering support and belief in our vision."
          }
        ]
      }
    },

    // 5. From Data to Action (NTT DATA)
    {
      id: 5,
      category: 'Data',
      author: 'TerraquaUAV Solutions',
      date: 'May 6, 2025',
      readTime: '1 min read',
      title: 'From Data to Action: Launching of the Flood Disaster Response Platform',
      excerpt: 'We are proud to announce the successful launch of our web-based Flood Disaster Response System, a significant step toward building climate-resilient cities through the power of geospatial intelligence...',
      views: 7,
      comments: 0,
      initialLikes: 1,
      imgUrl: nttDataLaunch,
      content: {
        intro: "We are proud to announce the successful launch of our web-based Flood Disaster Response System, a significant step toward building climate-resilient cities through the power of geospatial intelligence.",
        sections: [
          {
            text: "Our Web-GIS platform integrates high-resolution drone-based aerial surveys with satellite remote sensing to deliver real-time flood inundation simulations and population impact assessments. During the pilot, we covered 24 flood-prone villages near the Ganga Barrage, generating crucial data for early warning systems and emergency preparedness."
          },
          {
            text: "Many thanks to our Chief Guest Shri Vijayendra Pandian (Commissioner, Kanpur), along with officials from the @Irrigation Department, Government of Uttar Pradesh, and the Kanpur Development Authority. Their insights and appreciation reaffirm the importance of scalable, tech-driven disaster management tools."
          },
          {
            text: "We extend our gratitude to Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk), for their continued support and facilitation; NTT DATA for their trust and funding support; and all our distinguished guests and stakeholders who encouraged this vision."
          },
          {
            text: "This achievement marks the beginning of our larger mission — using Geospatial innovation to protect lives, infrastructure, and ecosystems."
          }
        ]
      }
    },

    // 6. Launch Event Poster
    {
      id: 6,
      category: 'Launch Event',
      author: 'TerraquaUAV Solutions',
      date: 'May 3, 2025',
      readTime: '1 min read',
      title: 'Launch Event: TerrAqua UAV Flood Disaster Response System',
      excerpt: 'Team TerrAqua UAV is honored to present the official launch of our Flood Disaster Response System—an advanced solution engineered in‐house, made possible through NTT DATA’s CSR grant...',
      views: 18,
      comments: 0,
      initialLikes: 5,
      imgUrl: launchEventPoster,
      content: {
        intro: "Team TerrAqua UAV is honored to present the official launch of our Flood Disaster Response System—an advanced solution engineered in‐house, made possible through NTT DATA’s CSR grant and facilitated by SIIC, IIT Kanpur. We look forward to welcoming our distinguished guests and partners on May 3, 2025, as we unveil this milestone in humanitarian technology. Stay tuned for live coverage throughout the day as we embark on this transformative journey together.",
        sections: []
      }
    },

    // 7. Operation Dronagiri Selection
    {
      id: 7,
      category: 'Awards',
      author: 'TerraquaUAV Solutions',
      date: 'Apr 16, 2025',
      readTime: '1 min read',
      title: 'TerrAqua UAV Shines at Operation Dronagiri: Pioneering Geospatial Solutions for National Growth.',
      excerpt: 'Proud Moment for TerrAqua UAV solutions ! We are Happy to announce that TerrAqua UAV solutions has been selected for Operation Dronagiri Startup Challenge - Growth Stage...',
      views: 32,
      comments: 0,
      initialLikes: 14,
      imgUrl: operationDronagiri,
      content: {
        intro: "Proud Moment for TerrAqua UAV solutions !",
        sections: [
          {
            text: "We are Happy to announce that TerrAqua UAV solutions has been selected for Operation Dronagiri Startup Challenge - Growth Stage, Pilot project under the hashtag#National_Geospatial_Policy_2022!"
          },
          {
            text: "From 800+ applications, only 25 startups have been chosen after a rigorous evaluation process by an Apex Committee of industry experts and key stakeholders. TerrAqua UAV is among the 6 Growth-Stage Startups (GSS) working to scale operations and expand geospatial solutions into real-world applications."
          },
          {
            text: "Many thanks to our incubator Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk) for their constant support and encouragement."
          },
          {
            text: "We are extremely grateful to Srikant Sastri Sir, Abhay Karandikar Sir, Department of Science, Technology and Innovation, Government of India, and to Geospatial Innovation Accelerators for facilitating Operation Dronagiri: IIT Tirupati Navavishkar I-Hub Foundation, Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk), Society for Innovation & Entrepreneurship -SINE IIT Bombay and IIM Calcutta Innovation Park iHub - AWaDH @ IIT Ropar"
          },
          {
            text: "We are looking forward to participating, anticipating, and contributing to the vision of National Geospatial Policy 2022."
          }
        ]
      }
    },

    // 8. Citi Social Innovation Lab 3.0
    {
      id: 8,
      category: 'Recognition',
      author: 'TerraquaUAV Solutions',
      date: 'Feb 24, 2025',
      readTime: '1 min read',
      title: "TerrAqua UAV Joins Citi’s Social Innovation Lab 3.0",
      excerpt: "We’re thrilled to announce that TerrAqua UAV has been selected for the Cohort of Social Innovation Lab 3.0 by Citi under the Early-Stage Agritech Domain!...",
      views: 28,
      comments: 0,
      initialLikes: 11,
      customImage: (
        <div style={{ background: '#0A1D3D', padding: '16px', height: '220px', borderBottom: '1px solid rgba(0,181,226,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00B5E2' }}>CITI FOUNDATION</span>
            <span style={{ background: '#00B5E2', color: '#FFF', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>SIL 3.0</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 700, margin: 0 }}>Social Innovation Lab 3.0</h4>
            <span style={{ fontSize: '0.68rem', color: '#FF7A29', fontWeight: 600 }}>Agritech Early-Stage Cohort Winner</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Scaling Drone Agritech for Smallholder Farmers</span>
        </div>
      ),
      content: {
        intro: "We’re thrilled to announce that TerrAqua UAV has been selected for the Cohort of Social Innovation Lab 3.0 by Citi under the Early-Stage Agritech Domain!",
        sections: [
          {
            text: "This incredible opportunity will help us scale our innovation and revolutionize agriculture with cutting-edge geospatial technology."
          },
          {
            text: "A huge thank you to the Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk) and the Indian Institute of Technology, Kanpur for their unwavering support and belief in our vision."
          },
          {
            text: "We’re also deeply grateful to Social Innovation Lab Citi for recognizing our efforts and empowering us to drive real-world agricultural transformation."
          },
          {
            text: "Exciting times ahead—stay tuned as we take the next step toward a more sustainable future in agriculture!"
          }
        ]
      }
    },

    // 9. Fieldwork Chronicles
    {
      id: 9,
      category: 'Fieldwork',
      author: 'TerraquaUAV Solutions',
      date: 'Feb 24, 2025',
      readTime: '1 min read',
      title: 'Harnessing Geospatial Intelligence for a Sustainable Future',
      excerpt: "At TerrAqua UAV, fieldwork goes beyond data collection—it’s about understanding landscapes, communities, and the challenges they face...",
      views: 19,
      comments: 0,
      initialLikes: 8,
      customImage: (
        <div style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', padding: '16px', height: '220px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00B5E2' }}>TERRAQUA UAV</span>
            <span style={{ background: '#FF7A29', color: '#FFF', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>FIELD EXPEDITION</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 800, margin: 0 }}>FIELDWORK CHRONICLES</h4>
            <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>High-Precision Aerial Survey Missions</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600 }}>50,000+ Hectares Mapped Pan-India</span>
        </div>
      ),
      content: {
        intro: "At TerrAqua UAV, fieldwork goes beyond data collection—it’s about understanding landscapes, communities, and the challenges they face. From UAV-based surveys in remote areas to tracking environmental changes, every project offers new insights and opportunities for real-world impact.",
        sections: [
          {
            text: "With a dedicated team, cutting-edge technology, and strong community collaboration, we transform raw data into meaningful solutions. Grateful for our hardworking team and the communities that welcome us into their world."
          }
        ]
      }
    },

    // 10. Pichavaram Mangrove
    {
      id: 10,
      category: 'Case Study',
      author: 'TerraquaUAV Solutions',
      date: 'Feb 24, 2025',
      readTime: '1 min read',
      title: 'Exploring Pichavaram Mangrove Forest: A Natural Wonder.',
      excerpt: 'The Pichavaram Mangrove Forest, near Chidambaram Town, is a breathtaking ecosystem teeming with life. Spread across 1,100 hectares, this lush green paradise...',
      views: 24,
      comments: 0,
      initialLikes: 9,
      customImage: (
        <div style={{ background: 'linear-gradient(135deg, #052e16 0%, #064e3b 100%)', padding: '16px', height: '220px', borderBottom: '1px solid rgba(16,185,129,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34d399' }}>PICHAVARAM MANGROVE</span>
            <span style={{ background: '#10B981', color: '#FFF', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>GEO-SPATIAL INSIGHTS</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 700, margin: 0 }}>Mangrove Canopy & Tidal Dynamics</h4>
            <span style={{ fontSize: '0.68rem', color: '#6ee7b7' }}>Multispectral Wetland Health Audit</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>1,100+ Hectares Ecosystem Conservation</span>
        </div>
      ),
      content: {
        intro: "The Pichavaram Mangrove Forest, near Chidambaram Town, is a breathtaking ecosystem teeming with life. Spread across 1,100 hectares, this lush green paradise is home to exotic birds, fish, and even playful otter.",
        sections: [
          {
            text: "These resilient mangroves act as a natural shield against coastal erosion and provide vital support to marine life. Boating through the winding waterways offers a surreal experience, with towering trees and vibrant wildlife all around."
          },
          {
            text: "Visiting Pichavaram is more than just sightseeing—it’s a reminder of nature’s incredible power and beauty. Have you explored this hidden gem? Share your experience with us!"
          }
        ]
      }
    },

    // 11. Abhivyakti'25 IIT Kanpur
    {
      id: 11,
      category: 'Exhibition',
      author: 'TerraquaUAV Solutions',
      date: 'Jan 24, 2025',
      readTime: '2 min read',
      title: "TerrAqua UAV Solutions at #Abhivyakti'25, IIT Kanpur",
      excerpt: "Being part of #Abhivyakti'25 at IIT Kanpur was an incredible experience for Team TerrAqua UAV. It was an honor to showcase our advanced geospatial technologies aimed at building a sustainable future...",
      views: 16,
      comments: 0,
      initialLikes: 6,
      imgUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
      content: {
        intro: "Being part of #Abhivyakti'25 at IIT Kanpur was an incredible experience for Team TerrAqua UAV. It was an honor to showcase our advanced geospatial technologies aimed at building a sustainable future.",
        sections: [
          {
            text: "We are deeply thankful to the dignitaries and passionate minds who visited us. Your enthusiasm and thoughtful discussions reaffirmed our commitment to creating impactful solutions for real-world challenges."
          },
          {
            text: "Our participation focused on highlighting the transformative role geospatial technology can play in tackling some of the world's most pressing challenges—whether it's precision mapping for sustainable development, disaster management, or efficient resource planning. The excitement and interest from attendees reinforced the importance of building meaningful solutions powered by advanced technology."
          },
          {
            text: "We had the privilege of engaging with dignitaries, students, and industry professionals who stopped by to explore our innovations. Their thought-provoking questions, enthusiastic feedback, and words of encouragement were a testament to the potential of geospatial intelligence solutions in driving positive change. It was both humbling and motivating to witness the curiosity and ideas sparked by our work."
          },
          {
            text: "Beyond the technology, #Abhivyakti'25 was a celebration of collaboration. The event brought together brilliant minds from various fields, fostering a space for exchanging ideas and creating synergies. It was inspiring to see so many individuals and organizations united by a common goal: to innovate for a better tomorrow."
          },
          {
            text: "As the event concludes, we carry forward not just memories but a renewed commitment to our mission. At TerrAqua UAV Solutions, we are driven by the belief that technology, when used thoughtfully, can be a powerful force for good. Our journey doesn’t end here; it’s just the beginning of more meaningful innovations aimed at addressing real-world challenges."
          },
          {
            text: "We extend our heartfelt gratitude to the organizers of #Abhivyakti'25 for hosting such a phenomenal event and to everyone who took the time to engage with us. Your support and encouragement inspire us to push the boundaries of what’s possible."
          },
          {
            text: "Stay tuned as we continue to bring smarter UAV technologies and sustainable geospatial solutions to life. Together, let’s shape a future that’s innovative, inclusive, and sustainable."
          }
        ]
      }
    },

    // 12. Closing Day ASEAN Festival
    {
      id: 12,
      category: 'Global Events',
      author: 'TerraquaUAV Solutions',
      date: 'Dec 3, 2024',
      readTime: '1 min read',
      title: 'Closing Day Highlights: ASEAN Startup Festival 2024',
      excerpt: 'We wrapped up a wonderful experience at the ASEAN Startup Festival 2024, feeling grateful for the meaningful connections, insights, and inspiration...',
      views: 14,
      comments: 0,
      initialLikes: 5,
      customImage: (
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', padding: '16px', height: '220px', borderBottom: '1px solid rgba(139,92,246,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#a78bfa' }}>ASEAN STARTUP FESTIVAL</span>
            <span style={{ background: '#8B5CF6', color: '#FFF', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>CLOSING CEREMONY</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 700, margin: 0 }}>International Collaboration & Scale</h4>
            <span style={{ fontSize: '0.68rem', color: '#c4b5fd' }}>Deep-Tech Cross-Border Innovation</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Representing Indian Geospatial Leadership</span>
        </div>
      ),
      content: {
        intro: "We wrapped up a wonderful experience at the ASEAN Startup Festival 2024, feeling grateful for the meaningful connections, insights, and inspiration we gained over the past few days.",
        sections: [
          {
            text: "It was an honor to meet Prof. Abhay Karandikar, Secretary of the Department of Science & Technology, whose vision continues to inspire innovation in India’s tech ecosystem. Engaging with a Department for Promotion of Industry and Internal Trade representative reaffirmed the government’s strong commitment to supporting startups and driving transformative impact."
          },
          {
            text: "We also had the opportunity to meet with fellow startups and representatives from ASEAN countries, exchanging ideas and building connections to drive innovation and sustainability together."
          },
          {
            text: "A heartfelt thank you to the organizers, participants, and everyone who made this event memorable. We return with fresh energy, new ideas, and a renewed determination to work towards a sustainable and innovative future."
          }
        ]
      }
    },

    // 13. Dainik Jagran Feature
    {
      id: 13,
      category: 'Press & Media',
      author: 'TerraquaUAV Solutions',
      date: 'Nov 19, 2024',
      readTime: '1 min read',
      title: 'TerrAqua UAV Featured in Dainik Jagran!',
      excerpt: "Excited to share that Terraqua UAV was featured in today’s Dainik Jagran! Starting from IIT Kanpur under the Faculty Entrepreneurship Policy...",
      views: 22,
      comments: 0,
      initialLikes: 8,
      customImage: (
        <div style={{ background: '#1e293b', padding: '16px', height: '220px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF7A29' }}>DAINIK JAGRAN</span>
            <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>PRINT MEDIA</span>
          </div>
          <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: '8px', color: '#000000' }}>
            <h4 style={{ fontSize: '0.86rem', fontWeight: 800, margin: 0 }}>आईआईटी के शिक्षक-छात्रों ने बनाई कंपनी</h4>
            <span style={{ fontSize: '0.68rem', color: '#475569' }}>बाढ़ प्रबंधन व ड्रोन से सटीक सर्वे की नई तकनीक</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600 }}>Faculty Entrepreneurship Feature</span>
        </div>
      ),
      content: {
        intro: "Excited to share that Terraqua UAV was featured in today’s Dainik Jagran!",
        sections: [
          {
            text: "Starting from IIT Kanpur under the Faculty Entrepreneurship Policy, we’ve been on a mission to use high-resolution geospatial data and remote sensing technology to solve real-world problems. From helping farmers with precision agriculture to supporting urban planners, disaster response teams, and environmental projects, we’ve strived to make a positive impact across sectors."
          },
          {
            text: "We are grateful to Indian Institute of Technology, Kanpur and Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk) for providing such an excellent platform to grow and for supporting us every step of the Journey."
          },
          {
            text: "Here’s to continuing this journey, making data meaningful, and driving change through innovation."
          }
        ]
      }
    },

    // 14. ASEAN Startup Festival Showcase
    {
      id: 14,
      category: 'Global Events',
      author: 'TerraquaUAV Solutions',
      date: 'Dec 3, 2024',
      readTime: '1 min read',
      title: 'TerrAqua UAV Solutions Shines at ASEAN Startup Festival 2024',
      excerpt: 'Thank You for the Warm Reception! We were honoured to showcase TerrAqua UAV Solutions at the ASEAN Startup Festival 2024 in Delhi!...',
      views: 17,
      comments: 0,
      initialLikes: 6,
      imgUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      content: {
        intro: "Thank You for the Warm Reception!",
        sections: [
          {
            text: "We were honoured to showcase TerrAqua UAV Solutions at the ASEAN Startup Festival 2024 in Delhi! A heartfelt thank you to all who visited, especially the distinguished dignitaries who took the time to understand our work. Your interest and support inspire us to keep pushing the boundaries of UAV and geospatial technology. Let’s continue to innovate together!"
          }
        ]
      }
    },

    // 15. About TerrAqua UAV Solutions
    {
      id: 15,
      category: 'Company Profile',
      author: 'TerraquaUAV Solutions',
      date: 'Nov 19, 2024',
      readTime: '1 min read',
      title: 'About TerrAqua UAV Solutions',
      excerpt: 'TerrAqua UAV was Founded by Prof. Rajiv Sinha and researchers of Indian Institute of Technology, Kanpur and incubated at Startup Incubation and Innovation Centre...',
      views: 45,
      comments: 0,
      initialLikes: 18,
      customImage: (
        <div style={{ background: 'linear-gradient(135deg, #0A1D3D 0%, #050F24 100%)', padding: '16px', height: '220px', borderBottom: '1px solid rgba(0,181,226,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00B5E2' }}>TERRAQUA UAV</span>
            <span style={{ fontSize: '0.68rem', color: '#FF7A29', fontWeight: 700 }}>IIT KANPUR</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 700, margin: '0 0 4px 0' }}>Our Vision & Mission</h4>
            <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Pioneering Global Geospatial Intelligence</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600 }}>DaaS • DPaaS • SaaS • AI Geospatial</span>
        </div>
      ),
      content: {
        intro: "TerrAqua UAV was Founded by Prof. Rajiv Sinha and researchers of Indian Institute of Technology, Kanpur and incubated at Startup Incubation and Innovation Centre, IIT Kanpur (incubatoriitk).",
        sections: [
          {
            text: "At TerrAqua UAV we are redefining geospatial intelligence with high-resolution data from drones and satellites. Incubated at the Indian Institute of Technology Kanpur (IITK), we specialize in providing precise and impactful solutions to complex challenges across various sectors."
          },
          {
            heading: "🌐 About Us",
            text: "We are a cutting-edge UAV and Geospatial Intelligence Company, collecting and analyzing high-resolution data to tackle real-world problems in agriculture, urban planning, environmental monitoring, and disaster management."
          },
          {
            heading: "🌟 Vision",
            text: "To be a global leader in geospatial intelligence by delivering innovative, impactful, and practical solutions, transforming advanced technology into accessible insights."
          },
          {
            heading: "🎯 Mission",
            text: "We leverage ultra-high-resolution geospatial data and expertise to provide clients with actionable insights. Our focus is on making complex data simple and turning it into practical products that make a lasting, positive impact on society and the environment."
          }
        ]
      }
    },

    // 16. Hands-On With Newly Procured Drone
    {
      id: 16,
      category: 'Hardware & Tech',
      author: 'TerraquaUAV Solutions',
      date: 'Nov 21, 2024',
      readTime: '1 min read',
      title: "Enhancing Geospatial Innovation with Indigenous Excellence: Terraqua UAV's New PPK-Enabled Drone.",
      excerpt: "At Terraqua UAV, innovation and excellence fuel our journey toward new possibilities. We’re excited to announce the addition of a DGCA-certified PPK-enabled drone...",
      views: 31,
      comments: 0,
      initialLikes: 12,
      customImage: (
        <div style={{ background: '#1e293b', padding: '16px', height: '220px', borderBottom: '1px solid rgba(0,181,226,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00B5E2' }}>DRONE FLEET EXPANSION</span>
            <span style={{ background: '#FF6A00', color: '#FFF', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>NEW PROCUREMENT</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 800, margin: 0 }}>Hands-On With Newly Procured Drone</h4>
            <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>PPK-Enabled Drone Fleet Upgrade</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600 }}>DGCA-Certified • TAS Partnership</span>
        </div>
      ),
      content: {
        intro: "At Terraqua UAV, innovation and excellence fuel our journey toward new possibilities.",
        sections: [
          {
            text: "We’re excited to announce the addition of a DGCA-certified PPK-enabled drone, proudly developed by TAS, to our fleet. This advanced technology significantly enhances our geospatial exploration capabilities."
          },
          {
            text: "A big thanks to the R&D expert from TAS for an insightful hands-on training session, ensuring we’re ready to maximize the potential of this cutting-edge equipment!"
          }
        ]
      }
    },

    // 17. River Basin Mapping & Management (Exact from reference)
    {
      id: 17,
      category: 'Research & GIS',
      author: 'TerraquaUAV Solutions',
      date: 'Nov 16, 2024',
      readTime: '2 min read',
      title: 'River Basin Mapping and Management',
      excerpt: 'Because they supply water, transit, and recreational possibilities, rivers are essential lifelines for our communities. Effective management of our rivers is vital...',
      views: 8,
      comments: 0,
      initialLikes: 1,
      customImage: (
        <div style={{ background: 'linear-gradient(180deg, #E2E8F0 0%, #CBD5E1 100%)', padding: '12px 14px', height: '220px', borderBottom: '1px solid rgba(0,181,226,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.82rem', color: '#0A1D3D', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 8px 0', letterSpacing: '0.5px' }}>
              River basin mapping and management
            </h4>
            {/* 4 Circular Icons Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
              {['🛰️', '🚁', '🗺️', '💻'].map((icon, i) => (
                <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#00B5E2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', border: '1.5px solid #0A1D3D', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* River Bend Satellite Image Box */}
          <div style={{ height: '80px', borderRadius: '8px', overflow: 'hidden', border: '1.5px solid #0A1D3D', background: '#0A1D3D', margin: '0 4px' }}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
              alt="River Meander Bend"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Footer Bar */}
          <div style={{ background: '#334155', color: '#FFFFFF', padding: '3px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.58rem', fontWeight: 600 }}>
            <span>🌐 www.terraquauav.com</span>
            <span>📞 +91 7985791218</span>
          </div>
        </div>
      ),
      content: {
        intro: "Because they supply water, transit, and recreational possibilities, rivers are essential lifelines for our communities. Effective management of our rivers is vital, especially in light of the challenges posed by pollution, flooding, and human activity. Numerous rivers are degrading as a result of activities like sand mining, urbanization, and industrial runoff that disrupt ecosystems and lower water quality. However, high-resolution remote sensing information from satellites and unmanned aerial vehicles (UAVs) revolutionizes the way these issues are addressed!",
        sections: [
          {
            text: "Thanks to incredibly precise images captured by satellites and unmanned aerial vehicles, our rivers appear like never before. This makes it easier to identify issues by illuminating their health, flow patterns, and surrounding ecosystems."
          },
          {
            text: "We can monitor changes in riverbanks, silt buildup, and water quality over time with high-quality data. This is essential for making informed judgments and identifying areas impacted by human activities, such as sand mining."
          },
          {
            text: "By using this data, we will be able to predict potential flooding events and create more robust response plans to safeguard communities, especially in areas where river degradation has increased the risk of flooding."
          },
          {
            text: "By using this data to monitor ecosystems along rivers, we can make sure that we can take action to conserve species even if human activities like sand mining and deforestation frequently harm biodiversity."
          },
          {
            text: "We can involve local people in river management activities thanks to amazing images. Everyone is better able to understand the challenges, particularly how practices like sand mining are harming our rivers, and share their opinions."
          },
          {
            text: "We can solve the problem of river degradation and create better waterways for everybody by using high-resolution remote sensing data. Together, let's protect our rivers and make sure they thrive for future generations!"
          }
        ]
      }
    },

    // 18. Applications of Drones/UAVs (Exact from reference)
    {
      id: 18,
      category: 'Drone/UAV',
      author: 'TerraquaUAV Solutions',
      date: 'Feb 26, 2023',
      readTime: '1 min read',
      title: 'Applications of Drones/UAVs',
      excerpt: 'Drones have a wide range of applications across various industries, some of which are: Aerial photography and videography...',
      views: 3,
      comments: 0,
      initialLikes: 1,
      customImage: (
        <div style={{
          position: 'relative',
          height: '220px',
          overflow: 'hidden',
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {/* Framed Graphic Box */}
          <div style={{ border: '2px solid rgba(255,255,255,0.85)', padding: '12px 16px', borderRadius: '4px', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', maxWidth: '90%' }}>
            <h4 style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.3, margin: '0 0 6px 0', letterSpacing: '0.5px' }}>
              THE SKY'S THE LIMIT:<br />
              EXPLORING THE MANY APPLICATIONS OF DRONES
            </h4>
            <span style={{ fontSize: '0.62rem', color: '#E2E8F0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
              POWERED BY INNOVATION WITH DRONE: 3D SURVEY, FLIGHT GIS
            </span>
          </div>
        </div>
      ),
      content: {
        intro: "Drones have a wide range of applications across various industries, some of which are:",
        sections: [
          {
            points: [
              "Aerial photography and videography: Drones equipped with cameras are commonly used in film and television production, real estate, and tourism industries to capture aerial footage.",
              "Surveying and mapping: Drones can be used to survey land and map out terrain, making them useful in fields such as construction, agriculture, and urban planning.",
              "Delivery services: Drones can be used for quick and efficient delivery of packages and goods, especially in areas with difficult terrain or limited infrastructure.",
              "Search and rescue: Drones can be used in search and rescue operations to quickly and safely locate missing persons or survey disaster zones.",
              "Agricultural monitoring: Drones can be used to monitor crop health, estimate yields, and assess soil conditions, helping farmers optimize their production.",
              "Infrastructure inspection: Drones can be used to inspect and maintain infrastructure such as bridges, power lines, and pipelines, reducing the need for costly and risky human inspections.",
              "Environmental monitoring: Drones can be used to monitor and track wildlife, survey forests, and measure air and water quality, aiding in conservation efforts.",
              "Military and security applications: Drones are used for intelligence gathering, reconnaissance, and surveillance purposes by the military and security agencies."
            ]
          }
        ]
      }
    }
  ]

  const handleLike = (postId, e) => {
    if (e) e.stopPropagation()
    setLikes(prev => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1
    }))
  }

  const handleOpenPost = (post) => {
    setSelectedPost(post)
    setCurrentSlideIndex(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    setSelectedPost(null)
    window.scrollTo({ top: 200, behavior: 'smooth' })
  }

  // ==========================================
  // OFF-WHITE DETAILED ARTICLE PAGE VIEW
  // ==========================================
  if (selectedPost) {
    const currentLikes = (selectedPost.initialLikes || 0) + (likes[selectedPost.id] || 0)

    return (
      <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh', paddingBottom: '100px' }}>
        {/* STICKY TOP NAVIGATION BAR */}
        <div style={{
          position: 'sticky',
          top: '72px',
          zIndex: 90,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          padding: '14px 24px'
        }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <button
              onClick={handleBack}
              style={{
                background: '#F1F5F9',
                border: '1px solid #CBD5E1',
                color: '#0F172A',
                padding: '8px 18px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FF6A00'
                e.currentTarget.style.color = '#FFFFFF'
                e.currentTarget.style.borderColor = '#FF6A00'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F1F5F9'
                e.currentTarget.style.color = '#0F172A'
                e.currentTarget.style.borderColor = '#CBD5E1'
              }}
            >
              <ArrowLeft size={18} /> Back to Blog Posts
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748B' }}>
              <span>Infozest</span>
              <ChevronRight size={14} />
              <span style={{ color: '#00B5E2', fontWeight: 600 }}>{selectedPost.category}</span>
            </div>
          </div>
        </div>

        {/* ARTICLE CONTAINER */}
        <article style={{ maxWidth: '920px', margin: '40px auto 0', padding: '0 24px' }}>
          {/* ARTICLE HEADER */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(255, 106, 0, 0.12)',
              border: '1px solid rgba(255, 106, 0, 0.3)',
              color: '#FF6A00',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '16px',
              letterSpacing: '0.04em'
            }}>
              {selectedPost.category.toUpperCase()}
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 2.9rem)',
              color: '#0F172A',
              fontWeight: 800,
              lineHeight: 1.25,
              letterSpacing: '-0.03em',
              marginBottom: '20px'
            }}>
              {selectedPost.title}
            </h1>

            {/* AUTHOR AND META BAR */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '24px',
              borderBottom: '1px solid #E2E8F0',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src="/image.png"
                  alt="TerrAqua Logo"
                  style={{ height: '52px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap' }}>
                    {selectedPost.author}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {selectedPost.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {selectedPost.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* LIKE & SHARE BUTTONS */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={(e) => handleLike(selectedPost.id, e)}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '24px',
                    padding: '8px 16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    color: '#FF6A00',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Heart size={16} fill="#FF6A00" color="#FF6A00" />
                  <span>{currentLikes}</span>
                </button>

                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href)
                      alert('Article link copied to clipboard!')
                    }
                  }}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '24px',
                    padding: '8px 14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    color: '#64748B',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>
          </div>

          {/* ARTICLE BANNER / VISUAL / SLIDER */}
          {selectedPost.slides && selectedPost.slides.length > 0 ? (
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
                border: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                {/* Main Slide Image */}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '350px', background: '#FAFAFA', padding: '10px 0' }}>
                  <img
                    src={selectedPost.slides[currentSlideIndex].img}
                    alt={selectedPost.slides[currentSlideIndex].title || selectedPost.title}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      maxHeight: '750px',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {/* Slider Controls Bar */}
                <div style={{
                  width: '100%',
                  padding: '14px 20px',
                  backgroundColor: '#FFFFFF',
                  borderTop: '1px solid #F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  {/* Previous / Next Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => setCurrentSlideIndex(prev => (prev === 0 ? selectedPost.slides.length - 1 : prev - 1))}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        background: '#F8FAFC',
                        color: '#0F172A',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FF6A00'
                        e.currentTarget.style.color = '#FFF'
                        e.currentTarget.style.borderColor = '#FF6A00'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F8FAFC'
                        e.currentTarget.style.color = '#0F172A'
                        e.currentTarget.style.borderColor = '#CBD5E1'
                      }}
                    >
                      <ArrowLeft size={16} /> Prev
                    </button>

                    <button
                      onClick={() => setCurrentSlideIndex(prev => (prev === selectedPost.slides.length - 1 ? 0 : prev + 1))}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        background: '#F8FAFC',
                        color: '#0F172A',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FF6A00'
                        e.currentTarget.style.color = '#FFF'
                        e.currentTarget.style.borderColor = '#FF6A00'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F8FAFC'
                        e.currentTarget.style.color = '#0F172A'
                        e.currentTarget.style.borderColor = '#CBD5E1'
                      }}
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Slide Name & Counter Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 600 }}>
                      {selectedPost.slides[currentSlideIndex].title}
                    </span>
                    <span style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      background: 'rgba(0, 181, 226, 0.12)',
                      color: '#0084A8',
                      padding: '3px 10px',
                      borderRadius: '12px'
                    }}>
                      {currentSlideIndex + 1} / {selectedPost.slides.length}
                    </span>
                  </div>

                  {/* Dot Indicators */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {selectedPost.slides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentSlideIndex(dotIdx)}
                        style={{
                          width: currentSlideIndex === dotIdx ? '22px' : '8px',
                          height: '8px',
                          borderRadius: '4px',
                          backgroundColor: currentSlideIndex === dotIdx ? '#FF6A00' : '#CBD5E1',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          padding: 0
                        }}
                        title={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              marginBottom: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {selectedPost.imgUrl ? (
                <img
                  src={selectedPost.imgUrl}
                  alt={selectedPost.title}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '16px',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              ) : (
                <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
                  {selectedPost.customImage}
                </div>
              )}
            </div>
          )}

          {/* ARTICLE CONTENT BODY */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '48px 44px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)'
          }}>
            {/* INTRO PARAGRAPH */}
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#334155',
              fontWeight: 500,
              marginBottom: '36px',
              borderLeft: '4px solid #FF6A00',
              paddingLeft: '20px'
            }}>
              {selectedPost.content.intro}
            </p>

            {/* BODY SECTIONS */}
            {selectedPost.content.sections && selectedPost.content.sections.map((sec, idx) => (
              <div key={idx} style={{ marginBottom: '24px' }}>
                {sec.heading && (
                  <h2 style={{
                    fontSize: '1.55rem',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em'
                  }}>
                    {sec.heading}
                  </h2>
                )}

                {sec.text && (
                  <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.75',
                    color: '#475569',
                    marginBottom: '20px'
                  }}>
                    {sec.text}
                  </p>
                )}

                {sec.points && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '16px' }}>
                    {sec.points.map((pt, pIdx) => (
                      <div key={pIdx} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        background: '#F8FAFC',
                        padding: '16px 20px',
                        borderRadius: '12px',
                        border: '1px solid #E2E8F0'
                      }}>
                        <CheckCircle2 size={20} color="#00B5E2" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ color: '#334155', fontSize: '0.98rem', lineHeight: '1.6' }}>
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CALL TO ACTION BOX */}
            <div style={{
              marginTop: '48px',
              background: 'linear-gradient(135deg, #0A1D3D 0%, #050F24 100%)',
              borderRadius: '20px',
              padding: '36px',
              color: '#FFFFFF',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Ready to transform your operations with <span style={{ color: '#FF7A29' }}>TerrAqua UAV</span>?
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto 24px' }}>
                Connect with our GIS and remote sensing specialists for custom UAV deployments, WebGIS analytics, and proof-of-concept demonstrations.
              </p>
              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('contact')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="btn-primary"
                style={{
                  padding: '12px 30px',
                  fontSize: '0.95rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Contact Our Specialists <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </article>
      </div>
    )
  }

  // ==========================================
  // DEFAULT BLOG LISTING VIEW (OFF-WHITE THEME - ALL 18 CARDS)
  // ==========================================
  return (
    <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* 1. HERO COLLAGE BANNER */}
      <section
        style={{
          position: 'relative',
          padding: '80px 24px 70px',
          background: `linear-gradient(180deg, rgba(5, 15, 36, 0.78) 0%, rgba(5, 15, 36, 0.88) 100%), url(${blogBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
              color: '#FFFFFF',
              fontWeight: 400,
              letterSpacing: '-0.04em',
              lineHeight: 1.25,
              margin: '0 auto',
              maxWidth: '1050px',
              textTransform: 'uppercase'
            }}
          >
            CHECKOUT OUR BLOG POSTS FOR ESSENTIAL<br />
            INFORMATION ON <span style={{ color: 'var(--color-aqua, #00B5E2)', fontWeight: 400 }}>GEOSPATIAL INTELLIGENCE'</span>
          </h1>
        </div>
      </section>

      {/* 2. BLOG POST CARDS GRID - ON OFF-WHITE BACKGROUND */}
      <section style={{ maxWidth: '1360px', margin: '50px auto 0', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '28px'
          }}
        >
          {blogPosts.map((post) => {
            const currentLikes = (post.initialLikes || 0) + (likes[post.id] || 0)
            return (
              <div
                key={post.id}
                onClick={() => handleOpenPost(post)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(15, 23, 42, 0.04)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  outline: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = '#CBD5E1'
                  e.currentTarget.style.boxShadow = '0 14px 34px rgba(15, 23, 42, 0.08)'
                  const img = e.currentTarget.querySelector('.card-img-zoom')
                  if (img) img.style.transform = 'scale(1.05)'
                  const title = e.currentTarget.querySelector('.card-title-text')
                  if (title) title.style.color = '#0A1D3D'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = '#E2E8F0'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(15, 23, 42, 0.04)'
                  const img = e.currentTarget.querySelector('.card-img-zoom')
                  if (img) img.style.transform = 'scale(1)'
                  const title = e.currentTarget.querySelector('.card-title-text')
                  if (title) title.style.color = '#0F172A'
                }}
              >
                {/* Top Banner Image / Custom Layout */}
                {post.customImage ? (
                  <div style={{ overflow: 'hidden' }}>
                    {post.customImage}
                  </div>
                ) : (
                  <div style={{ height: '220px', overflow: 'hidden', background: '#F1F5F9', position: 'relative' }}>
                    <img
                      className="card-img-zoom"
                      src={post.imgUrl}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                  </div>
                )}

                {/* Card Body */}
                <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Author & Meta Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {/* Circular Logo Avatar */}
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: '#0A1D3D',
                        border: '1px solid rgba(0, 181, 226, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        flexShrink: 0
                      }}>
                        <img
                          src="/image.png"
                          alt="TerrAqua Logo"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Stacked Author & Date */}
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span style={{ fontSize: '0.84rem', color: '#0F172A', fontWeight: 700, lineHeight: 1.2 }}>
                          {post.author}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px', lineHeight: 1.2 }}>
                          {post.date} • {post.readTime}
                        </span>
                      </div>
                    </div>
                    <MoreVertical size={16} color="#94A3B8" style={{ cursor: 'pointer', flexShrink: 0 }} />
                  </div>

                  {/* Post Title */}
                  <h3
                    className="card-title-text"
                    style={{
                      fontSize: '1.08rem',
                      color: '#0F172A',
                      fontWeight: 700,
                      marginBottom: '10px',
                      lineHeight: 1.35,
                      letterSpacing: '-0.02em',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      color: '#475569',
                      fontSize: '0.86rem',
                      lineHeight: '1.6',
                      margin: 0,
                      flex: 1
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
