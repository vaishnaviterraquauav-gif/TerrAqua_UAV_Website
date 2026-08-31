import React, { useState } from 'react'
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
      customImage: (
        <div style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF7ED 100%)', padding: '16px', height: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,106,0,0.2)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 2 }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#FF6A00', fontWeight: 800, letterSpacing: '0.5px', display: 'block' }}>Map, Track,</span>
              <span style={{ fontSize: '0.85rem', color: '#00B5E2', fontWeight: 800, letterSpacing: '0.5px' }}>Collect, Share</span>
            </div>
            <span style={{ background: '#FF6A00', color: '#FFF', fontSize: '0.68rem', padding: '4px 10px', borderRadius: '14px', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              DOWNLOAD <Download size={10} />
            </span>
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.95)', padding: '10px 14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2, border: '1px solid rgba(0, 181, 226, 0.3)' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#00B5E2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#FFF', fontSize: '0.85rem' }}>
              MZ
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: 700, display: 'block' }}>MapZest App</span>
              <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>High-Precision Mobile WebGIS</span>
            </div>
          </div>
        </div>
      ),
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
      author: 'TerrAquaUAV Solutions',
      date: 'Feb 25, 2025',
      readTime: '3 min read',
      title: "Unlocking the Power of Web GIS with TerrAqua UAV's Mapzest Ecosystem",
      excerpt: 'In a world where location data drives critical decisions, Web GIS platforms have become essential tools across industries. From managing natural resources to responding...',
      views: 12,
      comments: 0,
      initialLikes: 1,
      imgUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
      content: {
        intro: "Spatial intelligence is no longer restricted to specialized GIS desktop software. TerrAqua UAV's cloud-native MapZest ecosystem brings massive multi-gigabyte raster datasets, 3D point clouds, and multispectral analysis directly to your web browser with zero latency.",
        sections: [
          {
            heading: "The Shift Towards Cloud-Native Spatial Analytics",
            text: "Traditional GIS analysis suffered from immense computational bottlenecks: heavy datasets had to be downloaded locally onto high-end workstations. MapZest solves this by utilizing cloud-optimized GeoTIFFs (COGs) and dynamic vector tile pyramids to stream multi-gigabyte drone orthomosaics instantaneously across global teams."
          },
          {
            heading: "Comprehensive GIS Capabilities in the Cloud",
            points: [
              "Real-Time Volumetric Measurement: Calculate cut-and-fill volume for mines, quarries, and construction sites directly in 3D browser space.",
              "Multispectral Band Arithmetic: Generate NDVI, NDRE, and false-color infrared composites on the fly without manual pre-processing.",
              "Multi-Temporal Change Detection: Swipe and compare drone survey flights across different dates to visually inspect civil project progress or flood inundation changes."
            ]
          }
        ]
      }
    },

    // 3. ASEAN ScaleHub Bali
    {
      id: 3,
      category: 'Data',
      author: 'TerrAquaUAV Solutions',
      date: 'Jul 4, 2025',
      readTime: '1 min read',
      title: 'TerrAqua UAV Joins ASEAN ScaleHub 2025 in Bali',
      excerpt: 'Exciting times for TerrAqua UAV! Our co-founder and director is proudly representing us at the ASEAN ScaleHub 2025 in Bali. This global platform...',
      views: 9,
      comments: 0,
      initialLikes: 7,
      imgUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      content: {
        intro: "TerrAqua UAV has been selected to represent Indian deep-tech innovation at the prestigious ASEAN ScaleHub 2025 summit held in Bali, Indonesia. This milestone marks our expansion into Southeast Asian environmental monitoring and smart agritech markets.",
        sections: [
          {
            heading: "Showcasing IIT Kanpur-Incubated Technology Globally",
            text: "During the summit, our leadership team presented our proprietary UAV hardware and MapZest geospatial platform to international enterprise leaders, venture capitalists, and government disaster management delegates from over 10 Southeast Asian nations."
          }
        ]
      }
    },

    // 4. Flood Response Newspaper Feature
    {
      id: 4,
      category: 'Drone/UAV',
      author: 'TerrAquaUAV Solutions',
      date: 'May 8, 2025',
      readTime: '1 min read',
      title: "TerrAqua UAV's Flood Response Innovation Featured in Leading Newspapers",
      excerpt: 'We are honored to share that our work at TerrAqua UAV has been featured in multiple newspapers. Our contribution to the development of a...',
      views: 15,
      comments: 0,
      initialLikes: 4,
      customImage: (
        <div style={{ background: '#111827', padding: '16px', height: '220px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00B5E2' }}>TERRAQUA UAV</span>
            <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>AMAR UJALA • 04-05-2025</span>
          </div>
          <div style={{ background: '#FFFFFF', padding: '12px', borderRadius: '8px', color: '#000000', margin: '6px 0' }}>
            <h4 style={{ fontSize: '0.88rem', fontWeight: 800, margin: '0 0 4px 0', lineHeight: 1.2 }}>
              आईआईटी का ऐप बताएगा बाढ़ से कितना इलाका होगा प्रभावित
            </h4>
            <span style={{ fontSize: '0.68rem', color: '#4B5563' }}>प्रो. राजीव सिन्हा की देखरेख में टेराक्वा यूएवी स्टार्टअप ने विकसित की एप्लिकेशन</span>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 600 }}>National Press Coverage Feature</span>
        </div>
      ),
      content: {
        intro: "TerrAqua UAV's pioneering work in developing autonomous aerial flood prediction and real-time inundation mapping systems has been prominently spotlighted across national print and digital media, including Amar Ujala, Dainik Jagran, The Times of India, and ThePrint.",
        sections: [
          {
            heading: "Breakthrough Flood Risk Modeling at IIT Kanpur",
            text: "Developed under the scientific mentorship of Prof. Rajiv Sinha at SIIC IIT Kanpur, our deep-tech application merges hydrodynamic elevation models with live UAV thermal and optical imagery to calculate exactly which neighborhoods and infrastructure corridors will be inundated hours before flood waters peak."
          }
        ]
      }
    },

    // 5. From Data to Action (NTT DATA)
    {
      id: 5,
      category: 'Data',
      author: 'TerrAquaUAV Solutions',
      date: 'May 6, 2025',
      readTime: '1 min read',
      title: 'From Data to Action: Launching of the Flood Disaster Response Platform',
      excerpt: 'We are proud to announce the successful launch of our web-based Flood Disaster Response System, a significant step toward building disaster resilient communities...',
      views: 7,
      comments: 0,
      initialLikes: 1,
      customImage: (
        <div style={{ background: '#0F172A', padding: '16px', height: '220px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FF6A00' }}>TERRAQUA UAV</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#00B5E2' }}>NTT DATA</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#10B981', fontWeight: 700, display: 'block', marginBottom: '4px' }}>Launch Event</span>
            <h4 style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 700, margin: 0 }}>Flood Disaster Response System</h4>
          </div>
          <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Drone & Satellite Remote Sensing Technology</span>
        </div>
      ),
      content: {
        intro: "In collaborative partnership with global IT leader NTT DATA, TerrAqua UAV proudly announces the formal rollout of the Flood Disaster Response System (FDRS) — a state-of-the-art decision-support portal for crisis mitigation.",
        sections: [
          {
            heading: "Bridging the Gap Between Aerial Data and Ground Action",
            text: "During flood emergencies, data fragmentation causes delays in dispatching rescue boats and relief supplies. The FDRS platform ingests high-resolution UAV orthomosaics, satellite radar imagery, and ground sensor feeds into a unified real-time dashboard."
          }
        ]
      }
    },

    // 6. Launch Event Poster
    {
      id: 6,
      category: 'Launch Event',
      author: 'TerrAquaUAV Solutions',
      date: 'May 3, 2025',
      readTime: '2 min read',
      title: 'Launch Event: TerrAqua UAV Flood Disaster Response System',
      excerpt: 'Team TerrAqua UAV is honored to present the official launch of our Flood Disaster Response System—an advanced crisis mitigation platform.',
      views: 18,
      comments: 0,
      initialLikes: 5,
      customImage: (
        <div style={{ background: 'linear-gradient(135deg, #0A1D3D 0%, #12324D 100%)', padding: '16px', height: '220px', borderBottom: '1px solid rgba(0,181,226,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#00B5E2' }}>TERRAQUA UAV</span>
            <span style={{ background: '#FF6A00', color: '#FFF', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>OFFICIAL LAUNCH</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(0,181,226,0.3)', textAlign: 'center' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#FFFFFF', fontWeight: 700, margin: '0 0 4px 0' }}>
              Flood Disaster Response System
            </h4>
            <span style={{ fontSize: '0.68rem', color: '#8BADC1' }}>Using Drone & Satellite Remote Sensing Technology</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600 }}>Date: May 2nd, 2025 • SIIC IIT Kanpur</span>
        </div>
      ),
      content: {
        intro: "On May 2nd, 2025, TerrAqua UAV hosted the official launch event of its next-generation Flood Disaster Response System. The hybrid event brought together civil protection leaders, hydrologists, and remote sensing pioneers.",
        sections: [
          {
            heading: "Event Highlights & Keynote Addresses",
            text: "The event featured live drone telemetry streaming demonstrations from test sites along the Ganges river basin directly into the command portal, proving instantaneous water velocity analysis."
          }
        ]
      }
    },

    // 7. Operation Dronagiri Selection
    {
      id: 7,
      category: 'Awards',
      author: 'TerrAquaUAV Solutions',
      date: 'Apr 18, 2025',
      readTime: '2 min read',
      title: 'TerrAqua UAV Shines at Operation Dronagiri: Pioneering Geospatial...',
      excerpt: 'Proud Moment for TerrAqua UAV Solutions! We are happy to announce that TerrAqua UAV Solutions has been selected for Operation Dronagiri...',
      views: 32,
      comments: 0,
      initialLikes: 14,
      customImage: (
        <div style={{ background: 'linear-gradient(135deg, #050F24 0%, #1A2E40 100%)', padding: '16px', height: '220px', borderBottom: '1px solid rgba(255,106,0,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#FF7A29' }}>DST • GOVT OF INDIA</span>
            <span style={{ background: '#10B981', color: '#FFF', fontSize: '0.65rem', padding: '3px 8px', borderRadius: '10px', fontWeight: 700 }}>SELECTED</span>
          </div>
          <div style={{ background: 'rgba(255,106,0,0.1)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(255,106,0,0.3)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.68rem', color: '#FF6A00', fontWeight: 700, textTransform: 'uppercase' }}>Growth Stage Cohort</span>
            <h4 style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 800, margin: '4px 0 0 0' }}>Operation Dronagiri</h4>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>National Geospatial Mission Accelerator</span>
        </div>
      ),
      content: {
        intro: "TerrAqua UAV Solutions has achieved a landmark milestone by being officially selected for Operation Dronagiri (Growth Stage) — the flagship geospatial mission spearheaded by the Department of Science and Technology (DST), Government of India.",
        sections: [
          {
            heading: "What is Operation Dronagiri?",
            text: "Operation Dronagiri is a prestigious national initiative designed to fast-track deep-tech Indian enterprises revolutionizing geospatial mapping, autonomous drone operations, and spatial digital twins for national infrastructure."
          }
        ]
      }
    },

    // 8. Citi Social Innovation Lab 3.0
    {
      id: 8,
      category: 'Recognition',
      author: 'TerrAquaUAV Solutions',
      date: 'Feb 14, 2025',
      readTime: '2 min read',
      title: "TerrAqua UAV Joins Citi's Social Innovation Lab 3.0",
      excerpt: "We're thrilled to announce that TerrAqua UAV has been selected for the Cohort of Social Innovation Lab 3.0 by Citi under the Early-Stage Agritech Domain! This...",
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
        intro: "TerrAqua UAV has been officially selected for the prestigious Social Innovation Lab (SIL) 3.0 cohort supported by Citi Foundation and IIT Kanpur, competing in the Early-Stage Agritech and Rural Resilience domain.",
        sections: [
          {
            heading: "Empowering Agritech Innovation",
            text: "This partnership supports our mission to bring low-cost, high-precision multispectral drone analytics directly to smallholder farming communities to optimize fertilizer usage and boost crop yield."
          }
        ]
      }
    },

    // 9. Fieldwork Chronicles
    {
      id: 9,
      category: 'Fieldwork',
      author: 'TerrAquaUAV Solutions',
      date: 'Feb 10, 2025',
      readTime: '2 min read',
      title: 'Harnessing Geospatial Intelligence for a Sustainable Future',
      excerpt: "At TerrAqua UAV, fieldwork goes beyond data collection—it's about understanding landscapes, communities, and the challenges they face...",
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
        intro: "True geospatial intelligence is forged in the field. Our Fieldwork Chronicles series documents how TerrAqua UAV flight engineers and geologists brave challenging terrains to generate high-fidelity spatial models for ecological conservation.",
        sections: [
          {
            heading: "Fieldwork on the Frontlines",
            text: "From dense wetland mangrove estuaries in southern India to high-altitude Himalayan landslide corridors, our team deploys custom multi-rotor and hybrid VTOL UAVs equipped with RTK base stations to achieve sub-centimeter survey accuracy."
          }
        ]
      }
    },

    // 10. Pichavaram Mangrove
    {
      id: 10,
      category: 'Case Study',
      author: 'TerrAquaUAV Solutions',
      date: 'Jan 15, 2025',
      readTime: '3 min read',
      title: 'Exploring Pichavaram Mangrove Forest: A Natural Wonder.',
      excerpt: 'The Pichavaram Mangrove Forest, near Chidambaram in Tamil Nadu, is one of the largest mangrove ecosystems in India, spanning over 1,100 hectares...',
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
        intro: "The Pichavaram Mangrove Forest in Tamil Nadu represents a crucial ecological barrier against coastal storm surges and tsunamis. TerrAqua UAV conducted an exhaustive multispectral and LiDAR survey to audit mangrove health and tidal canal siltation.",
        sections: [
          {
            heading: "Ecological Challenges Addressed",
            text: "Using drone multispectral NDVI imagery, our researchers identified localized mangrove dieback caused by hyper-salinity and blocked tidal creeks, enabling the Tamil Nadu forest department to execute targeted canal desiltation."
          }
        ]
      }
    },

    // 11. Abhivyakti'25 IIT Kanpur
    {
      id: 11,
      category: 'Exhibition',
      author: 'TerrAquaUAV Solutions',
      date: 'Jan 8, 2025',
      readTime: '1 min read',
      title: "TerrAqua UAV Solutions at #Abhivyakti'25, IIT Kanpur",
      excerpt: "Being part of Abhivyakti'25 at IIT Kanpur was an incredible experience for Team TerrAqua UAV. It was an honor to showcase our advanced...",
      views: 16,
      comments: 0,
      initialLikes: 6,
      imgUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
      content: {
        intro: "At Abhivyakti'25 — IIT Kanpur's annual flagship deep-tech innovation festival — TerrAqua UAV had the privilege of demonstrating its enterprise drone fleet and MapZest WebGIS platform to faculty, industry leaders, and student innovators.",
        sections: [
          {
            heading: "Showcasing Indigenous R&D",
            text: "Visitors experienced live interactive demos of our MapZest 3D reality mesh viewer and observed our high-end LiDAR sensor payloads up close."
          }
        ]
      }
    },

    // 12. Closing Day ASEAN Festival
    {
      id: 12,
      category: 'Global Events',
      author: 'TerrAquaUAV Solutions',
      date: 'Dec 18, 2024',
      readTime: '2 min read',
      title: 'Closing Day Highlights: ASEAN Startup Festival 2024',
      excerpt: 'We wrapped up a wonderful experience at the ASEAN Startup Festival 2024, feeling grateful for the meaningful connections, insights, and...',
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
        intro: "Concluding three intensive days of B2B roundtables and investor pitches at the ASEAN Startup Festival 2024, TerrAqua UAV established key relationships for deploying drone GIS technologies across Southeast Asian smart cities.",
        sections: [
          {
            heading: "Festival Outcomes",
            text: "Our team concluded the festival with multiple preliminary agreements for pilot flood management implementations across member countries."
          }
        ]
      }
    },

    // 13. Dainik Jagran Feature
    {
      id: 13,
      category: 'Press & Media',
      author: 'TerrAquaUAV Solutions',
      date: 'Dec 4, 2024',
      readTime: '1 min read',
      title: 'TerrAqua UAV Featured in Dainik Jagran!',
      excerpt: "Proud to share that TerrAqua UAV was featured in today's Dainik Jagran! Starting from IIT Kanpur under the Faculty Entrepreneurship model...",
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
        intro: "Dainik Jagran spotlighted TerrAqua UAV's unique academic-industry bridge under the Faculty Entrepreneurship Policy at IIT Kanpur, celebrating our indigenous technologies solving real-world natural resource and flood challenges.",
        sections: [
          {
            heading: "From Academic Rigor to Market Commercialization",
            text: "The feature underscores how over two decades of earth science and river research by Prof. Rajiv Sinha transitioned into an agile commercial UAV enterprise."
          }
        ]
      }
    },

    // 14. ASEAN Startup Festival Showcase
    {
      id: 14,
      category: 'Global Events',
      author: 'TerrAquaUAV Solutions',
      date: 'Dec 1, 2024',
      readTime: '1 min read',
      title: 'TerrAqua UAV Solutions Shines at ASEAN Startup Festival 2024',
      excerpt: 'Thank you for the warm reception! We were honored to showcase TerrAqua UAV Solutions at the ASEAN Startup Festival 2024 in Delhi...',
      views: 17,
      comments: 0,
      initialLikes: 6,
      imgUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      content: {
        intro: "Day 1 of the ASEAN Startup Festival 2024 in New Delhi witnessed high-level engagement at the TerrAqua UAV pavilion from international trade delegates interested in our drone DaaS (Drone as a Service) business model.",
        sections: [
          {
            heading: "Showcase Highlights",
            text: "We demonstrated real-time data ingestion pipelines from our field UAVs into cloud WebGIS architectures with live volumetric point clouds."
          }
        ]
      }
    },

    // 15. About TerrAqua UAV Solutions
    {
      id: 15,
      category: 'Company Profile',
      author: 'TerrAquaUAV Solutions',
      date: 'Nov 15, 2024',
      readTime: '3 min read',
      title: 'About TerrAqua UAV Solutions',
      excerpt: 'TerrAqua UAV was founded by Prof. Rajiv Sinha and researchers at Indian Institute of Technology, Kanpur and incubated at Startup Incubation and Innovation Centre...',
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
        intro: "TerrAqua UAV Solutions is an advanced airborne remote sensing and geospatial intelligence enterprise incubated at the Startup Incubation and Innovation Centre (SIIC), IIT Kanpur. Founded by world-renowned river scientist Prof. Rajiv Sinha, we combine rigorous academic research with cutting-edge drone hardware and cloud software.",
        sections: [
          {
            heading: "Our Vision",
            text: "To be a global leader in geospatial intelligence by delivering innovative, high-precision, and practical solutions that solve critical real-world challenges in natural resource management, disaster mitigation, and smart infrastructure."
          },
          {
            heading: "Our Core Offerings",
            points: [
              "Operations DaaS: Turnkey UAV data acquisition with LiDAR, multispectral, and high-res RGB sensors.",
              "Analytics DPaaS: Specialized photogrammetry and cloud-native AI data processing pipelines.",
              "Intelligence SaaS: MapZest cloud platform for real-time spatial visualization and fleet management."
            ]
          }
        ]
      }
    },

    // 16. Hands-On With Newly Procured Drone
    {
      id: 16,
      category: 'Hardware & Tech',
      author: 'TerrAquaUAV Solutions',
      date: 'Nov 7, 2024',
      readTime: '2 min read',
      title: "Enhancing Geospatial Innovation with Indigenous Excellence- TerrAqua UAV's...",
      excerpt: "At TerrAqua UAV, innovation and excellence fuel our journey toward new possibilities. We're excited to announce the procurement and testing of our advanced...",
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
            <span style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Heavy-Lift Hexacopter & Long-Range VTOL Testing</span>
          </div>
          <span style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600 }}>Field Calibration & Payload Integration</span>
        </div>
      ),
      content: {
        intro: "To meet growing demand for large-scale national infrastructure and mining surveys, TerrAqua UAV has expanded its fleet with state-of-the-art heavy-lift industrial hexacopters and long-endurance hybrid VTOL UAVs.",
        sections: [
          {
            heading: "Technical Specifications & Capabilities",
            text: "The new UAV platforms offer up to 2.5 hours of continuous flight endurance, triple-redundant avionics, and high-payload capacity capable of carrying combined LiDAR and 100MP photogrammetric camera payloads simultaneously."
          }
        ]
      }
    },

    // 17. River Basin Mapping & Management (Exact from reference)
    {
      id: 17,
      category: 'Research & GIS',
      author: 'TerrAquaUAV Solutions',
      date: 'Nov 16, 2024',
      readTime: '2 min read',
      title: 'River Basin Mapping and Management',
      excerpt: 'Because they supply water, transit, and recreational possibilities, rivers are essential lifelines for our communities. Effective...',
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
        intro: "Because they supply water, transit, and recreational possibilities, rivers are essential lifelines for our communities. Effective management and mapping of river basins is paramount to preventing seasonal flood disasters, safeguarding drinking water reservoirs, and maintaining agricultural soil fertility.",
        sections: [
          {
            heading: "Integrated Multi-Sensor River Hydrodynamics",
            text: "TerrAqua UAV combines high-resolution airborne LiDAR scanning, multispectral bathymetry, and satellite radar datasets to produce continuous Digital Elevation Models (DEMs) across entire catchment areas."
          },
          {
            heading: "Core Applications in River Basin Governance",
            points: [
              "Channel Migration & Embankment Erosion: Pinpoint fragile riverbank sections vulnerable to collapse during monsoon peak flows.",
              "Sedimentation & Siltation Auditing: Measure volume changes in riverbeds and reservoir storage capacities.",
              "Riparian Buffer Zone Monitoring: Track vegetation health and illegal encroachment along active floodplains."
            ]
          }
        ]
      }
    },

    // 18. Applications of Drones/UAVs (Exact from reference)
    {
      id: 18,
      category: 'Drone/UAV',
      author: 'TerrAquaUAV Solutions',
      date: 'Feb 25, 2023',
      readTime: '1 min read',
      title: 'Applications of Drones/UAVs',
      excerpt: 'Drones have a wide range of applications across various industries, some of which are: Aerial photography and videography. Drones...',
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
        intro: "Drones have rapidly evolved from military reconnaissance tools into indispensable industrial instruments. Across agriculture, civil infrastructure, mining, disaster relief, and media, unmanned aerial vehicles (UAVs) deliver speed, safety, and sub-centimeter spatial accuracy that was previously impossible.",
        sections: [
          {
            heading: "Transforming Core Industrial Verticals",
            text: "By eliminating the hazardous need for human inspectors to climb tall communication towers, navigate unstable mining slopes, or enter flood zones, enterprise UAVs streamline operations while reducing operational costs by up to 75%."
          },
          {
            heading: "Major Real-World Application Domains",
            points: [
              "Precision Agriculture: Multispectral crop vigor scouting, variable rate nutrient spraying, and automated yield predictions.",
              "Infrastructure Inspection: High-resolution crack detection on bridges, highway corridor mapping, and solar farm thermal auditing.",
              "Disaster Management: Rapid flood extent mapping, emergency search & rescue coordination, and post-crisis damage audits.",
              "Environmental Conservation: Carbon stock estimation, forestry canopy analysis, and wildlife migration tracking."
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

          {/* ARTICLE BANNER / VISUAL */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '40px',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
            border: '1px solid #E2E8F0'
          }}>
            {selectedPost.imgUrl ? (
              <img
                src={selectedPost.imgUrl}
                alt={selectedPost.title}
                style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              selectedPost.customImage
            )}
          </div>

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
              <div key={idx} style={{ marginBottom: '36px' }}>
                <h2 style={{
                  fontSize: '1.55rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em'
                }}>
                  {sec.heading}
                </h2>

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
          background: 'linear-gradient(180deg, rgba(5, 15, 36, 0.82) 0%, rgba(5, 15, 36, 0.92) 100%), url("/blog-banner.jpg")',
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
