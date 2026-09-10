import React, { useEffect, useState } from "react";

const TICK_MS = 80;
const TOTAL = 130; // ~10.4s cycle

// ─── DATA ──────────────────────────────────────────────────────────────────

const SY = [50, 140, 230, 320, 410, 500]; // sensor center-y values

const SENSORS = [
  {
    label: "OPTICAL",
    desc: "High-res RGB at centimetre resolution",
    color: "#00B5E2",
    img: "https://www.aerialarchives.com/stock/img/AHLS2010.jpg",
    cy: SY[0],
    start: 5,
    hubPt: [520, 222],
    path: "M 320,50 C 420,50 475,222 520,222",
  },
  {
    label: "MULTISPECTRAL",
    desc: "Vegetation indices & chlorophyll mapping",
    color: "#10B981",
    img: "https://images.ctfassets.net/go54bjdzbrgi/Gnyanm5R34C0jM7FMXJoB/ab89c851265f594f87c2d686c3206b2e/Pix4Dfields-SIPI-2-index.jpg",
    cy: SY[1],
    start: 16,
    hubPt: [508, 244],
    path: "M 320,140 C 418,140 465,244 508,244",
  },
  {
    label: "THERMAL",
    desc: "Surface temperature & heat anomaly detection",
    color: "#F97316",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGRVg7ymlqbAnq9-CfEimZ14c_oHSYKitR6zfFDGcJRA&s=10",
    cy: SY[2],
    start: 27,
    hubPt: [503, 265],
    path: "M 320,230 C 418,230 460,265 503,265",
  },
  {
    label: "HYPERSPECTRAL",
    desc: "400+ spectral bands for mineralogy",
    color: "#8B5CF6",
    img: "https://earthdaily.com/hubfs/Imported_Blog_Media/SpecTIR_PCA123_social.png",
    cy: SY[3],
    start: 38,
    hubPt: [503, 285],
    path: "M 320,320 C 418,320 460,285 503,285",
  },
  {
    label: "LIDAR",
    desc: "3D point clouds & terrain elevation models",
    color: "#3B82F6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6beD67f2UhPA1-s3Ks5JXNb8aAJGQ_-zvFVcsVZrGw&s=10",
    cy: SY[4],
    start: 49,
    hubPt: [508, 306],
    path: "M 320,410 C 418,410 465,306 508,306",
  },
  {
    label: "RADAR",
    desc: "All-weather surface texture mapping",
    color: "#EC4899",
    img: "https://www.noaa.gov/sites/default/files/styles/square_width_428/public/2023-08/supercell.png?itok=F0uKdv8k",
    cy: SY[5],
    start: 60,
    hubPt: [520, 328],
    path: "M 320,500 C 420,500 475,328 520,328",
  },
];

const PROCS = [
  { label: "Biomass Estimation", desc: "Vegetation carbon quantification", color: "#10B981", start: 74, y: 370 },
  { label: "Hydro Modeling", desc: "Watershed & flood dynamics", color: "#00B5E2", start: 83, y: 414 },
  { label: "Land Use Analysis", desc: "Terrain & cover classification", color: "#F97316", start: 92, y: 458 },
  { label: "Conservation Reports", desc: "Actionable field intelligence", color: "#8B5CF6", start: 101, y: 502 },
];

const CARD_W = 182;
const CARD_H = 222;
const IMG_H = 128;

// Output card top-left (x,y), output-path exits hub right-arc at hubExit
const OUTS = [
  {
    title: "Natural Resource",
    title2: "Management",
    sub: "Hydro Models",
    color: "#00B5E2",
    x: 882,
    y: 44,
    start: 76,
    hubExit: [658, 222],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYP3o78czQCQZzNZkr9bF24ZKVlW6uzR53K1UBIiLIkQ&s=10",
    path: "M 658,222 C 755,200 825,155 882,155",
  },
  {
    title: "Wetland",
    title2: "Conservation",
    sub: "AI Reports",
    color: "#10B981",
    x: 1082,
    y: 44,
    start: 86,
    hubExit: [658, 222],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnVqzxWbMbPNk9iPeYmseck2F9bBV2xAp3t4OlHkNfQ&s=10",
    path: "M 658,222 C 860,210 960,155 1082,155",
  },
  {
    title: "Mining",
    title2: "Assessment",
    sub: "LiDAR Analysis",
    color: "#F97316",
    x: 882,
    y: 280,
    start: 96,
    hubExit: [658, 328],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wl-AtwevNrnb46r3z7z8fJnvgLzFkbFFbjpPUW9iJA&s=10",
    path: "M 658,328 C 755,350 825,391 882,391",
  },
  {
    title: "Forest",
    title2: "Conservation",
    sub: "Biomass Data",
    color: "#8B5CF6",
    x: 1082,
    y: 280,
    start: 106,
    hubExit: [658, 328],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOYoA5q5VHMX8PqovjLLeOK-OUgD52oU8Y1jZNmej4w&s=10",
    path: "M 658,328 C 860,340 960,391 1082,391",
  },
];

// Hub geometry
const HX = 590, HY = 275, HR = 88;

// Animated particles along a bezier path
function Particles({ path, color, active, dur = 1.8 }) {
  if (!active) return null;
  return (
    <>
      {[0, 1, 2].map((i) => (
        <circle key={i} r="3" fill={color} opacity={0}>
          <animateMotion path={path} dur={`${dur}s`} begin={`${(i * dur) / 3}s`} repeatCount="indefinite" />
          <animate
            attributeName="opacity"
            values="0;0.85;0.85;0"
            keyTimes="0;0.12;0.82;1"
            dur={`${dur}s`}
            begin={`${(i * dur) / 3}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </>
  );
}

export default function DataToDecisions() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % TOTAL), TICK_MS);
    return () => clearInterval(id);
  }, []);

  const on = (s) => tick >= s;
  const cloudOn = on(68);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: 'var(--font-universal)',
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "clamp(20px, 3.5vw, 32px)" }}>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            color: "var(--text-heading-dark, #0A1D3D)",
            fontFamily: "var(--font-universal)",
          }}
        >
          From Data to <span style={{ color: "var(--color-orange, #FF6A00)" }}>Decisions</span>
        </h2>
      </div>

      {/* Main SVG Diagram */}
      <div
        style={{
          width: "100%",
          maxWidth: "1340px",
          margin: "0 auto",
          padding: "10px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <svg
          viewBox="0 0 1290 568"
          style={{
            width: "100%",
            maxWidth: "1290px",
            height: "auto",
            display: "block",
            borderRadius: "16px",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Filters */}
            <filter id="card-shadow" x="-8%" y="-8%" width="116%" height="116%">
              <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.07" />
            </filter>
            <filter id="hub-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="12" floodColor="#0d9488" floodOpacity="0.18" />
            </filter>
            <filter id="pglow" x="-150%" y="-150%" width="400%" height="400%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Radial gradient for hub */}
            <radialGradient id="hub-grad" cx="40%" cy="35%">
              <stop offset="0%" stopColor="#134e4a" />
              <stop offset="100%" stopColor="#0f2d2a" />
            </radialGradient>
            <radialGradient id="hub-shine" cx="30%" cy="25%">
              <stop offset="0%" stopColor="white" stopOpacity="0.12" />
              <stop offset="70%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            {/* Sensor photo clip paths (circle) */}
            {SENSORS.map((s, i) => (
              <clipPath key={i} id={`sc${i}`}>
                <circle cx={60} cy={s.cy} r={33} />
              </clipPath>
            ))}

            {/* Output card clip paths (top rounded rect for photo) */}
            {OUTS.map((o, i) => (
              <clipPath key={i} id={`oc${i}`}>
                <rect x={o.x} y={o.y} width={CARD_W} height={IMG_H} rx="10" />
              </clipPath>
            ))}

            {/* Card overlay (gradient bottom-fade) */}
            <linearGradient id="imgfade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
            </linearGradient>

            {/* Central hub circle clip path */}
            <clipPath id="hub-circle-clip">
              <circle cx={HX} cy={HY} r={HR} />
            </clipPath>

            {/* Satellite gradients in sleek black theme */}
            <linearGradient id="sat-solar" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="50%" stopColor="#1C2541" />
              <stop offset="100%" stopColor="#050B14" />
            </linearGradient>
            <linearGradient id="sat-black" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2D3748" />
              <stop offset="40%" stopColor="#1A202C" />
              <stop offset="100%" stopColor="#0A0E17" />
            </linearGradient>
            <linearGradient id="sat-metal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A5568" />
              <stop offset="50%" stopColor="#2D3748" />
              <stop offset="100%" stopColor="#1A202C" />
            </linearGradient>
            <linearGradient id="sat-beam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00B5E2" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#00B5E2" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ── BACKGROUND ZONES ── */}
          {/* Left zone tint */}
          <rect x={0} y={0} width={330} height={568} fill="#F4F7F6" rx={12} />
          {/* Right zone tint */}
          <rect x={868} y={0} width={422} height={568} fill="#F4F7F6" rx={12} />

          {/* Zone separator lines */}
          <line x1={330} y1={36} x2={330} y2={556} stroke="#d1d5db" strokeWidth={0.6} />
          <line x1={868} y1={36} x2={868} y2={556} stroke="#d1d5db" strokeWidth={0.6} />

          {/* ── SENSOR CONNECTION PATHS ── */}
          {SENSORS.map((s, i) => {
            const active = on(s.start);
            return (
              <g key={i}>
                {/* Background guide line */}
                <path d={s.path} fill="none" stroke="#e2e8f0" strokeWidth={1.5} />
                {/* Active line */}
                {active && (
                  <path
                    d={s.path}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={1.5}
                    strokeOpacity={0.5}
                    strokeDasharray="5,4"
                  >
                    <animate attributeName="stroke-dashoffset" values="90;0" dur="1.2s" repeatCount="indefinite" />
                  </path>
                )}
                <Particles path={s.path} color={s.color} active={active} dur={1.6 + i * 0.08} />
              </g>
            );
          })}

          {/* ── OUTPUT CONNECTION PATHS ── */}
          {OUTS.map((o, i) => {
            const active = on(o.start);
            return (
              <g key={i}>
                <path d={o.path} fill="none" stroke="#e2e8f0" strokeWidth={1.5} />
                {active && (
                  <path d={o.path} fill="none" stroke={o.color} strokeWidth={1.5} strokeOpacity={0.5} strokeDasharray="5,4">
                    <animate attributeName="stroke-dashoffset" values="90;0" dur="1.2s" repeatCount="indefinite" />
                  </path>
                )}
                <Particles path={o.path} color={o.color} active={active} dur={1.5 + i * 0.1} />
              </g>
            );
          })}

          {/* ── SENSOR LENSES (LEFT) ── */}
          {SENSORS.map((s, i) => {
            const active = on(s.start);
            return (
              <g key={i}>
                {/* Glow ring */}
                {active && (
                  <circle cx={60} cy={s.cy} r={38} fill={s.color} opacity={0.08}>
                    <animate attributeName="r" values="34;42;34" dur="2.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.05;0.14;0.05" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Photo */}
                <image
                  href={s.img}
                  x={27}
                  y={s.cy - 33}
                  width={66}
                  height={66}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#sc${i})`}
                  opacity={active ? 1 : 0.3}
                />

                {/* Lens border */}
                <circle
                  cx={60}
                  cy={s.cy}
                  r={33}
                  fill="none"
                  stroke={active ? s.color : "#cbd5e1"}
                  strokeWidth={active ? 2.5 : 1.5}
                />

                {/* Number badge */}
                <circle cx={82} cy={s.cy - 22} r={10} fill={active ? s.color : "#e2e8f0"} />
                <text
                  x={82}
                  y={s.cy - 18}
                  textAnchor="middle"
                  fill={active ? "white" : "#94a3b8"}
                  fontSize={8}
                  fontWeight={700}
                >
                  {String(i + 1).padStart(2, "0")}
                </text>

                {/* Label + description */}
                <text
                  x={104}
                  y={s.cy - 6}
                  fill={active ? "#0f172a" : "#94a3b8"}
                  fontSize={11}
                  fontWeight={700}
                  letterSpacing="0.8"
                >
                  {s.label}
                </text>
                <text x={104} y={s.cy + 10} fill={active ? "#64748b" : "#cbd5e1"} fontSize={8.5}>
                  {s.desc}
                </text>

                {/* Connection dot on right edge */}
                <circle cx={320} cy={s.cy} r={4} fill={active ? s.color : "#e2e8f0"} />
              </g>
            );
          })}

          {/* ── TERRAQUA HUB (CENTER) ── */}

          {/* Outer pulse ring */}
          {cloudOn && (
            <circle cx={HX} cy={HY} r={HR + 18} fill="none" stroke="#0d9488" strokeWidth={1} opacity={0.15}>
              <animate attributeName="r" values={`${HR + 14};${HR + 28};${HR + 14}`} dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.12;0;0.12" dur="3s" repeatCount="indefinite" />
            </circle>
          )}

          {/* Rotating Earth/Satellite Hub Image */}
          <g clipPath="url(#hub-circle-clip)">
            {/* Base dark backdrop with shadow */}
            <circle cx={HX} cy={HY} r={HR} fill="#06181d" filter="url(#hub-shadow)" />

            {/* Rotating image */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${HX} ${HY}`}
                to={`360 ${HX} ${HY}`}
                dur="40s"
                repeatCount="indefinite"
              />
              <image
                href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVN99i-Fx1XLv3Pw1Tc_Y3ErqYTwzsxilDPcni0ODFQ&s=10"
                x={HX - HR - 18}
                y={HY - HR - 18}
                width={(HR + 18) * 2}
                height={(HR + 18) * 2}
                preserveAspectRatio="xMidYMid slice"
                opacity={0.88}
              />
            </g>

            {/* Subtle atmospheric tint overlay for depth */}
            <circle cx={HX} cy={HY} r={HR} fill="url(#hub-shine)" />
            <circle cx={HX} cy={HY} r={HR} fill="rgba(8, 25, 30, 0.42)" />
          </g>

          {/* Glowing Hub Border Ring */}
          <circle
            cx={HX}
            cy={HY}
            r={HR}
            fill="none"
            stroke="#0d9488"
            strokeWidth={2}
            strokeOpacity={cloudOn ? 0.9 : 0.45}
            filter="url(#hub-shadow)"
          />
          <circle
            cx={HX}
            cy={HY}
            r={HR + 2}
            fill="none"
            stroke="#0d9488"
            strokeWidth={1}
            strokeOpacity={cloudOn ? 0.6 : 0.25}
          />

          {/* Decorative inner ring */}
          <circle cx={HX} cy={HY} r={HR - 10} fill="none" stroke="#ffffff" strokeWidth={0.5} strokeOpacity={0.2} />

          {/* Hub label */}
          <text
            x={HX}
            y={HY - 14}
            textAnchor="middle"
            fill="#ffffff"
            fontSize={15}
            fontWeight={800}
            letterSpacing="2.5"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 0 12px rgba(13, 148, 136, 0.8)' }}
          >
            TERRAQUA
          </text>
          <text
            x={HX}
            y={HY + 6}
            textAnchor="middle"
            fill="#5eead4"
            fontSize={10}
            letterSpacing="4"
            fontWeight={700}
            style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.9)' }}
          >
            UAV
          </text>
          <text
            x={HX}
            y={HY + 24}
            textAnchor="middle"
            fill="#e2e8f0"
            fontSize={8.5}
            letterSpacing="2"
            fontWeight={600}
            style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.9)' }}
          >
            CLOUD INTELLIGENCE
          </text>

          {/* Connection dot: hub left-arc entry points */}
          {SENSORS.map((s, i) => (
            <circle
              key={i}
              cx={s.hubPt[0]}
              cy={s.hubPt[1]}
              r={3.5}
              fill={on(s.start) ? s.color : "#cbd5e1"}
            />
          ))}

          {/* Hub → process connector line */}
          <line x1={HX} y1={HY + HR} x2={HX} y2={362} stroke="#e2e8f0" strokeWidth={1} />
          {cloudOn && (
            <line x1={HX} y1={HY + HR} x2={HX} y2={362} stroke="#0d9488" strokeWidth={1} strokeOpacity={0.4}>
              <animate attributeName="stroke-dashoffset" values="40;0" dur="0.8s" repeatCount="indefinite" />
            </line>
          )}

          {/* ── PROCESS INDICATORS ── */}
          {PROCS.map((p, i) => {
            const active = on(p.start);
            const px = HX - 125;
            return (
              <g key={i}>
                {/* Card background */}
                <rect
                  x={px}
                  y={p.y}
                  width={250}
                  height={36}
                  rx={8}
                  fill={active ? "white" : "#F7F9F8"}
                  stroke={active ? p.color : "#e2e8f0"}
                  strokeWidth={active ? 1.5 : 1}
                  filter={active ? "url(#card-shadow)" : undefined}
                />
                {/* Left accent bar */}
                <rect x={px} y={p.y + 8} width={4} height={20} rx={2} fill={active ? p.color : "#e2e8f0"} />
                {/* Process label */}
                <text
                  x={px + 16}
                  y={p.y + 16}
                  fill={active ? "#0f172a" : "#94a3b8"}
                  fontSize={10}
                  fontWeight={700}
                  letterSpacing="0.3"
                >
                  {p.label}
                </text>
                <text x={px + 16} y={p.y + 28} fill={active ? "#64748b" : "#cbd5e1"} fontSize={8}>
                  {p.desc}
                </text>
                {/* Right dot */}
                <circle cx={px + 242} cy={p.y + 18} r={3} fill={active ? p.color : "#e2e8f0"} />

                {/* Activity pulse */}
                {active && (
                  <circle cx={px + 242} cy={p.y + 18} r={6} fill={p.color} opacity={0}>
                    <animate attributeName="r" values="3;10;3" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Connector from hub center x to process */}
                {i === 0 && (
                  <line x1={HX} y1={362} x2={HX} y2={p.y} stroke="#e2e8f0" strokeWidth={1} />
                )}
                {i > 0 && (
                  <line x1={HX} y1={PROCS[i - 1].y + 36} x2={HX} y2={p.y} stroke="#e2e8f0" strokeWidth={1} />
                )}
              </g>
            );
          })}

          {/* ── OUTPUT CARDS (RIGHT) ── */}
          {OUTS.map((o, i) => {
            const active = on(o.start);
            const centerY = o.y + CARD_H / 2;
            return (
              <g key={i}>
                {/* Card */}
                <rect
                  x={o.x}
                  y={o.y}
                  width={CARD_W}
                  height={CARD_H}
                  rx={12}
                  fill="white"
                  stroke={active ? o.color : "#e2e8f0"}
                  strokeWidth={active ? 2 : 1}
                  filter="url(#card-shadow)"
                />

                {/* Photo */}
                <image
                  href={o.img}
                  x={o.x}
                  y={o.y}
                  width={CARD_W}
                  height={IMG_H}
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#oc${i})`}
                  opacity={active ? 1 : 0.35}
                />

                {/* Photo bottom fade */}
                <rect x={o.x} y={o.y + IMG_H - 32} width={CARD_W} height={32} fill="url(#imgfade)" clipPath={`url(#oc${i})`} />

                {/* Color chip on photo */}
                <rect
                  x={o.x + 10}
                  y={o.y + 10}
                  width={60}
                  height={18}
                  rx={9}
                  fill={active ? o.color : "#e2e8f0"}
                  opacity={active ? 0.95 : 0.5}
                />
                <text x={o.x + 40} y={o.y + 23} textAnchor="middle" fill="white" fontSize={7.5} fontWeight={700} letterSpacing="1">
                  {o.sub.toUpperCase()}
                </text>

                {/* Info area */}
                <text x={o.x + 12} y={o.y + IMG_H + 22} fill={active ? "#0f172a" : "#94a3b8"} fontSize={11} fontWeight={700}>
                  {o.title}
                </text>
                <text x={o.x + 12} y={o.y + IMG_H + 38} fill={active ? "#0f172a" : "#94a3b8"} fontSize={11} fontWeight={700}>
                  {o.title2}
                </text>
                <text x={o.x + 12} y={o.y + IMG_H + 55} fill={active ? o.color : "#cbd5e1"} fontSize={8.5} fontWeight={600} letterSpacing="0.5">
                  {active ? "● Live Insights" : "○ Awaiting data"}
                </text>

                {/* Bottom color bar */}
                <rect x={o.x} y={o.y + CARD_H - 4} width={CARD_W} height={4} rx={12} fill={active ? o.color : "#e2e8f0"} />

                {/* Connection entry dot */}
                <circle cx={o.x} cy={centerY} r={4.5} fill={active ? o.color : "#e2e8f0"} />
              </g>
            );
          })}

          {/* ── REALISTIC EARTH OBSERVATION SATELLITE (above hub) ── */}
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-4; 0,0"
              dur="4s"
              repeatCount="indefinite"
            />
            <g transform={`translate(${HX}, ${HY - HR - 28}) scale(0.5)`}>
              {/* Downlink Signal Beam to Earth Hub */}
              <polygon
                points="0,26 -22,64 22,64"
                fill="url(#sat-beam)"
                opacity={cloudOn ? 0.7 : 0.25}
              >
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
              </polygon>

              {/* Animated Data Signal Beam pulses */}
              <line
                x1="0"
                y1="28"
                x2="0"
                y2="66"
                stroke={cloudOn ? "#00B5E2" : "#94a3b8"}
                strokeWidth="2"
                strokeDasharray="4,4"
              >
                <animate attributeName="stroke-dashoffset" values="16;0" dur="0.75s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
              </line>

              {/* Contact pulse dot on hub boundary */}
              {cloudOn && (
                <circle cx="0" cy="66" r="3.5" fill="#00B5E2">
                  <animate attributeName="r" values="2.5;6;2.5" dur="1.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.2s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Satellite subtle orbital tilt */}
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="-3 0 0; 3 0 0; -3 0 0"
                  dur="6s"
                  repeatCount="indefinite"
                />

                {/* Left Solar Array Wing */}
                <rect x="-72" y="-1.5" width="28" height="3" fill="url(#sat-metal)" rx="1" />
                <rect
                  x="-74"
                  y="-18"
                  width="46"
                  height="36"
                  rx="3"
                  fill="url(#sat-solar)"
                  stroke="#334155"
                  strokeWidth="1.2"
                  filter="drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6))"
                />
                {/* Solar Cell Grid Lines (Left) */}
                <line x1="-59" y1="-18" x2="-59" y2="18" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="-44" y1="-18" x2="-44" y2="18" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="-74" y1="-6" x2="-28" y2="-6" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="-74" y1="6" x2="-28" y2="6" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />

                {/* Right Solar Array Wing */}
                <rect x="44" y="-1.5" width="28" height="3" fill="url(#sat-metal)" rx="1" />
                <rect
                  x="28"
                  y="-18"
                  width="46"
                  height="36"
                  rx="3"
                  fill="url(#sat-solar)"
                  stroke="#334155"
                  strokeWidth="1.2"
                  filter="drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6))"
                />
                {/* Solar Cell Grid Lines (Right) */}
                <line x1="43" y1="-18" x2="43" y2="18" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="58" y1="-18" x2="58" y2="18" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="28" y1="-6" x2="74" y2="-6" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="28" y1="6" x2="74" y2="6" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.8" />

                {/* Satellite Central Chassis (Sleek Matte Black Obsidian) */}
                <rect
                  x="-16"
                  y="-16"
                  width="32"
                  height="32"
                  rx="4"
                  fill="url(#sat-black)"
                  stroke="#475569"
                  strokeWidth="1.2"
                  filter="drop-shadow(0 4px 10px rgba(0, 0, 0, 0.6))"
                />

                {/* Instrument Deck & Star Tracker (Top) */}
                <rect x="-9" y="-23" width="18" height="8" rx="2" fill="url(#sat-metal)" stroke="#475569" strokeWidth="0.8" />
                <ellipse cx="0" cy="-23" rx="4.5" ry="2" fill="#00B5E2" stroke="#00E5FF" strokeWidth="0.8" />
                <line x1="-12" y1="-16" x2="-16" y2="-28" stroke="#64748B" strokeWidth="1" strokeLinecap="round" />
                <circle cx="-16" cy="-28" r="1.5" fill="#00E5FF" />
                <line x1="12" y1="-16" x2="16" y2="-28" stroke="#64748B" strokeWidth="1" strokeLinecap="round" />
                <circle cx="16" cy="-28" r="1.5" fill="#00E5FF" />

                {/* Front Payload Sensor Housing */}
                <rect x="-11" y="-8" width="22" height="18" rx="3" fill="#030712" stroke="#00B5E2" strokeWidth="1" />
                <circle cx="-4.5" cy="1" r="2.5" fill="#10B981">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
                </circle>
                <circle cx="4.5" cy="1" r="2.5" fill="#00E5FF" />

                {/* Parabolic Downlink Antenna Dish (Bottom) */}
                <line x1="0" y1="16" x2="0" y2="24" stroke="#475569" strokeWidth="2" />
                <path
                  d="M -16,23 Q 0,31 16,23"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <ellipse cx="0" cy="24" rx="12" ry="3" fill="url(#sat-metal)" stroke="#475569" strokeWidth="0.8" />
                {/* Sub-reflector feed */}
                <line x1="0" y1="24" x2="0" y2="30" stroke="#00B5E2" strokeWidth="1.8" />
                <circle cx="0" cy="30" r="2" fill="#00E5FF" />
              </g>
            </g>
          </g>

        </svg>
      </div>
    </div>
  );
}
