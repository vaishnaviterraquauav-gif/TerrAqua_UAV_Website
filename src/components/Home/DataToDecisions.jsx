import React from "react";
import { CheckCircle2 } from "lucide-react";

// Sensor Input Data
const SENSORS = [
  {
    label: "Optical RGB",
    desc: "Centimetre resolution mapping",
    img: "https://www.aerialarchives.com/stock/img/AHLS2010.jpg",
  },
  {
    label: "Multispectral",
    desc: "Vegetation & chlorophyll index",
    img: "https://images.ctfassets.net/go54bjdzbrgi/Gnyanm5R34C0jM7FMXJoB/ab89c851265f594f87c2d686c3206b2e/Pix4Dfields-SIPI-2-index.jpg",
  },
  {
    label: "Thermal InfraRed",
    desc: "Surface temperature anomaly",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRVg7ymlqbAnq9-CfEimZ14c_oHSYKitR6zfFDGcJRA&s=10",
  },
  {
    label: "Hyperspectral",
    desc: "400+ band spectral mineralogy",
    img: "https://earthdaily.com/hubfs/Imported_Blog_Media/SpecTIR_PCA123_social.png",
  },
  {
    label: "LiDAR Point Cloud",
    desc: "3D terrain elevation models",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6beD67f2UhPA1-s3Ks5JXNb8aAJGQ_-zvFVcsVZrGw&s=10",
  },
  {
    label: "Radar SAR",
    desc: "All-weather surface mapping",
    img: "https://www.noaa.gov/sites/default/files/styles/square_width_428/public/2023-08/supercell.png?itok=F0uKdv8k",
  },
];

// Stage 2 Core Analytics Engine (Balanced 6 items to eliminate empty card space)
const ANALYTICS = [
  { label: "Radiometric Calibration", desc: "Reflectance & atmospheric correction" },
  { label: "AI Feature Extraction", desc: "Deep neural net semantic segmentation" },
  { label: "Hydrodynamic Modeling", desc: "Watershed & runoff simulations" },
  { label: "3D Mesh Generation", desc: "Digital twin surface reconstruction" },
  { label: "Geospatial Cloud Archiving", desc: "GIS-ready spatial database indexing" },
  { label: "Automated Insights Engine", desc: "Real-time field intelligence reporting" },
];

// Stage 3 Output Deliverables
const OUTPUTS = [
  {
    title: "Natural Resource Mgmt",
    sub: "Hydro Models",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYP3o78czQCQZzNZkr9bF24ZKVlW6uzR53K1UBIiLIkQ&s=10",
  },
  {
    title: "Wetland Conservation",
    sub: "AI Reports",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnVqzxWbMbPNk9iPeYmseck2F9bBV2xAp3t4OlHkNfQ&s=10",
  },
  {
    title: "Mining Assessment",
    sub: "LiDAR Volumetrics",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wl-AtwevNrnb46r3z7z8fJnvgLzFkbFFbjpPUW9iJA&s=10",
  },
  {
    title: "Forest Canopy Data",
    sub: "Biomass Indices",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOYoA5q5VHMX8PqovjLLeOK-OUgD52oU8Y1jZNmej4w&s=10",
  },
];

function PipelineArrow() {
  return (
    <div className="d2d-connector-arrow">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 4,12 L 20,12" />
        <path d="M 14,6 L 20,12 L 14,18" />
      </svg>
    </div>
  );
}

export default function DataToDecisions() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "clamp(30px, 5vw, 60px) clamp(16px, 4vw, 24px)",
        fontFamily: "var(--font-universal)",
      }}
    >
      <style>{`
        @keyframes d2dRotateEarth {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes d2dArrowPulse {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.65;
          }
          50% {
            transform: translateX(8px);
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(13, 148, 136, 0.75));
          }
        }

        @keyframes d2dArrowPulseMobile {
          0%, 100% {
            transform: translateY(0) rotate(90deg);
            opacity: 0.65;
          }
          50% {
            transform: translateY(8px) rotate(90deg);
            opacity: 1;
            filter: drop-shadow(0 0 8px rgba(13, 148, 136, 0.75));
          }
        }
        
        .d2d-pipeline-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: stretch;
          gap: 12px;
        }

        .d2d-stage-card {
          background: #FFFFFF;
          border: 1px solid rgba(27, 54, 73, 0.1);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px -10px rgba(15, 23, 42, 0.05);
          transition: all 0.3s ease;
        }
        .d2d-stage-card:hover {
          border-color: rgba(13, 148, 136, 0.3);
          box-shadow: 0 16px 36px -10px rgba(13, 148, 136, 0.1);
        }

        .d2d-sensor-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 10px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          transition: background 0.2s ease;
        }
        .d2d-sensor-pill:hover {
          background: #F1F5F9;
        }

        .d2d-output-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        .d2d-output-card:hover {
          transform: translateY(-2px);
          border-color: #CBD5E1;
        }

        .d2d-connector-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2px;
        }
        .d2d-connector-arrow svg {
          animation: d2dArrowPulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @media (max-width: 991px) {
          .d2d-pipeline-grid {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .d2d-connector-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px 0;
          }
          .d2d-connector-arrow svg {
            animation: d2dArrowPulseMobile 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "clamp(24px, 3.5vw, 40px)" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            color: "var(--text-heading-dark, #0A1D3D)",
          }}
        >
          From Data to <span style={{ color: "var(--color-orange, #FF6A00)" }}>Decisions</span>
        </h2>
        <p
          style={{
            margin: "10px 0 0 0",
            fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)",
            color: "#64748B",
            maxWidth: "640px",
            marginInline: "auto",
          }}
        >
          Structured workflow transforming multi-sensor airborne & orbital telemetry into actionable field intelligence.
        </p>
      </div>

      {/* Main Connected 3-Stage Pipeline Layout */}
      <div className="d2d-pipeline-grid">
        {/* STAGE 1: SENSOR DATA CAPTURE */}
        <div className="d2d-stage-card" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "16px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0D9488", letterSpacing: "0.1em" }}>
              STAGE 01
            </span>
            <h3 style={{ margin: "2px 0 0 0", fontSize: "1.2rem", fontWeight: 700, color: "#0A1D3D" }}>
              Multi-Sensor Capture
            </h3>
          </div>
          <p style={{ margin: "0 0 16px 0", fontSize: "0.85rem", color: "#64748B", lineHeight: 1.4 }}>
            Airborne drone and satellite payload sensors capturing multi-spectral telemetry.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {SENSORS.map((s, i) => (
              <div key={i} className="d2d-sensor-pill">
                <img
                  src={s.img}
                  alt={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "1px solid #CBD5E1",
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0A1D3D" }}>{s.label}</div>
                  <div style={{ fontSize: "0.76rem", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {s.desc}
                  </div>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94A3B8" }}>0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONNECTOR ARROW 1 -> 2 */}
        <PipelineArrow />

        {/* STAGE 2: SATELLITE & TERRAQUA CLOUD INTELLIGENCE */}
        <div className="d2d-stage-card" style={{ display: "flex", flexDirection: "column", background: "#F8FAFC" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0D9488", letterSpacing: "0.1em" }}>
                STAGE 02
              </span>
              <h3 style={{ margin: "2px 0 0 0", fontSize: "1.2rem", fontWeight: 700, color: "#0A1D3D" }}>
                Satellite & Cloud Hub
              </h3>
            </div>

            {/* Rotating Earth Orb in Header */}
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #0D9488",
                boxShadow: "0 0 12px rgba(13, 148, 136, 0.35)",
                flexShrink: 0,
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVN99i-Fx1XLv3Pw1Tc_Y3ErqYTwzsxilDPcni0ODFQ&s=10"
                alt="Rotating Earth"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  animation: "d2dRotateEarth 32s linear infinite",
                }}
              />
            </div>
          </div>

          <p style={{ margin: "0 0 16px 0", fontSize: "0.85rem", color: "#64748B", lineHeight: 1.4 }}>
            Automated cloud infrastructure ingesting multi-spectral telemetry & executing spatial AI models.
          </p>

          {/* Processing Steps */}
          <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "10px" }}>
            CORE ANALYTICS ENGINE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {ANALYTICS.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 12px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "10px",
                }}
              >
                <CheckCircle2 size={16} style={{ color: "#0D9488", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#0A1D3D" }}>{item.label}</div>
                  <div style={{ fontSize: "0.74rem", color: "#64748B", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONNECTOR ARROW 2 -> 3 */}
        <PipelineArrow />

        {/* STAGE 3: ACTIONABLE DECISION OUTPUTS */}
        <div className="d2d-stage-card" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "16px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0D9488", letterSpacing: "0.1em" }}>
              STAGE 03
            </span>
            <h3 style={{ margin: "2px 0 0 0", fontSize: "1.2rem", fontWeight: 700, color: "#0A1D3D" }}>
              Decision Outputs
            </h3>
          </div>
          <p style={{ margin: "0 0 16px 0", fontSize: "0.85rem", color: "#64748B", lineHeight: 1.4 }}>
            Actionable spatial insights & environmental intelligence reports for field deployment.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "auto" }}>
            {OUTPUTS.map((o, i) => (
              <div key={i} className="d2d-output-card">
                <img
                  src={o.img}
                  alt={o.title}
                  style={{ width: "100%", height: "90px", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "10px 12px" }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0A1D3D", lineHeight: 1.2 }}>
                    {o.title}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#0D9488", fontWeight: 600, marginTop: "4px" }}>
                    {o.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
